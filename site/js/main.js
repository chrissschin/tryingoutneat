$(".container").mouseenter(function(){
	$(this)
		.velocity( { translateY: "-10px", backgroundColor: "#FFEB3B", color: '#fff' }, 400 );
});

$(".container").mouseleave(function(){
	$(this)
		.velocity( { translateY: "10px", backgroundColor: "#fff" , color: '#000'}, 400 );
});

$('.header').mouseenter(function(){
  $(this).addClass('shadow').fadeIn("slow");
});

$('.header').mouseleave(function(){
  $(this).removeClass('shadow');
});



// javascript way
// document.getElementById('main').addEventListener('mouseenter', function(){
//   document.getElementById('main').style.color='blue';
// });
