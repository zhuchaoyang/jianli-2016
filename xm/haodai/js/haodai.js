
      //导航
 $(function  () {
  //导航city
 	$("#city").click(function  () {
 		$(".selsct_City1").toggleClass("selsct_City2")
 	});

 })


      // 轮播图区start
// 下边按钮
function nameBtn () {
    var $oneDiv=$("#picture div:last").attr("class");
         var i=$oneDiv[4];
         $(".figUl").find("li").eq(i).removeClass().addClass("changeLi").siblings().removeClass().addClass("changeLi1");
};

$(function  () {
// 轮播图
 star=function () {
  setn=setInterval(function  () {	
  	var $sixDiv=$("#picture div:eq(5)");
  	$sixDiv.fadeOut(600);
  	setTimeout(function  () {
      $("#picture").prepend($("#picture div:last"));
  		$("#picture div:eq(0)").fadeIn(); 
      nameBtn ();
  	},600);
    
  },6000);
}
star();

// 鼠标移入和移除
 $("#picture").mouseenter(function  () {
    clearInterval(setn);
 });
 $("#picture").mouseleave(function  () {
    star();
 });

  // 左右按钮

  $(".btnLeft").click(function  () {
   clearInterval(setn);
   $("#picture div:eq(5)").before($("#picture div:first"));
   $("#picture div:eq(5)").fadeOut(600);
   setTimeout(function  () {
        $("#picture div:eq(3)").after($("#picture div:last"));
        $("#picture div:eq(4)").fadeIn(); 
        nameBtn ()
        star();
    },600); 
});


 $(".btnRight").click(function  () {
    clearInterval(setn);
    $("#picture div:eq(5)").fadeOut(600);
    setTimeout(function  () {
        $("#picture").prepend($("#picture div:last"));
        $("#picture div:eq(0)").fadeIn(); 
        nameBtn ();
        star();
    },600);  
 });

// 下边按钮
function btn(a) {
   clearInterval(setn);
    var $oneDiv=$("#picture div:last").attr("class");
    var i=$oneDiv[4];
    if(a==i){     
       star();
    }else if(a==0){
       $("#picture div:last").before($(".pDiv0"));
       var $xDiv=$("#picture div:eq(5)");
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".pDiv0").before($(".pDiv1"));
         $(".pDiv1").before($(".pDiv2"));
         $(".pDiv2").before($(".pDiv3"));
         $(".pDiv3").before($(".pDiv4"));
         $(".pDiv4").before($(".pDiv5"));
         $xDiv.fadeIn();
         nameBtn();
         star();
       },600);
   }else if(a==1){
       $("#picture div:last").before($(".pDiv1"));
       var $xDiv=$("#picture div:eq(5)");
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".pDiv1").before($(".pDiv2"));
         $(".pDiv2").before($(".pDiv3"));
         $(".pDiv3").before($(".pDiv4"));
         $(".pDiv4").before($(".pDiv3"));
         $(".pDiv5").before($(".pDiv0"));
         $xDiv.fadeIn();
         nameBtn ();
         star();
       },600);
   }else if(a==2){
         $("#picture div:last").before($(".pDiv2"));
       var $xDiv=$("#picture div:eq(5)");
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".pDiv2").before($(".pDiv3"));
         $(".pDiv3").before($(".pDiv4"));
         $(".pDiv4").before($(".pDiv5"));
         $(".pDiv5").before($(".pDiv0"));
         $(".pDiv0").before($(".pDiv1"));
         $xDiv.fadeIn();
         nameBtn();
         star();
       },600);
   }else if(a==3){
         $("#picture div:last").before($(".pDiv3"));
       var $xDiv=$("#picture div:eq(5)");
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".pDiv3").before($(".pDiv4"));
         $(".pDiv4").before($(".pDiv5"));
         $(".pDiv5").before($(".pDiv0"));
         $(".pDiv0").before($(".pDiv1"));
         $(".pDiv1").before($(".pDiv2"));
         $xDiv.fadeIn();
         nameBtn ();
         star();
       },600);
   }else if(a==4){
        $("#picture div:last").before($(".pDiv4"));
       var $xDiv=$("#picture div:eq(5)");
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".pDiv4").before($(".pDiv5"));
         $(".pDiv5").before($(".pDiv0"));
         $(".pDiv0").before($(".pDiv1"));
         $(".pDiv1").before($(".pDiv2"));
         $(".pDiv2").before($(".pDiv3"));
         $xDiv.fadeIn();
         nameBtn();
         star();
       },600);
   }else if(a==5){
       $("#picture div:last").before($(".pDiv5"));
       var $xDiv=$("#picture div:eq(5)");
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".pDiv5").before($(".pDiv0"));
         $(".pDiv0").before($(".pDiv1"));
         $(".pDiv1").before($(".pDiv2"));
         $(".pDiv2").before($(".pDiv3"));
         $(".pDiv3").before($(".pDiv4"));
         $xDiv.fadeIn();
         nameBtn();
         star();
       },600);
     }
 }

})
         // 轮播图区end


        //搜索贷款区start
