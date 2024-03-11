const faker = require('faker');

const TOTAL_PAGES = 3;

const baseCharacters = [
  { name: 'Rick Sanchez', image_url: 'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png', status: 'Alive', genero: 'Male', localidade: 'Citadel of Ricks', origem: 'Earth (C-137)', especie: 'Human' },
  { name: 'Morty Smith', image_url: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', status: 'Dead', genero: 'Male', localidade: 'Belo Horizonte', origem: 'Earth (C-140)', especie: 'Human'  },
  { name: 'Summer Smith', image_url: 'https://lezwatchtv.com/wp-content/uploads/2020/05/Summer-350x412.jpg', status: 'Alive', genero: 'Female', localidade: 'New York', origem: 'Mars', especie: 'Human'  },
  { name: 'Beth Smith', image_url: 'https://i.pinimg.com/originals/46/c6/22/46c62293f92ff45052121bde7c0cd618.png', status: 'Dead', genero: 'Female', localidade: 'Paris', origem: 'Saturn', especie: 'Human'  },
]

const allCharacters = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const characters = baseCharacters.map(character => ({
    ...character, 
    id: faker.datatype.uuid(),
  }));

  return [...acc, ...characters]
}, [])

module.exports = {
  characters: allCharacters
}