import styled from 'styled-components';

export const Input = styled.input`
  width: 50vw;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  padding: 0 30px;
  color: ${(props) => props.theme.colors.text}
  font-size: 18px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
