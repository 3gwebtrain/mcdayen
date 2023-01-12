import { render } from '@testing-library/react';

import SizeGuide from './size-guide';

describe('SizeGuide', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SizeGuide />);
        expect(baseElement).toBeTruthy();
    });
});
