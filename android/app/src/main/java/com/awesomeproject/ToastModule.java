package com.awesomeproject;
//import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.widget.Toast;
public class ToastModule extends ReactContextBaseJavaModule{

    public ToastModule(ReactApplicationContext reactApplicationContext){
          super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "ToastExample";
    }
    @ReactMethod
    public void showToast(String message, int duration ) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}