$(document).ready(function(){
  $('.site-slider').slick({
    arrows: false,
    dots: true
  });
});

// Carousel
let currentImage = $('.product-gallery-thumbs button.active').find('img')[0].src
console.log(currentImage)
$('.product-gallery-image').append(`<img src="${currentImage}" />`)
$('.product-gallery-thumbs button').click(function() {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
  currentImage = $(this).find('img')[0].src
  $('.product-gallery-image img').replaceWith(`<img src="${currentImage}" />`)
})
// Carousel end


// Product values and behavior
let quantity = parseInt($('.product-quantity .counter-number').val())
let size = $('.product-size .button.active').val()
let color = $('.product-color .button.active').val()
let isFav = false
console.log(isFav)
$('.product-size .button').click(function() {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
  size = $(this).val()
  console.log(size)
})
$('.product-color .button').click(function() {
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
  color = $(this).val()
  console.log(color)
})
$('.expansion-panel-button').click(function() {
  $(this).prev().toggleClass('open')
  if ($(this).prev().hasClass('open')) {
    $(this).children('img').css('transform', 'rotate(180deg)')
  } else {
    $(this).children('img').css('transform', 'rotate(0deg)')
  }
})
$('.product-quantity .counter .counter-minus').click(function() {
  if (quantity > 1) {
    quantity -= 1
    $(this).parent().find('.counter-number').val(quantity)
  }
})
$('.product-quantity .counter .counter-plus').click(function() {
  quantity += 1
  $(this).parent().find('.counter-number').val(quantity)
})
$('.wishlist input[type=checkbox]').click(function(e) {
  isFav = e.target.checked
  if (isFav) {
    $(this).parent().find('.wishlist-icon').html('&hearts;')
  } else {
    $(this).parent().find('.wishlist-icon').html('&#9825;')
  }
})