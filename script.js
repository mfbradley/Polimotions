//IMAGE SEARCH
$(document).on("mouseover", function() {
    $("img").addClass('draggable="true"');
});

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }

// Initialize Firebase
/* global firebase */

var config = {
    apiKey: "AIzaSyA04Li4Y2BJ6O54i1Tm3VgZx6XX1JibX1c",
    authDomain: "polimotions.firebaseapp.com",
    databaseURL: "https://polimotions.firebaseio.com",
    projectId: "polimotions",
    storageBucket: "polimotions.appspot.com",
    messagingSenderId: "920170050300"
};

firebase.initializeApp(config);

//FACE++ API
var imageURL = "http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/493/643/BRAND_THC_BSFC_180742_SFM_000_2997_15_20151204_00_HD.jpg";
console.log(imageURL);

var queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect";

var params = {
    "api_key": "AKof96jqIYUIqbmI2TaF3-AJcURETpor",
    "api_secret": "WbNCep4Ml1Ad_wTiItDTq7QhTEskPUYT",
    "image_url": imageURL,
    "return_attributes": "gender,age,emotion"
};

$.ajax({ url: queryURL, method: "POST", data: params })

    .done(function(response) {
        var results = response;

        console.log(results);

    });
