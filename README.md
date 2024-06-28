# React Native Power Saver

[![npm version](https://img.shields.io/npm/v/react-native-power-saver.svg)](https://www.npmjs.com/package/react-native-power-saver)

`react-native-power-saver` is a React Native library that provides methods for checking Low Power Mode on iOS and Power Saver Mode on Android, as well as navigating to the Power Saver Mode settings on Android.

## Installation

To install the library, use either npm or yarn:

```sh
npm install react-native-power-saver
# or
yarn add react-native-power-saver
```

### Linking

For React Native 0.60 and above, the library should be automatically linked. For older versions, you will need to link the library manually:

```sh
react-native link react-native-power-saver
```

For iOS, don't forget to run `pod install` after linking the library:

```sh
cd ios && pod install
```

## API

| Method                        | Description                                                      | Platform |
| ----------------------------- | ---------------------------------------------------------------- | -------- |
| `isLowPowerModeEnabled`       | Checks if Low Power Mode is enabled on iOS.                      | iOS      |
| `isPowerSaverModeEnabledSync` | Synchronously checks if Power Saver Mode is enabled on Android.  | Android  |
| `isPowerSaverModeEnabled`     | Asynchronously checks if Power Saver Mode is enabled on Android. | Android  |
| `openPowerSaverSettings`      | Navigates to the Power Saver Mode settings on Android.           | Android  |

### isLowPowerModeEnabled

Checks if Low Power Mode is enabled on iOS.

#### Returns

`Promise<boolean | null>`: A promise that resolves to `true` if Low Power Mode is enabled, `false` if not, and `null` if the check fails. This might return `null` if the system information is unavailable or an error occurs during the check.

#### Example

```typescript
import { PowerSaverChecker } from 'react-native-power-saver';

PowerSaverChecker.isLowPowerModeEnabled().then((isEnabled) => {
  console.log('Low Power Mode enabled:', isEnabled);
});
```

### isPowerSaverModeEnabledSync

Synchronously checks if Power Saver Mode is enabled on Android.

#### Returns

`boolean | null`: Returns `true` if Power Saver Mode is enabled, `false` if not, and `null` if the PowerManager service is unavailable. This might return `null` if the PowerManager service is not available on the device or an error occurs during the check.

#### Example

```typescript
import { PowerSaverChecker } from 'react-native-power-saver';

const isEnabled = PowerSaverChecker.isPowerSaverModeEnabledSync();
console.log('Power Saver Mode enabled (sync):', isEnabled);
```

### isPowerSaverModeEnabled

Asynchronously checks if Power Saver Mode is enabled on Android.

#### Returns

`Promise<boolean | null>`: A promise that resolves to `true` if Power Saver Mode is enabled, `false` if not, and `null` if the PowerManager service is unavailable. This might return `null` if the PowerManager service is not available on the device or an error occurs during the check.

#### Example

```typescript
import { PowerSaverChecker } from 'react-native-power-saver';

PowerSaverChecker.isPowerSaverModeEnabled().then((isEnabled) => {
  console.log('Power Saver Mode enabled (async):', isEnabled);
});
```

### openPowerSaverSettings

Navigates to the Power Saver Mode settings on Android.

#### Example

```typescript
import { PowerSaverChecker } from 'react-native-power-saver';

PowerSaverChecker.openPowerSaverSettings();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to discuss any changes.

## License

This project is licensed under the MIT License.
