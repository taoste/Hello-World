/*!
 * jqCrossDomain v1.0.0
 * Copyright (c) 2013, in shenzhen. luzhao@xunlei.com
 */
 
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

	var counter = 0;
	if (!$.support.cors) {
		$.postForm =  function (options) {
			if (!options.url) {
				throw new Error("非法url");
			}
			
			var data = options.data || {};
			if (!$.isPlainObject(data)) {
				throw new Error("非法数据");
			}

			var url = options.url,
				success = $.isFunction(options.success) ? options.success : $.noop(),
				error = $.isFunction(options.error) ? options.error : $.noop();
			var form, iframe, addParamChar;
			
			form = $('<form style="display:none;"></form>');
			addParamChar = /\?/.test(options.url) ? '&' : '?';
			counter += 1;
			iframe = $('<iframe src="javascript:false;" name="iframe-transport-' + counter + '" style="display:none;" scrolling="no" frameborder="0"></iframe>');
		
			$.each(data, function(key, value) {
				$('<input name="' + key + '" type="text" value="' + value + '" />').appendTo(form);
			});
			
			if (options.redirect) {
				$('<input name="redirect" type="text" value=' + options.redirect + ' />').appendTo(form);
			}
			
			form.prop("target", iframe.prop("name"))
				.prop("action", options.url)
				.prop("method", "post")
				.append(iframe)
				.appendTo(document.body);
			
			iframe.unbind('load').bind('load', function () {
				var response;
				try {
					response = iframe.contents();
					if (!response.length || !response[0].firstChild) {
						throw new Error();
					}
				} catch (e) {
					response = undefined;
				}
				if (response === undefined) {
					error();
				}
				else {
					success($.parseJSON(decodeURIComponent(iframe.get(0).contentWindow.location.search.slice(1))));
				}

				// Fix for IE endless progress bar activity bug
				// (happens on form submits to iframe targets):
				$('<iframe src="javascript:false;"></iframe>').appendTo(form);
				window.setTimeout(function () {
					form.remove();
				}, 0);
			})
			.bind("error abort", function() {
				if (iframe) {
					iframe.unbind('load')
						  .prop('src', 'javascript'.concat(':false;'));
					}
					if (form) {
						form.remove();
					}
			});
			
			form.submit();
		};
	}
	else {
		$.postForm = $.ajax;
	}
}));

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

    function decode(s) {
        if (config.raw) {
			return s;
		}
        
		try {
			s = decodeURIComponent(s.replace(pluses, ' '));
		}
		catch(e){
			s = unescape(s);
		}
		return s;
	}

	function decodeAndParse(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		s = decode(s);

		try {
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	var config = $.cookie = function (key, value, options) {

		// Write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				result = decodeAndParse(cookie);
				break;
			}

			if (!key) {
				result[name] = decodeAndParse(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
/*!
 * URLParser v1.0.0
 * Copyright (c) 2013, in shenzhen. luzhao@xunlei.com
 * This plugin uses Steven Levithan's excellent Regex URI parser.
 * http://blog.stevenlevithan.com/archives/parseuri
 */

(function( window ) {

	function httpBuildQuery( data ) {
		var arr = [];
		for(var key in data) {
			arr.push( key + "=" + data[key] );
		}
		return arr.join("&");
	}

	//example url: http://amigo237:abc123@www.example.com/path/index.html?name=amigo237&sex=m#test=hash&age=25
	var URLParser = function( url ) {
		if( !( this instanceof URLParser ) ) {
			var obj = new URLParser( url );
			return obj;
		}
		url = url || location.href;
		this.url = url;
		this.parse();
	};

	URLParser.options = {
		strictMode: false,
		key: ["source","protocol","authority","userInfo","user","password","domain","port","relative","path","directory","file","query","anchor"],
		query: /(?:^|&)([^&=]*)=?([^&]*)/g,
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};

	URLParser.prototype.parse = function( url ) {
		url = url || this.url;
		var	option = URLParser.options,
			model = option.parser[option.strictMode ? "strict" : "loose"].exec(url),
			i = 14;

		while( i-- ) {
			this[option.key[i]] = model[i] || "";
		}
	};

	URLParser.prototype.getQueryData = function( key ) {
		var queryData = {};
		this.query.replace( URLParser.options.query, function( $0, $1, $2 ) {
			if($1) {
				queryData[$1] = $2;
			} 
		});
		return key ? queryData[key] : queryData;
	};

	URLParser.prototype.getHashData = function( key ) {
		var hashData = {};
		this.anchor.replace(URLParser.options.query, function( $0, $1, $2 ) {
			if($1) {
				hashData[$1] = $2;
			} 
		});
		return key ? hashData[key] : hashData;
	};
	
	URLParser.prototype.setQuery = function( data ) {
		var queryData = this.getQueryData();
		var isQueryDataChange = false,
			queryString;

		for(var key in data) {
			if( data[key] !== queryData[key] ) {
				queryData[key] = data[key];
				isQueryDataChange = true;
			}
		}

		if(isQueryDataChange) {
			queryString = httpBuildQuery(queryData);
			if( this.query !== "" ) {
				var queryReg = /\?([^#]*)/;
				this.url = this.url.replace( queryReg, "?" + queryString );
			}
			else {
				this.url = this.url + "?" + queryString;
			}
			this.parse();
		}
		return this;
	}

	URLParser.prototype.setHash = function( data ) {
		var hashData = this.getHashData();
		var isHashDataChange = false,
			hashString;

		for(var key in data) {
			if( data[key] !== hashData[key] ) {
				hashData[key] = data[key];
				isHashDataChange = true;
			}
		}

		if(isHashDataChange) {
			hashString = httpBuildQuery(hashData);
			if( this.anchor !== "" ) {
				var hashReg = /#(.*)/;
				this.url = this.url.replace( hashReg, "#" + hashString );
			}
			else {
				this.url = this.url + "#" + hashString;
			}
			this.parse();
		}
		return this;
	}

	window["URLParser"] = window.URLParser || URLParser;
})( window );
var topApp={
	basePath:'http://svr.campus.xunlei.com/'
};
//填充数据模板
function cellrepalce ( datas, cell,todo){
	for(var i in datas){
		var reg=new RegExp('\\$'+i,"g");
		if(todo){
			cell = cell.replace(reg,$('<i>').text(todo(i,datas[i],datas)||"").html());
		}else {
			cell = cell.replace(reg,$('<i>').text(datas[i]||"").html());
		}
	}
	return cell;
}
//获取url参数
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

var ua = window.navigator.userAgent;
var browserType= {
	/**是否IE浏览器
	 * @field
	 */
	ie: /MSIE/,

	/**是否Edge浏览器
	 * @field
	 */
	edge: /edge/i,

	/**是否火狐浏览器
	 * @field
	 */
	firefox: /firefox/i,

	/**是否是否谷歌浏览器
	 * @field
	 */
	chrome: /chrome/i,

	/**是否欧朋浏览器
	 * @field
	 */
	opera: /opera/i,

	/**是否苹果的Safari浏览器,如果是Chrome则输出false
	 * @field
	 */
	safari: /safari/i,

	/**是否Webkit内核浏览器
	 * @field
	 */
	webkit: /webkit/i,

	/**是否Gecko内核浏览器
	 * @field
	 */
	gecko: /gecko/i,

	/**是否iOS操作系统
	 * @field
	 */
	ios: /iPad|iPhone|iPod/,

	/**是否mac操作系统
	 * @field
	 */
	mac: /mac/i,

	/**是否安卓操作系统
	 * @field
	 */
	android: /Android/,

	/**是否Windows Phone操作系统
	 * @field
	 */
	windowsphone: /Windows Phone/,

	/**是否Windows操作系统
	 * @field
	 */
	windows: /Windows/,

	/**是否为手机
	 * @field
	 */
	phone: /mobile|phone/i,

	/**是否为Pad设备
	 * @field
	 */
	pad: /iPad/,

	/**是否为Linux操作系统
	 * @field
	 */
	linux: /Linux/
};
/**
 *检测浏览器
 * checkBrowser().ie
 */
function checkBrowser(uaString) {
	var is = {};
	var _is = browserType;
	var _ua = uaString || ua;
	for (var r in _is) {
		if (typeof _is[r] == "object") {
			is[r] = _is[r].test(_ua);
		}
	}
	is.safari = is.safari && !is.chrome;
	if(window.ActiveXObject == undefined && window.ActiveXObject !== undefined){
		is.ie11 = true; //别把ie11当ie
	}
	return is;
};
/**
 *获得浏览器版本
 */
function getVersion() {
	var version;
	if (browserType.edge) {
		var reg = /edge\D?([\d.]+)/i;
		var m = ua.match(reg);
		if (m) version = parseInt(m[1]);
	} else if (browserType.chrome) {
		var reg = /Chrome\D?([\d.]+)/;
		var m = ua.match(reg);
		if (m) version = parseInt(m[1]);
	} else if (browserType.safari) {
		var reg = /version\D?([\d.]+)/i;
		var m = ua.match(reg);
		if (m) version = parseFloat(m[1]);
	}
	return version || ($.browser ? $.browser.version : 'heigh');
};

/*
 *重置input file标签，避免change不触发bug
 * obj 容器id
 */
function resetInputFIle(obj){
	var objFIleU=$(obj);
	if(checkBrowser().ie){
		objFIleU.replaceWith(objFIleU.clone(true));
	}else{
		objFIleU.val('');
	}
};

//阻止默认事件
function stopPreEvent(event){
	var e=event || window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
}

//阻止冒泡
function stopProEvent(event) {
	var e = event || window.event;
	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelBubble = true;
	}
}

//判断是否支持h5 属性
function hasSupport(property,ele) {
	var attr = property;
	var input = document.createElement(ele);
	return attr in input;
}

js = {lang:{}};
js.lang.String = function(){

	this.REGX_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;

	this.REGX_HTML_DECODE = /&\w+;|&#(\d+);/g;

	this.REGX_TRIM = /(^\s*)|(\s*$)/g;

	this.HTML_DECODE = {
		"&lt;" : "<",
		"&gt;" : ">",
		"&amp;" : "&",
		"&nbsp;": " ",
		"&quot;": "\"",
		"©": ""

		// Add more
	};

	this.encodeHtml = function(s){
		s = (s != undefined) ? s : this.toString();
		return (typeof s != "string") ? s :
				s.replace(this.REGX_HTML_ENCODE,
						function($0){
							var c = $0.charCodeAt(0), r = ["&#"];
							c = (c == 0x20) ? 0xA0 : c;
							r.push(c); r.push(";");
							return r.join("");
						});
	};

	this.decodeHtml = function(s){
		var HTML_DECODE = this.HTML_DECODE;

		s = (s != undefined) ? s : this.toString();
		return (typeof s != "string") ? s :
				s.replace(this.REGX_HTML_DECODE,
						function($0, $1){
							var c = HTML_DECODE[$0];
							if(c == undefined){
								// Maybe is Entity Number
								if(!isNaN($1)){
									c = String.fromCharCode(($1 == 160) ? 32:$1);
								}else{
									c = $0;
								}
							}
							return c;
						});
	};

	this.trim = function(s){
		s = (s != undefined) ? s : this.toString();
		return (typeof s != "string") ? s :
				s.replace(this.REGX_TRIM, "");
	};

	//检查是否以str结尾
	this.endsWith=function(str){
		if(str==null||str==""||this.length==0||str.length>this.length)
			return false;
		str = (str != undefined) ? str : this.toString();
		return (this.match(str+"$")==str);
	};

	//检查是否以str开头
	this.startsWith=function(str){
		if(str==null||str==""||this.length==0||str.length>this.length)
			return false;
		str = (str != undefined) ? str : this.toString();
		return (this.match("^"+str)==str);
	};

	this.hashCode = function(){
		var hash = this.__hash__, _char;
		if(hash == undefined || hash == 0){
			hash = 0;
			for (var i = 0, len=this.length; i < len; i++) {
				_char = this.charCodeAt(i);
				hash = 31*hash + _char;
				hash = hash & hash; // Convert to 32bit integer
			}
			hash = hash & 0x7fffffff;
		}
		this.__hash__ = hash;

		return this.__hash__;
	};

};

js.lang.String.call(String.prototype);

//页面入口公共行为
$(function(){
	var pathname = location.pathname.slice(1)
	$('#nav a').each(function (index, item) {
		var href = $(item).attr('href');
		if (href.indexOf(pathname) >= 0) {
			
			Tools.activeNav(index);
		}
	})
	Tools.showUser();

	$("a[href$='#']").attr("href", "javascript:void(0);");
	$(".f_top a").click(function(){
		$(window).scrollTop(0);
	});
	$(".pic_user").hover(function() {
		$(".user_drop").show();
	},function() {
	});
	//微信扫码
	$(".ico_weixin").hover(function(){
		$(".drop_code").css("display","block")
	},function(){
		$(".drop_code").css("display","none")
	});
	//登录链接
	$("#s_login").click(function(){
		$(".cover").show();
		$("#s_registerDiv").hide();
		$("#s_forgetpwdDiv").hide();
		$("#s_loginDiv").show();
	});
	//注册链接
	$("#s_register,.go_register").click(function(){
		$(".cover").show();
		$("#s_loginDiv").hide();
		$("#s_forgetpwdDiv").hide();
		$("#s_registerDiv").show();
	});
	//忘记密码
	$(".go_findPwd").click(function(){
		$(".cover").show();
		$("#s_loginDiv").hide();
		$("#s_registerDiv").hide();
		$("#s_forgetpwdDiv").show();
	});
	//头部投递简历
	$(".s_mailHead").click(function() {
		location.href = '/position.html';
	});
	//交流会城市弹窗
	$(".tipAlertExchange .pop_close").click(function(){
		$(".cover").hide();
		$(".tipAlertExchange").hide();
	});
});
var Tools=(function () {

	var Tools = {};

	Tools.getUrlParam = function (key) {
		var query = location.search;
		var reg = "/^.*[\\?|\\&]" + key + "\\=([^\\&]*)/";
		reg = eval(reg);
		var ret = query.match(reg);
		if (ret != null) {
			return decodeURIComponent(ret[1]);
		} else {
			return "";
		}
	};

	//得到COOKIE
	Tools.getCookie = function (name) {
		try {
			return (document.cookie.match(new RegExp("(^" + name + "| " + name + ")=([^;]*)")) == null) ? "" : decodeURIComponent(RegExp.$2);
		}
		catch (e) {
			return (document.cookie.match(new RegExp("(^" + name + "| " + name + ")=([^;]*)")) == null) ? "" : RegExp.$2;
		}
	};

	//设置COOKIE , expireMin:单位分钟，支持小数
	Tools.setCookie = function (name, value, expireMin, domain) {
		if (!domain) {
			domain = location.hostname;
		}
		if (arguments.length > 2) {
			var expireTime = new Date(new Date().getTime() + parseInt(expireMin * 60 * 1000));
			document.cookie = name + "=" + escape(value) + "; path=/; domain=" + domain + "; expires=" + expireTime.toGMTString();
		} else {
			document.cookie = name + "=" + escape(value) + "; path=/; domain=" + domain;
		}
	};

	//判断是否登录了
	Tools.hasLogin = function () {
		var uid = Tools.getCookie('xl_campus_uuid');
		return uid.length === 41;
	};

	//统一调用接口方法
	Tools.ajaxCall = function (uri, succCallback, failCallback, data) {
		var url = 'http://svr.campus.xunlei.com/' + encodeURI(uri);
		data = data || {};
		$.get(url, data, function (json) {
			if (json.errno == 0) {
				succCallback && succCallback(json);
			} else {
				failCallback && failCallback(json);
			}
		}, 'jsonp');
	};

	//激活导航栏按钮
	Tools.activeNav = function (index) {
		var eleActive=$('#nav a');
		eleActive.removeClass('cur');
		eleActive.eq(index).addClass('cur');
	};

	Tools.showUser = function () {
		var $logined = $('#logined'),
				$user = $('#logined .pic_user'),
				$userinfo = $('#userinfo'),
				hideId = null;
		if (Tools.hasLogin()) {
			$logined.show();
			$('#loginInfoContainer').hide();
			$('#username').prop('title',Tools.getCookie('xl_campus_account'));
			$('#username').html(Tools.getCookie('xl_campus_account'));
//	    $('#username').html('hi, ' + Tools.getCookie('xl_campus_account'));
			$user.hover(function () {
				$userinfo.show();
			}, function () {
				hideId = setTimeout(function () {
					$userinfo.hide();
				}, 800);
			});

			$userinfo.hover(function () {
				clearTimeout(hideId);
			}, function () {
				$userinfo.hide();
			});

			$('#logout').on('click', function () {
				Tools.setCookie('xl_campus_uuid', '', -1);
				Tools.logoutLoad();
				return false;
			});
		};
		Tools.logoutLoad = function(){
				var curUrl = location.href;
				if( curUrl.match( /recureDynamics|index|position/g ) ) {
					location.reload();
				} else {
					location.href = "index.html";
				}
		};
		Tools.replaceHtml = function(str){
			if(str == '' || !str){
				return str;
			}
			str = str.replace(/</g, ' ');
			str = str.replace(/>/g, ' ');
			return str;
		};
		Tools.dereplaceHtml = function(str){
			if(str == '' || !str){
				return str;
			}
			str = str.replace(/</g, ' ');
			str = str.replace(/>/g, ' ');
			str = str.replace(/\n/g,"<br/>");
			return str;
		};
		
	};
	var curUrl = location.href;
	var matchs = curUrl.match( /recureDynamics|index|position|written_list|find_pwd/g );
	if( !Tools.hasLogin() ) {
		if( matchs ) {
			//location.reload();
		} else {
			location.href = "index.html";
		}
	}
	$("#logout").on("click",function(){
		if( matchs ) {
			location.reload();
		} else {
			location.href = "index.html";
		}	
	});
	return Tools;
})();
/*!
 * jqValidate v1.0.0
 * Copyright (c) 2013, in shenzhen. luzhao@xunlei.com
 */

var onInputChange = (function($){
    
    /*
    ie9 doesn't trigger oninput event when content is removed with BACKSPACE, ctrl+x etc... 
    I will not bother with feature check.
    */
    var onInputSupport = 'oninput' in document.createElement('input');

    function OnInputChange(element, callback, options) {
        this.element = element;
        this.$element = $(element);
        this.value = element.value;
        this._callback = callback;
        this.options = $.extend({
            time: 100
        }, options);        
        $(element).on('focus', $.proxy(this._listen, this));
        $(element).on('blur', $.proxy(this._unlisten, this));
    }

    OnInputChange.prototype = {
        
        _listen: function(){
            if(onInputSupport){
                this.$element.on('input', $.proxy(this._run, this));
            }
            else {
                this._interval = window.setInterval($.proxy(this._check, this), this.options.time);
            }
            return true;
        },
        
        _unlisten: function(){
            if(onInputSupport){
                this.$element.off('input', this._run);
            }
            else {
                window.clearInterval(this._interval);
            }
            return true;
        },
        
        _run: function(){
            this.value = this.element.value;
            var callback = $.proxy(this._callback, this.element);
            callback(this.value);
        },
        
        _check: function(){
            if(this.element.value != this.value) {
                this._run();
            }
        }
    };
    
    $.fn.onInputChange = function(callback, options){
        return this.each(function(){
            new OnInputChange(this, callback, options);
        });
    };
    
    return {
        Constructor: OnInputChange,
        support:onInputSupport
    };
    
})(window.jQuery);

;(function ($) {
    "use strict"
    
    var message = {
        required: '不能为空。',
        minLength: '字符长度不够。',
        maxLength: '字符超长。',
        mobile: '非法的电话号码。',
        email: '非法的邮箱。',
        chineseName: '非法的中文名。',
        idCard: '非法的身份证号。'
    };
    
    var numericRegex = /^[0-9]+$/,
        mobileRegex = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/,
        emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        chineseNameRegex = /^[\u4E00-\u9FA5]{2,}(?:·[\u4E00-\u9FA5]{1,})*$/,
        idCardRegex = /(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[X|x|0-9]$)|(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)/;

    var validate = {
        required: function (value) {
            value = $.trim(value);
            return value !== "" && value !== null;
        },
        
        number: function(value) {
            return numericRegex.test(value);
        },
        
        minLength: function (value, length) {
            if (!numericRegex.test(length)) {
                return false;
            }

            return (value.length >= parseInt(length, 10));
        },
        
        maxLength: function (value, length) {
            if (!numericRegex.test(length)) {
                return false;
            }
            
            return (value.length <= parseInt(length, 10));
        },
        
        mobile: function (value) {
            return mobileRegex.test(value);
        },
        
        email: function (value) {
            return emailRegex.test(value);
        },
        
        chineseName: function (value) {
            return chineseNameRegex.test(value);
        },
        
        idCard: function (value) {
            return idCardRegex.test(value);
        }
    };
    
    $.validate = validate;
    
    $.fn.validate = function (type) {
        var result,
            condition,
            value = $.trim($(this).val()),
            func = validate[type];
        
        if (!$.isFunction(func)) {
            throw new Error("can't find this validate type:" + type);
        }
        
        switch (type) {
            case "minLength":
                var minLength = this.attr("data-min-length");
                if (minLength === undefined || minLength === null) {
                    throw new Error("can't find attribute data-min-length");
                }
                result = func(value, minLength);
                break;
                
            case "maxLength":
                var maxLength = this.attr("data-max-length");
                if (maxLength === undefined || maxLength === null) {
                    throw new Error("can't find attribute data-max-length");
                }
                result = func(value, maxLength);
                break;
                
            default:
                //"no any other condition, direct call validate function";
                result = func(value);
        };
        
        return result;
    };
    
    $.fn.monitor = function (type, callback) {
        callback = $.isFunction(callback) ? callback : $.noop;
        
        var typeSeparator = /\s+/,
            $this = this;
        
        this.on("change.validate", function() {
            var typeArr = type.split(typeSeparator),
                result = {
                    code: "success",
                    msg: []
                };
                
            for (var i = 0, j = typeArr.length; i < j; i++) {
                if (!$this.validate(typeArr[i])) {
                    result.code = "fail";
                    result.msg.push({
                        type: typeArr[i],
                        message: message[typeArr[i]]
                    });
                }
            }
            
            callback(result);
        });
        
        return this;
    };
})(jQuery);
var UNsuccessVote = null;
(function (window) {
	// 回车触发提交按钮
	(function () {
		var btn
		function enterBtn (e) {
			// console.log(arguments)
			var keyCode = e.keyCode
			if (keyCode === 13 && $btn) {
				$("#s_loginDiv .mod_form_ipt").blur()
				$btn.click()
			}
		}
		$('input').on('focus', 	function inputFocus (e) {
			var $target = $(e.target)
			$btn = $target.parents('.mod_form').find('.btn_primary')
			// console.log('bind')
			$(document).bind('keyup', enterBtn)
		});
		$('input').on('blur', function (e) {
			// console.log('unbind')
			$(document).unbind('keyup', enterBtn)
		})
	})();
	
	$('.mod_tab_nav').on('click', 'a', function() {
		var $self    = $(this),
			$tab     = $self.parents('.mod_tabbox'),
			$tabnav  = $self.parents('.mod_tab_nav'),
			$tabcont = $tab.find('.mod_tab_cont'),
			_index   = $tabnav.find('a').index($self);	 

		$tabnav.find('a').removeClass('is-on').eq(_index).addClass('is-on');	
		$tabcont.find('.mod_tab_switch').hide().eq(_index).fadeIn();	
	});	
	
	var emailReg =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,// /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
			hasError = true,
			$login = $('#login'),
			$tips = $('#tips_login'),
			$email = $('#s_loginDiv input[data-type="email"]'),
			$pass = $('#s_loginDiv input[data-type="pass"]'),
			isrember = false;

	/*if (Tools.hasLogin()) {
		location.href = '/personal_center.html';
	}*/


	/*if($('#remember').find('.ico_chk').hasClass('checked')){
		isrember = true;
	}*/
	isrember=Tools.getCookie('isrember') || false;
	var remaccount = Tools.getCookie('remaccount');
	var rempwd = Tools.getCookie('rempwd');
	if(isrember && remaccount && (remaccount != '')){
		$email.val(remaccount);
		if(rempwd && (rempwd!='')) {
			var pwd=rempwd.split("()");
			if(remaccount==pwd[0]){
				$pass.val(pwd[1]);
			}
		}
	}else{
		$email.val(remaccount || '');
	}

	$('#s_loginDiv .ipt_info').on('focus', function () {
		var $this = $(this);
		$this.parent('.form_box').addClass('focus');
	}).on('blur', function () {
		var $this = $(this), value = $.trim($this.val()), $parentBox = $this.parent('.form_box');
		$parentBox.removeClass('focus');
		switch ($this.data('type')) {
			case 'email':
				if (emailReg.test(value)) {
					hasError = false;
				} else {
					hasError = true;
				}
				break;
			case 'pass':
				if (value.length < 6) { //大于6位
					hasError = true;
				} else {
					hasError = false;
				}
				break;
			//无需default
		}

		if (!hasError) {
			if ($parentBox.hasClass('error')) {
				$parentBox.removeClass('error');
				$this.siblings('.ico_f_error').remove();
			}
			if (!$parentBox.hasClass('correct')) {
				$parentBox.addClass('correct');
				$parentBox.append('<i class="ico_f_ok"></i>');
			}
		} else {
			if ($parentBox.hasClass('correct')) {
				$parentBox.removeClass('correct');
				$this.siblings('.ico_f_ok').remove();
			}
			if (!$parentBox.hasClass('error')) {
				$parentBox.addClass('error');
				$parentBox.append('<i class="ico_f_error"></i>');
			}
		}
	});

	//checked
	$('#remember').on('click', function () {
		var $this = $(this), $checkRemember = $this.find('.ico_chk');
		if ($checkRemember.hasClass('checked')) {
			isrember = false;
			$checkRemember.removeClass('checked');
		} else {
			isrember = true;
			$checkRemember.addClass('checked');
		}
		return false;
	});

	//login
	//$login.on('click', login);

	// $pass.on('keyup', function (e) {
	// 	if (e.keyCode === 13) {
	// 		login();
	// 	}
	// });



	//------------------------2018-------------------------------------

	function clear() {
		//返回初始状态
		$("#s_bindDiv .pop_closebtn,#s_bindmailDiv .pop_closebtn,#s_loginDiv .pop_closebtn,#s_registerDiv .pop_closebtn,#s_forgetpwdDiv .pop_closebtn,#s_ensureDiv .pop_closebtn,#registerBind .pop_closebtn").on("click",
			function(){
				$(this).siblings(".pop_panel").find(".mod_form_tip").hide();
				$(".forbid-mask").hide();
				$(".closehide").hide();
				$(".xz_pop_box input").val("");
				$(".xz_pop_box .mod_form_label").show();
			}
		);
		$("#s_loginDiv .pop_closebtn , #s_registerDiv .pop_closebtn").on("click",function(){
			$(this).siblings(".pop_panel").find(".mod_tab_nav a").eq(0).click();
		});

		$("#s_login").on("click",function(){
			$("#s_loginDiv").find(".mod_tab_nav a").eq(0).click();
			$("#s_registerDiv").find(".mod_tab_nav a").eq(0).click();
		});
	}
	clear();
	var CAMPUS2018 = {
		init : function() {
			CAMPUS2018.placeholder();
			CAMPUS2018.keyupBind();
			CAMPUS2018.loginBind();
			CAMPUS2018.tologinBind();
		},
		closeLogin: function (e) {
			var keyCode = e.keyCode;
			if (keyCode === 27) {
				$(".pop_closebtn").click()
				$('.pop_close').click()
			}
		},
		placeholder : function(){
			$(".mod_form_ipt").on("keyup",function(){
				if( $.trim( $(this).val() ).length ) {
					$(this).siblings(".mod_form_label").eq(0).hide();
				} else {
					$(this).siblings(".mod_form_label").eq(0).show();
				}
			});
		},
		keyupBind : function(){
			$("#s_loginDiv .mod_form_ipt").on("keyup",function(){
				var $this = $(this);
				$this.siblings(".mod_form_tip").hide();

			});
			$("#s_loginDiv .mod_form_ipt").on("blur",function(){
				var $this = $(this);
				var _type = $this.attr("data-type");
				if( CAMPUS2018.exam.examIpt(_type,$this.val() ) ) {
					CAMPUS2018.exam.complete [ $("#s_loginDiv .mod_form_login .mod_form_ipt").index( $this ) ] = 1;
					//$this.siblings(".mod_form_tip").hide();
				} else {
					CAMPUS2018.exam.complete [ $("#s_loginDiv .mod_form_login .mod_form_ipt").index( $this ) ] = 0;
					//$this.siblings(".mod_form_tip").show();
				}
			});
		},
		loginBind : function(){
			$("#s_login").on("click",function(e,p){
				$(".cover").show();
				CAMPUS2018.currentAction = p;
				$("#s_loginDiv").show();
			});
				
				// 绑定 esc 事件：关闭弹窗
				$(document).bind('keyup', CAMPUS2018.closeLogin);
		},
		currentAction:null,
		logintype:1,
		tologinBind : function(){
			$login.on("click",function(){
				if(CAMPUS2018.logintype==1) {
					//原始登录方式
					CAMPUS2018.login();
				} else if(CAMPUS2018.logintype == 2) {
					CAMPUS2018.reLogin();
				}
			});
			$("#erweiLogin").on("click",function(){
				CAMPUS2018.showErwei();
			});
		},
		getImgUrl : function(){
			var defer = $.Deferred();
			var p = defer.promise();
			Tools.ajaxCall('get_wx_qrcode?type=1',function(res){
				defer.resolve(res);
			});
			return p;
		},
		showErwei : function(){
			if(CAMPUS2018.WS) {
				CAMPUS2018.WS.close();
			}

			var str = ['<img src="' , undefined ,'?t=' , $.now() , '">'];
			CAMPUS2018.getImgUrl().then(function(res){
				str[1] = res.qrcode;
				$("#loginErwei").html(str.join(""));
				CAMPUS2018.subErwei(res.uuid);

			},function(err){
				$("#loginErwei").html("获取二维码失败");
			});
		},
		exam:{
			complete: [0,0],
			examIpt : function(type,str){
				return CAMPUS2018.rules[type].test(str);
			}
		},
		rules:{
			email : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			pass  : /^[\S]{6,20}$/,
			nick  : /[\S]+/
		},
		login:function(){
			var email = $.trim($email.val()),
				pass = $.trim($pass.val());
			var complete = CAMPUS2018.exam.complete;
			for(var i =0;i<complete.length;i++) {
				if(!complete[i]) {
					$("#s_loginDiv .mod_form_tip").eq(i).show();
					$("#s_loginDiv .mod_form_login input").eq(i).focus();
					return false;
				}
			}
			$("#tips_login").hide();
			if($('#remember').find('.ico_chk').hasClass('checked')){
				//isrember = true;
				Tools.setCookie('isrember',true,60*24*30);
			}else{
				Tools.setCookie('isrember','');
			}
			//$login.off('click', login);
			if(isrember == true){
				Tools.setCookie('remaccount',email,60*24*30);
				Tools.setCookie('rempwd',email+"()"+pass,60*24*30);
			};
			
			var url = 'http://svr.campus.xunlei.com/'
			$.ajax({
				url: url + 'login',
				type: 'POST',
				cache: false,
				// contentType: "application/json;charset=utf-8",
				contentType: ' application/x-www-form-urlencoded; charset=UTF-8',
				dataType: 'JSON',
				xhrFields: {
						withCredentials: true
				 },
				data: {
					account: email,
					pwd: pass,
					from: 'pc'
				},
				success: function (ret) {
					if (ret.errno == 0) {
						CAMPUS2018.reload();
					} else {
						$tips.html(ret.rtnMsg).show();
					}
				}
			})

			return false;
		},
		reload:function(){
			if(~location.href.indexOf("position.html") && UNsuccessVote!=null) {
				var path = location.href+"?"+UNsuccessVote;
				location.href = path;
			} else if (~location.href.indexOf("find_pwd.html")) {
				location = '/personal_center.html'
			} else if (~location.href.indexOf("index.html")) {
				var path = location.href;
				var noAnimation = 'x=rea'
				var search = ''
				if (!location.search) {
					search = '?' + noAnimation
				} else if (location.search.indexOf(noAnimation) < 0) {
					search = '&' + noAnimation
				}
				
				location.href = path + search;
			} else {
				location.reload();
			}
		},
		reLogin:function(){

			var email = $.trim($email.val()),
				pass = $.trim($pass.val());
			var complete = CAMPUS2018.exam.complete;
			for(var i =0;i<complete.length;i++) {
				if(!complete[i]) {
					$("#s_loginDiv .mod_form_tip").eq(i).show();
					$("#s_loginDiv .mod_form_login input").eq(i).focus();
					return false;
				}
			}

			var defer = $.Deferred();
			var p = defer.promise();
			var parmas = ["account=",email,"&pwd=",pass,"&uuid=",CAMPUS2018.uuid,"&bind=1",].join("");
			Tools.ajaxCall('wx_bind_account?'+parmas,function(res){

				CAMPUS2018.reload();
				defer.resolve(res);
			},function(res){
				alert(res.rtnMsg);
			});
			return p;
		},
		uuid:"",
		wsDataToJSON:function(str){
			var d = str.split(",");
			var obj ={};
			for(var i = 0;i<d.length;i++) {
				d[i] = d[i].replace(":","::");
				var nv = d[i].split("::");
				obj[ nv[0] ] = nv[1];
			}
			return obj;
		},
		wsState:null,
		subErwei:function(uuid){

			var wsurl = 'ws://tj.campus.xunlei.com/pushMsg/'+uuid;
			var ws = new WebSocket(wsurl);
			CAMPUS2018.WS = ws;
			ws.onopen = function(){
				console.log("login ws succ");
				CAMPUS2018.wsState = "open";
			};
			ws.onmessage = function(res){
				console.log("微信扫描登录收到消息");
				var d = CAMPUS2018.wsDataToJSON(res.data);
				CAMPUS2018.uuid = d.uuid;
				if(d.opResult==1) {
					//用戶名存在
					CAMPUS2018.sendUser();
				}
				if(d.opResult == 2) {
					//用戶名不存在
					$("#s_bindDiv .tit").html("登录");
					$("#s_bindDiv .mod_form_handle a").eq(0).attr("id","tobind").html("已有邮箱帐号，登录>>");
					$("#s_bindDiv .mod_form_handle a").eq(1).attr("id","tonewCount").html("注册并绑定邮箱>>");
					$("#s_loginDiv").hide();

					CAMPUS2018.notfindUser('login')
				}

				if(d.opResult == 6) {
					//已经微信注册但是没有绑定邮箱
					$("#s_loginDiv").hide()
					CAMPUS2018.notbindMail()
				}


			};
			ws.onclose = function(){
				console.log("登录ws关闭");
				CAMPUS2018.wsState = "close";
			};
			ws.onerror = function(){
				console.log("微信扫描登录断开连接");
			};
			window.onbeforeunload = function(){
				try{
					ws.close();
				} catch(error) {
				}
			}
		},
		notbindMail:function(){
			$("#s_bindmailDiv").show();
			$("#toRegWx").on("click",function(){
				//已网申 去绑定界面
				$("#s_bindmailDiv").hide();
				CAMPUS2018.registerBindFn("3");
			})
		},
		sendUser:function(obj){
			//登录成功，通知后台，重刷页面
			var defer = $.Deferred();
			var p = defer.promise();
			var parmas = ["uuid=",CAMPUS2018.uuid].join("");
			Tools.ajaxCall('wx_login_success?'+parmas,function(res){
				CAMPUS2018.reload();
			},function(res){
				alert(res.rtnMsg);
			}); 
			return p;
		},
		notfindUser : function(type){

			$("#s_loginDiv .mod_tab_nav a").eq(0).click();
			$("#s_bindDiv").show(300);
			$("#tobind").click(function(){
				//绑定已有邮箱
				CAMPUS2018.logintype = 2;
				$("#s_bindDiv").hide();


				CAMPUS2018.loginbindFn("1");

				/*$(".forbidErwei").show();
				$("#login").text("绑定");
				$("#s_loginDiv").show(300);	*/			
			});

			$("#tonewCount").click(function(){
				$("#s_bindDiv").hide();

				CAMPUS2018.registerBindFn("2");
				//CAMPUS2018.wxRegister(data);
			});
		},



		loginbindFn:function(bind) {
			//登录绑定
			var $registerBind = $("#registerBind");
			$registerBind.find("#toRegisterBind").html("登录并绑定");
			$registerBind.find(".mod_form_group").eq(2).hide();
			$registerBind.show();
			$("#toRegisterBind").on("click",function(){
				CAMPUS2018.twobindFn(1);
			});
		},
		/*loginbind  和registerBind 两个公用一个绑定页面  #registerBind*/
		registerBindFn:function(bind){
			//注册绑定 包含 已网申和新注册 两种情况
			var $registerBind = $("#registerBind");
			$registerBind.find("#toRegisterBind").html("注册并绑定");
			$registerBind.find(".mod_form_group").eq(2).show();
			$registerBind.show();

			$registerBind.find(".mod_form_ipt").on("focus",function(){
				$(this).siblings("p").hide();
			});
			$("#toRegisterBind").on("click",function(){

				CAMPUS2018.twobindFn(bind);
			});
		},
		twobindFn:function(bind){
				//帐号不完美  ==》最终来这里
				var $registerBind = $("#registerBind");
				var rebindmail = $.trim( $registerBind.find(".rebindmail").val() );
				var rebindpass = $.trim( $registerBind.find(".rebindpass").val() );
				var rebindrepass = $.trim( $registerBind.find(".rebindrepass").val() );

				if( !emailReg.test(rebindmail) ) {
					$registerBind.find(".rebindmail").siblings("p").show();
					return false;
				}

				if(rebindpass.length<6) {
					$registerBind.find(".rebindpass").siblings("p").show();
					return false;

				}

				if(registerBind.length<6 && bind != 1  ) {
					$registerBind.find(".rebindrepass").siblings("p").show();
					return false;
				}
				if( rebindpass !== rebindrepass && bind != 1 ) {
					$registerBind.find(".rebindrepass").siblings("p").html("密码填写不一致").show();
					return false;
				}
				$registerBind.find(".mod_form_tip").hide();
				var parmas = ["account=",rebindmail,"&pwd=",rebindpass,"&uuid=",CAMPUS2018.uuid,'&bind=',bind].join("");
				Tools.ajaxCall('wx_bind_account?'+parmas,function(res){
					if(~location.href.indexOf("position.html") && UNsuccessVote!=null) {
						var path = location.href+"?"+UNsuccessVote;
						location.href = path;
					} else {
						location.href = 'personal_center.html';
					}
				},function(res){
					$("#toRegisterBind").siblings("p").html(res.rtnMsg).show();
				});
		},


		wxRegister:function(data){
			var  $wxname = $("#s_ensureDiv .mod_form_ipt")
			$("#s_ensureDiv .avatar").html( ['<img src="' , data.headimgurl ,'?t=' , $.now() , '">'].join("") );
			$wxname.val( data.nickname );
			$("#s_ensureDiv").show(300);

			$("#sureReg").click(function(){
				//确认使用微信注册
				var parmas = ["uuid=",CAMPUS2018.uuid,"&name=",$wxname.val()].join("");
				Tools.ajaxCall('wx_login_success?'+parmas,function(res){
					CAMPUS2018.reload();					
				},function(res){
					alert(res.rtnMsg);					
				}); 
			});
		}
	};

	CAMPUS2018.init();

	/*关闭弹窗*/
	$(".pop_closebtn").on("click",function(){
		$(this).parent(".xz_pop_box").hide();
		$(".cover").eq(0).hide();
		
		// 解绑 esc 事件
		// $(document).unbind('keyup', CAMPUS2018.closeLogin);
	});
	/*关闭弹窗*/


	/* 微信注册 */
	$(".tologin").click(function(){
		$("#s_registerDiv").hide();
		$("#s_loginDiv").show(300);
	});
	$(".toregister").on("click",function(){
		$("#s_loginDiv").hide();
		$("#s_registerDiv").show(300);
	});

	$(".tofindpass").click(function(){
		$("#s_loginDiv").hide();
		$("#s_forgetpwdDiv").show(300);
		
		// 当已经提交过一次 忘记密码 的时候 
		$("#findmod").show();
		$("#gotmod").hide();
	});

	/* 微信注册 */

window.CAMPUS2018 = CAMPUS2018;
})(window);
;(function($) {
	if (alertMsg === undefined) {
		var alertMsg = window.alert
	}

	var emailReg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
		bol = false,
		$findpassipt = $("#s_forgetpwdDiv .mod_form_ipt");

	$findpassipt.on("keyup",function(){
		if( emailReg.test($(this).val()) ) {
			$(this).siblings("p").hide();
			bol = true;
		} else {
			$(this).siblings("p").html("邮箱错误").show();
			bol = false;
		}
	});

	$("#cancelfind").on("click",function(){
		$("#s_forgetpwdDiv .pop_closebtn").click();
	});
	$("#tomail").on("click",function(){
		$("#s_forgetpwdDiv .pop_closebtn").click();
	});
	$("#findpass").on("click",function(){
		if(!bol) return false;
		data.account = $findpassipt.val();
		sendmail();
	});


	var data = {
		account: ""
	};

	function sendmail() {
		$.ajax({
			url: "http://svr.campus.xunlei.com/reset_req?callback=?",
			timeout: 5000,
			dataType: "json",
			data: data,
			error: function(){
				$findpassipt.siblings("p").html("修改失败").show();
				//alertMsg("密码重置失败",'fail');
			},
			success: function (result) {
				if (result.errno == 0) {
					$("#receivemail").html(data.account);
					//$("#tomail").attr('href',"mailto:"+data.account);
					$("#findmod").hide();
					$("#gotmod").show();
				}
				else if (result.errno == 14) {
					$findpassipt.siblings("p").html("该帐号不存在").show();
					//alertMsg("密码重置失败，该帐号不存在",'fail');
				}
				else {
					$findpassipt.siblings("p").html("修改失败").show();
					//alertMsg("密码重置失败:" + result.errno,'fail');
				}
			}
		});
	}


	var Controller = (function(){

		return {
			init: function() {
				this.initUI();
				this.bindEventHandlers();
			},

			bindEventHandlers: function() {
				var self = this;

				$("#goLoginBtn").on("click", function() {
					location.href = "http://campus.xunlei.com/personal_center.html";
				});
				$(".tipAlert .pop_close").click(function(){
					if($(".tipAlert .txt_result").text()=='重置成功，请用新密码登录'){
						location.href = "http://campus.xunlei.com/personal_center.html";
					}else{
						$(".tipAlert").hide();
						$(".cover").hide();
					}
				});
				$("#reGetPassword").on("click", function() {
					var email = $("#s_user_email").val();
					if (!$.validate.email(email)) {
						alertMsg("请填写正确的邮箱地址",'fail');
						return false;
					}

					var data = {
						account: email
					};

					$.ajax({
						url: "http://svr.campus.xunlei.com/reset_req?callback=?",
						timeout: 5000,
						dataType: "json",
						data: data,
						error: function(){
							alertMsg("密码重置失败",'fail');
						},
						success: function (result) {
							if (result.errno == 0) {
								alertMsg("重置成功,请登录邮箱进行确认",'success');
							}
							else if (result.errno == 14) {
								alertMsg("密码重置失败，该帐号不存在",'fail');
							}
							else {
								alertMsg("密码重置失败:" + result.errno,'fail');
							}
						}
					});
				});

				$("#resetPassword").on("click", function(e) {
					var pwd = $.trim($("#modify_pwd").val()),
							repwd = $.trim($("#repeat_pwd").val());

					if (!$.validate.required(pwd)) {
						alertMsg("请填写新密码",'fail');
						return false;
					}

					var passReg = /^(?![A-Za-z]+$)(?!\d+$)[A-Za-z0-9]{6,20}$/
					if (!$.validate.required(repwd) || !passReg.test(repwd)) {

						alertMsg("请填写确认密码",'fail');
						return false;
					}

					if (pwd != repwd) {
						alertMsg("两次密码不匹配",'fail');
						return false;
					}

					var url = URLParser(),
							authcode = url.getQueryData("authcode");

					var data = {
						pwd: pwd,
						authcode: authcode
					};

					$.ajax({
						url: "http://svr.campus.xunlei.com/reset_pwd?callback=?",
						timeout: 5000,
						dataType: "json",
						data: data,
						error: function(){
							alertMsg("密码重置失败",'fail');
						},
						success: function (result) {
							if (result.errno == 0) {
								$(document).on("popWindowHide", function() {
									location.href = "http://campus.xunlei.com/login.html";
								});
								alertMsg("重置成功，请用新密码登录",'success');
							}
							else {
								alertMsg("密码重置失败:" + result.errno,'fail');
							}
						}
					});
				});
			},

			initUI: function() {

			},
			alertMsg : function(msg){
				$(".cover").show();
				$(".tipAlert .txt_result").text(msg);
				$(".tipAlert").show();
				//alert(msg);
				return false;
			}
		}
	})();



	//页面入口
	// $(document).ready( function() {
	// 	console.log('init')
	// 	Controller.init();
	// });
	Controller.init();

})(jQuery);
(function () {
	// 注册  注册  注册
	var //emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
			emailReg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
			password = '',
			hasError = true,
			$tips = $('#tips'),
			$email = $('#s_registerDiv input[data-type="email"]'),
			$pass = $('#s_registerDiv input[data-type="pass"]'),
			$repass = $('#s_registerDiv input[data-type="repass"]');


	// var passReg = /^[0-9a-zA-Z]{6,20}$/; //密码校验
	var passReg = /^(?![A-Za-z]+$)(?!\d+$)[A-Za-z0-9]{6,20}$/
	var nicknameReg = /[\S]+/;

	var rules ={
		email:emailReg,
		pass:passReg,
		nick:nicknameReg,
		repass:passReg
	};

	var complete = [1,0,0,0];//记录校验是否成功，0为失败，1为成功
	function examIpt(type,str) {
		return rules[type].test(str);
	}
	/* 输入框输入时校验*/
	$("#s_registerDiv .mod_form_ipt").on("keyup",function(){
		var $this = $(this);
		$this.siblings(".mod_form_tip").hide();
	});
	$("#s_registerDiv .mod_form_ipt").on("keyup",function(){
		var $this = $(this);
		var _type = $this.attr("data-type");
		if( examIpt(_type,$this.val() ) ) {
			complete [ $("#s_registerDiv .mod_form_login .mod_form_ipt").index( $this ) ] = 1;
			$this.siblings(".mod_form_tip").hide();
		} else {
			complete [ $("#s_registerDiv .mod_form_login .mod_form_ipt").index( $this ) ] = 0;
			if(_type == "email") {
				$email.siblings("p").html("请填写正确的邮箱");
			}
			if(_type == "repass") {
				$repass.siblings("p").html("请填写正确的密码");
			}
			if(_type == "pass") {
				$pass.siblings("p").html("请填写正确的密码");
			}
			//$this.siblings(".mod_form_tip").show();

		}
	});

	/* 输入框输入时校验*/

	function repassExam() {
		return $pass.val() == $repass.val();
	}
	// $repass.on("blur",function(){
	// 	if( !repassExam() && !$.trim($repass.val()) ) {
	// 		$repass.siblings(".mod_form_tip").html("两次密码输入不一致").show();
	// 	}
	// });
	function examMail(register){
		for(var i =0;i<complete.length;i++) {
			if(!complete[i]) {
				$("#s_registerDiv .mod_form_tip").eq(i).show();
				$("#s_registerDiv .mod_form_login input").eq(i).focus();
				return false;
			}
		}
		if( !repassExam() ) { 
			$repass.siblings(".mod_form_tip").html("两次密码输入不一致").show();
			return false ;
		}

		Tools.ajaxCall('exist_account?account=' + $email.val(), function (ret) {
			var num = ret.data.num;

			if(num >= 1){
				$email.siblings("p").html("邮箱已注册");
				$email.siblings("p").show();
				$email.focus();
			} else {
				if(typeof register =="function") {
					register();
				}
			}
		}, function (ret) {
			hasError = false;
			checkResult(hasError, $parentBox, $this);
		});
	}

	var email , pass , repass ;

	$("#register").on("click",function(){
		email = $.trim($email.val()),
		pass = $.trim($pass.val()),
		repass = $.trim($repass.val());
		
			examMail(register);
	});

	function register() {

		$('#register').off('click', register);
		Tools.ajaxCall('register?account=' + email + '&pwd=' + pass + '&from=pc', function (ret) {
			location.href = '/personal_center.html';
		}, function (ret) {
			$tips.html('注册失败').show();
			$('#register').on('click', register);
		});

		return false;
	}

	function bindWxMail() {
		//登录那边微信注册绑定邮箱过来的
		var parmas = ["account=",email,"&pwd=",pass,"&uuid=",$("#register").attr("uuid"),'&bind=',$("#register").attr("bind")].join("");
		Tools.ajaxCall('wx_bind_account?'+parmas,function(res){
			if(location.href.indexOf("position.html") && UNsuccessVote!=null) {
				var path = location.href+"?"+UNsuccessVote;
				location.href = path;
			} else {
				location.reload();
			}
			defer.resolve(res);
		},function(res){
			alert(res.rtnMsg);
		});
	}

	var _href = encodeURI(location.href.replace(/#.+/,""));

	var wxregister = null;
	

	$(".toregister").on("click",function(){
		//登录界面点击注册
		//getErwei();
	});

	var ws = null;

	$("#wxregister").on("click",function(){
		getErwei();
	});

	function getErwei(){
		var defer = $.Deferred();
		var p = defer.promise();
		if(ws) {
			ws.close();
		}

		var str = ['<img src="' , undefined ,'?t=' , $.now() , '">'];
		Tools.ajaxCall('get_wx_qrcode?type=2',function(res){
			str[1] = res.qrcode;
			$("#registerErwei").html(str.join(""));
			subErwei(res.uuid);
		});
	}

	function wsDataToJSON(str) {
		var d = str.split(",");
		var obj ={};
		for(var i = 0;i<d.length;i++) {
			d[i] = d[i].replace(":","::");
			var nv = d[i].split("::");
			obj[ nv[0] ] = nv[1];
		}
		return obj;
	}

	function subErwei(uuid) {
		var wsurl = 'ws://tj.campus.xunlei.com/pushMsg/'+uuid;
		ws = new WebSocket(wsurl);
		ws.onopen = function(){
			console.log("register ws succ");
		};
		ws.onmessage = function(res){
			console.log("微信扫描注册收到消息");
			var d = wsDataToJSON(res.data);
			$("#register").attr("uuid", d.uuid);
			CAMPUS2018.uuid = d.uuid;
			if(d.opResult==1) {
				//用戶名存在
				CAMPUS2018.sendUser();
			}
			if(d.opResult == 2) {
				//用戶名不存在
				$("#s_registerDiv").hide()

				$("#s_bindDiv .tit").html("注册");
				$("#s_bindDiv .mod_form_handle a").eq(0).attr("id","tonewCount").html("注册并绑定>>");
				$("#s_bindDiv .mod_form_handle a").eq(1).attr("id","tobind").html("已有邮箱帐号，登录>>");

				CAMPUS2018.notfindUser();
			}

			if(d.opResult == 6) {
				//已经微信注册但是没有绑定邮箱
				$("#s_registerDiv").hide();
				CAMPUS2018.notbindMail();
			}
		};
		ws.onerror = function(){
			console.log("微信扫描注册错误");
		}
		window.onbeforeunload = function(){
			try{
				 ws.close();
			} catch(error) {
				
			}
		}
	}


	return;

	if (Tools.hasLogin()) {
		//location.href = '/index.html';
	}

	$('#s_registerDiv .ipt_info').on('focus', function () {
		var $this = $(this);
		$this.parent('.form_box').addClass('focus');
	}).on('blur', function () {
		var $this = $(this), value = $.trim($this.val()), $parentBox = $this.parent('.form_box');
		$parentBox.removeClass('focus');
		switch ($this.data('type')) {
			case 'email':
				if (emailReg.test(value)) {
					$('#tips').hide();
					//增加检查油箱是否是已经注册过的
					Tools.ajaxCall('exist_account?account=' + value, function (ret) {
						var num = ret.data.num;

						if(num >= 1){
							$('#tips').show();
							$('#tips').html('此邮箱已注册!');
							hasError = true;
							checkResult(hasError, $parentBox, $this);
						} else {
							hasError = false;
							checkResult(hasError, $parentBox, $this);
						}
					}, function (ret) {
						hasError = false;
						checkResult(hasError, $parentBox, $this);
					});
					//hasError = false;
				} else {
					hasError = true;
				}
				checkResult(hasError, $parentBox, $this);
				break;
			case 'pass':
				if (value.length < 6) { //大于6位
					hasError = true;
				} else {
					password = value;
					hasError = false;
				}
				checkResult(hasError, $parentBox, $this);
				break;
			case 'repass':
				if (value !== '' && password !== '' && password === value) {
					hasError = false;
				} else {
					hasError = true;
				}
				checkResult(hasError, $parentBox, $this);
				break;
			//无需default
		}

	});
	function checkResult(hasError, $parentBox, $this){

		if (!hasError) {
			if ($parentBox.hasClass('error')) {
				$parentBox.removeClass('error');
				$this.siblings('.ico_f_error').remove();
			}
			if (!$parentBox.hasClass('correct')) {
				$parentBox.addClass('correct');
				$parentBox.append('<i class="ico_f_ok"></i>');
			}
		} else {
			if ($parentBox.hasClass('correct')) {
				$parentBox.removeClass('correct');
				$this.siblings('.ico_f_ok').remove();
			}
			if (!$parentBox.hasClass('error')) {
				$parentBox.addClass('error');
				$parentBox.append('<i class="ico_f_error"></i>');
			}
		}
	}

	//register
	$('#register').on('click', register);

	$repass.on('keyup', function (e) {
		if (e.keyCode === 13) {
			register();
		}
	});


})();
//# sourceMappingURL=build/maps/common.js.map
