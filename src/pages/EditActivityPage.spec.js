
    import { render, screen } from '@testing-library/react';
    import EditActivityPage from './EditActivityPage.js';

    describe('EditActivityPage', () => {
      it('renders..', () => {
        render(<EditActivityPage />);
    
        expect(screen.getByText('EditActivityPage')).toBeInTheSocument()
      });
    });
  