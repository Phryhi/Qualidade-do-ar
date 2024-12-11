const meuBotao = document.getElementById("meuBotao");
let resultado = document.getElementById("resultado");
let total;

meuBotao.onclick = function(){
    const meuInput = document.getElementById("meuInput").value;
    if(meuInput >= 0 && meuInput <= 50){
        total = "boa";
        resultado.textContent = `A qualidade do ar está ${total}!`;
    }else if(meuInput >= 51 && meuInput <= 100){
        total = "moderada";
        resultado.textContent = `A qualidade do ar está ${total}!`;
    }else if(meuInput >= 101 && meuInput <= 150){
        total = "ruim para grupos sensíveis";
        resultado.textContent = `A qualidade do ar está ${total}!`;
    }else if(meuInput >= 151 && meuInput <= 200){
        total = "ruim";
        resultado.textContent = `A qualidade do ar está ${total}!`;
    }else if(meuInput >= 201 && meuInput <= 300){
        total = "péssima";
        resultado.textContent = `A qualidade do ar está ${total}!`;
    }
    else{
        resultado.textContent = `A qualidade do ar está perigosa!`;
    }
};