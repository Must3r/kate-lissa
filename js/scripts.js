$(document).ready(function () {
  $('.site-slider').slick({
    arrows: false,
    dots: true
  });
});

// Carousel

// Carousel end

var size = $('.product-size .button.active').val();
var color = $('.product-color .button.active').val();
$('.product-size .button').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  size = $(this).val();
  console.log(size);
});
$('.product-color .button').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  color = $(this).val();
  console.log(color);
});