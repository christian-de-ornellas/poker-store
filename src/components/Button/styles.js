import styled from 'styled-components';

export const Container = styled.button`
  background: ${(props) =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  border: none;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 14px;
  width: 100%;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
`;
