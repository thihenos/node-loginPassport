$(document).ready(function(){

  //Variavel repsonsavel para resgatar a quantidade de contatos do usuário
  let countContatos = $("#listaContatosTamanho").val();//Contagem de contatos
  let countInteresses = $("#listaInteressesTamanho").val();//Contagem de areas de interesses
  let countCursos = $("#listaCursosTamanho").val();//Contagem de cursos
  let countIdioma = $("#listaIdiomaTamanho").val();//Contagem de Idiomas
  let countExperiencias = $("#listaExperienciasTamanho").val();//Contagem de Experiencias Profissionais

  //Botão de delete de usuário
  $('.deleteButton').on('click',function(){
    var id = $(this).data('id');
    var url = '/usuario/'+id;
      if(confirm('Deseja deletar o usuario '+$(this).data('nome')+' ?')){
        $.ajax({url: url,type: 'DELETE',
          sucess: function(result){
            console.log('Deletando usuario '+$(this).data('nome'));
          },error: function(err){
            console.log(err);
          }
        }).done(function(){
            window.location.href='/logout';
        });
      }
  });

  //Botão que remove o curriculo da tela e limpa o link do download
  $('.removeCurriculo').on('click',function(){
    if(confirm('Deseja deletar o curriculo?')){
      document.getElementById('a_'+$(this).data('id')).innerHTML = "Sem Arquivo";//Trocando texto da ancora
      document.getElementById('a_'+$(this).data('id')).href = "#";//Tirando link da ancora
      document.getElementById($(this).data('id')).value = "Sem Arquivo";//Trocando texto do input escondido
    }
  });

  // Removendo certificados
  $('.removeCertificado').on('click','button',function(){
    if(confirm('Deseja remover o certicado?')){
      document.getElementById('certificado_'+$(this).data('id')).remove();
    }
    return false;
  });

  //Clicar no botão para adicionar contato
  $('.addContato').on('click',function(){
    
    if(isNaN(countContatos)){
      countContatos = 0;
    }

    //Incrementando o count de contatos
    countContatos++;

    //Adicionando o contato na tela de cadastro a embalagem selecionada para a tela principal
    let divContatos = document.getElementById("divContatos");
    divContatos.innerHTML = divContatos.innerHTML +
    '<div id="divContatos'+countContatos+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><hr><div class="form-row"> \
     <div class="col-lg-4 col-xl-4 col-sm-12 col-md-4 mb-3"> \
      <label for="listaContatos['+countContatos+'][tipoTelefone]">Tipo</label> \
      <input type="text" name="listaContatos['+countContatos+'][tipoTelefone]" id="listaContatos['+countContatos+'][tipoTelefone]" list="tipos" class="form-control" autocomplete="off" required> \
      <datalist id="tipos"> \
        <option>Celular</option><option>Residencial</option><option>Empresarial</option> \
      </datalist> \
     </div> \
     <div class="col-lg-6 col-xl-6 col-sm-6 col-md-6 mb-3"> \
      <label for="listaContatos['+countContatos+'][telefone]">Numero</label> \
      <input type="text" name="listaContatos['+countContatos+'][telefone]" id="listaContatos['+countContatos+'][telefone]" class="telefone form-control" required > \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeContato" data-id="'+countContatos+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
    </div></div><hr/>';
  });

  // Removendo contatos
  $('#divContatos').on('click','button',function(){
    if(confirm('Deseja remover o contato?')){
      document.getElementById('divContatos'+$(this).data('id')).remove();
    }
    return false;
  });

  //Clicar no botão para adicionar areas de interesse
  $('.addAreasInteresses').on('click',function(){
    
    if(isNaN(countInteresses)){
      countInteresses = 0;
    }

    //Incrementando o count de interesses
    countInteresses++;

    let divInteresses = document.getElementById("divInteresses");
    divInteresses.innerHTML = divInteresses.innerHTML +
    '<div id="divInteresses'+countInteresses+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><div class="form-row"> \
      <div class="col-lg-10 col-xl-10 col-sm-10 col-md-10 mb-3"> \
        <input type="text" name="listaInteresse['+countInteresses+']" id="listaInteresse['+countInteresses+']" class="form-control" required> \
      </div> \
      <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
        <button class="btn btn-danger fa fa-times removeInteresse" data-id="'+countInteresses+'" type="button"></button> \
      </div> \
    </div>';
  });

  // Removendo Interesses
  $('#divAreaInteresses').on('click','button',function(){
    if(confirm('Deseja remover o contato?')){
      document.getElementById('divContatos'+$(this).data('id')).remove();
    }
    return false;
  });

  //Clicar no botão para adicionar curso
  $('.addCursos').on('click',function(){
    
    if(isNaN(countCursos)){
      countCursos = 0;
    }

    //Incrementando o count de cursos
    countCursos++;

    //Adicionando o contato na tela de cadastro a embalagem selecionada para a tela principal
    let divCursos = document.getElementById("divCursos");
    divCursos.innerHTML = divCursos.innerHTML +
    '<div id="divCursos'+countCursos+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><hr><div class="form-row"> \
     <div class="col-lg-10 col-xl-10 col-sm-10 col-md-10 mb-3"> \
      <label for="listaCursos['+countCursos+'][titulo]">Titulo</label> \
      <input type="text" name="listaCursos['+countCursos+'][titulo]" id="listaCursos['+countCursos+'][titulo]" class="form-control" required > \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeCurso" data-id="'+countCursos+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
     <div class="col-lg-4 col-xl-4 col-sm-4 col-md-4 mb-3"> \
      <label for="listaCursos['+countCursos+'][data_conclusao]">Data Conclusao</label> \
      <input type="text" name="listaCursos['+countCursos+'][data_conclusao]" id="listaCursos['+countContatos+'][data_conclusao]" placeholder="MM/AAAA" class="data-mes-ano form-control" required > \
     </div> \
     <div class="col-lg-8 col-xl-8 col-sm-8 col-md-8 mb-3"> \
      <label for="listaCursos['+countCursos+'][instituicao]">Instituição</label> \
      <input type="text" name="listaCursos['+countCursos+'][instituicao]" id="listaCursos['+countCursos+'][instituicao]" class="form-control" required > \
     </div> \
    </div></div><hr/>';
  });

  // Removendo contatos
  $('#divCursos').on('click','button',function(){
    if(confirm('Deseja remover o curso?')){
      document.getElementById('divCursos'+$(this).data('id')).remove();
    }
    return false;
  });

  //Clicar no botão para adicionar curso
  $('.addIdiomas').on('click',function(){
    
    if(isNaN(countIdioma)){
      countIdioma = 0;
    }

    //Incrementando o count de cursos
    countIdioma++;

    //Adicionando o contato na tela de cadastro a embalagem selecionada para a tela principal
    let divIdiomas = document.getElementById("divIdiomas");
    divIdiomas.innerHTML = divIdiomas.innerHTML +
    '<div id="divIdiomas'+countIdioma+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><div class="form-row"> \
     <div class="col-lg-5 col-xl-5 col-sm-12 col-md-5 mb-3"> \
      <label for="listaCursos['+countIdioma+'][idioma]">Idioma</label> \
      <input type="text" name="listaContatos['+countIdioma+'][idioma]" id="listaContatos['+countIdioma+'][idioma]" class="form-control" required > \
     </div> \
     <div class="col-lg-5 col-xl-5 col-sm-12 col-md-5 mb-3"> \
      <label for="listaContatos['+countIdioma+'][nivel]">Nivel</label> \
      <input type="text" name="listaContatos['+countIdioma+'][nivel]" id="listaContatos['+countIdioma+'][nivel]" list="niveis" class="form-control" autocomplete="off" required> \
      <datalist id="niveis"> \
        <option>Fluente</option><option>Intermediário</option><option>Basico</option> \
      </datalist> \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeIdioma" data-id="'+countIdioma+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
    </div></div><hr/>';
  });

  // Removendo contatos
  $('#divIdiomas').on('click','button',function(){
    if(confirm('Deseja remover o idioma?')){
      document.getElementById('divIdiomas'+$(this).data('id')).remove();
    }
    return false;
  });

  //Clicar no botão para adicionar experiências
  $('.addExperiencias').on('click',function(){
    
    if(isNaN(countExperiencias)){
      countExperiencias = 0;
    }

    //Incrementando o count de cursos
    countExperiencias++;

    //Adicionando o contato na tela de cadastro a embalagem selecionada para a tela principal
    let divExperiencias = document.getElementById("divExperiencias");
    divExperiencias.innerHTML = divExperiencias.innerHTML +
    '<div id="divExperiencias'+countExperiencias+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><hr><div class="form-row"> \
     <div class="col-lg-10 col-xl-10 col-sm-10 col-md-10 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][empresa]">Empresa</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][empresa]" id="listaExperiencia['+countExperiencias+'][empresa]" class="form-control" required > \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeCurso" data-id="'+countExperiencias+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
     <div class="col-lg-6 col-xl-6 col-sm-12 col-md-6 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][cargo]">Cargo</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][cargo]" id="listaExperiencia['+countExperiencias+'][cargo]" class="form-control" required > \
     </div> \
     <div class="col-lg-3 col-xl-3 col-sm-6 col-md-3 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][data_inicio]">De</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][data_inicio]" id="listaExperiencia['+countExperiencias+'][inicio]" placeholder="MM/AAAA" class="data-mes-ano form-control" required > \
     </div> \
     <div class="col-lg-3 col-xl-3 col-sm-6 col-md-3 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][data_fim]">Até</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][data_fim]" id="listaExperiencia['+countExperiencias+'][data_fim]" placeholder="MM/AAAA" class="data-mes-ano form-control" required > \
     </div> \
     <div class="col-lg-12 col-xl-12 col-sm-12 col-md-12 mb-3"> \
      <textarea rows="3" name="listaExperiencia['+countExperiencias+'][descricao]" class="form-control" required></textarea> \
     </div> \
    </div></div><hr/>';
  });

  // Removendo experiencias
  $('#divExperiencias').on('click','button',function(){
    if(confirm('Deseja remover a experiência?')){
      document.getElementById('divExperiencias'+$(this).data('id')).remove();
    }
    return false;
  });

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

});