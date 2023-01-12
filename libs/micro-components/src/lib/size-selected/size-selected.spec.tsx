import { render } from '@testing-library/react';

import SizeSelected from './size-selected';

describe('SizeSelected', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SizeSelected />);
        expect(baseElement).toBeTruthy();
    });
});
