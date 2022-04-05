import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PastActivityModal from './PastActivityModal.js';

describe('PastActivityModal', () => {
  const onSetPastActivity = jest.fn();
  it('renders a question of how was it and three buttons', () => {
    render(<PastActivityModal showPastModal={true} />);
    const text = screen.getByText('Tell us, how was it?');
    const quit = screen.getByRole('button', {
      name: 'quit/ keep and return back',
    });
    const goodButton = screen.getByRole('button', {
      name: 'It was great, I wanna do it again!',
    });
    const badButton = screen.getByRole('button', {
      name: 'Naahh it was not so good',
    });

    expect(text).toBeInTheDocument();
    expect(quit).toBeInTheDocument();
    expect(goodButton).toBeInTheDocument();
    expect(badButton).toBeInTheDocument();
  });
});
