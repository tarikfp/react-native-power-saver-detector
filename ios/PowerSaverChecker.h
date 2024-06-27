
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPowerSaverCheckerSpec.h"

@interface PowerSaverChecker : NSObject <NativePowerSaverCheckerSpec>
#else
#import <React/RCTBridgeModule.h>

@interface PowerSaverChecker : NSObject <RCTBridgeModule>
#endif

@end
