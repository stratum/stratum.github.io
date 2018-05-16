jQuery(document).ready(function($){
	/*var toplink = $("#top-link-block");

	if(toplink.length) {
        if ( ($(window).height() + 200) < $(document).height() ) {
            $('#top-link-block').removeClass('hidden').affix({
                // how far to scroll down before link "slides" into view
                offset: {top:900}
            });
        }
    }*/

    /*
    $('.about-link > a').on('click', function(e){
    	e.preventDefault();
    	window.location.hash='#about';
    	window.location.href  = 'https://stratumproject.org/#about';
    });
     $('.usecases-link > a').on('click', function(e){
    	e.preventDefault();
    	window.location.hash='#use-cases';
    	window.location.href  = 'https://stratumproject.org/#use-cases';
    });
     $('.community-link > a').on('click', function(e){
    	e.preventDefault();
    	window.location.hash='#community';
    	window.location.href  = 'https://stratumproject.org/#community';
    });
     $('.news-link > a').on('click', function(e){
    	e.preventDefault();
    	window.location.hash='#news';
    	window.location.href  = 'https://stratumproject.org/#news';
    });
     $('.join-link > a').on('click', function(e){
    	e.preventDefault();
    	window.location.hash='#join';
    	window.location.href  = 'https://stratumproject.org/#join';
    });
    */
    $("#click").on('hover', function () {
	    if($("#click").hasClass('hide_menu')) {
	        $("#click").removeClass('hide_menu').addClass('show_menu');
	        $("#click").find('img').attr('src', '/wp-content/themes/stratum/img/onf_menu_open.png');
			$("#page-content #content").css('margin-top', '0px');
			$("#overlay").show();
	    } else {
	        $("#click").removeClass('show_menu').addClass('hide_menu');
	        $("#click").find('img').attr('src', '/wp-content/themes/stratum/img/onf_menu_close.png');
			$("#overlay").hide();
			$("#page-content #content").css('margin-top', '105px');
	    }
	});
});