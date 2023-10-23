let gameState = [0,0,0,0,0,0,0,0,0];


let isX = true;
const divs = document.getElementsByTagName("div");

function InitSquares() {
    console.log("test");
    if(divs == null) {console.error("BIIIG PROBLEM");}

    let pos = 0;
    for(let i = 0; i < divs.length; i++){
        let box = divs[i];
        if(box.id == "" && box.className != "controls"){

            box.className = "square";
            box.addEventListener("click", () =>{
                if(isX){
                    box.className = "square X";
                    box.innerHTML = "X";
                    gameState[pos] = 1;
                    isX = false;
                }
                else {
                    box.className = "square O";
                    box.innerHTML = "O";
                    gameState[pos] = -1;
                    isX = true;
                }
            });
            pos++;
            console.log("set box");
        }
    }
}



window.onload = InitSquares;



