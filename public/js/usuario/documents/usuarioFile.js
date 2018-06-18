 $(document).ready(function(){
    
    $(function(){
      $("#rg").change(function(){
        $(".filenameRG").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#cpf").change(function(){
        $(".filenameCPF").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#comprovante_endereco").change(function(){
        $(".filenameComprovanteEnd").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#titulo_eleitor").change(function(){
        $(".filenameTituloEleitor").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#reservista").change(function(){
        $(".filenameReservista").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#cnh").change(function(){
        $(".filenameCnh").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#pis").change(function(){
        $(".filenamePis").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#registro_conselho_profissional").change(function(){
        $(".filenameRCP").html(regexReplace($(this).val()));
      });
    });

    $(function(){
      $("#certidao_casamento").change(function(){
        $(".filenameCertidaoCasamento").html(regexReplace($(this).val()));
      });
    });

    //Função para Retirar o C://fakepath dos arquivos
    function regexReplace(nomeArquivo){
      return nomeArquivo.replace("C:\\fakepath\\","");
    }
});