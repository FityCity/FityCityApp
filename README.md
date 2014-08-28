FityCityApp
===========

Team
====
- Eric Adlam


Overview
===========

Objective: 
Facilitating random play (exercise) throughout Adelaide / CBD.

Main Use Case: 
A user is walking down the street. As she approaches a Cafe’, her phone receives a notification. She looks at the notification and it offers her 100 FityCity points if she touches her knee to her nose and holds that position for 15 seconds, and takes a video or selfie doing this in front of the Cafe’. She does it, and the points are awarded to her scorecard. She can see how many points she has total, and she can browse the list of vendors where she can spend those points for a discount or free item (e.g. A free coffee).

Contact
Joseph Campbell, Location manager for Magill and City East locations
UniSA Fitness Center

Stakeholders
University of South Australia (Fitness Center)
is providing the primary management and research for the application
wants to promote more exercise for people who aren’t inclined to go the the gym

Adelaide City Council
is providing the grant (I think)
wants to promote more physical activity throughout the city
wants businesses to use the free wifi

Vendors (e.g. cafe’s, other businesses)
can use this as a loyalty program to retain customers
can use the videos/selfies as advertising to gain new customers

Mitise Health 
Private Partner
providing some of the example videos?
is maybe going to do in-app advertising for users who want to try going to their gym …? 





Technology Stack

GeoLocation
wifi triangulation
gps
Does the app use a background service to constantly push it’s location to the server? Is that possible with Cordova? How would that effect the battery? What are the privacy issues? Are there other apps that do push notifications based on location?

Backend Server/DB
Cloud
Google App Engine (free but has vendor lock in)
Heroku (somewhat free, has less vendor lock in)
Amazon web services (not free, has least vendor lock in)

Local
Adelaide City Council
University of South Australia
note: these risk bureaucracy, slower development, more people needing to access data

Front End
Cordova: for mobile app
Normal Website: for administration (adding new challenges, videos, etc.)

Reward/Loyalty Service
rewardle.com ?


Other Features
“Challenge a Mate”, send the challenge you just completed to a friend
A user can share their video on social platforms
Could act as a vendors primary loyalty program
Should be able to control number of pushes per day
Require selfies for verification (could be fun because people like taking selfies, and vendors could use selfie videos for advertising)
Users can browse a list of vendors where they can spend points
Can users also browse list of challenges?

