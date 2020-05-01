import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiGithub, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import { Header, Logo, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      console.log(console.log);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <Logo>
          <FiGithub size={40} />
          <p>
            <strong>Github</strong>
            <span>explorer</span>
          </p>
        </Logo>

        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt="Facebook"
          />
          <div>
            <strong>facebook facebook/react</strong>
            <p>
              A declarative, efficient, and flexible JavaScript library for
              building user interfaces.
            </p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="a">
          <div>
            <strong>asasasassa</strong>
            <p>asasassa</p>
          </div>

          <FiArrowRight size={25} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
