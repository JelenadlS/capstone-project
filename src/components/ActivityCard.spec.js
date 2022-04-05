import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ActivityCard from './ActivityCard.js';

describe('ActivityCard', () => {
  const activityDetails = {
    photo: 'abc.png',
    friend: 'Clara',
    activity: 'Tanzen',
    category: 'sport',
  };
  it('renders card with activity including picture, link to the activity and delete button', () => {
    render(
      <MemoryRouter>
        <ActivityCard showBin={true} activityDetails={activityDetails} />
      </MemoryRouter>
    );

    const picture = screen.getByRole('img', { name: 'picture abc.png' });
    const link = screen.getByRole('link', { name: 'to Tanzen full details' });
    const button = screen.getByRole('button', { name: 'delete' });

    expect(picture).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders placeholder picture when no picture was uploaded', () => {
    const activityDetailsNoPic = {
      photo: '',
      friend: 'Clara',
      activity: 'Tanzen',
      category: 'sport',
    };
    render(
      <MemoryRouter>
        <ActivityCard showBin={true} activityDetails={activityDetailsNoPic} />
      </MemoryRouter>
    );

    const placeholderImage = screen.getByRole('img', {
      name: /picture sport/i,
    });

    expect(placeholderImage).toBeInTheDocument();
  });

  it('when clicking the bin, the DeleteModal is renderd with the delete button', () => {
    const showCallback = jest.fn();
    render(
      <MemoryRouter>
        <ActivityCard
          onClick={showCallback}
          showBin={true}
          activityDetails={activityDetails}
        />
      </MemoryRouter>
    );

    const binButton = screen.getByRole('button', { name: /delete/i });

    userEvent.click(binButton);
    expect(showCallback).toBeTruthy();
  });

  it('when clicking delete within the DeleteModal, the delete function will be called', () => {
    const deleteCallback = jest.fn();
    render(
      <MemoryRouter>
        <ActivityCard
          onDeleteActivity={deleteCallback}
          showBin={true}
          activityDetails={activityDetails}
        />
      </MemoryRouter>
    );

    const binButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(binButton);

    const deleteButton = screen.getByRole('button', {
      name: 'please delete',
    });
    userEvent.click(deleteButton);

    expect(deleteCallback).toBeCalled();
  });

  it('when clicking the keep activity button, the delete button cannot be found as DeleteModal is closing', () => {
    render(
      <MemoryRouter>
        <ActivityCard showBin={true} activityDetails={activityDetails} />
      </MemoryRouter>
    );

    const binButton = screen.getByRole('button', { name: /delete/i });
    userEvent.click(binButton);

    const keepButton = screen.getByRole('button', {
      name: 'NO, I wanna keep it',
    });
    userEvent.click(keepButton);

    expect(keepButton).not.toBeInTheDocument();
  });
});
