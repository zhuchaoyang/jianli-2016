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

/*货物放大图片 选择*/
// console.log($(".goods_pic_xz>li>a").length)
	for (var j=0;j<$(".goods_pic_xz>li>a").length;j++){
		$(".goods_pic_xz>li>a")[j].index=j;
		$(".goods_pic_xz>li>a").eq(j).click(function(event){
			event.preventDefault();
			for (var j=0;j<$(".goods_pic_xz>li>a").length;j++){
				$(".goods_pic_xz>li>a").css("border","0px solid red");
			}
			$(".goods_pic_xz>li>a").eq(this.index).css("border","1px solid red");
			$(".goods_small1 img,.goods_big1,.goods_max img").attr("src","img/goods_detail/goods_detail_S7 "+(this.index+1)+".jpg")
			goods_max_img_num=this.index+1;

		})
	}

/*货物放大镜*/
	var goods_x=null; 
	var goods_y=null; 
	$(".goods_small").mouseover(function(){
		$(".goods_focus,.goods_big").css("display","block")
	})
	$(".goods_small").mouseout(function(){
		$(".goods_focus,.goods_big").css("display","none")
	})
	$(".goods_small").mousemove(function(event){
		goods_x=event.pageX-$(".goods_small").offset().left;
		goods_y=event.pageY-$(".goods_small").offset().top;
		if (goods_x>=100&&goods_x<=400) {
			$(".goods_focus").css("left",goods_x-100+"px");
			$(".goods_big1").css("left",-(goods_x-100)*2+"px");
		}
		if (goods_y>=100&&goods_y<=400) {
			$(".goods_focus").css("top",goods_y-100+"px");
			$(".goods_big1").css("top",-(goods_y-100)*2+"px");
		}
	})

/*货物放大弹出详图*/
	
	/*货物放大弹出详图 空格换图片 esc消失*/
	var goods_max_img_num=null;
	function goods_max_space(){
		$(document).keydown(function(event){
			var jianma=event.keyCode;
			// console.log(jianma)
			if (jianma==32) {
				event.preventDefault();
				if (goods_max_img_num<=4){
					goods_max_img_num++;
				} else{
					goods_max_img_num=1;
				}
				$(".goods_pic_xz>li>a").css("border","0px solid red");
				$(".goods_pic_xz>li>a").eq(goods_max_img_num-1).css("border","1px solid red");
				$(".goods_small1 img,.goods_big1,.goods_max img").attr("src","img/goods_detail/goods_detail_S7 "+goods_max_img_num+".jpg")
			}
			if (jianma==27) {
				$(".yemian,.goods_max,.i_want_pj_hide").hide(); 
				$(document).unbind("keydown");
			}

		})
	}
	// goods_max_space_timer=setTimeout(goods_max_space(),10)
	function goods_max() {
		$(".goods_max").css({width:parseInt($(window).width())-40+"px",height:parseInt($(window).height())-40+"px"})
		if (parseInt($(".goods_max").width())>=parseInt($(".goods_max").height())) {
			$(".goods_max").css({width:parseInt($(window).height())-40+"px",height:parseInt($(window).height())-40+"px"})
			$(".goods_max").css({left:($(window).width()-$(".goods_max").width())/2+"px",top:"20px"})
		} else {
			$(".goods_max").css({width:parseInt($(window).width())-40+"px",height:parseInt($(window).width())-40+"px"})
			$(".goods_max").css({left:"20px",top:($(window).height()-$(".goods_max").height())/2+"px"})
		}
		goods_max_space();

	}

	$(".goods_small").click(function(){
		$(".goods_max,.yemian").show();
		$(".yemian").css("background-color","rgba(0, 0, 0,0.3)");
		goods_max();
	})
	$(window).resize(function(){
		goods_max();
		$(".goods_max img").css({width:$(".goods_max").width()+"px",height:$(".goods_max").height()+"px",left:"0px",top:"0px"})
	})

