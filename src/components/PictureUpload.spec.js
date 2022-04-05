import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PictureUpload from './PictureUpload.js';

describe('PictureUpload', () => {
  const preloadedValues = {
    activity: 'Spazieren',
    category: 'outdoor',
    notes: 'test',
    date: '2022-03-13',
    location: 'HH',
    photo: 'abc.png',
  };
  it('renders a picture when preloaded values are available with a delete button', () => {
    render(<PictureUpload preloadedValues={preloadedValues} />);

    const image = screen.getByRole('img', { name: 'preview abc.png' });
    const deleteButton = screen.getByRole('button', { name: 'delete' });

    expect(image).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it('renders a preview text when no values are there', () => {
    const preloadedValuesNoPic = {
      activity: 'Spazieren',
      category: 'outdoor',
      notes: 'test',
      date: '2022-03-13',
      location: 'HH',
      photo: '',
    };
    render(<PictureUpload preloadedValues={preloadedValuesNoPic} />);

    const preview = screen.getByText('preview');

    expect(preview).toBeInTheDocument();
  });
});
