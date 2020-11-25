const contagem = (numero) => {
    return numero
}

const somatorio = (numeros) => {
    var somatorio = 0;

    for(let i = 0; i < numeros.length; i++)
    {
        somatorio += parseInt (numeros[i]);
    }
    return somatorio;
}


module.exports = {
    contagem,
    somatorio
}