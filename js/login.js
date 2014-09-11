/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    
    $('#facebook-login').mousedown(function() {
        console.log("click login button")
        $(this).attr("src", "img/buttons/facebook_login_active.png")
    })
    $('#facebook-login').mouseup(function() {
        $(this).attr("src", "img/buttons/facebook_login.png")
    })
    $('#google-login').mousedown(function() {
        $(this).attr("src", "img/buttons/google_login_active.png")
    })
    $('#google-login').mouseup(function() {
        $(this).attr("src", "img/buttons/google_login.png")
    })
    $('#twitter-login').mousedown(function() {
        $(this).attr("src", "img/buttons/twitter_login_active.png")
    })
    $('#twitter-login').mouseup(function() {
        $(this).attr("src", "img/buttons/twitter_login.png")
    })
})