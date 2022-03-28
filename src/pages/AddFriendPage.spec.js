
    import { render, screen } from '@testing-library/react';
    import AddFriendPage from './AddFriendPage.js';

    describe('AddFriendPage', () => {
      it('renders..', () => {
        render(<AddFriendPage />);
    
        expect(screen.getByText('AddFriendPage')).toBeInTheSocument()
      });
    });
  