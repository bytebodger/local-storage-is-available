import { localStorageIsAvailable } from './local.storage.is.available';

test('localStorage is available in the jest console', () => {
   expect(localStorageIsAvailable()).toEqual(true);
});
