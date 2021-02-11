import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.topBar};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
