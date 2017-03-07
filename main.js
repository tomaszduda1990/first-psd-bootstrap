$(document).ready(function(){

	$('.preload').delay(3000).fadeOut('slow'); 
	
	$('.navigation .menu-list a').hover(

		function(){
			$(this).css({
				"border-bottom": "1px solid black",
				"font-size": "110%",
				"-webkit-transition": "0.7s", 
   				 "transition": "0.7s",
   				 "color": "black",
			})

}, 
		function(){
			$(this).css({
				"border-bottom": "none",
				"font-size": "100%",
				"color": "#635c73",	

			})

		}) 

	$('.offer').hover(

		function(){
			$(this).css({
				
				'background-color': 'rgba(0, 0, 0, 0.16)',
				'opacity': '0.84',
				'z-index': '1',
				 '-webkit-transform': 'scale(1.1)',
				 '-moz-transform': 'scale(1.1)',
				  '-ms-transform': 'scale(1.1)',
				  '-o-transform': 'scale(1.1)',
				  'transform': 'scale(1.1)',    
				'padding-bottom': '3rem',
				'transition': '0.7s'
			})

}, 
		function(){
			$(this).css({
				'display': 'block',
				'background-color': 'rgba(255, 255, 255, 0.11)',
				'-webkit-transform': 'scale(1)',
				 '-moz-transform': 'scale(1)',
				  '-ms-transform': 'scale(1)',
				  '-o-transform': 'scale(1)',
				  'transform': 'scale(1)',    
					
			})

		}) 
	$('.btn-buy button').hover(function(){
			$(this).css({
				'background-color': 'black',
				'transition': '0.5s',
				

			})	


		},

		function(){
			$(this).css({
				'background-color': 'rgba(255, 255, 255, 0.15)',
				

			})	
		})

	$('.btn-violet').hover(function(){
			$(this).css({
				'background-color': 'black',
				'transition': '0.5s',
				

			})	


		},

		function(){
			$(this).css({
				'background-color': '#8d81ac',			

			})	
		})


	$('.quit').click(function(){
		$('.container-form').toggleClass('disappear');
		$('section').toggleClass('blur');
		$('.quit').toggleClass('disappear');

	})
			
	$('.btn-buy').click(function(){
		$('.container-form').toggleClass('disappear');
		$('section').toggleClass('blur');
		$('.quit').toggleClass('disappear');
		

	})
	$('.btn-violet').click(function(){
		$('.container-form').toggleClass('disappear');
		$('section').toggleClass('blur');
		$('.quit').toggleClass('disappear');
		

	})
	$('.btn-submit').click(function(){
		alert("Thank you !");
	})
	$('.btn-nothing').click(function(){
		alert("This button does nothing!");
	})
	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function showDivs(n) {
	  var i;
	  var x = document.getElementsByClassName("one-slide");
	  if (n > x.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0; i < x.length; i++) {
	     x[i].style.display = "none";  
	  }
	  x[slideIndex-1].style.display = "block";  
	}
	$('.plus').click(function(){
		plusDivs(1);
	})
	$('.minus').click(function(){
		plusDivs(-1);
	})

	



})


	y = 0
	function scrollPen() {
	if($(window).scrollTop() <= 120){
		 document.getElementById("move").style.transform = "rotate(0deg)"
	}else{
		 y += 1;
	    if(y>13){
	    	y=-7;
	    }
	    document.getElementById("move").style.transform = "rotate("+(-y)+"deg)"

	}
   
   
    
}

	$(window).scroll(function() {
    if ($(window).scrollTop() > 120) {
       $('.navigation').addClass('fixed');
    }
    else {
        $('.navigation').removeClass('fixed');
    }
});

	
	



	
