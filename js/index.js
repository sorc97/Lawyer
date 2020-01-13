'use strict'

const mobileMenuToggler = document.querySelector('.menu-icon');
const menuItems = document.querySelectorAll('.menu-item');
let isMenuActive = false;

// Menu Component
class MobileMenu {
  constructor(items) {
    //Menu wrapper
    let menuWrapper = document.createElement('div');
    menuWrapper.className = 'mobileMenu';
    menuWrapper.innerHTML = '<span class="mobileMenu-closeButton">&times;</span>';
    menuWrapper.addEventListener('click', () => toggleMenu());
    //Menu list
    let menuList = document.createElement('ul');
    menuList.className = 'mobileMenu-list';
    menuWrapper.append(menuList);
    
    const createLi = text => {
      let li = document.createElement('li');
      li.innerHTML = text;
      li.className = 'mobileMenu-item';
      return li;
    }

    items.forEach(item => menuList.append(createLi(item.innerHTML)));

    return menuWrapper;
  }
}

function toggleMenu() {
  let menu = document.querySelector('.mobileMenu');

  menu.style.display = (isMenuActive) ? 'none' : 'flex';
  isMenuActive = !isMenuActive;
}

mobileMenuToggler.addEventListener('click', () => {
  let menu = document.querySelector('.mobileMenu');

  if(menu) {
    toggleMenu();
    return;
  }

  mobileMenuToggler.after(new MobileMenu(menuItems));
  isMenuActive = true;
})