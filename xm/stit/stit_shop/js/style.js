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
		$(".btn_re_prev").css("background",yanse())
		$(".btn_re_next").css("background",yanse())
		$(".recommend_text>span").eq(0).css("color",yanse())
		$(".recommend_text>span").eq(1).css("color",yanse())
		$(".recommend_text>span").eq(2).css("color",yanse())
		$(".recommend_text>span").eq(3).css("color",yanse())
	}
	var bian_color=null;
	bian_color=setInterval(bianse,100);

/*购物车延迟出现*/
	var topbar_shopcar=$(".topbar_shopcar")[0];
	var topbar_shophide=$(".topbar_shophide")[0];
	var timer_shopcar=null;
	topbar_shopcar.onmouseover=topbar_shophide.onmouseover=function(){
		clearTimeout(timer_shopcar);
		$(".topbar_shopcar_logo").css("background-image","url(img/shopcar_logo2.png)")
		$(".topbar_shopcar").css("color","red");
		setTimeout(function(){
			$(".topbar_shophide").css("z-index","1000")
			$(".topbar_shophide").slideDown(200);
		},400)
	}
	topbar_shopcar.onmouseout=topbar_shophide.onmouseout=function(){
		clearTimeout(timer_shopcar);
		$(".topbar_shopcar_logo").css("background-image","url(img/shopcar_logo1.png)")
		$(".topbar_shopcar").css("color"," rgb(176, 176, 176)");
		timer_shopcar=setTimeout(function(){

			$(".topbar_shophide").slideUp(200,function(){
				$(".topbar_shophide").css("z-index","0")
			});

		},400)
	}

/*header_nav 下拉弹窗*/
/*有卷起效果*/
	var nav_timer1=null;
	var nav_timer2=null;
		$(".nav_item,.nav_item_tc").mouseenter(function(){
			clearTimeout(nav_timer1);
			clearTimeout(nav_timer2);
			 nav_timer1=setTimeout(function(){
			 	$(".nav_item_tc").stop().slideDown(200);
			 },100)
		/*js获取索引值*/
			// for (var i=0;i<$(".nav_item").length;i++) {
			// 	$(".nav_item")[i].index=i;
			// 	$(".nav_item").eq(i).mouseover(function(){
			// 		for (var i=0;i<$(".nav_item").length;i++) {
			// 			$(".nav_item_tc").css("display","none");
			// 			$(".item_children").eq(i).css("display","none");
			// 		}
			// 		$(".nav_item_tc").css("display","block");
			// 		$(".item_children").eq(this.index).css("display","block");
			// 	})
			// }
		/*jq获取索引值*/	
			$(".nav_item").mouseover(function(){
				var nav_item_index=$(this).index()-1;
				$(".nav_item_tc").stop().slideDown(200);
				$(".item_children").eq(nav_item_index).show().siblings(".item_children").hide();
			})

		})
		$(".nav_item,.nav_item_tc").mouseleave(function(){
			clearTimeout(nav_timer1);
			clearTimeout(nav_timer2);
			nav_timer2=setTimeout(function(){
				$(".nav_item_tc").stop().slideUp(200);
			},100)
			
		})

			// $(".nav_list").mouseover(function(){
			// 	clearTimeout(nav_timer1);
			// 	clearTimeout(nav_timer2);
			// 	// $(".nav_item").mousemove(function(){
			// 		var nav_item_index=$(this).index()-1;
			// 		// console.log(nav_item_index)
			// 		// if (nav_item_index>=0&&nav_item_index<7) {
			// 			$(".nav_item_tc").stop(false,true).slideDown(500);
			// 			// $(".item_children").eq(nav_item_index).slideDown(500);
			// 		// }
			// 		for (var i=0;i<$(".nav_item").length;i++) {
			// 			$(".nav_item_tc").show();
												
			// 			$(".item_children").eq(i).hide();
			// 			$(".item_children").eq(nav_item_index).show();						
			// 		}
			// 	})
			// })


/*无卷起效果*/
	// var nav_timer1=null;
	// var nav_timer2=null;
	// for (var i=0;i<$(".nav_item").length;i++) {
	// 	$(".nav_item")[i].index=i;
	// 	$(".nav_item").eq(i).mouseover(function(){
	// 		for (var i=0;i<$(".nav_item").length;i++) {
	// 			$(".nav_item_tc").css("display","block");
	// 			$(".item_children").eq(i).css("display","none");
	// 		}
	// 		$(".nav_item_tc").css("display","block");
	// 		$(".item_children").eq(this.index).css("display","block");
	// 	})
	// 	$(".nav_list").mouseout(function(){
	// 		$(".nav_item_tc").css("display","none");
	// 	})
	// 	$(".nav_item_tc").mouseover(function(){
	// 		$(".nav_item_tc").css("display","block")
	// 	})
	// 	$(".nav_item_tc").mouseout(function(){
	// 		$(".nav_item_tc").css("display","none")
	// 	})
	// }

/*nav_搜索框*/

	$(".search_text").focus(function(){
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

})


