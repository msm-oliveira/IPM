//O que precisarmos para o site

//app.html
$(document).ready(function(){

  $("#pesq").click(function() {
    $("#alterarCalendario").toggle();
  });

//DatePicker
  $('#datePicker').datepicker({
  		changeMonth: true,
  		changeYear: true,
  		dateFormat: "dd MM yy",
  		numberOfMonths: 1,
  		maxDate: 365,
  		minDate: 0
	});

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


});
