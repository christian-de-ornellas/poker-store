import styled from 'styled-components';

export const Container = styled.footer`
  background: ${(props) => props.theme.colors.background};
`;

export const Copyright = styled.p`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
  font-weight: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
