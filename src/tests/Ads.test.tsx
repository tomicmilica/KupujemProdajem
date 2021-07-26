
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import { AdsData } from './Mocks/adsMock'
// the component to test

jest.mock('src/services/AdsService', () => ({
    getAds: jest.fn().mockImplementation(()=>Promise.resolve(AdsData))
}) 
);

  