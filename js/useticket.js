$(document).ready(function(){
    
    counter = parseInt(localStorage.getItem("qt")) - 1;
    
    localStorage.setItem("qt",counter);
    $("#stock").html(counter);
    
    $("#sub").click(function() {
        window.location.href="matilde_dashboard.html";
    })
});