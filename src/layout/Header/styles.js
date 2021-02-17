import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.topBar};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
