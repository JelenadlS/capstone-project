import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityOverviewPage from './ActivityOverviewPage';

describe('ActivityOverviewPage', () => {
  it('renders ActivityOverviewPage with the back and edit link, activity twice (header and text), the friend, notes, date and location', () => {
    render(
      <MemoryRouter>
        <ActivityOverviewPage
          path="/project/:id"
          friend="Clara"
          activity="Frau Möller"
          notes="notes"
          date="13/02/21"
          location="HH"
        />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');
    const headerTextAndActivity = screen.getAllByText('Frau Möller');
    const friend = screen.getByText('Clara');
    const notes = screen.getByText('notes');
    const date = screen.getByText('13/02/21');
    const location = screen.getByText('HH');

    expect(links).toHaveLength(2);
    expect(headerTextAndActivity).toHaveLength(2);
    expect(friend).toBeInTheDocument();
    expect(notes).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
});
