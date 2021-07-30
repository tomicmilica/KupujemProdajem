
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react';
import AdsPage from '../components/AdsPage';
// the component to test

jest.mock('../services/adsPageService', () => ({
    findAd: () => {
        return Promise.resolve({
            data:
                [
                    {
                        name: 'Jacket',
                        description: 'cotton'

                    }
                ],

            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        })
    }
}));

describe('AdsPage tests', () => {
    beforeEach(async () => {
        await waitFor(() => render(<AdsPage />))
    });

    it('Ads are rendered', async () => {
        screen.getByText('Jacket');
        screen.debug();
    });
});