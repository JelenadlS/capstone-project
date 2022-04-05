import { render, screen } from '@testing-library/react';
import DescriptionOfApp from './DescriptionOfApp.js';

describe('DescriptionOfApp', () => {
  it('renders the description with corresponding images', () => {
    render(<DescriptionOfApp />);

    const greeting = screen.getByTestId('description of app');
    const friends = screen.getByRole('img', { name: 'overview of friends' });
    const groups = screen.getByRole('img', { name: 'overview of groups' });
    const addfriend = screen.getByRole('img', { name: 'add a friend' });
    const addactivity = screen.getByRole('img', { name: 'add an activity' });
    const all = screen.getByRole('img', { name: 'all activities' });
    const inspire = screen.getByRole('img', { name: 'all past activities' });

    expect(greeting).toBeInTheDocument();
    expect(friends).toBeInTheDocument();
    expect(addfriend).toBeInTheDocument();
    expect(addactivity).toBeInTheDocument();
    expect(groups).toBeInTheDocument();
    expect(all).toBeInTheDocument();
    expect(inspire).toBeInTheDocument();
  });

  it('renders the description with group when being on groups page', () => {
    render(<DescriptionOfApp group={true} />);

    const addgroup = screen.getByRole('img', { name: 'add a group' });

    expect(addgroup).toBeInTheDocument();
  });
});
