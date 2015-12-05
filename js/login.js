$(document).ready(function(){
    
    
    
    $("#sub").click(function(){
        if (($("#inputEmail3").val() == "Matilde") && ($("#inputPassword3").val() == "123"))
        {
            localStorage.setItem("guito",10);
            localStorage.setItem("qt",0);
            window.location.href = "matilde_dashboard.html";
        }
        else
            alert("O nome de utilizador ou password estão errados.");
    });
});