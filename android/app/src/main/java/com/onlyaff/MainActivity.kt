package com.onlyaff

import android.content.Intent
import android.os.Bundle
import com.reactnativenavigation.NavigationActivity
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : NavigationActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        SplashScreen.show(this, true)
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        setIntent(intent)
    }
}
