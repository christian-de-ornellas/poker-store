import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.navBar};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Content = styled.div`
  min-width: 250px;
  max-width: 500px;
  display: flex;
  flex-direction: row;
`;

export const List = styled.ul`
  background: red;
`;

export const Item = styled.li`
  background: blue;
`;
