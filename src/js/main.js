// Custom jQuery
$(document).ready(function() {

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
  $(".expand").click(function( event ){
    $(event.currentTarget).parent().prev().slideToggle(400);
    $(this).text(function(i, text) {
      return text === "Close" ? "Read more" : "Close";
    });
  });

  // back-up solution in case above code breaks
  /*$("#expand-1").click(function(){
    $(".article-hide-1").slideToggle(400);
    $(this).text(function(i, text) {
      return text === "Close" ? "Read more" : "Close";
    });
  });*/

  // fitvids.js
  $("#video").fitVids();

  // enable tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // modal with animate.css
  var modalContent = $(".modal-content");
  modalContent.addClass("animated zoomIn");
  var hideDelay = true;
  $("#myModal").on("hide.bs.modal",function(e){
  if(hideDelay){
    modalContent.removeClass("animated zoomIn").addClass("animated zoomOut");
    hideDelay = false;
     setTimeout(function(){
          $("#myModal").modal("hide");
          modalContent.removeClass("animated zoomOut").addClass("animated zoomIn");
        }, 400);
        return false;
    }
    hideDelay = true;
    return true;
  });
});
