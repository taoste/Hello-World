// abtest
(function() {
	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}

	function setCookie(name, value, Days) {
		if (Days == null || Days == '') {
			Days = 300;
		}
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + "; path=/;expires=" + exp.toGMTString();
	}

	function getRollValue() {
		if (getCookie('abtest')) {
			return getCookie('abtest');
		}

		var val = Math.ceil(Math.random() * 10);
		setCookie('abtest', val, 1);
		return val;
	}

	if (getRollValue() > 5) {
		$('.home-wp__01').removeClass('home-wp__01').addClass('home-wp__02');
	}
})();

var headTag = document.getElementsByTagName("head");
function loadScript(url, callback) {
	var script = document.createElement("script")
	script.type = "text/javascript";
	if (typeof callback == 'function') {
		if (script.readyState) { //IE
			script.onreadystatechange = function() {
				if (script.readyState == "loaded" || script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else { //Others
			script.onload = function() {
				callback();
			};
		}
	}
	script.src = url;
	headTag[0].appendChild(script);
}

var ua = navigator.userAgent;
var chromeVersion = ua.toLocaleLowerCase().match(/chrome\/([\d\.]+)/);
if (ua.indexOf("MSIE") > -1 || ua.indexOf("QQBrowser") > -1 || ua.indexOf("rv:11") > -1 || (chromeVersion && chromeVersion[1] && chromeVersion[1].split('.')[0] < 54)) {
	document.body.className += "not_ani";
	loadScript('https://www.xunlei.com/v2018/src/pc/js/head/banner_ie.js');
	loadScript('https://www.xunlei.com/v2018/src/pc/ssi_build/aboutus/newslist.js', function(){
		loadScript('https://www.xunlei.com/v2018/src/pc/js/index.js');
	});
} else {
	(function(){
		var winSize={height:938};
		var $contains=$(".home-banner");

		var resize=function(){
			winSize.height=$(window).height();

			var z = winSize.height/938 < 0.6 ? 0.6 : Math.min(winSize.height/938, 1);
			$contains.css("zoom",z);
		}

		resize();
		window.onresize=resize;
	})();

	loadScript('https://www.xunlei.com/v2018/src/pc/js/head/banner.js');

	loadScript('https://www.xunlei.com/v2018/src/pc/ssi_build/aboutus/newslist.js', function(){
		loadScript('https://www.xunlei.com/v2018/dist/index.min.js');
	});
}
