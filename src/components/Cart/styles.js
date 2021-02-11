import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 400px;
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
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4px 0;
  margin-bottom: 2px;
  border-bottom: solid 1px #eee;
  text-align: center;
`;

export const Title = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  font-weight: 400;
`;

export const Price = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  font-weight: 400;
`;
