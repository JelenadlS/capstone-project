
    import { render, screen } from '@testing-library/react';
    import NewActivityPage from './NewActivityPage.js';

    describe('NewActivityPage', () => {
      it('renders..', () => {
        render(<NewActivityPage />);
    
        expect(screen.getByText('NewActivityPage')).toBeInTheSocument()
      });
    });
  