$(function  () {
  // 贷款方式
  $("#typeOne").click(function  () {
     $("#typeOne").removeClass().addClass("typeClass1").next().removeClass().addClass("typeClass2")
     $(".typeInput")[0].value=1;
  });
  $("#typeTwo").click(function  () {
     $("#typeTwo").removeClass().addClass("typeClass1").prev().removeClass().addClass("typeClass2")
     $(".typeInput")[0].value=2;
  });

// 贷款条件
     // input失去焦点
 $(".loanMessage input").focus(function  () {
     $(".loanMessage input:focus").blur();
 });
   
  $(".loanMessage div").click(function  (event) {
     $(event.target).find("ul").attr("class","loanUlShow");
     $(event.target).siblings().find("ul").attr("class","loanUlHide");
     event.stopPropagation();
  });
  $(".loanMessage div input").click(function  (event) {
     $(event.target).next().removeClass().addClass("loanUlShow");
     $(event.target).parent().siblings().find("ul").attr("class","loanUlHide");
     event.stopPropagation();
  });
  $(document).click(function  () {  
     $(".loanMessage ul").attr("class","loanUlHide");
  });
 
     // 下拉列表处理
  $(".loanMessage ul li").click(function () {
      $(this).removeClass().addClass("loanLi").siblings().removeClass();
      $(this).parent().attr("class","loanUlHide");
      $(this).parent().prev().val($(this).text());
      var x=$(this).data("value");
      $(this).parent().prev().attr("data-value",x);
      $(this).parent().parent().css("border","none")
  });
}) 
       //搜索贷款区end




// 第二个轮播图start
// 下边按钮
function nBtn() {
    var $oneDivClass=$(".newsDiv").children().eq(3).attr("class");
         var i=$oneDivClass[7];
         $(".newsUl").find("li").eq(i).removeClass().addClass("newsLi").siblings().removeClass().addClass("newsLi1");
};

$(function  () {

// 轮播图
 sts=function () {
  stn=setInterval(function  () { 
    var $sixDiv=$(".newsDiv").children().eq(3);
    $sixDiv.fadeOut(600);
    setTimeout(function  () {
      $(".newsDiv").prepend($sixDiv);
      $(".newsDiv").children().eq(0).fadeIn(); 
      nBtn();
    },600);
    
  },6000);
}
sts();

// 鼠标移入和移除
 $(".newsDiv").mouseenter(function  () {
    clearInterval(stn);
 });
 $(".newsDiv").mouseleave(function  () {
    sts();
 });

  // 左右按钮

  $(".newsBtnLeft").click(function  () {
   clearInterval(stn);
   $(".newsDiv").children().eq(3).before($(".newsDiv").children().eq(0));
   $(".newsDiv").children().eq(3).fadeOut(600);
   setTimeout(function  () {
        $(".newsDiv").children().eq(1).after($(".newsDiv").children().eq(3));
        $(".newsDiv").children().eq(2).fadeIn(); 
         nBtn()
         sts();
    },600); 
});


 $(".newsBtnRight").click(function  () {
    clearInterval(stn);
    $(".newsDiv").children().eq(3).fadeOut(600);
    setTimeout(function  () {
        $(".newsDiv").prepend($(".newsDiv").children().eq(3));
        $(".newsDiv").children().eq(0).fadeIn(); 
         nBtn();
         sts();
    },600);  
 });
})
// 下边按钮
function bttn(a) {
   clearInterval(stn);
    var $oneDiv=$(".newsDiv").children().eq(3).attr("class");
    var i=$oneDiv[7];
    if(a==i){     
       sts();
    }else if(a==0){
       $(".newsDiv").children().eq(3).before($(".newsDiv0"));
       var $xDiv=$(".newsDiv").children().eq(3);
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".newsDiv0").before($(".newsDiv1"));
         $(".newsDiv1").before($(".newsDiv2"));
         $(".newsDiv2").before($(".newsDiv3"));
         $xDiv.fadeIn();
         nBtn();
         sts();
       },600);
   }else if(a==1){
       $(".newsDiv").children().eq(3).before($(".newsDiv1"));
       var $xDiv=$(".newsDiv").children().eq(3);
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".newsDiv1").before($(".newsDiv2"));
         $(".newsDiv2").before($(".newsDiv3"));
         $(".newsDiv3").before($(".newsDiv0"));
         $xDiv.fadeIn();
         nBtn ();
         sts();
       },600);
   }else if(a==2){
       $(".newsDiv").children().eq(3).before($(".newsDiv2"));
       var $xDiv=$(".newsDiv").children().eq(3);
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".newsDiv2").before($(".newsDiv3"));
         $(".newsDiv3").before($(".newsDiv0"));
         $(".newsDiv0").before($(".newsDiv1"));
         $xDiv.fadeIn();
         nBtn ();
         sts();
       },600);
   }else if(a==3){
       $(".newsDiv").children().eq(3).before($(".newsDiv3"));
       var $xDiv=$(".newsDiv").children().eq(3);
       $xDiv.fadeOut(600);
       setTimeout(function  () {
         $(".newsDiv3").before($(".newsDiv0"));
         $(".newsDiv0").before($(".newsDiv1"));
         $(".newsDiv1").before($(".newsDiv2"));
         $xDiv.fadeIn();
         nBtn ();
         sts();
       },600);
   }
 }

 // 第二个轮播图end


 // 主体rows1银行部分

