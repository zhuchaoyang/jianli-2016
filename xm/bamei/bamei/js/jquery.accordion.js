/*
* jquery.accordion 0.0.1
* Copyright (c) 2015 lengziyu http://lengziyu.com/
* Date: 2015-10-10
*/
;(function($){
	$.fn.accordion = function(opts){
		//默认值
		var defaults = {
				max: "690px",
				min: "170px",
				speed: "500"
		}

		var opts = $.extend(defaults, opts);

		this.each(function(){
			var t = $(this),
					m = t.children(),
					c = m.children();

			//触发事件
			m.find(".active span").hide();
			m.on("mouseenter","li",function(){
				$(this).addClass('active')
							.animate({width:opts.max},opts.speed)
							.find("span").fadeOut()
							.parent().siblings().removeClass('active')
							.animate({width:opts.min},opts.speed)
							.find("span").show();
			})
		})
	}

})(jQuery);