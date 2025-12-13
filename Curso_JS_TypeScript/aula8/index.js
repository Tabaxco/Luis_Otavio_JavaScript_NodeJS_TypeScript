const nome = 'Guilherme'
const sobrenome = 'Leite Rodrigues';
const idade = 18;
const peso = 68;
const altura = 1.77;

let imc;
imc = peso / (altura**2)

let anoNascimento;
anoNascimento = 2025 - idade
console.log(anoNascimento)

//console.log(nome, sobrenome, 'tem', idade, 'anos, pesa',
//    peso, 'kg'
//)
//console.log('tem', altura, 'de altura e seu IMC é de', imc);
//console.log(nome, 'nasceu em', anoNascimento + '.');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)