//O que precisarmos para o site

//app.html
$(document).ready(function(){

//DatePicker
  $('#datePicker').datepicker({
  		changeMonth: true,
  		changeYear: true,
  		dateFormat: "dd MM yy",
  		numberOfMonths: 1,
  		maxDate: 365,
  		minDate: 0
	});
    $('#datePicker').datepicker( "setDate", new Date());

//TimePicker
  $('#timePicker').timepicker({
      hourText: 'Horas',
      minuteText: 'Minutos',
      amPmText: ['AM', 'PM'],
      timeSeparator: 'h',
      nowButtonText: 'Agora',
      showNowButton: true,
      closeButtonText: 'Fechar',
      showCloseButton: true,
      deselectButtonText: 'Deseleccionar',
      showDeselectButton: true
  });
    $('#timePicker').timepicker('setTime', new Date());


  //Nao permitir que se selecione a mesma estacao 2x
  function preventDupes( select, index ) {
      var options = select.options,
      len = options.length;
      while( len-- ) {
          options[ len ].disabled = false;
      }
      select.options[ index ].disabled = true;
      if( index === select.selectedIndex ) {
          alert('You\'ve already selected the item "' + select.options[index].text + '".\n\nPlease choose another.');
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

//OU
  $(".go").change(function(){
      //alert("yoyo");
     var selVal=[];
     $(".go").each(function(){
         selVal.push(this.value);
     });

     $(this).siblings(".go").find("option").removeAttr("disabled").filter(function(){
        var a=$(this).parent("select").val();
        return (($.inArray(this.value, selVal) > -1) && (this.value!=a))
     }).attr("disabled","disabled");
});

  $(".go").eq(1).trigger('change');
    
    $("#plan").click(function(){
        console.log($("#select1").val());
        console.log($("#select2").val());
        if (!$("#select1").val())
            alert("Escolha uma estação de origem.");
        else if (!$("#select2").val())
            alert("Escolha uma estação de destino.");
        else
        {
            localStorage.setItem("origem",$("#select1").val());
            localStorage.setItem("destino",$("#select2").val());
            localStorage.setItem("back",1);
            localStorage.setItem("time",$("input[name=horas]").val());
            window.location.href = "planear_viagem.html";
        }
    })
});