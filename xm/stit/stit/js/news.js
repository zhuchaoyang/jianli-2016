
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



// 主体导航部分

$(function  () {
     $(".main_top ul>li").click(function  () {
      var $txt=$(this).text()
      var $i=$(this).index();
        $(this).attr("id","main_li1")
               .siblings()
               .attr("id","")
        $(".location_span").html($txt);
        if($i==0){
          $(".main_ul").css("display","block")
                      .siblings()
                      .css("display","none")
        }else if($i==1){
           $(".dongtai").css("display","block")
                         .siblings()
                         .css("display","none") 
        }

     });
   

   //上下页
     $(".main_liDiv span:eq(1)").click(function  () {
        $(".main_ul1").css("display","block")
        $(".main_ul2").css("display","none")
        $("#main_a").attr("id","")
        $(".spana").attr("id","main_a")
     })
     $(".main_liDiv span:eq(4)").click(function  () {
        $(".main_ul1").css("display","none")
        $(".main_ul2").css("display","block")
        $("#main_a").attr("id","")
       $(".spanz").attr("id","main_a")
     })

  // 数字
    $(".main_liDiv span").click(function  () {
       var s=Number($(this).text())

       if(Boolean(s)){
          $("#main_a").attr("id","")
          $(this).attr("id","main_a")
          $(".dongtai ul").eq(s-1).css("display","block")
                          .siblings()
                          .css("display","none")
       }
       $(".main_liDiv").css("display","block")
    })

   // 第一和最后
   $(".one").click(function  () {
       $("#main_a").attr("id","")
       $(".spana").attr("id","main_a")
       $(".dongtai ul").eq(0).css("display","block")
                             .siblings()
                             .css("display","none")
      $(".main_liDiv").css("display","block")
   });
   $(".last").click(function  () {
     var sc=$(".dongtai ul").length-1;
       $("#main_a").attr("id","")
       $(".spanz").attr("id","main_a")
       $(".dongtai ul").eq(sc).css("display","block")
                             .siblings()
                             .css("display","none")
      $(".main_liDiv").css("display","block")
   });

});
