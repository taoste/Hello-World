/**
 * URL链接处理模块
 * @author: Travis
 * @date:   2014-01-10
 */
define(function(require, exports, module) {
    var Urls = {
        // 删除哈希
        _removeHash: function(url) {
            var rHash = /\#.*$/,
                match = url.match(rHash);
            
            url = url.replace(rHash, '');
            return {
                url: url,
                hash: (match && match[0]) ? match[0] : ''
            };
        },
        // 加入参数生成新链接
        bulid: function(parmas, url) {
            var paramArr = [],
                queryArr = [],
                hashArr,
                i;
            
            parmas = parmas ? parmas : {};
            url = url || window.location.href;
            hashArr = this._removeHash(url);
            url = hashArr.url;

            for(i in parmas) {
                if(parmas[i]) {
                    paramArr.push(i);
                    queryArr.push(i +'=' +encodeURIComponent(parmas[i]));
                }
            }

            url = this.removeParams(paramArr, url);
            return url + (queryArr[0] ? (url.indexOf('?') === -1 ? '?' : '&') + queryArr.join('&') : '') + hashArr.hash;
        },
        // 删除链接中的指定参数
        removeParams: function(parmas, url) {
            var i = 0, hashArr;

            url = url || window.location.href;
            hashArr = this._removeHash(url);
            url = hashArr.url;

            for(; i < parmas.length; i++) {
                url = url.replace(new RegExp('(?:[\\?\\&]('+parmas[i]+'=[^&]*))', 'g'), '');
            }
            url = url.replace(/\&+/, '&').replace(/[\&]+$/, '').replace(/[\?]+$/, '') + hashArr.hash;
            if(/^[^?]*\&/.test(url)) {
                url = url.replace('&', '?');
            }
            return url;
        },
        // 跳转
        redirect: function(url) {
            window.location.href = url;
            window.event.returnValue = false;
        },
        // 获取当前url 不带参数和hash
        getCurrentURL: function() {
            var loc = window.location;
            return loc.protocol + '//' + loc.host + loc.pathname;
        },
        // 获取url参数
        getQueryString: function(name) {
            var i, params = {},
                key, value, pos,
                search = window.location.search ? window.location.search.substr( 1 ).split("&") : [];

            for(i = 0; i < search.length; i++ ) {
                pos = search[i].indexOf("=");
                if(pos > 0) {
                    key = search[i].substring(0, pos);
                    value = search[i].substring(pos + 1);
                    params[key] = decodeURIComponent(value);
                }
            }
            if(typeof name === "undefined") {
                return params;
            }
            return params[name] ? params[name] : undefined;
        }
    };

    module.exports = Urls;
});