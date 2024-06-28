import { NativeModules, Platform } from 'react-native';
import type { IPowerSaverDetector } from './types';

const LINKING_ERROR =
  `The package 'react-native-power-saver' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const PowerSaverDetectorModule: IPowerSaverDetector =
  NativeModules.PowerSaverDetector
    ? NativeModules.PowerSaverDetector
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
      const isEnabled = await PowerSaverDetectorModule.isLowPowerModeEnabled();
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
    return PowerSaverDetectorModule.isPowerSaverModeEnabledSync();
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
      const isEnabled =
        await PowerSaverDetectorModule.isPowerSaverModeEnabled();
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
    PowerSaverDetectorModule.openPowerSaverSettings();
  } else {
    console.warn('openPowerSaverSettings is not available on this platform.');
  }
};

export const PowerSaverDetector: IPowerSaverDetector = {
  isLowPowerModeEnabled,
  isPowerSaverModeEnabledSync,
  isPowerSaverModeEnabled,
  openPowerSaverSettings,
};

export * from './types';
