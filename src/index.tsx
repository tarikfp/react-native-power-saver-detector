import { NativeModules, Platform } from 'react-native';
import type { IPowerSaverChecker } from './types';

const LINKING_ERROR =
  `The package 'react-native-power-saver-checker' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const PowerSaverCheckerModule: IPowerSaverChecker =
  NativeModules.PowerSaverChecker
    ? NativeModules.PowerSaverChecker
    : new Proxy(
        {},
        {
          get() {
            throw new Error(LINKING_ERROR);
          },
        }
      );

const isLowPowerModeEnabled = async (): Promise<boolean | null> => {
  if (Platform.OS === 'ios') {
    try {
      const isEnabled = await PowerSaverCheckerModule.isLowPowerModeEnabled();
      return isEnabled;
    } catch (error) {
      throw new Error(String(error));
    }
  } else {
    console.warn('isLowPowerModeEnabled is not available on this platform.');
    return null;
  }
};

const isPowerSaverModeEnabledSync = (): boolean | null => {
  if (Platform.OS === 'android') {
    return PowerSaverCheckerModule.isPowerSaverModeEnabledSync();
  } else {
    console.warn(
      'isPowerSaverModeEnabledSync is not available on this platform.'
    );
    return null;
  }
};

const isPowerSaverModeEnabled = async (): Promise<boolean | null> => {
  if (Platform.OS === 'android') {
    try {
      const isEnabled = await PowerSaverCheckerModule.isPowerSaverModeEnabled();
      return isEnabled;
    } catch (error) {
      throw new Error(String(error));
    }
  } else {
    console.warn('isPowerSaverModeEnabled is not available on this platform.');
    return null;
  }
};

const openPowerSaverSettings = (): void => {
  if (Platform.OS === 'android') {
    PowerSaverCheckerModule.openPowerSaverSettings();
  } else {
    console.warn('openPowerSaverSettings is not available on this platform.');
  }
};

export const PowerSaverChecker: IPowerSaverChecker = {
  isLowPowerModeEnabled,
  isPowerSaverModeEnabledSync,
  isPowerSaverModeEnabled,
  openPowerSaverSettings,
};

export * from './types';
