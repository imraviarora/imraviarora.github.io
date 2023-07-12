/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
 $(document).ready(function(){
 $('#toggle-switcher').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'left':'-220px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'left':'0'});
		}
	});
});

/* Read more function*/
$(document).ready(function() {
	$('.read-more').click(function(e) {
	  e.preventDefault();
	  var $extraContent = $(this).closest('.mh-work-item').find('.extra-content');
	  if ($extraContent.is(':visible')) {
		$extraContent.slideUp(500);
		$(this).text('Read More');
	  } else {
		$extraContent.delay(800).slideDown(500);
		$(this).text('Read Less');
	  }
	});
	
	// Hide extra content initially
	$('.extra-content').hide();
  });
  