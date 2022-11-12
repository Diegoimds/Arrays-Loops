const numeros = [9, 5, 3, 54, 80, 35];

let soma = 0;

for (let x = 0; x < numeros.length; x++) {
    soma = soma + numeros[x]; // também pode ser: soma += numeros[x];
}
console.log(soma);