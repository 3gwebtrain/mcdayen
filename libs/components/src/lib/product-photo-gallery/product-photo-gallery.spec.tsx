import { render } from '@testing-library/react';

import ProductPhotoGallery from './product-photo-gallery';

describe('ProductPhotoGallery', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProductPhotoGallery />);
        expect(baseElement).toBeTruthy();
    });
});
