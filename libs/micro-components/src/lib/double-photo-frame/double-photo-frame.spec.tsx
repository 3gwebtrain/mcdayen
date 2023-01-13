import { render } from '@testing-library/react';

import DoublePhotoFrame from './double-photo-frame';

describe('DoublePhotoFrame', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DoublePhotoFrame />);
        expect(baseElement).toBeTruthy();
    });
});
