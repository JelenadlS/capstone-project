
    import { render, screen } from '@testing-library/react';
    import Form from './Form.js';

    describe('Form', () => {
      it('renders..', () => {
        render(<Form />);
    
        expect(screen.getByText('Form')).toBeInTheSocument()
      });
    });
  