import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityOverviewPage from './ActivityOverviewPage';

describe('ActivityOverviewPage', () => {
  it('renders ActivityOverviewPage with the backButton with the link, activity twice (header and text), the friend, notes, date and location', () => {
    render(
      <MemoryRouter>
        <ActivityOverviewPage
          friend="Clara"
          activity="Frau Möller"
          notes="notes"
          date="13/02/21"
          location="HH"
        />
      </MemoryRouter>
    );

    const arrowButton = screen.getByRole('button');
    const link = screen.getByRole('link');
    const headerTextAndActivity = screen.getAllByText('Frau Möller');
    const friend = screen.getByText('Clara');
    const notes = screen.getByText('notes');
    const date = screen.getByText('13/02/21');
    const location = screen.getByText('HH');

    expect(arrowButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(headerTextAndActivity).toHaveLength(2);
    expect(friend).toBeInTheDocument();
    expect(notes).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
});
