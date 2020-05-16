/**
 * Tool功能大全入口模块
 * @author: Travis
 * @date:   2014-05-10
 */
define(function(require, exports, module) {
    var Common = require('common'),
		Menu = require('menu'),
        Upload = require('upload'),
        Download = require('download'),
        Poweroff = require('poweroff'),
        Caipiao = require('caipiao');

    var $homeMod = $("#J_HomeMod"),
        $findMod = $("#J_FindMod");
	 
    var Report = {
        conifg: {
            home: {page: 'tool'},
            poweroff: {page: 'guanji'},
            upload: {page: 'tupian'},
            download: {page: 'fly'},
            remote: {page: 'yaokong'}
        },
        post: function() {
            var cfg = this.conifg,
                hash = window.location.hash,
                report;

            hash = hash.substr(1);
            report = hash && cfg[hash] && cfg[hash].page || cfg.home.page;
            Common.trace(report);
        },
        init: function() {
            this.post();
        }
    }; 
    
    var Tool = {
        start: function() {
            //Tool.cm();
            Tool.phonehelper();
            $("#J_More").hide();
			//滑动到前一页
			Menu.slide.prev();
        },
        end: function() {
            $("#J_More").show();
        },
        fullscreen: function() {
            // 全屏
            $("#J_Logo").on("click", function() {
                if(document.webkitIsFullScreen) {
                    document.webkitCancelFullScreen();
                } else {
                    $("#J_Wrap")[0].webkitRequestFullScreen();
                }
            });
        },
        cm: function() {
            Caipiao.toolInit();
        },
        phonehelper:function(){
            //判定是否为android,手机助手逻辑
            if(Common.browser === "android"){
                $.ajax({
                    url: ROOT + "/api/phonehelper",
                    type: "POST",
                    dataType: "json",
                    success:function(json){
                        if(json && json.code == "1"){
                            $.ajax({
                                url: ROOT + "/api/apkpath?name=wifitransfer",
                                type: "POST",
                                dataType: "json",
                                success:function(json){
                                    var apkpath="";
                                    if(json && json.code == "1"){
                                        apkpath = "?apkpath=" + json.data.apk;
                                    }
                                    $homeMod.find('a.nav_upload').attr("href","http://kuaichuan.sjk.ijinshan.com/dev/index.html" + apkpath);
                                },
                                error:function(){}
                            });
                            $homeMod.find('a.nav_upload').click(function(){
                                Common.trace("kuaichuan");
                            });
                        }
                    },
                    error:function(){}
                });
            }
        },
        init: function() {
            $(".J_goon").attr("href", Common.getFrom());
            Hash.init();
            Common.fullscreen();
        }
    };

    // 哈希变化模块
    var Hash = {
        conifg: {
            home: {id: 'J_HomeMod', start: Tool.start, end: Tool.end},
            find: {id: 'J_FindMod'},
            poweroff: {id: 'J_PoweroffMod', start: Poweroff.start, end: Poweroff.end},
            upload: {id: 'J_PicUploadMod', start: Upload.start, end: Upload.end},
            download: {id: 'J_PicDownloadMod', start: Download.start, end: Download.end}// 执行/关闭轮询
        },
        curr: "home",
        change: function() {
            var cfg = Hash.conifg,
                hash = window.location.hash;

            hash = hash.substr(1);
            hash = hash && cfg[hash] ? hash : "home";

            // 结束上一模块
            if(Hash.curr && cfg[Hash.curr]) {
                if(typeof cfg[Hash.curr].end === "function") {
                    cfg[Hash.curr].end();
                }
            }

            Hash.curr = hash;
            // 执行展示
            Common.changePage($("#" + cfg[Hash.curr].id));

            // 开始下一模块
            if(typeof cfg[Hash.curr].start === "function") {
                cfg[Hash.curr].start();
            }
            // 埋点
            Report.post();
        },
        init: function() {
            this.change();
            // 绑定hash变化检测
            window.onhashchange = this.change;
        }
    };
	
    Tool.init();
	Menu.init();
    Poweroff.init();
    Upload.init();
    Download.init();
});