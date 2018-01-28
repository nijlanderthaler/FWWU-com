// Custom jQuery

// headroom.js
$(".fixed-top").headroom({
  "offset": 525,
  "tolerance": 5
});

// controls navbar/menu transparency on scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.header-fixed').addClass('transparent');
  } else {
    $('.header-fixed').removeClass('transparent');
  }
});

// hide jumbo-text
$("#hide").click(function(){
    $(".disappear").hide();
});

// make disappear appear again
$(".close").click(function(){
    $(".disappear").show();
});

// toggle disappear onclick to make room for collapsibleNavbar
$("#toggle-jumbo-text").click(function(){
    $(".disappear").toggle();
});
