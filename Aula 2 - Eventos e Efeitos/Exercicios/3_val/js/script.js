/*

1. Crie uma funcionalidade que armazena o valor do input e apresenta esse valor na tela, preenchendo
o elemento <h2> do texto.

1.2. O texto replicado inicial é: "A desenvolvedora mais incrível desse ano será a...", e o valor
do input deve completar a frase.

2. Não esqueça de validar o input de forma a não replicar valores vazios


*/

$(document).ready(function () {

    $('#botao-replicar').click(function () {
        let inputValue = $('#campo-nome').val().trim()
        //let inputSemBranco = inputValue.trim()

        //$('#texto-replicado').text('A desenvolvedora mais incrível desse ano será a ' + inputValue)
        //Se ele não for (! =)
        if (inputValue != '') {
            $('#texto-replicado').text('A desenvolvedora mais incrível desse ano será a ' + inputValue)
        } 
    })


})