const dino = document.querySelector('.dino');//const não altera e let pode alterar
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
//console.log(dino);



/**************DINO**********************/
//Setando botão para o salto
function handleKeyUp(event){
    if(event.keyCode === 32){
    //verificar se está pulando    
    //    console.log('Pressionou espaço');
        if(!isJumping){
            jump();
        }
        
    }
}

// fazer o dino Pular
function jump(){
    
    isJumping = true;

    //pegando o valor position inicial e somando 20 a cada 20 ms
    let upInterval = setInterval(()=>{
        if(position >= 150){
            clearInterval(upInterval);
        //descendo
        let downInterval = setInterval(()=>{
            if(position <=0){
                clearInterval(downInterval);
                isJumping = false;
            }else{
            position -= 20;
            dino.style.bottom = position+'px';
            }
        },20);
        }else{
        position += 20;
        dino.style.bottom = position +'px';
        }
        

   },20); // tempo de 20 ms
}
/**************FIM DINO**********************/


/*************CRIANDO CACTUS************/
function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() *6000;

    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1000+'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        
    if(cactusPosition < -60){

        clearInterval(leftInterval);
        background.removeChild(cactus);

    }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
        //game over
        clearInterval(leftInterval)
        document.body.innerHTML = '<h1 class="game-over">FIM DE JOGO</h1>';
        
    }else{
        cactusPosition -= 8;
        cactus.style.left = cactusPosition+'px';
        
    }
    }, 20);

    //recurssividade = invocar uma função dentro dela
    setTimeout(createCactus, randomTime );

}

/***********FIM DA CRIAÇÃO CACTUS*********/



createCactus();
//setando o botão para o salto
document.addEventListener('keyup', handleKeyUp)
   // console.log('pressionou uma tecla');

