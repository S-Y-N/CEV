/*Nav btn*/
$(document).ready(function (){
    let navBtn = $('.nav-icon-btn');
    let navIcon = $('.nav-icon');
    let nav =  $('.header__top-content');

    navBtn.click(function (){
        navIcon.toggleClass('nav-icon--active');
        nav.toggleClass('header__top-content--mobile');
        $('body').toggleClass('no-scroll');
    });
});

/*Phone`s Mask */
mask('[data-tel-input]');

$('[data-tel-input]').each(function(){
    $(this).on('input', function() {
        if($(this).val() == '+'){
            $(this).val('');
        }
    });
    
    $(this).on('blur', function(){
        if($(this).val() == '+'){
            $(this).val('');
        }
    });
});