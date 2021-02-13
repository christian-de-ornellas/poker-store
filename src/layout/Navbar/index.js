import React from 'react';
import { Link } from 'react-router-dom';
import { Container, List, Item } from './styles';

const Navbar = ({ items }) => {
  return (
    <Container>
      <List>
        {items.map((item) => {
          return (
            <Link key={item.path} to={item.path}>
              <Item>{item.title}</Item>
            </Link>
          );
        })}
      </List>
    </Container>
  );
};
export default Navbar;
