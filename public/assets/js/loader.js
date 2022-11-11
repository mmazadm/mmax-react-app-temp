(function ($) {
    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    });
/*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        //if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {
                //active wow
                wow.init();
            });
        //}
    }

    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(document).ready(function () {
        preloader();
    });
})(window.jQuery);