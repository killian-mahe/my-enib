import React from 'react';
import { render } from '@testing-library/react';
import './assets/main.css';
import App from './App';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
