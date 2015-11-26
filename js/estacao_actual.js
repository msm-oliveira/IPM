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

});