$(function  () {
   $(".bankUl li").mouseenter(function  () {
       $(this).attr("class","bankLi").siblings().attr("class","bankLi1");
       var i=$(this).index();
       $(".bankType").children().eq(i).attr("class","bankShow").siblings().attr("class","bankHide")
   });
});


// 主体rows1快速申请部分
$(function  () {
    $(".rowsR_top input").focus(function  () {
       $(this).parent().css({"border-width":"1px","border-style":"solid","border-color":"#3f84f9"})
    });
    $(".rowsR_top input").blur(function  () {
       $(this).parent().css({"border-width":"1px","border-style":"solid","border-color":"#f3f5f6"})
    });
    $("#rows1_input3").focus(function  () {
       $(this).blur();
    })

    //职业身份
   $("#rowszhi").click(function  (event) {
      $("#rowszhi ul").css("display","block");
      event.stopPropagation();
   });
   $(document).click(function  () {
      $("#rowszhi ul").css("display","none");
   });
   $("#rowszhi ul li").click(function (event) {
      event.stopPropagation();
      $("#rowszhi input").val($(this).text());
      $(this).css("color","#377bee").siblings().css("color","black");
      $("#rowszhi ul").css("display","none");
      $(".inputSpan3").text("");
      $("#rowszhi input").data("value","1");
   });

  //判断个表单
     // 姓名
   $("#rows1_input1").keyup(function () {
      var sa=/^[\u4e00-\u9fa5]{2,6}$/;
      var $txt1=$(this).val()
      if(sa.test($txt1)){
        $(".inputSpan1").text("");
         $(this).data("value","1")
      }else{
        $(".inputSpan1").text("请输入两位以上汉字");
         $(this).data("value","0")
      }
   });
    // 电话
   $("#rows1_input2").keyup(function () {
      var sc=/^1\d{10}$/;
      var $txt2=$(this).val()
      if(sc.test($txt2)){ 
        $(".inputSpan2").text("");
        $(this).data("value","1")
      }else{
        $(".inputSpan2").text("请输入十一位数字");
        $(this).data("value","0")
      }
   });
   // 输入金额
   $("#rows1_input4").keyup(function  () {
      var sv=/^\d+$/;
      var $txt3=$(this).val()
      if(sv.test($txt3)){ 
        $(".inputSpan4").text("");
        $(this).data("value","1")
      }else{
        $(".inputSpan4").text("请输数字");
        $(this).data("value","0")
      }
   })
   $("#rowsR_bton").click(function  () {
      $q=$("#rows1_input1").data("value");
      $w=$("#rows1_input2").data("value");
      $e=$("#rows1_input3").data("value");
      $r=$("#rows1_input4").data("value");
      $sum=$q+$w+$e+$r;
      if($sum==1111){
        alert("哈哈")
      }else{
        $(".rowsR_top input").each(function  () {
            if($(this).data("value")==0){
              $(this).parent().next().text("请正确输入")
            }
        });
      }
   });
});


 //主体rows3 line1 问答部分
  $(function  () {
     $("#amswer_tet").focus(function  () {
         $(this).css("borderColor","#4483ec")
     });
     $("#amswer_tet").blur(function  () {
         $(this).css("borderColor","#e5eaec")
     });
      // 搜索和提问
    $("#amswer_btn1").click(function  () {
        alert($("#amswer_tet").val())
    });
    $("#amswer_btn2").click(function  () {
        alert($("#amswer_tet").val())
    });

     //问题解决部分

     $(".question ul li:eq(0) a").css("color","#f17312");  
     $(".question ul li:eq(1) a").css("color","#f17312");  
     $(".question ul li:eq(2) a").css("color","#f17312");  
  });



