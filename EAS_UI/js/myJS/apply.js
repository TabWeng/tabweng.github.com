$(document).ready(function() {

   //:input 获取的是 type=text,radio,button等select textarea等元素对象
  $("input").blur(function() { //注册blur的事件
    $(this).each(function() { //遍历input元素对象 
        if ("" == $(this).val()) { //判断元素对象的value值
          $(this).addClass("error"); //添加css样式
        }else{
            $(this).removeClass("error");
        }
      });
  });
  $("#applyBtn").click(function(){

    $("input").each(function() { //遍历input元素对象 
        if ("" == $(this).val()) { //判断元素对象的value值
          $(this).addClass("error"); //添加css样式
        }else{
            $(this).removeClass("error");
        }
      });

  
  $.ajax({ 
      type: "POST",   
      url: "#",
      data: {
        user_id: $("#name").val(), 
        alipay_account: $("#alipay_account").val(), 
        isEmployee: $("#isEmployee").val(), 
        job: $("#isEmployee").val(),
        self_introduction: $("#self-introduction").val(),
        analyze_ability: $("#skill").val(),
        experience: $("#experience").val()
      },
      dataType: "json",
      success: function(data){
         
      },
      error: function(jqXHR){     
         alert("发生错误：" + jqXHR.status);  
      },     
    });

  });


  myResponsive(
    ".D-toRelative",
    752,2000,
    {
      "position":"relative",
      "left":"-40px"
    }
  );

  myResponsive(
    "#applyBtn",
    1183,2000,
    {
      "position":"relative",
      "left":"-17px"
    }
  );

  myResponsive(
    "#applyBtn",
    975,1182,
    {
      "position":"relative",
      "left":"-40px"
    }
  );

  myResponsive(
    "#applyBtn",
    752,974,
    {
      "position":"relative",
      "left":"-23px"
    }
  );

  myResponsive(
    "#applyBtn",
    0,752,
    {
      "position":"relative",
      "left":"0",
      "width":"100%"
    }
  );  


});