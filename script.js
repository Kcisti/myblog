const DOM = {
  homeTitle : document.querySelector('#homeTitle'),
  iconMenu : document.querySelector('#iconMenu'),
}

function message(){
  var day = new Date();
  var hr = day.getHours();

  if(hr < 13) {
    DOM.homeTitle.innerText = 'Good Morning';
  }
  else if(hr >= 13 && hr < 19) {
    DOM.homeTitle.innerText = 'Good Afternoon';
  }
  else if(hr > 19 ) {
    DOM.homeTitle.innerText = 'Good Evening';
  }
}
function switchTOmenu(){
  document.querySelector('.menu').style.transform = 'translateX(0px)';
}

window.addEventListener('load', message);
DOM.iconMenu.addEventListener('click', switchTOmenu);
