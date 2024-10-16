/*Exercícios com arrays:
1. Adicionando Elementos a um Array: Declare um array chamado
animais e adicione três nomes de animais usando o método push.
2. Removendo o Primeiro Elemento do Array: A partir do array animais
criado anteriormente, remova o primeiro elemento usando shift e
imprima o array modificado.
3. Inserindo Elementos no Início do Array: Utilize o método unshift para
adicionar dois novos animais no início do array animais.
4. Alterando Elementos Específicos do Array: Mude o segundo elemento
do array animais para "girafa".
5. Usando Length para Contar Elementos: Declare um array frutas e
adicione algumas frutas a ele. Use length para imprimir o número  total
de frutas no array.
6. Percorrendo um Array com Loop For: Utilize um loop for para percorrer
o array frutas criado e imprimir cada fruta individualmente.*/

// Exercício 1
let animais = [];
animais.push("Cachorro", "Gato", "Macaco");
console.log("Saída exercício 1 = " + animais);

//Exercício 2
animais.shift();
console.log("Saída exercício 2 = " + animais);

//Exercício 3
animais.unshift("Tubarão", "Tigre");
console.log("Saída exercício 3 = " + animais);

//Exercício 4
animais[1] = "Girafa";
console.log("Saída exercício 4 = " + animais);

//Exercício 5
let frutas = ["Maça", "Banana", "Manga"];
let totalFrutas = frutas.length;
console.log("Saída exercício 5 = " + frutas.length);

//Exercício 6
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
