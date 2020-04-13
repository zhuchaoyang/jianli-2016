
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

	},function  () {
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
     // 全部商品
    $("#nav_firstLi").mouseenter(function () {
       $(".show_nav").css("display","block") 
         clearTimeout(star)
        end=setTimeout(function  () {
          $(".ul_phonekind").slideUp(200);
        },210)
          
    })
    $("#nav_firstLi").mouseleave(function () {
          $(".show_nav").css("display","none")  

    })


    $(".show_navUl>li").mouseenter(function  () {

      $(this).children(".showPhone_kind").css("display","block")
             .siblings()
             .children(".showPhone_kind").css("display","none")
   });

   $(".show_navUl>li").mouseleave(function  () {
      $(".showPhone_kind").css("display","none")
   });





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



// 主体部分start

  // 主体商品图片

$(function  () {
   $(".line1_ul li").click(function  () {
      $(this).attr("id","goods_li1")
             .siblings()
             .attr("id","")
      var $i=$(this).children("img").attr("src")
      $(".goods_line2 img").attr("src",$i)
   });

   $(".goods_line2").hover(function  (e) {
       var $a=$(".goods_line2 img").attr("src");
       $(".line2_big img").attr("src",$a)

      var $x=e.pageX-$(this).offset().left;
      var $y=e.pageY-$(this).offset().top;
      if($x<100){
        $(".big_img").css("left","0px")
      }else if($x>400){
        $(".big_img").css("right","0px")
      }
      if($y<100){
        $(".big_img").css("top","0px")
      }else if($y>400){
        $(".big_img").css("bottom","0px")
      }
     
      $(".line2_big").stop(false,true).fadeIn(200)
                      
   },function  () {
      $(".line2_big").stop(false,true).fadeOut(200)
   });

   $(".goods_line2").mousemove(function (e) {
      var $x=$(this).offset().left-e.pageX;
      var $y=$(this).offset().top-e.pageY;
      if(-$x>=100&&-$x<=400){
        $(".big_img").css("left",($x+100)*1.33+"px")
      }
      if(-$y>=100&&-$y<=400){
         $(".big_img").css("top",($y+100)*1.33+"px")
      }
   })

   // 图片点击时变大全屏
       // 隐藏出现
   $(".goods_line2").click(function  () {
       var $img=$(".goods_line2 img").attr("src");
       $(".biger_img img").attr("src",$img);
       $(".biger_div").css("display","block");
       var $h=$(window).height()/2;
       var $w=$(window).width()/2;
       var $x=$(window).scrollLeft();
       var $y=$(window).scrollTop();
       if($h<=$w){
         $(".biger_img").animate({height:2*$h+20,width:2*$h+20,left:$w-$h+$x+10,top:$y},300);
         $(".biger_img").animate({height:2*$h,width:2*$h,left:$w-$h+$x+10},300);
       }else{
         $(".biger_img").animate({height:2*$w+20,width:2*$w+20,left:0,top:$y+$h-$w},300);
         $(".biger_img").animate({height:2*$w,width:2*$w,left:"0px",top:$y+$h-$w},300);
       }
       
   })
   $(".biger_div").click(function  () {
     var $x=$(".biger_img").width();
     var $y=$(".biger_img").height();
      $(".biger_img").animate({height:$x+20,width:$y+20,},300);
      $(".biger_img").animate({height:"0px",width:"0px",top:"380px",left:"500px"},300,function  () {
         $(".biger_div").css("display","none");
      });
   });

   $(window).resize(function  () {
       var $x=$(window).width();
       var $y=$(window).height();
       var $w=$(".biger_img").width();
       if($x<=$w){
         $(".biger_img").height($x);
         $(".biger_img").width($x);
         $(".biger_img").animate({left:$x/2-$x/2+10+"px",top:$y/2-$x/2},500)
       }else{
         $(".biger_img").height($y);
         $(".biger_img").width($y);
         $(".biger_img").animate({left:$x/2-$y/2+10+"px"},500)
       }
      
   });
   $(window).scroll(function  () {
      var $y=$(this).scrollTop();
      var $x=$(this).scrollLeft();
      var $w=$(".biger_img").width()/2;
      var $le=$(window).width()/2;
      var $h=$(window).height();
      $(".biger_img").animate({top:$y,left:$le-$w+$x+10},20);
      $(".biger_div").css("height",$y+$h)
   });

   // 移入上去的效果
      $(".biger_img").hover(function  () {
         $(".biger_img img").css({"width":"1000px","height":"1000px"});
      },function  () {
         $(".biger_img img").css({"width":"100%","height":"100%","top":0,"left":0})
      })
      $(".biger_img").mousemove(function  (e) {
          var $x=e.pageX-$(this).offset().left;
          var $y=e.pageY-$(this).offset().top;
          var $h=$(".biger_img").height();
          var $b=(1000-$h)/$h;
          $(".biger_img img").css({"top":-$y*$b,"left":-$x*$b});
      })



   // 主体商品文字

  $("#line3_member").hover(function  () {
     $(".member_div").css("display","block")
  },function  () {
     $(".member_div").css("display","none")
  });


  // 商品价格
    $(".style2_ul li").click(function  () {
        $(this).attr("id","style2_li")
               .append($(".style_gou"))
               .siblings()
               .attr("id","")
        $("#line3_price").text($(this).data("value"))
    });
     // 左
    $("#line3_count span:eq(0)").click(function  () {
       var $a=$("#style2_li").data("value"); 
       var $i=$("#line3_count>input").val();
       if($i<=1){
          $("#line3_count>input").val(1)
          $("#line3_price").text($a)
       }else{
          $("#line3_count>input").val($i-1)
          $("#line3_price").text($a*($i-1))
       }
    })
    // 右
    $("#line3_count span:eq(1)").click(function  () {
       var $a=$("#style2_li").data("value"); 
       var $i=Number($("#line3_count>input").val());
          $("#line3_count>input").val($i+1)
          $("#line3_price").text($a*($i+1))
     })
    // 输入
    $(document).click(function  () {
       var $a=$("#style2_li").data("value"); 
       var $i=Number($("#line3_count>input").val());
       if($i<1){
         $("#line3_count>input").val(1)
         $("#line3_price").text($a)
       }else{
         $("#line3_price").text($a*$i)
       }
          
     })
  
   // 商品详情
       $(window).scroll(function  () {
          var $i=$(window).scrollTop();
          if($i>1090){
            $(".goods_title2").slideDown(300);
          }else{
            $(".goods_title2").slideUp(300);
          }
          if($i<11565){
            $(".title_span1").css("color","#ff6700")
                             .siblings()
                             .css("color","#8c8c8c")
          }else if($i>=11565&&$i<11985){
            $(".title_span2").css("color","#ff6700")
                             .siblings()
                             .css("color","#8c8c8c")
          }else{
            $(".title_span3").css("color","#ff6700")
                             .siblings()
                             .css("color","#8c8c8c")
          }
       })
          $(".title_span1").click(function  () {
             $(window).scrollTop(1030);
          })
          $(".title_span2").click(function  () {
             $(window).scrollTop(11565);
          })
          $(".title_span3").click(function  () {
             $(window).scrollTop(11985);
          })

});


// 评价晒单部分
  
$(function  () {
  // 提交评价部分
   $("#three_p3").click(function  () {
       $(".e_hide").css("display","block")
   });
   
   $(".rank_close").click(function  () {
      $(".e_hide").css("display","none")
   });

    // 提交部分
    var chong=true;
    $("#rank_li5 input").click(function  () {
         var tt=/^\w+@\w+\.[a-z]+/;
         var $pt=$("#rank_li2 input").val();
         var $i=$("#rank_li2 input").data("value");
         var $x=$("#rank_li4 textarea").val();
         if(tt.test($pt)==false){
           alert("电子邮箱输入不正确");
           return false;
         }else if($x==""){
            alert("评论不能为空");
            return false;
         }else{
            if(chong){
                chong=!chong;
                return true;
            }else{
                alert("三十秒之后才可以重复提交")
            }
         }
            
      setTimeout(function  () {
         chong=!chong;
      },30000)
    })
})
