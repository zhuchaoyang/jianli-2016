$(function(){
//3D图片 添加 跳转网页 事件
	$(".news_pic").click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(0).click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(1).click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(2).click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(3).click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(4).click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(5).click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(6).click(function(){window.location.href="#";})
	$(".center2_item_pic").eq(7).click(function(){window.location.href="#";})


// 定义header_lb  点选按钮 居中
	$(function(){
		var header_lb_xz_left=parseInt( $(".header_lb_slideBox").width()-$(".header_lb_xz").width() )/2;
		$(".header_lb_xz").css({left:header_lb_xz_left+"px"})
	})
//左右键 背景色hover效果
	// $(".header_lb_prev").hover(function(){
	// 	$(this).children("a").css({"background-color":"red"})
	// },function(){
	// 	$(this).children("a").css({"background-color":"white"})
	// })

//new_nav
	// $(".news_nav ul li").mouseover(function(){
	// 	$(this).css({"color":"red"})
	// })
	// $(".news_nav ul li").mouseout(function(){
	// 	$(this).css({"color":"black"})
	// })

	
/*nav_搜索框*/

	$(".search_text").focus(function(event){
		$(".search_text").css("border","1px solid rgb(255, 103, 0)")
		$(".search_btn").css("border","1px solid rgb(255, 103, 0)")
		$(".btn_search1").css("border","3px solid rgb(255, 103, 0)")
		$(".btn_search2").css("background-color","rgb(255, 103, 0)")
		$(".hot_words").css("z-index","-100");
	})
	$(".search_text").blur(function(){
		$(".search_text").val("");
		$(".search_text").css("border","1px solid rgb(224, 224, 224)");
		$(".search_btn").css("border","1px solid rgb(224, 224, 224)");
		$(".btn_search1").css("border","3px solid rgb(97, 97, 97)")
		$(".btn_search2").css("background-color","rgb(97, 97, 97)")
		$(".hot_words").css("z-index","100");
	})

	$(".search_btn").mouseover(function(){
		$(".btn_search1").css("border","3px solid white")
		$(".btn_search2").css("background-color","white")
	})
	$(".search_btn").mouseout(function(){
		$(".btn_search1").css("border","3px solid rgb(97, 97, 97)")
		$(".btn_search2").css("background-color","rgb(97, 97, 97)")
	})

	$(".hot_words").children("a").mouseover(function(){
		$(this).css({"color":"white","background-color":"rgb(255, 103, 0)"})
	})
	$(".hot_words").children("a").mouseout(function(){
		$(this).css({"color":"rgb(117, 117, 117)","background-color":"rgb(238, 238, 238)"})
	})

	$(".search_btn").click(function(){
		if ($(".search_text").val()=="") {
			alert("请输入搜素关键词")
		}
	})

//center1_slider  移上移出效果
	$(".center1_s").eq(0).hover(function(){
		$(".center1_s").eq(0).css({"background-color":"rgb(199, 0, 18)"})
		$(".center1_s").eq(0).children("span").css({color:"rgb(0, 187, 156)","font-weight":"900"})
		$(".center1_s").eq(0).children("img").attr("src","img/tubiao/zulin_over.png");
	},function(){
		$(".center1_s").eq(0).css({"background-color":"rgb(129, 129, 129)"})
		$(".center1_s").eq(0).children("span").css({color:"white","font-weight":"normal"})
		$(".center1_s").eq(0).children("img").attr("src","img/tubiao/zulin_out.png");
	})

	$(".center1_s").eq(1).hover(function(){
		$(".center1_s").eq(1).css({"background-color":"rgb(199, 0, 18)"})
		$(".center1_s").eq(1).children("span").css({color:"rgb(0, 187, 156)","font-weight":"900"})
		$(".center1_s").eq(1).children("img").attr("src","img/tubiao/woshou_over.png");
	},function(){
		$(".center1_s").eq(1).css({"background-color":"rgb(129, 129, 129)"})
		$(".center1_s").eq(1).children("span").css({color:"white","font-weight":"normal"})
		$(".center1_s").eq(1).children("img").attr("src","img/tubiao/woshou_out.png");
	})

	$(".center1_s").eq(2).hover(function(){
		$(".center1_s").eq(2).css({"background-color":"rgb(199, 0, 18)"})
		$(".center1_s").eq(2).children("span").css({color:"rgb(0, 187, 156)","font-weight":"900"})
		$(".center1_s").eq(2).children("img").attr("src","img/tubiao/feiji_over.png");
	},function(){
		$(".center1_s").eq(2).css({"background-color":"rgb(129, 129, 129)"})
		$(".center1_s").eq(2).children("span").css({color:"white","font-weight":"normal"})
		$(".center1_s").eq(2).children("img").attr("src","img/tubiao/feiji_out.png");
	})

	$(".center1_s").eq(3).hover(function(){
		$(".center1_s").eq(3).css({"background-color":"rgb(199, 0, 18)"})
		$(".center1_s").eq(3).children("span").css({color:"rgb(0, 187, 156)","font-weight":"900"})
		$(".center1_s").eq(3).children("img").attr("src","img/tubiao/24hours_over.png");
	},function(){
		$(".center1_s").eq(3).css({"background-color":"rgb(129, 129, 129)"})
		$(".center1_s").eq(3).children("span").css({color:"white","font-weight":"normal"})
		$(".center1_s").eq(3).children("img").attr("src","img/tubiao/24hours_out.png");
	})
	
//微图标 换色
	$(".center1_weitubiao").children("a").eq(0).hover(function(){
		$(".center1_weitubiao").children("a").eq(0).children("img").attr("src","img/tubiao/qq_over.png");
	},function(){
		$(".center1_weitubiao").children("a").eq(0).children("img").attr("src","img/tubiao/qq_out.png");
	})

	$(".center1_weitubiao").children("a").eq(1).hover(function(){
		$(".center1_weitubiao").children("a").eq(1).children("img").attr("src","img/tubiao/bird_over.png");
	},function(){
		$(".center1_weitubiao").children("a").eq(1).children("img").attr("src","img/tubiao/bird_out.png");
	})

	$(".center1_weitubiao").children("a").eq(2).hover(function(){
		$(".center1_weitubiao").children("a").eq(2).children("img").attr("src","img/tubiao/weibo_over.png");
	},function(){
		$(".center1_weitubiao").children("a").eq(2).children("img").attr("src","img/tubiao/weibo_out.png");
	})

	$(".center1_weitubiao").children("a").eq(3).hover(function(){
		$(".center1_weitubiao").children("a").eq(3).children("img").attr("src","img/tubiao/weixin_over.png");
	},function(){
		$(".center1_weitubiao").children("a").eq(3).children("img").attr("src","img/tubiao/weixin_out.png");
	})






})

