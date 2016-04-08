 $(document).ready(function(){ 



     $("input").blur(function() { //注册blur的事件
    $(this).each(function() { //遍历input元素对象 
        if ("" == $(this).val()) { //判断元素对象的value值
          $(this).addClass("error"); //添加css样式

        }else{
            $(this).removeClass("error");
        }
      });
  });

     $("#loginBtn").click(function(){ 
       $("input").each(function() { //遍历input元素对象 
        if ("" == $(this).val()) { //判断元素对象的value值
          $(this).addClass("error"); //添加css样式
        }else{
            $(this).removeClass("error");
        }
      });
       
       $.ajax({ 
      type: "GET",  
      url: "#",
      dataType: "json",
      data:{ 
        username: $("#username").val(), 
        password: $("#psw").val(), 
       },
      success: function(data){
        if (data.success) { 
           $('#Duser').addClass("has-success");
           $('#checkUser').addClass("glyphicon-ok");
           $('#Dpsw').addClass("has-success");
           $('#checkPsw').addClass("glyphicon-ok");
        } else {
          $("#error").html("出现错误：" + data.msg);
        }  
      },
      error: function(jqXHR){     
         alert("发生错误：" + jqXHR.status);  
      },    
    });
   
  });  
}); 