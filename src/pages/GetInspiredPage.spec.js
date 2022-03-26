import { render, screen } from '@testing-library/react';
import GetInspiredPage from './GetInspiredPage.js';

describe('GetInspiredPage', () => {
  it('renders..', () => {
    render(<GetInspiredPage />);

    expect(screen.getByText('GetInspiredPage')).toBeInTheSocument();
  });
});
