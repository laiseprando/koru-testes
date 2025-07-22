/*function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3)); // Output: 8*/
//Crie uma função que recebe um objeto person e retorna um novo objeto, com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

let person = {
    name: "Claudio",
    age: 35,
}

function maiorDeIdade(person){
    if (person.age >= 18) {
        console.log("É maior de idade");
        return {
            ...person,
            isAdult: true
        }
    } else {
        console.log("Não é maior de idade");
        return {
            ...person,
            isAdult: false
        }
    }
}

let personFunction = maiorDeIdade(person);

console.log(personFunction); 


// 1. Use filter para encontrar estudantes inativos
// 2. Use find para encontrar o estudante com id = 3
// 3. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70
// 4. Combine filter e map para obter apenas os nomes dos estudantes com média > 85