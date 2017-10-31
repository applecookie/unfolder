$(document).ready(function() {
    var owlCarousel = $('.owl-carousel');
    owlCarousel.owlCarousel({
        callbacks: true,
        items: 1,
        loop: true,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navClass: ['owl-prev _ripple', 'owl-next _ripple'],
        navText: [
            '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n' +
            '    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n' +
            '    <path d="M0 0h24v24H0z" fill="none"/>\n' +
            '</svg>',
            '<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n' +
            '    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n' +
            '    <path d="M0 0h24v24H0z" fill="none"/>\n' +
            '</svg>'
        ]
    });

    owlCarousel.on('translate.owl.carousel', function(event) {
        $('.carousel__text').removeClass('__active').eq(event.page.index).addClass('__active');
    });


    // $('.fab._share').on('click', function(e) {
    //     e.preventDefault();
    //
    //
    // });

    var $more = $('._more');
    var $window = $(window);

    if ($window.scrollTop() > 0) {
        $more.remove();
    } else {
        $more.on('click', function() {
            var scroll_el = $(this).attr('href');
            var $scroll_el = $(scroll_el);

            if ($scroll_el.length !== 0) {
                $('html, body').animate({ scrollTop: $scroll_el.offset().top }, 500);
                $more.remove();
                $window.off('scroll');
            }

            return false;
        });

        $window.on('scroll', function() {
            $more.remove();
            $window.off('scroll');
        });
    }

    $(function() {


        $('._ripple').on('click', function (event) {
            // event.preventDefault();

            var $div = $('<div/>'),
                btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;



            $div.addClass('ripple-effect');
            var $ripple = $(".ripple-effect");

            $ripple.css("height", $(this).height());
            $ripple.css("width", $(this).height());
            $div
                .css({
                    top: yPos - ($ripple.height()/2),
                    left: xPos - ($ripple.width()/2)
                    // background: $(this).data("ripple-color")
                })
                .appendTo($(this));

            window.setTimeout(function(){
                $div.remove();
            }, 2000);
        });

    });
});
