var img = document.querySelector("#imgwinner")

const images = ['./assets/img/img3.png','./assets/img/img4.png','./assets/img/img6.png','./assets/img/img5.png']
let verificar

function get() {
  return Math.floor(Math.random() * images.length)
}

function comemorar() { 
  let i = get()
    if(verificar == i) {
     i = get()
     verificar = i
    }else {
      verificar = i
    }
    img.setAttribute('src', images[i])


  // if(img.getAttribute('src') == './img/IMG1.png'){
  //   img.setAttribute('src', './img/img3.png') 
  //  }else if(img.getAttribute('src') == './img/img3.png'){
  //   img.setAttribute('src', './img/img4.png') 
  //  }else if(img.getAttribute('src') == './img/img4.png'){
  //   img.setAttribute('src', './img/img6.png') 
  //   }
  //  else if(img.getAttribute('src') == './img/img6.png'){
  //   img.setAttribute('src', './img/img5.png') 
  //   }
  //  else if(img.getAttribute('src') == './img/img5.png'){
  //   img.setAttribute('src', './img/img3.png') 
  //   }
}