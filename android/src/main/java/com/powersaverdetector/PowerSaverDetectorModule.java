package com.powersaverdetector;

import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

@ReactModule(name = PowerSaverDetectorModule.NAME)
public class PowerSaverDetectorModule extends ReactContextBaseJavaModule {
  public static final String NAME = "PowerSaverDetector";
  private static ReactApplicationContext reactContext;


  public PowerSaverDetectorModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


 @ReactMethod(isBlockingSynchronousMethod = true)
  public Boolean isPowerSaverModeEnabledSync() {
    PowerManager powerManager = (PowerManager) reactContext.getSystemService(Context.POWER_SERVICE);
    if (powerManager == null) {
      // PowerManager is not available
      return null;
    }

    boolean isPowerSaverMode = false;
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      isPowerSaverMode = powerManager.isPowerSaveMode();
    }
    return isPowerSaverMode;
  }



  @ReactMethod
  public void isPowerSaverModeEnabled(Promise promise) {
    try {
      PowerManager powerManager = (PowerManager) reactContext.getSystemService(Context.POWER_SERVICE);
      if (powerManager == null) {
        // PowerManager is not available
        promise.resolve(null);
        return;
      }

      boolean isPowerSaveMode = false;
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        isPowerSaveMode = powerManager.isPowerSaveMode();
      }
      promise.resolve(isPowerSaveMode);
    } catch (Exception e) {
      promise.reject("Error", e);
    }
  }



  @ReactMethod
  public void openPowerSaverSettings() {
    try {
      Intent intent = new Intent(Settings.ACTION_BATTERY_SAVER_SETTINGS);
      intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
      reactContext.startActivity(intent);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
