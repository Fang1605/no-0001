$(document).ready(function () {
    $('.menu1 ul li:nth-child(2) a').click(function (e) { 
        e.preventDefault();
        // console.log('da click');
        $('html,body').animate({scrollTop:$('.Dongsukien').offset().top}, 1000);
        // console.log($('.phan1').offset().top);
    });
});