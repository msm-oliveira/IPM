
$(document).ready(function(){

    	/* Animar as tabs quando se carrega no Mapa Completo ou numa das linhas*/
    	$('.tabs_animate').tabslet({
    		mouseevent: 'click',
    		attribute: 'href',
    		animation: true
    	});

      var number = 0;
      $('.estacao').click(function(){
          $("#plan").show();
          number++;
          var estacao = $(this).attr('name');
          if (number%2 != 0)    //se count mouseclicks em cada <g> impar escreve na primeira
          {
              if($("#destino").val() != estacao)
                  $("#origem").val(estacao);
              else
                  number--;
          }
          else  //se count mouseclicks em cada <g> par escreve na segunda
          {
              if($("#origem").val() != estacao)
                  $("#destino").val(estacao);
              else
                  number--;
          }
      });
    
    $('.menu').click(function(){
        number=0;
        $("#origem").val(null);
        $("#destino").val(null);
    });     
});
