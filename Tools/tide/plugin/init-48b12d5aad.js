$(document).ready(function() {
    var scrollTop = $(window).scrollTop();
    setTimeout(() => {
        $(window).scrollTop(1);
        setTimeout(() => {
            $(window).scrollTop(scrollTop);
        }, 0);
    }, 0);

    window.$nightSky = $('#night-sky');
    window.$desktopNightSkyImg = $('#night-sky-desktop-img');
    window.$mobileNightSkyImg = $('#night-sky-mobile-img');
    window.$bubbleGalaxy = $('#bubble-galaxy');
    window.$desktopBubbleGalaxyImg = $('#bubble-galaxy-desktop-img');
    window.$mobileBubbleGalaxyImg = $('#bubble-galaxy-mobile-img');
    window.nightSkyRectHeight = $nightSky.height();
    window.bubbleGalaxyRectHeight = $bubbleGalaxy.height();
    window.windowHeight = window.innerHeight;

    window.desktopNightSkyTotalHeight = $desktopNightSkyImg.height();
    window.mobileNightSkyTotalHeight = $mobileNightSkyImg.height();
    window.desktopNightSkyRange =
        desktopNightSkyTotalHeight - nightSkyRectHeight;
    window.mobileNightSkyRange = mobileNightSkyTotalHeight - nightSkyRectHeight;

    window.windowHeight = window.innerHeight;
    window.desktopBubbleGalaxyTotalHeight = $desktopBubbleGalaxyImg.height();
    window.mobileBubbleGalaxyTotalHeight = $mobileBubbleGalaxyImg.height();
    window.desktopBubbleGalaxyRange =
        window.desktopBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;
    window.mobileBubbleGalaxyRange =
        window.mobileBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;

    window.inited = true;

    if (window.isWechat) {
        $('.db-btns a').each(function(i, item) {
            var $item = $(item);
            $item.attr('href', $item.data('href'));
        });
        $('.products a').each(function(i, item) {
            var $item = $(item);
            $item.attr('href', $item.data('href'));
        });
    }

    new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        followFinger: false,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        }
    });

    $desktopNightSkyImg.on('load', function() {
        windowHeight = window.innerHeight;
        desktopNightSkyTotalHeight = $desktopNightSkyImg.height();
        mobileNightSkyTotalHeight = $mobileNightSkyImg.height();
        desktopNightSkyRange = desktopNightSkyTotalHeight - nightSkyRectHeight;
        mobileNightSkyRange = mobileNightSkyTotalHeight - nightSkyRectHeight;
        setNightOffset();
    });

    $mobileNightSkyImg.on('load', function() {
        windowHeight = window.innerHeight;
        desktopNightSkyTotalHeight = $desktopNightSkyImg.height();
        mobileNightSkyTotalHeight = $mobileNightSkyImg.height();
        desktopNightSkyRange = desktopNightSkyTotalHeight - nightSkyRectHeight;
        mobileNightSkyRange = mobileNightSkyTotalHeight - nightSkyRectHeight;
        setNightOffset();
    });

    $desktopBubbleGalaxyImg.on('load', function() {
        windowHeight = window.innerHeight;
        desktopBubbleGalaxyTotalHeight = $desktopBubbleGalaxyImg.height();
        mobileBubbleGalaxyTotalHeight = $mobileBubbleGalaxyImg.height();
        desktopBubbleGalaxyRange =
            desktopBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;
        mobileBubbleGalaxyRange =
            mobileBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;
        setGalaxyOffset();
    });

    $mobileBubbleGalaxyImg.on('load', function() {
        windowHeight = window.innerHeight;
        desktopBubbleGalaxyTotalHeight = $desktopBubbleGalaxyImg.height();
        mobileBubbleGalaxyTotalHeight = $mobileBubbleGalaxyImg.height();
        desktopBubbleGalaxyRange =
            desktopBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;
        mobileBubbleGalaxyRange =
            mobileBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;
        setGalaxyOffset();
    });

    $(window).on('resize', function() {
        windowHeight = window.innerHeight;
        desktopNightSkyTotalHeight = $desktopNightSkyImg.height();
        mobileNightSkyTotalHeight = $mobileNightSkyImg.height();
        nightSkyRectHeight = $nightSky.height();
        desktopNightSkyRange = desktopNightSkyTotalHeight - nightSkyRectHeight;
        mobileNightSkyRange = mobileNightSkyTotalHeight - nightSkyRectHeight;

        desktopBubbleGalaxyTotalHeight = $desktopBubbleGalaxyImg.height();
        mobileBubbleGalaxyTotalHeight = $mobileBubbleGalaxyImg.height();
        bubbleGalaxyRectHeight = $bubbleGalaxy.height();
        desktopBubbleGalaxyRange =
            desktopBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;
        mobileBubbleGalaxyRange =
            mobileBubbleGalaxyTotalHeight - bubbleGalaxyRectHeight;

        setNightOffset();
        setGalaxyOffset();
    });

    $(document).on('scroll', function() {
        setNightOffset();
        setGalaxyOffset();
    });

    $('.follows .wechat').on('click', function() {
        $('body').addClass('show-wechat-qrcode');
    });

    $('#showDownloadQrcode').on('click', function() {
        $('body').addClass('show-download-qrcode');
    });

    $('.close-qrcode').click(function() {
        $('body').removeClass('show-download-qrcode show-wechat-qrcode');
    });
});

function setNightOffset() {
    var rect = $nightSky[0].getBoundingClientRect();
    var rectTop = rect.top;
    var isOut = nightSkyRectHeight < -rectTop;
    if (isOut) {
        return;
    }
    var isEnter = rectTop < windowHeight;
    if (isEnter) {
        var offsetExponent =
            (windowHeight - rectTop) / (windowHeight + nightSkyRectHeight);
        var desktopOffset = parseInt(desktopNightSkyRange * offsetExponent);
        var mobileOffset = parseInt(mobileNightSkyRange * offsetExponent);
        $desktopNightSkyImg.animate({ translateY: -desktopOffset + 'px' }, 0);
        $mobileNightSkyImg.animate({ translateY: -mobileOffset + 'px' }, 0);
        return;
    }
}

function setGalaxyOffset() {
    var rect = $bubbleGalaxy[0].getBoundingClientRect();
    var rectTop = rect.top;
    var isOut = bubbleGalaxyRectHeight < -rectTop;
    if (isOut) {
        return;
    }
    var isEnter = rectTop < windowHeight;
    if (isEnter) {
        var offsetExponent =
            (windowHeight - rectTop) / (windowHeight + bubbleGalaxyRectHeight);
        var desktopOffset = parseInt(desktopBubbleGalaxyRange * offsetExponent);
        var mobileOffset = parseInt(mobileBubbleGalaxyRange * offsetExponent);
        $desktopBubbleGalaxyImg.animate(
            { translateY: -desktopOffset + 'px' },
            0
        );
        $mobileBubbleGalaxyImg.animate({ translateY: -mobileOffset + 'px' }, 0);
        return;
    }
}
