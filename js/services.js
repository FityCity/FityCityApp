angular.module('starter.services', [])
        .factory('FacebookService', function() {

            return{
                getUserProfile: function() {
                    facebookConnectPlugin.api("/me", ["public_profile", "user_birthday"],
                            function(response) {
                                alert(JSON.stringify(response))
                            },
                            function(response) {
                                alert(JSON.stringify(response))
                            });
                }

            }
        })
        .factory('FacebookTokenService', function() {
            var token = "testToken";
            return{
                getToken: function() {
                    return token;
                },
                setToken: function(new_token) {
                    token = new_token;
                }
            }
        })
        .factory('LoginService', function($location, FacebookTokenService) {
            var self = {};
            self.login = function(event) {
                var target = event.target;
                if (target.name == "facebook") {
                    if (!window.cordova) {
                        console.log("browser init")
                        var appId = prompt("Enter FB Application ID", "");
                        facebookConnectPlugin.browserInit(appId);
                        $location.path("/tab/vendors")
                    }
                    facebookConnectPlugin.login(["email", "public_profile", "user_birthday"],
                            function(response) {
                                alert(JSON.stringify(response))
                                FacebookTokenService.setToken(response.authResponse.accessToken)
                                $location.path("/tab/vendors")
                            },
                            function(response) {
                                alert("failed")
                                alert(JSON.stringify(response))
                            });

                }
                else if (target.name == "google") {
                    $location.path("/tab/vendors")
                }
                else if (target.name == "twitter") {
                    $location.path("/tab/vendors")
                }

            }

            return self;
        })
        .factory('Camera', ['$q', function($q) {

                return {
                    getVideo: function(options) {
                        var q = $q.defer();
                        
                        navigator.device.capture.captureVideo(function(result) {
                            q.resolve(result);
                        }, function(err) {
                            q.reject(err);
                        }, options);

                        return q.promise;
                    }
                }
            }])

        .factory('Activities', function($http, $sce) {
            // var activities = [
            //   { id: 0,
            //     name:"Jumping Jacks",
            //     image:"img/modalities/jumping_jacks.gif",
            //     prompt:"Do 15 jumping jacks"
            //   },
            //   { id: 1,
            //     name:"Push ups",
            //     image:"img/modalities/push_ups.gif",
            //     prompt:"Do 15 push ups"
            //   },
            //   { id: 2,
            //     name:"Knee to nose",
            //     image:"img/modalities/knee-cross-crunch-ss.jpg",
            //     prompt:"Hold your knee to your nose for 15 seconds"
            //   },
            //   { id: 3,
            //     name:"Pull ups",
            //     image:"img/modalities/chin-ups.gif",
            //     prompt:"Do 5 pull ups"
            //   },
            // ]

            var activities = {};

            var requestActivity = $http.get('http://fitecity.herokuapp.com/activities');


            return {
                all: function(callback) {
                    requestActivity.then(function(res) {
                        angular.forEach(res.data, function(item, index) {
                            item['imgSrc'] = "http://img.youtube.com/vi/" + item.youtube_id + "/maxresdefault.jpg";
                            activities[item._id] = item;
                            console.log(item);
                        })
                        if (callback && typeof callback == 'function') {
                            callback(activities);
                        }
                    });
                },
                get: function(activityId) {
                    return activities[activityId];
                }
            }
        })
