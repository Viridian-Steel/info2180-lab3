

function InitSquares() {
    const divs = document.getElementsByTagName("div");
    console.log("test");
    if(divs == null) {console.error("BIIIG PROBLEM");}

    for( var box of divs){

        if(box.id == "" && box.className != "controls"){
            box.className = "square";
        }
    }
}

window.onload = InitSquares;