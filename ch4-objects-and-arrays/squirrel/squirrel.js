//array de objetos
let journal = []

function addEntry(events, squirrel){
    journal.push({events, squirrel})
}

addEntry(["work","touched tree","pizza","running","television"], false)
addEntry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);

console.table(journal);

/*o valor da formula, que calcula a correlacao de cada variavel de evento com squirrel
é sempre entre -1 e 1, onde -1 é uma correlacao negativa e 1 é uma correlacao positiva 
0 é quando nao tem correleçao*/


