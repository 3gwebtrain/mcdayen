import { render } from '@testing-library/react';

import ThumbTitle from './thumb-title';

describe('ThumbTitle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ThumbTitle />);
        expect(baseElement).toBeTruthy();
    });
});
