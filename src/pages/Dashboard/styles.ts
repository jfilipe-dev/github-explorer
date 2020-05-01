import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Logo = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #6d71f9;
    margin-right: 6px;
  }

  p {
    color: #565875;

    strong {
      font-size: 32px;
    }

    span {
      font-size: 24px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #565875;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #565875;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #ff0035;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-left: 4px;
    }

    width: 200px;
    height: 70px;
    background: #6d71f9;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.2, '#6D71F9')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff0035;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: all 0.2s;

    &:hover {
      transform: translateX(15px);

      strong,
      svg {
        color: #6d71f9;
      }
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #565875;
        transition: all 0.2s;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #a8a8b3;
      transition: all 0.2s;
    }
  }
`;
