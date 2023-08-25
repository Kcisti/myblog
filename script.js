const DOM ={
    homebutton : document.querySelector('#homebutton'),
    aboutbutton : document.querySelector('#aboutbutton'),
    homeaboutbutton : document.querySelector('#homeaboutbutton'),
    projectbutton : document.querySelector('#projectbutton'),
    contactbutton : document.querySelector('#contactbutton'),
    home : document.querySelector('.home'),

    menubutton : document.querySelector('.menu'),
    menubuttonclose : document.querySelector('.head_menu_icon_2'),
    menu : document.querySelector('.head_menu_mobile'),
    homebuttonmob : document.querySelector('#homebuttonmob'),
    aboutbuttonmob : document.querySelector('#aboutbuttonmob'),
    projectbuttonmob : document.querySelector('#projectbuttonmob'),
    contactbuttonmob : document.querySelector('#contactbuttonmob'),

    homebuttonCO : document.getElementById('homeCO'),
    aboutbuttonCO : document.getElementById('aboutCO'),
    projectbuttonCO : document.getElementById('projectCO'),
    contactbuttonCO : document.getElementById('contactCO'),
}


function homeSectionF(){
    window.scrollTo( {
        top : 0,
        left : 0,
        behavior: 'smooth'
      });
      mobilemenu();
}

function homewithout(){
    window.scrollTo( {
        top : 0,
        left : 0,
        behavior: 'smooth'
      });
}

DOM.homebutton.addEventListener('click', homeSectionF);  
DOM.homebuttonmob.addEventListener('click', homeSectionF); 
DOM.homebuttonCO.addEventListener('click', homewithout); 


function aboutSectionF(){
    if (window.innerWidth > 700) {
        window.scrollTo( {
            top : 600,
            left : 0,
            behavior: 'smooth'
          });
    } else {
        window.scrollTo( {
            top : 840,
            left : 0,
            behavior: 'smooth'
          });
    }
    mobilemenu();
}

function aboutwithout(){
    if (window.innerWidth > 700) {
        window.scrollTo( {
            top : 600,
            left : 0,
            behavior: 'smooth'
          });
    } else {
        window.scrollTo( {
            top : 840,
            left : 0,
            behavior: 'smooth'
          });
    }
}

DOM.aboutbutton.addEventListener('click', aboutSectionF);  
DOM.aboutbuttonmob.addEventListener('click', aboutSectionF);  
DOM.aboutbuttonCO.addEventListener('click', aboutwithout);
DOM.homeaboutbutton.addEventListener('click', aboutwithout);  


function projectSectionF(){
    if (window.innerWidth > 700) {
        window.scrollTo( {
            top : 1200,
            left : 0,
            behavior: 'smooth'
          });
    } else {
        window.scrollTo( {
            top : 1500,
            left : 0,
            behavior: 'smooth'
          });
    }
    mobilemenu();
}

function projectwithout(){
    if (window.innerWidth > 700) {
        window.scrollTo( {
            top : 1200,
            left : 0,
            behavior: 'smooth'
          });
    } else {
        window.scrollTo( {
            top : 1500,
            left : 0,
            behavior: 'smooth'
          });
    }
}

DOM.projectbutton.addEventListener('click', projectSectionF);
DOM.projectbuttonmob.addEventListener('click', projectSectionF);
DOM.projectbuttonCO.addEventListener('click', projectwithout);

function contactSectionF(){
    if (window.innerWidth > 700) {
    window.scrollTo( {
        top : 1800,
        left : 0,
        behavior: 'smooth'
      });
    } else {
        window.scrollTo( {
            top : 2850,
            left : 0,
            behavior: 'smooth'
          });
    }
    mobilemenu();
}

function contactwithout(){
    if (window.innerWidth > 700) {
    window.scrollTo( {
        top : 1800,
        left : 0,
        behavior: 'smooth'
      });
    } else {
        window.scrollTo( {
            top : 2850,
            left : 0,
            behavior: 'smooth'
          });
    }
}

DOM.contactbutton.addEventListener('click', contactSectionF);
DOM.contactbuttonmob.addEventListener('click', contactSectionF);
DOM.contactbuttonCO.addEventListener('click', contactwithout);


function startmenu(){
    DOM.menu.classList.toggle('head_menu_mobile_close');
    DOM.homebuttonmob.classList.toggle('head_menu_section_close');
    DOM.aboutbuttonmob.classList.toggle('head_menu_section_close');
    DOM.projectbuttonmob.classList.toggle('head_menu_section_close');
    DOM.contactbuttonmob.classList.toggle('head_menu_section_close');
}
function mobilemenu(){
    DOM.menu.classList.toggle('head_menu_mobile_close');
    DOM.homebuttonmob.classList.toggle('head_menu_section_close');
    DOM.aboutbuttonmob.classList.toggle('head_menu_section_close');
    DOM.projectbuttonmob.classList.toggle('head_menu_section_close');
    DOM.contactbuttonmob.classList.toggle('head_menu_section_close');

    DOM.menubutton.classList.toggle('opened');
    DOM.menubutton.setAttribute('aria-expanded', DOM.menubutton.classList.contains('opened'));
}
DOM.menubutton.addEventListener('click', mobilemenu);
window.addEventListener('load', startmenu);