// 悬浮区部分
$(function  () {
   // 浮动的显示和出现

  $(window).scroll(function  () {
      var $y=$(this).scrollTop();
      if($y>800){
        $("#floata").css("display","block");   
      }else{
        $("#floata").css("display","none");
      }
  });

   $(document).bind("scroll",scr=function () {
      var $y=$(this).scrollTop();
      if($y>800){
          $(".float_apply").slideDown(400);
      }else{
          $(".float_apply").slideUp(400);
      }

    })

      $("#float_top").click(sta=function  () {
          var $top=$(window).scrollTop();
          if($top>0){
            $top-=100;
            $(window).scrollTop($top);
            setTimeout(sta,10);
          }
      });
      $(".flaot_hide").click(function  () {
          $(".float_apply").slideUp(400);
          $("#float_down").css("display","block")

           $(document).unbind("scroll",scr);

          $(window).scroll(function  () {       
             $(".float_apply").slideUp(400);
             $("#float_down").css("display","block");
           });
      });
      $("#float_down").click(function  () {
          $(".float_apply").slideDown(400);
          $("#float_down").css("display","none");

          $(document).unbind("scroll",scr);

          $(window).scroll(function  () {       
             $(".float_apply").slideUp(400);
             $("#float_down").css("display","block");
         });
      });







 // 悬浮区申请及表单部分

    $(".flaot_c2 input").focus(function  () {
       $(this).parent().css({"border-width":"1px","border-style":"solid","border-color":"blue"})
    });
    $(".flaot_c2 input").blur(function  () {
       $(this).parent().css({"border-width":"1px","border-style":"solid","border-color":"white"})
    });
    $("#float_input2 input").focus(function  () {
       $(this).blur();
    })

    //职业身份
   $("#float_input2").click(function  (event) {
      $("#float_input2 ul").css("display","block");
      event.stopPropagation();
   });
   $(document).click(function  () {
      $("#float_input2 ul").css("display","none");
   });
   $("#float_input2 ul li").click(function (event) {
      event.stopPropagation();
      $("#float_input2 input").val($(this).text());
      $(this).css("color","#377bee").siblings().css("color","black");
      $("#float_input2 ul").css("display","none");
      $("#float_input2 input").data("value","1");
   });

  //判断个表单
     // 姓名
   $("#float_input1 input").keyup(function () {
      var sa=/^[\u4e00-\u9fa5]{2,6}$/;
      var $txt1=$(this).val()
      if(sa.test($txt1)){
        $(".flaot_c2 p:eq(0)").text("");
         $(this).data("value","1")
      }else{
        $(".flaot_c2 p:eq(0)").text("请输入两位以上汉字");
         $(this).data("value","0")
      }
   });
    // 电话
   $("#float_input3 input").keyup(function () {
      var sc=/^1\d{10}$/;
      var $txt2=$(this).val()
      if(sc.test($txt2)){ 
        $(".flaot_c2 p:eq(2)").text("");
        $(this).data("value","1")
      }else{
        $(".flaot_c2 p:eq(2)").text("请输入十一位数字");
        $(this).data("value","0")
      }
   });
   // 输入金额
   $("#float_input4 input").keyup(function  () {
      var sv=/^\d+$/;
      var $txt3=$(this).val()
      if(sv.test($txt3)){ 
        $(".flaot_c2 p:eq(3)").text("");
        $(this).data("value","1")
      }else{
        $(".flaot_c2 p:eq(3)").text("请输数字");
        $(this).data("value","0")
      }
   })
   $(".flaot_c3 input").click(function  () {
      $q=$("#float_input1 input").data("value");
      $w=$("#float_input2 input").data("value");
      $e=$("#float_input3 input").data("value");
      $r=$("#float_input4 input").data("value");
      $sum=$q+$w+$e+$r;
      if($sum==1111){
        alert("哈哈")
      }else{
        $(".flaot_c2 input").each(function  () {
            if($(this).data("value")==0){
              var i=$(this).parent().data("num");
              $(".flaot_c2 p").eq(i).text("请正确输入")
            }
        });
      }
   });





});




  

 