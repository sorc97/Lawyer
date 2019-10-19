'use strict'

const mobileMenuButton = document.querySelector('.menu-icon');
const menuItems = document.querySelectorAll('.menu-item');
let isMenuActive = false;

class mobileMenu {
  constructor(items) {
    let ul = document.createElement('ul');
    ul.className = 'mobileMenu';
    ul.addEventListener('click', () => toggleMenu());
    ul.innerHTML = '<li class="mobileMenu-closeButton">&times;</li>';
    
    const createLi = text => {
      let li = document.createElement('li');
      li.innerHTML = text;
      li.className = 'mobileMenu-item';
      return li;
    }

    items.forEach(item => ul.append(createLi(item.innerHTML)));

    return ul;
  }
}

function toggleMenu() {
  let menu = document.querySelector('.mobileMenu');

  menu.style.display = (isMenuActive) ? 'none' : 'flex';
  isMenuActive = !isMenuActive;
}

mobileMenuButton.addEventListener('click', () => {
  let menu = document.querySelector('.mobileMenu');

  if(menu) {
    toggleMenu();
    return;
  }

  mobileMenuButton.after(new mobileMenu(menuItems));
  isMenuActive = true;
})