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

    owlCarousel.on('translate.owl.carousel', function(event) {
        $('.carousel__text').removeClass('__active').eq(event.page.index).addClass('__active');
    });

    $('._more').click(function() { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }

        return false; // выключаем стандартное действие
    });
});
