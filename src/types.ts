export interface IPowerSaverDetector {
  /**
   * Checks if Low Power Mode is enabled on iOS.
   *
   * @returns {Promise<boolean | null>} - A promise that resolves to `true` if Low Power Mode is enabled, `false` if not, and `null` if the check fails.
   *
   * This might return `null` if the system information is unavailable or an error occurs during the check.
   *
   * @platform iOS
   */
  isLowPowerModeEnabled(): Promise<boolean | null>;

  /**
   * Synchronously checks if Power Saver Mode is enabled on Android.
   *
   * @returns {boolean | null} - `true` if Power Saver Mode is enabled, `false` if not, and `null` if the PowerManager service is unavailable.
   *
   * This might return `null` if the PowerManager service is not available on the device or an error occurs during the check.
   */
  isPowerSaverModeEnabledSync(): boolean | null;

  /**
   * Asynchronously checks if Power Saver Mode is enabled on Android.
   *
   * @returns {Promise<boolean | null>} - A promise that resolves to `true` if Power Saver Mode is enabled, `false` if not, and `null` if the PowerManager service is unavailable.
   *
   * This might return `null` if the PowerManager service is not available on the device or an error occurs during the check.
   *
   * @platform Android
   */
  isPowerSaverModeEnabled(): Promise<boolean | null>;

  /**
   * Navigates to the Power Saver Mode settings on Android.
   *
   * This method attempts to open the Power Saver Mode settings page in the system settings. It may not work on all Android devices or OS versions.
   *
   * @platform Android
   */
  openPowerSaverSettings(): void;
}
