$(document).ready(function(){
	var my_posts = $("[rel=tooltip]");

	var size = $(window).width();
	for(i=0;i<my_posts.length;i++){
		the_post = $(my_posts[i]);

		if(the_post.hasClass('invert') && size >=767 ){
			the_post.tooltip({ placement: 'left'});
			the_post.css("cursor","pointer");
		}else{
			the_post.tooltip({ placement: 'rigth'});
			the_post.css("cursor","pointer");
		}
	}

// at the start of the page, the body is hidden
  $(".timeline-body").hide();

//click the footer to display the body
  $(".timeline-footer").click(function(){
    $(this).prev(".timeline-body").slideToggle();
		$(this).children().text( $(this).children().text() == 'show more' ? "show less" : "show more");
  });

});
