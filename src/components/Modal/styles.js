import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 16px;
  width: 50vw;
  padding: 2rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 10px 10px 100px 0 #333;
  z-index: 9999;
  left: 25%;
  top: 25%;
  filter: blur(0);
  transform: scale(1);
  transition: ease-out;
  opacity: 1;
`;

export const Message = styled.div`
  font-size: 16px;
  padding: 2rem 0;
`;
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100px;
`;
