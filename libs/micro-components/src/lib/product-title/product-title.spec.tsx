import { render } from '@testing-library/react';

import ProductTitle from './product-title';

describe('ProductTitle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProductTitle />);
        expect(baseElement).toBeTruthy();
    });
});
