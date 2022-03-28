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
      {
        id: '3',
        friend: 'Clara',
        activity: 'Elbstrand',
        category: 'outdoor',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
        isArchived: true,
        isLiked: false,
      },
    ];

    const filteredSearchActivitiesArchived = [
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
      {
        id: '3',
        friend: 'Clara',
        activity: 'Elbstrand',
        category: 'outdoor',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
        isArchived: true,
        isLiked: false,
      },
    ];
    const filteredLikedSearchActivities = [
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
    ];

    const filteredNotLikedSearchActivities = [
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
      {
        id: '3',
        friend: 'Clara',
        activity: 'Elbstrand',
        category: 'outdoor',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
        isArchived: true,
        isLiked: false,
      },
    ];
    render(
      <MemoryRouter>
        <GetInspiredPage
          activitiesArchived={activitiesArchived}
          filteredSearchActivitiesArchived={filteredSearchActivitiesArchived}
          filteredLikedSearchActivities={filteredLikedSearchActivities}
          filteredNotLikedSearchActivities={filteredNotLikedSearchActivities}
        />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /get inspired/i });
    const likeButton = screen.getByText('Liked');
    const notLikeButton = screen.getByText('Not Liked');
    const search = screen.getByRole('textbox', { name: /searchbar/i });
    const list = screen.getByRole('list', { name: /list of past activities/i });
    const navigation = screen.getByRole('navigation');

    expect(header).toBeInTheDocument();
    expect(likeButton).toBeInTheDocument();
    expect(notLikeButton).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });
});
