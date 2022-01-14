//pqp essa foi hard, pra mim =/
function chessBoard(n){

    let symbol = ' #';

    for(let linha = 1; linha <= n; linha++){

        //barra lateral esquerda
        process.stdout.write("|");

        for(let col =1; col <= n/2; col++){
            
            if(linha %2 == 0){
                
                //cada symbom equivale a 2 caracteres no board, por isso o loop
                //tem que ser feito pela metade
                symbol = '# ';
                process.stdout.write(symbol); //print no console sem pular linha
            }else{
                symbol = ' #';
                process.stdout.write(symbol);
            }
        }
        //barra lateral direita
        process.stdout.write("|");
        console.log()
    }
}

chessBoard(8)


