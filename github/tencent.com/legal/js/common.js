//大屏主体内容垂直居中
var fixContainner = function(){
    var $wrapper = $("#wrapper"),
        $header  = $("#header"),
        $content = $("#content"),
        $footer = $("#footer"),
        $windows = $(window);

    if($windows.height() > $wrapper.height()){
        var $subContent = $content.children().eq(0);
        var contentNewHeight = $windows.height() - $header.outerHeight() - $footer.outerHeight();
        var subContentNewPadding = (contentNewHeight - $subContent.height()) / 2 ;

        $content.css("height", contentNewHeight + 'px');
        $subContent.css("padding-top", subContentNewPadding + 'px').css("padding-bottom", subContentNewPadding + 'px');
        
    }
    
    $(".content-wrap").css({
    	"opacity":"1",
    	"filter":"alpha(opacity:100)"
    });
};

fixContainner();

//语言切换按钮
var addLanguageEvent = function(){
    var currentLang = $('html').attr('Lang');
    $(".lang-item").on('click', function(){
        var $this = $(this);
        var lang = $this.data('lang');
        var anotherLang = $this.siblings().eq(0).data('lang');
        
        if(lang.indexOf(currentLang) < 0){
			var string_location=location.href.replace(anotherLang, lang);
            window.open(string_location.replace(anotherLang, lang), "_self");
        }
    });
};

//底部copyright年份
function yearNow() {
    var year = new Date().getFullYear();
    $("#footyear").html(year);
}

$(document).ready(function(){
    
    addLanguageEvent();
    
    yearNow();

    $(window).resize(function(){
        fixContainner();
    });
});