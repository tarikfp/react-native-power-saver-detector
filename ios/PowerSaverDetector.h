
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPowerSaverDetectorSpec.h"

@interface PowerSaverDetector : NSObject <NativePowerSaverDetectorSpec>
#else
#import <React/RCTBridgeModule.h>

@interface PowerSaverDetector : NSObject <RCTBridgeModule>
#endif

@end
