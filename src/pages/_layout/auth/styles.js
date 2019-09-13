import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  color: #eee;

  a {
    color: #fff;
    opacity: 0.8;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 100%;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      border: 0px;
      border-radius: 4px;
      background: #fff;
      padding: 14px 20px;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.7);
      line-height: 21px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      & + input {
        margin-top: 10px;
      }
    }

    input::placeholder {
      font-size: 14px;
    }

    span {
      margin: 5px 0px;
      text-align: left;
    }

    button {
      background: #10315e;
      border-radius: 4px;
      font-size: 18px;
      line-height: 21px;
      border: 0px;
      padding: 13px 0px 15px;
      margin: 15px 0px;
      color: #eee;
      transition: background 0.3s linear;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &:hover {
        background: ${darken(0.05, '#10315E')};
      }
    }
  }
`;
