

$(document).ready(function(){
  if (!device.tablet() && !device.mobile()) {
    $("#videoWrapper1").css("display", "block"); 
    $("#videoWrapper2").css("display", "none"); 
  } else {
    $("#videoWrapper1").css("display", "none"); 
    $("#videoWrapper2").css("display", "block"); 
      
  }
  $("#owl-demo").owlCarousel({
      items : 1,
      autoplay : true,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      nav:true,
      navText : false,
      loop : true,
      responsive : false,      
  });
  $('.fancybox-modal').fancybox({padding: 0});

  $("input[name=phone]").mask("+7 (999) 999-99-99");
  $('input, textarea').placeholder();
});



function scrollToElement(element, offset) {
  $(element).click(function(e) {
    var elementClick = $(this).attr("href");
    var destination  = $(elementClick).offset().top;
    if(destination < 0) {destination = 0;}
    $('html, body').animate({scrollTop: destination - offset}, "slow");
    e.preventDefault();
  });
}
scrollToElement("a[href='#f1']",0);
scrollToElement("a[href='#f2']", 0);
scrollToElement("a[href='#f3']", 0);
scrollToElement("a[href='#f4']", 0);
scrollToElement("a[href='#f0']", 0);

$(window).scroll(function() {
if ($(this).scrollTop() > 1500){
    $(".firstWrapper").addClass( "newFirst" );
  }
  else{
    $(".firstWrapper").removeClass("newFirst");
  }
});


$( "#menuBig" ).click(function() {
  $(".menu" ).toggleClass( "menuClick" );
});

// Каталог 1

$( "#katalog1color1" ).click(function() {
  $( "#catalog1img1" ).fadeIn();
  $( "#catalog1img2" ).fadeOut();
  $( "#catalog1img3" ).fadeOut();
  $( "#catalog1img4" ).fadeOut();
  $( "#catalog1img5" ).fadeOut();
  $( "#catalog1img6" ).fadeOut();
});

$( "#katalog1color2" ).click(function() {
  $( "#catalog1img1" ).fadeOut();
  $( "#catalog1img2" ).fadeIn();
  $( "#catalog1img3" ).fadeOut();
  $( "#catalog1img4" ).fadeOut();
  $( "#catalog1img5" ).fadeOut();
  $( "#catalog1img6" ).fadeOut();
});

$( "#katalog1color3" ).click(function() {
  $( "#catalog1img1" ).fadeOut();
  $( "#catalog1img2" ).fadeOut();
  $( "#catalog1img3" ).fadeIn();
  $( "#catalog1img4" ).fadeOut();
  $( "#catalog1img5" ).fadeOut();
  $( "#catalog1img6" ).fadeOut();
});

$( "#katalog1color4" ).click(function() {
  $( "#catalog1img1" ).fadeOut();
  $( "#catalog1img2" ).fadeOut();
  $( "#catalog1img3" ).fadeOut();
  $( "#catalog1img4" ).fadeIn();
  $( "#catalog1img5" ).fadeOut();
  $( "#catalog1img6" ).fadeOut();
});

$( "#katalog1color5" ).click(function() {
  $( "#catalog1img1" ).fadeOut();
  $( "#catalog1img2" ).fadeOut();
  $( "#catalog1img3" ).fadeOut();
  $( "#catalog1img4" ).fadeOut();
  $( "#catalog1img5" ).fadeIn();
  $( "#catalog1img6" ).fadeOut();
});

$( "#katalog1color6" ).click(function() {
  $( "#catalog1img1" ).fadeOut();
  $( "#catalog1img2" ).fadeOut();
  $( "#catalog1img3" ).fadeOut();
  $( "#catalog1img4" ).fadeOut();
  $( "#catalog1img5" ).fadeOut();
  $( "#catalog1img6" ).fadeIn();
});

// Каталог 2

$( "#katalog2color1" ).click(function() {
  $( "#catalog2img1" ).fadeIn();
  $( "#catalog2img2" ).fadeOut();
  $( "#catalog2img3" ).fadeOut();
});

$( "#katalog2color2" ).click(function() {
  $( "#catalog2img1" ).fadeOut();
  $( "#catalog2img2" ).fadeIn();
  $( "#catalog2img3" ).fadeOut();
});

$( "#katalog2color3" ).click(function() {
  $( "#catalog2img1" ).fadeOut();
  $( "#catalog2img2" ).fadeOut();
  $( "#catalog2img3" ).fadeIn();
});

// Каталог 3

$( "#katalog3color1" ).click(function() {
  $( "#catalog3img1" ).fadeIn();
  $( "#catalog3img2" ).fadeOut();
  $( "#catalog3img3" ).fadeOut();
});

$( "#katalog3color2" ).click(function() {
  $( "#catalog3img1" ).fadeOut();
  $( "#catalog3img2" ).fadeIn();
  $( "#catalog3img3" ).fadeOut();
});

