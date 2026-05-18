$(function() {

  $('#change-color').on('click', function(){
    $('p').css('color', 'skyblue');
  });

  $('#change-text').on('click', function() {
    $('p').text('HELLO');
  });

  $('#fade-out').on('click', function() {
  $('p').fadeOut();
});

  $('#fade-in').on('click', function() {
  $('p').fadeIn();
});
});