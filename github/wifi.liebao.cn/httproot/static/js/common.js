define(function(require, exports, module) {
    var Base64 = require('base64');
	var ua = navigator.userAgent.toLowerCase();
	
    var browser = "other",
        version = "0",
        weixin = false,
        kuaipai = false;

    (function() {
        var match;
		
        if(ua.indexOf("msie") !== -1 || ua.indexOf("trident") !== -1) {
            browser = "ie";
        }
        else if(ua.indexOf("android") !== -1 || ua.indexOf('linux') !== -1) {
            browser = "android";

            match = ua.match(/android\s*([\d\.]+)/);
            if(match && match[1]) {
                version = match[1].substr(0, 3);
            }
        }
        else if(ua.indexOf("mac") !== -1) {
            browser = "ios";
        }
        // 判断特殊浏览器
        if(ua.indexOf("micromessenger") !== -1) {
            weixin = true;
        }
        else if(ua.indexOf("kuaipai") !== -1) {
            kuaipai = true;
        }
    })();	

    var Common = {
        from: "http://www.duba.com/?f=mwifi",
        hash: window.location.hash,
        trace: function(page) {
            $.ajax({
                url: ROOT + "/api/report?page=" + page,
                type: "POST",
                data: null,
                success: function(data) {}
            });
        },
        // 工具栏切页面
        changePage: function($section) {
			$('#J_SearchBox').show();
            $section.show().siblings().hide();
        },
        // 获取来源页面
        getFrom: function() {
            var eu = this.getQueryString('eu');
            return eu ? Base64.decode(eu) : this.from;
        },
        // 获取url参数
        getQueryString: function(name) {
            var i, params = {},
                key, value, pos,
                search = window.location.search ? window.location.search.substr( 1 ).split("&") : [];

            for(i = 0; i < search.length; i++ ) {
                pos = search[i].indexOf("=");
                if(pos > 0) {
                    key = search[i].substring(0, pos);
                    value = search[i].substring(pos + 1);
                    params[key] = decodeURIComponent(value);
                }
            }
            if(typeof name === "undefined") {
                return params;
            }
            return params[name] ? params[name] : undefined;
        },
        // 全屏
        fullscreen: function() {
            $("#J_Logo").on("tap", function() {
                if(document.webkitIsFullScreen) {
                    document.webkitCancelFullScreen();
                } else {
                    $("#J_Wrap")[0].webkitRequestFullScreen();
                }
            });
        },
		isPC: function(){
			var os = new Array('Lumia',"Nokia","Windows Phone","iPad","ipod","Android","iPhone","BlackBerry","MeeGo","SymbianOS");  // 其他类型的移动操作系统类型，自行添加
			var len = os.length;
			for (var i = 0; i < len; i++) {
				if (ua.indexOf(os[i].toLowerCase()) > 0){
					return false;
				}
			}
			return true;
		},
        browser: browser,
        version: version,
        // 判断兼容ie
        isIE: (browser === "ie" ? true : false),
        isWeixin: weixin,
        isKuaipai: kuaipai
    };

    module.exports = Common;
});