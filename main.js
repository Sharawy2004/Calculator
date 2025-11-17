let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach((btn)=>{
    btn.addEventListener("click" ,()=>{
        if(btn.id === "="){
            display.value = eval(display.value)
        }
        else if(btn.id === "Ac"){
            display.value=""
        }
        else if(btn.id === "De"){
            display.value=display.value.toString().slice(0,-1)
        }
        else{
            display.value += btn.id
        }
    })
})