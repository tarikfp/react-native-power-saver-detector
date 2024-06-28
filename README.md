# React Native Power Saver Detector
`react-native-power-saver-detector` is a React Native library that provides methods for checking `Low Power Mode` on iOS and `Power Saver/Battery Saver` Mode on Android, as well as navigating to the `Power Saver/Battery Saver` Mode settings on Android.

## Overview
<table>
  <tr>
    <td style="text-align: center;"><b>Android</b></td>
    <td style="text-align: center;"><b>iOS</b></td>
  </tr>
  <tr>
    <td style="text-align: center;"><img src="https://github.com/tarikfp/react-native-power-saver-detector/assets/61876765/56c725be-f893-4b0c-af3a-c2dd4052faca" alt="Screenshot_1719612794" style="width: 100%; max-width: 200px;"></td>
    <td style="text-align: center;"><img src="https://github.com/tarikfp/react-native-power-saver-detector/assets/61876765/a362997d-59aa-4aba-96e8-5d2bf9e77be6" alt="IMG_8027" style="width: 100%; max-width: 200px;"></td>
  </tr>
</table>

## Installation

To install the library, use either npm or yarn:

```sh
npm install react-native-power-saver-detector
# or
yarn add react-native-power-saver-detector
```

### Linking

For React Native 0.60 and above, the library should be automatically linked. For older versions, you will need to link the library manually:

```sh
react-native link react-native-power-saver-detector
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
import { PowerSaverDetector } from 'react-native-power-saver-detector';

PowerSaverDetector.isLowPowerModeEnabled().then((isEnabled) => {
  console.log('Low Power Mode enabled:', isEnabled);
});
```

### isPowerSaverModeEnabledSync

Synchronously checks if Power Saver Mode is enabled on Android.

#### Returns

`boolean | null`: Returns `true` if Power Saver Mode is enabled, `false` if not, and `null` if the PowerManager service is unavailable. This might return `null` if the PowerManager service is not available on the device or an error occurs during the check.

#### Example

```typescript
import { PowerSaverDetector } from 'react-native-power-saver-detector';

const isEnabled = PowerSaverDetector.isPowerSaverModeEnabledSync();
console.log('Power Saver Mode enabled (sync):', isEnabled);
```

### isPowerSaverModeEnabled

Asynchronously checks if Power Saver Mode is enabled on Android.

#### Returns

`Promise<boolean | null>`: A promise that resolves to `true` if Power Saver Mode is enabled, `false` if not, and `null` if the PowerManager service is unavailable. This might return `null` if the PowerManager service is not available on the device or an error occurs during the check.

#### Example

```typescript
import { PowerSaverDetector } from 'react-native-power-saver-detector';

PowerSaverDetector.isPowerSaverModeEnabled().then((isEnabled) => {
  console.log('Power Saver Mode enabled (async):', isEnabled);
});
```

### openPowerSaverSettings

Navigates to the Power Saver Mode settings on Android.

#### Example

```typescript
import { PowerSaverDetector } from 'react-native-power-saver-detector';

PowerSaverDetector.openPowerSaverSettings();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to discuss any changes.

## License

This project is licensed under the MIT License.
