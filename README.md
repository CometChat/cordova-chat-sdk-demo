# cordova-chat-sdk-demo
CometChat enables you to add voice, video and text chat to your iOS app in minutes! That's not all, CometChat has whiteboard, writeboard, real-time translation and more.

# Quick Start

1. Download the sample Cordova project from this repository.
2. Open the `www/js/index.js` file and replace the `CometChat License Key` and `API Key` values. These values can be found in the `CometChat Admin Panel`, under the `Settings`-> `API Keys` section.

3. Navigate to the project directory and add the Android and iOS platforms to your project using the below commands:

cordova platform add android</br>
cordova platform add ios

4. Add the CometChat Cordova plugin from the NPM store using the below command:

cordova plugin add cordova-plugin-cccometchat

Please Note: As CometChat Cordova plugin makes use if Cocoapods, please make sure you setup Cocoapods in the /platforms/ios/ folder and call the pod update command once the Cordova plugin is added to your project.

5. Run the app using the below commands:

cordova run android</br>
cordova run ios

# Please Note:

CometChat Cordova plugin only supports the Android and iOS platforms.


For more information regarding the CometChat Cordova SDK , please refer to the [developer documentation](https://developer.cometchat.com/docs/cordova-quick-start).

