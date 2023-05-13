
function esPalindromoConMetodos(palabra){
    
    let invertida = palabra.split("").reverse().join("");
    // split() forma un array de letras
    // reverse() le da la vuelta
    // join() junta la letras
    
    // Devolver el resultado si invertida y palabra son iguales
    return (invertida === palabra);
}

console.log(esPalindromoConMetodos("otto")); // true
console.log(esPalindromoConMetodos("maria")); // false

//--------------------------- Otra forma de hacerlo con estructuras de control -----------------------------

function esPalindromo(palabra){
    // Dividir la cadena en un array de letras
    let letras = [];
    for(let i = 0; i < palabra.length; i ++){
        // console.log(palabra[i]) -> separa cada letra
        letras.push(palabra[i]);

    }
    // Invertir el array con un bucle
    let letrasInvertidas = [];
    for(let i = letras.length - 1; i >= 0 ; i--){
        letrasInvertidas.push(letras[i]);
    }
    // Unir las letras del array con un bucle, guardando resultado en una variable
    let palabraInvertida = "";
    for(let i = 0; i < letrasInvertidas.length; i++){
        palabraInvertida += letrasInvertidas[i];

    }
    // Devolver el resultado si palabra y palabraInvertida son iguales
    return (palabra === palabraInvertida);
}

console.log(esPalindromo("otto")); // true
console.log(esPalindromo("maria")); // false