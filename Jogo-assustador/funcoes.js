function jogar() {

 
  var texto = document.getElementById("titulo");
  texto.style.opacity = 0;
  texto.style.transition = "opacity 0.5s ease-out";
  setTimeout(function () {
      texto.style.display = "none";
  }, 500);

  var botao1 = document.getElementById("bt1");
  botao1.style.opacity = 0;
  botao1.style.transition = "opacity 0.5s ease-out";
  setTimeout(function () {
      botao1.style.display = "none";
  }, 500);

  var wallpaper = document.getElementById("wallpaper");
  wallpaper.style.opacity = 0;
  wallpaper.style.transition = "opacity 0.5s ease-out";
  setTimeout(function () {
      wallpaper.style.display = "none";
  }, 500);

  setTimeout(function () {

      document.getElementById("div2").style.display = "flex";

  }, 500);

}

nome = "";

document.getElementById("nome").addEventListener("keydown", function (event) {

  if (event.key == "Enter") {

      nome = event.target.value;

      var div2 = document.getElementById("div2");
      div2.style.opacity = 0;
      div2.style.transition = "opacity 0.5s ease-out";
      setTimeout(function () {
          div2.style.display = "none";
      }, 500);

      funcBarra();



  }
})

function funcBarra() {

  setTimeout(function () {
      document.getElementById("div4").style.display = "block";

  }, 500);

  setTimeout(function () {
      document.getElementById("div4").style.display = "none";
      lore();

  }, 6800);
}

function lore() {
  document.getElementById("div5").style.display = "flex";

  setTimeout(function () {

      document.getElementById("div6").style.display = "flex";

      document.getElementById("txt3").style.display = "none";

  }, 3500)

}

function op1() {

  var div5 = document.getElementById("div5");
  div5.style.opacity = 0;
  div5.style.transition = "opacity 0.5s ease-out";
  setTimeout(function () {
      div5.style.display = "none";
  }, 500);

  setTimeout(function () {
      document.getElementById("div7").style.display = "flex";
  }, 500);


}

function op2() {

  var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";
  

  setTimeout(function () {

      div7.style.opacity = 100;
      
      document.getElementById("img1").src = ("radio.jpg");
     document.getElementById("img1").style.width = "400px"; document.getElementById("txt12").innerHTML = "Mais um dia sem sinal no rádio infelizmente...";
      document.getElementById("bt3").innerHTML = "Voltar...";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").onclick = op4;

      }, 500);

}

function op3() {

  var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      
      document.getElementById("img1").style.display = "flex";
      document.getElementById("img1").src = ("latas.png");
      document.getElementById("txt12").innerHTML = "Você percebeu que sua comida está acabando, o que você faz?";
      
      document.getElementById("bt3").innerHTML = "Decido sair atrás de comida";
      
      document.getElementById("bt4").innerHTML = "Vou fazer outra coisa"
      document.getElementById("bt3").onclick = op5;
      
      document.getElementById("bt4").onclick = final2;
      

  }, 500);

}

function op4(){

  var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {
  

      div7.style.opacity = 100;
      document.getElementById("img1").style.display = "none";
      document.getElementById("txt12").innerHTML = "Você ouviu um barulho estranho lá fora, o que você faz?";
      document.getElementById("bt3").innerHTML = "Decido ir lá fora ver";
      document.getElementById("bt4").style.display = "block";
      document.getElementById("bt4").innerHTML = "Ignorar e ir atrás de comida"
      document.getElementById("bt3").onclick = final1;
      
      document.getElementById("bt4").onclick = op3

      }, 500);

}

function final1() {

  var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      document.getElementById("img1").style.display = "none";
      document.getElementById("vcmorreu").style.display = "block";
      document.getElementById("txt12").innerHTML = "Felizmente era só um esquilo, entretanto você desmaiou e morreu de fome!";
      document.getElementById("bt3").innerHTML = "Voltar...";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").addEventListener("click", function() {
    
    location.reload();
});

      }, 500);
       
}

function final2() {

  var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      document.getElementById("img1").style.display = "none";
      document.getElementById("vcmorreu").style.display = "block";
      document.getElementById("txt12").innerHTML = "Você foi ir dormir mas acabou morrendo de fome...";
      document.getElementById("bt3").innerHTML = "Voltar...";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").addEventListener("click", function() {
    
    location.reload();
});

      }, 500);
}      

function op5(){
    
  var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      
      document.getElementById("img1").src = ("floresta.png");
      document.getElementById("txt12").innerHTML = "Você segue sua trilha de sempre, porém você a estrada da floresta está bloqueada, então você continua pela cidade";
      document.getElementById("bt3").innerHTML = "Continuar indo pela Cidade";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").onclick = cidade;

      }, 500);
      
    
}

