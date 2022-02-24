import React from 'react';
import App from './App';
const { render, screen } = require('@testing-library/react');

describe('Component principal', () => {
  describe('Quando eu abro o app do banco,', () => {
    it('o nome é exibido', () => {
      render(<App />);

      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });

    it('o saldo é exibido', () => {
      render(<App />);

      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });

    it('o botão de Realizar Transação é exibido', () => {
      render(<App />);

      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
  });
});
