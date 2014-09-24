angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
// .factory('Friends', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var friends = [
//     { id: 0, name: 'Scruff McGruff' },
//     { id: 1, name: 'G.I. Joe' },
//     { id: 2, name: 'Miss Frizzle' },
//     { id: 3, name: 'Ash Ketchum' }
//   ];

//   return {
//     all: function() {
//       return friends;
//     },
//     get: function(friendId) {
//       // Simple index lookup
//       return friends[friendId];
//     }
//   }
// })

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
//new by yiwei 
.factory('ActivityOthers', function(){
    var othersdoing=[
        { id:0,
          image:"img/modalities/jump_jack1.gif",
        },
        { id:1,
          image:"img/modalities/jump_jack2.gif",
        },
        { id:2,
          image:"img/modalities/jump_jack3.gif",
        },
        { id:3,
          image:"img/modalities/jump_jack4.gif",
        },
        { id:4,
          image:"img/modalities/jump_jack5.gif",
        },
        { id:5,
          image:"img/modalities/jump_jack6.gif",
        }]
  return{
    all:function(){
       return othersdoing;
       },
    get:function(othersdoingId){
       return othersdoing[othersdoingId];
       }
    }
  })

// .factory('VendorPoints', function(){
//     var vendorPoints=[
//         { id:0,
//           image:'img/vendors/bliss_organic.jpg',
//           name:"Bliss Organic",
//           points:50,
//         },
//         { id:1,
//           image:'img/vendors/cafe_troppo.jpg',
//           name:"Cafe Troppo",
//           points:30,
//         },
//         { id:2,
//           image:'img/vendors/hey_jupiter.jpg',
//           name:"Hey Jupiter",
//           points:20,
//         },
//         { id:3,
//           image:'img/vendors/paddys_lantern.jpg',
//           name:"Paddy's Lantern",
//           points:10,
//         },
//         { id:4,
//           image:'img/vendors/sad_cafe.jpg',
//           name:"Sad Cafe",
//           points:10,
//         }]

//   return{
//     all:function(){
//        return vendorPoints;
//        },
//     get:function(vendorPointsId){
//        return vendorPoints[vendorPointsId];
//        }
//     }
//   })

.factory('MyActivities', function(){
    var myActivities=[
        { id:0,
          image:"img/account/jen1.gif",
        },
        { id:1,
          image:"img/account/jen2.gif",
        },
        { id:2,
          image:"img/account/jen3.giff",
        }]
  return{
    all:function(){
       return myActivities;
       },
    get:function(myActivitiesID){
       return myActivities[myActivitiesId];
       }
    }
  })
//end new by yiwei


.factory('Vendors', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var vendors = [
    { id: 0, 
      name: 'Bliss Organic' ,
      image:'img/vendors/bliss_organic.jpg',
      distance:0.1,
      address:"7 Compton St",
      points:50,
      offers:[
      {
        name:'10% discount of coffee',
        points:20
      },
      {
        name:'The second cup half price',
        points:50
      }]
    },
      
    { id: 1, 
      name: 'Cafe Troppo',
      image:'img/vendors/cafe_troppo.jpg',
      distance:.4,
      address:"42 Whitmore Square",
      points:40, 
      offers:[
      {
        name:'10% discount of coffee',
        points:20
      },
      {
        name:'The second cup half price',
        points:50
      }]
    },

    { id: 2, 
      name: 'Hey Jupiter',
      image:'img/vendors/hey_jupiter.jpg',
      distance:.7,
      address:"11 Ebenezer Pl" ,
      points:30,
      offers:[
      {
        name:'10% discount of coffee',
        points:20
      },
      {
        name:'The second cup half price',
        points:50
      }]
    },

    { id: 3, 
      name: "Paddy's Lantern",
      image:'img/vendors/paddys_lantern.jpg',
      distance:1.1,
      address:"219 Gilbert St",
      points:20,
      offers:[
      {
        name:'10% discount of coffee',
        points:20
      },
      {
        name:'The second cup half price',
        points:50
      }]
    },

    { id: 4, 
      name: "Sad Cafe",
      image:'img/vendors/sad_cafe.jpg',
      distance:1.5,
      address:"Shop 3,10 Ebenezer Pl",
      points:10,
      offers:[
      {
        name:'10% discount of coffee',
        points:20
      },
      {
        name:'The second cup half price',
        points:50
      }]
    }
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





