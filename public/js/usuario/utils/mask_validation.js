$(document).ready(function(){

	//Mascara de CPF
    $('#cpf').mask('000.000.000-00');

    //Mascara de Telefone
    $('.telefone').mask('(00) 000000000');

    //Mascara de Salario
    $('.salario').mask('000.000,00', {reverse:true});

    //Data
    $('#data_nascimento').mask('00/00/0000');

    //Data Mês-Ano
    $('.data-mes-ano').mask('00/0000');

    //Mostrar e esconder senha
    $(".reveal").on('click',function() {
    if ($(".pwd").attr('type') === 'password') {
        $(".pwd").attr('type', 'text');
        $(".reveal").html('Esconder');
    } else {
        $(".pwd").attr('type', 'password');
        $(".reveal").html('Mostrar');
    }
});
