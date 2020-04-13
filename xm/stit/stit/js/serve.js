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


//产品服务

$(function  () {
    $(".project ul li").hover(function  () {
       $(this).children(".mainLi_div").stop(false,true).slideDown(400)
    },function  () {
       $(this).children(".mainLi_div").stop(false,true).slideUp(400)
    })
});
