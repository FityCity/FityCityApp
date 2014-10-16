#!/usr/bin/env node


var exec = require('child_process').exec;
exec('cordova plugin add https://github.com/phonegap-build/PushPlugin.git', function (error, stdout, stderr) {
      console.log(stdout, error, stderr)
});

exec('cordova -d plugin add https://github.com/phonegap/phonegap-facebook-plugin.git --variable APP_ID="1552086008346502" --variable APP_NAME="fitecity"', function (error, stdout, stderr) {
      console.log(stdout, error, stderr)
});

exec('android update project --subprojects --path "platforms/android" --target android-19 --library "CordovaLib"', function (error, stdout, stderr) {
      console.log(stdout, error, stderr)
});

exec('android update project --subprojects --path "platforms/android" --target android-19 --library "FacebookLib"', function (error, stdout, stderr) {
      console.log(stdout, error, stderr)
});