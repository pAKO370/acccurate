(function(){
	var windowHeight = $(window).height();
	//console.log('window height: ' + windowHeight);

	$('.sub').click(function(){
		alert('Your message has been sent!');
	})
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
		console.log(wScroll);
		if(wScroll > 200){
			
			
			imageLoader('.info-one', '.cont-one')
			
			/*$('.info-tag').css({'display': 'block'});
				$('.cont-one .image-box img').each(function(i){
			setTimeout(function(){
				$('.cont-one .image-box img').eq(i).addClass('is-showing')
			},300 * (i + 1))
		});*/
		}
		if(wScroll > 500){
			imageLoader('.info-two', '.cont-two')
		}
		if(wScroll > 750){
			imageLoader('.info-three', '.cont-three')
		}
		
		if(wScroll < 990){
			$('.main-h1').css({'margin-top': (wScroll /2) + 'px'});
		}
	});

	$('.ion-android-arrow-dropdown-circle').click(function(){
		
		$('html, body').animate({
    	scrollTop: ($('.second').first().offset().top)
		},500);
		
	})
	
	function imageLoader(infoNum, contNum){
			$( infoNum ).css({'display': 'block'});
				$( contNum + ' .image-box img').each(function(i){
			setTimeout(function(){
				$( contNum +  ' .image-box img').eq(i).addClass('is-showing')
			},300 * (i + 1))
		});
	}
	
})();