$( "#katalog3color3" ).click(function() {
  $( "#catalog3img1" ).fadeOut();
  $( "#catalog3img2" ).fadeOut();
  $( "#catalog3img3" ).fadeIn();
});

// Каталог 4

$( "#katalog4color1" ).click(function() {
  $( "#catalog4img1" ).fadeIn();
  $( "#catalog4img2" ).fadeOut();
  $( "#catalog4img3" ).fadeOut();
});

$( "#katalog4color2" ).click(function() {
  $( "#catalog4img1" ).fadeOut();
  $( "#catalog4img2" ).fadeIn();
  $( "#catalog4img3" ).fadeOut();
});

$( "#katalog4color3" ).click(function() {
  $( "#catalog4img1" ).fadeOut();
  $( "#catalog4img2" ).fadeOut();
  $( "#catalog4img3" ).fadeIn();
});

// Каталог 5

$( "#katalog5color1" ).click(function() {
  $( "#catalog5img1" ).fadeIn();
  $( "#catalog5img2" ).fadeOut();
  $( "#catalog5img3" ).fadeOut();
});

$( "#katalog5color2" ).click(function() {
  $( "#catalog5img1" ).fadeOut();
  $( "#catalog5img2" ).fadeIn();
  $( "#catalog5img3" ).fadeOut();
});

$( "#katalog5color3" ).click(function() {
  $( "#catalog5img1" ).fadeOut();
  $( "#catalog5img2" ).fadeOut();
  $( "#catalog5img3" ).fadeIn();
});


// Каталог 6

$( "#katalog6color1" ).click(function() {
  $( "#catalog6img1" ).fadeIn();
  $( "#catalog6img2" ).fadeOut();
});

$( "#katalog6color2" ).click(function() {
  $( "#catalog6img1" ).fadeOut();
  $( "#catalog6img2" ).fadeIn();
});

// Каталог 7

$( "#katalog7color1" ).click(function() {
  $( "#catalog7img1" ).fadeIn();
  $( "#catalog7img2" ).fadeOut();
  $( "#catalog7img3" ).fadeOut();
});

$( "#katalog7color2" ).click(function() {
  $( "#catalog7img1" ).fadeOut();
  $( "#catalog7img2" ).fadeIn();
  $( "#catalog7img3" ).fadeOut();
});

$( "#katalog7color3" ).click(function() {
  $( "#catalog7img1" ).fadeOut();
  $( "#catalog7img2" ).fadeOut();
  $( "#catalog7img3" ).fadeIn();
});

// Каталог 8

$( "#katalog8color1" ).click(function() {
  $( "#catalog8img1" ).fadeIn();
  $( "#catalog8img2" ).fadeOut();
  $( "#catalog8img3" ).fadeOut();
});

$( "#katalog8color2" ).click(function() {
  $( "#catalog8img1" ).fadeOut();
  $( "#catalog8img2" ).fadeIn();
  $( "#catalog8img3" ).fadeOut();
});

$( "#katalog8color3" ).click(function() {
  $( "#catalog8img1" ).fadeOut();
  $( "#catalog8img2" ).fadeOut();
  $( "#catalog8img3" ).fadeIn();
});

// Каталог 9

$( "#katalog9color1" ).click(function() {
  $( "#catalog9img1" ).fadeIn();
  $( "#catalog9img2" ).fadeOut();
});

$( "#katalog9color2" ).click(function() {
  $( "#catalog9img1" ).fadeOut();
  $( "#catalog9img2" ).fadeIn();
});

// Каталог 10

$( "#katalog10color1" ).click(function() {
  $( "#catalog10img1" ).fadeIn();
  $( "#catalog10img2" ).fadeOut();
  $( "#catalog10img3" ).fadeOut();
});

$( "#katalog10color2" ).click(function() {
  $( "#catalog10img1" ).fadeOut();
  $( "#catalog10img2" ).fadeIn();
  $( "#catalog10img3" ).fadeOut();
});

$( "#katalog10color3" ).click(function() {
  $( "#catalog10img1" ).fadeOut();
  $( "#catalog10img2" ).fadeOut();
  $( "#catalog10img3" ).fadeIn();
});

// Каталог 11

$( "#katalog11color1" ).click(function() {
  $( "#catalog11img1" ).fadeIn();
  $( "#catalog11img2" ).fadeOut();
  $( "#catalog11img3" ).fadeOut();
});

$( "#katalog11color2" ).click(function() {
  $( "#catalog11img1" ).fadeOut();
  $( "#catalog11img2" ).fadeIn();
  $( "#catalog11img3" ).fadeOut();
});

$( "#katalog11color3" ).click(function() {
  $( "#catalog11img1" ).fadeOut();
  $( "#catalog11img2" ).fadeOut();
  $( "#catalog11img3" ).fadeIn();
});