$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-name');
        if (valor == 'all') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let river = $('#river').offset().top,
        fork = $('#fork').offset().top,
        wilderness = $('#wilderness').offset().top,
        contact = $('#contact').offset().top;

    window.addEventListener('resize', function () {
        let river = $('#river').offset().top,
            fork = $('#fork').offset().top,
            wilderness = $('#wilderness').offset().top,
            contact = $('#contact').offset().top;
    });

    $('#link-trips').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#link-river').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: river - 100
        }, 600);
    });

    $('#link-fork').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: fork - 100
        }, 600);
    });

    $('#link-wilderness').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: wilderness - 100
        }, 600);
    });

    $('#link-contact').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact - 100
        }, 600);
    });
});