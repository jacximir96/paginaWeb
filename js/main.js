(function(){
  'use strict';

  var activador= document.getElementsByClassName("nav-item");
  var activador_a=document.getElementsByClassName("nav-link");

  console.log(activador_a[1]);
  activador_a[1].style.padding="5px 20px 5px 32px";

  //CALCULAMOS LA ALTURA DE LA PANTALLA
  var alturaBody = $('body').innerHeight();
  var barraAltura = $('#color2').innerHeight();
  var barraAltura1 = $('.carousel-inner').innerHeight();
  var barraAltura2 = $('#color1').innerHeight();
  var contenedor1 = $('#color1');
  console.log(barraAltura);
  console.log(barraAltura2);
  console.log(barraAltura1);

  var suma = barraAltura+barraAltura2;
  var suma2 = barraAltura+barraAltura;

  $('#color2').css({'margin-top':0+'px'});
  $('#color2').css({'top':barraAltura2+'px'});
  $('#color1').css({'top':0+'px'});
  $('body').css({'margin-top':suma+'px'});
  $('#color2').addClass('fixed');
  $('#color1').addClass('fixed');
  $('#color2').css({'background-color':'rgba(255,255,255)'});

  //menu fijo
     var windowHeight = $(window).height();
     //var barraAltura = $('.barra').innerHeight();
      $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if(scroll>suma2){
        $('#color2').css({'top':0+'px'});
        $('#color1').css({'display':'none'});
      //$('body').css({'margin-top': 0+'px'});
        $('#color2').css({'background-color':'rgba(255,255,255,0.9)'});
        $('#color2').css({'transition':'ease .4s all'});
          
      //$('#color2').addClass('fixed');
      //$('#color2').css({'margin-bottom':barraAltura+'px'});
      //contenedor1.css('padding',0 + 'px');
      //contenedor1.css('height',0 + 'px');
      //contenedor1.css('display','none');
      }else{
      //contenedor1.css('display','block');
      $('#color2').css({'background-color':'rgba(255,255,255)'});
      $('#color2').css({'top':barraAltura2+'px'});
      $('#color1').css({'display':'block'});
     }
   });
  //FIN DEL CALCULO DE ALTURA
    
    //codigo redireccionar

    //fin codigo redireccionar
})();

// INICIO TAB PROYECTOS
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//mapa
var map = L.map('mapa').setView([-12.112590,-76.990183],18);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
     maxZoom: 18,
     minZoom:15
 }).addTo(map);
//
 L.marker([-12.112590,-76.990183]).addTo(map)
     .bindPopup('<p style="text-align:center;font-weight:bold;">VMYJ Ingenieros SAC</hp><p style="text_align:center;">Empresa de Telecomunicaciones</p><p style="text-align:center;">Visitanos</p>')
     .openPopup();
//
// L.map('mapa', {
//                 fadeAnimation: false,
//                 zoomAnimation: false,
//                 markerZoomAnimation: false
//             }).addTo(map);




//fin del mapa
// FIN TAB PROYECTOS

//inicio codigo servicios
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 
//fin codigo servicios