function cidade(){
    
    var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      
      document.getElementById("bt4").style.display = "block";
      
      document.getElementById("img1").style.display = "flex";
      document.getElementById("img1").src = ("https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPW99sQbv5rxUuFhIVppNAg9028ajEshugQ&usqp=CAU");
      document.getElementById("txt12").innerHTML = "Você estava andando tranquilamente, quando percebe que uma horda de zumbis começou a correr atrás de você. O que você faz?";
      
      document.getElementById("bt3").innerHTML = "Correr";
      
      document.getElementById("bt4").innerHTML = "Enfrenta-los "
      document.getElementById("bt3").onclick = correr;
      
      document.getElementById("bt4").onclick = enfrentar;
      

  }, 500);

    
}

function correr() {

     var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      document.getElementById("img1").src = "beco.png";
      document.getElementById("txt12").innerHTML = "Você acaba entrando em um beco. O que você faz?";
      
      document.getElementById("bt3").innerHTML = "Me escondo na lixeira ";
      
      document.getElementById("bt4").innerHTML = "Subo a escada do prédio"
      document.getElementById("bt3").onclick = finallixeira;
      
      document.getElementById("bt4").onclick = finalbom;
      

  }, 500);
      
}

function finalbom() {

    var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      document.getElementById("img1").style.display = "none";
      document.getElementById("vcmorreu").style.display = "block";
      
    document.getElementById("vcmorreu").style.color = "#2ca028"
    
    document.getElementById("vcmorreu").innerHTML = "Final Bom"
      document.getElementById("txt12").innerHTML = "Você conseguiu despistar os zumbis encima do prédio. Você achou um antigo supermercado que tinha várias latas de comida! Parabéns "+nome+" você achou o final bom!";
      document.getElementById("bt3").innerHTML = "Jogar Novamente";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").addEventListener("click", function() {
    
    location.reload();
});

      }, 500);
    
}

function finallixeira() {

  var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      document.getElementById("img1").style.display = "none";
      document.getElementById("vcmorreu").style.display = "block";
      document.getElementById("txt12").innerHTML = "Infelizmente você fez a escolha errada... Os zumbis sentiram seu cheiro e lhe acharam na lixeira!";
      document.getElementById("bt3").innerHTML = "Voltar...";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").addEventListener("click", function() {
    
    location.reload();
});

      }, 500);
    
}

function enfrentar() {
    
    var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      
      document.getElementById("img1").style.display = "flex";
      document.getElementById("img1").src = ("zumbis2.png");
      document.getElementById("txt12").innerHTML = "Você pega sua m4 e começa a matar alguns zumbis, porém você vê que são muitos e estão chegando cada vez mais perto. O que você faz?";
      
      document.getElementById("bt3").innerHTML = "Correr";
      
      document.getElementById("bt4").innerHTML = "Continuar enfrentando eles"
      document.getElementById("bt3").onclick = correr;
      
      document.getElementById("bt4").onclick = mordida;
      

  }, 500);
  
}

function mordida(){
    
    var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      
      document.getElementById("img1").style.display = "none";
      document.getElementById("txt12").innerHTML = "Quando você vai pegar seu facão um zumbi o ataca e morde você no seu braço. Você tem duas opções:";
      
      document.getElementById("bt3").innerHTML = "Ignorar e tentar correr";
      
      document.getElementById("bt4").innerHTML = "Cortar seu próprio braço com um facão parano vírus não se espalhar pelo corpo"
      document.getElementById("bt3").onclick = finalmordido;
      
      document.getElementById("bt4").onclick = finalsembraco;
      

  }, 500);
}

function finalmordido() {

     var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      document.getElementById("img1").style.display = "none";
      document.getElementById("vcmorreu").style.display = "block";
      document.getElementById("txt12").innerHTML = "Você tenta correr mas o vírus se espalha pelo seu corpo e você acaba virando um deles...";
      
      document.getElementById("vcmorreu").innerHTML = "Final Zumbi!"
      document.getElementById("bt3").innerHTML = "Voltar...";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").addEventListener("click", function() {
    
    location.reload();
});

      }, 500);
    
}

function finalsembraco() {
    
     var div7 = document.getElementById("div7");
  div7.style.opacity = 0;
  div7.style.transition = "opacity 0.5s ease-out";

  setTimeout(function () {

      div7.style.opacity = 100;
      document.getElementById("img1").style.display = "none";
      document.getElementById("vcmorreu").style.display = "block";
      document.getElementById("txt12").innerHTML = "Você conseguiu "+nome+"! Você impediu que o vírus se espalhasse pelo seu corpo e conseguiu fugir! Embora muito fraco você chegou no antigo mercado e voltou para seu bunker!";
      
      document.getElementById("vcmorreu").innerHTML = "Final Sem Braço!";
      
         document.getElementById("vcmorreu").style.color = "rgb(31,159,30)";
         
         document.getElementById("vcmorreu").style.color = "linear-gradient(180deg, rgba(31,159,30,1) 15%, rgba(192,22,0,1) 70%, rgba(211,3,3,1) 80%)";
         
     document.getElementById("bt3").innerHTML = "Voltar...";
      document.getElementById("bt4").style.display = "none";
      document.getElementById("bt3").addEventListener("click", function() {
    
    location.reload();
});

      }, 500);
}
