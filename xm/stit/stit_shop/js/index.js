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
		$(".li_top").css("background",yanse());
		$(".li_right").css("background",yanse());
		$(".li_bottom").css("background",yanse());
		$(".li_left").css("background",yanse());

		for (var i=0;i<$(".li_top").children("div").length;i++) {
			$(".li_top").children("div").eq(i).css({"background-color":yanse()});
			$(".li_right").children("div").eq(i).css({"background-color":yanse()});
			$(".li_bottom").children("div").eq(i).css({"background-color":yanse()});
			$(".li_left").children("div").eq(i).css({"background-color":yanse()});
		}



	}
	var bian_color=null;
	bian_color=setInterval(bianse,100);



	var home1_lb_num=0;
	var home1_lb_timer1=null;
/*轮播图1_轮播*/
	function home1_lb(){
		for (var i=0;i<$(".home1_lb>div").length;i++) {
			$(".home1_lb>div").css("opacity","0");
			$(".home1_lb_btn>input").css("background-color","rgba(177, 177, 177, 1)")
		}
		if (home1_lb_num<4){
			home1_lb_num++;
		} else {
			home1_lb_num=0;
		}
		$(".home1_lb>div").eq(home1_lb_num).css({"opacity":"1","transition":"all 1s linear"})
		$(".home1_lb_btn>input").eq(home1_lb_num).css({"background-color":"red","transition":"all 1s linear"})
	}
	home1_lb_timer1=setInterval(home1_lb,3000)

/*轮播图1_按钮点选*/	
	for (var i=0;i<$(".home1_lb>div").length;i++) {
		$(".home1_lb_btn>input")[i].index=i;
		$(".home1_lb_btn>input").eq(i).mouseover(function(){
			clearInterval(home1_lb_timer1);
			for (var i=0;i<$(".home1_lb>div").length;i++) {
				$(".home1_lb>div").css("opacity","0");
				$(".home1_lb_btn>input").css("background-color","rgba(177,177,177,1)")
			}
			$(".home1_lb>div").eq(this.index).css({"opacity":"1","transition":"all 1s linear"})
			$(".home1_lb_btn>input").eq(this.index).css({"background-color":"red","transition":"all 1s linear"})
			home1_lb_num=this.index;
		})
		$(".home1_lb_btn>input").eq(i).mouseout(function(){
			home1_lb_timer1=setInterval(home1_lb,3000)
		})
	}

/*轮播图1_s上下页切换*/
	/*上页*/
	$(".home1_lb_prev").click(function(){
		clearInterval(home1_lb_timer1);
		for (var i=0;i<$(".home1_lb>div").length;i++) {
			$(".home1_lb>div").css("opacity","0");
			$(".home1_lb_btn>input").css("background-color","rgba(177,177,177,1)")
		}
		if (home1_lb_num>0){
			home1_lb_num--;
		} else {
			home1_lb_num=4;
		}
			$(".home1_lb>div").eq(home1_lb_num).css({"opacity":"1","transition":"all 1s linear"})
			$(".home1_lb_btn>input").eq(home1_lb_num).css({"background-color":"red","transition":"all 1s linear"})
	})
	$(".home1_lb_prev").mouseover(function(){
		clearInterval(home1_lb_timer1);
		$(".home1_lb_prev").css("display","block");
		$(".home1_lb_next").css("display","block");
		$(".home1_lb_prev").css("background-color","rgba(0, 0, 0, 0.5)");
		$(".prev1,.prev2").css("background-color","red");
	})
	$(".home1_lb_prev").mouseout(function(){
		$(".home1_lb_prev").css("background-color","rgba(0, 0, 0, 0)");
		$(".prev1,.prev2").css("background-color","white");
		home1_lb_timer1=setInterval(home1_lb,3000)
	})
	/*下页*/
	$(".home1_lb_next").click(function(){
		clearInterval(home1_lb_timer1);
		for (var i=0;i<$(".home1_lb>div").length;i++) {
			$(".home1_lb>div").css("opacity","0");
			$(".home1_lb_btn>input").css("background-color","rgba(177,177,177,1)")
		}
		if (home1_lb_num<4){
			home1_lb_num++;
		} else {
			home1_lb_num=0;
		}
			$(".home1_lb>div").eq(home1_lb_num).css({"opacity":"1","transition":"all 1s linear"})
			$(".home1_lb_btn>input").eq(home1_lb_num).css({"background-color":"red","transition":"all 1s linear"})
	})
	$(".home1_lb_next").mouseover(function(){
		clearInterval(home1_lb_timer1);
		$(".home1_lb_next").css("display","block");
		$(".home1_lb_prev").css("display","block");
		$(".home1_lb_next").css("background-color","rgba(0, 0, 0, 0.5)");
		$(".next1,.next2").css("background-color","red");
	})
	$(".home1_lb_next").mouseout(function(){
		$(".home1_lb_next").css("background-color","rgba(0, 0, 0, 0)");
		$(".next1,.next2").css("background-color","white");
		home1_lb_timer1=setInterval(home1_lb,3000)
	})

