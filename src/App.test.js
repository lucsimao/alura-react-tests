import React from 'react';
import App, { calcularNovoSaldo } from './App';
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

  describe('Quando eu realizo uma transação', () => {
    it('que é um saque, o valor vai diminuir', () => {
      const valores = { transacao: 'saque', valor: 50 };

      const result = calcularNovoSaldo(valores, 150);

      expect(result).toBe(100);
    });
  });
});
