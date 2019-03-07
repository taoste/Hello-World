//截取文字长度
var clampTxt = function(){
    var $infos = $("#js-news .list .item .info .info-main");

    $infos.find(".info-title").each(function() {
        $(this).dotdotdot();
    });
    
    $infos.find(".info-summary").each(function() {
        $(this).dotdotdot();
    });
};

//tab点击弹出详情
var addTabsEvent = function(){
    var $list = $("#js-news");
    var $items = $list.find(".list").find(".item");
    var $modal = $(".modal");
    var $dialog = $(".modal-dialog");

    var showPage = function(anchor){
        $(".modal").hide();
        if(anchor){
            var $modal = $('#'+anchor);
            $modal.siblings().removeClass('current').end().addClass('current').show();
            fixBodyScrollEvent(true);
            //弹出层show之后才有高度 再调用自定义滚动条
            beautifyScrollbar(false);
        }
    };

    $items.on("click", function(ev) {
        var $target = $(ev.currentTarget);
        var index = $target.data("index");

        showPage("news-" + index);
    });

    //关闭按钮
    $dialog.find(".i-close").on('click', function(){
        fixBodyScrollEvent(false);
        showPage('');
    });

    //上一页按钮
    $dialog.find(".i-prev").on('click', function(){
        var newIndex = parseInt( $(this).parent().parent().parent().prev().data('index') );
        showPage("news-" + newIndex);
    });

    //下一页按钮
    $dialog.find(".i-next").on('click', function(){
        var newIndex = parseInt( $(this).parent().parent().parent().next().data('index') );
        showPage("news-" + newIndex);
    });

    //阻止遮罩层点击冒泡
    $modal.on('click', function(e){
        e.stopPropagation();
    });
};

//自定义新闻详情滚动条
var beautifyScrollbar = function(resize){
    var $currentModal = $(".modal.current");
    var $currentNewsContent = $currentModal.find('.modal-dialog').find('.main-wrap').find('.news-content');
    var contentHeight = $(window).height() * 0.8 * 0.7;

    $currentNewsContent.css('height',contentHeight+'px');
    if(resize){
        $currentNewsContent.customScrollbar('resize');
    }else{
        if($currentNewsContent.hasClass('beautified')){
            $currentNewsContent.customScrollbar('resize');
            $currentNewsContent.customScrollbar('scrollToY', 0);
            return false;
        }
        $currentNewsContent.customScrollbar();
        $currentNewsContent.addClass('beautified')
    }
};

//禁用或开启body滚动
var fixBodyScrollEvent = function(modal){
    if(modal){
        $("body").bind('mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
        });
    }else{
        $("body").unbind('mousewheel');
    }
};

$(document).ready(function(){
    clampTxt();
    addTabsEvent();

    $(window).resize(function(){
        beautifyScrollbar(true);
    });
});