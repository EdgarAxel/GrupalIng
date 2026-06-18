import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('muestra el campo Contraseña', () => {
  render(<Login />);

  screen.getByPlaceholderText('Contraseña');
});