/**
 * Download下载图片模块
 * @author: Travis
 * @date:   2014-05-11
 */
define(function(require, exports, module) {
    var Img = require('img');

    var $btn = $("#J_NavPicUpload"),
        $picMod = $("#J_PicDownloadMod"),
        $picTips = $picMod.find(".J_tips"),
        $picTitle = $picMod.find(".J_tit"),
        $picBtn = $picMod.find(".J_btn"),
        $imgBox = $picMod.find(".J_img");
    
    var Load = {
        cbTxt: "长按即可保存图片",
        path: '',
        callback: function() {
            $picTips.text(Load.cbTxt);
            $picBtn.show().next().hide();
            $imgBox.addClass("loaded");

            // 通知服务端
            $.ajax({
                url: ROOT + "/api/replymsg",
                type: "POST",
                data: {type: 2},
                timeout: 20*1000,
                success: function(data) {},
                error: function() {}
            });

            Query.start();
        },
        show: function(data) {
            if(this.path !== data.img) {
                this.path = data.img;

                // 图片名字
                $picTitle.text(data.img.replace(/.*\/(.*)/,"$1"));
                // 设置按钮链接
                //$picBtn.attr("href", data.img + "?ksfdown=kstrue").hide().next().show();
                $picBtn.hide().next().show();

                $imgBox.removeClass("first");

                // 判断文件逻辑
                var loadImg = this.path;
                if(data.type > 0) {
                    // 非可显示图片 和 文件
                    $picBtn.attr("href", data.img + "?ksfdown=kstrue").text("下载文件").next().text("下载文件");
                    loadImg = "/static/dorpthumb/drop_thumb_" + data.type + ".png";
                    Load.cbTxt = "";
                    $picTips.text("文件正在飞入手机...");
                    Tips.show();
                } else {
                    // 可显示图片
                    $picBtn.attr("href", data.img).text("查看大图").next().text("查看大图");
                    Load.cbTxt = "长按即可保存图片";
                    $picTips.text("图片正在飞入手机...");
                    Tips.hide();
                }

                Img.loadSrc(loadImg, this.callback, "slide");
                return;
            }
            Query.start();
        }
    };

    var Query ={
        count: 0,
        timer: null,
        on: false,
        start: function(once) {
            clearTimeout(this.timer);
            this.on = true;

            if(once) {
                this.timer = setTimeout(this.get, 1000);
            } else {
                this.timer = setTimeout(this.get, 3000);
            }
        },
        end: function() {
            clearTimeout(this.timer);
            this.on = false;
        },
        get: function() {
            if(Query.on) {
                $.ajax({
                    url: ROOT + "/api/querydown",
                    type: "GET",
                    data: {c: ++Query.count},
                    dataType: "json",
                    success: function(json) {
                        if(json && json.code == "1") {
                            Load.show(json.data);
                        } else {
                            Query.start();
                        }
                    },
                    error: function(xhr, msg) {
                        Query.start();
                    }
                });
            }
        }
    };
    
    var Tips = {
        show: function() {
            // 判断兼容4.4微信
            if(Common.isWeixin) {
                $("#J_WXTips").show();
            }
            /* if(Common.isKuaipai) {
                $("#J_KPTips").show();
            } */
        },
        hide: function() {
            $("#J_WXTips").hide();
            //$("#J_KPTips").hide();
        }
    };

    function init() {
        Img = Img.init($imgBox);
		$picBtn.click(function(){
			if(this.innerText=='查看大图'){
				//加入apk接口
				jsCallbackObj.clickLookPhoto();
				}
			});
    }

    module.exports = {
        init: init,
        start: function() {
            Query.start(true);
            //Tips.show();
        },
        end: function() {
            Query.end();
            Tips.hide();
        }
    };
});