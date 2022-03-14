import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityOverviewPage from './ActivityOverviewPage';

describe('ActivityOverviewPage', () => {
  it('renders ActivityOverviewPage with the backButton with the link, activity twice (header and text), the friend', () => {
    const data = [{ activity: 'Frau Möller' }, { friend: 'Clara' }];
    render(
      <MemoryRouter>
        <ActivityOverviewPage data={data} />
      </MemoryRouter>
    );

    const arrowButton = screen.getByRole('button');
    const link = screen.getByRole('link');
    const headerTextAndActivity = screen.getAllByRole('Frau Möller');
    const friend = screen.getByText('mit: Clara');

    expect(arrowButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(headerTextAndActivity).toHaveLength(2);
    expect(friend).toBeInTheDocument();
  });
});
