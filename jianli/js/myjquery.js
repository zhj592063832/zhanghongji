(function($){
	/**第三页技能图标下方**/
	$(".skills-icon").click(function(){
		$(".skills-int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skills-flag-scale");
			}
		});
		if($(this).siblings(".skills-int").is(":hidden")){
			$(this).siblings(".skills-int").slideDown(400);
			$(this).siblings(".skills-flag").addClass("skills-flag-scale");
		}else{
			$(this).siblings(".skills-int").slideUp(200);
			$(this).siblings(".skills-flag").removeClass("skills-flag-scale");
		}
	});

/**图片轮播**/
	var container = $('.ex-container');
            var list = $('.ex-list');
            var buttons = $('.buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var len = 3;
            var interval = 3000;
            var timer;


            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 500, function () {
                    if(left > -200){
                        list.css('left', -1000 * len);
                    }
                    if(left < (-1000 * len)) {
                        list.css('left', -1000);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1000);
                showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(1000);
                showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -1000 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);

            play();
})(jQuery);