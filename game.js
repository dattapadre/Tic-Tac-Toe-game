let boxs=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let winner=document.querySelector(".winner");
let a=document.querySelector(".a");
let p=document.querySelector("p");
let Array=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let text=true;
boxs.forEach((box)=>{
    box.addEventListener("click",function(){
        if(text){
            box.innerHTML="O";
            box.style.color="red";
            text=false
        }else{
            box.innerHTML="X";
            box.style.color="green";
            text=true;
        }
        box.disabled=true;
        chick();
    });
});
let chick=()=>{
    for(let pattan of Array ){
        let pos1=boxs[pattan[0]].innerHTML;
        let pos2=boxs[pattan[1]].innerHTML;
        let pos3=boxs[pattan[2]].innerHTML;

        if(pos1 !="" && pos2 !="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                winner.style.display="block";
                p.innerHTML="Winner plyer="+pos1;
                chickwinner();
                audio.play();
            }
        }
    }
};
a.addEventListener("click",function(){
    winner.style.display="none";
    for( let box of boxs){
        box.disabled=false;
        box.innerHTML="";
        audio.pause();

    }
});
let chickwinner=()=>{
    for( let box of boxs){
        box.disabled=true;
    }
};
reset.addEventListener("click",function(){
    for( let box of boxs){
        box.disabled=false;
        box.innerHTML="";
    }
});
let audio=document.querySelector("audio");