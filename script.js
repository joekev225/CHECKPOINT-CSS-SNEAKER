let logo=document.querySelector('.header-droite__logo-panier')
logo.addEventListener('click', contenu)


function contenu(){
  // let panier=document.querySelector('.panier-ouvert');
  // panier.style.visibility= 'visible'  
    let panier = document.querySelector('.panier-ouvert');
    if (panier.style.visibility === 'visible') {
      panier.style.visibility = 'hidden';
    } else {
      panier.style.visibility = 'visible';
    }
  }
  