/*移上显示切换按钮*/
	$(".home1_lb").mouseover(function(){
		$(".home1_lb_prev,.home1_lb_next").css("display","block");
	})
	$(".home1_lb").mouseout(function(){
		$(".home1_lb_prev,.home1_lb_next").css("display","none");
	})


/*轮播左侧slide点选*/
	var home1_rs_timer=null;
	for (var i=0;i<$(".home1_slider>li").length;i++) {
		$(".home1_slider>li")[i].index=i;
		$(".home1_slider>li").eq(i).mouseover(function(){
			for(var i=0;i<$(".home1_slider>li").length;i++) {
				$(".home1_rs").css("display","none");
			}
			$(".home1_rs").eq(this.index).css("display","block");
		})
		$(".home1_slider,.home1_rs").mouseover(function(){
			clearTimeout(home1_rs_timer);
			setTimeout(function(){
				$(".home1_rs").eq(i).css("display","block");
			},400)
		})
		$(".home1_slider,.home1_rs").mouseout(function(){
			clearTimeout(home1_rs_timer);
			home1_rs_timer=setTimeout(function(){
				$(".home1_rs").css("display","none");
			},400)
		})
	}


/*home2_la移上效果*/
	$(".home2_la_tb1").mouseover(function(){
		$(".home2_la_tb1>p").css("color","rgb(17, 203, 109)")
		$(".home2_la_tb1>div>img")[0].src="img/shiliang_tubiao/baobei_over.png";
	})
	$(".home2_la_tb1").mouseout(function(){
		$(".home2_la_tb1>p").css("color","white")
		$(".home2_la_tb1>div>img")[0].src="img/shiliang_tubiao/baobei_out.png";
	})

	$(".home2_la_tb3").mouseover(function(){
		$(".home2_la_tb3>p").css("color","rgb(17, 203, 109)")
		$(".home2_la_tb3>div>img")[0].src="img/shiliang_tubiao/search_over.png";
	})
	$(".home2_la_tb3").mouseout(function(){
		$(".home2_la_tb3>p").css("color","white")
		$(".home2_la_tb3>div>img")[0].src="img/shiliang_tubiao/search_out.png";
	})

	$(".home2_la_tb4").mouseover(function(){
		$(".home2_la_tb4>p").css("color","rgb(17, 203, 109)")
		$(".home2_la_tb4>div>img")[0].src="img/shiliang_tubiao/xunhuan_over.png";
	})
	$(".home2_la_tb4").mouseout(function(){
		$(".home2_la_tb4>p").css("color","white")
		$(".home2_la_tb4>div>img")[0].src="img/shiliang_tubiao/xunhuan_out.png";
	})
	$(".home2_la_tb6").mouseover(function(){
		$(".home2_la_tb6>p").css("color","rgb(17, 203, 109)")
		$(".home2_la_tb6>div>img")[0].src="img/shiliang_tubiao/duobao_over.png";
	})
	$(".home2_la_tb6").mouseout(function(){
		$(".home2_la_tb6>p").css("color","white")
		$(".home2_la_tb6>div>img")[0].src="img/shiliang_tubiao/duobao_out.png";
	})

/*home3平移效果*/
var home3_yd_timer=null;
	$(".home3_bl").mouseover(function(){
		clearInterval(home3_yd_timer);
		$(".home3_bl_1,.home3_bl_2").css("background-color","red");
		$(".home3_bl").click(function(){
			$(".home3_bl_1,.home3_bl_2").css("background-color","rgb(224, 224, 224)");
			$(".home3_br_1,.home3_br_2").css("background-color","rgb(176, 176, 176)");
			$(".home3_pingyi").stop().animate({left:"0px"},1000)
		})
	})
	$(".home3_br").mouseover(function(){
		$(".home3_br_1,.home3_br_2").css("background-color","red");
		clearInterval(home3_yd_timer);
		$(".home3_br").click(function(){
			$(".home3_bl_1,.home3_bl_2").css("background-color","rgb(176, 176, 176)");
			$(".home3_br_1,.home3_br_2").css("background-color","rgb(224, 224, 224)");
			$(".home3_pingyi").stop().animate({left:"-1226px"},1000)
		})
	})
	$(".home3_bl,.home3_br").mouseout(function(){
		$(".home3_bl_1,.home3_bl_2").css("background-color","");
		$(".home3_br_1,.home3_br_2").css("background-color","");
		home3_yd_timer=setInterval(home3_move,3000);
	})
	$(".home3_pingyi").mouseover(function(){
		clearInterval(home3_yd_timer);
	})
	$(".home3_pingyi").mouseout(function(){
		home3_yd_timer=setInterval(home3_move,3000);
	})

	function home3_move() {
		if ($(".home3_pingyi")[0].style.left=="0px"){
			$(".home3_bl_1,.home3_bl_2").css("background-color","rgb(176, 176, 176)");
			$(".home3_br_1,.home3_br_2").css("background-color","rgb(224, 224, 224)");
			$(".home3_pingyi").stop().animate({left:"-1226px"},400)
		} else{
			$(".home3_bl_1,.home3_bl_2").css("background-color","rgb(224, 224, 224)");
			$(".home3_br_1,.home3_br_2").css("background-color","rgb(176, 176, 176)");
			$(".home3_pingyi").stop().animate({left:"0px"},400)
		}
	}
	home3_yd_timer=setInterval(home3_move,3000)