//new by yiwei
        .factory('Account', function(){
            var user={};
                user.name='Jen Selter';
                user.imgSrc="img/account/jen.png";
        return{
            get: function(){
                return user;
            }
        }


        })

        .factory('ActivityOthers', function() {
            var othersdoing = [
                {id: 0,
                    image: "img/modalities/jump_jack1.gif",
                },
                {id: 1,
                    image: "img/modalities/jump_jack2.gif",
                },
                {id: 2,
                    image: "img/modalities/jump_jack3.gif",
                },
                {id: 3,
                    image: "img/modalities/jump_jack4.gif",
                },
                {id: 4,
                    image: "img/modalities/jump_jack5.gif",
                },
                {id: 5,
                    image: "img/modalities/jump_jack6.gif",
                }]
            return{
                all: function() {
                    return othersdoing;
                },
                get: function(othersdoingId) {
                    return othersdoing[othersdoingId];
                }
            }
        })


        .factory('MyActivities', function() {
            var myActivities = [
                {id: 0,
                    title: "Personal Styling Sessions - Hyde Park",
                    description: "Have you ever wanted to go shopping with your very own personal stylist? Learn how to dress well on any budget with a Personal Styling Session from Clothed.",
                    image_url: "http://www.adelaidecitycouncil.com/images/made/assets/whats-on/designerexchange15_420_205_88_int_s_c1_c.jpeg",
                    date: "Every Saturday",
                    time: "11:00am - 2:00pm",
                    venue: "Starts at King William Road",
                },
                {id: 1,
                    title: "This is the second",
                    description: "Have you ever wanted to go shopping with your very own personal stylist? Learn how to dress well on any budget with a Personal Styling Session from Clothed.",
                    image_url: "http://www.adelaidecitycouncil.com/images/made/assets/whats-on/designerexchange15_420_205_88_int_s_c1_c.jpeg",
                    date: "Every Saturday",
                    time: "11:00am - 2:00pm",
                    venue: "Starts at King William Road",
                },
                {id: 2,
                    title: "This is the third",
                    description: "Have you ever wanted to go shopping with your very own personal stylist? Learn how to dress well on any budget with a Personal Styling Session from Clothed.",
                    image_url: "http://www.adelaidecitycouncil.com/images/made/assets/whats-on/designerexchange15_420_205_88_int_s_c1_c.jpeg",
                    date: "Every Saturday",
                    time: "11:00am - 2:00pm",
                    venue: "Starts at King William Road",
                }]
            return{
                all: function() {
                    return myActivities;
                },
                get: function(myActivitiesID) {
                    return myActivities[myActivitiesId];
                }
            }
        })
