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

// scrollspy smooth scrolling

$("body").scrollspy({target: ".navbar", offset: 75});
$("#collapsibleNavbar a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
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

// toggle article content
// needs work, needs to be reworked to one click event controlling multiple buttons seperately
$("#expand-1").click(function(){
  $(".article-hide-1").toggle();
  $(this).text(function(i, text) {
    return text === "Close" ? "Read more" : "Close";
  });
});

$("#expand-2").click(function(){
  $(".article-hide-2").toggle();
  $(this).text(function(i, text) {
    return text === "Close" ? "Read more" : "Close";
  });
});

// fitvids.js
$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $("#video").fitVids();
});

// enable tooltips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// modal with animate.css

$(".modal-content").addClass("animated zoomIn");
var hideDelay = true;
$("#myModal").on("hide.bs.modal",function(e){
if(hideDelay){
  $(".modal-content").removeClass("animated zoomIn").addClass("animated zoomOut");
  hideDelay = false;
   setTimeout(function(){
        $("#myModal").modal("hide");
        $(".modal-content").removeClass("animated zoomOut").addClass("animated zoomIn");
      }, 300);
      return false;
  }
  hideDelay = true;
  return true;
});
