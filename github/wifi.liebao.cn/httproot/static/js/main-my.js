/**
 * Tool功能大全入口模块
 * @author: Travis
 * @date:   2014-05-10
 */
define(function(require, exports, module) {
    var Common = require('common'),
        Img = require('img'),
        Share = require('share'),
        Caipiao = require('caipiao'),
		oripage = 1;

    var My = {
        init: function() {                                   
			//$(".J_goon").attr("href", Common.getFrom());
			var $goon = $(".J_goon");
			if(Common.isPC()){
				$goon.attr("href", 'http://www.baidu.com/?tn=98012088_4_dg&ch=8');
			}else{
				$goon.attr("href", 'http://m.baidu.com/?from=1010888z');
			}
			$goon.tap(function () {
				if($(this).hasClass('more') || $(this).html() == '直接上网'){
					oripage = 2;
				}
				Common.trace("oripage" + oripage);
            });
            Common.fullscreen();
            Tmpl.init();
            Share.init();
            //Caipiao.myInit();
        }
    };

    var Tmpl = {
        t4: function() {
            var doing = false,
                $my = $("#J_My4");

            $my.find(".J_btn").on("click", function() {
                if(doing === true) {
                    return;
                }
                doing = true;
                var self = this;

                // 发送赞请求
                $.ajax({
                    url: ROOT + "/api/calltool?type=zan",
                    type: "POST",
                    timeout: 20*1000,
                    success: function(data) {
                        doing = false;
                        $my.find(".J_Ft").hide().next().show();
                        $(self).hide().next().show();
//                        滚动
                        Scroll.start();
                    },
                    error: function() {
                        doing = false;
                    }
                });
            });
        },
        t5: function() {
            var doing = false,
                $my = $("#J_My5"),
                $ft = $my.find(".J_Ft"),
                $area;

            $ft.html('<textarea class="txta" placeholder="' + $ft.text() + '"></textarea>');
            $area = $ft.find("textarea");

            $my.find(".J_btn").on("click", function() {
                if(doing === true) {
                    return;
                }
                var self = this;

                if($area.val() != "") {
                    doing = true;
                    $.ajax({
                        url: ROOT + "/api/replymsg",
                        type: "POST",
                        data: {msg: $area.val(), type: 1},
                        timeout: 20*1000,
                        success: function(data) {
                            doing = false;
                            $my.find(".J_Ft").hide().next().show();
                            $(self).hide().next().show();
                            //滚动
                            Scroll.start();
                        },
                        error: function() {
                            doing = false;
                        }
                    });
                } else {
                    $area.attr("placeholder", "多少填点东西嘛^_^");
                }
            });
        },
        t6: function() {
            var $my = $("#J_My6"),
                $title = $my.find(".J_Ft"),
                $cancel = $my.find(".J_cancel"),
                $upload = $my.find(".J_btn"),
                Img3 = Img.init($my.find(".J_img"));

            $upload.find("input").on("change", function() {
                // 准备上传
                var file = this.files[0];
                $upload.hide();
                $cancel.show();
                Img3.maskLoad(true);

                Img3.postFile(file, function(ret, msg) {
                    if(msg === "success") {
                        $title.hide().next().show();
                        //滚动
                        Scroll.start();
                        $cancel.hide();
                        $upload.hide().next().show();

                        if(ret && ret.data && ret.data.thumb) {
                            Img3.loadSrc(ret.data.thumb);
                        }
                    } else {
                        $title.text("传送失败，再试一次看看");
                        $cancel.hide();
                        $upload.show().find("span").text("重新上传");
                    }
                });
            });

            $cancel.on("tap", function() {
                window.location.reload();
            });

            // ie不支持上传
            if(Common.isIE) {
                alert($cancel);
                $cancel.hide();
                $upload.hide().next().show();
            }
        },
        t7: function() {
        },
        // 替换文字图片
        replace: function(arr) {
            var i = 0, len = arr.length,
                $section = $("#J_My" + TMPL),
                $imgBox = $section.find(".J_img"),
                ImgRp = Img.init($imgBox);

            for(; i < len; i++) {
                if(arr[i] === "hd" && HD) {
                    $section.find(".J_Hd").html(HD);
                }
                else if(arr[i] === "ft" && FT) {
                    $section.find(".J_Ft").html(FT);
                }
                else if(arr[i] === "img") {
                    if(IMG) {
                        var imgPath = "/user/" + IMG + "?" + (+new Date());
                        ImgRp.loadSrc(imgPath, function(ret, msg) {
                            if(msg === "error") {
                                // 图片载入失败显示默认图
                                $imgBox.find("img").show();
                            }
                        });
                    } else {
                        $imgBox.find("img").show();
                    }
                }
            }
        },
        init: function() {
            var userMiss = false;

            if(TMPL == null) {
                userMiss = true;
                TMPL = 4;
            }

            if(Tmpl["t"+TMPL]) {
                Common.changePage($("#J_My" + TMPL));
                if(userMiss === false) {
                    this.replace(["hd", "ft", "img"]);
                } else {
                    $("#J_My" + TMPL).find(".J_img").find("img").show();
                }
                this["t"+TMPL]();
            }
            //信息滚动
            Scroll.start();
            // 埋点
            Common.trace("my" + TMPL);
        }
    };

    var Scroll={
        start: function() {
            //微信号信息的滚动
            var $tipShow = $(".J_tipShow"),
                $tip = $tipShow.find(".J_Ft"),
                $tip = $tip.css("display") === "none" ? $tip.next() : $tip,
                $tipContain = $tip.parent(),
                width = $tip[0].offsetWidth ,
                outerWidth = parseInt($tipShow.css("width")),
                scrollLeft = outerWidth < width ? 1 : 0;

            if (scrollLeft) {
                $tipContain.css("width", width + "px").removeClass("tipbox_small").addClass("tipbox_scroll");
            } else {
                $tipContain.removeAttr("style").removeClass("tipbox_scroll").addClass("tipbox_small");
            }
        }
    };

    My.init();
});