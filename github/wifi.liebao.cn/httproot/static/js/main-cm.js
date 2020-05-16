/**
 * 猎豹清理大师
 * @author: Lian
 * @date:   2014-09-24
 */
define(function (require, exports, module) {
    var Common = require('common');

    var Cm = {
        url: "http://bj.download.ijinshan.com/clean_master/cleanmaster_cn_100023.apk",
        iframeLink:"", //iframe的链接
        isShow: 1, //是否显示推广
        bind: function () {
            //下载
            var $cm = $("#J_CM"),
                $btn = $cm.find(".J_btn"),
                self = this;

            //获得下载地址
            self.getLink($btn);
            $btn.tap(function () {
                $cm.hide();
				Common.trace("cm" + CLICK + "_downcm");
				window.open($(this).attr('url'));
                setTimeout(function(){
					window.location.href = self.iframeLink; //更改页面url
				},1500);
            })

            //关闭
            var $close = $cm.find(".J_close");
            $close.tap(function () {
                $cm.hide();
				Common.trace("cm" + CLICK + "_closecm");
                window.location.href = self.iframeLink; //更改页面url
            })
        },
        getLink: function (elem) {
            var self = this;
            //获得下载链接
            $.ajax({
                url: ROOT + "/api/apkpath?name=cleanmaster",
                type: "POST",
                data: null,
                timeout: 20 * 1000,
                success: function (json) {
                    var href = "";
                    json = $.parseJSON(json);
                    if (json && json.code && json.data) {
                        href = json.data.apk;
                    }
                    href = href ? href : self.url;
                    elem.attr("url", href);
                },
                error: function () {
                    elem.attr("href", self.url);
                }
            });
        },
        show: function () {
            var self = this;
            $.ajax({
                url: ROOT + "/api/queryinfo?type=4",
                type: "POST",
                data: null,
                timeout: 20 * 1000,
                success: function (json) {
                    json = $.parseJSON(json);
                    if(json && Number(json.code)) {
                        $("#J_CM").show();
                        self.isShow = 0; //不再显示推广
                    }else{
                        window.location.href = self.iframeLink; //更改页面url
                    }
                },
                error: function () {}
            });
        },
        init: function () {
            var self = this;
            var $frame = $("#J_Frame")[0];
            self.iframeLink = $frame.src = Common.getFrom();
            if(self.isShow){
                self.show();
				Common.trace("cm" + CLICK + "&url="+self.iframeLink);
            }else{
                $("#J_CM").hide();
            }
            this.bind();
        }
    };

    Cm.init();

});