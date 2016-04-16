$(window).load(function() {
	  

//头像上传
	var options =
	{
		thumbBox: '.thumbBox',
		spinner: '.spinner',
		imgSrc: 'images/avatar.jpg'
	}
	var cropper = $('.imageBox').cropbox(options);
	$('#upload-file').on('change', function(){
		var reader = new FileReader();
		reader.onload = function(e) {
			options.imgSrc = e.target.result;
			cropper = $('.imageBox').cropbox(options);
		}
		reader.readAsDataURL(this.files[0]);
		this.files = [];
	})
	$('#btnCrop').on('click', function(){
		var img = cropper.getDataURL();
		 
		$('.cropped').html('');
		$('.cropped').append('<img src="'+img+'" align="absmiddle" style="width:150px;margin-top:10px;border-radius:150px;box-shadow:0px 0px 12px #7E7E7E;">');
		$('#pic').replaceWith('<img src="'+img+'"style="width: 100%;max-width: 150px;border-radius:150px;box-shadow:0px 0px 12px #7E7E7E;cursor:pointer; "title="点击更改头像" id="pic">');
		  
	})
	$('#btnZoomIn').on('click', function(){
		cropper.zoomIn();
	})
	$('#btnZoomOut').on('click', function(){
		cropper.zoomOut();
	})




  // 验证码判断
          var flag2 = false;
          $("#phoneNum").blur(function(){
            var validatecode = "validateCode=" + $("#phoneNum")[0].value;
         
            if($("#phoneNum")[0].value != ''){         
              $.get("${pageContext.request.contextPath}/user_checkValidateCode",validatecode,function(result){
                 if(result == "false"){
                  $("#phoneNum").after("<p id='validate' class='D-hint' style='color: red;'>验证码不正确！</p>");
                    flag2 = false;
                 }else{
                  flag2 = true;
                 }
              },"text");

              $("#phoneNum").focus(function(){
                $("#validate").remove();
              });
            }
          });

        // 手机验证码判断 - 来自短信api
        $("#zphone").click(function(){
          if($("#mobile")[0].value == ''){
            alert("请先输入手机号码！");
          }else{
            get_mobile_code();            
          }
        });

        function get_mobile_code(){
              $.post('${pageContext.request.contextPath}/user_sendValidateCode', {mobile:jQuery.trim($('#mobile').val())}, function(msg) {
            if(msg=='提交成功'){
              RemainTime();
            }
              });
        };

        var iTime = 59;
        var Account;

        function RemainTime(){
          $("#zphone").css({"background-color":"#B9E563"});
          document.getElementById('zphone').disabled = true;
          var iSecond,sSecond="",sTime="";
          if (iTime >= 0){
            iSecond = parseInt(iTime%60);
            iMinute = parseInt(iTime/60)
            if (iSecond >= 0){
              if(iMinute>0){
                sSecond = iMinute + "分" + iSecond + "秒";
              }else{
                sSecond = iSecond + "秒";
              }
            }
            sTime=sSecond;
            if(iTime==0){
              clearTimeout(Account);
              sTime='获取手机验证码';
              iTime = 59;
              document.getElementById('zphone').disabled = false;
            }else{
              Account = setTimeout(function(){RemainTime()},1000);
              iTime=iTime-1;
            }
          }else{
            sTime='没有倒计时';
          }
          document.getElementById('zphone').value = sTime;
        } 


//判断输入框是否为空
        $("input").blur(function() { //注册blur的事件
       $(this).each(function() { //遍历input元素对象 
        if ("" == $(this).val()) { //判断元素对象的value值
          $(this).addClass("error");//添加css样式
          $(this).focus();
        }else{
            $(this).removeClass("error");
        }
      });
     });
        //判断邮件格式
        $("#txtEmail").blur(function () {
                
                    if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test($(this).val()) == false) {
                        $("#spinfo").text("邮箱格式不正确，请重新填写！");
                        $(this).val("");
                        $(this).focus();
                    }
                    else {
                        $("#spinfo").text('');
                       
                        state=true;
                    }
                 
            }) 
        //判断手机号
        $("#mobile").blur(function () {
                
                    if (/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/.test($(this).val()) == false) {
                        $("#phonefo").text("手机号码格式不正确，请重新填写！");
                        $(this).val("");
                        $(this).focus();
                    }
                    else {
                        $("#phonefo").text('');
                       
                        state=true;
                    }
                 
            });
        //判断两次密码
        $("#repsw").blur(function(){

          var psw=$("#psw").val();
          var repsw=$("#repsw").val();
          if (psw!=repsw) {
            $("#pswinfo").text("两次密码不一致，请重新填写!");
          }

        });

        $("#close").click(function(){

           $("#upload-file").val("");
         


        });
//提交表单
/*$("#verify").click(function(){
    var flag;
    $("input").each(function() { //遍历input元素对象 
        if ("" == $(this).val()) { //判断元素对象的value值
          $(this).addClass("error"); //添加css样式
          
        }else{
            $(this).removeClass("error");
             
 
        }
      });
      


  });*/
});
