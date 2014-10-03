#!/usr/bin/env node


var exec = require('child_process').exec;
exec('cordova plugin add https://github.com/phonegap-build/PushPlugin.git', function (error, stdout, stderr) {
      console.log(stdout, error, stderr)
});
