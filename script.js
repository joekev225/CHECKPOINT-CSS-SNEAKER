// let logo=document.querySelector('.header-droite__logo-panier')
// logo.addEventListener('click', contenu)


// window.addEventListener('click', closeCart);
// function contenu(){
//   // let panier=document.querySelector('.panier-ouvert');
//   // panier.style.visibility= 'visible'  
//     let panier = document.querySelector('.panier-ouvert');

//     // panier.classList.add('visible');
//     panier.classList.toggle('visible');
//     // if (panier.style.visibility === 'visible') {
//     //   panier.style.visibility = 'hidden';
//     // } else {
//     //   panier.style.visibility = 'visible';
//     // }
//   }
  

//   function closeCart(event) {
//     let icon = document.querySelector('.panier_logo');
//     let panier = document.querySelector('.panier-ouvert');
//     if(event.target != icon){
//       panier.classList.remove('visible');
//     }

    
//   }

let iconMenu = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu');

iconMenu.addEventListener('click', afficherContenu);

function afficherContenu() {
menu.classList.toggle('menu-visible');
}

let closeIcone = document.querySelector('.delete')
closeIcone.addEventListener('click', fermer)

function fermer (){
  document.querySelector('.menu-visible').classList.remove('menu-visible');
}


