/*function RandalTunnelDone(){
    setTimeout('',5000)
    var x = document.getElementById("randalDiv")
    x.style.display = "none"
}*/
/*function RandalTunnelDone(){
    var x = document.getElementById("tunnelRandall")
    x.hidden(true)
}*/

function RandalTunnelDone(){
    document.getElementById("tunnelRandall").style.display = "none";
}

/* Googles foreslag
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      defer

function initMap() {

    const viborg = { lat: -25.344, lng: 131.036 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: viborg,
    });

    const marker = new google.maps.Marker({
      position: viborg,
      map: map,
    });
  } */ 
function collapsable(){
    var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}