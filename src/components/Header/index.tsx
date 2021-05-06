import { FC } from 'react';
import * as S from './style';

import { IUser } from '../../utils/interfaces';

interface IProps {
  user: IUser;
}

const Header: FC<IProps> = ({ user }) => {
  const { login, avatarUrl, name, url } = user;

  return (
    <S.Container>
      <S.StyledName>{name}</S.StyledName>
      <S.RightInfo>
        <S.Link href={url} target='blank'>
          @{login}
        </S.Link>
        <S.ProfilePic alt='pic' src={avatarUrl} />
      </S.RightInfo>
    </S.Container>
  );
};

export default Header;
