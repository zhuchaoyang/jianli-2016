
// 头部购物车部分

$(function() {
  var shopup="";
	$(".header_shop").hover(function  () {
		$(".header_shop").css({backgroundPosition:"14px -22px",backgroundColor:"white"});
		$("#header_count").css("color","#eb7322");
    clearTimeout(shopup)
    shopdown=setTimeout(function  () {
      $(".shop_cart").stop(true,true).slideDown(200);
    },100)

	},function  () {@
		$(".header_shop").css({backgroundPosition:"14px 14px",backgroundColor:"#494949"});
		$("#header_count").css("color","#b8b9b9");
    shopup=setTimeout(function  () {
      $(".shop_cart").stop(true,true).slideUp(200);
    },100)
		
	})
});



// 导航部分

$(function  () {

   //导航部分
     var end="";
     $(".nav_li").mouseenter(function  () {
       clearTimeout(end)
     	 $(".ul_phonekind").empty();
         var $lone=$(this).children("ul.nav_li_ul").clone(); 
         $lone.removeClass().attr("id","ul_clone");
         $(".ul_phonekind").append($lone);
       star=setTimeout(function  () {
           $(".ul_phonekind").slideDown(200);
       },210)
     });
     $(".navDiv ul").mouseleave(function  () {
       clearTimeout(star)
      end=setTimeout(function(){
        $(".ul_phonekind").slideUp(200);
      },210)	  
     });
     $("#last_li").mouseenter(function (event) {
       clearTimeout(star)
      end=setTimeout(function  () {
        $(".ul_phonekind").slideUp(200);
      },210)
     	  
     })




	// 导航搜索部分

   $(".search_input1").hover(function  () {
      if($(".search_input1").data("value")==0){
     	  $(".nav_search").css("borderColor","#aeadad")
     	  $(".nav_search input:eq(1)").css("borderColor","#aeadad")
      }
   },function  () { 
     if($(".search_input1").data("value")==0){
   	  $(".nav_search").css("borderColor","#e0e0e0")
   	  $(".nav_search input:eq(1)").css("borderColor","#e0e0e0")
     }
   })

   $(".search_input2").hover(function  () {
       if($(".search_input2").data("value")==0){
          $(this).css({"backgroundColor":"#ff6700","backgroundPosition":"17px -32px"})
       }else{
          $(this).css({"backgroundColor":"#ff6700","backgroundPosition":"17px -32px"})
       }
   },function  () {
       if($(".search_input2").data("value")==0){
           $(this).css({"backgroundColor":"white","backgroundPosition":"17px 16px"})
       }else{
          $(this).css({"backgroundColor":"white","backgroundPosition":"17px -77px"})
       }   
   })


   $(".search_input1").focus(function  () {
      $(".search_input1").data("value","1")
      $(".search_input2").data("value","1")
   	  $(".phone_kind").css("display","none");
      $(".search_input2").css({"borderColor":"#ff6700","backgroundPosition":"17px -77px"})
      $(".nav_search").css("borderColor","#ff6700")
   });
   $(".search_input1").blur(function  () {
    $(".search_input1").data("value","0")
    $(".search_input2").data("value","0")
   	  $(".phone_kind").css("display","block");
   	  $(".search_input2").css({"borderColor":"#e0e0e0","backgroundPosition":"17px 16px"})
      $(".nav_search").css("borderColor","#e0e0e0")
   });	



});


// 轮播图区域
 
