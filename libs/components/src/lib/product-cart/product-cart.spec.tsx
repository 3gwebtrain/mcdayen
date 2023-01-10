import { render } from '@testing-library/react';

import ProductCart from './product-cart';

describe('ProductCart', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProductCart />);
        expect(baseElement).toBeTruthy();
    });
});
