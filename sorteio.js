var exibirQuantidadeTime1 = 0;
var exibirQuantidadeTime2 = 0;
var exibirQuantidadeTime3 = 0;
var exibirQuantidadeTime4 = 0;
var exibirQuantidadeProximos = 0;
var quantidadePessoas = 0;
var quantidadePessoasPorTime = 0;
var quantidadeTimes = 0;
var quantidadeProximos = 0;
var quantidadeNumeroAleatorio = 0;

$(document).ready(function(){

  $("#time1").hide();
  $("#time2").hide();
  $("#time3").hide();
  $("#time4").hide();
  $("#timeProximo").hide();
  $("#divSinalizador").hide();
  

    $("#sortear_jogador").click(function(){
      sortearJogador();
    });

    $("#btnConfirmar").click(function(){
      adicionarCardTimes();
    });

});

function adicionarCardTimes(){
    quantidadeTimes = parseInt($("#quantidadeTimes").val());

    if(quantidadeTimes == 1){
      $("#time1").show();
      $("#time2").hide();
      $("#time3").hide();
      $("#time4").hide();
      $("#timeProximo").show();
    }
    else if(quantidadeTimes == 2){
      $("#time1").show();
      $("#time2").show();
      $("#time3").hide();
      $("#time4").hide();
      $("#timeProximo").show();
    }else if(quantidadeTimes == 3){
      $("#time1").show();
      $("#time2").show();
      $("#time3").show();
      $("#time4").hide();
      $("#timeProximo").show();
    }else if(quantidadeTimes == 4){
      $("#time1").show();
      $("#time2").show();
      $("#time3").show();
      $("#time4").show();
      $("#timeProximo").show();
    }

    quantidadePessoas = parseInt($("#quantidadePessoas").val());
    quantidadePessoasPorTime = parseInt($("#quantidadePessoasPorTime").val());
   
    quantidadeProximos = (quantidadePessoas - (quantidadeTimes * quantidadePessoasPorTime));

    quantidadeNumeroAleatorio = quantidadeTimes + 1;

    $("#sortear_jogador").attr("disabled", false);
}

