const textBox=document.querySelector("#textBox");
const toFahrenheit = document.querySelector("#toFahrenheit");
const toCelsius = document.querySelector("#toCelsius");
const result = document.querySelector("p");

let temp;

function convert(){
    if (toFahrenheit.checked){
        temp=Number(textBox.value);
        temp*=9/5;
        temp+=32;
        result.textContent=`${temp} °F`;
        result.style.visibility="visible";
    }
    else if (toCelsius.checked){
        temp=Number(textBox.value);
        temp-=32;
        temp*=5/9;
        result.textContent=`${temp} °C`;
        result.style.visibility="visible";
        
    }
    else{
        result.style.visibility="visible";
    }
}