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
  background-image: url(${(props) => props.image});
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
  padding: 10px;
`;

export const Content = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text};
  padding: 4px 0;
`;

export const Price = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  padding: 4px 0;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const More = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
`;
