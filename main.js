// $(document).ready(function(){

// 	$('.preload').delay(1000).fadeOut('slow'); 

// 	$('.navigation a').hover(

// 		function(){
// 			$(this).css({
// 				"border-bottom": "1px solid black",
// 				"font-size": "125%",
// 				"-webkit-transition": "0.7s", 
//    				 "transition": "0.7s",
//    				 "color": "black",
// 			})

// }, 
// 		function(){
// 			$(this).css({
// 				"border-bottom": "none",
// 				"font-size": "100%",
// 				"color": "#635c73",	

// 			})

// 		}) 

// 	$('.offer').hover(

// 		function(){
// 			$(this).css({
// 				'width': '22%',
// 				'height': '53rem',
// 				'background-color': 'rgba(0, 0, 0, 0.16)',
// 				'opacity': '0.84',
// 				'display': 'flex',
// 				'flex-direction': 'column',
// 				'justify-content': 'space-between',
// 				'padding-bottom': '3rem',
// 				'transition': '0.7s'
// 			})

// }, 
// 		function(){
// 			$(this).css({
// 				'background-color': 'rgba(255, 255, 255, 0.11)',
// 				'height': '46rem',		
// 			})

// 		}) 

// 	$('.btn-buy button').hover(function(){
// 			$(this).css({
// 				'background-color': 'black',
// 				'transition': '0.5s',
				

// 			})	


// 		},

// 		function(){
// 			$(this).css({
// 				'background-color': 'rgba(255, 255, 255, 0.15)',
				

// 			})	
// 		})

// 	$('.btn-violet').hover(
// 		function(){
// 			$(this).css({
// 				'background-color': '#3a324d',
// 				'transition': '0.5s',
				

// 			})	


// 		},

// 		function(){
// 			$(this).css({
// 				'background-color': '#8d81ac',
				

// 			})	
// 		}
// 		)
// 	$('button').click(function(){
// 		$('.container-form').toggleClass('disappear');
// 		$('section').toggleClass('blur');
		

// 	})
// 	$(window).scroll(function() {
//     if ($(window).scrollTop() > 120) {
//        $('.navigation').addClass('fixed');
//     }
//     else {
//         $('.navigation').removeClass('fixed');
//     }
// });
// 	var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("one-slide");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
// $('.plus').click(function(){
// 	plusDivs(1);
// })
// $('.minus').click(function(){
// 	plusDivs(-1);
// })

// $('.plus img').hover(function(){
// 	  $(this).css({'width': '1.2rem', 'height': '2rem', 'background-color': 'grey'});

// }, function(){
// 	  $(this).css({'width': '0.9rem', 'height': '1.6rem','background-color': 'white'});
// })
// $('.minus img').hover(function(){
// 	  $(this).css({'width': '1.2rem', 'height': '2rem','background-color': 'grey'});

// }, function(){
// 	  $(this).css({'width': '0.9rem', 'height': '1.6rem','background-color': 'white'});
// })

// })
