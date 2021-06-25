import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/queries.css';

const menu = document.querySelector('#menu');
const head = document.querySelector('header');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
    var element = document.getElementById("wrapperid");
    element.classList.remove("wrapper");
});

head.addEventListener('click', function() {
    drawer.classList.remove('open');
    var element = document.getElementById("wrapperid");
    element.classList.add("wrapper");
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
    var element = document.getElementById("wrapperid");
    element.classList.add("wrapper");
});