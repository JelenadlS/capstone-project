import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityOverviewPage from './ActivityOverviewPage';

describe('Card', () => {
  it('renders ActivityOverviewPage with the backButton with the link, activity twice (header and text), the friend', () => {
    render(
      <MemoryRouter>
        <ActivityOverviewPage activity="Frau Möller" friend="Clara" />
      </MemoryRouter>
    );

    const arrowButton = screen.getByRole('button');
    const link = screen.getByRole('link');
    const headerTextAndActivity = screen.getAllByText('Frau Möller');
    const friend = screen.getByText('mit: Clara');

    expect(arrowButton).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(headerTextAndActivity).toHaveLength(2);
    expect(friend).toBeInTheDocument();
  });
});
