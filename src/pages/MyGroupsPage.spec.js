import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import MyGroupsPage from './MyGroupsPage.js';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    friendsName: 'Clara',
  }),
  useNavigate: () => ({ url: '/Clara' }),
}));

describe('MyGroupsPage', () => {
  it('renders a page with headertitle, a list and button', () => {
    const activities = [
      {
        id: '1',
        activity: 'Frau Möller',
        category: 'sport',
        friend: 'Clara',
        group: 'Girls',
      },
    ];

    render(
      <MemoryRouter>
        <MyGroupsPage activities={activities} />
      </MemoryRouter>
    );

    const title = screen.getByRole('heading', { name: /my groups/i });
    const list = screen.getByRole('list', { name: /list of groups/i });
    const button = screen.getByRole('button');

    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
