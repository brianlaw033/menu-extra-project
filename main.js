$(document).ready(function(){
$('#navPress').click(function shownoshow(){
  var myVar = $('#navToggle').hasClass('in');
  if (myVar === true){
    $('.navbar').removeAttr("background-color")
    $('.navbar').css('background-color', 'transparent')
  }
  else {
    $('.navbar').removeAttr("background-color")
    $('.navbar').css('background-color', '#F15A29')
  }
})
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
