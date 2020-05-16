/**
 * Img图片渲染模块
 * @author: Travis
 * @date:   2014-05-10
 */
define(function(require, exports, module) {

    var Img = {
        // 蒙板
        maskTimer: null,
        maskTips: function($img) {
            var $this = this.$mask,
                self = this,
                type;

            // 显示蒙板
            if(parseInt($img.css("top")) < 0) {
                type = "upward";
            }
            else if(parseInt($img.css("left")) < 0) {
                type = "aleft";
            }

            clearTimeout(this.maskTimer);
            if(type) {
                $this[0].className = "mask fade2s mask_" + type;
                $this.show();
                self.maskTimer = setTimeout(function() {
                    $this.hide();
                    $this[0].className = "mask";
                }, 2000);
            }
        },
        maskLoad: function(show) {
            var $this = this.$mask,
                $img = this.$imgBox.find("img");
            if(show) {
                $this[0].className = "mask mask_load";
                // 匹配大小
                if($img[0]) {
                    $this[0].style.cssText = "width: " + $img.css("width")  + 
                    "; height: " + $img.css("height")  + 
                    "; top: " + $img.css("top")  + 
                    "; left: " + $img.css("left");
                }
                $this.fadeIn(200);
            } else {
                $this[0].className = "mask";
                $this.fadeOut(200, function() {
                    // 还原默认
                    $this[0].style.cssText = "display: none";
                });
            }
        },
        // 读取图片
        loadImg: function(file) {
            var URL = window.URL || window.webkitURL,
                img = new Image(),
                self = this;

            if(URL) {
                img.onload = function() {
                    self.maskLoad(false);
                    URL.revokeObjectURL(this.src);

                    var $img = $(self.adapt(this));
                    $img.hide();
                    self.$imgBox.append(img);
                    $img.fadeIn(500, function() {
                        $img.prev().remove();
                        self.maskTips($img);
                    });
                };
                img.src = URL.createObjectURL(file);
            }
            return img;
        },
        loadSrc: function(src, callback, slide) {
            var img = new Image(),
                self = this,
                $slide = this.$slide;

            //animMethod = animMethod === "slideDown" ? animMethod : "fadeIn";
            callback = typeof callback === "function" ? callback : function(status) {};

            img.onload = function() {
                // 取消监听时间
                img.onload = img.onerror = null;
                self.maskLoad(false);

                var $img = $(self.adapt2(this));//this: img
                $img.hide();
                self.$imgBox.append(img);

                if(slide) {
                    $slide.addClass("slidedown");
                    setTimeout(function() {
                        $slide.removeClass("slidedown");
                        $img.show().prev().remove();
                        self.maskTips($img);
                        callback(img, 'success');
                    }, 500);
                } else {
                    $img.addClass("fadein").show();
                    setTimeout(function() {
                        $img.prev().remove();
                        self.maskTips($img);
                        callback(img, 'success');
                    }, 500);
                }
            };

            img.onerror = function() {
                self.maskLoad(false);
                callback(null, 'error');
            };

            self.maskLoad(true);
            img.src = src;
            return img;
        },
        // 图片适应布局
        adapt: function(img) {
            var boxW = this.$imgBox.width(),
                boxH = this.$imgBox.height();

            // 缩放图片
            if(img.width > boxW && img.height > boxH) {
                if(img.width > img.height) {
                    img.width = parseInt((img.width / img.height) * boxH);
                    img.height = boxH;
                } else {
                    img.height = parseInt((img.height / img.width) * boxW);
                    img.width = boxW;
                }
            }

            // 布局图片
            img.style.top = (boxH - img.height) / 2 + "px";
            img.style.left = (boxW - img.width) / 2 + "px";
            return img;
        },
        // 最大220模式
        adapt2: function(img) {
            var boxW = this.$imgBox.width(),
                boxH = this.$imgBox.height();

            // 缩放图片
            if(img.width > boxW || img.height > boxH) {
                if(img.width > img.height) {
                    img.height = parseInt((img.height / img.width) * boxW);
                    img.width = boxW;
                } else {
                    img.width = parseInt((img.width / img.height) * boxH);
                    img.height = boxH;
                }
            }

            // 布局图片
            img.style.top = (boxH - img.height) / 2 + "px";
            img.style.left = (boxW - img.width) / 2 + "px";
            return img;
        },
        // 移动图片
        move: function(img, x, y) {
            if(img && (x !== 0 || y !== 0)) {
                var style = img.style,
                    top = parseInt(style.top),
                    left = parseInt(style.left),
                    boxW = this.$imgBox.width(),
                    boxH = this.$imgBox.height();

                if(top <= 0) {
                    top = Math.min((top + y), 0);
                    top = Math.max(top, (boxH - img.height));
                    style.top = top + "px";
                }
                if(left <= 0) {
                    left = Math.min((left + x), 0);
                    left = Math.max(left, (boxW - img.width));
                    style.left = left + "px";
                }
            }
            return img;
        },
        // 坐标
        touch: {},
        bind: function() {
            var self = this;
            // 绑定拖动事件
            this.$imgBox
            .on("touchstart", function(e) {
                var touch = e.touches[0];
                self.touch = {
                    x: touch.pageX,
                    y: touch.pageY
                };

                //e.preventDefault();
                //e.stopPropagation();
            })
            .on("touchmove", function(e) {
                var touch = e.touches[0],
                    orig = self.touch;

                self.move(this.firstChild, touch.pageX - orig.x, touch.pageY - orig.y);

                self.touch = {
                    x: touch.pageX,
                    y: touch.pageY
                };

                e.preventDefault();
                e.stopPropagation();
            });
        },
        // 发送图片
        post: function(file, callback) {
            var reader = new FileReader();

            reader.onload = function() {
                var imgData = event.target.result,
                    data = {
                        pic: imgData // base64
                    };

                $.ajax({
                    // 图片名字和大小get传
                    url: ROOT + "/api/replypic?name=" + encodeURIComponent(file.name) + "&size=" + encodeURIComponent(file.size),
                    type: "POST",
                    data: data,
                    dataType: "json",
                    timeout: 60*1000,
                    success: function(data) {
                        callback(data, "success");
                    },
                    error: function(xhr, msg) {
                        callback(null, "error");
                    }
                });
            };

            reader.readAsDataURL(file);
        },
        postFile: function(file, callback) {
            var fd = new FormData(),
                xhr = new XMLHttpRequest(),
                self = this;

            fd.append("uploadimg", file);

            xhr.upload.addEventListener("progress", function(e) {
                var percent = Math.round(e.loaded * 100 / e.total);
                self.$mask.find("strong").text(percent + "%");
            }, false);

            xhr.addEventListener("load", function(e) {
                var text = e.target.responseText;
                try {
                    callback(JSON.parse(text), "success");
                } catch(e) {}
            }, false);

            xhr.addEventListener("error", function(e) {
                callback(null, "error");
            }, false);

            xhr.addEventListener("abort", function(e) {
                callback(null, "error");
            }, false);

            xhr.open("POST", ROOT + "/api/replypic?name=" + encodeURIComponent(file.name) + "&size=" + encodeURIComponent(file.size));
            xhr.send(fd);
        }
    };

    function init($elem) {
        this.$imgBox = $elem;
        this.$mask = $elem.next();
        this.$slide = $elem.next().next();
        this.bind();
    }

    init.prototype = Img;

    module.exports = {
        init: function($elem) {
            return new init($elem);
        }
    };
});