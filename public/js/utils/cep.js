//Quando o campo cep perde o foco.
  $("#cep").blur(function() {
    //Nova variável "cep" somente com dígitos.
   // var cep = $(this).val().replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if ($(this).val().replace(/\D/g, '') != "") {
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if(validacep.test($(this).val().replace(/\D/g, ''))) {
        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/"+ $(this).val().replace(/\D/g, '') +"/json/?callback=?", function(dados) {
          if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#endereco").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#uf").val(dados.uf);
          } else {
            //CEP pesquisado não foi encontrado.
            limpa_formulario_cep();
            alert("CEP não encontrado.");
          }
        });
      } else {
        //cep é inválido.
        limpa_formulario_cep();
        alert("Formato de CEP inválido.");
      }
    } else {
       //cep sem valor, limpa formulário.
      limpa_formulario_cep();
    }
  });

  //Função criada par efetuar a limpeza dos campos de endereço
  function limpa_formulario_cep(){
    //Preenche os campos com "..." enquanto consulta webservice.
    $("#endereco").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
  }