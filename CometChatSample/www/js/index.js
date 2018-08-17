/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var licenseKey = "COMETCHAT-XXXXX-XXXXX-XXXXX-XXXXX"; // Replace the value with your CometChat License Key;
var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx" // Replace the value with your CometChat Api Key;
var UID1 = "SUPERHERO1"
var UID2 = "SUPERHERO2"


function initializeChat() {
    showLoader();
    document.getElementById("initializeChat").setAttribute("disabled", "disabled");

    //New Plugin End
    CCCometChat.initializeCometChat("", licenseKey, apiKey, true, function success(response) {
        alert("Inside Success Callback " + response);
        showLogins();
        showLoader(false);
    }, function failure(error) {
        alert("Inside Fail Callback " + error);
        document.getElementById("initializeChat").removeAttribute("disabled");
        showLoader(false);
    });
}

function login(UID) {
    showLoader();
    showLogins(false);
    CCCometChat.loginWithUID(UID, function success(response) {
        alert("Logged in as : " + UID + " Response : " + response);
        document.getElementById("launchChat").removeAttribute("disabled");
        showLoader(false);
    }, function failure(error) {
        alert("Inside Login failure Callback " + error);
        showLogins();
        showLoader(false);
    });
}

function launchChat() {
    var isFullScreen = true;
    showLoader();

    CCCometChat.launchCometChat(isFullScreen, function success(data) {
        showLoader(false);

        CCCometChat.getPlatform(currentplatform => {

            if (currentplatform.platform == "iOS") {
                data = JSON.stringify(data);
            }
            data = JSON.parse(data);

            if (data.hasOwnProperty("userInfoCallback")) {
                subscribeToChannel(data.userInfoCallback.push_channel);
            } else if (data.hasOwnProperty('chatroomInfoCallback')) {
                subscribeToChannel(data.chatroomInfoCallback.push_channel);
            }

        });
    }, function error(data) {

        showLoader(false);
    });
}

function subscribeToChannel(push_channel) {
    console.log("subscribeToChannel : " + push_channel);
    //you can subscribe to Firebase using above pushchannel 
}

function showLoader(show = true) {
    if (show) {
        document.getElementById("loader").style.display = "block";
    } else {
        document.getElementById("loader").style.display = "none";
    }
}

function showLogins(show = true) {
    if (show) {
        document.getElementById("loginWithSuperHero1").removeAttribute("disabled");
        document.getElementById("loginWithSuperHero2").removeAttribute("disabled");
    } else {
        document.getElementById("loginWithSuperHero1").setAttribute("disabled", "disabled");
        document.getElementById("loginWithSuperHero2").setAttribute("disabled", "disabled");
    }
}