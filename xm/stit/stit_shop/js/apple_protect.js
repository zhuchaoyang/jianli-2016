$(function(){
/*测试卷轴高度*/
	// $(window).click(function(event){
	// 	console.log(event.pageY)
	// })

/*nav_logo解释 出现与消失*/
	$(".header_logo").mouseover(function(){
		setTimeout(function(){
		$(".header_logo_js").css("display","block");
		},500)
	})
	$(".header_logo").mouseout(function(){
		setTimeout(function(){
		$(".header_logo_js").css("display","none");
		},500)
	})

/*左侧商品分类slide出现与消失*/
	var nav_liubai_timer1=null;
	var nav_liubai_timer2=null;
	$(".nav_liubai,.home1_left_slide").mouseover(function(){
		clearTimeout(nav_liubai_timer1);
		clearTimeout(nav_liubai_timer2);
		nav_liubai_timer1=setTimeout(function(){
			$(".home1_container,.home1_left_slide").css("display","block")
		},200)
	})
	$(".nav_liubai,.home1_left_slide").mouseout(function(){
		clearTimeout(nav_liubai_timer1);
		clearTimeout(nav_liubai_timer2);
		nav_liubai_timer2=setTimeout(function(){
			$(".home1_container,.home1_left_slide").css("display","none")
		},200)
	})

/*左侧商品分类slide点选*/
	var home1_rs_timer=null;
	$(".home1_slider>li").mouseover(function(){
		var home1_rs_index=$(this).index();
		$(".home1_rs").eq(home1_rs_index).show().siblings(".home1_rs").hide();
	})


/*类别nav——品牌隐藏部分弹出*/
	var site_category_pp2=1;
	$(".site_p1_more").click(function(){
		if (site_category_pp2==1) {
			$(".site_category_pinpai").stop(false,true).animate({height:"100px","padding":"0 0 20px 0"})
			$(".site_category_pinpai_qh").stop(false,true).animate({height:"80px"})
			$(".site_p1_more").stop(false,true).animate({top:"0px"})
			site_category_pp2=2;
		} else if (site_category_pp2==2) {
			$(".site_category_pinpai").stop(false,true).animate({height:"60px","padding":"20px 0 0 0"})
			$(".site_category_pinpai_qh").stop(false,true).animate({height:"40px"})
			$(".site_p1_more").stop(false,true).animate({top:"20px"})
			site_category_pp2=1;
		}
	})
/*类别nav——品牌点击切换事件*/
	$(".site_category_pinpai_qh li").click(function(){
		// var site_category_pinpai_qh_index=$(this).index();
		$(this).children("a").attr("id","site_p1_active")
		$(this).siblings("li").children("a").attr("id","")
	})
/*类别nav——品牌移入变色，同时保持 从最后一次被单击选中的元素 移除时 它不会发生颜色变化*/
	$(".site_category_pinpai_qh li").hover(function(){
		$(this).children("a").addClass("site_p1_active")
	},function(){
		$(this).children("a").removeClass("site_p1_active")
	})


/*类别nav——价格隐藏部分弹出*/
	var site_category_pp1=1;
	$(".site_p2_more").click(function(){
		if (site_category_pp1==1) {
			$(".site_category_price").stop(false,true).animate({height:"100px"})
			$(".site_category_price_qh").stop(false,true).animate({height:"80px"})
			site_category_pp1=2;
		} else if (site_category_pp1==2) {
			$(".site_category_price").stop(false,true).animate({height:"60px"})
			$(".site_category_price_qh").stop(false,true).animate({height:"40px"})
			site_category_pp1=1;
		}
	})	
/*类别nav——价格点击切换事件*/
	$(".site_category_price_qh li").click(function(){
		// var site_category_pinpai_qh_index=$(this).index();
		$(this).children("a").attr("id","site_p2_active")
		$(this).siblings("li").children("a").attr("id","")
	})
/*类别nav——价格移入变色，同时保持 从最后一次被单击选中的元素 移除时 它不会发生颜色变化*/
	$(".site_category_price_qh li").hover(function(){
		$(this).children("a").addClass("site_p2_active")
	},function(){
		$(this).children("a").removeClass("site_p2_active")
	})


/*order_list排序 样式改变*/
	var order_list_num_flag=1;
	var order_list_price_flag=1;
	var order_list_time_flag=1;

/*order_list 销量*/
	$(".order_list_num").click(function(){
		order_list_price_flag=1;
		order_list_time_flag=1;
		if (order_list_num_flag==1) {
			$(".order_list_num").children("img").show();
			$(".order_list_price,.order_list_time").children("img").hide();

			$(".order_list_num").attr("id","order_list_active");
			$(".order_list_price,.order_list_time").attr("id","");
			$(".order_list_num").children("img").attr("src","img/shiliang_tubiao/jiantou_xia_over.png");
			order_list_num_flag=2;
		} else if (order_list_num_flag==2) {
			// $(".order_list_num").attr("id","order_list_active");
			// $(".order_list_price,.order_list_time").attr("id","");
			$(".order_list_num").children("img").attr("src","img/shiliang_tubiao/jiantou_shang_over.png");
			order_list_num_flag=1;
		}

	})
/*order_list 价格*/
	$(".order_list_price").click(function(){
		order_list_num_flag=1;
		order_list_time_flag=1;
		if (order_list_price_flag==1) {
			$(".order_list_price").children("img").show();
			$(".order_list_num,.order_list_time").children("img").hide();

			$(".order_list_price").attr("id","order_list_active");
			$(".order_list_num,.order_list_time").attr("id","");
			$(".order_list_price").children("img").attr("src","img/shiliang_tubiao/jiantou_shang_over.png");
			order_list_price_flag=2;
			price_sort_sheng();
		} else if (order_list_price_flag==2) {
			// $(".order_list_price").attr("id","order_list_active");
			// $(".order_list_num,.order_list_time").attr("id","");
			$(".order_list_price").children("img").attr("src","img/shiliang_tubiao/jiantou_xia_over.png");
			order_list_price_flag=1;
			price_sort_jiang();
		}

	})

/*order_list 上架时间*/
	$(".order_list_time").click(function(){
		order_list_num_flag=1;
		order_list_price_flag=1;
		if (order_list_time_flag==1) {
			$(".order_list_time").children("img").show();
			$(".order_list_num,.order_list_price").children("img").hide();

			$(".order_list_time").attr("id","order_list_active");
			$(".order_list_num,.order_list_price").attr("id","");
			$(".order_list_time").children("img").attr("src","img/shiliang_tubiao/jiantou_xia_over.png");
			order_list_time_flag=2;
		} else if (order_list_time_flag==2) {
			// $(".order_list_time").attr("id","order_list_active");
			// $(".order_list_num,.order_list_price").attr("id","");
			$(".order_list_time").children("img").attr("src","img/shiliang_tubiao/jiantou_shang_over.png");
			order_list_time_flag=1;
		}

	})
	

/*type_list 显示方式*/

/*横排显示*/
	$(".type_h").click(function(){
		$(".type_h").children("img").attr("src","img/shiliang_tubiao/type_hengpai_over.png");
		$(".type_f").children("img").attr("src","img/shiliang_tubiao/type_fangge_out.png");
		$(".type_w").children("img").attr("src","img/shiliang_tubiao/type_pic_out.png");
		$(".goods_type_h").show().siblings("div").hide();
	})
/*方格显示*/
	$(".type_f").click(function(){
		$(".type_f").children("img").attr("src","img/shiliang_tubiao/type_fangge_over.png");
		$(".type_h").children("img").attr("src","img/shiliang_tubiao/type_hengpai_out.png");
		$(".type_w").children("img").attr("src","img/shiliang_tubiao/type_pic_out.png");	 
		$(".goods_type_f").show().siblings("div").hide();
	})
/*无图显示*/
	$(".type_w").click(function(){
		$(".type_w").children("img").attr("src","img/shiliang_tubiao/type_pic_over.png");
		$(".type_h").children("img").attr("src","img/shiliang_tubiao/type_hengpai_out.png");
		$(".type_f").children("img").attr("src","img/shiliang_tubiao/type_fangge_out.png");	
		$(".goods_type_w").show().siblings("div").hide(); 
	})





/*goods_item_h  移入 移出 效果*/
	$(".goods_item_h").hover(function(){
		$(this).addClass("goods_item_h_active");
		$(this).find(".btn_like_h").stop(false,true).fadeIn(500);
	},function(){
		$(this).removeClass("goods_item_h_active");
		$(this).find(".btn_like_h").stop(false,true).fadeOut(500);
	})
	
/*goods_item_f  移入 移出 效果*/
	$(".goods_item_f").hover(function(){
		$(this).addClass("goods_item_f_active");
		$(this).children(".goods_f_actions").stop(false,true).fadeIn(500);
	},function(){
		$(this).removeClass("goods_item_f_active");
		$(this).children(".goods_f_actions").stop(false,true).fadeOut(500);
	})
	
	$(".btn_like").hover(function(){
		$(".btn_like").children("span").stop(false,true).fadeIn(500);
	},function(){
		$(".btn_like").children("span").stop(false,true).fadeOut(500);
	})

	$(".btn_buy").hover(function(){
		$(".btn_buy").children("span").stop(false,true).fadeIn(500);
	},function(){
		$(".btn_buy").children("span").stop(false,true).fadeOut(500);
	})


/*货物价格升序*/
	function price_sort_sheng(){
	//建立2个数组，并把货物价格添加进去
		var price_array_jiu=new Array();
		var price_array_xin=new Array();
		for (var i=0;i<$(".price:visible").length;i++ ) {
			price_array_jiu[i]=$(".price:visible").eq(i).html();
			price_array_xin[i]=$(".price:visible").eq(i).html();
		}
	//对老数组进行排序，使其成为新数组
		price_array_xin.sort(
			function (a,b) {
				return a-b;
			}
		)
	//在老数组中依次搜索新数组每一项的索引值，并把该值赋予价格索引数组中
		var price_index=new Array();
		for (var i=0;i<$(".price:visible").length;i++ ) {
			price_index[i]=price_array_jiu.indexOf(price_array_xin[i])
		}
	//按价格索引数组的顺序，依次把每一项 替换价格盒子的索引，并克隆一份，添加至最后
		for (var i=0;i<$(".price:visible").length;i++ ) {
			var price_clone=$(".sort:visible").children("div").eq(price_index[i]).clone(true)
			$(".sort:visible").children("div").parent().append(price_clone);
		}
	//删除原来所有的价格盒子
		for (var i=0;i<price_index.length;i++) {
			$(".sort:visible").children("div").eq(0).remove();
		}
	}
	
/*货物价格降序*/
	function price_sort_jiang(){
	//建立2个数组，并把货物价格添加进去
		var price_array_jiu=new Array();
		var price_array_xin=new Array();
		for (var i=0;i<$(".price:visible").length;i++ ) {
			price_array_jiu[i]=$(".price:visible").eq(i).html();
			price_array_xin[i]=$(".price:visible").eq(i).html();
		}
	//对老数组进行排序，使其成为新数组
		price_array_xin.sort(
			function (a,b) {
				return b-a;
			}
		)
	//在老数组中依次搜索新数组每一项的索引值，并把该值赋予价格索引数组中
		var price_index=new Array();
		for (var i=0;i<$(".price:visible").length;i++ ) {
			price_index[i]=price_array_jiu.indexOf(price_array_xin[i])
		}
	//按价格索引数组的顺序，依次把每一项 替换价格盒子的索引，并克隆一份，添加至最后
		for (var i=0;i<$(".price:visible").length;i++ ) {
			var price_clone=$(".sort:visible").children("div").eq(price_index[i]).clone(true)
			$(".sort:visible").children("div").parent().append(price_clone);
		}
	//删除原来所有的价格盒子
		for (var i=0;i<price_index.length;i++) {
			$(".sort:visible").children("div").eq(0).remove();
		}
	}




})



