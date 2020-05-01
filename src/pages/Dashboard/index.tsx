import React from 'react';
import { FiArrowRight, FiGithub, FiSearch } from 'react-icons/fi';

import { Logo, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Logo>
        <FiGithub size={40} />
        <p>
          <strong>Github</strong>
          <span>explorer</span>
        </p>
      </Logo>
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">
          Pesquisar
          <FiSearch size={22} />
        </button>
      </Form>

      <Repositories>
        <a href="/repository">
          <img
            src="https://avatars3.githubusercontent.com/u/55659197?s=460&u=c0c3565ad51e676592c2b47436c7ae99cb902eef&v=4"
            alt="João Filipe"
          />
          <div>
            <strong>Github explorer</strong>
            <p>An explorer of github repositories</p>
          </div>

          <FiArrowRight size={25} />
        </a>

        <a href="/repository">
          <img
            src="https://avatars3.githubusercontent.com/u/55659197?s=460&u=c0c3565ad51e676592c2b47436c7ae99cb902eef&v=4"
            alt="João Filipe"
          />
          <div>
            <strong>Github explorer</strong>
            <p>An explorer of github repositories</p>
          </div>

          <FiArrowRight size={25} />
        </a>

        <a href="/repository">
          <img
            src="https://avatars3.githubusercontent.com/u/55659197?s=460&u=c0c3565ad51e676592c2b47436c7ae99cb902eef&v=4"
            alt="João Filipe"
          />
          <div>
            <strong>Github explorer</strong>
            <p>An explorer of github repositories</p>
          </div>

          <FiArrowRight size={25} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
