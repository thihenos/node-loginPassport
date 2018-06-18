$(document).ready(function(){

  var countContatos = 0;//Contagem de contatos

  //Clicar no botão voltar
  $('.backButton').on('click',function(){
    if(confirm('Deseja voltar a tela anterior ?')){
      $.ajax({url: '/login',type: 'GET',
        sucess: function(result){
          console.log('Voltando a tela de login');
        },error: function(err){
          console.log(err);
        }
      }).done(function(){
        window.location.href=url;
      });
    }
  });

  //Clicar no botão para adicionar contato
  $('.salvarContato').on('click',function(){
    let tipoTelefone = document.getElementById("tipoTelefone").value;
    let telefone = document.getElementById("contatoTelefone").value;
    
    //Incrementando o count de contatos
    countContatos++;

    //Adicionando o contato na tela de cadastro a embalagem selecionada para a tela principal
    let divContatos = document.getElementById("divContatos");
    divContatos.innerHTML = divContatos.innerHTML +
   '<div id="divContatos'+countContatos+'" class="col-lg-3 col-sm-6">'+
   '<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">'+
   '<div class="card-header"><h4>'+tipoTelefone+' <button class="btn-sm btn-danger pull-right removerContato" id="removerContato'+countContatos+'" data-id="'+countContatos+'">'+
     '<span class="fa fa-times" aria-hidden="true"></span></button></span></h3></div> '+
     '<div class="card-body"> '+
       '<input type="hidden" name="listaContatos['+countContatos+'][tipoTelefone]" value="'+tipoTelefone+'">'+
       '<input type="text" name="listaContatos['+countContatos+'][telefone]" value="'+telefone+'" class="form-control">'                      
   '</div></div></div>';
   //Limpando dados 
   document.getElementById("contatoTelefone").value = "";
   document.getElementById("tipoTelefone").value = "";
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