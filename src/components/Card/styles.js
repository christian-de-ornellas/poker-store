import styled from 'styled-components';

export const Container = styled.article`
  height: 395px;
  background: transparent;
  display: flex;
  justify-content: center;
  margin: 0 10px 10px 10px;
`;

export const Image = styled.div`
  width: 220px;
  height: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  background: ${(props) => props.theme.colors.secondary};
  background-image: url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/243.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

export const Body = styled.div`
  width: 240px;
  height: 340px;
  background: #ffffff;
  border-radius: 25px;
  margin-top: 40px;
`;

export const Content = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  margin-top: 25px;
`;

export const Price = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;
