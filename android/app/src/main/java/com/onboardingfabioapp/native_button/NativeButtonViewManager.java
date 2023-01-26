package com.onboardingfabioapp.native_button;

import android.graphics.Color;

import androidx.annotation.NonNull;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class NativeButtonViewManager extends SimpleViewManager<NativeButton> {
    @NonNull
    @Override
    public String getName() {
        return "NativeButton";
    }

    @NonNull
    @Override
    protected NativeButton createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new NativeButton(reactContext);
    }

    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder
                .builder()
                .put("press", MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", "onPress")))
                .build();
    }

    @ReactProp(name = "enabled")
    public void setEnabled(NativeButton button, Boolean enabled) {
        button.setEnabled(enabled);
    }

    @ReactProp(name = "text")
    public void setText(NativeButton button, String text) {
        button.setText(text);
    }

    @ReactProp(name = "textColor", customType = "Color")
    public void setTextColor(NativeButton button, Integer textColor) {
        button.setTextColor(textColor);
    }
}
