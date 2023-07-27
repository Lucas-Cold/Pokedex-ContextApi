import React from 'react';
import { render, screen } from '@testing-library/react';
import Favorites from './Favorites';
import { FavoritesProvider } from './FavoritesContext';

test('renders Favorites component without errors', () => {
  const fakeFavorites = [
    { name: 'Pikachu', /* outras propriedades fictícias */ },
    { name: 'Charmander', /* outras propriedades fictícias */ },
  ];

  render(
    <FavoritesProvider>
      <Favorites />
    </FavoritesProvider>
  );

  // Agora você pode adicionar suas verificações aqui
  // Por exemplo, verificar se os elementos são renderizados corretamente:
  const favoritesTitleElement = screen.getByText('Pokémons Favoritos');
  expect(favoritesTitleElement).toBeInTheDocument();

  // E verificar se os favoritos estão sendo exibidos corretamente no componente:
  fakeFavorites.forEach((favorite) => {
    const favoriteElement = screen.getByText(favorite.name);
    expect(favoriteElement).toBeInTheDocument();
  });
});

