         
 /* **************************************************************************************************************************************** */        
 /* **************************************************************************************************************************************** */        
         
 var wh;
 var ww;
 var dh;
 var dw;
 
         
 /* **************************************************************************************************************************************** */        
 /* **************************************************************************************************************************************** */        
 
 $(document).ready(function() {        
 
  wh = $(window).height();
  ww = $(window).width();
  dh = $(document).height();
  dw = $(document).width();
  setObjects();

  $(window).bind("resize", function(){         
   wh = $(window).height();
   ww = $(window).width();
   dh = $(document).height();
   dw = $(document).width();
   setObjects();
  });// $(window).bind("resize", function()....
 
        
 });//$jquery....           
 
 /* **************************************************************************************************************************************** */        
 
 function setObjects(){
 
  $("#text_2").css("top",wh-650+"px");
  $("#page-wrapper").css("backgroundPosition", ww-620+"px bottom");
  var tz = wh - $("#page-wrapper").height();
  tz = (tz / 2) - 5;
  $("#page-wrapper").css("margin-top",tz+"px");
  if(ww < 1000){
   $("#hl").css("fontSize","250%");
  }else{
   $("#hl").css("fontSize","650%");
  }//if(ww < 1000)....
   
  if(ww < 560){ //size + pos for mobile
   $("#left-col").css("float","none");
   $("#right-col").css("float","none");
   $("#hl").css("margin-left","20px");
   $("#text_2").css("top",wh-300+"px");
   $("#text_2").css("margin-left","20px");
   $("#logo").css("margin-left","20px");
   $("#text_1").css("margin-left","20px");
   $("#page-wrapper").css("backgroundPosition", ww-200+"px bottom");
   $("#page-wrapper").css("height", wh+70+$("#text_2").height()+"px");
  }//if(ww < 500.....
  
  
 
 }//function setObjects()....
 
 
         
 /* **************************************************************************************************************************************** */        
 /* **************************************************************************************************************************************** */        
         

		 
		 
		 


