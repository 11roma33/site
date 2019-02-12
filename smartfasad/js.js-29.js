   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
           

$(function(){
	$('.variable-width').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
	  auto:5,
	  pause:5000,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 1,
			centerMode: false,
			variableWidth:false,
			adaptiveHeight: true
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			centerMode: false,
			variableWidth:false,
			adaptiveHeight: true
		  }
		}
		
	  ]
	});
});
$(function(){
 $("form input[type='submit']").click(function(event) {
   $(this).parent().children("input[type='text']").each(function() {
    
  if(!$(this).val().length) {
    event.preventDefault();
    $(this).css('border', '1px solid #ff2929');
  }
  else{ $(this).css('border', 'none'); }
     if($(this).hasClass('em')){
     var emailAddress = $(this).val();  
     if(!isValidEmailAddress(emailAddress)){
      event.preventDefault();
        $(this).css('border', '1px solid #ff2929');}
       }  
   });
 });
});
$(function(){
 $('.call').click(function(){ 
  $('#slideout').fadeIn();
  $('#callback').fadeIn();
 });

	
 $('.order').click(function(){ 
  $('#slideout').fadeIn();
  $('#orders-form').fadeIn();
 });
 $('.orderSale').click(function(){ 
  $('#slideout').fadeIn();
  $('#orderSale').fadeIn();
 });
 $('.orderZ').click(function(){ 
  $('#slideout').fadeIn();
  $('#orderZ').fadeIn();
 });
 $('.callFoter').click(function(){ 
  $('#slideout').fadeIn();
  $('#callFoter').fadeIn();
 });
 $('.order-spec').click(function(){ 
  $('#slideout').fadeIn();
  $('#zamer').fadeIn();
 });
 $('.close').click(function(){ 
  $('#slideout').fadeOut();
  $('.feedback').fadeOut();
  $('#thank').fadeOut();
 });
 $('#slideout').click(function(){ 
  $('#slideout').fadeOut();
  $('.feedback').fadeOut();
  $('#thank').fadeOut();
 });
});
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
jQuery(function($) {
    $.mask.definitions['~']='[+-]';
    $('.mask').mask('+7 (999) 999-99-99');
});