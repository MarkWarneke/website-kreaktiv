$('body').scrollspy({ target: '#navbar' })

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo'); // Animation mit Zeit von 1500 und easeInOutExpo
        event.preventDefault();
    });
});
