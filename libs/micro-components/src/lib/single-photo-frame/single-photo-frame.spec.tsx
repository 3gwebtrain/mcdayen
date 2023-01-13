import { render } from '@testing-library/react';

import SinglePhotoFrame from './single-photo-frame';

describe('SinglePhotoFrame', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SinglePhotoFrame />);
        expect(baseElement).toBeTruthy();
    });
});
