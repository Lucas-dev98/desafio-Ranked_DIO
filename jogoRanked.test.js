const { calcularNivel, jogoRanked } = require('./jogoRanked');
const prompt = require('prompt-sync');

// Testando a função calcularNivel
describe('Função calcularNivel', () => {
  test('Deve retornar Ferro para menos de 10 vitórias', () => {
    expect(calcularNivel(5, 2)).toBe("O Herói tem de saldo de 3 está no nível de Ferro");
  });

  test('Deve retornar Bronze para entre 11 e 20 vitórias', () => {
    expect(calcularNivel(15, 5)).toBe("O Herói tem de saldo de 10 está no nível de Bronze");
  });

  test('Deve retornar Prata para entre 21 e 50 vitórias', () => {
    expect(calcularNivel(30, 10)).toBe("O Herói tem de saldo de 20 está no nível de Prata");
  });

  test('Deve retornar Ouro para entre 51 e 80 vitórias', () => {
    expect(calcularNivel(60, 20)).toBe("O Herói tem de saldo de 40 está no nível de Ouro");
  });

  test('Deve retornar Diamante para entre 81 e 90 vitórias', () => {
    expect(calcularNivel(85, 30)).toBe("O Herói tem de saldo de 55 está no nível de Diamante");
  });

  test('Deve retornar Lendário para entre 91 e 100 vitórias', () => {
    expect(calcularNivel(95, 40)).toBe("O Herói tem de saldo de 55 está no nível de Lendário");
  });

  test('Deve retornar Imortal para 101 ou mais vitórias', () => {
    expect(calcularNivel(105, 50)).toBe("O Herói tem de saldo de 55 está no nível de Imortal");
  });
});

// Testando a função jogoRanked (simulando entradas com Jest)
describe('Função jogoRanked', () => {
  let promptSyncMock;

  beforeAll(() => {
    // Criando um mock para o prompt-sync para simular a entrada do usuário
    promptSyncMock = jest.spyOn(prompt, 'sync').mockImplementation(() => 'g');
  });

  afterAll(() => {
    promptSyncMock.mockRestore();
  });

  test('Deve registrar vitórias corretamente', () => {
    jest.spyOn(prompt, 'sync').mockImplementationOnce(() => 'g').mockImplementationOnce(() => 'p').mockImplementationOnce(() => 'sair');
    expect(jogoRanked()).toBe("O Herói tem de saldo de 1 está no nível de Ferro");
  });
});
