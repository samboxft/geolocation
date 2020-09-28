function showUserLocation() {

  const spanLocation = document.getElementById("spanLocation");

  navigator.geolocation.getCurrentPosition(function (position) {
    spanLocation.innerHTML = position.coords.latitude + ", " + position.coords.longitude;
  });

}

document.write("<br>");
document.write("<br>");


var x = document.getElementById("span");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  span.innerHTML = position.coords.latitude + ", " + position.coords.longitude;
};




var watchID;
var geoLoc;

function showLocation(position) {
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;
   alert("Latitude : " + latitude + " Longitude: " + longitude);
}

function errorHandler(err) {
   if(err.code == 1) {
      alert("Error: Access is denied!");
   } else if( err.code == 2) {
      alert("Error: Position is unavailable!");
   }
}

function getLocationUpdate(){
   
   if(navigator.geolocation){
      
      // timeout at 60000 milliseconds (60 seconds)
      var options = {timeout:60000};
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
   } else {
      alert("Sorry, browser does not support geolocation!");
   }
}
