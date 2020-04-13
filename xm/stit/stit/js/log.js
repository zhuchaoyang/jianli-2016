
// 登录部分

$(function  () {
	$("#sub_input").click(function  () {
		var $name=$(".main_log input:eq(0)").val();
		var $pass=$(".main_log input:eq(1)").val();
		if($name==""||$pass==""){
			alert("输入错误");
			return false;
		}
	});


	// 其他登录方式
	var type=true;
	$(".log_span1").click(function  () {
		if(type){
			$(".log_type1").css("display","none");
			$(".log_type2").css("display","block");
			type=!type;
		}else{
			$(".log_type1").css("display","block");
			$(".log_type2").css("display","none");
			type=!type;
		}
		
	})
});


// 注册部分

$(function  () {

   $(".login_div input:lt(4)").blur( inp=function  () {
   	 var nr=$(this).val();
   	 var na=$(this).attr("placeholder")
   	 if(nr==""){
   	 	$(this).next().text(na+"不能为空");
   	 	$(this).css("borderColor","#ff6f3d")

   	 }
   
   })




	// 用户名验证
	 $(".login_div input:eq(0)").keyup(inp1=function  () {
	 	var users=$(this).val();
	   var tst2=/[^a-zA-Z0-9\u4e00-\u9fa5]+/g;
	 	console.log(tst2.test(users))
        if($(this).val().length<3){
           $(this).next().text("用户名不能少于三位数");
           return 0;
        }else if(tst2.test(users)==true){
           $(this).next().text("含有非法字符");
           return 0;
	 	}else{
	 		$(this).next().text("");
	 	}

      

	 })

   //判断邮箱

	  $(".login_div input:eq(1)").keyup( inp2=function  (){
	  	var yx=$(this).val();
	  	 var yxa=/^\w+@\w+\.[a-z]+/;
    	 if(yxa.test(yx)==true){
    		$(this).next("p").text("");
    		return 1;
    	 }else{
    		$(this).next("p").text("邮箱格式有误");
    		return 0;
    	 }
	  })

	// 判断密码
	$(".login_div input:eq(2)").keyup(inp3=function  (){
		var mm=$(this).val();
		var mma=/\w{6}/;
		if(mma.test(mm)==true){
           $(this).next("p").text("");
    		return 1;
		}else{
		   $(this).next("p").text("登录密码不能少于 6 个字符。");
    		return 0;
		}

	})

	$(".login_div input:eq(3)").keyup(inp4=function  (){
         var mm1=$(".login_div input:eq(2)").val();
         var mm2=$(this).val();
         if(mm1==mm2){
         	$(this).next("p").text("");
    		return 1;
    	}else{
    		$(this).next("p").text("两次密码不一致");
    		return 0;
    	}
	})

  // 验证码
  var array=["","YDM2","45SN","P4DB","AV6M","UTEW","EYTK","7T9W","T9UR","9wa6","Z3S5"]
  var s=Math.ceil(Math.random()*10);
  var $img=$("#login_img")[0]
  img.src="img/shop/captcha"+s+".png";
  $("#login_img").data("value",array[s]);
  $("#login_img").click(function  () {
  	 var i=Math.ceil(Math.random()*10);
  	img.src="img/shop/captcha"+i+".png";
     $("#login_img").data("value",array[i]);

  })
 

  // 提交按钮

  $("#deal").click(function  () {
  	 if($("#deal").data("value")==0){
  	 	$("#deal").data("value",1)
  	 }else{
  	 	$("#deal").data("value",0)
  	 }
  })
  
  $("#agree").click(function  () {
  	 var $test=$("#test").val();
  	 var $txt1=$(".login_div img").data("value");
  	 if($test!=$txt1){
  	 	alert("验证码输入不正确")
  	 	return false;
  	 }else if($("#deal").data("value")==0){
  	 	alert("同意用户协议")
        return false;
  	 }else{
  	 	return true;
  	 }

  	 

  })




});