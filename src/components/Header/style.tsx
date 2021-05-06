import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem ${({ theme }) => theme.margin};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.main};
`;

export const RightInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePic = styled.img`
  width: 3rem;
  margin-left: 1rem;
  border-radius: 50%;
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.L};
  font-weight: bold;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
  border-bottom: 1px solid black;
  padding-bottom: 0.2rem;
  font-size: ${({ theme }) => theme.fontSize.S};
  transition: 0.5s;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;
