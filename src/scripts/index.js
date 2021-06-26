import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/queries.css';

const menu = document.querySelector('#menu');
const head = document.querySelector('header');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

const addWrapper = function() {
    if (window.screen.width >= 500) {
        var element = document.getElementById("wrapperid");
        element.classList.add("wrapper");
    }
}

const removeWrapper = function() {
    if (window.screen.width < 500) {
        var element = document.getElementById("wrapperid");
        element.classList.remove("wrapper");
    }
}

window.addEventListener("resize", addWrapper);
window.addEventListener("onload", addWrapper);
window.addEventListener("resize", removeWrapper);
window.addEventListener("onload", removeWrapper);

menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

head.addEventListener('click', function() {
    drawer.classList.remove('open');
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
});