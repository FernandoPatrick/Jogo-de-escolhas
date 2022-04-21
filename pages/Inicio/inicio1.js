$('html').hide()


alert('Chegando na cena do crime, o policial responsável pede suas credenciais.')
$('html').fadeIn(1000)

setTimeout(function() {
  var nome = prompt('"Identifique-se detetive!"')
  while (true) {
    if(nome != '' || nome.length() <= 1 ){
    alert(`Muito bem Detetive ${nome}, vamos ao caso:`)
    break;
  }
   else {
      alert('Credenciais inválidas!')
    nome = prompt('Qual seu nome Detetive!?')
    }
  }
}, 1000)







