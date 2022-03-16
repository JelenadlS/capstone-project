
    import { render, screen } from '@testing-library/react';
    import FriendCard from './FriendCard.js';

    describe('FriendCard', () => {
      it('renders..', () => {
        render(<FriendCard />);
    
        expect(screen.getByText('FriendCard')).toBeInTheSocument()
      });
    });
  