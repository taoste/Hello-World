/**
 * Poweroff遥控关机模块
 * @author: Travis
 * @date:   2014-05-10
 */
define(function(require, exports, module) {
    var Common = require('common');
	var prefetch = new Image();
		prefetch.src = '/static/css/images/confirm.png';
    var $mod = $("#J_PoweroffMod"),
        $title = $mod.find(".J_tit"),
        $poweroffBtn = $mod.find(".J_poweroff"),
        $lockscreenBtn = $mod.find(".J_lockscreen"),
        $cd = $mod.find(".J_time");

    var time = 30,
        timer = null;

    var poweroff = false,
        lockscreen = false;
	
	//myconfirm	
	var myconfirm = {
		obj:document.getElementById('confirm'),
		hide:function(){
			this.obj.style.display = 'none';
			},
		show:function(){
			this.obj.style.display = '';
			},
		bind:function(){
			var that = this,fn = fn || function(){};
			$(that.obj).find('.cbtn').on('tap',function(){
				that.hide();
				fn();
				return false;		
			});
		},
		init:function(tit,con,btn,fn){
			var that = this;
			$(that.obj).find('h3').text(tit||'警告');
			$(that.obj).find('p').text(con||'出现未知错误');
			$(that.obj).find('.cbtn').text(btn||'确定');
			that.bind(fn);
			return that;
		}	
	};
		
	//授权
	var supersu = {

		allow:function(){
			myconfirm.hide();
			},
		refuse:function(){
			myconfirm.init('授权提示','首次使用关机、关屏功能需授权，已向电脑客户端发送申请。').show();
			}	
		};
		
    var Poweroff = {
        cdStep: function(time) {
            var arr = (time > 9 ? time + "" : "0" + time).split(""),
                i = 0, len = arr.length,
                html = "";

            for(; i < len; i++) {
                html += '<em class="n' + arr[i] + '"></em>';
            }
            $cd.html(html);
        },
        // 关机倒计时
        cd: function() {
            if(poweroff === "doing") {
                return;
            }
            var self = Poweroff,
                status = poweroff,
                btnClass = "poweroff_btn J_poweroff",
                type = poweroff === false ? "poweroff" : "unpoweroff";

            clearInterval(timer);
            poweroff = "doing";
            callback = typeof callback === "function" ? callback : function() {};

            // 通信
            $.ajax({
                url: ROOT + "/api/calltool?type=" + type,
                type: "POST",
                dataType: "json",
                timeout: 5*1000,
                success: function(json) {
					
					if(json.code=="0"){
						supersu.refuse();
						poweroff = false;

					}else {
						poweroff = !status;
						// 关机成功，开始倒计时
						if(poweroff) {
							var t = time;
	
							self.cdStep(t);
							timer = setInterval(function() {
								if(--t) {
									self.cdStep(t);
								} else {
									// 关机成功
									clearInterval(timer);
									$poweroffBtn[0].className = btnClass + " poweroff_ok";
									$title.text("已关闭电脑咯");
									// 右上角改为直接上网
									// $("#J_More").hide().next().show();
								}
							}, 1000);
							// 关机
							$poweroffBtn[0].className = btnClass + " poweroff_cd";
							$title.text("取消关闭电脑");
						} else {
							// 取消关机
							$poweroffBtn[0].className = btnClass;
							$title.text("遥控关闭电脑");
						}
					}
                },
                error: function() {
                    poweroff = status;
                    //alert("操作失败");
					myconfirm.init('操作失败','亲，网络好像出问题了，请检查网络连接是否正常！').show();
                }
            });
        },
        // 锁屏
        lockscreen: function() {
            if(lockscreen === "doing") {
                return;
            }
            var status = lockscreen,
                type = lockscreen === false ? "lockscreen" : "unlockscreen";

            lockscreen = "doing";
            callback = typeof callback === "function" ? callback : function() {};

            $.ajax({
                url: ROOT + "/api/calltool?type=" + type,
                type: "POST",
                dataType: "json",
                timeout: 5*1000,
                success: function(json) {
					
					if(json.code=="0"){						
						supersu.refuse();
						lockscreen = false;
						
					}
					else{
						
							
						if(!status) {
							$lockscreenBtn.addClass("lockscreen_on");
						} else {
							$lockscreenBtn.removeClass("lockscreen_on");
						}
						// 开关间隔，防止快速点击
						setTimeout(function() {
							lockscreen = !status;
						}, 2000);
					}
                },
                error: function() {
                    lockscreen = status;
                    //alert("操作失败");
					myconfirm.init('操作失败','亲，网络好像出问题了，请检查网络连接是否正常！').show();
                }
            });
        }
    };
    
    function init() {
        // hack
        $poweroffBtn.on("tap", Poweroff.cd);
        $lockscreenBtn.on("tap", Poweroff.lockscreen);
    }

    module.exports = {
        init: init,
        start: function() {
        },
        end: function() {
        }
    };
});