import React, { Component } from "react";

import { Container, Inputs } from "./styles";

export default class Login extends Component {
  state = {};

  render() {
    return (
      <Container>
        <form>
          <h1>Caixa TM</h1>
          <Inputs>
            <span>Email:</span>
            <input type="text" placeholder="Email" />
            <span>Senha:</span>
            <input type="password" placeholder="Senha" />
            <button type="button">Entrar</button>
          </Inputs>
        </form>
      </Container>
    );
  }
}
