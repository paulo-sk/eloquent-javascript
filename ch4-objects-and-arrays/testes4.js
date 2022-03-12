let arr = [1,2,3]

//pop() funcao/metodo que retorna e depois elimina o valor da ultima casa de um array 
let num = arr.pop()
console.log(num);

let object = {
    color: "blue"
}
//to access a value propertie in a object
//dot notatioN or [""] notation
console.log(object.color);
console.log(object["color"]);

//to delete a propertie, use delete(unary operator)

let anObject = {
    letf: 1,
    right: 2
}

delete anObject.letf;
console.log(anObject.letf);
//para verificar se uma propriedade esta em um objeto
console.log("left" in anObject);

//retornando os nomes das propriedades

console.log(Object.keys({x: 0, y: 0, z: 2})); //{x: 0, y: 0, z: 2} is a object literal, nao tem variavel

//passar todas as propriedade de um objeto para outro
let objectA = {a: 1, b: 2}
let objectB = {c: 3, d: 4}
Object.assign(objectA, objectB) //passe para o objetoA tudo que esta em objetoB
console.log(objectA);

//valores de referencia que apontam para o msm objeto na memoria
let objeto1 = {valor: 10}
let objeto2 = objeto1 //variaveis de referencia apontando para o msm objeto
objeto2.valor = 20
//como as 2 variaveis apontam para o msm lugar
console.log(objeto1.valor);

//objetos com const nao podem ser redeclarados, somente os valores dentro do objeto podem ser modificados
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
// score = {visitors: 1, home: 1};