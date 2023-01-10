import { render } from '@testing-library/react';

import ProductThumb from './product-thumb';

describe('ProductThumb', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProductThumb />);
        expect(baseElement).toBeTruthy();
    });
});
