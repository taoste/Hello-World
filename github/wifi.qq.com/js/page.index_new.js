(function($){

$(".downloadQr").mouseenter(function(){
    if( !$(".qrcode-wrap").is(":visible") ) $(".qrcode-wrap").slideDown("fast")
}).mouseleave(function(){
    if( $(".qrcode-wrap").is(":visible") ) $(".qrcode-wrap").slideUp("fast")
})

})(jQuery)