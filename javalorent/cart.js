//document.addEventListener('DOMContentLoaded', (event) =>{}
let iconCart=document.querySelector('#click-cart');
let close12 =document.querySelector('.close1');
let body = document.querySelector('body');
iconCart.addEventListener('click', () => {
   
     body.classList.toggle('Allcart')
});
close12.addEventListener('click', () => {
   
    body.classList.remove('Allcart')
});
// document.addEventListener('DOMContentLoaded', (event) => {
//     let iconCart = document.querySelector('#click-cart');
//     let close12 = document.querySelector('.close1');
//     let body = document.querySelector('body');

//     iconCart.addEventListener('click', () => {
//         body.classList.toggle('Allcart');
//     });

//     close12.addEventListener('click', () => {
        
//         body.classList.remove('Allcart');
//     });
// });
