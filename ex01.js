function SomarNumeros() {

    let soma = 0;

    let continuar = true;

    while (continuar) {
        let numero = parseFloat(prompt("digitar um numero"));

        if (!isNaN(numero)) {
            soma += numero;
            console.log(soma);
        } else {
            alert("burro, fala um numero");
        }
continuar = confirm("deseja adicionar mais numero?");
    }
    alert("a soma dos numeros é: " + soma);


}

