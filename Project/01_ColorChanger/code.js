const buttons = document.querySelectorAll(".buttons")
const bd = document.querySelector("body")
const heading2 = document.querySelector("h2")
const bgcolor = document.querySelector(".bgcolor")


function changeBGColor(color){
    heading2.style.backgroundColor = color
}

function changeHeaderSize(v){
    heading2.style.fontSize = v+"px"   
}

function changePadding(num){
    heading2.style.padding = num + "px"
}

buttons.forEach( function(butt) {
    butt.addEventListener("click", function(event){
        console.log(event);
        console.log(event.target);

        if(event.target.id === "Red"){
            console.log("Clicked Red");
            bd.style.backgroundColor = event.target.id
        }
        if(event.target.id === "Blue"){
            console.log("Clicked BLue");
            bd.style.backgroundColor = event.target.id
        }
        if(event.target.id === "Grey"){
            console.log("Clicked Grey");
            bd.style.backgroundColor = event.target.id
        }
        if(event.target.id === "Orange"){
            console.log("Clicked Orange");
            bd.style.backgroundColor = event.target.id
        }
        if(event.target.id === "Purple"){
            console.log("Clicked Purple");
            bd.style.backgroundColor = event.target.id
        }

    })
} )