const promotion = $('.promotion-slider');
promotion.owlCarousel({
    items: 1,
    margin: 0,
    dots: false,
    nav: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
            mouseDrag: false,
            dots: true,
            rewind: true
        }
    }
});
$('.promotion-arrow__prev').click(function() {
    promotion.trigger('prev.owl.carousel');
});
$('.promotion-arrow__next').click(function() {
    promotion.trigger('next.owl.carousel');
});