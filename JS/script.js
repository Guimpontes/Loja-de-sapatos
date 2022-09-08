let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');

img2.addEventListener('click', (e) => {

    img1.src = './assets/tesnis2_editado.png'
    img1.width = '500px'

    img2.style.borderBottom = '4px solid #FF0000';
    img3.style.borderBottom = '4px solid #c4c4c4';
    img4.style.borderBottom = '4px solid #c4c4c4';
})

img3.addEventListener('click', (e) => {

    img1.src = './assets/tenis 1 ampliado.png'

    img3.style.borderBottom = '4px solid #FF0000';
    img2.style.borderBottom = '4px solid #c4c4c4';
    img4.style.borderBottom = '4px solid #c4c4c4';
})

img4.addEventListener('click', (e) => {

    img1.src = './assets/tenis3_editado.png'

    img4.style.borderBottom = '4px solid #FF0000';
    img2.style.borderBottom = '4px solid #c4c4c4';
    img3.style.borderBottom = '4px solid #c4c4c4';
})