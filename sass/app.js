$('img').ready(function(){
    setTimeout(function(){
        $('.loader').fadeOut(200);
        $('p').fadeIn(200);
    }, 3000);
});