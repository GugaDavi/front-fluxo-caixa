import React, { Component } from "react";
import { MdArrowDownward, MdArrowUpward, MdArrowForward } from "react-icons/md";

import api from "../../services/api";
import { formatPrice } from "../../util/format";

import { Container, Infos, AddMove } from "./styles";

export default class Home extends Component {
  state = {
    selectDate: "",
    moves: [],
    saldo: "",
    newMove: true
  };

  async componentDidMount() {
    const response = await api.get("caixa");

    this.setState({ saldo: response.data.saldo });
  }

  handleDate = async e => {
    e.preventDefault();

    const { selectDate } = this.state;

    const response = await api.get(`moves?day=${selectDate}`);

    this.setState({ moves: response.data.selectMoves });
  };

  handleSetDate = e => {
    this.setState({ selectDate: e.target.value });
  };

  handleAddMove = () => {
    const { newMove } = this.state;
    this.setState({ newMove: !newMove });
  };

  render() {
    const { moves, saldo, newMove } = this.state;

    return (
      <Container>
        <Infos>
          <div className="date">
            <form onSubmit={this.handleDate}>
              <span>Data:</span>
              <input type="date" onChange={this.handleSetDate} />
              <button type="submit">Consultar</button>
            </form>
          </div>
          <div className="saldo">
            <span>Saldo:</span>
            <input type="text" disabled value={formatPrice(saldo)} />
          </div>
        </Infos>
        <div className="action">
          <button className="move" type="button" onClick={this.handleAddMove}>
            Nova Movimentação
          </button>
          {newMove ? (
            <>
              <MdArrowForward />
              <AddMove>
                <div className="infosMove">
                  <span>Usuario:</span>
                  <input type="text" name="user" />
                  <span>Descrição:</span>
                  <input type="text" name="description" />
                  <span>Valor: R$</span>
                  <input type="text" name="value" />
                </div>
                <div className="infosValue">
                  <div>
                    <input type="radio" name="entered" value="true" checked />
                    <span>Entrada</span>
                    <input type="radio" name="entered" value="false" />
                    <span>Saida</span>
                  </div>
                  <button type="submit">Inserir</button>
                </div>
              </AddMove>
            </>
          ) : null}
        </div>

        <table>
          <thead>
            <th>Usuario</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Status</th>
          </thead>
          <tbody>
            {moves.map(item => (
              <tr>
                <td>{item.user_name}</td>
                <td>{item.description}</td>
                <td>{formatPrice(item.value)}</td>
                <td>
                  {item.entered ? (
                    <MdArrowDownward color="rgb(58, 136, 113)" size={20} />
                  ) : (
                    <MdArrowUpward color="red" size={20} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    );
  }
}