/*评价卷出*/
	$(".page_f_f").mouseover(function(){
		if ($(this).find("div").hasClass("ppp")) {
			 $(this).find("div").stop().animate({bottom:"0px",opacity:"1"},300)	
		}
	})
	$(".page_f_f").mouseout(function(){
		if ($(this).find("div").hasClass("ppp")) {
			 $(this).find("div").stop().animate({bottom:"-80px",opacity:"0"},300)		
		}
	})	

/*page_f_rr点按切换*/
	for (var j=0;j<$(".page_t_nav_samsung>ul>li>a").length;j++) {
		$(".page_t_nav_samsung>ul>li>a")[j].index=j;
		$(".page_t_nav_samsung>ul>li>a").eq(j).mouseover(function(){
			for (var j=0;j<$(".page_t_nav_samsung>ul>li>a").length;j++) {
				$(".page_t_nav_samsung>ul>li>a").css({"color":"black","transition":"all 0.5s linear"})
				$(".page_t_nav_samsung>ul>li>a>div").css({"width":"0px","transition":"all 0.5s linear",left:"50%"})
				$(".page_f_r_samsung>div").hide();
			}
			$(".page_t_nav_samsung>ul>li>a").eq(this.index).css("color","rgb(255, 103, 0)");
			$(".page_t_nav_samsung>ul>li>a>div").eq(this.index).css({"width":"100%",left:"0px"})
			$(".page_f_r>div").eq(this.index).show();
		})
	}
	for (var j=0;j<$(".page_t_nav_apple>ul>li>a").length;j++) {
		$(".page_t_nav_apple>ul>li>a")[j].index=j;
		$(".page_t_nav_apple>ul>li>a").eq(j).mouseover(function(){
			for (var j=0;j<$(".page_t_nav_apple>ul>li>a").length;j++) {
				$(".page_t_nav_apple>ul>li>a").css({"color":"black","transition":"all 0.5s linear"})
				$(".page_t_nav_apple>ul>li>a>div").css({"width":"0px","transition":"all 0.5s linear",left:"50%"})
				$(".page_f_r_apple>div").hide();
			}
			$(".page_t_nav_apple>ul>li>a").eq(this.index).css("color","rgb(255, 103, 0)");
			$(".page_t_nav_apple>ul>li>a>div").eq(this.index).css({"width":"100%",left:"0px"})
			$(".page_f_r_apple>div").eq(this.index).show();
		})
	}
	for (var j=0;j<$(".page_t_nav_HTC>ul>li>a").length;j++) {
		$(".page_t_nav_HTC>ul>li>a")[j].index=j;
		$(".page_t_nav_HTC>ul>li>a").eq(j).mouseover(function(){
			for (var j=0;j<$(".page_t_nav_HTC>ul>li>a").length;j++) {
				$(".page_t_nav_HTC>ul>li>a").css({"color":"black","transition":"all 0.5s linear"})
				$(".page_t_nav_HTC>ul>li>a>div").css({"width":"0px","transition":"all 0.5s linear",left:"50%"})
				$(".page_f_r_HTC>div").hide();
			}
			$(".page_t_nav_HTC>ul>li>a").eq(this.index).css("color","rgb(255, 103, 0)");
			$(".page_t_nav_HTC>ul>li>a>div").eq(this.index).css({"width":"100%",left:"0px"})
			$(".page_f_r_HTC>div").eq(this.index).show();
		})
	}
	for (var j=0;j<$(".page_t_nav_huawei>ul>li>a").length;j++) {
		$(".page_t_nav_huawei>ul>li>a")[j].index=j;
		$(".page_t_nav_huawei>ul>li>a").eq(j).mouseover(function(){
			for (var j=0;j<$(".page_t_nav_huawei>ul>li>a").length;j++) {
				$(".page_t_nav_huawei>ul>li>a").css({"color":"black","transition":"all 0.5s linear"})
				$(".page_t_nav_huawei>ul>li>a>div").css({"width":"0px","transition":"all 0.5s linear",left:"50%"})
				$(".page_f_r_huawei>div").hide();
			}
			$(".page_t_nav_huawei>ul>li>a").eq(this.index).css("color","rgb(255, 103, 0)");
			$(".page_t_nav_huawei>ul>li>a>div").eq(this.index).css({"width":"100%",left:"0px"})
			$(".page_f_r_huawei>div").eq(this.index).show();
		})
	}
})

