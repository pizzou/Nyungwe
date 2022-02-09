$(function(){
	var mv = $('#mv');
	if(mv.length > 0){

		mv.slick({
			speed:2500,
			autoplaySpeed: 5000,
			infinite: true,
			//autoplay: true,
			pauseOnHover:false,
			arrows: false,
			dots: true,
		});
	}
	var top_news = $('#top_news');
	if(top_news.length > 0){

		top_news.slick({
			//autoplaySpeed: 3500,
			infinite: true,
			//autoplay: true,
			pauseOnHover:false,
			//arrows: false,
			//dots: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			responsive:[{
				breakpoint: 1410,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					variableWidth: false
				}
			}]
		});
	}
	var about_slide = $('#about_slide');
	if(about_slide.length > 0){

		about_slide.slick({
			//autoplaySpeed: 3500,
			infinite: true,
			//autoplay: true,
			pauseOnHover:false,
			arrows: false,
			dots: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			variableWidth: true,
			responsive:[{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					//variableWidth: false
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			}]
		});
	}
});