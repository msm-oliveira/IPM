$(document).ready(function(){
    
    $("#sub").click(function(){
        if (($("#inputEmail3").val() == "Matilde") && ($("#inputPassword3").val() == "123"))
            window.location.href = "matilde_dashboard.html";
    });
});