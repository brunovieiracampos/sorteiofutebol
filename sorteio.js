var exibirQuantidadeTime1 = 0;
var exibirQuantidadeTime2 = 0;
var exibirQuantidadeTime3 = 0;
var exibirQuantidadeProximos = 0;
var quantidadePessoas = 0;
var quantidadePessoasPorTime = 0;
var quantidadeTimes = 0;
var quantidadeProximos = 0;
var quantidadeNumeroAleatorio = 0;

$(document).ready(function(){


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
      $("#time2").hide();
      $("#time3").hide();
    }
    else if(quantidadeTimes == 2){
      $("#time2").show();
      $("#time3").hide();
    }else if(quantidadeTimes == 3){
      $("#time1").show();
      $("#time2").show();
      $("#time3").show();
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
    $("#corProximo").removeClass("bg-dark");
    
    var timeAleatorio = Math.floor(quantidadeNumeroAleatorio * Math.random() + 1);


    setTimeout(() => {

    if(quantidadeTimes == 2){
        if(timeAleatorio == 1 && exibirQuantidadeTime1 < quantidadePessoasPorTime){
            exibirQuantidadeTime1++;
            $("#quantidadeTime1").text(exibirQuantidadeTime1);
            $("#corTime1").addClass("bg-warning");
        }else if(timeAleatorio == 2 && exibirQuantidadeTime2 < quantidadePessoasPorTime){
            exibirQuantidadeTime2++;
            $("#quantidadeTime2").text(exibirQuantidadeTime2);
            $("#corTime2").addClass("bg-primary");
        }else if(timeAleatorio == 3 && exibirQuantidadeProximos < quantidadeProximos){
             exibirQuantidadeProximos++;
           $("#quantidadeProximos").text(exibirQuantidadeProximos);
           $("#corProximo").addClass("bg-dark");
         }else{
            if((exibirQuantidadeTime1 + exibirQuantidadeTime2 + exibirQuantidadeProximos) == quantidadePessoas){
                $("#sortear_jogador").attr("disabled", true);

                $("#corTime1").addClass("bg-warning");
                $("#corTime2").addClass("bg-primary");
                $("#corTime3").addClass("bg-success");
                $("#corProximo").addClass("bg-dark");

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
        }else if(timeAleatorio == 2 && exibirQuantidadeTime2 < quantidadePessoasPorTime){
            exibirQuantidadeTime2++;
            $("#quantidadeTime2").text(exibirQuantidadeTime2);
            $("#corTime2").addClass("bg-primary");
        } else if(timeAleatorio == 3 && exibirQuantidadeTime3 < quantidadePessoasPorTime){
            exibirQuantidadeTime3++;
            $("#quantidadeTime3").text(exibirQuantidadeTime3);
            $("#corTime3").addClass("bg-success");
        }else if(timeAleatorio == 4 && exibirQuantidadeProximos < quantidadeProximos){
            exibirQuantidadeProximos++;
            $("#quantidadeProximos").text(exibirQuantidadeProximos);
            $("#corProximo").addClass("bg-dark");
         }else{
            if((exibirQuantidadeTime1 + exibirQuantidadeTime2 + exibirQuantidadeTime2 + exibirQuantidadeProximos) == quantidadePessoas){
                $("#sortear_jogador").attr("disabled", true)

                $("#corTime1").addClass("bg-warning");
                $("#corTime2").addClass("bg-primary");
                $("#corTime3").addClass("bg-success");
                $("#corProximo").addClass("bg-dark");

             }else{
                sortearJogador();
             }
         }
    }

    }, 100);
}