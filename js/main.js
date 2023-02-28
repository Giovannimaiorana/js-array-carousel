// CREO LISTA ARRAY DI IMMAGINI PRESENTI 
const imgArray = [
    'img/1.webp',
    'img/2.webp',
    'img/3.webp',
    'img/4.webp',
    'img/5.webp'
];

//COLLEGHIAMO JS A HTML 
 const imgListDom = document.querySelector('.list_img');

 //INSERIAMO DINAMICAMENTE LE IMMAGINI IN HTML

 let containerImg = "";

 for ( let i=0; i < imgArray.length; i++ ) {
    const ImgWrapper = ` <div class="wrap_img ">
                               <img class="image" src="${imgArray[i]}" > 
                           </div>`;

   containerImg += ImgWrapper;      
              
 }
 imgListDom.innerHTML = containerImg;  

 const imgDom = document.getElementsByClassName('wrap_img');
 const positionImg = 0;
 imgDom[positionImg].classList.add('d-block');
 const next = document.getElementById('next');
 const prev = document.getElementById('prev');

 next.addEventListener('click', 
       function() {
        imgDom[positionImg].classList.remove('d-block');
        positionImg++;
        imgDom[positionImg].classList.add('d-block');
       }
 )
