import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ActivityCard from './ActivityCard.js';

describe('ActivityCard', () => {
  const activity = 'Elbstrand';
  const photo = 'sport';
  const errorMessage = 'error';
  const nameOfSelectedFriend = 'Clara';
  const nameOfSelectedActivity = 'Tanzen';
  const nameOfSelectedCategory = 'sport';

  it('renders card with activity including picture, link and delete button', () => {
    render(
      <MemoryRouter>
        <ActivityCard
          activity={activity}
          showBin={true}
          photo={photo}
          errorMessage={errorMessage}
          nameOfSelectedActivity={nameOfSelectedActivity}
          nameOfSelectedCategory={nameOfSelectedCategory}
          nameOfSelectedFriend={nameOfSelectedFriend}
        />
      </MemoryRouter>
    );

    const picture = screen.getByRole('img', { name: 'uploaded picture sport' });
    const link = screen.getByRole('link', { name: 'Elbstrand' });
    const button = screen.getByRole('button', { name: 'delete' });

    expect(picture).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders card with next image ', () => {
    render(
      <MemoryRouter>
        <ActivityCard
          activity={activity}
          showBin={false}
          photo={photo}
          errorMessage={errorMessage}
          nameOfSelectedActivity={nameOfSelectedActivity}
          nameOfSelectedCategory={nameOfSelectedCategory}
          nameOfSelectedFriend={nameOfSelectedFriend}
        />
      </MemoryRouter>
    );

    const picture = screen.getByRole('img', { name: 'next page' });

    expect(picture).toBeInTheDocument();
  });

  it('renders placeholder picture when no picture was uploaded', () => {
    render(
      <MemoryRouter>
        <ActivityCard
          activity={activity}
          showBin={false}
          photo=""
          errorMessage={errorMessage}
          nameOfSelectedActivity={nameOfSelectedActivity}
          nameOfSelectedCategory={nameOfSelectedCategory}
          nameOfSelectedFriend={nameOfSelectedFriend}
        />
      </MemoryRouter>
    );

    const placeholderImage = screen.getByRole('img', {
      name: /placeholder picture sport/i,
    });

    expect(placeholderImage).toBeInTheDocument();
  });

  it('when clicking the bin, the DeleteModal is renderd with the delete button', () => {
    const showCallback = jest.fn();
    render(
      <MemoryRouter>
        <ActivityCard
          onClick={showCallback}
          activity={activity}
          showBin={true}
          photo={photo}
          errorMessage={errorMessage}
          nameOfSelectedActivity={nameOfSelectedActivity}
          nameOfSelectedCategory={nameOfSelectedCategory}
          nameOfSelectedFriend={nameOfSelectedFriend}
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
          activity={activity}
          showBin={true}
          photo={photo}
          errorMessage={errorMessage}
          nameOfSelectedActivity={nameOfSelectedActivity}
          nameOfSelectedCategory={nameOfSelectedCategory}
          nameOfSelectedFriend={nameOfSelectedFriend}
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
        <ActivityCard
          activity={activity}
          showBin={true}
          photo={photo}
          errorMessage={errorMessage}
          nameOfSelectedActivity={nameOfSelectedActivity}
          nameOfSelectedCategory={nameOfSelectedCategory}
          nameOfSelectedFriend={nameOfSelectedFriend}
        />
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
