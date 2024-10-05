const container= document.querySelector(".container");
// for(x=0;x<256;x++){
//     const gridBox= document.createElement("div");
//     gridBox.className="gridElement";
//     container.append(gridBox);
// }
let gridBox;
for(x=0;x<16;x++){
    const gridRow= document.createElement("div");
    gridRow.className=`gridrow${x}`
    container.append(gridRow);
    for(y=0;y<16;y++){
         gridBox= document.createElement("div");
        gridBox.className="gridElement";
        gridBox.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor="blue";
        });
        gridRow.append(gridBox);
    }
}
