const palavra = "arara";

let totalLetrasA = 0

for (let letraA of palavra) {
    if (letraA === "a") {
        totalLetrasA += 1
    }
}
console.log(totalLetrasA);