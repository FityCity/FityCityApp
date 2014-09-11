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

.factory('Activities', function(){
  var activities = [
    { id: 0,
      name:"Jumping Jacks",
      image:"img/modalities/jumping_jacks.gif",
      prompt:"Do 15 jumping jacks"
    },
    { id: 1,
      name:"Push ups",
      image:"img/modalities/push_ups.gif",
      prompt:"Do 15 push ups"
    },
    { id: 2,
      name:"Knee to nose",
      image:"img/modalities/knee-cross-crunch-ss.jpg",
      prompt:"Hold your knee to your nose for 15 seconds"
    },
    { id: 3,
      name:"Pull ups",
      image:"img/modalities/chin-ups.gif",
      prompt:"Do 5 pull ups"
    },
  ]

  return {
    all: function(){
      return activities;
    },
    get:function(activityId){
      return activities[activityId];
    }
  }
})

.factory('Vendors', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vendors = [
    { id: 0, 
      name: 'Bliss Organic' ,
      image:'img/vendors/bliss_organic.jpg',
      distance:0.1,
      address:"7 Compton St"},
    { id: 1, 
      name: 'Cafe Troppo',
      image:'img/vendors/cafe_troppo.jpg',
      distance:.4,
      address:"42 Whitmore Square" },
    { id: 2, 
      name: 'Hey Jupiter',
      image:'img/vendors/hey_jupiter.jpg',
      distance:.7,
      address:"11 Ebenezer Pl" },
    { id: 3, 
      name: "Paddy's Lantern",
      image:'img/vendors/paddys_lantern.jpg',
      distance:1.1,
      address:"219 Gilbert St" },
    { id: 4, 
      name: "Sad Cafe",
      image:'img/vendors/sad_cafe.jpg',
      distance:1.5,
      address:"Shop 3,10 Ebenezer Pl" }
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