$(function  () {
   
  //轮播图
   var now=0;
   var i=$(".picture").children().length-1;
 
 // 下部按钮
  $(".picture_butn li").click(function  () {
     clearInterval(stppt);
      now=$(this).index();
     if($(".picture div").eq(now).attr("class")!=="picture_div1"){
       ppt()
     }
     stppt=setInterval(ppta,6000);
  });

// 左右按钮
  
    //隐藏出现
  $(".show").hover(function  () {
      $(".button_div1").css("display","block")
      $(".button_div2").css("display","block")
  },function  () {
      $(".button_div1").css("display","none")
      $(".button_div2").css("display","none")
  })

  $(".button_div1").click(function  () {
     clearInterval(stppt);
      now=$(".picture_div1").index();
      if(now>0){
        now--;
      }else{
        now=i;
      }
      ppt();
     stppt=setInterval(ppta,6000);
  });

  $(".button_div2").click(function  () {
     clearInterval(stppt);
      now=$(".picture_div1").index();
      if(now<i){
        now++;
      }else{
        now=0;
      }
      ppt();
     stppt=setInterval(ppta,6000);
  });


//自动滚动

function  ppta() {
    if(now<i){
          now++;
    }else{
          now=0
    }
    ppt()
 }

 function ppt() { 
           $(".picture div").eq(now).css("display","block");
           $(".picture_div1").fadeOut(600,function  () {
              $(".picture_div1").attr("class","picture_div2");
              $(".picture div").eq(now).attr("class","picture_div1") 
           })
           $(".picture_butn li").eq(now).attr("class","farst_li")
                                        .siblings()
                                        .attr("class","last_li")
      
   }
   stppt=setInterval(ppta,6000);
   // 暂停/开始轮播图
   $(window).focus(function  () {
    clearInterval(stppt);
     stppt=setInterval(ppta,6000);
   })
    $(window).blur(function  () {
     clearInterval(stppt);
   })


   $(".picture").hover(function  () {
       clearInterval(stppt);
   },function  () {
       stppt=setInterval(ppta,6000);
   })
  


   // 轮播导航区
   $(".show_navUl>li").mouseenter(function  () {

      $(this).children(".showPhone_kind").css("display","block")
             .siblings()
             .children(".showPhone_kind").css("display","none")
   });
   $(".show_navUl>li").mouseleave(function  () {
      $(".showPhone_kind").css("display","none")
   });
})


// 单品展示区  明星单品
$(function  () {
   var lr=true;
   // alert($(".phone_top span").length)
 function aska() {
      if(lr){
        $(".phone_down ul").animate({left:"-1245px"},400);
        $(".phone_span1 span").attr("class","phone_r2")
        $(".phone_span2 span").attr("class","phone_l2")
        lr=!lr;
      }else{
        $(".phone_down ul").animate({left:"0px"},400)
        $(".phone_span1 span").attr("class","phone_r1")
        $(".phone_span2 span").attr("class","phone_l1")
        lr=!lr;
      }
  }
single=setInterval(aska,5000);
//暂停开始
   $(".single_star").hover(function  () {
      clearInterval(single)
   },function  () {
      single=setInterval(aska,5000);
   })
  $(window).focus(function  () {
      clearInterval(single)
      single=setInterval(aska,5000);
  })
  $(window).blur(function  () {
     clearInterval(single)
  });


   // 鼠标移入效果
   $("..phone_span1 span").hover(function  () {
       if($(".phone_down ul").offset().left>0){
          $(".phone_span1 span").attr("class","phone_r3")
       }
   },function  () {
      if($(".phone_down ul").offset().left>0){
          $(".phone_span1 span").attr("class","phone_r1")
       }
   });

   $(".phone_span2 span").hover(function  () {
       if($(".phone_down ul").offset().left<0){
          $(".phone_span2 span").attr("class","phone_l3")
       }
   },function  () {
      if($(".phone_down ul").offset().left<0){
          $(".phone_span2 span").attr("class","phone_l2")
       }
   });
  
  // 鼠标点击效果
   $(".phone_span1 span").click(function  () {
       if($(".phone_down ul").offset().left>0){
          $(".phone_down ul").animate({left:"-1245px"},300);
          $(".phone_span1 span").attr("class","phone_r2")
          $(".phone_span2 span").attr("class","phone_l2")
       }
   });
   $(".phone_span2 span").click(function  () {
       if($(".phone_down ul").offset().left<0){
          $(".phone_down ul").animate({left:"0px"},300)
          $(".phone_span1 span").attr("class","phone_r1")
          $(".phone_span2 span").attr("class","phone_l1")
       }
   })

});

 

//三星 苹果 HTC 华为等品牌部分
  // 导航

$(function () {
   $(".phoneShow_kind li").not("#phoneShow_lastli").mouseenter(function  () {
   var i=$(this).index();
       $(this).attr("class","phoneShow_lired")
              .siblings()
              .attr("class","phoneShow_lino")
       $(this).parents(".phoneShow_top").siblings(".phoneShow_down")
              .children(".phoneShow_showright")
              .children().eq(i)
              .attr("class","showright1")
              .siblings().attr("class","showright")
   });

  //用户评价 

   $(".showright_ul li").each(function  () {
       $(this).children(".evaluation").remove();
       var count=parseInt($(this).children(".show_p4").text());
       if(count>0){
           $(this).append("<div class='evaluation'><p class='evaluation_p'>喜欢这款手机</p><p class='user_name'>来自于<span class='user_span'>匿名用户</span>的评价</p></div>")
       }
   });

   $(".showright_ul li").hover(function  () {
       $(this).children(".evaluation").stop(false,true).slideDown(200)
   },function  () {
       $(this).children(".evaluation").stop(false,true).slideUp(200)
   });

});