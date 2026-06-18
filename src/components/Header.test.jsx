import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('muestra el enlace Quienes somos', () => {
  render(
    <BrowserRouter>
      <Header user={null} />
    </BrowserRouter>
  );

   screen.getByText('Quienes somos');
});