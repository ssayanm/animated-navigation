const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const toggleNav = () => {
    //Toggle: menu bars open/closed
    return menuBars.classList.toggle('change')

  } 

// function toggleNav(){
//     menuBars.classList.toggle('change')
// }

// Event listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav)
nav3.addEventListener('click', toggleNav)
nav4.addEventListener('click', toggleNav)
nav5.addEventListener('click', toggleNav)