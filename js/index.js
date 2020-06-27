$(document).ready(function () {
$('.nav-toggle button').on('click', function () {
  if($('.site-nav').hasClass('show')){
    $('.site-nav').stop().slideUp('fast',function (){
        $('.site-nav').removeClass('show')
    });
  }
  else{
    $('.site-nav').stop().slideDown('fast',function (){
      $('.site-nav').addClass('show')
  });
  }
  });
$(window).scroll(function(){
  var top=$(document).scrollTop();
  if(top>60){
    $('.top-box').css({"background-color":"#fff","border-bottom-color": "#f0f0f0"});
    $('.site-title').css({"color":"#555"});
    $('.nav-toggle button').css({"color":"#555"});
    $('.menu li a').css({"color":"#555"});
  }
  else{
    $('.top-box').css({"background-color":"rgba(0,0,0,0)","border-bottom-color": "rgba(255, 255, 255, 0.2)"});
    $('.site-title').css({"color":"#fff"});
    $('.nav-toggle button').css({"color":"#fff"});
    $('.menu li a').css({"color":"#fff"});
  }
});


var imgYloc = $(".self img").offset().top;
$(window).scroll(function () {  
    var offsetTop1 = -100 - imgYloc - $(window).scrollTop() + "px";
    var offsetTop2 = 200 - imgYloc - $(window).scrollTop() + "px";
    $(".self img").animate({ top: offsetTop1 }, { duration: 0, queue: false });  
    $("#output-wrap").animate({ top: offsetTop2 }, { duration: 0, queue: false });
}); 
  $(".top-box").css({opacity:0}).animate({opacity:1},1000);
  $(".site-title").slideDown(2000);
  $(".site-nav").css({opacity:0}).animate({opacity:1},3000);


  $('a').click(function(){
    $('html,body').animate({scrollTop:($($(this).attr('href')).offset().top-100)},500);
  });
$(".sidebar-toggle").click(function(){
    var sideBar=$(".sidebar-box");
    var topBox=$(".top-box");
    var selfBox=$(".self");
    var middleBox=$(".middle-box");
    var selfImg=$(".self img");
    var bottomBox=$(".bottom-box");
    var sidebarContent=$(".sidebar-content");
    var findMe=$(".find-me");
    if(!sideBar.hasClass("side-width")){
      sideBar.addClass("side-width");
      topBox.addClass("add-width");
      selfBox.addClass("add-width");
      middleBox.addClass("add-width");
      selfImg.addClass("add-left");
      bottomBox.addClass("add-width");
      sidebarContent.addClass("side-left");
      findMe.addClass("block");
    }
    else{
      sideBar.removeClass("side-width");
      topBox.removeClass("add-width");
      selfBox.removeClass("add-width");
      middleBox.removeClass("add-width");
      selfImg.removeClass("add-left");
      bottomBox.removeClass("add-width");
      sidebarContent.removeClass("side-left");
      findMe.removeClass("block");
    }
  });

var sqls = [ window.matchMedia('(max-width:1045px')]
function mediaMatches(){
  if(sqls[0].matches){
    var sideBar=$(".sidebar-box");
    var topBox=$(".top-box");
    var selfBox=$(".self");
    var middleBox=$(".middle-box");
    var selfImg=$(".self img");
    var bottomBox=$(".bottom-box");
    var sidebarContent=$(".sidebar-content");
    var findMe=$(".find-me");
    sideBar.removeClass("side-width");
    topBox.removeClass("add-width");
    selfBox.removeClass("add-width");
    middleBox.removeClass("add-width");
    selfImg.removeClass("add-left");
    bottomBox.removeClass("add-width");
    sidebarContent.removeClass("side-left");
    findMe.removeClass("block");
  }
}
mediaMatches();
for(var i= 0;i<sqls.length;i++){
  sqls[i].addListener(mediaMatches);
}

  (function(){
    $(".item1").addClass("selected").parents().siblings().children().removeClass("selected");
  }());
$(window).scroll(function () {  
  var top1 = -1;
  var scrollTop = $(window).scrollTop();
  if(scrollTop > top1){
      $(".item1").addClass("selected").parents().siblings().children().removeClass("selected");
      return false;
  }
});
$(window).scroll(function () {  
  var top1 = $("#about").offset().top - 120;
  var scrollTop = $(window).scrollTop();
  if(scrollTop > top1){
      $(".item2").addClass("selected").parents().siblings().children().removeClass("selected");
      return false;
  }
});
$(window).scroll(function () {  
  var top2 = $("#activity").offset().top - 120;
  var scrollTop = $(window).scrollTop();
  if(scrollTop > top2){
      $(".item3").addClass("selected").parents().siblings().children().removeClass("selected");
      return false;
  }
});
$(window).scroll(function () {  
  var top3 = $("#project").offset().top - 120;
  var scrollTop = $(window).scrollTop();
  if(scrollTop > top3){
      $(".item4").addClass("selected").parents().siblings().children().removeClass("selected");
      return false;
  }
});
$(window).scroll(function () {  
  var top4 = $("#link").offset().top - 220;
  var scrollTop = $(window).scrollTop();
  if(scrollTop > top4){
      $(".item5").addClass("selected").parents().siblings().children().removeClass("selected");
      return false;
  }
});
});