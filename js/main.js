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
                               <img id="image" src="${imgArray[i]}" > 
                           </div>`;

   containerImg += ImgWrapper;      
              
 }
 imgListDom.innerHTML = containerImg;  
