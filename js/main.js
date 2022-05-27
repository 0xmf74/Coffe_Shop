let navbar = document.querySelector('.navbar');
let searchBar = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');



document.querySelector('#search-btn').onclick = () => {
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBar.classList.remove('active');
}
