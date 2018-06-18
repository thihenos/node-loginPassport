$(document).ready(function(){

  var countContatos = 0;//Contagem de contatos

  //Botão de delete de usuário
  $('.deleteButton').on('click',function(){
        var id = $(this).data('id');
        var url = '/usuario/'+id;
        if(confirm('Deseja deletar o usuario '+$(this).data('nome')+' ?')){
          $.ajax({
            url: url,
            type: 'DELETE',
            sucess: function(result){
              console.log('Deletando usuario '+$(this).data('nome'));
            },
            error: function(err){
              console.log(err);
            }
          }).done(function(){
            window.location.href='/usuario/';
          });
        }
  });

  //Botão para voltar a tela de consulta de usuários
  $('.backButton').on('click',function(){
        var url = '/usuario/';
        if(confirm('Deseja voltar a tela anterior ?')){
          $.ajax({
            url: url,
            type: 'GET',
            sucess: function(result){
              console.log('Voltando a tela de listagem de usuarios');
            },
            error: function(err){
              console.log(err);
            }
          }).done(function(){
            window.location.href=url;
          });
        }
  });

  //Clicar no botão para adicionar contato
  $('.salvarContato').on('click',function(){
    var telefone = document.getElementById("contatoTelefone").value;
    var email = document.getElementById("contatoEmail").value;
    
    //Adicionando o contato na tela de cadastro a embalagem selecionada para a tela principal
    var divContatos = document.getElementById("divContatos");
    countContatos++;
    divContatos.innerHTML = divContatos.innerHTML + 
      '<div id="divContatos'+countContatos+'" class="panel panel-info"> '+
      '<label>Celular | Telefone</label>'+
      '<input type="text" name="listaContatos['+countContatos+'][telefone]" value="'+telefone+'" class="form-control">'+
      '<label>Email</label>'+
      '<input type="text" name="listaContatos['+countContatos+'][email]" value="'+email+'" class="form-control">'+                         
      '<button class="btn-sm btn-primary removerContato" id="removerContato'+countContatos+'" '+
      'data-id="'+countContatos+'">Remover</button>'+
      '</div> </div>';
    //Limpando dados 
    document.getElementById("contatoTelefone").value = "";
    document.getElementById("contatoEmail").value = "";
    
  });

  // Removendo contatos
  $('#divContatos').on('click','button',function(){
    var id = $(this).data('id');
    if(confirm('Deseja remover o contato?')){
      document.getElementById('divContatos'+id).remove();
    }
    return false;
  });

});