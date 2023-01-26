import 'detox';

describe('Weather city list and details', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: {notifications: 'YES'},
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the weather city list screen, tap the "Paris" item and navigate to its details screen and tap the button', async () => {
    await expect(element(by.id('weather-city-list-screen'))).toBeVisible();

    await expect(element(by.text('Paris'))).toBeVisible();

    await element(by.text('Paris')).tap();

    await expect(element(by.id('weather-city-details-screen'))).toBeVisible();

    await expect(element(by.text('Paris')).atIndex(0)).toBeVisible();

    await element(by.text('Show notification')).tap();
  });
});
