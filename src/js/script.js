$(document).ready(function(){
	
	//Tabs
	$('.header__add-dots').on('click', '.header__add-dot:not(.header__add-dot_active)', function() {
		console.log($(this).index());
		$(this)
		.addClass('header__add-dot_active').siblings().removeClass('header__add-dot_active')
		.closest('header').css(
			"background:", `url('../img/background${$(this).index()}.jpg') no-repeat`
		);

		// find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	
	var acc = document.getElementsByClassName("catalog__accordion");
 
	var i;

	for (i = 0; i < acc.length; i++) {

		acc[i].addEventListener("click", function() {

			this.classList.toggle("active");
			this.classList.toggle("borders");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight){
			panel.style.maxHeight = null;
			} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
 

	$(function() {
		$('.pageup').click(function() {
		  $("html, body").animate({
			scrollTop:0
		  },1000);
		});
	});

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$('.nav__menu_toggle').slideToggle();
		return false;
	});
	$(".nav__menu-item_toggle").click(function() {
		$(".toggle-mnu").toggleClass("on");
		$('.nav__menu_toggle').slideToggle();
	});

  let line = document.querySelectorAll('.steps__line');
  let stepItem = document.querySelectorAll('.steps__item');
  for(let i = 0; i < line.length; i++) {
    if(i == (line.length-1)) {
      line[i].style.height = '0';
    } else {
      line[i].style.height = stepItem[i].offsetHeight + 'px';
    }
  }

  // $('.steps__line').each(function(i, item){
  //   console.log(item[i]);
  //   item[i].css(
  //     'height', item[i].parent().height()
  //   );
  // });

});


var slider1 = '.p-slider__list';
    $(slider1).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        cssEase: 'ease',
        useCSS: true,
        edgeFriction: 0.15,
        centerPadding: '0px',
        prevArrow:'.p-slider__prev',
        nextArrow:'.p-slider__next',
        responsive: [
            {
            breakpoint: 414,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
			  arrows: false,
            }
        }
    ]
      
});


var slider3 = '.quality-slider__list';
    $(slider3).slick({
		slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        variableWidth: true,
        cssEase: 'ease',
        useCSS: true,
        edgeFriction: 0.15,
        centerPadding: '0px',
        prevArrow:'.quality-slider__prev',
        nextArrow:'.quality-slider__next',
        edgeFriction: 0.15,
        centerPadding: '0px',
        dots: false,
        responsive: [
            {
            breakpoint: 414,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
        }
    ]
      
});