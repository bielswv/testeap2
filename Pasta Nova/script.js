document.getElementById('botaoSenha').addEventListener('click', function() {
    const senha = document.getElementById('senha').value;
  
    // Verificar se a senha está correta (só para demonstração)
    if (senha === 'senhadefault') { // Substitua 'senhadefault' pela sua senha
      window.location.href = 'pagina-do-botafogo.html'; // Redirecionar para a página do Botafogo
    } else {
      alert('Senha incorreta! Tente novamente.');
    }
  });
  
  