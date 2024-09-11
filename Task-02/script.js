
let cnt = 0;

const count = document.getElementById('count-display');
const addtocartbutton = document.getElementById('add-to-cart');
const addonebutton = document.getElementById('add-one');
const addtwobutton = document.getElementById('add-two');
const resetbutton = document.getElementById('reset');

function update() {
    count.textContent = `=> Number of items in the cart is  : ${cnt}`;
}

addtocartbutton.addEventListener('click', () => {
    cnt += 1;
    update();
});

addonebutton.addEventListener('click', () => {
    cnt += 1;
    update()});

addtwobutton.addEventListener('click', () => {
    cnt += 2;
    update();
});


resetbutton.addEventListener('click', () => {
    cnt = 0;
    update();
});

update();