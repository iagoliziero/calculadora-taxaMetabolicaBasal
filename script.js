function calculo() {
    //captura as variáveis
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let idade = Number(document.getElementById('idade').value);
    let operacao = (document.getElementById('operacao').value);
    let resultadoSaida = document.getElementById('resultadoSaida');
    let resultado;
     
    //caso for um valor inválido
    if(peso === "" || altura === "" || idade === "" || isNaN(idade) || isNaN(altura) || isNaN(peso)) {
        alert("insira um número válido")  
        return;  
    }
    //swich para escolher as operacoes
    switch(operacao) {
        case "homem": 
        resultado = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
        break;
        case "mulher":
        resultado = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
        break;
        default:
        alert("Insira um número valido.")
        break;
    }
    //resultado
    resultadoSaida.textContent = "Sua Taxa Metabólica Basal é: " + resultado;
}