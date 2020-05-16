/**
* MSlide.js (Mobile Slide)
* @Author  Travis
* @Contact https://github.com/godxiaoji
* @Version 0.0.1a
*/
(function(window) {
    var navigator = window.navigator,
        userAgent = navigator.userAgent.toLowerCase();

    var isAndroid = /android/i.test(userAgent);

    // TODO 未考虑wp的情况
    var touchstart = 'touchstart',
        touchmove = 'touchmove',
        touchend = 'touchend';

    // 样式修正
    var Style = {
        // 样式前缀
        prefix: (function() {
            var vendors = 't,webkitT,MozT,msT,OT'.split(','),
                style = document.createElement('div').style,
                t, i = 0;
            for (; i < vendors.length; i++) {
                t = vendors[i] + 'ransform';
                if (t in style) {
                    style = null;
                    return vendors[i].substr(0, vendors[i].length - 1);
                }
            }
            style = null;
            return '';
        })(),
        // 加入样式前缀，css和js驼峰式
        addPrefix: function(style, camel) {
            if (this.prefix === '') {
                return style;
            }
            return camel ? 
                (this.prefix + style.charAt(0).toUpperCase() + style.substr(1)) :
                ('-' + this.prefix.toLowerCase() + '-' + style);
        }
    };

    // 获取完整样式
    var cssTransform = Style.addPrefix('transform'),
        cssTransition = Style.addPrefix('transition'),
        transform = Style.addPrefix('transform', true),
        transitionDuration = Style.addPrefix('transitionDuration', true);

    var Slide = function(options) {
        // 设置配置
        this.options = options || {};

        this.target = typeof this.options.selector === 'string' ? document.querySelector(this.options.selector) : this.options.selector; // 获取包裹元素
        this.list = this.options.listSelector ? this.target.querySelector(this.options.listSelector) : this.target.children[1]; // 获取列表
        this.target.style.overflowX = 'hidden';
        // 添加滑动事件
        this.target.addEventListener(touchstart, this, false);
        this.setItems();

        // 加入设置
        var i, allowAdd = 'index,onSlide,autoPlay,interval';
        for(i in this.options) {
            if(allowAdd.indexOf(i) !== -1) {
                this[i] = this.options[i];
            }
        }

        // banner选项
        // 获取上一元素
        if(this.options.prevSelector) {
            this.prev = typeof this.options.prevSelector === 'string' ? document.querySelector(this.options.prevSelector) : this.options.prevSelector;
            this.prev.addEventListener('click', this, false);
        }
        // 获取下一元素
        if(this.options.nextSelector) {
            this.next = typeof this.options.nextSelector === 'string' ? document.querySelector(this.options.nextSelector) : this.options.nextSelector;
            this.next.addEventListener('click', this, false);
        }

        this.to(this.index);
        this.running = false;
        if (this.autoPlay) {
            this.start();
        };
    };

    Slide.prototype = {
        // 是否自动播放（配合幻灯片用）
        autoPlay: false,
        // 切换间隔
        interval: 4000,
        // 动画间隔
        duration: 100,
        // 当前index
        index: 0,
        // 元素宽度
        itemWidth: 0,
        // 获取items最后索引
        getLastIndex: function() {
            return this.items.length - 1;
        },
        // 获取循环的索引
        getCircleIndex: function(step) {
            var length = this.items.length;
            return (this.index + length + step % length) % length;
        },
        // 设置列表项
        setItems: function() {
            // 设置滑动样式属性
            var itemWidth = this.target.offsetWidth;

            this.itemWidth = itemWidth;
            this.items = [].slice.call(this.list.children, 0); // 获取列表项

            this.list.style.cssText = [
                'width:' + (itemWidth * this.items.length) + 'px',
                cssTransform + ':translate3d(' + ( - itemWidth * this.index) + 'px,0px,0px)',
                cssTransition + ':' + cssTransform + ' 0ms'
            ].join(";");

            this.items.forEach(function(item) {
                item.style.width = itemWidth + 'px';
            });
        },
        /* 事件 */
        // 事件处理
        handleEvent: function(e) {
            switch (e.type) {
                case touchstart:
                    this.onTouchStart(e);
                    break;
                case touchmove:
                    this.onTouchMove(e);
                    break;
                case touchend:
                    this.onTouchEnd(e);
                    break;
                case 'click':
                    if (e.target == this.prev) {
                        this.onPrevClick();
                    } else if (e.target == this.next) {
                        this.onNextClick();
                    }
                    break;
            }
        },
        // 滑动后回调事件
        onSlide: function() {},
        // 滑动开始事件-记录坐标
        onTouchStart: function(e) {
            var self = this;

            // 清除幻灯片
            self.clear();
            if(isAndroid) {
                // 安卓兼容touchend监控失效
                // 3秒后认为滑动结束
                self.touchMoveTimeout = setTimeout(function() {
                    self.resetStatus();
                }, 3000);
            }
            // 重置事件
            self.target.removeEventListener(touchmove, self, false);
            self.target.removeEventListener(touchend, self, false);
            self.target.addEventListener(touchmove, self, false);
            self.target.addEventListener(touchend, self, false);
            delete self.horizontal;
            // 记录坐标
            self.touchCoords = {};
            self.touchCoords.startX = e.touches[0].pageX;
            self.touchCoords.startY = e.touches[0].pageY;
            self.touchCoords.timeStamp = e.timeStamp;
        },
        // 滑动过程事件-判断横竖向，跟随滑动
        onTouchMove: function(e) {
            var self = this;

            if (!self.touchCoords) {
                return;
            }
            self.touchCoords.stopX = e.touches[0].pageX;
            self.touchCoords.stopY = e.touches[0].pageY;

            var offsetX = self.touchCoords.startX - self.touchCoords.stopX,
                absX = Math.abs(offsetX),
                absY = Math.abs(self.touchCoords.startY - self.touchCoords.stopY);
            if (typeof self.horizontal !== 'undefined') {
                // 首次
                if (offsetX !== 0) {
                    // bug hack
                    e.preventDefault();
                }
            } else {
                // 首次move确认是否水平移动
                if (absX > absY) {
                    self.horizontal = true;
                    if (offsetX !== 0) {
                        e.preventDefault();
                    }
                    clearTimeout(self.touchMoveTimeout);
                } else {
                    delete self.touchCoords;
                    self.horizontal = false;
                    return;
                }
            }
            var itemWidth = self.itemWidth,
            active = self.index,
            translateX = active * itemWidth,
            last = self.getLastIndex();
            if ((active === 0 && offsetX < 0) || (active == last && offsetX > 0)) {
                translateX += Math.ceil(offsetX / Math.log(Math.abs(offsetX)));
            } else {
                translateX += offsetX;
            }
            if (absX < itemWidth) {
                self.list.style[transform] = 'translate3d(' + -translateX + 'px, 0px, 0px)';
            }
        },
        // 滑动结束事件-滑到指定位置，重置状态
        onTouchEnd: function(e) {
            var self = this;

            clearTimeout(self.touchMoveTimeout);
            self.target.removeEventListener(touchmove, self, false);
            self.target.removeEventListener(touchend, self, false);
            if (self.touchCoords) {
                var itemWidth = self.itemWidth,
                absX = Math.abs(self.touchCoords.startX - self.touchCoords.stopX),
                active = self.index,
                transIndex;
                if (!isNaN(absX) && absX !== 0) {
                    if (absX > itemWidth) {
                        absX = itemWidth;
                    }
                    if (absX >= 80 || (e.timeStamp - self.touchCoords.timeStamp < 200)) {
                        if (self.touchCoords.startX > self.touchCoords.stopX) {
                            transIndex = active + 1;
                        } else {
                            transIndex = active - 1;
                        }
                    } else {
                        transIndex = active;
                    }

                    self.to(transIndex);
                    delete self.touchCoords;
                }
            }
            this.resetStatus();
        },
        // 上一项点击事件
        onPrevClick: function() {
            this.clear();
            this.prev();
            if (this.autoPlay) {
                this.run();
            }
        },
        // 下一项点击事件
        onNextClick: function() {
            this.clear();
            this.next();
            if (this.autoPlay) {
                this.run();
            }
        },
        /* 滑动/动画 */
        // 跳转到上一项
        prev: function() {
            this.to(this.index - 1);
        },
        // 跳转到下一项
        next: function() {
            this.to(this.index + 1);
        },
        // 开始幻灯片
        start: function() {
            if (!this.running) {
                this.running = true;
                this.clear();
                this.run();
            }
        },
        // 结束幻灯片
        stop: function() {
            this.running = false;
            this.clear();
        },
        // 清除滑动状态
        clear: function() {
            clearTimeout(this.slideTimer);
            this.slideTimer = null;
        },
        // 启动自动滑动
        run: function() {
            var self = this;
            if(!self.slideTimer) {
                self.slideTimer = setInterval(function() {
                    self.to(self.getCircleIndex(1));
                },
                self.interval);
            }
        },
        // 恢复滑动状态
        resetStatus: function() {
            if(this.autoPlay) {
                this.run();
            }
        },
        // 到指定项
        to: function(toIndex) {
            var active = this.index;
            if(toIndex >= 0 && toIndex <= this.getLastIndex() && toIndex != active) {
                this.slide(toIndex);
            } else {
                this.slide(active);
            }            
        },
        // 滑动实现
        slide: function(toIndex) {
            var self = this;
            self.index = toIndex;

            self.list.style[transitionDuration] = self.duration + 'ms';
            self.list.style[transform] = 'translate3d(' + ( - self.itemWidth * toIndex) + 'px, 0px, 0px)';

            setTimeout(function() {
                self.list.style[transitionDuration] = '0ms';
                // 滑动回调
                self.onSlide(self.index);
            }, self.duration);
        },
        // 刷新
        refresh: function() {
            this.setItems();
            var last = this.getLastIndex();
            if(this.index > last) {
                this.to(last);
            }
        },
        // 销毁
        destroy: function() {
            this.destroyed = true;
            this.stop();

            this.target.removeEventListener(touchstart, this, false);
            this.target.removeEventListener(touchmove, this, false);
            this.target.removeEventListener(touchend, this, false);
            this.prev && this.prev.removeEventListener('click', this, false);
            this.next && this.next.removeEventListener('click', this, false);
            this.target = this.list = this.items = this.prev = this.next = null;
        }
    };

    window.MSlide = Slide;
})(window);