import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import FriendCard from './FriendCard.js';

describe('FriendCard', () => {
  it('renders the card with link of friend including and a number, as well a button to next page', () => {
    render(
      <MemoryRouter>
        <FriendCard name="Clara" sumOfActivitiesEach="2" />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: 'to Clara' });
    const number = screen.getByText('#2');
    const button = screen.getByRole('img', { name: 'next page' });

    expect(link).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders the card with link to I still need to plan... when no friend is there', () => {
    render(
      <MemoryRouter>
        <FriendCard name="I still need to plan..." sumOfActivitiesEach="2" />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: 'to to plan activities' });

    expect(link).toBeInTheDocument();
  });
});
