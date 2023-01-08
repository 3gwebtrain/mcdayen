import { render } from '@testing-library/react';

import MicroComponents from './micro-components';

describe('MicroComponents', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<MicroComponents />);
        expect(baseElement).toBeTruthy();
    });
});
