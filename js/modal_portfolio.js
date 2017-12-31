$(document).ready(function() {
  $('.portfolio-modal').addClass('post-transition');
  $('.portfolio-modal').children('.modal-content').addClass('post-transition');
})

$('.close-modal').on('click touchstart', function(e) {
  if ($('.portfolio-modal').hasClass('post-transition')) {
    $('.portfolio-modal').removeClass('post-transition');
    $('.portfolio-modal').children('.modal-content').removeClass('post-transition');
  }
});