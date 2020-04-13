$(function(){

//3D图片 添加 跳转网页 事件
	$(".center_article_item").click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(0).click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(1).click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(2).click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(3).click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(4).click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(5).click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(6).click(function(){window.location.href="#";})
	$(".center_article_item_pic").eq(7).click(function(){window.location.href="#";})







	// alert("frtf");
	$(".center_nav").children("li").click(function(){
		$(this).attr("id","center_item_active").siblings("li").attr("id","")
	})
	$(".center_nav").children("li").mouseover(function(){
		$(this).addClass("center_item_active").siblings("li").removeClass("center_item_active");
		$(this).children("a").children("span").addClass("center_item_pic_active");
		$(this).siblings("li").children("a").children("span").removeClass("center_item_pic_active");
	})
	$(".center_nav").children("li").mouseout(function(){
		$(".center_nav").children("li").removeClass("center_item_active");
		$(".center_nav").children("li").children("a").children("span").removeClass("center_item_pic_active");
	})


//center_slide 下拉菜单弹出
	var screen=$(window).width();
	var center_slide_flag=1;
	$(".center_slide>h2").click(function(){
		// console.log("rr")
		if ( screen<=767&&screen>=300 ) {
			if ( center_slide_flag==1 ) {
				$(".center_slide").stop().animate({"height":"80px"},500);
				$(".center_slide>h2").css("background-image","url(../img/tubiao/shangla.png)");
				$(".center").css({"height":"+=85px"})
				center_slide_flag=2;
			} else if ( center_slide_flag==2 ) {
				$(".center_slide").stop().animate({"height":"35px"},500);
				$(".center_slide>h2").css("background-image","url(../img/tubiao/xiala.png)");
				$(".center").css({"height":"-=85px"})

				center_slide_flag=1;
			}
		} else {

		}
		
	})

})

