import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ActivityOverviewPage from './ActivityOverviewPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    friendsName: 'Clara',
    activityName: 'Frau Möller',
  }),
  useNavigate: () => ({ url: '/Frau Möller' }),
}));

describe('ActivityOverviewPage', () => {
  it('renders page with a back and new button as well as heading and activity name', () => {
    const activities = [
      {
        id: '1',
        friend: 'Clara',
        activity: 'Frau Möller',
        category: 'culture',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
      },
    ];

    render(
      <MemoryRouter>
        <ActivityOverviewPage activities={activities} />
      </MemoryRouter>
    );

    const backButton = screen.getByRole('button', { name: 'go back' });
    const saveButton = screen.getByRole('button', { name: 'new' });
    const headingAndActivity = screen.getAllByText('Frau Möller');

    expect(backButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(headingAndActivity).toHaveLength(2);
  });

  it('renders page with picture, category, friend, notes, date and location', () => {
    const activities = [
      {
        id: '1',
        friend: 'Clara',
        activity: 'Frau Möller',
        category: 'culture',
        notes: 'notes',
        date: '13/02/21',
        location: 'HH',
        photo: 'activity.png',
      },
    ];

    render(
      <MemoryRouter>
        <ActivityOverviewPage activities={activities} />
      </MemoryRouter>
    );

    const category = screen.getByText('culture');
    expect(category).toBeInTheDocument();

    const friend = screen.getByText('Clara');
    expect(friend).toBeInTheDocument();

    const notes = screen.getByText('notes');
    expect(notes).toBeInTheDocument();

    const date = screen.getByText('13/02/21');
    expect(date).toBeInTheDocument();

    const location = screen.getByText('HH');
    expect(location).toBeInTheDocument();

    const picture = screen.getByRole('img', { name: 'upload' });
    expect(picture).toBeInTheDocument();
  });

  it('renders page with empty messages for category, friend, date and location, as well as no note, but a picture', () => {
    const activities = [
      {
        id: '1',
        friend: 'I still need to plan...',
        activity: 'Frau Möller',
        category: 'culture',
        notes: '',
        date: '',
        location: '',
        photo: '',
      },
    ];

    render(
      <MemoryRouter>
        <ActivityOverviewPage activities={activities} />
      </MemoryRouter>
    );

    const friend = screen.getByText('make plans with a friend!');
    expect(friend).toBeInTheDocument();

    const notes = screen.getByTestId('noNotes');
    expect(notes).toBeInTheDocument();

    const date = screen.getByText('plan your activity soon!');
    expect(date).toBeInTheDocument();

    const location = screen.getByText('where do you have to go?');
    expect(location).toBeInTheDocument();

    const picture = screen.getByRole('img', { name: 'upload' });
    expect(picture).toBeInTheDocument();
  });
});
