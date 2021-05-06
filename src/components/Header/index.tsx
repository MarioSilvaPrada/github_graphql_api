import { FC } from 'react';
import * as S from './style';

interface IProps {
  user: {
    login: string;
    avatarUrl: string;
    name: string;
  };
}

const Header: FC<IProps> = ({ user }) => {
  const { login, avatarUrl, name } = user;

  return (
    <S.Container>
      <S.StyledName>{name}</S.StyledName>
      <S.RightInfo>
        <p>@{login}</p>
        <S.ProfilePic alt='pic' src={avatarUrl} />
      </S.RightInfo>
    </S.Container>
  );
};

export default Header;
