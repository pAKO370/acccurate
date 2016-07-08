(function(){
	var $about = "<div class='black'><span class='ion-close-round'></span><h1>Company History</h1><p>Accurate C.N.C. Machining Inc was started in 1993 by Richard Fluegel. The shop started out in a small building in Beloit, Wi. It was operated by Richard at night after he completed his job as a machinist at another location. Slowly he got more business as he made his mark in the machining industry. He soon had to buy more equipment and hire more employees to get the work done accurately and in a timely manner. Today the shop is in a 16,000 square foot building, operating two shifts and is still run by Richard and his son Dan.</p><h1>Quality Policy</h1><p>The team of Accurate C.N.C. Machining, Inc. is dedicated to developing long and successful relationships with our customers through continuously providing products that exceed their expectations. Our goal of exceeding customer satisfaction will be accomplished by continually improving the effectiveness of our Quality Management System.</p><h1>Quality Objectives</h1><p>Our quality objectives are 95% on-time delivery and less than 3% scrap rate. In 2014, we averaged 97% on-time delivery and less than .3% scrap.</p></div>";
		
	var $machine = "<div class='black'><span class='ion-close-round'></span><h1>MACHINE LIST</h1><table><tr><th>Make/Model</th><th>Max OD</th><th>Max Length</th></tr><tr><td>Mazak Quick Turn 15N</td><td>12'</td><td>16'</td></tr><tr><td>Mazak Super Quick 10</td><td>8'</td><td>16'</td></tr><tr><td>Mazak Quick Turn 15N II</td><td>12'</td><td>16'</td></tr><tr><td>Mazak Quick Turn 15</td><td>12'</td><td>16'</td></tr><tr><td>Mazak Quick Turn 250HP</td><td>14'</td><td>16'</td></tr><tr><td>Mazak Quick Turn 18</td><td>14'</td><td>16'</td></tr><tr><td>Mazak Slant Turn 35N</td><td>18'</td><td>36'</td></tr><tr><td>Mazak Quick Turn 250</td><td>14'</td><td>16'</td></tr><tr><td>Mazak Super Quick Turn 15</td><td>12'</td><td>16'</td></tr><tr><td>Mazak Quick Turn 25</td><td>14'</td><td>16''</td></tr></table></div>";
		
	function addBlackBox(link, className, blackVar){
		$(link).click(function(){
			$(className).addClass('opacity');
			$(className).append(blackVar)
		})
	}
	addBlackBox('.about', '.black-box',$about);
	addBlackBox('.machine','.black-box',$machine);
	
		/*$('.about').click(function(){
			$('.black-box').addClass('opacity');
			//$('.black-box').append($about);
		});*/
	$('.black-box').click(function(){
		$('.black').remove();
		$('.black-box').removeClass('opacity');
	})
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