var iNow = 1;
$(document).on('swipeUp',function(){
    $('.img-box-'+ iNow).attr('class','img-box-' + iNow + ' moveToTop');
    $('.img-box-'+ (iNow+1)).attr('class','img-box-' + (iNow+1) + ' moveFromBottom');
    $('.img-box-'+ (iNow+1)).children().addClass('hide');
    setTimeout(function(){
        $('.img-box-'+ (iNow+1)).children().removeClass('hide');
        iNow++;
    },600)
})
$(document).on('swipeDown',function(){
    $('.img-box-'+ iNow).attr('class','img-box-' + iNow + ' moveToBottom');
    $('.img-box-'+ (iNow-1)).attr('class','img-box-' + (iNow-1) + ' moveFromTop');
    $('.img-box-'+ (iNow-1)).children().addClass('hide');
    setTimeout(function(){
        $('.img-box-'+ (iNow-1)).children().removeClass('hide');
        iNow--;
    },600)
})