import React from 'react';
import { Container, List, Item } from './styles';

const Navbar = ({ items }) => {
  return (
    <Container>
      <List>
        {items.map((item) => {
          return <Item key={item.path}>{item.title}</Item>;
        })}
      </List>
    </Container>
  );
};
export default Navbar;
