import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 1000px;
  height: auto;
  background: #fff;
  margin: 100px auto;
  padding: 50px;

  button.move {
    border: 0px;
    padding: 10px;
    border-radius: 5px;
    background: rgb(58, 136, 113);
    color: #fff;
    transition: background 0.2s linear;

    &:hover {
      background: ${darken(0.03, "rgb(58, 136, 113)")};
    }
  }

  div.action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0px 30px;
  }

  table {
    width: 100%;

    thead {
      background: #eee;

      th {
        border: 1px solid #999;
      }
    }

    tbody {
      text-align: center;
      tr {
        td {
          padding: 10px 0px;
          border-bottom: 1px solid #eee;
        }
      }
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
    text-align: right;
  }

  .saldo input {
    border: 1px solid #097aff;
    border-radius: 5px;
    background: rgb(9, 122, 255, 0.5);
    box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.25);
    color: #fff;
    padding: 10px;
  }

  .saldo span {
    font-size: 20px;
    font-weight: bold;
  }

  .date input {
    border: 0px;
    border-bottom: 2px solid #000;
    color: #ccc;
    margin: 0px 10px;
  }

  .date button {
    padding: 5px;
    border: 0px;
    border-radius: 5px;
    background: #ffc209;
    color: #fff;
    transition: background 0.2s linear;

    &:hover {
      background: ${darken(0.03, "#ffc209")};
    }
  }
`;

export const AddMove = styled.form`
  background: rgb(166, 206, 57, 0.5);
  padding: 15px 10px;
  display: flex;

  flex-direction: column;

  div.infosMove {
    input {
      margin: 0px 5px;
      border: 1px solid #3a8871;
      border-radius: 4px;
      padding-left: 5px;
      font-size: 12px;
    }

    span {
      font-size: 12px;
    }
  }
  div.infosValue {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 12px;

    div {
      display: flex;
    }

    input {
      margin-right: 5px;
    }

    span {
      margin-right: 5px;
    }

    button {
      padding: 5px 5px;
      border: 0px;
      background: #1aa2b8;
      color: #fff;
      font-weight: bold;
      border-radius: 3px;
      transition: background 0.2s linear;

      &:hover {
        background: ${darken(0.03, "#1aa2b8")};
      }
    }
  }
`;
