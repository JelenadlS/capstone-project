import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Form from './Form.js';

describe('Form', () => {
  it('renders a form with four textboxes, the select box, the date and a button', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const textBoxes = screen.getAllByRole('textbox');
    const selectBox = screen.getByRole('combobox');
    const categoryOptions = screen.getAllByRole('option');
    const previewImage = screen.getByRole('img', { name: 'preview' });
    const date = screen.getByTestId('date');
    const submitButton = screen.getByRole('button');

    expect(textBoxes).toHaveLength(4);
    expect(selectBox).toBeInTheDocument();
    expect(categoryOptions).toHaveLength(5);
    expect(previewImage).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
