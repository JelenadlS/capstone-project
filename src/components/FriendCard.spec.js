import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FriendCard from './FriendCard.js';

describe('FriendCard', () => {
  it('renders the card with name of friend including and a number', () => {
    const sumOfActivitiesEachFriend = '2';
    render(
      <MemoryRouter>
        <FriendCard
          friend="Clara"
          sumOfActivitiesEachFriend={sumOfActivitiesEachFriend}
        />
      </MemoryRouter>
    );

    const friend = screen.getByText('Clara');
    const number = screen.getByText('#2');

    expect(friend).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });
});
