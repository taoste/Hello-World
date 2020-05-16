/**
 * Share分享模块
 * @author: Travis
 * @date:   2014-05-22
 */
define(function(require, exports, module) {

var Share = {
    options: {
        url: 'http://wifi.liebao.cn/index.html?v=wifi',
        title: '猎豹免费WiFi2.0',
        summary: '',
        desc: '#猎豹免费WiFi爆出逆天功能#免费WiFi只能上网？NoNoNo！猎豹免费WiFi2.0首创WiFi欢迎页，能猥琐定制别人手机的浏览器主页，炫耀装逼、调戏MM、免费广告全部支持！',
        site: '金山毒霸',
        pics: 'http://dl.liebao.cn/kw/312012.jpg',
        topic: ''
    },
    urls: {
        weibo: 'http://service.weibo.com/share/share.php?appkey=562027542&title={{topic}}{{desc}}&url={{url}}&pic={{pics}}&searchPic=false',
        qq: 'http://connect.qq.com/widget/shareqq/index.html?url={{url}}&desc={{desc}}&title={{title}}&summary={{summary}}&pics={{pics}}&flash=&site={{site}}&style=202&width=24&height=24&showcount=0',
        qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{url}}&showcount=1&desc={{topic}}{{desc}}&summary={{summary}}&title={{title}}&site={{site}}&pics={{pics}}&style=203&width=98&height=22&otype=share',
        tqq: 'http://share.v.t.qq.com/index.php?c=share&a=index&appkey=801477848&url={{url}}&title={{topic}}{{desc}}&pic={{pics}}&line1='
    },
    getURL: function(type) {
        var o = {},
            i, url, o;

        for (i in this.options) {
            o[i] = this.options[i];
        }

        url = this.urls[type];

        o.url += type;
        o.desc = o.desc;
        o.pics = o.pics;

        for (i in o) {
            url = url.replace(('{{' + i + '}}'), encodeURIComponent(o[i] || ''));
        }
        return url;
    },
    init: function(type) {
        var arr = ['weibo', 'tqq'],
            $share = $("#J_Share"),
            i = 0;
        
        for(; i < arr.length; i++) {
            $(".J_" + arr[i], $share).attr("href", this.getURL(arr[i])).attr("target", "_blank");
        }
        
        $share.show();
    }
};

module.exports = Share;

});