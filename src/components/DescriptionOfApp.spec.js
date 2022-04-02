
    import { render, screen } from '@testing-library/react';
    import DescriptionOfApp from './DescriptionOfApp.js';

    describe('DescriptionOfApp', () => {
      it('renders..', () => {
        render(<DescriptionOfApp />);
    
        expect(screen.getByText('DescriptionOfApp')).toBeInTheSocument()
      });
    });
  