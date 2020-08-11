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

});


var acc = document.getElementsByClassName("catalog__accordion");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {

	this.classList.toggle("active");
	
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}