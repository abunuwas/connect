$(document).ready(function(){

    // -------
    // ALL APP
    // -------

    // Ability progressbar and tooltip
    $('.ability').each(function(){
        var value = $(this).data('value');

        $(this).progressbar({
            value : value,
            max : 100
        });
    });

    $(document).tooltip({
        items: '.ability',
        content: function() {
            return $( this ).data('description');
        },
        track: true,
        show: {
            effect: 'show'
        },
        hide: {
            effect: 'hide'
        }
    });


    // ---------
    // LOGGED IN
    // ---------

    // Toggle mobile menu
    $( '.mobile-icon' ).click(function() {
        $('nav.main').slideToggle();
    });

    // Reset when window switches to desktop view
    $(window).resize(function() {
        if ($(window).width() > 620) {
            $('nav.main').show();

        }
    });


    // ---------
    // DASHBOARD
    // ---------

    // Toggle 'close to me' form on radio select

    $('input[name="locationRadios"]').on('change', function(){
        if ($(this).val()=='all') {
             $('.close-to-me').hide();
        } else  {
             $('.close-to-me').show();
        }
    });


    // Expand and Collapse Member Profiles

    $('.toggle-member-expand').click(function(e){
        e.preventDefault();

        $(this).closest('.member-card').find('.member-expand').slideToggle(150);

        var $fullProfile = $(this).closest('.member-card').find('.full-profile');

        if ($fullProfile.text() == 'View Full Profile'){
            $fullProfile.text('Collapse')
        } else {
            $fullProfile.text('View Full Profile');
        }
    });

});
