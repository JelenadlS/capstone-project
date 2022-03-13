
    import { render, screen } from '@testing-library/react';
    import Header from './Header.js';

    describe('Header', () => {
      it('renders..', () => {
        render(<Header />);
    
        expect(screen.getByText('Header')).toBeInTheSocument()
      });
    });
  