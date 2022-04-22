$('html').hide()

alert('Chegando na cena do crime, o policial responsável pede suas credenciais.')
$('html').fadeIn(1000)

setTimeout(function validar() {
  var nome = prompt('Identifique-se detetive!')
  while (parseFloat(nome))  {
      alert('Credenciais inválidas!')
      nome = prompt('Qual seu nome Detetive!?')
  }
  while(nome == '') {
    alert('Credenciais inválidas!')
      nome = prompt('Qual seu nome Detetive!?')
  }
 while(nome.length <= 2) {
    alert('Credenciais inválidas!')
      nome = prompt('Qual seu nome Detetive!?')
  }
     return alert(`Muito bem Detetive ${nome}, vamos ao caso:`)
}, 1000)








