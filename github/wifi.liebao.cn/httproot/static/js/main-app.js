/**
 * App下载入口模块
 * @author: Travis
 * @date:   2014-05-25
 */
define(function(require, exports, module) {
    var Common = require('common'),
		Menu = require('menu');

    var $mod, hash, double=!1;
	
    var App = {
        gamenav: function() {
            $mod = $("#J_GameNavMod");
			if(!double){
				$mod.find('a').click(function(){
					if(this.href.indexOf('doudizhu')!=-1){
					//斗地主
						jsCallbackObj.checkGamePackage("doudizhu.apk");
					}
					else{
					//五子棋
						jsCallbackObj.checkGamePackage("wuziqi.apk");						
					}
				//加入apk接口

				});
				double = !0;
				}
            Common.changePage($mod);
        },
        change: function() {
            hash = window.location.hash.substr(1) || "home";

            if(Detail.config[hash]) {
                Detail.init();
            } else {
                App.gamenav();
            }
        },
        init: function() {
            this.change();
            window.onhashchange = this.change;
            // 埋点
            if(hash) {
                Common.trace(hash);
            }
        }
    };

    // 下载详情
    var Detail = {
        config: {
            yaokong: {dlurl: "http://dl.liebao.cn/kw/yaokong.apk", btn: "安装遥控电脑手机客户端", title: "只差一步就能体验手机遥控电脑", name: "遥控电脑"},
            doudizhu: {dlurl: "http://dl.liebao.cn/kw/doudizhu.apk", btn: "安装单机斗地主客户端", title: "只差一步就能体验局域网斗地主", name: "单机斗地主"},
            wuziqi: {dlurl: "http://dl.liebao.cn/kw/wuziqi.apk", btn: "安装五子棋大师客户端", title: "只差一步就能体验局域网五子棋", name: "五子棋大师"}
        },
        init: function() {
            var cfg = this.config[hash],
                $title, $btn;

            $mod = $("#J_DetailMod");
            $title = $(".J_tit", $mod);
            $btn = $(".J_btn", $mod);

            $title.html(cfg.title);
            $btn.text(cfg.btn).attr("href", cfg.dlurl);
            document.title = cfg.name + " - 猎豹免费WiFi";
            
            if(Common.browser !== "android") {
                $title.html("对不起，该功能暂时只支持安卓手机");
                $btn.addClass("disable").attr("href", "javascript:void(0)").removeAttr("target").removeAttr("download");
            } else {
                if(Common.isWeixin) {
                    $("#J_WXTips").show();
                }
                else if(Common.isKuaipai) {
                    $("#J_KPTips").show();
                }
            }
            

            Common.changePage($mod);
        }
    };

    App.init();
	Menu.init();
});