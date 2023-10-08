let output = "";
let display = document.querySelector(".display");
let buttons = document.querySelectorAll('.btn');
let spclChars = ["+","/","*",".","res","del","="];
let result;

const evaluate = (btnValue)=>{    
    if(btnValue === "del"){
        if(output !== result){
            output = output.toString().slice(0, -1);
        }else{
            output = "";
        }
    }else if(btnValue === "res"){
        output = "";
    }else if(btnValue === "="){
        result = eval(output);
        output = result;
    }else if(spclChars.includes(btnValue) && output === ""){
        result = "Bad Input!";
        output = result;
    }else{
        output += btnValue;
    }
    display.value = output;
}

//for display
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (item)=>{
        evaluate(item.target.value);
    })
})

