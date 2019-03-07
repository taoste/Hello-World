var addBannerEvents = function() {
    // banner背景图表的闪烁效果
    var $icons = $(".icon-wrap i");
    var len = $icons.length;
    var max = parseInt(len - 1); // 正中的qq和文字不要闪烁。
    //var max = 3;
    var array = [];
    var map = {};
    var i = 0;
    while (i < max) {
        // var index = parseInt(Math.random() * max); // 随机
        var index = i; // 全部
        if (!map[index]) {
            array.push({
                index: index,
                duration: parseInt(Math.random() * 500) + 1000
            });
            map[index] = 1;
        }
        i++;
    }

    var interval = 2000;
    var twinkle = function($el, duration) {
        $el.animate({opacity: 0.3}, duration, "swing", function() {
            $el.animate({opacity: 1}, duration);
        });
    };
    setInterval(function() {
       for (var i = 0; i < array.length; i++) {
           var item = array[i];
           twinkle($($icons[item.index]), item.duration);
       }
    },  interval);

};

$(function(){
    addBannerEvents();
});