/*货物放大弹出详图 离开效果*/	
	$(".goods_max").click(function(event){
		$(document).unbind("keydown")
		// $(".yemian").unbind("click");
		event.stopPropagation();
		$(".goods_max img").css({width:$(".goods_max").width()+"px",height:$(".goods_max").height()+"px",left:"0px",top:"0px"})
		// $(".goods_max img").stop().animate({width:$(".goods_max").width()+"px",height:$(".goods_max").height()+"px"},10,function(){

		// });
		$(".yemian").css({"background-color":"rgba(0, 0, 0,0)","transition":"all 0.4s linear"})
		$(".goods_max").stop().animate({width:parseInt($(".goods_max").width())+20+"px",height:parseInt($(".goods_max").height())+20+"px"},200,function(){
			$(".goods_max").delay(200).animate({width:"0px",height:"0px"},400,function(){
				$(".yemian").css("display","none");
			});
		})
		
	})
	$(".yemian").click(function(){
		$(document).unbind("keydown")
		$(".yemian,.goods_max,.i_want_pj_hide").hide();
	})

/*货物弹出图 进一步放大*/
	$(".goods_max").mouseover(function(){
		$(".goods_max img").css({width:parseInt($(".goods_max").width())*4+"px",height:parseInt($(".goods_max").height())*4+"px"})
	})
	$(".goods_max").mouseout(function(){
		$(".goods_max img").css({width:$(".goods_max").width()+"px",height:$(".goods_max").height()+"px",left:"0px",top:"0px"})
	})
	$(".goods_max").mousemove(function(event){
		goods_max_x=event.pageX-$(".goods_max").offset().left;
		goods_max_y=event.pageY-$(".goods_max").offset().top;
		if (goods_max_x>=parseInt($(".goods_max_focus").width())/2&&goods_max_x<=(parseInt($(".goods_max").width())-parseInt($(".goods_max_focus").width())/2)) {
			$(".goods_max_focus").css("left",goods_max_x-parseInt($(".goods_max_focus").width())/2+"px");
			$(".goods_max img").css("left",-(goods_max_x-parseInt($(".goods_max_focus").width())/2)*4+"px");
		}
		if (goods_max_y>=parseInt($(".goods_max_focus").height())/2&&goods_max_y<=(parseInt($(".goods_max").height())-parseInt($(".goods_max_focus").height())/2)) {
			$(".goods_max_focus").css("top",goods_max_y-parseInt($(".goods_max_focus").height())/2+"px");
			$(".goods_max img").css("top",-(goods_max_y-parseInt($(".goods_max_focus").height())/2)*4+"px");
		}
	})



/*货物价格盒子会员盒子隐藏与消失*/
	var membership_hide_timer1=null;
	var membership_hide_timer2=null;
	$(".membership,.membership_hide").mouseover(function(){
		clearTimeout(membership_hide_timer1);
		clearTimeout(membership_hide_timer2);
		membership_hide_timer1=setTimeout(function(){
			$(".membership_hide").css("display","block")
		},200)
	})
	$(".membership,.membership_hide").mouseout(function(){
		clearTimeout(membership_hide_timer1);
		clearTimeout(membership_hide_timer2);
		membership_hide_timer1=setTimeout(function(){
			$(".membership_hide").css("display","none")
		},200)
	})
/*货物加减*/

/*改变颜色自动变换价钱、样式等*/
	var goods_price_array=[5450,5450,5580,5580];
	var goods_num_now=null;
	for (var i=0;i<$(".goods_color_item").length;i++) {
		$(".goods_color_item")[i].index=i;
		$(".goods_color_item").click(function(){
			for (var i=0;i<$(".goods_color_item").length;i++) {
				$(".goods_color_item").removeClass("goods_selected_active")
			}
			$(".goods_color_item").eq(this.index).addClass("goods_selected_active")
			$(".goods_price").html("￥"+parseInt(goods_price_array[this.index])*parseInt($(".goods_num").val())+"元");
		})
	}
/*禁止输入非数字*/	
	var goods_num_reg=new RegExp(/^[0-9]*$/);
	$(".goods_num").keyup(function(){
		if (goods_num_reg.test($(".goods_num").val())==false) {
			alert("请输入正确的购买数量");
			$(".goods_num").val(1);


			if ($(".goods_color_item").eq(0).hasClass("goods_selected_active")||$(".goods_color_item").eq(1).hasClass("goods_selected_active")) {
				$(".goods_price").html("￥"+5450+"元");
			} else {
				$(".goods_price").html("￥"+5580+"元");
			}
		} else {	
			if ($(".goods_color_item").eq(0).hasClass("goods_selected_active")||$(".goods_color_item").eq(1).hasClass("goods_selected_active")) {
				$(".goods_price").html("￥"+parseInt(5450)*parseInt($(".goods_num").val())+"元");
			} else {
				$(".goods_price").html("￥"+parseInt(5580)*parseInt($(".goods_num").val())+"元");
			}
		}
	})
