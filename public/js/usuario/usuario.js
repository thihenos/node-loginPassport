$(document).ready(function(){
      $('.deleteButton').on('click',function(){
        var id = $(this).data('id');
        var url = '/vogelfood/usuario/'+id;
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
            window.location.href='/vogelfood/usuario/';
          });
        }
      });
      $('.backButton').on('click',function(){
        var url = '/vogelfood/usuario/';
        if(confirm('Deseja voltar a tela anterior ?')){
          $.ajax({
            url: url,
            type: 'GET',
            sucess: function(result){
              console.log('Voltando a tela de listagem de usuario');
            },
            error: function(err){
              console.log(err);
            }
          }).done(function(){
            window.location.href=url;
          });
        }
      });
      $('button.showButton').click(function(){
        var id = $(this).data('id');
        var url = '/vogelfood/usuario/'+id;
        if(confirm('Deseja alterar o usuario '+$(this).data('razao')+' ?')){
          $.ajax({
            url: url,
            type: 'GET',
            sucess: function(result){
              console.log('Select no cadastro de usuario');
            },
            error: function(err){
              console.log(err);
            }
          }).done(function(){
            window.location.href=url;
          });
        }
      });
    });