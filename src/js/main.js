$(document).ready(() => {
    const owlCarousel = $('.owl-carousel');
    owlCarousel.owlCarousel({
        callbacks: true,
        items: 1,
        loop: true,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 7000,
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
            '</svg>',
        ],
    });

    owlCarousel.on('translate.owl.carousel', event => {
        $('.carousel__text').removeClass('__active').eq(event.page.index).addClass('__active');
    });


    $('.nets__link').on('click', function(e) {
        e.preventDefault();
        const link = $(this).attr('href');

        setTimeout(() => { location.href = link; }, 500);
    });

    // $('.fab._share').on('click', function(e) {
    //     e.preventDefault();
    //
    //
    // });

    const $more = $('._more');
    const $window = $(window);

    if ($window.scrollTop() > 0) {
        $more.remove();
    } else {
        $more.on('click', function() {
            const scrollEl = $(this).attr('href');
            const $scrollEl = $(scrollEl);

            if ($scrollEl.length !== 0) {
                $('html, body').animate({ scrollTop: $scrollEl.offset().top }, 500);
                $more.remove();
                $window.off('scroll');
            }

            return false;
        });

        $window.on('scroll', () => {
            $more.remove();
            $window.off('scroll');
        });
    }

    $('._ripple').on('click', function(event) {
        // event.preventDefault();

        const $this = $(this);
        const $div = $('<div/>');
        const btnOffset = $this.offset();
        const xPos = event.pageX - btnOffset.left;
        const yPos = event.pageY - btnOffset.top;

        $div.addClass('ripple-effect');
        const $ripple = $('.ripple-effect');

        const height = $this.height();
        $ripple.css('height', height);
        $ripple.css('width', height);
        $div
            .css({
                top: yPos - ($ripple.height() / 2),
                left: xPos - ($ripple.width() / 2),
                // background: $(this).data("ripple-color")
            })
            .appendTo($this);

        window.setTimeout(() => $div.remove(), 2000);
    });
});
