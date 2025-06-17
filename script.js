  
        function mostrarMensagem() {
        const mensagens = [
        "Acredite em você mesmo!",
        "Você é capaz de grandes coisas!",
        "Cada dia é uma nova oportunidade!",
        "Nunca desista!",
        "O sucesso está a um passo de distância!"];

      const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
      document.getElementById("mensagem").innerText = mensagemAleatoria;
     }
   
    