$(function(){

/*随机色 变色*/

	function yanse() {
		var array=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
		var color="";
		for (var i=0;i<6;i++) {
			var n=Math.ceil(Math.random()*15);
			color+=array[n];
			if (i==5) {
		    	return "#"+color;
			}
		}
	}
	function bianse() {

		for( var i=0;i<$(".center1_s_top").children("div").length;i++) {
			$(".center1_s_top").children("div").eq(i).css("background",yanse());
			$(".center1_s_bottom").children("div").eq(i).css("background",yanse());
		}
		for( var i=0;i<$(".center1_s_right").children("div").length;i++) {
			$(".center1_s_right").children("div").eq(i).css("background",yanse());
			$(".center1_s_left").children("div").eq(i).css("background",yanse());
		}		


	}
	var bian_color=null;
	bian_color=setInterval(bianse,100);


//top_nav  效果
	$(".nLi").click(function(){
		$(this).attr("id","nLi_active").siblings("li").attr("id","");
	})
	$(".nLi").mouseover(function(){
		$(this).addClass("nLi_active").siblings("li").removeClass("nLi_active");
		// $(this).children(".sub").show().parent().siblings("li").children(".sub").hide();
	})
	$(".top_nav").mouseout(function(){
		$(".nLi").removeClass("nLi_active");
	})

//header 头部 固定效果
	$(function(){
		
		
		$(window).scroll(function(){
			var header_scroll=$(window).scrollTop();
			// console.log(header_scroll);a
			if (header_scroll>=30) {
				$(".header").css({top:"-30px", position:"fixed","z-index":"9999"});
			} else {
				$(".header").css({top:"0px", position:"static","z-index":"0"});
			}
		})
		
	})

//header2 头部 固定效果
	$(function(){
		$(window).scroll(function(){
			var header_scroll=$(window).scrollTop();
			// console.log(header_scroll);a
			if (header_scroll>=30) {
				$(".header_xs").css({top:"-3em", position:"fixed","z-index":"9999"});
			} else {
				$(".header_xs").css({top:"0px", position:"static","z-index":"0"});
			}
		})
		
	})

//返回顶部
	$(".fixed_top").click(function(){
		$("html,body").stop().animate({scrollTop:"0px"},200)
	})

})


