
function margareth(){
  let decidir = prompt('Tem certeza que deseja prender Margareth?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close()

    
  }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
    alert('Selecione o suspeito')
  }else {
    alert('Valor inserido inválido')
    margareth()
  }
}

function thiago(){
  let decidir = prompt('Tem certeza que deseja prender Thiago?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close() 
 
 }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
   alert('Selecione o suspeito')
 }else {
   alert('Valor inserido inválido')
   margareth()
 }
}

function ramon(){
  let decidir = prompt('Tem certeza que deseja prender Ramon?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close() 
 
 }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
   alert('Selecione o suspeito')
 }else {
   alert('Valor inserido inválido')
   margareth()
 }
}

function MT(){
  let decidir = prompt('Tem certeza que deseja prender Margareth e Thiago?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close() 
 
 }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
   alert('Selecione o suspeito')
 }else {
   alert('Valor inserido inválido')
   margareth()
 }
}

function RM(){
  let decidir = prompt('Tem certeza que deseja prender Ramon e Margareth?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close() 
 
 }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
   alert('Selecione o suspeito')
 }else {
   alert('Valor inserido inválido')
   margareth()
 }
}

function RT(){
  let decidir = prompt('Tem certeza que deseja prender Thiago e Ramon?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close() 
 
 }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
   alert('Selecione o suspeito')
 }else {
   alert('Valor inserido inválido')
   margareth()
 }
}

function RMT(){
  let decidir = prompt('Tem certeza que deseja prender Ramon, Margareth e Thiago?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close() 
 
 }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
   alert('Selecione o suspeito')
 }else {
   alert('Valor inserido inválido')
   margareth()
 }
}

function music(){

  let music = document.createElement("audio");
  music.setAttribute("controls", "");
  music.setAttribute("id", "music");
  music.setAttribute("src", "./music/tense_music.mp3");
  music.setAttribute("loop", "true");
  music.setAttribute("autoplay", "true")
  //music.setAttribute("hidden", "false");
  let divMusic = document.getElementById("divMusic")
  divMusic.appendChild(music);
}

music()