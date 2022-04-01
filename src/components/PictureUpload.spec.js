
    import { render, screen } from '@testing-library/react';
    import PictureUpload from './PictureUpload.js';

    describe('PictureUpload', () => {
      it('renders..', () => {
        render(<PictureUpload />);
    
        expect(screen.getByText('PictureUpload')).toBeInTheSocument()
      });
    });
  