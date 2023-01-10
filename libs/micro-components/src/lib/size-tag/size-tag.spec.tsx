import { render } from '@testing-library/react';

import SizeTag from './size-tag';

describe('SizeTag', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SizeTag />);
        expect(baseElement).toBeTruthy();
    });
});
