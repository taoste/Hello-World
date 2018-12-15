"use strict";

if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) <= 9) {
    console.log("您的浏览器版为IE9及以上版本");
    $(function () {
        $('.homePage').remove();

        smoothScroll.init({
            selector: '.nav-menu-content-ie', // Selector for links (must be a valid CSS selector)
            selectorHeader: '.site-header-ie', // Selector for fixed headers (must be a valid CSS selector)
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
            updateURL: true, // Boolean. If true, update the URL hash on scroll
            callback: function callback(anchor, toggle) {}
            // console.log(anchor, toggle);
            // $(toggle).closest("li").siblings().removeClass("active").end().addClass("active");
            // Function to run after scrolling
        });

        $(".nav-menu-content-ie").click(function () {
            $(this).closest("li").siblings().removeClass("active").end().addClass("active");
        });
    });
} else {
    $(function () {
        $('.homePage-ie').remove();

        // $(document).on("click",".site-header .navbar-nav li",function(){
        //     $(this).siblings(".active").removeClass("active");
        //     $(this).addClass("active");
        // })

        // $(document).on("click",".site-header .mobile-navbar li",function(){
        //     $(this).siblings(".active").removeClass("active");
        //     $(this).addClass("active");
        // })

        // $(document).on("click",".site-header .navbar-toggle",function(){
        //    var controlEle=$(this).attr("data-navControl");       
        //    var navControlBr=$(this).attr("data-navControlBr");
        //    console.log(controlEle,navControlBr)
        //    var _that = $(this);
        //    if(navControlBr=="false") {
        //         $(controlEle).addClass('mobile-navbar-show').stop().animate({"opacity":"1"},200,function(){
        //             _that.attr("data-navControlBr","true");
        //         })
        //    }else {
        //         $(controlEle).stop().animate({"opacity":"0"},200,function(){
        //             $(this).removeClass('mobile-navbar-show');
        //             _that.attr("data-navControlBr","false");
        //         })
        //    }
        // })


        // $(document).on("click",".site-header .navbar-toggle",function(){
        //     $(".mobile-navbarBox").stop().fadeIn(200);
        //     $(".mobile-navbarBox").find(".mobile-navbarBox-content").addClass("mobile-navbarBox-content-show");
        //     //web移动端浮层滚动阻止window窗体滚动，方法一：
        //     $("body").css('position','fixed');
        //     //web移动端浮层滚动阻止window窗体滚动，方法二：
        //     $("html,body").css({"height":"100%","overflow":"hidden"});
        // })

        // $(".mobile-navbarBox").on("click",function(){
        //     //web移动端浮层滚动阻止window窗体滚动，方法一：
        //     $("body").css('position','static');
        //     //web移动端浮层滚动阻止window窗体滚动，方法二：
        //     $("html,body").css({"height":"auto","overflow":"initial"});
        //     $(this).find(".mobile-navbarBox-content").removeClass("mobile-navbarBox-content-show").end().stop().fadeOut("fast");
        // })   

        $(document).on("click", ".home-applyForBtn-mobile", function () {
            var href = $(this).attr("data-href");
            window.location.href = href;
        });

        $(document).on("mousedown", ".home-applyForBtn-pc", function () {
            var _that = $(this);
            // $(".home-applyForBtn-pc").addClass("home-applyForBtnDown-pc");
            if ($(this).attr("data-btnLock") == "true") {
                $(".home-QRBox img").removeClass("rubberBand ");
                $(this).attr("data-btnLock", false);
                setTimeout(function () {
                    $(".home-QRBox img").addClass("rubberBand ");
                }, 1);
                setTimeout(function () {
                    _that.attr("data-btnLock", "true");
                }, 1000);
            }
        });

        $(document).on("mouseup", ".home-applyForBtn-pc", function () {
            $(".home-applyForBtn-pc").removeClass("home-applyForBtnDown-pc");
        });

        // 锚点滚动配置
        smoothScroll.init({
            selector: '.anchor-btn', // Selector for links (must be a valid CSS selector)
            selectorHeader: '.site-header', // Selector for fixed headers (must be a valid CSS selector)
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInOutCubic', // Easing pattern to use
            offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
            updateURL: true, // Boolean. If true, update the URL hash on scroll
            callback: function callback(anchor, toggle) {
                // console.log(anchor, toggle);
                $(toggle).closest("li").siblings().removeClass("active").end().addClass("active");
            } // Function to run after scrolling
        });

        // 图标淡入淡出配置
        var sr = ScrollReveal();
        sr.reveal('.home-appBg', { reset: true, origin: 'right', duration: 1500, distance: "50px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.modeil-home-appBg', { reset: true, duration: 1500, distance: "10px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.about-details-img1', { reset: true, origin: 'left', duration: 1500, distance: "50px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.about-details-img2', { reset: true, origin: 'left', duration: 1500, distance: "50px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.about-details-img3', { reset: true, origin: 'right', duration: 1500, distance: "50px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.about-details-img4', { reset: true, origin: 'right', duration: 1500, distance: "50px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.about-details-img5', { reset: true, origin: 'left', duration: 1500, distance: "50px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.about-details-img6', { reset: true, origin: 'right', duration: 1500, distance: "50px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.privilege-details-iconBox', { reset: true, duration: 1000, distance: "20px", opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.contact-way-iconBox', { reset: true, duration: 1500, opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });
        sr.reveal('.contactMobileIconBox', { reset: true, duration: 1500, opacity: 0.2, easing: 'cubic-bezier(.26,1,.81,.95)' });

        // 监测滚动条事件效果配置
        var scollActive = new ScollActive({
            ele: ["#home", "#about", "#expense", "#privilege", "#qa", "#contact"],
            offsetHeightEle: ".site-header",
            lastEle: "#contact",
            fn: function fn(data) {
                $(".site-header a[href='" + data + "']").closest("li").siblings().removeClass("active").end().addClass("active");
                $(".mobile-navbarBox a[href='" + data + "']").closest("li").siblings().removeClass("active").end().addClass("active");
            }
        });
        $(window).resize(function () {
            scollActive.scollRangeFn();
        });

        //屏蔽统计字段
        $(".homePage").prevAll("a[title='站长统计']").css('display', 'none');

        //particlesJS配置
        // particlesJSInit();

        // canvasShow();
    });
}