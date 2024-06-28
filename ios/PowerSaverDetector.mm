#import "PowerSaverDetector.h"
#import <React/RCTLog.h>
#import <React/RCTUtils.h>

@implementation PowerSaverDetector

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(isLowPowerModeEnabled,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  @try {
    if ([[NSProcessInfo processInfo] respondsToSelector:@selector(isLowPowerModeEnabled)]) {
      BOOL lowPowerModeEnabled = [NSProcessInfo processInfo].isLowPowerModeEnabled;
      resolve(@(lowPowerModeEnabled));
    } else {
      resolve(nil);
    }
  } @catch (NSException *exception) {
    reject(@"Error", @"Failed to check Low Power Mode", nil);
  }
}


@end