//end new by yiwei
//update by Viola at 3/11


        .factory('Vendors', function(HttpService) {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            // var vendors = [
            //     {id: 0,
            //         name: 'Bliss Organic',
            //         image: 'img/vendors/bliss_organic.jpg',
            //         distance: 0.1,
            //         address: "7 Compton St",
            //         points: 50,
            //         offers: [
            //             {
            //                 name: '10% discount of coffee',
            //                 points: 20
            //             },
            //             {
            //                 name: 'The second cup half price',
            //                 points: 50
            //             }],
            //         menu: [
            //             {
            //                 image: 'img/vendors/porkflossbread.jpg',
            //                 name: 'Pork Floss Bread',
            //                 price: 5
            //             },
            //             {
            //                 image: 'img/vendors/stuffedbun.jpg',
            //                 name: 'Stuffed Bun',
            //                 price: 3
            //             },
            //             {
            //                 image: 'img/vendors/toast.jpg',
            //                 name: 'Toast',
            //                 price: 6
            //             },
            //             {
            //                 image: 'img/vendors/redbeanmilktoast.jpg',
            //                 name: 'Red Bean Milk Toast',
            //                 price: 7
            //             }]
            //     },
            //     {id: 1,
            //         name: 'Cafe Troppo',
            //         image: 'img/vendors/cafe_troppo.jpg',
            //         distance: .4,
            //         address: "42 Whitmore Square",
            //         points: 40,
            //         offers: [
            //             {
            //                 name: '10% discount of coffee',
            //                 points: 20
            //             },
            //             {
            //                 name: 'The second cup half price',
            //                 points: 50
            //             }],
            //         menu: [
            //             {
            //                 image: 'img/vendors/porkflossbread.jpg',
            //                 name: 'Pork Floss Bread',
            //                 price: 5
            //             },
            //             {
            //                 image: 'img/vendors/stuffedbun.jpg',
            //                 name: 'Stuffed Bun',
            //                 price: 3
            //             },
            //             {
            //                 image: 'img/vendors/toast.jpg',
            //                 name: 'Toast',
            //                 price: 6
            //             },
            //             {
            //                 image: 'img/vendors/redbeanmilktoast.jpg',
            //                 name: 'Red Bean Milk Toast',
            //                 price: 7
            //             }]
            //     },
            //     {id: 2,
            //         name: 'Hey Jupiter',
            //         image: 'img/vendors/hey_jupiter.jpg',
            //         distance: .7,
            //         address: "11 Ebenezer Pl",
            //         points: 30,
            //         offers: [
            //             {
            //                 name: '10% discount of coffee',
            //                 points: 20
            //             },
            //             {
            //                 name: 'The second cup half price',
            //                 points: 50
            //             }],
            //         menu: [
            //             {
            //                 image: 'img/vendors/porkflossbread.jpg',
            //                 name: 'Pork Floss Bread',
            //                 price: 5
            //             },
            //             {
            //                 image: 'img/vendors/stuffedbun.jpg',
            //                 name: 'Stuffed Bun',
            //                 price: 3
            //             },
            //             {
            //                 image: 'img/vendors/toast.jpg',
            //                 name: 'Toast',
            //                 price: 6
            //             },
            //             {
            //                 image: 'img/vendors/redbeanmilktoast.jpg',
            //                 name: 'Red Bean Milk Toast',
            //                 price: 7
            //             }]
            //     },
            //     {id: 3,
            //         name: "Paddy's Lantern",
            //         image: 'img/vendors/paddys_lantern.jpg',
            //         distance: 1.1,
            //         address: "219 Gilbert St",
            //         points: 20,
            //         offers: [
            //             {
            //                 name: '10% discount of coffee',
            //                 points: 20
            //             },
            //             {
            //                 name: 'The second cup half price',
            //                 points: 50
            //             }],
            //         menu: [
            //             {
            //                 image: 'img/vendors/porkflossbread.jpg',
            //                 name: 'Pork Floss Bread',
            //                 price: 5
            //             },
            //             {
            //                 image: 'img/vendors/stuffedbun.jpg',
            //                 name: 'Stuffed Bun',
            //                 price: 3
            //             },
            //             {
            //                 image: 'img/vendors/toast.jpg',
            //                 name: 'Toast',
            //                 price: 6
            //             },
            //             {
            //                 image: 'img/vendors/redbeanmilktoast.jpg',
            //                 name: 'Red Bean Milk Toast',
            //                 price: 7
            //             }]
            //     },
            //     {id: 4,
            //         name: "Sad Cafe",
            //         image: 'img/vendors/sad_cafe.jpg',
            //         distance: 1.5,
            //         address: "Shop 3,10 Ebenezer Pl",
            //         points: 10,
            //         offers: [
            //             {
            //                 name: '10% discount of coffee',
            //                 points: 20
            //             },
            //             {
            //                 name: 'The second cup half price',
            //                 points: 50
            //             }],
            //         menu: [
            //             {
            //                 image: 'img/vendors/porkflossbread.jpg',
            //                 name: 'Pork Floss Bread',
            //                 price: 5
            //             },
            //             {
            //                 image: 'img/vendors/stuffedbun.jpg',
            //                 name: 'Stuffed Bun',
            //                 price: 3
            //             },
            //             {
            //                 image: 'img/vendors/toast.jpg',
            //                 name: 'Toast',
            //                 price: 6
            //             },
            //             {
            //                 image: 'img/vendors/redbeanmilktoast.jpg',
            //                 name: 'Red Bean Milk Toast',
            //                 price: 7
            //             }]
            //     }
            // ];

            
            // var requestActivity = $http.get('http://fitecity.herokuapp.com/activities');
            // requestActivity.then(function(res) {
            //     angular.forEach(res.data, function(item, index) {
            //         item['imgSrc'] = "http://img.youtube.com/vi/" + item.youtube_id + "/maxresdefault.jpg";
            //         activities[item._id] = item;
            //         console.log(item);
            //     })
            // });
            var vendors= {};
            HttpService.request(
            {
                url:'/vendors',
                method: 'GET',
            },
            function(data,status){
                if(status == 200){
                    angular.forEach(data,function(item,index){
                        vendors[item._id] = item;
                        console.log(item);
                    });
                }else{
                    console.log("get vendors error: "+status);
                }
            }
            );

            return {
                all: function() {
                    return vendors;
                },
                get: function(vendorId) {
                    // Simple index lookup
                    return vendors[vendorId];
                }
            }
        })

        .factory('Tabs', function($rootScope){

            var show_tabs = [
                "tab.vendors",
                "tab.events",
                "tab.account"
            ]

            var state = {
                classname: "",
            }

            var self = {};
            self.on = function() {
                state.classname = ""
            }
            self.off = function() {
                state.classname = "tabs-item-hide"
            }
            self.getState = function() {
                return state;
            }

            $rootScope.$on('$stateChangeStart',
                    function(event, toState, toParams, fromState, fromParams) {
                        console.log("toState: ", toState.name);
                        console.log("is in ", toState.name in show_tabs);

                        if (show_tabs.indexOf(toState.name) === -1) {
                            self.off();
                        } else {
                            self.on();
                        }
                        ;
                    });

            return self;
        })

        .factory('Videos', function(){
            var getFileUploadOptions = function(fileURI) {
              var options = new FileUploadOptions();
              options.mimeType = "video/mp4";
              return options;
            }

            var onSuccess = function(data){
                console.log("Success", data)
            }

            var onError = function(data){
                console.log("Error", data)
            }

            return {
              upload: function (file, onSuccess, onError) {
                var ft =  new FileTransfer();
                ft.upload(
                    file.toURL(), 
                    // encodeURI("http://localhost:5000/videos"), 
                    encodeURI("http://fitecity.herokuapp.com/videos"), 
                    onSuccess, 
                    onError, 
                    getFileUploadOptions(file.fullPath));
              }
            };
        })

        .factory('Events', function(HttpService,$ionicSlideBoxDelegate) {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            // var events = [
            //     {
            //         title: "Personal Styling Sessions - Hyde Park",
            //         description: "Have you ever wanted to go shopping with your very own personal stylist? Learn how to dress well on any budget with a Personal Styling Session from Clothed.",
            //         image_url: "http://www.adelaidecitycouncil.com/images/made/assets/whats-on/designerexchange15_420_205_88_int_s_c1_c.jpeg",
            //         date: "Every Saturday",
            //         time: "11:00am - 2:00pm",
            //         venue: "Starts at King William Road",
            //         cost: 39.00,
            //         category: "Sport & Leisure"
            //     },
            //     {
            //         title: "Children's Photography Course",
            //         description: "This course is aimed at children aged 7-13 to give them a taste of how fun photography can be and to instill a passion in them for creativity and art.",
            //         image_url: "http://www.adelaidecitycouncil.com/images/made/assets/whats-on/10525884_10204270497753284_3951162239879703776_n3_420_205_88_int_s_c1_c.jpeg",
            //         date: "Oct 8, 2014",
            //         time: "11:00am - 2:00pm",
            //         venue: "Botanic Gardens",
            //         cost: 0.00,
            //         category: "Presentations & Workshops"
            //     }
            // ];

            var events= [];
            HttpService.request(
            {
                url:'/adventures',
                method: 'GET',
            },
            function(data,status){
                if(status == 200){
                    angular.forEach(data,function(item,index){
                        events.push(item);
                    });

                    // This really shouldn't be in the service
                    $ionicSlideBoxDelegate.update();
                    
                }else{
                    console.log("get events error: "+status);
                }
            }
            );

            return {
                all: function() {
                    return events;
                },
                get: function(eventId) {
                    // Simple index lookup
                    return events[eventId];
                }
            }
        })

    .factory('HttpService',function($http,FacebookTokenService){
    //server ip and port
    var server = 'http://fitecity.herokuapp.com';
    var accessToken = FacebookTokenService.getToken();

  

    return{
       
        // url, method type with capital letters like:"POST"
        //params is object data to post
        //success and error are callback functions

 // var requestActivity = $http.get('http://fitecity.herokuapp.com/activities');
 //            requestActivity.then(function(res) {
 //                angular.forEach(res.data, function(item, index) {
 //                    item['imgSrc'] = "http://img.youtube.com/vi/" + item.youtube_id + "/maxresdefault.jpg";
 //                    activities[item._id] = item;
 //                    console.log(item);
 //                })
 //            });

            // HttpService.request(
            //     {
            //         url: '/activities',
            //         method: 'GET',
            //     },
            //     function(data,status){
            //         if(status===200){
            //         angular.forEach(data, function(item, index) {
            //         item['imgSrc'] = "http://img.youtube.com/vi/" + item.youtube_id + "/maxresdefault.jpg";
            //         activities[item._id] = item;
            //         console.log(item);
            //     })
            //         }
            //     }

            // );



        request: function(datas,callback){

           $http({
                url: server+datas.url,
                method: datas.method,
                data: datas.params,
                headers: {
                    //'Authorization': 'Bearer ' + accessToken,
                    'Content-Type' : datas.type||'application/x-www-form-urlencoded'
                },
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
           })
           .success(function(data,status,headers,config){
            if(typeof callback === 'function'){
                    callback(data,status,headers,config);
                }
            })
           .error(function(data,status,headers,config){
            console.log("error status: "+status);
            // if (status===401){
            //     tokenRefresh(function() {
            //         request({
            //             url: datas.url,
            //             method: datas.method,
            //             params: datas.params,
            //             type: datas.type
            //         },callback);
            //     });
            // }
            if(typeof callback === 'function'){
                callback(data,status,headers,config);
            }
        });
       },

       isLoggedIn: function(){
        return accessToken;
       }
   }

});
