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
