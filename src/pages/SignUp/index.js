import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <h1>Movimentações Torres e Torres</h1>
      <Form onSubmit={handleSubmit}>
        <span>Nome</span>
        <Input name="email" placeholder="Nome" />
        <span>E-mail</span>
        <Input name="email" placeholder="email@email.com.br" />
        <span>Senha</span>
        <Input name="password" type="password" placeholder="Sua Senha" />
        <span>Confirmação de Senha</span>
        <Input name="confirmPassword" type="password" placeholder="Confirmação da Senha" />
        <span>Token</span>
        <Input name="token" type="password" placeholder="Token" />

        <button type="submit">Criar Conta</button>
      </Form>
      <Link to="/">Login</Link>
    </Container>
  );
}
