var botoes = document.querySelectorAll('.botao');
var mensagem = document.getElementById("mensagem");
var mensagensNegativas = [
  "Não desista! Cada desafio superado te torna mais forte.",
  "Continue tentando! Grandes conquistas exigem perseverança.",
  "Você é capaz de superar qualquer obstáculo. Continue em frente!",
  "Não deixe os desafios te desanimarem. Siga em frente com determinação.",
  "Acredite em si mesmo e persista. Você vai chegar lá!",
];

var contador = 0;

botoes.forEach(function(botao, index) {
  botao.addEventListener("click", function() {
    if (index === contador) {
      this.style.display = "none";
      contador++;
      if (index < mensagensNegativas.length) {
        botoes[contador].style.display = "inline-block";
        mensagem.textContent = mensagensNegativas[index];
      } else {
        mensagem.style.display = "block";
        mensagem.textContent = "Minha querida esposa, cada momento ao seu lado é uma bênção que enche meu coração de\nalegria. Sua presença ilumina minha vida de maneiras que eu nunca imaginei possíveis. Seu amor\né meu refúgio seguro, onde encontro conforto e paz. Você é a personificação da beleza, da \nbondade e da força. Obrigado por ser minha companheira, minha amiga e meu amor eterno. Eu te \namo mais do que palavras podem expressar. Que nossa jornada juntos continue sendo repleta de \nsorrisos, abraços e amor infinito. Você é o melhor presente que a vida me deu, e sou grato todos os dias por tê-la ao meu lado. \nCom todo o meu amor, Victor <3";
        mensagem.style.whiteSpace = "pre-line"; // Manter quebras de linha
      }
    }
  });
});
