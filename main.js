$(document).ready(function(){
  /*navbar-background*/
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

/*Visitor Counting(Fake)*/
function doSetTimeout(i) {
  setTimeout(function() {$('#result').replaceWith('<p id="result">Visitors (by Google Analytics) :'+i+'</p>');}, i*1000);
}

$(document).ready(function fakeVisitors(){
  for (var i = 1; i <= 689; i++)
    doSetTimeout(i);
})

//Carousel Function
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
