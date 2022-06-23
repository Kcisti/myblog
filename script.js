const DOM = {
  //buttons
  homeTitle : document.querySelector('#homeTitle'),
  iconMenu : document.querySelector('#iconMenu'),
  menuEsc : document.querySelector('.menu_esc'),
  menuHome : document.getElementById('menHome'),
  menuAboutMe : document.getElementById('menAboutMe'),
  menuSkills : document.getElementById('menSkills'),
  menuContact : document.getElementById('menContact'),

  //divs
  menu : document.querySelector('.menu'),
  visible : document.querySelector('.visible'),
  home : document.querySelector('.home'),
  aboutMe : document.querySelector('.aboutMe'),
  skills : document.querySelector('.skills'),
  contact : document.querySelector('.contact'),
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
  DOM.menu.style.transform = 'translateX(0px)';
  DOM.visible.style.transform = 'translateX(800px)';
  DOM.visible.style.backgroundColor = '#8F8F8F';
  console.log('menu on');
}
function closeMenu(){
  DOM.menu.style.transform = 'translateX(-800px)';
  DOM.visible.style.transform = 'translateX(0px)';
  DOM.visible.style.backgroundColor = '#D2D2D2';
  console.log('menu off');
}

window.addEventListener('load', message);
DOM.iconMenu.addEventListener('click', switchTOmenu);
DOM.menuEsc.addEventListener('click', closeMenu);


function TOhome(){
  closeMenu();
  DOM.home.style.transform = 'translateX(0px)';
  DOM.aboutMe.style.transform = 'translateX(-1200px)';
  DOM.skills.style.transform = 'translateX(-1200px)';
  DOM.contact.style.transform = 'translateX(-1200px)';
}
function TOaboutUs(){
  closeMenu();
  DOM.home.style.transform = 'translateX(-1200px)';
  DOM.aboutMe.style.transform = 'translateX(0px)';
  DOM.skills.style.transform = 'translateX(-1200px)';
  DOM.contact.style.transform = 'translateX(-1200px)';
}
function TOskills(){
  closeMenu();
  DOM.home.style.transform = 'translateX(-1200px)';
  DOM.aboutMe.style.transform = 'translateX(-1200px)';
  DOM.skills.style.transform = 'translateX(0px)';
  DOM.contact.style.transform = 'translateX(-1200px)';
}
function TOcontact(){
  closeMenu();
  DOM.home.style.transform = 'translateX(-1200px)';
  DOM.aboutMe.style.transform = 'translateX(-1200px)';
  DOM.skills.style.transform = 'translateX(-1200px)';
  DOM.contact.style.transform = 'translateX(0px)';
}

DOM.menuHome.addEventListener('click',TOhome);
DOM.menuAboutMe.addEventListener('click',TOaboutUs);
DOM.menuSkills.addEventListener('click',TOskills);
DOM.menuContact.addEventListener('click',TOcontact);
