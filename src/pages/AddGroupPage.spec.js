
    import { render, screen } from '@testing-library/react';
    import AddGroupPage from './AddGroupPage.js';

    describe('AddGroupPage', () => {
      it('renders..', () => {
        render(<AddGroupPage />);
    
        expect(screen.getByText('AddGroupPage')).toBeInTheSocument()
      });
    });
  