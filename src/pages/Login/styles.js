import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 400px;
  background: #fff;
  color: #999;
  text-align: center;
  margin: 100px auto;
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.8);
  border-radius: 5px;

  form {
    display: flex;
    flex-direction: column;
    padding: 50px;

    h1 {
      font-size: 48px;
      margin-bottom: 30px;
      color: rgb(58, 136, 113);
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px;

  input {
    flex: 1;
    margin-bottom: 20px;
    margin-top: 10px;
    border: 1px solid rgb(58, 136, 113);
    padding: 5px;
    border-radius: 5px;
  }

  button {
    border: 0;
    padding: 10px 0px;
    max-width: 100px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px rgb(0, 0, 0, 0.3);
    background: #097aff;
    color: #fff;
    font-weight: bold;
  }
`;
