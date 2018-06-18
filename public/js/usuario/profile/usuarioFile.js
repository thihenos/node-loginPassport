 $(document).ready(function(){
    
    //Função para alterar o campo alterar foto com o nome do arquivo
    $(function(){
      $("#foto").change(function(){
        $(".fotoAlterar").html(regexReplace($(this).val()));
      });
    });

    $('.deleteFoto').on('click',function(){
      if(confirm('Deseja deletar a foto do perfil?')){
        document.getElementById('profile_pic').src = "/images/profile/images.png";//Trocando texto do input escondido
      }
      return false
    });

    //Função para Retirar o C://fakepath dos arquivos
    function regexReplace(nomeArquivo){
      return nomeArquivo.replace("C:\\fakepath\\","");
    }
});