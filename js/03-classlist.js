const magicBtn = document.querySelector('.js-magic-btn');
const linkEl = document.querySelector('.site-nav__link')
const navListEl = document.querySelector('.site-nav')
console.log(navListEl);

const obj = {
    color: 'red',
        bgc: 'black'
}

linkEl.style.color = obj.color
linkEl.style.backgroundColor = 'aqua'

/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */