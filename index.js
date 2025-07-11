document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();
    const mensagemErro = document.getElementById('mensagemErro');
  
    // Limpa mensagem anterior
    mensagemErro.textContent = '';
  
    // Valida se os campos estão vazios
    if (num1 === '' || num2 === '') {
      mensagemErro.textContent = 'Todos os campos devem ser preenchidos.';
      event.preventDefault(); // Impede o envio do formulário
      return;
    }
  
    // Converte os valores para número
    const valor1 = parseFloat(num1);
    const valor2 = parseFloat(num2);
  
    // Verifica se é divisão por zero
    if (valor2 === 0) {
      mensagemErro.textContent = 'O divisor não pode ser zero.';
      event.preventDefault(); // Impede o envio do formulário
      return;
    }
  
    // (Opcional) Outras validações podem ser colocadas aqui
  });
  