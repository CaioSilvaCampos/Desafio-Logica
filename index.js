// Desafio 1: Escreva uma função que solicita o Nome do Aluno, e a nota de 4 provas e retorne a média aritmética das notas.

function media(nome, nota1, nota2, nota3, nota4){
    const media = (nota1 + nota2 + nota3 + nota4)/4
    return `Aluno = ${nome} // Media = ${media}`
}

console.log(media('Caio', 10, 8, 7, 6.5))


// Desafio 2: Crie um script que receba uma string e retorne a maior letra segundo a ordem alfabética em minusculo.
function maiorLetra(string){
   let limpa = string.replace(/[^a-zA-Z]/g, "");
   
   let minuscula = limpa.toLowerCase()

   let maior = ''

   for(let letra of minuscula){
    if(letra > maior){
        maior = letra
    }
   }
   return `A maior letra é ${maior}`
}

console.log(maiorLetra("May the force be with you"))


// Desafio 3: Escreva uma função que receba um string contendo um nome completo e retorne uma string com o seguinte formato (ULTIMO_SOBRENOME. E as primeiras letras dos restantes dos nomes em MAIÚSCULO, separados por virgula e pontos.)

function formatarNome(nomeCompleto){
  const partes = nomeCompleto.trim().split(/\s+/);

  const ultimoSobrenome = partes.pop().toUpperCase();
  const iniciais = partes.map(n => n[0].toUpperCase() + '.').join(' ');

  const nomeAbreviado = `${ultimoSobrenome}, ${iniciais}`;

  return nomeAbreviado;
}

console.log(formatarNome('John Ronald Reuel Tolkien'));     
console.log(formatarNome('Suzanne Marie Collins'));        