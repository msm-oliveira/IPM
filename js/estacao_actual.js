
$('document').ready(function(){

  var elements = $(".clock-container");
  var size = elements.length;
  var circles =  [];    //Criar array com cada ProgressBar

  var tempos = [0, 1, 5, 8, 10];
    for(var i = 0; i < size; i++)
    {
        circles[i] =  new ProgressBar.Circle(elements[i], {
            duration: 800,
            color: '#61b3de',//"#FCB03C",
            trailColor: "#ddd",
            strokeWidth: 6,
            text: {value: tempos[i] + "'"}
        });
    }

  //Funcao chamada a cada segundo para atualizar os valores da progressBar
  setInterval(function() {
      for(var i = 0; i < size; i++)
      {
          var segundo = 60 - new Date().getSeconds(); //Para ir em sentido contrario
          if(segundo == 60 && tempos[i] > 0)//Se chegou o minuto ao fim passar ao prox
            circles[i].setText(--tempos[i] + "'" );
          else if(segundo == 60 && tempos[i] == 0)//Se chegar ao 00:00 eliminar o elemento
              $(elements[i]).parent().parent().hide(1000);//Hide da Linha toda

        circles[i].animate((segundo / 60) );
      }
  }, 1000);
    /*
        var d = new Date();
        var h = addZero(d.getHours());
        var m = d.getMinutes();
        var x = document.getElementsByClassName("act");
        for(var i = 0; i < x.length; i++)
        {  
            d.getMinutes();
            m = m + tempos[i];
            if(m < 10)
            {
                m = addZero(m);
            }
            x[i].innerHTML = h + ":" + m;
        }
       
    
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    */    
    var data = new Date();
    hora = data.getHours()+"h"+data.getMinutes();
    var arr = hora.split('h');
    var h = parseInt(arr[0]);
    var m = parseInt(arr[1]);
    var mtime = [m+0, m+1, m+5, m+8, m+10];
    
    var i = 0;
    $(".act").each(function(i) {
        if (h+1 < 24)
        {
            if (mtime[i] < 60)
                (h < 10 && mtime[i] < 10) ? $(this).html("0"+h+"h0"+mtime[i]) : h <10 ? $(this).html("0"+h+"h"+mtime[i]) : mtime[i] < 10 ? $(this).html(h+"h0"+mtime[i]) : $(this).html(h+"h"+mtime[i]);
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
});
