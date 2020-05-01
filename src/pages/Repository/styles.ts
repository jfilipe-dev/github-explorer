import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: all 0.2s;
    font-size: 18px;

    &:hover {
      color: #6d71f9;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

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

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #565875;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #565875;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
