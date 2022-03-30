import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FilterTags from './FilterTags.js';

describe('FilterTags', () => {
  it('renders six tags when available category is there', () => {
    const activities = [
      {
        id: '1',
        activity: 'Eislaufen',
        category: 'sport',
        friend: 'Clara',
        photo: 'activity.png',
      },
      {
        id: '2',
        activity: 'Kunstaustellung',
        category: 'culture',
        friend: 'Clara',
        photo: 'activity.png',
      },
      {
        id: '3',
        activity: 'Frau Möller',
        category: 'food and beverages',
        friend: 'Clara',
        photo: 'activity.png',
      },
      {
        id: '4',
        activity: 'Spazieren',
        category: 'outdoor',
        friend: 'Clara',
        photo: 'activity.png',
      },
      {
        id: '5',
        activity: 'Shoppen',
        category: 'other',
        friend: 'Clara',
        photo: 'activity.png',
      },
    ];

    render(
      <MemoryRouter>
        <FilterTags activities={activities} />
      </MemoryRouter>
    );

    const all = screen.getByRole('button', { name: /all/i });
    const other = screen.getByRole('button', { name: /other/i });
    const sport = screen.getByRole('button', { name: /sport/i });
    const outdoor = screen.getByRole('button', { name: /outdoor/i });
    const culture = screen.getByRole('button', { name: /culture/i });
    const FAndB = screen.getByRole('button', { name: /food and beverages/i });

    expect(all).toBeInTheDocument();
    expect(other).toBeInTheDocument();
    expect(sport).toBeInTheDocument();
    expect(outdoor).toBeInTheDocument();
    expect(culture).toBeInTheDocument();
    expect(FAndB).toBeInTheDocument();
  });

  it('renders three tags when two available categories are there', () => {
    const activities = [
      {
        id: '1',
        activity: 'Eislaufen',
        category: 'sport',
        friend: 'Clara',
        photo: 'activity.png',
      },
      {
        id: '2',
        activity: 'Kunstaustellung',
        category: 'culture',
        friend: 'Clara',
        photo: 'activity.png',
      },
    ];

    render(
      <MemoryRouter>
        <FilterTags activities={activities} />
      </MemoryRouter>
    );

    const all = screen.getByRole('button', { name: /all/i });
    const other = screen.queryByRole('button', { name: /other/i });
    const sport = screen.getByRole('button', { name: /sport/i });
    const outdoor = screen.queryByRole('button', { name: /outdoor/i });
    const culture = screen.getByRole('button', { name: /culture/i });
    const FAndB = screen.queryByRole('button', { name: /food and beverages/i });

    expect(all).toBeInTheDocument();
    expect(other).not.toBeInTheDocument();
    expect(sport).toBeInTheDocument();
    expect(outdoor).not.toBeInTheDocument();
    expect(culture).toBeInTheDocument();
    expect(FAndB).not.toBeInTheDocument();
  });

  it('renders no tags when only one available category is there', () => {
    const activities = [
      {
        id: '1',
        activity: 'Eislaufen',
        category: 'sport',
        friend: 'Clara',
        photo: 'activity.png',
      },
      {
        id: '2',
        activity: 'Kunstaustellung',
        category: 'sport',
        friend: 'Clara',
        photo: 'activity.png',
      },
    ];

    render(
      <MemoryRouter>
        <FilterTags activities={activities} />
      </MemoryRouter>
    );

    const all = screen.queryByRole('button', { name: /all/i });
    const other = screen.queryByRole('button', { name: /other/i });
    const sport = screen.queryByRole('button', { name: /sport/i });
    const outdoor = screen.queryByRole('button', { name: /outdoor/i });
    const culture = screen.queryByRole('button', { name: /culture/i });
    const FAndB = screen.queryByRole('button', { name: /food and beverages/i });

    expect(all).not.toBeInTheDocument();
    expect(other).not.toBeInTheDocument();
    expect(sport).not.toBeInTheDocument();
    expect(outdoor).not.toBeInTheDocument();
    expect(culture).not.toBeInTheDocument();
    expect(FAndB).not.toBeInTheDocument();
  });
});
