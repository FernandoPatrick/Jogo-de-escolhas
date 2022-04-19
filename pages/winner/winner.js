var img = document.querySelector("#imgwinner")





 

function comemorar() { 

  if(img.getAttribute('src') == './img/IMG1.png'){
    img.setAttribute('src', './img/img2.png') 
   }else if(img.getAttribute('src') == './img/img2.png'){
    img.setAttribute('src', './img/img3.png') 
   }else if(img.getAttribute('src') == './img/img3.png'){
    img.setAttribute('src', './img/img2.png') 
    }

  

  
}