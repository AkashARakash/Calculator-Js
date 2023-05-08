function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mul(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

function calc()
{
let screen1 = parseInt(document.getElementById("screen1").value);
let screen2 = parseInt(document.getElementById("screen2").value);
let calculation =document.getElementById('calculation').value;
let result;
switch(calculation){
    case "+":
        result = add (screen1,screen2);
        break;
        case "-":
            result = sub (screen1,screen2);
            break;
            case "*":
                result = mul (screen1,screen2);
                break;
                case "/":
                result = div (screen1,screen2);
                    break;

}

document.getElementById('Out').value =result;

function clr() {
    document.getElementById('Out').value ="null";
}
}








































// submit.sddEventListener("click", () =>{
//     let finalResult;
//     const firstNumber = screen1.value;
//     const secondNumber = screen2.value;
//     const operation = calculator.value;

//     if(operation == "+"){
//         finalResult = Number(firsrNumber) + Number(secondNumber);
//     }else if (operation == "-"){
//         finalResult = Number(firsrNumber) - Number(secondNumber);
//     }else if (operation == "*"){
//         finalResult = Number(firsrNumber) * Number(secondNumber);
//     }else if (operation == "/"){
//         finalResult = Number(firsrNumber) / Number(secondNumber);
//     }
//     result.innerHTML = finalResult;
    
// });