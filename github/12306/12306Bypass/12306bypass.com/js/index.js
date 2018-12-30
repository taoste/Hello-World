$(function () {
    $('#layerslider').layerSlider({
        skinsPath: 'layerslider/skins/',
        animateFirstLayer: true,
        navPrevNext: true,
        navStartStop: false,
        navButtons: false,
        autoPlayVideos: false,
        skin: 'minimal'
    });
    getUpdate();
    setHits();
    var interval_output = setInterval("setHits()", 60000);
    try {
        var hiddenProperty = 'hidden' in document ? 'hidden' :
            'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden' :
            null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function () {
            if (!document[hiddenProperty]) {
                setHits();
                interval_output = setInterval("setHits()", 60000);
            } else {
                clearInterval(interval_output);
            }
        }
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    } catch (e) {
        setInterval("setHits()", 60000);
    }
});
$(window).load(function () {
    changeFooter();
    window.onresize = function () {
        var res;
        if (res) { clearTimeout(res) }
        res = setTimeout(changeFooter(), 20);
    };
});

function setHits() {
    $.post('GetList.ashx', {
        _rid: Math.random()
    },
    function (str) {
        $('#dynamicInfo').html(str);
    });
}
function getUpdate() {
    $.post('log.aspx', {
        visitType: 1
    },
    function (data) {
        $('#version').html(data.version);
        $('#updatedate').html(data.updatedate);
        $('#datasize').html(data.datasize);
    },
    'json')
}
function changeFooter() {
    $('.bottom').css('min-height', 0);
    var rangeIndex = document.documentElement.clientHeight - $('#footer').offset().top - $('#footer').height();
    if (rangeIndex > 0) {
        $('.bottom').css('min-height', rangeIndex);
    } else {
        $('.bottom').css('min-height', 0);
    }
}
