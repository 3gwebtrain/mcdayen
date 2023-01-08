import { render } from '@testing-library/react';

import QuickSearch from './quick-search';

describe('QuickSearch', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<QuickSearch />);
        expect(baseElement).toBeTruthy();
    });
});
