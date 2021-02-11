import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 767px) {
  }
`;

export const Item = styled.div`
  display: grid;
`;
