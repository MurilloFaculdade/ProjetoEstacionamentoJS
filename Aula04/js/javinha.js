function calcular() {
    var nome = document.getElementById("cxnome").value;

    var placa = document.getElementById("cxplaca").value;

    var carro = document.getElementById("cxcarro").value;

    var dia = document.getElementById("cxdias").value;

    var valorDia = 10;

    var valor = dia * valorDia;
    var valorSemDeconto = valor;

    if (valor >= 150) {
        valor = valor - (valor * 0.1);
    }


    var resumo = `
    <h3>Resumo dos Dados</h3>
    <p>Nome: ${nome}</p>
    <p>Placa: ${placa}</p>
    <p>Carro: ${carro}</p>
    <p>Quantos dias: ${dia}</p>
    <p>Valor sem desconto: R$${valorSemDeconto}</p>
    <p>Valor com desconto: R$${valor}</p>
`;

    document.getElementById("resultado").innerHTML = resumo;
}
function limpar() {
   
    document.getElementById("cxnome").value = '';
    document.getElementById("cxplaca").value = '';
    document.getElementById("cxcarro").value = '';
    document.getElementById("cxdias").value = '';
    document.getElementById("cxvalor").value = '10R$';

   
    document.getElementById("resultado").innerHTML = '';
}