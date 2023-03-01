const promotion = $('.promotion-slider');
promotion.owlCarousel({
    items: 1,
    margin: 0,
    dots: true,
    nav: true,
    loop: true,
    responsive: {
        // 0: {
        //     items: 1,
        //     mouseDrag: false,
        //     dots: false,
        //     margin: 0
        // },
        // 720: {
        //     items: 1,
        //     mouseDrag: false,
        //     dots: false,
        //     rewind: true
        // }
    }
});
$('.promotion-arrow__prev').click(function() {
    promotion.trigger('prev.owl.carousel');
});
$('.promotion-arrow__next').click(function() {
    promotion.trigger('next.owl.carousel');
});