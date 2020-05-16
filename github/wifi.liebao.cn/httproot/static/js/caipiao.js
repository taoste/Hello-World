/**
 * 彩票模块推广入口
 * @author: Travis
 * @date:   2014-12-18
 */
define(function(require, exports, module) {
    var Common = require('common');
    
    var apkVer = "7305646";

    var loadIframe;
    function getIntentIframe() {
    	if(!loadIframe){
        	var iframe = document.createElement("iframe");
        	iframe.style.cssText = "display: none; width: 0px; height: 0px;";
        	document.body.appendChild(iframe);
        	loadIframe = iframe;
    	}
    	return loadIframe;
	}

    var Caipiao = {
        apkVer: apkVer,
        appURL: "jiangduoduo-android://",
        dlURL: "http://h5.cp.duba.com/app/hd/dl.html?androidVersion=" + apkVer,
        h5URL: "http://h5.cp.duba.com/app/hd/dl188.html?f=liebaowifi&androidVersion=" + apkVer,
        // 设置为本地包，加快下载
        setLocalApk: function($elem, h5) {
            if(!Common.isWeixin) {
                // 非微信用户下载本地包
                $.ajax({
                    url: ROOT + "/api/apkpath?name=caipiao",
                    type: "POST",
                    dataType: "json",
                    success:function(json) {
                        if(json && json.code == "1") {
                            var url = h5 ? ($elem.data("href") + "&dl=" + encodeURIComponent(json.data.apk) + "&time=" + Date.now()) : json.data.apk;
                            $elem.data("href", url);
                        }
                    },
                    error:function(){}
                });
            }
        },
        timeout: 600,
        open: function(appURL, h5URL, focus) {
            var self = this,
                t = Date.now();

            self.openApp(appURL);
            setTimeout(function() {
                if(!focus && (Date.now() - t < self.timeout + 100)) {
                    window.location.href = h5URL;
                } else {
                    window.location.href = h5URL;
                }
            }, self.timeout);
        },
        // 调起App
        openApp: function(appURL) {
            getIntentIframe().src = appURL;
        },
        myInit: function() {
            var self = this,
                $btn = $("#J_FtCaipiao");

            if(Common.browser === "android") {
                $btn.data("href", self.dlURL).parent().show();
                self.setLocalApk($btn);
                Common.trace("tool_showcaipiao3");
                
                // 按钮点击跳转到落地页
                $btn.on("click", function() {
                    self.open(self.appURL, $(this).data("href"), true);
                    Common.trace("tool_downcaipiao3");
                });
            }
        },
        toolInit: function() {
            var self = this,
                $cp = $("#J_CP"),
                $btn = $cp.find(".J_btn"),
                $nav = $("#J_NavCaipiao");

            //判定是否为android，是的话就显示彩票提示，否则不显示
            if(Common.browser === "android") {
                $btn.data("href", self.dlURL);
                $nav.data("href", self.dlURL);

                self.setLocalApk($btn);
                self.setLocalApk($nav);

                $.ajax({
                    url: ROOT + "/api/queryinfo?type=4",
                    type: "POST",
                    dataType: "json",
                    success:function(json) {
                        if(json && json.code == "1") {
                            $cp.show();
                            Common.trace("tool_showcaipiao1");
                        } else {
                            $nav.parent().show();
                            Common.trace("tool_showcaipiao2");
                        }
                    },
                    error:function(){}
                });
                // 导航点击下载
                $nav.on("click", function() {
                    self.open(self.appURL, $(this).data("href"), true);
                    Common.trace("tool_downcaipiao2");
                });

                // 按钮点击下载
                $btn.on("click", function() {
                    self.open(self.appURL, $(this).data("href"));
                    Common.trace("tool_downcaipiao1");
                });

                // 关闭彩票提示
                $cp.find(".J_close").on("click", function() {
                    $cp.hide();
                    Common.trace("tool_closecaipiao1");
                });
            }else{
                $cp.hide();
            }
        }
        
    }
    
    module.exports = Caipiao;
});