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
          <S.StyledRow>
            <S.Header>Name</S.Header>
            <S.Header>⭐ Stars</S.Header>
            <S.Header>🍴 Forks</S.Header>
          </S.StyledRow>
          {data.edges.map((repo) => (
            <S.StyledRow key={repo.node.name}>
              <S.Data>{repo.node.name}</S.Data>
              <S.Data>{repo.node.stargazers.totalCount}</S.Data>
              <S.Data>{repo.node.forks.totalCount}</S.Data>
            </S.StyledRow>
          ))}
        </S.Table>
      ) : (
        <h1>Something went wrong!</h1>
      )}
    </S.Container>
  );
};

export default Table;
