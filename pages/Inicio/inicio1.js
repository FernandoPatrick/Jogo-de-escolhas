$('html').hide()


alert('Chegando na cena do crime, o policial responsável pede suas credenciais.')
$('html').fadeIn(1000)

setTimeout(function validar() {
  var nome = prompt('Identifique-se detetive!')
  while (nome.length() <= 1) {
      alert('Credenciais inválidas!')
      nome = prompt('Qual seu nome Detetive!?')
    }
  while (isNaN(nome)) {
      alert('Credenciais inválidas!')
      nome = prompt('Qual seu nome Detetive!?')
    }
  while (nome == '') {
      alert('Credenciais inválidas!')
      nome = prompt('Qual seu nome Detetive!?')
    }
    return alert(`Muito bem Detetive ${nome}, vamos ao caso:`)
  //   else if(isNaN(nome)) {
  //     alert('Credenciais inválidas!')
  //     nome = prompt('Qual seu nome Detetive!?')
  //   }
  // //   else if(nome != ''){
  // //   alert(`Muito bem Detetive ${nome}, vamos ao caso:`)
  // //   break;
  // // }
  //   else {
  //     alert('Credenciais inválidas!')
  //     nome = prompt('Qual seu nome Detetive!?')
  //   }
  // }
}, 1000)







