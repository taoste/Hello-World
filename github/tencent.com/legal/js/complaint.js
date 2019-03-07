//微信弹出层
var addWechatTabEvent = function(){
    var $wechatTab = $("#js-wechat-tab"),
        $wechatLayer = $("#js-wechat-layer");

    var $wechatEntrance = $wechatLayer.find(".entrance");

    $wechatTab.on("mouseover", function(){
        $wechatLayer.stop().fadeIn(300);
    }).on("mouseout", function(){
        setTimeout(function(){
            if(!$wechatLayer.hasClass("hover")){
                $wechatLayer.stop().fadeOut(300);
            }
        },100);
    });

    $wechatLayer.on("mouseover", function(){
        $(this).addClass("hover");
    }).on("mouseleave", function(){
        $(this).removeClass("hover").stop().fadeOut(300);
    });

    $wechatEntrance.on("click", function(ev) {
        var $target = $(ev.currentTarget);
        var url = $target.data("link");
        window.open(url);
    });
};

//tab点击跳转
var addTabsEvent = function(){
    var $tab = $(".platform");

    $tab.on("click", function(ev) {
        var $target = $(ev.currentTarget);
        var url = $target.data("link");
        if('' !== url){
            window.open(url);
        }
    });
};

$(document).ready(function(){
    addWechatTabEvent();
    addTabsEvent();
});