$(document).ready(function(){

    $("#actual").html(localStorage.getItem("origem"));
    $(".arrival").html(localStorage.getItem("destino"));
    
    var hora = localStorage.getItem("time");
    if (hora == "")
    {
        var data = new Date();
        hora = data.getHours()+"h"+data.getMinutes();
    }
    var arr = hora.split('h');
    var h = parseInt(arr[0]);
    var m = parseInt(arr[1]);
    var mtime = [m+0, m+1, m+5, m+8, m+10];
    
    var i = 0;
    $(".horas").each(function(i) {
        if (h+1 < 24)
        {
            if (mtime[i] < 60)
                (h < 10 && mtime[i] < 10) ? $(this).html("0"+h+"h0"+mtime[i]) : h <10 ? $(this).html("0"+h+"h"+mtime[i]) : mtime[i] < 10 ?          $(this).html(h+"h0"+mtime[i]) : $(this).html(h+"h"+mtime[i]);
            else
                $(this).html((h+1)+"h0"+(mtime[i]-60));
        }
        else
        {
            if (mtime[i] < 60)
                (mtime[i] < 10) ? $(this).html(h+"h0"+mtime[i]) : $(this).html(h+"h"+mtime[i]);
            else
                ((mtime[i]-60) < 10) ? $(this).html("00h0"+(mtime[i]-60)) : $(this).html("00h"+(mtime[i]-60));
        }
        i = i + 1;
    });
    
    $("#back").click(function(event){
        event.preventDefault();
        var whereto = localStorage.getItem("back");
        if (whereto == 1)
            window.location.href = "index.html";
        else
            window.location.href = "mapalinha2.html";
    })
});