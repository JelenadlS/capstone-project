import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form.js';

describe('Form', () => {
  it('renders a form with three textboxes (activity, notes and location), a select box with 5 options for category, three buttons for friend selection, the date, upload photo and a save button', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const textBoxes = screen.getAllByRole('textbox');
    const selectBox = screen.getByRole('combobox', { name: 'Category:' });
    const categoryOptions = screen.getAllByRole('option');
    const chooseLaterButton = screen.getByRole('button', {
      name: 'choose later',
    });
    const chooseFriendButton = screen.getByRole('button', { name: 'friend' });
    const chooseGroup = screen.getByRole('button', { name: 'group' });
    const selectPhoto = screen.getByRole('img', { name: 'upload' });
    const date = screen.getByTestId('date');
    const submitButton = screen.getByRole('button', { name: 'save' });

    expect(textBoxes).toHaveLength(3);
    expect(selectBox).toBeInTheDocument();
    expect(categoryOptions).toHaveLength(5);
    expect(chooseLaterButton).toBeInTheDocument();
    expect(chooseFriendButton).toBeInTheDocument();
    expect(chooseGroup).toBeInTheDocument();
    expect(selectPhoto).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('renders a select box with friend, when click on friend', () => {
    const handleOnClickFriend = jest.fn();
    render(
      <MemoryRouter>
        <Form handleOnClickFriend={handleOnClickFriend} />
      </MemoryRouter>
    );

    const chooseFriendButton = screen.getByRole('button', { name: 'friend' });

    userEvent.click(chooseFriendButton);

    const selectBox = screen.getByTestId('friend');
    const categoryOptions = screen.getByRole('option', { name: 'friend' });
    expect(selectBox).toBeInTheDocument();
    expect(categoryOptions).toBeInTheDocument();
  });

  it('renders a select box with group, when click on group', () => {
    const handleOnClickGroup = jest.fn();
    render(
      <MemoryRouter>
        <Form handleOnClickGroup={handleOnClickGroup} />
      </MemoryRouter>
    );
    const chooseGroup = screen.getByRole('button', { name: 'group' });

    userEvent.click(chooseGroup);

    const selectBox = screen.getByTestId('group');
    const categoryOptions = screen.getByRole('option', { name: 'group' });
    expect(selectBox).toBeInTheDocument();
    expect(categoryOptions).toBeInTheDocument();
  });

  it('renders a from with preloaded values', () => {
    const preloadedValues = {
      activity: 'Spazieren',
      category: 'outdoor',
      notes: 'test',
      date: '2022-03-13',
      location: 'HH',
    };

    render(
      <MemoryRouter>
        <Form preloadedValues={preloadedValues} />
      </MemoryRouter>
    );

    const activity = screen.getByDisplayValue('Spazieren');
    const category = screen.getByDisplayValue('outdoor');
    const notes = screen.getByDisplayValue('test');
    const date = screen.getByDisplayValue('2022-03-13');
    const location = screen.getByDisplayValue('HH');

    expect(activity).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(notes).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
});
