const DOM ={
    homebutton : document.querySelector('#homebutton'),
    aboutbutton : document.querySelector('#aboutbutton'),
    homeaboutbutton : document.querySelector('#homeaboutbutton'),
    projectbutton : document.querySelector('#projectbutton'),
    contactbutton : document.querySelector('#contactbutton'),
    home : document.querySelector('.home'),

    menubutton : document.querySelector('.head_menu_icon'),
    menubuttonclose : document.querySelector('.head_menu_icon_2'),
    menu : document.querySelector('.head_menu_mobile'),
    homebuttonmob : document.querySelector('#homebuttonmob'),
    aboutbuttonmob : document.querySelector('#aboutbuttonmob'),
    projectbuttonmob : document.querySelector('#projectbuttonmob'),
    contactbuttonmob : document.querySelector('#contactbuttonmob'),
}


function homeSectionF(){
    window.scrollTo( {
        top : 0,
        left : 0,
        behavior: 'smooth'
      });
}
DOM.homebutton.addEventListener('click', homeSectionF);  
DOM.homebuttonmob.addEventListener('click', homeSectionF); 


function aboutSectionF(){
    window.scrollTo( {
        top : 600,
        left : 0,
        behavior: 'smooth'
      });
}
DOM.aboutbutton.addEventListener('click', aboutSectionF);  
DOM.aboutbuttonmob.addEventListener('click', aboutSectionF);  
DOM.homeaboutbutton.addEventListener('click', aboutSectionF);  


function projectSectionF(){
    window.scrollTo( {
        top : 1200,
        left : 0,
        behavior: 'smooth'
      });
}
DOM.projectbutton.addEventListener('click', projectSectionF);
DOM.projectbuttonmob.addEventListener('click', projectSectionF);


function contactSectionF(){
    window.scrollTo( {
        top : 1800,
        left : 0,
        behavior: 'smooth'
      });
}
DOM.contactbutton.addEventListener('click', contactSectionF);
DOM.contactbuttonmob.addEventListener('click', contactSectionF);




function openmobilemenu(){
    DOM.menubutton.style.display = 'none';
    DOM.menu.style.display = 'block';
    DOM.menubuttonclose.style.display = 'block';
}
DOM.menubutton.addEventListener('click', openmobilemenu);

function closemobilemenu(){
    DOM.menubutton.style.display = 'block';
    DOM.menu.style.display = 'none';
    DOM.menubuttonclose.style.display = 'none';
}
DOM.menubuttonclose.addEventListener('click', closemobilemenu);