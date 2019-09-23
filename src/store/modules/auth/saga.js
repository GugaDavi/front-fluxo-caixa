import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { type, token } = response.data;

    api.defaults.headers.Authorization = `${type} ${token}`;

    yield put(signInSuccess(type, token));
  } catch (error) {
    toast.warn('Email ou Senha Invalidos', 'Confira os dados');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { type, token } = payload.auth;

  if (type && token) {
    api.defaults.headers.Authorization = `${type} ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
