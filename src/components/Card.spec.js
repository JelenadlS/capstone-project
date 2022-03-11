import { render, screen } from '@testing-library/react';
import Card from './Card.js';
import userEvent from '@testing-library/user-event';

describe('Card', () => {
  it('renders card with activity and friend as well as button', () => {
    render(<Card activity="Frau Möller" friend="Clara" />);

    const activity = screen.getByText('Frau Möller');
    const friend = screen.getByText('Clara');
    const button = screen.getByRole('button');

    expect(activity).toBeInTheDocument();
    expect(friend).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  //copy this one into deletemodal
  it('with a click on the bin, the delete function will be called', () => {
    const deleteCallback = jest.fn();
    render(<Card onDeleteActivity={deleteCallback} />);

    const deleteButton = screen.getByRole('button');

    userEvent.click(deleteButton);
    expect(deleteCallback).toHaveBeenCalled();
  });

  //check DeleteModal click
});
