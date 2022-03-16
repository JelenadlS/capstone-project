
    import { render, screen } from '@testing-library/react';
    import MyFriendsPage from './MyFriendsPage.js';

    describe('MyFriendsPage', () => {
      it('renders..', () => {
        render(<MyFriendsPage />);
    
        expect(screen.getByText('MyFriendsPage')).toBeInTheSocument()
      });
    });
  