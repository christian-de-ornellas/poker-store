import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 20px auto;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;
export const Body = styled.article`
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
`;
export const Header = styled.header`
  display: flex;
`;
export const Footer = styled.footer`
  display: flex;
`;
export const ItemImages = styled.figure`
  display: flex;
`;
export const Image = styled.img`
  display: flex;
  width: 130px;
  max-width: 200px;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
  padding: 4px 0;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
  padding: 4px 0;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: ${(props) => props.theme.colors.text};
  text-transform: capitalize;
  padding: 8px 0;
`;

export const Stat = styled.div`
  display: flex;
  justify-content: space-between;
`;
