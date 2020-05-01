import React, { useState, FormEvent } from 'react';
import { FiArrowRight, FiGithub, FiSearch } from 'react-icons/fi';

import api from '../../services/api';

import { Logo, Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório.');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
    } catch (err) {
      setInputError('Repositório não encontrado.');
    }
  }

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

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => {
            setNewRepo(e.target.value);
            setInputError('');
          }}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">
          Pesquisar
          <FiSearch size={22} />
        </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="/repository">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiArrowRight size={25} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
