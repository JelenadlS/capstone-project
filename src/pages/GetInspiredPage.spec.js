import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import GetInspiredPage from './GetInspiredPage.js';

describe('GetInspiredPage', () => {
  it('renders two categoryButtons, and a list for each', () => {
    const activitiesArchived = [
      {
        id: '1',
        friend: 'Clara',
        activity: 'Frau Möller',
        category: 'culture',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
        isArchived: true,
        isLiked: true,
      },
      {
        id: '2',
        friend: 'Clara',
        activity: 'Frau Möller',
        category: 'culture',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
        isArchived: true,
        isLiked: false,
      },
    ];
    render(
      <MemoryRouter>
        <GetInspiredPage activitiesArchived={activitiesArchived} />
      </MemoryRouter>
    );

    const likeButton = screen.getByText('Liked');
    const notLikeButton = screen.getByText('Not Liked');
    const list = screen.getByRole('list', { name: /list of past activities/i });

    expect(likeButton).toBeInTheDocument();
    expect(notLikeButton).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });
});
