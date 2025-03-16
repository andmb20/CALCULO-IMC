const buttonCalculate = document.querySelector(".button_submit");
let resultParagraph = document.querySelector("p");

function calculateIMC() {
    const heightValue = document.querySelector(".height").value;
    const kilogramsValue = document.querySelector(".kilograms").value;

    const result = kilogramsValue / ((heightValue / 100) * (heightValue / 100));

    resultParagraph.innerHTML = result.toFixed(2);
    
    console.log("IMC: " + kilogramsValue / ((heightValue / 100) * (heightValue / 100)));

    console.log(heightValue);
    console.log(kilogramsValue);
}

buttonCalculate.addEventListener("click", calculateIMC);
