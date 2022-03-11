
    import { render, screen } from '@testing-library/react';
    import DeleteModal from './DeleteModal.js';

    describe('DeleteModal', () => {
      it('renders..', () => {
        render(<DeleteModal />);
    
        expect(screen.getByText('DeleteModal')).toBeInTheSocument()
      });
    });
  