/*数量减少*/
	$(".goods_num_jian").click(function(){
		var jian=parseInt($(".goods_num").val()-1);
		$(".goods_num").val(jian);
		if (jian<=0) {
			alert("你至少得购买一件商品");
			$(".goods_num").val(1);
			$(".goods_price").html($(".goods_price").html());
		} else if (jian>0) {
			if ($(".goods_color_item").eq(0).hasClass("goods_selected_active")||$(".goods_color_item").eq(1).hasClass("goods_selected_active")) {
				$(".goods_price").html("￥"+parseInt(5450)*parseInt($(".goods_num").val())+"元");
			} else {
				$(".goods_price").html("￥"+parseInt(5580)*parseInt($(".goods_num").val())+"元");
			}
		}
	})
/*数量增加*/
	$(".goods_num_jia").click(function(){
		var jia=parseInt($(".goods_num").val())+1;
		$(".goods_num").val(jia);
		if (jia<=0) {
			alert("你至少得购买一件商品");
			$(".goods_num").val(1);
			$(".goods_price").html($(".goods_price").html());
		} else if(jia>0){
			if ($(".goods_color_item").eq(0).hasClass("goods_selected_active")||$(".goods_color_item").eq(1).hasClass("goods_selected_active")) {
				$(".goods_price").html("￥"+parseInt(5450)*parseInt($(".goods_num").val())+"元");
			} else {
				$(".goods_price").html("￥"+parseInt(5580)*parseInt($(".goods_num").val())+"元");
			}
		}
	})




/*销量图标变色*/
	$(".goods_xl").mouseover(function(){
		$(".goods_xl img").attr("src","img/shiliang_tubiao/goods_num_over.png");
		$(".goods_xl a").css("color","rgb(255, 103, 0)");
	})
	$(".goods_xl").mouseout(function(){
		$(".goods_xl img").attr("src","img/shiliang_tubiao/goods_num_out.png");
		$(".goods_xl a").css("color","rgb(117, 117, 117)");
	})
/*评价图标变色*/
	$(".goods_pj").mouseover(function(){
		$(".goods_pj img").attr("src","img/shiliang_tubiao/goods_pingjia_over.png");
		$(".goods_pj a").css("color","rgb(255, 103, 0)");
	})
	$(".goods_pj").mouseout(function(){
		$(".goods_pj img").attr("src","img/shiliang_tubiao/goods_pingjia_out.png");
		$(".goods_pj a").css("color","rgb(117, 117, 117)");
	})
/*满意度图标变色*/
	$(".goods_my").mouseover(function(){
		$(".goods_my img").attr("src","img/shiliang_tubiao/goods_agree_over.png");
		$(".goods_my a").css("color","rgb(255, 103, 0)");
	})
	$(".goods_my").mouseout(function(){
		$(".goods_my img").attr("src","img/shiliang_tubiao/goods_agree_out.png");
		$(".goods_my a").css("color","rgb(117, 117, 117)");
	})

/*用户评价框居中弹出*/
	var i_want_pj_hide_x=null;
	var i_want_pj_hide_y=null;

	function i_want_pj_hide_esc(){
		$(document).keydown(function(event){
			var i_want_pj_hide_jianma=event.keyCode;
			// console.log(i_want_pj_hide_jianma)
			if (i_want_pj_hide_jianma==27) {
				$(".yemian,.goods_max,.i_want_pj_hide").hide(); 
				$(".yemian").bind("click",function(){
					$(".yemian,.goods_max,.i_want_pj_hide").hide();
				});
			}
		})
	}
	$(".i_want_pj").click(function(event){
		event.preventDefault();
		$(".yemian").unbind("click");
		$(".i_want_pj_hide,.yemian").show();
		$(".yemian").css("background-color","rgba(0, 0, 0,0.3)");
		// i_want_pj_hide_x=($(document.documentElement)[0].clientWidth-$(".i_want_pj_hide").width())/2;
		i_want_pj_hide_x=($(window).width()-$(".i_want_pj_hide").width())/2;
		i_want_pj_hide_y=($(window).height()-$(".i_want_pj_hide").height())/2;
		$(".i_want_pj_hide").css({left:i_want_pj_hide_x+"px",top:i_want_pj_hide_y+"px"})
		i_want_pj_hide_esc();
	})

