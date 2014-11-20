var module = angular.module('com.fitecity.video', []);

module.factory('Video', function($http) {

    var VIDEOAPI = 'http://fitecity.herokuapp.com/videos'
    var ENDPOINT = 'http://fitecity.herokuapp.com/policies';
    var S3_BUCKET= encodeURI('http://s3.amazonaws.com/fitecity/');

    var self = {
        status:
    };

    self.hello = function(){
        console.log("Hello from video");
    };

    self.upload = function(fileUri, md){

        console.log("uploading", fileUri);

        var timestamp = undefined;
        var onSuccess = function(msg){
            console.log("Success", msg);
            var post = $http.post(VIDEOAPI, {
                vendor_id: md.vendor_id,
                activity_id: md.activity_id,
                user_id: md.user_id,
                timestamp:timestamp
            });
        }

        var onError = function(msg){
            console.log("Fail", msg);
        }

        console.log("md: ", md);
        var post = $http.post(ENDPOINT, {
            vendor_id: md.vendor_id,
            activity_id: md.activity_id,
            user_id: md.user_id
        });
        post.then(function(res){
            timestamp = res.data.timestamp;
            var filename = res.data.filename;
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = filename;
            options.mimeType = "video/mp4";
            options.httpMethod = "post";
            options.params = {
                key:filename,
                acl:'public-read',
                'content-type':"video/mp4",
                AWSAccessKeyId:res.data.awsKey,
                policy:res.data.policy,
                signature:res.data.signature
            };

            console.log("FileTransfer Options", options);
            
            var ft = new FileTransfer();
            ft.upload(fileUri, S3_BUCKET, onSuccess, onError, options);
        });
    };

    return self;
})