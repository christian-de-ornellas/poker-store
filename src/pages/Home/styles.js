import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas: 'list cart';
  max-width: 1200px;
  margin: 20px auto;

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'list list' 'cart cart';
  }
`;

export const Main = styled.main`
  grid-area: list;
  display: grid;
  justify-content: center;
`;

export const Aside = styled.aside`
  display: grid;
  justify-content: flex-end;
  grid-area: cart;
  justify-content: center;
`;
