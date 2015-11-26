$(document).ready(function(){
    
    $("#saldo").html(parseFloat(localStorage.getItem("guito")).toFixed(2));
    $("#stock").html(parseInt(localStorage.getItem("qt")));
    
    $("#saldo").val(parseFloat(localStorage.getItem("guito")));
    $("#stock").val(parseInt(localStorage.getItem("qt")));

    if($("#stock").val() > 0)
        $("#gerar").show();
    else
        $("#gerar").hide();
});