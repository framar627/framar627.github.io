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
        reservations = $('#reservations').offset().top,
        adventures = $('#adventures').offset().top,
        contact = $('#contact').offset().top;

    window.addEventListener('resize', function(){
        let river = $('#river').offset().top,
        reservations = $('#reservations').offset().top,
        adventures = $('#adventures').offset().top,
        contact = $('#contact').offset().top;
    });

    $('#link-home').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#link-river').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: river -100
        },600);
    });

    $('#link-reservations').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: reservations -100
        },600);
    });

    $('#link-adventures').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: adventures -100
        },600);
    });

    $('#link-contact').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contact -100
        },600);
    });
});