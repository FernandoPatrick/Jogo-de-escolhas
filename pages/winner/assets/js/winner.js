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

}
