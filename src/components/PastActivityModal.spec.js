import { render, screen } from '@testing-library/react';
import PastActivityModal from './PastActivityModal.js';

describe('PastActivityModal', () => {
  it('renders a modal with three buddons', () => {
    render(<PastActivityModal />);

    const like = screen.getByRole('button', {
      name: 'It was great, I wanna do it again!',
    });
    const notLike = screen.getByRole('button', {
      name: 'Naahh it was not so good',
    });
    const quit = screen.getByRole('button', { name: 'delete' });

    expect(like).toBeInTheDocument();
    expect(notLike).toBeInTheDocument();
    expect(quit).toBeInTheDocument();
  });
});