/*用户评价框跟随窗口、滚动条改变*/

	$(window).resize(function(){
		i_want_pj_hide_xx=($(window).width()-$(".i_want_pj_hide").width())/2;
		i_want_pj_hide_yy=($(window).height()-$(".i_want_pj_hide").height())/2;
		$(".i_want_pj_hide").css({left:i_want_pj_hide_xx+"px",top:i_want_pj_hide_yy+"px"})
		i_want_pj_hide_esc();
	})
/*用户评价框叉叉 变色*/
	$(".com_user_off").hover(function(){
		$(".com_user_off>img").attr("src","img/shiliang_tubiao/chacha_over.png")
	},function(){
		$(".com_user_off>img").attr("src","img/shiliang_tubiao/chacha_out.png")
	})
/*点击叉叉 关闭用户评价框*/
	$(".com_user_off").click(function(){
		$(".i_want_pj_hide,.yemian").hide();
		$(".yemian").bind("click",function(){
			$(".yemian,.goods_max,.i_want_pj_hide").hide();
		});
	})

	// window.onresize=function() {
	// // document.documentElement.onresize=function() {
	// // document.body.onresize=function() {
	// 	i_want_pj_hide_xx=($(window).width()-$(".i_want_pj_hide").width())/2;
	// 	i_want_pj_hide_yy=($(window).height()-$(".i_want_pj_hide").height())/2;
	// 	$(".i_want_pj_hide").css({left:i_want_pj_hide_xx+"px",top:i_want_pj_hide_yy+"px"})
	// }

/*弹出货物详细nav 页面固定框*/
	$(window).scroll(function(){
		if ($(document).scrollTop()>=1230) {
			$(".goods_detail_fix").stop().animate({top:"0px"},400);
		} else {
			$(".goods_detail_fix").stop().animate({top:"-80px"},400);
		}
	})
/*同一页面跳转货物tab*/	
	$(".detail_list").mouseover(function(){
		$(this).removeClass("detail_list")
		$(this).css("color","rgb(255, 103, 0)");
		$(".detail_list").css("color","rgb(140, 140, 140)");
	})
	$(".detail_list").mouseout(function(){
		$(this).addClass("detail_list");
	})


	$(".detail_list_xq").click(function(){
		$("html,body").stop().animate({scrollTop:"1150px"},200)
			$(".detail_list_xq").css("color","rgb(255, 103, 0)");
			$(".detail_list_cs,.detail_list_pj").css("color","rgb(140, 140, 140)");		
	})

	$(".detail_list_cs").click(function(){
		$("html,body").stop().animate({scrollTop:"11620px"},200);
			$(".detail_list_cs").css("color","rgb(255, 103, 0)");
			$(".detail_list_xq,.detail_list_pj").css("color","rgb(140, 140, 140)");
	})

	$(".detail_list_pj").click(function(){
		$("html,body").stop().animate({scrollTop:"12100px"},200);
		$(".detail_list_pj").css("color","rgb(255, 103, 0)");
	})	

/*带图评价勾选*/
	// $(".pingjia_daitu").selectstart(function(){
	// 	return false;
	// })
	$(".pingjia_daitu").dblclick(function(event){
		// event.preventDefault();
		$(".pingjia_daitu>div>img").attr("src","img/shiliang_tubiao/fangkuai_over.png")
		$(window).click(function(){
			$(".pingjia_daitu>div>img").attr("src","img/shiliang_tubiao/fangkuai_out.png")
		})
	})
/*评论框正则*/
	var com_user_email_reg=new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
	var com_user_e=$(".com_user_email>input")[0].onkeyup=function (){
		if (com_user_email_reg.test($(".com_user_email>input").val())==false) {
			$(".com_user_email>p").html("电子邮件格式错误");
			return false;
		} else {
			$(".com_user_email>p").html("电子邮件格式正确");
			return true;
		}
	}

	$(".com_user_sub>input").click(function(){
		if (com_user_e()==false) {
			alert("為了你的账号安全，正确填写个人信息");
			return false;
		} else {
			alert("输入正确！");
			return true;
		}
	})

})



