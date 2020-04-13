$(function(){

//侧栏tab 换色
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

//轮播
	var num=0;
	var lb_timer1=null; 
	var lb_timer2=null; 
	function lb() {
		for (var i=0;i<$(".lb").children("li").length;i++) {
			$(".lb").children("li").stop().hide();
			$(".title").children("li").stop().hide();
			$(".tab").children("li").css({"border":"none"})
		}
		if ( num<5 ) {
			num++;
		} else if ( num>=5&&num<10 ) {
			num++;
			if ( parseInt($(".tab")[0].style.left)<(-80) ) {
				$(".tab").stop(false,true).animate({left:"-85%"})
			} else {
				$(".tab").stop(false,true).animate({left:"-=17%"})
			}
		} else {
			num=0;
			$(".tab").stop(false,true).animate({left:"0px"})
		}
		$(".lb").children("li").eq(num).stop().fadeIn(1000);
		$(".title").children("li").eq(num).stop().fadeIn(1000);
		$(".tab").children("li").eq(num).css({"border":"1px solid rgb(199, 0, 18)"});
	}
	
	lb_timer1=setInterval(lb,3000);

// 轮播图 停止与暂停	
	$(".rc_lbt,.lb_tab").mouseover(function(){
		clearInterval(lb_timer1);
	})
	$(".rc_lbt,.lb_tab").mouseout(function(){
		clearInterval(lb_timer1);
		lb_timer1=setInterval(lb,3000);
	})

//左右键 切换
//上一页
	$(".prev").click(function(){
		clearInterval(lb_timer1);
		for (var i=0;i<$(".lb").children("li").length;i++) {
			$(".lb").children("li").stop().hide();
			$(".title").children("li").stop().hide();
			$(".tab").children("li").css({"border":"none"})
		}

		if (num>5 ) {
			num--;	
		} else if ( num<=5&&num>0 ) {
			num--;
			if ( parseInt($(".tab")[0].style.left)<0 ) {
				$(".tab").stop(false,true).animate({left:"+=17%"});
				
			} else {
				$(".tab").stop(false,true).animate({left:"0px"});
			}
		} else {
			num=10;
			$(".tab").stop(false,true).animate({left:"-84%"});
		}

		$(".lb").children("li").eq(num).stop().fadeIn(1000);
		$(".title").children("li").eq(num).stop().fadeIn(1000);
		$(".tab").children("li").eq(num).css({"border":"1px solid rgb(199, 0, 18)"})
	})

//下一页
	$(".next").click(function(){
		clearInterval(lb_timer1);
		for (var i=0;i<$(".lb").children("li").length;i++) {
			$(".lb").children("li").stop().hide();
			$(".title").children("li").stop().hide();
			$(".tab").children("li").css({"border":"none"})
		}
		if ( num<5 ) {
			num++;
		} else if ( num>=5&&num<10 ) {
			num++;
			if ( parseInt($(".tab")[0].style.left)<(-80) ) {
				$(".tab").stop(false,true).animate({left:"-85%"})
			} else {
				$(".tab").stop(false,true).animate({left:"-=17%"})
			}
		} else {
			num=0;
			$(".tab").stop(false,true).animate({left:"0px"})
		}
		$(".lb").children("li").eq(num).stop().fadeIn(1000);
		$(".title").children("li").eq(num).stop().fadeIn(1000);
		$(".tab").children("li").eq(num).css({"border":"1px solid rgb(199, 0, 18)"})
	})


//轮播图 tab 切换

	for ( var i=0; i<$(".tab").children("li").length; i++) {
		// clearInterval(lb_timer1);
		$(".tab").children("li")[i].index=i;
		$(".tab").children("li").click(function(){
			clearInterval(lb_timer1);	
			for ( var i=0; i<$(".tab").children("li").length; i++) {
				$(".lb").children("li").stop().hide();
				$(".title").children("li").stop().hide();
				$(".tab").children("li").css({"border":"none"})
			}
			$(".lb").children("li").eq(this.index).stop().fadeIn(1000);
			$(".title").children("li").eq(this.index).stop().fadeIn(1000);
			$(this).css({"border":"1px solid rgb(199, 0, 18)"});

			num=this.index;

			if ( this.index==5 ) {
				if ( parseInt($(".tab")[0].style.left)<(-80) ) {
					$(".tab").stop().animate({left:"0px"});
				} else {
					$(".tab").stop().animate({left:"-85%"})
				}
			} else if (this.index<5) {
				$(".tab").stop(false,true).animate({left:"0px"});
			} else if (this.index>5) {
				$(".tab").stop(false,true).animate({left:"-85%"});
			}
		})
	}


})

