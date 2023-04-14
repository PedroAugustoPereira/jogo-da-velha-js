let contadorDeJogadas = 1;
let player = document.getElementById('player');
let acabar = false;
let restart = document.getElementById('restart');
//identificar quando o usuaruio clicka em alguma div:

const table = [
    document.getElementById('t00'),
    document.getElementById('t01'),
    document.getElementById('t02'),
    document.getElementById('t10'),
    document.getElementById('t11'),
    document.getElementById('t12'),
    document.getElementById('t20'),
    document.getElementById('t21'),
    document.getElementById('t22'),
]
let chekcTable = []

for(let i = 0 ; i < table.length ; i++){
    chekcTable[i] = {
        check: '',
        playerOcuped: 0,
    }
}
console.log(chekcTable)

let teste = document.getElementById('t00');
console.log(table)


//verificar empate

function empate(){
    let contCheck = 0;

    for(let i = 0 ; i < chekcTable.length ; i++){
        if(chekcTable[i].check=== 'check'){
            contCheck++;
            console.log(contCheck)
        }
        console.log(contCheck);
        console.log(chekcTable);
    }

    if(contCheck === chekcTable.length){
        return true;
    }
    else{
        return false;
    }
}





//verificar vitória

function winLose(player){
    let endGame;

    //Verficação horizontal
    if((chekcTable[0].check === 'check' && chekcTable[1].check === 'check' && chekcTable[2].check === 'check')&&
    (chekcTable[0].playerOcuped === chekcTable[1].playerOcuped && chekcTable[1].playerOcuped === chekcTable[2].playerOcuped && chekcTable[2].playerOcuped != 0)){
        endGame = true
    }
    else if((chekcTable[3].check === 'check' && chekcTable[4].check === 'check' && chekcTable[5].check === 'check')&&
    (chekcTable[3].playerOcuped === chekcTable[4].playerOcuped && chekcTable[4].playerOcuped === chekcTable[5].playerOcuped && chekcTable[5].playerOcuped != 0)){
        endGame = true
    }
    else if((chekcTable[6].check === 'check' && chekcTable[7].check === 'check' && chekcTable[8].check === 'check')&&
    (chekcTable[6].playerOcuped === chekcTable[7].playerOcuped && chekcTable[7].playerOcuped === chekcTable[8].playerOcuped && chekcTable[8].playerOcuped != 0)){
        endGame = true
    }
    //fim da verificação horizontal

    //verificação vertical
    else if((chekcTable[0].check === 'check' && chekcTable[3].check === 'check' && chekcTable[6].check === 'check')&&
    (chekcTable[0].playerOcuped === chekcTable[3].playerOcuped && chekcTable[3].playerOcuped === chekcTable[6].playerOcuped && chekcTable[6].playerOcuped != 0)){
        endGame = true    
    }
    else if((chekcTable[1].check === 'check' && chekcTable[4].check === 'check' && chekcTable[7].check === 'check')&&
    (chekcTable[1].playerOcuped === chekcTable[4].playerOcuped && chekcTable[4].playerOcuped === chekcTable[7].playerOcuped && chekcTable[7].playerOcuped != 0)){
        endGame = true;
    }   
    else if((chekcTable[2].check === 'check' && chekcTable[5].check === 'check' && chekcTable[8].check === 'check')&&
    (chekcTable[2].playerOcuped === chekcTable[5].playerOcuped && chekcTable[5].playerOcuped === chekcTable[8].playerOcuped && chekcTable[8].playerOcuped != 0)){
        endGame = true
    }
    //fim da verificação de vertical

    //verficação vertical
    else if((chekcTable[0].check === 'check' && chekcTable[4].check === 'check' && chekcTable[8].check === 'check')&&
    (chekcTable[0].playerOcuped === chekcTable[4].playerOcuped && chekcTable[4].playerOcuped === chekcTable[8].playerOcuped && chekcTable[8].playerOcuped != 0)){
        endGame = [true, player];
    }
    else if((chekcTable[2].check === 'check' && chekcTable[4].check === 'check' && chekcTable[6].check === 'check')&&
    (chekcTable[2].playerOcuped === chekcTable[4].playerOcuped && chekcTable[4].playerOcuped === chekcTable[6].playerOcuped && chekcTable[6].playerOcuped != 0)){
        endGame = true
    }
    else if(empate()){
        console.log('teste')
        return 'velha';
    }
    else{
        endGame = false
    }

    console.log(empate())
    return endGame;
}
//reiniciar!



//identificar o click em uma div


for(let i = 0 ; i < table.length ; i++){
    table[i].addEventListener('click', () => {
        if(winLose() === false){
            if(chekcTable[i].check != 'check'){ //checar se ja ouve um click
                chekcTable[i].check = 'check';
                contadorDeJogadas++;
                console.log(chekcTable[i].check)
                //checagem de player

                if(contadorDeJogadas % 2 === 0 && contadorDeJogadas != 1){
                    chekcTable[i].playerOcuped = 1;
                    console.log(chekcTable[i].playerOcuped);
                    table[i].innerHTML = '<img class="xis" src="imagens/x.png">'
                    
                    if(winLose() && winLose() != 'velha'){
                        player.innerHTML = '<h2 id="player">O jogo acabou, player 1 foi o vencedor</h2>';
                        acabar = true;
                        reinciar(acabar);
                    }
                    else if(winLose() === 'velha'){
                        player.innerHTML = '<h2 id="player">O jogo acabou, houve um empate!</h2>';
                        acabar = true;
                        reinciar(acabar);
                    }
                    else if(contadorDeJogadas != 1){
                        player.innerHTML = '<h2 id="player">Vez do jogador 2</h2>'
                    }
                }
                else if(contadorDeJogadas % 2 !== 0 && contadorDeJogadas != 1){
                    chekcTable[i].playerOcuped = 2;
                    console.log(chekcTable[i].playerOcuped);
                    table[i].innerHTML = '<img class="bolinha" src="imagens/bolinha.png">'

                    if(winLose() && winLose() != 'velha'){
                        player.innerHTML = '<h2 id="player">O jogo acabou, player 2 foi o vencedor!</h2>';
                        acabar = true;
                        reinciar(acabar);
                    }
                    else if(winLose() === 'velha'){
                        player.innerHTML = '<h2 id="player">O jogo acabou, houve um empate!</h2>';
                        acabar = true;
                        reinciar(acabar);
                    }
                    else if(contadorDeJogadas != 1){
                        player.innerHTML = '<h2 id="player">Vez do jogador 1</h2>'
                    }
                }
            }
            else{
                alert('Você ja clicou aqui!');
            }
        }
        else{
            alert('O jogo ja acabou!');
        }     
    })
}
console.log(chekcTable)

function reinciar(fim){
    if(fim){
      restart.style.display = 'block';
      restart.addEventListener('click', () => {
        contadorDeJogadas = 1;
        console.log('deu');
        table.forEach((value, indice, array) => {
            value.innerHTML = '';
        });
        chekcTable.forEach((value, indice, array) => {
            array[indice].playerOcuped = 0;
            array[indice].check = '';
        })
        player.innerHTML = '<h2 id="player">Vez do jogador 1</h2>'
        console.log(table);
        console.log(chekcTable);
      })
    }
}