function sortearJogador(){
    $("#corTime1").removeClass("bg-warning");
    $("#corTime2").removeClass("bg-primary");
    $("#corTime3").removeClass("bg-success");
    $("#corTime4").removeClass("bg-danger");
    $("#corProximo").removeClass("bg-dark");
    $("#divSinalizador").hide();
    
    var timeAleatorio = Math.floor(quantidadeNumeroAleatorio * Math.random() + 1);


    setTimeout(() => {

      $("#divSinalizador").show();

    if(quantidadeTimes == 2){
        if(timeAleatorio == 1 && exibirQuantidadeTime1 < quantidadePessoasPorTime){
            exibirQuantidadeTime1++;
            $("#quantidadeTime1").text(exibirQuantidadeTime1);
            $("#corTime1").addClass("bg-warning");
            $("#divSinalizador").removeClass("text-primary");
            $("#divSinalizador").removeClass("text-dark");
            $("#divSinalizador").addClass("text-warning");
        }else if(timeAleatorio == 2 && exibirQuantidadeTime2 < quantidadePessoasPorTime){
            exibirQuantidadeTime2++;
            $("#quantidadeTime2").text(exibirQuantidadeTime2);
            $("#corTime2").addClass("bg-primary");
            $("#divSinalizador").removeClass("text-warning");
            $("#divSinalizador").removeClass("text-dark");
            $("#divSinalizador").addClass("text-primary");
        }else if(timeAleatorio == 3 && exibirQuantidadeProximos < quantidadeProximos){
             exibirQuantidadeProximos++;
           $("#quantidadeProximos").text(exibirQuantidadeProximos);
           $("#corProximo").addClass("bg-dark");
           $("#divSinalizador").removeClass("text-warning");
           $("#divSinalizador").removeClass("text-primary");
           $("#divSinalizador").addClass("text-dark");
         }else{
            if((exibirQuantidadeTime1 + exibirQuantidadeTime2 + exibirQuantidadeProximos) == quantidadePessoas){
                $("#sortear_jogador").attr("disabled", true);

                $("#corTime1").addClass("bg-warning");
                $("#corTime2").addClass("bg-primary");
                $("#corProximo").addClass("bg-dark");

                $("#divSinalizador").hide();

             }else{
                sortearJogador();
             }
         }
    }

    if(quantidadeTimes == 3){
        if(timeAleatorio == 1 && exibirQuantidadeTime1 < quantidadePessoasPorTime){
            exibirQuantidadeTime1++;
            $("#quantidadeTime1").text(exibirQuantidadeTime1);
            $("#corTime1").addClass("bg-warning");
            $("#divSinalizador").removeClass("text-primary");
            $("#divSinalizador").removeClass("text-success");
            $("#divSinalizador").removeClass("text-dark");
            $("#divSinalizador").addClass("text-warning");
        }else if(timeAleatorio == 2 && exibirQuantidadeTime2 < quantidadePessoasPorTime){
            exibirQuantidadeTime2++;
            $("#quantidadeTime2").text(exibirQuantidadeTime2);
            $("#corTime2").addClass("bg-primary");
            $("#divSinalizador").removeClass("text-warning");
            $("#divSinalizador").removeClass("text-success");
            $("#divSinalizador").removeClass("text-dark");
            $("#divSinalizador").addClass("text-primary");
        } else if(timeAleatorio == 3 && exibirQuantidadeTime3 < quantidadePessoasPorTime){
            exibirQuantidadeTime3++;
            $("#quantidadeTime3").text(exibirQuantidadeTime3);
            $("#corTime3").addClass("bg-success");
            $("#divSinalizador").removeClass("text-warning");
            $("#divSinalizador").removeClass("text-primary");
            $("#divSinalizador").removeClass("text-dark");
            $("#divSinalizador").addClass("text-success");
        }else if(timeAleatorio == 4 && exibirQuantidadeProximos < quantidadeProximos){
            exibirQuantidadeProximos++;
            $("#quantidadeProximos").text(exibirQuantidadeProximos);
            $("#corProximo").addClass("bg-dark");
            $("#divSinalizador").removeClass("text-warning");
            $("#divSinalizador").removeClass("text-primary");
            $("#divSinalizador").removeClass("text-success");
            $("#divSinalizador").addClass("text-dark");
         }else{
            if((exibirQuantidadeTime1 + exibirQuantidadeTime2 + exibirQuantidadeTime3 + exibirQuantidadeProximos) == quantidadePessoas){
                $("#sortear_jogador").attr("disabled", true)

                $("#corTime1").addClass("bg-warning");
                $("#corTime2").addClass("bg-primary");
                $("#corTime3").addClass("bg-success");
                $("#corProximo").addClass("bg-dark");

                $("#divSinalizador").hide();

             }else{
                sortearJogador();
             }
         }
    }

    if(quantidadeTimes == 4){
      if(timeAleatorio == 1 && exibirQuantidadeTime1 < quantidadePessoasPorTime){
          exibirQuantidadeTime1++;
          $("#quantidadeTime1").text(exibirQuantidadeTime1);
          $("#corTime1").addClass("bg-warning");
          $("#divSinalizador").removeClass("text-primary");
          $("#divSinalizador").removeClass("text-success");
          $("#divSinalizador").removeClass("text-dark");
          $("#divSinalizador").removeClass("text-danger");
          $("#divSinalizador").addClass("text-warning");
      }else if(timeAleatorio == 2 && exibirQuantidadeTime2 < quantidadePessoasPorTime){
          exibirQuantidadeTime2++;
          $("#quantidadeTime2").text(exibirQuantidadeTime2);
          $("#corTime2").addClass("bg-primary");
          $("#divSinalizador").removeClass("text-warning");
          $("#divSinalizador").removeClass("text-success");
          $("#divSinalizador").removeClass("text-dark");
          $("#divSinalizador").removeClass("text-danger");
          $("#divSinalizador").addClass("text-primary");
      } else if(timeAleatorio == 3 && exibirQuantidadeTime3 < quantidadePessoasPorTime){
          exibirQuantidadeTime3++;
          $("#quantidadeTime3").text(exibirQuantidadeTime3);
          $("#corTime3").addClass("bg-success");
          $("#divSinalizador").removeClass("text-warning");
          $("#divSinalizador").removeClass("text-primary");
          $("#divSinalizador").removeClass("text-dark");
          $("#divSinalizador").removeClass("text-danger");
          $("#divSinalizador").addClass("text-success");
      }else if(timeAleatorio == 4 && exibirQuantidadeTime4 < quantidadePessoasPorTime){
        exibirQuantidadeTime4++;
        $("#quantidadeTime4").text(exibirQuantidadeTime4);
        $("#corTime4").addClass("bg-danger");
        $("#divSinalizador").removeClass("text-warning");
        $("#divSinalizador").removeClass("text-primary");
        $("#divSinalizador").removeClass("text-dark");
        $("#divSinalizador").removeClass("text-success");
        $("#divSinalizador").addClass("text-danger");
    }else if(timeAleatorio == 5 && exibirQuantidadeProximos < quantidadeProximos){
          exibirQuantidadeProximos++;
          $("#quantidadeProximos").text(exibirQuantidadeProximos);
          $("#corProximo").addClass("bg-dark");
          $("#divSinalizador").removeClass("text-warning");
          $("#divSinalizador").removeClass("text-primary");
          $("#divSinalizador").removeClass("text-success");
          $("#divSinalizador").removeClass("text-danger");
          $("#divSinalizador").addClass("text-dark");
       }else{
          if((exibirQuantidadeTime1 + exibirQuantidadeTime2 + exibirQuantidadeTime3 + exibirQuantidadeTime4 + exibirQuantidadeProximos) == quantidadePessoas){
              $("#sortear_jogador").attr("disabled", true)

              $("#corTime1").addClass("bg-warning");
              $("#corTime2").addClass("bg-primary");
              $("#corTime3").addClass("bg-success");
              $("#corTime4").addClass("bg-danger");
              $("#corProximo").addClass("bg-dark");

              $("#divSinalizador").hide();

           }else{
              sortearJogador();
           }
       }
  }

    }, 100);
}