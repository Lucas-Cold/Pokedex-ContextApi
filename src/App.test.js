import React from 'react';
import { render, screen } from '@testing-library/react';
import Favorites from './Favorites';
import { FavoritesProvider } from './FavoritesContext';

test('renders Favorites component without errors', () => {
  const fakeFavorites = [
    { name: 'Pikachu',},
    { name: 'Charmander', },
  ];

  render(
    <FavoritesProvider>
      <Favorites />
    </FavoritesProvider>
  );

  const favoritesTitleElement = screen.getByText('Pokémons Favoritos');
  expect(favoritesTitleElement).toBeInTheDocument();

  fakeFavorites.forEach((favorite) => {
    const favoriteElement = screen.getByText(favorite.name);
    expect(favoriteElement).toBeInTheDocument();
  });
});

