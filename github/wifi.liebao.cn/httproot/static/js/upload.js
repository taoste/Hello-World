/**
 * Upload发送图片模块
 * @author: Travis
 * @date:   2014-05-10
 */
define(function(require, exports, module) {

    var Img = require('img');
        Common = require('common');
    
    var hash = "#upload";

    var $picMod = $("#J_PicUploadMod"),
        $picTips = $picMod.find(".J_tips"),
        $picTitle = $picMod.find(".J_tit"),
        $upload = $picMod.find(".J_btn"),
        $cancel = $picMod.find(".J_cancel"),
        $imgBox = $picMod.find(".J_img");

    var Upload = {
        fileName: "",
        callback: function(ret, msg) {
            if(msg === "success") {
                // response: yes
                $picTitle.text("发送成功，去电脑上看看吧");
                $cancel.hide();
                $upload.show().find("span").text("继续发送");
                $imgBox.removeClass("upload").addClass("loaded");

                if(ret && ret.data && ret.data.thumb) {
                    Img.loadSrc(ret.data.thumb);
                } else {
                    // 非图片处理逻辑
                    Img.maskLoad(false);
                }
                // 显示图片名称
                setTimeout(function() {
                    $picTitle.text(Upload.fileName || "");
                }, 1500);
            } else {
                $picTitle.text("发送失败，再试一次看看");
                $cancel.hide();
                $upload.show().find("span").text("重新发送");
            }
        },
        change: function(file) {
            $picTips.text("");
            $picTitle.text("正在努力发送中...");
            $upload.hide();
            $cancel.show();
            Img.maskLoad(true);

            this.fileName = file.name;
            Img.postFile(file, this.callback);
        }
    };

    function init() {
        Img = Img.init($imgBox);
        
        // 绑定上传事件
        $picMod.find("input").on("change", function() {
            if(this.files[0]) {
                Upload.change(this.files[0]);
            }
        })
        .on("click", function() {
            if($(this).val()) {
                //$picTitle.text("该图片刚刚发送啦");
            }
        });

        $cancel.on("tap", function() {
            window.location.reload();
        });

        // 判断兼容ie
        if(Common.isIE) {
            $picTips.text("WP8.1以上版本才能支持发送");
        }
        
        
    }

    module.exports = {
        init: init,
        start: function() {
			if(!Upload.fileName){
            $picTips.text("请选择一张图片发送");
			}

            // 判断兼容4.4微信
            if(Common.version === "4.4") {
                if(Common.isWeixin) {
                    $("#J_WXTips").show();
                }
            }
            if(Common.isKuaipai) {
                $("#J_KPTips").show();
            }
        },
        end: function() {
            $("#J_WXTips").hide();
            $("#J_KPTips").hide();
        }
    };
});