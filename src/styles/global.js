import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: Montserrat, sans-serif;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
}
a:hover {
  color: ${(props) => props.theme.colors.secondary};
}

ul{
  list-style: none;
}

.select-auto{
  border: none;
  min-width: 300px;
  max-width: 600px;
  font-size: 18px;
}

`;
