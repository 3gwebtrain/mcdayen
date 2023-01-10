import { render } from '@testing-library/react';

import BtnAddProduct from './btn-add-product';

describe('BtnAddProduct', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<BtnAddProduct />);
        expect(baseElement).toBeTruthy();
    });
});
