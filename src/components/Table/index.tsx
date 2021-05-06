import { FC } from 'react';
import * as S from './style';

import { IRepoData } from '../../utils/interfaces';

interface IProps {
  error: boolean;
  data: IRepoData;
}

const Table: FC<IProps> = ({ data, error }) => {
  return (
    <S.Container>
      {!error ? (
        <S.Table>
          <thead>
            <S.StyledRow>
              <S.Header>Name</S.Header>
              <S.Header>⭐ Stars</S.Header>
              <S.Header>🍴 Forks</S.Header>
            </S.StyledRow>
          </thead>
          {data.edges.map((repo, i) => {
            const { name, stargazers, forks, url } = repo.node;
            return (
              <tbody key={name}>
                <S.StyledRow styled={i % 2 === 0}>
                  <S.Data>
                    <S.StyledLink href={url} target='blank'>
                      {name}
                    </S.StyledLink>
                  </S.Data>
                  <S.Data>{stargazers.totalCount.toLocaleString()}</S.Data>
                  <S.Data>{forks.totalCount.toLocaleString()}</S.Data>
                </S.StyledRow>
              </tbody>
            );
          })}
        </S.Table>
      ) : (
        <h1>Something went wrong!</h1>
      )}
    </S.Container>
  );
};

export default Table;
