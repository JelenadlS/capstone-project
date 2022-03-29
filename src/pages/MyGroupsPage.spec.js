
    import { render, screen } from '@testing-library/react';
    import MyGroupsPage from './MyGroupsPage.js';

    describe('MyGroupsPage', () => {
      it('renders..', () => {
        render(<MyGroupsPage />);
    
        expect(screen.getByText('MyGroupsPage')).toBeInTheSocument()
      });
    });
  