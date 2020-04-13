
// 头部部分导航

 $(function  () {
  $(".header_ul>li").not("#head_li").hover(function  () {
  	$(this).children("a").css("color","white")
  	$(this).append("<p class='header_p'></p>");
  	$(this).children(".header_p").stop(false,true).slideDown(200)
  	$(".header_p2").stop(false,true).slideUp(200)
  	$("#head_li>a").css("color","#666666")
  	
  },function  () {
  	var i=$(this).index();
  	$(this).children("a").css("color","#666666")
  	 $(this).children(".header_p")
  	        .slideUp(200,function  () {
  	 	 $(".header_ul>li").eq(i).stop(false,true).children(".header_p").remove();
  	 })
  	 	   
  });
  // 下部效果
   $(".header_ul>li").hover(function  () {
       $(this).children("div").stop(false,true).slideDown(200)
   },function  () {
       $(this).children("div").stop(false,true).slideUp(200) 
   })


  $("#head_li").mouseover(function  () {
  	  	$(".header_p2").stop(false,true).slideDown(200)
  	    $("#head_li>a").css("color","white")
  })
   $(".header_ul").mouseleave(function  () {
  	  	$(".header_p2").stop(false,true).slideDown(200)
  	    $("#head_li>a").css("color","white")
  })

})



// 轮播图区

$(function  () {
   var now=0;
   var $i=$(".show_ul li").length-1
   function abs() {
   	  var $x=-100*now+"%";
   	  $(".show_ul").stop().animate({left:$x},300)
   	  $(".show_btn li").eq(now).attr("class","show_btnli1")
   	                   .siblings(".show_btnli1")
   	                   // .arrt("class","show_btnli3")
                       .attr("class","show_btnli2")
   }
   function abc () {
   	  if(now<$i){
   	  	now++;
   	  }else{
   	  	now=0;
   	  }
   }
   stop=setInterval(function(){
   	  abc();
   	  abs();
   },2000)

   // 下部按钮
    $(".show_btn li").mouseover(function  () {
    	clearInterval(stop)
        now=$(this).index();
        abs()
        stop=setInterval(function(){
   	       abc();
   	       abs();
        },5000)
    })

  // 左右按钮
     //出现
  $(".show").hover(function  () {
  	  $(".btn_left").stop(false,true).animate({left:"130px"},300)
  	  $(".btn_right").stop(false,true).animate({right:"130px"},300)
  },function  () {
  	  $(".btn_left").stop(false,true).animate({left:"-60px"},300)
  	  $(".btn_right").stop(false,true).animate({right:"-60px"},300)
  })

 $(".btn_left").click(function  () {
 	clearInterval(stop)
 	  abc();
   	  abs();
   	  stop=setInterval(function(){
   	    abc();
   	    abs();
      },5000)
 })

 $(".btn_right").click(function  () {
 	clearInterval(stop)
 	  if(now>0){
   	  	now--;
   	  }else{
   	  	now=$i;
   	  }
   	  abs();
   	  stop=setInterval(function(){
   	    abc();
   	    abs();
      },5000)
 })

});