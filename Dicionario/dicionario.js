let dicionario = {};
function pegaValor(){
    let chave = document.getElementById("chave").value;
    let valor = document.getElementById("valor").value;
    dicionario [ chave ] = valor;
    chave.value = "";
    valor.value = "";
    console.log(dicionario);
}