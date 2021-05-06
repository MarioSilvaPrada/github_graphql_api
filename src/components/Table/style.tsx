import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`;

export const StyledRow = styled.tr``;

export const Header = styled.th`
  border: 2px solid black;
  padding: 0.9rem;
  font-size: ${({ theme }) => theme.fontSize.L};
`;

export const Data = styled.td`
  border: 2px solid black;
  text-align: center;
  padding: 0.9rem;
  font-size: ${({ theme }) => theme.fontSize.M};
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
  text-decoration: none;
`;
