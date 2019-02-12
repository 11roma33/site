

jQuery(function(){
	
	
	
	jQuery('body').append('<div class="callto the_new">'
	+'<div class="call1"><a href="tel:+78123375580"><img src="navphone.png"/*tpa=http://smartfasad.ru/assets/templates/site/images/navphone.png*/ alt="" />Позвонить</a></div>'
	+'<div class="call2"><a class="caller"><img src="navorder.png"/*tpa=http://smartfasad.ru/assets/templates/site/images/navorder.png*/ alt="" />Заказать звонок</a></div>'
	+'</div>');
	
	 $('.caller').click(function(){ 
	  $('#slideout').fadeIn();
	  $('#callback').fadeIn();
	 });
	
			 
});
