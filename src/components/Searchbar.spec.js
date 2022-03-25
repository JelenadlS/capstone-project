
    import { render, screen } from '@testing-library/react';
    import Searchbar from './Searchbar.js';

    describe('Searchbar', () => {
      it('renders..', () => {
        render(<Searchbar />);
    
        expect(screen.getByText('Searchbar')).toBeInTheSocument()
      });
    });
  