import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 450px;
  padding: 12px;
  background: #ffffff;
  color: #fff;
  border-radius: 25px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 50px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 25px;
  margin: 20px 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4px 0;
  margin-bottom: 4px;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const Price = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  font-weight: 400;
`;

export const SubTotal = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
  font-weight: 400;
`;
export const Badge = styled.span`
  padding: 4px;
  margin: 2px;
  border-radius: 100%;
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.secondary};
`;
