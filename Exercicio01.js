const pais = ["Brasil", "Argentina", "Bélgica", "Alemanha", "Itália"];
console.log(pais);

pais.push("Canadá");
console.log(pais);

pais.pop();
console.log(pais);

pais.unshift('Canadá');
console.log(pais);

pais.shift();
console.log(pais);

const ultimo = pais[pais.length - 1];
console.log(ultimo);

console.log(pais[1]);
console.log(pais[2]);
