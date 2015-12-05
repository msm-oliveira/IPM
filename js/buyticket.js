$(document).ready(function(){
   
    var tot = 0;
    
    $("#inputEmail3").change(function() {
        if ($("input[name='tipo']:checked").val() == 'semDesconto')
        {
            tot = parseInt($("#inputEmail3").val())*0.85;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'senior')
        {
            tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'sub23')
        {
            tot = parseInt($("#inputEmail3").val())*0.55;
            $("#outputTotal").text(tot);
        }
        else{
            tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
    })
    
    $("input:radio[name='tipo']").change(function() {
        if ($("input[name='tipo']:checked").val() == 'semDesconto')
        {
            tot = parseInt($("#inputEmail3").val())*0.85;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'senior')
        {
            tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
        else if ($("input[name='tipo']:checked").val() == 'sub23')
        {
            tot = parseInt($("#inputEmail3").val())*0.55;
            $("#outputTotal").text(tot);
        }
        else{
            tot = parseInt($("#inputEmail3").val())*0.35;
            $("#outputTotal").text(tot);
        }
    });
    
    $("#buy").click(function(){
        
        var x = parseFloat(localStorage.getItem("guito"));
        var y = parseInt(localStorage.getItem("qt"));
        if($("#inputEmail3").val()>0 && tot <= x)
        {
            var total = x-tot;
            var quantidade = parseInt($("#inputEmail3").val())+y;
            localStorage.setItem("guito",total);
            localStorage.setItem("qt",quantidade);
            window.location.href = "matilde_dashboard.html";                
        }
        else
            alert("O número de bilhetes a comprar tem de ser superior a 0 ou não tem dinheiro suficiente para os comprar.");
    });
    
    $("#cancel").click(function(){
        window.location.href = "matilde_dashboard.html";
    })
});

 /* if ($("#semdesc").prop("checked", true))
            return 0.85;
        else if ($("#senior").prop("checked", true))
            return 0.35;
        else if ($("#sub23").prop("checked", true))
            return 0.55;
        else ($("#sub18").prop("checked", true))
            return 0.35;*/