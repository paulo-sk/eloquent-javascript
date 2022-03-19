//array de objetos
let journal = []

function addEntry(events, squirrel){
    //esses parametros sao os nomes das propriedades do objeto, os argumentos passados sao os valores
    journal.push({events, squirrel})

}

addEntry(["work","touched tree","pizza","running","television"], false)
addEntry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);

console.log(journal);

/*o valor da formula, que calcula a correlacao de cada variavel de evento com squirrel
é sempre entre -1 e 1, onde -1 é uma correlacao negativa e 1 é uma correlacao positiva 
0 é quando nao tem correleçao*/
table = [76,9,4,1] //00, 01, 10, 11

function phi(table) {
    return (table[3]*table[0] - table[2]*table[1]) /
    Math.sqrt((table[2] + table[3])*
    (table[0] + table[1])*
    (table[1] + table[3])*
    (table[0] + table[2]))
    
}

console.log(phi(table))