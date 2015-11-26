$(document).ready(function(){
   
    $("#inputEmail3").change(function() {
        if ($("input[name='tipo']:checked").val() == 'semDesconto')
        {
            var tot = parseInt($("#inputEmail3").val())*0.85;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'senior')
        {
            var tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'sub23')
        {
            var tot = parseInt($("#inputEmail3").val())*0.55;
            $("#outputTotal").text(tot);
        }
        else{
            var tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
    })
    
    $("input:radio[name='tipo']").change(function() {
        if ($("input[name='tipo']:checked").val() == 'semDesconto')
        {
            var tot = parseInt($("#inputEmail3").val())*0.85;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'senior')
        {
            var tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'sub23')
        {
            var tot = parseInt($("#inputEmail3").val())*0.55;
            $("#outputTotal").text(tot);
        }
        else{
            var tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
            
    });
});

 /* if ($("#semdesc").prop("checked", true))
            return 0.85;
        else if ($("#senior").prop("checked", true))
            return 0.35;
        else if ($("#sub23").prop("checked", true))
            return 0.55;
        else ($("#sub18").prop("checked", true))
            return 0.35;*/