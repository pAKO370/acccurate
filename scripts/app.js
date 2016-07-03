(function(){
	var windowHeight = $(window).height();
	//console.log('window height: ' + windowHeight);
	
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		var newNum =  (wScroll - windowHeight) + 200;
		
		var newerNum = ($('.after-pics').offset().top - windowHeight);
		if((wScroll > $('.after-pics').offset().top - windowHeight) - 300){
		
			var topOffset = (400 + (newerNum- wScroll));
			if(topOffset > 0){
			$('.after-pics').css({'top': (topOffset / 4) + "px"})
			}
		}
		if(wScroll > 200){
				$('.info-tag').css({'display': 'block'});
				$('.image-box img').each(function(i){
			setTimeout(function(){
				$('.image-box img').eq(i).addClass('is-showing')
			},300 * (i + 1))
		});
		}
		
		
		console.log(wScroll);
		if(wScroll < 990){
			$('.main-h1').css({'top': (wScroll /2) + 'px'});
		}
	});

	$('.ion-android-arrow-dropdown-circle').click(function(){
		
		$('html, body').animate({
    	scrollTop: ($('.image-container').first().offset().top)
		},500);
		
	})
	
	
	
})();