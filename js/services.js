angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('Vendors', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vendors = [
    { id: 0, 
      name: 'Bliss Organic',
      address: '11 Ebenezer Pl',
      image:'img/vendors/bliss_organic.jpg'
    },
    { id: 1, 
      name: 'Cafe Troppo',
      address: '7 Compton St',
      image:'img/vendors/bliss_organic.jpg'},
    { id: 2, 
      name: 'Hey Jupiter',
      address: '11 Ebenezer Pl',
      image:'img/vendors/bliss_organic.jpg' },
    { id: 3, 
      name: "Paddy's Lantern",
      address: '11 Ebenezer Pl',
      image:'img/vendors/bliss_organic.jpg' },
    { id: 4, 
      name: "Sad Cafe",
      address: '11 Ebenezer Pl',
      image:'img/vendors/bliss_organic.jpg' }
  ];

  return {
    all: function() {
      return vendors;
    },
    get: function(vendorId) {
      // Simple index lookup
      return vendors[vendorId];
    }
  }
});


//factory for processing push notifications.
angular.module('pushnotification', [])
   .factory('PushProcessingService', function() {

      var registrationId = "";

        function onDeviceReady() {
            alert("Device Ready");
            console.info('NOTIFY  Device is ready.  Registering with GCM server');
            //register with google GCM server
            var pushNotification = window.plugins.pushNotification;
            pushNotification.register(
              gcmSuccessHandler, 
              gcmErrorHandler, 
              {"senderID":"756743545712","ecb":"onNotificationGCM"});
        }
        function gcmSuccessHandler(result) {
            alert(result)
            console.info('NOTIFY  pushNotification.register succeeded.  Result = '+result)
        }
        function gcmErrorHandler(error) {
            alert(error)
            console.error('NOTIFY  '+error);
        }
        return {
            initialize : function () {
                console.info('NOTIFY  initializing');
                document.addEventListener('deviceready', onDeviceReady, false);
            },
            registerID : function (id) {
                //Insert code here to store the user's ID on your notification server. 
                //You'll probably have a web service (wrapped in an Angular service of course) set up for this.  
                //For example:
                // MyService.registerNotificationID(id).then(function(response){
                //     if (response.data.Result) {
                //         console.info('NOTIFY  Registration succeeded');
                //     } else {
                //         console.error('NOTIFY  Registration failed');
                //     }
                // });
                alert("got ID");
                alert(id);
                registrationId = id;
            }, 
            //unregister can be called from a settings area.
            unregister : function () {
                console.info('unregister')
                var push = window.plugins.pushNotification;
                if (push) {
                    push.unregister(function () {
                        console.info('unregister success')
                    });
                }
            },

            getId:function(){
              return registrationId;
            }
        }
    });
 
 
// ALL GCM notifications come through here. 
function onNotificationGCM(e) {
    console.log('EVENT -&gt; RECEIVED:' + e.event + '');
    switch( e.event )
    {
        case 'registered':
            if ( e.regid.length > 0 )
            {
                console.log('REGISTERED with GCM Server -> REGID:' + e.regid );
 
                //call back to web service in Angular.  
                //This works for me because in my code I have a factory called
                //      PushProcessingService with method registerID
                var elem = angular.element(document.querySelector('[ng-app]'));
                var injector = elem.injector();
                var myService = injector.get('PushProcessingService');
                // alert(e.regid);
                // alert(myService)
                myService.registerID(e.regid);
            }
            break;
 
        case 'message':
            // if this flag is set, this notification happened while we were in the foreground.
            // you might want to play a sound to get the user's attention, throw up a dialog, etc.
            if (e.foreground)
            {
                //we're using the app when a message is received.
                console.log('--INLINE NOTIFICATION--' + '');
 
                // if the notification contains a soundname, play it.
                //var my_media = new Media(&quot;/android_asset/www/&quot;+e.soundname);
                //my_media.play();
                alert(e.payload.message);
            }
            else
            {   
                // otherwise we were launched because the user touched a notification in the notification tray.
                if (e.coldstart)
                    console.log('--COLDSTART NOTIFICATION--' + '');
                else
                    console.log('--BACKGROUND NOTIFICATION--' + '');
 
                // direct user here:
                window.location = "#/tab/dash";
            }
 
            console.log('MESSAGE -&gt; MSG: ' + e.payload.message + '');
            console.log('MESSAGE: '+ JSON.stringify(e.payload));
            break;
 
        case 'error':
            console.log('ERROR -&gt; MSG:' + e.msg + '');
            break;
 
        default:
            console.log('EVENT -&gt; Unknown, an event was received and we do not know what it is');
            break;
    }
}
