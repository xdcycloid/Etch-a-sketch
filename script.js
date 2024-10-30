const container= document.querySelector(".container");
// for(x=0;x<256;x++){
//     const gridBox= document.createElement("div");
//     gridBox.className="gridElement";
//     container.append(gridBox);
// }
const inp= document.querySelector("#item");
const btn= document.querySelector("#button");

let gridBox;

btn.addEventListener("click",()=>{

    container.innerHTML=null;

    const inputValue=inp.value;
    for(x=0;x<inputValue;x++){
        const gridRow= document.createElement("div");
        gridRow.className=`gridrow`
        container.append(gridRow);
        for(y=0;y<inputValue;y++){
            gridBox= document.createElement("div");
            gridBox.className="gridElement";
            gridBox.addEventListener("mouseover", function(e){
                e.target.style.backgroundColor="blue";
            });
            gridRow.append(gridBox);
        }
    }
})