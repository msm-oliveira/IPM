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
              if($("#select2").val() != estacao)
                  $("#select1").val(estacao);
              else
                  number--;
          }
          else  //se count mouseclicks em cada <g> par escreve na segunda
          {
              if($("#select1").val() != estacao)
                  $("#select2").val(estacao);
              else
                  number--;
          }
      });
    
    $('.menu').click(function(){
        number=0;
        $("#select1").val(null);
        $("#select2").val(null);
    });
    
  //Nao permitir que se selecione a mesma estacao 2x
  function preventDupes( select, index ) {
      var options = select.options,
      len = options.length;
      while( len-- ) {
          options[ len ].disabled = false;
      }
      select.options[ index ].disabled = true;
      if( index === select.selectedIndex ) {
          //alert('You\'ve already selected the item "' + select.options[index].text + '".\n\nPlease choose another.');
          this.selectedIndex = 0;
      }
  }

  var select1 = select = document.getElementById( 'select1' );
  var select2 = select = document.getElementById( 'select2' );

  select1.onchange = function() {
      preventDupes.call(this, select2, this.selectedIndex );
  };

  select2.onchange = function() {
      preventDupes.call(this, select1, this.selectedIndex );
  };
});