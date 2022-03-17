import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FriendCard from './FriendCard.js';

describe('FriendCard', () => {
  it('renders card with friend including and a number', () => {
    const allFriends = ['Clara', 'Andrea', 'Clara'];
    render(
      <MemoryRouter>
        <FriendCard friend="Clara" allFriends={allFriends} />
      </MemoryRouter>
    );

    const friend = screen.getByText('Clara');
    const number = screen.getByText('#2');

    expect(friend).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });
});
