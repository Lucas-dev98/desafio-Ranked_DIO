// Função para calcular o nível do jogador
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
  
    let nivel;
    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else {
      nivel = 'Imortal';
    }
  
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
  }
  
  // Função para registrar as partidas e calcular o nível
  function jogoRanked() {
    let vitorias = 0;
    let derrotas = 0;
  
    const prompt = require('prompt-sync')({ sigint: true });
  
    while (true) {
      const resultado = prompt('Digite o resultado da partida (G para vitória, P para derrota ou "sair" para encerrar): ').toLowerCase();
  
      if (resultado === 'g') {
        vitorias++;
      } else if (resultado === 'p') {
        derrotas++;
      } else if (resultado === 'sair') {
        break;
      } else {
        console.log("Entrada inválida! Digite 'G' para vitória, 'P' para derrota ou 'sair' para encerrar.");
      }
    }
  
    return calcularNivel(vitorias, derrotas);
  }
  
  module.exports = { calcularNivel, jogoRanked };
  