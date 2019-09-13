import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
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
