import { createMemoryHistory } from 'history';
import { MemoryRouter, Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MyFriendsPage from './MyFriendsPage.js';

// export function renderWithRouterMatch(
//   ui,
//   {
//     path = '/',
//     route = '/',
//     history = createMemoryHistory({ initialEntries: [route] }),
//   } = {}
// ) {
//   return {
//     ...render(
//       <Router history={history}>
//         <Route path={path} component={ui} />
//       </Router>
//     ),
//   };
// }

describe('MyFriendsPage', () => {
  it('renders a page with headertitle, a list and button', () => {
    const activities = [{ id: '1', activity: 'Frau Möller', friend: 'Clara' }];
    // const selectedFriendsActivity = [
    //   { id: '1', activity: 'Frau Möller', friend: 'Clara' },
    // ];
    // const history = createMemoryHistory();
    // const route = '/Clara';
    // history.push(route);
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        friend: 'Clara',
      }),
      useRouteMatch: () => ({ url: '/' }),
    }));
    render(
      <MemoryRouter>
        <MyFriendsPage
          activities={activities}
          // selectedFriendsActivity={selectedFriendsActivity}
        />
      </MemoryRouter>
    );

    const title = screen.getByText('Clara');
    const list = screen.getByRole('list');
    const button = screen.getByRole('button');
    // const { getByText } = renderWithRouterMatch(MyFriendsPage, {
    //   route: '/Clara',
    //   path: '/:friendsName',
    // });
    // expect(getByText).toBeInTheDocument('Match id: Clara');
    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders an error message when no activities are found', () => {
    const activities = [];

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        friend: '',
      }),
      useRouteMatch: () => ({ url: '/' }),
    }));

    render(
      <MemoryRouter>
        <MyFriendsPage activities={activities} />
      </MemoryRouter>
    );

    const emptymessage = screen.getByTestId('emptylist');
    expect(emptymessage).toBeInTheDocument();
  });
});
