import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findByName } from '../../services/pokemon';
import {
  Container,
  Content,
  Body,
  Header,
  Footer,
  ItemImages,
  Image,
  Title,
  SubTitle,
  Text,
  Stat,
} from './styles';
import Button from '../../components/Button';

const Details = () => {
  const [pokemon, setPokemon] = useState([]);
  const { name } = useParams();

  const storeCurrent = useSelector((state) => state.theme.store);

  const getPokemonByName = async () => {
    const response = await findByName(name);
    setPokemon(response);
  };

  useEffect(() => {
    getPokemonByName();
  }, []);

  return (
    <Container>
      <Body>
        <ItemImages>
          <Image
            src={`${pokemon.sprites && pokemon.sprites.front_default}`}
            alt={pokemon.name}
          />
          <Image
            src={`${pokemon.sprites && pokemon.sprites.back_default}`}
            alt={pokemon.name}
          />
        </ItemImages>

        <Header>
          <Title>{pokemon.name}</Title>
        </Header>

        <Content>
          <Text> Experiência: {pokemon.base_experience} </Text>
          <Text>Peso: {pokemon.weight}</Text>
          <Text>Altura: {pokemon.height}</Text>

          <SubTitle>Status</SubTitle>
          {pokemon.stats &&
            pokemon.stats.map((itemStat) => {
              return (
                <Stat key={itemStat.stat.name}>
                  <Text>{itemStat.stat.name}</Text>
                  <Text>{itemStat.base_stat}</Text>
                </Stat>
              );
            })}
        </Content>
        <Footer>
          <Button
            title="Voltar"
            onClick={() => {
              window.location.href = `/store/${storeCurrent}`;
            }}
          />
        </Footer>
      </Body>
    </Container>
  );
};
export default Details;
