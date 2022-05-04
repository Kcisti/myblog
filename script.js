var themes_moon = document.getElementById("themes_moon");
var themes_sun = document.getElementById("themes_sun");

themes_sun.style.display='none';

function sunappear(){
  themes_moon.style.display='none';
  themes_sun.style.display='block';
}
function moonappear(){
  themes_moon.style.display='block';
  themes_sun.style.display='none';
}


function namesecret(){
  var head = document.getElementById('head');
  head.style.height='160px';
  document.getElementById("headcenter").style.display="none";
}
