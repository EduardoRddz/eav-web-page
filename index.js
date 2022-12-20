//$(function () {
//  $(document).scroll(function () {
//    var $nav = $(".fixed-top");
//    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//    $("nav").removeClass("bg-primary navbar-dark").addClass("bg-white navbar-primary");
//  });
//});


$(document).scroll(function() {
    var scroll = $(document).scrollTop();
    if (scroll > $("nav").height()) {
      $("nav").removeClass("bg-white navbar-primary").addClass("bg-primary navbar-dark");
      document.getElementById("logo").src = "images/logo-white.png";
      document.getElementById("toggle-bars").style = "color:#fff; font-size:28px;";
    }
    else{
      $("nav").removeClass("bg-primary navbar-dark").addClass("bg-white navbar-primary");
      document.getElementById("logo").src = "images/logo-prueba.png";
      document.getElementById("toggle-bars").style = "color:#007bff; font-size:28px;";
    }
});

$("h2").on("click", function(){
  $("icon").slideDown();
});


$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

		$(this).addClass('transition');
	}, function(){

		$(this).removeClass('transition');
	});
});


$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});



//---------- Dropdown submenu ========================>

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });


  return false;
});
//---------- Dropdown submenu ========================>


//---------- AVION ========================>
