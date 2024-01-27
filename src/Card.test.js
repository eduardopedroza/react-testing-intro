import { render, fireEvent } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom/extend-expect';

it ('renders without crashing', function () {
  render(<Card />);
})