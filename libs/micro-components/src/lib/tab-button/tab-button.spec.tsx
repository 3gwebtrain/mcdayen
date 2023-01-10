import { render } from '@testing-library/react';

import TabButton from './tab-button';

describe('TabButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TabButton />);
        expect(baseElement).toBeTruthy();
    });
});
