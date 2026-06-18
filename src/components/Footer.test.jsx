import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('muestra el título Miembros del equipo', () => {
  render(<Footer />);

  screen.getByText('Miembros del equipo:');
});