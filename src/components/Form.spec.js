import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Form from './Form.js';

describe('Form', () => {
  it('renders a form with four textboxes, the date and a button', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const textboxes = screen.getAllByRole('textbox');
    const date = screen.getByTestId('date');
    const submitButton = screen.getByRole('button');

    expect(textboxes).toHaveLength(4);
    expect(date).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
