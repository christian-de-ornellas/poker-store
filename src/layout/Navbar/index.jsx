import React from 'react';

import { Container, List, Item } from './styles';

const Navbar = ({ items }) => {
  return (
    <Container>
      <List>
        {items.map((item) => {
          return (
            <a key={item.path} href={item.path}>
              <Item>{item.title}</Item>
            </a>
          );
        })}
      </List>
    </Container>
  );
};
export default Navbar;
