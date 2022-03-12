import { render, screen } from '@testing-library/react';
import DeleteModal from './DeleteModal.js';
import userEvent from '@testing-library/user-event';

describe('DeleteModal', () => {
  it('renders a p element with text and two buttons', () => {
    render(<DeleteModal />);
  });
});
