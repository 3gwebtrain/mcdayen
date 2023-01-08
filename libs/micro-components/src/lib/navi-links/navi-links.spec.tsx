import { render } from '@testing-library/react';

import NaviLinks from './navi-links';

describe('NaviLinks', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<NaviLinks />);
        expect(baseElement).toBeTruthy();
    });
});
