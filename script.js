const parentDiv = document.querySelector(".display");
const generate = document.querySelector(".user-input");

let tiles;
let rows;

function etchASketch(){
    
    const gridSize = document.querySelector("#grid-size");

    let size = Number(gridSize.value)

    let border;
    if (size===8){
        border = 1;
    }
    if (size===16){
        border = 0.8;
    }
    if (size===32){
        border = 0.5;
    }
    if (size===64){
        border = 0.25;
    }

    let height = Number(500/size) - 2;
    let width = Number(500/size);

    for (let i = 0; i < size; i++) {
        var childDiv = document.createElement("div");

        childDiv.setAttribute("class","row-div");
        childDiv.style.display = "flex";
        childDiv.style.flex = "1";
        

        for (let k = 0; k < size; k++) {
            var newChild = document.createElement("div");

            newChild.setAttribute("class","child-div");
            newChild.style.height = `${height}px`;
            newChild.style.width = `${width}px`;
            newChild.style.border = `${border}px black solid`;
            childDiv.appendChild(newChild);
        }

        parentDiv.appendChild(childDiv);
    }

    tiles = Array.from(document.querySelectorAll(".child-div"))
    rows = Array.from(document.querySelectorAll(".row-div"))

    for (let i = 0; i<tiles.length; i++){
        changeColor(tiles[i]);
    }

    function changeColor(div){
        
        div.addEventListener("mouseover", e=>{
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${R},${G},${B})`;
        });
        
    }
};
etchASketch();

generate.addEventListener("click",e=>{

    tiles.forEach(function(div) {
        div.remove();
    });

    rows.forEach(function(div) {
        div.remove();
    });

    etchASketch();
});
