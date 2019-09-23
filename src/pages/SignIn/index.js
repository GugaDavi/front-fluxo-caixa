import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <h1>Movimentações Torres e Torres</h1>
      <Form onSubmit={handleSubmit}>
        <span>E-mail:</span>
        <Input name="email" placeholder="email@email.com.br" />
        <span>Senha:</span>
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Entrar</button>
      </Form>
      <Link to="register">Registrar</Link>
    </Container>
  );
}
