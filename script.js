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

src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      defer

function initMap() {

    const uluru = { lat: -25.344, lng: 131.036 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });

    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
