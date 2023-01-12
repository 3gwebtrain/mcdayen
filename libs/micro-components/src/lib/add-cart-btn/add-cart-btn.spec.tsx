import { render } from '@testing-library/react';

import AddCartBtn from './add-cart-btn';

describe('AddCartBtn', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AddCartBtn />);
        expect(baseElement).toBeTruthy();
    });
});
