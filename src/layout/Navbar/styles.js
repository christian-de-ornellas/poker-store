import styled from 'styled-components';

export const Container = styled.nav`
  background: ${(props) => props.theme.colors.navBar};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  list-style: none;
  color: ${(props) => props.theme.colors.primary};
  padding: 0 8px;
  text-transform: capitalize;
`;
