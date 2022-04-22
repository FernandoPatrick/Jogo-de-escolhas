
function margareth(){
  let decidir = prompt('Tem certeza que deseja prender Margareth?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../youlose/youlose.html')
    // window.close()

    
  }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
    alert('Selecione o suspeito')
  }else {
    alert('Por favor confirme se deseja prender este assassino!')
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
  alert('Por favor confirme se deseja prender este assassino!')
   thiago()
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
  alert('Por favor confirme se deseja prender este assassino!')
   ramon()
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
  alert('Por favor confirme se deseja prender este assassino!')
   MT()
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
  alert('Por favor confirme se deseja prender este assassino!')
   RM()
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
  alert('Por favor confirme se deseja prender este assassino!')
   RT()
 }
}

function RMT(){
  let decidir = prompt('Tem certeza que deseja prender Ramon, Margareth e Thiago?')
  if(decidir.toLocaleLowerCase() == 'sim') {
    window.location.assign('../winner/winner.html')
    // window.close() 
 
 }else if(decidir.toLocaleLowerCase() == 'nao' || decidir.toLocaleLowerCase() == 'não'){
   alert('Selecione o suspeito')
 }else {
  alert('Por favor confirme se deseja prender este assassino!')
   RMT()
 }
}
