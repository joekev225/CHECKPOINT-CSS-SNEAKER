let logo=document.querySelector('.header-droite__logo-panier')
logo.addEventListener('click', contenu)

function contenu(){
  let panier=document.querySelector('.panier-ouvert');
  panier.style.display= 'block'  

}




