// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	// console.log($('html').scrollTop());
	// pindahkan scroll
	// $('html').scrollTop(elemenTujuan.offset().top - 80);
	$("html").animate({
		scrollTop:(elemenTujuan.offset().top - 80)
	}, 1250, 'easeOutQuint');
	// mematikan href
	e.preventDefault();
});

// paralax

// about
// $(window).on('load', function() {
// 	$('.pKiri').addClass('pMuncul');
// 	$('.pKanan').addClass('pMuncul');
// });

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();

	if (wScroll >= 400) {
        $(".navbar").addClass("bg-primary");
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass("navbar-dark");
    } else {
        $(".navbar").removeClass("bg-primary");  
        $(".navbar").removeClass("navbar-dark");  
        $(".navbar").addClass("navbar-light");
    }

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/5 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
	});

	// about
	if (wScroll > $('.about').offset().top - 300 ) {
		$('.pKiri').addClass('pMuncul');
		$('.pKanan').addClass('pMuncul');
	}

	// portfolio
	if (wScroll > $('.portfolio').offset().top - 250 ) {
		$('.img-thumbnail').each(function(i) {
			setTimeout(function() {
				$('.img-thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});