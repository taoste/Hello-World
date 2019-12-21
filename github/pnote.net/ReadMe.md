- [Pan](https://taoste.github.io/Hello-World/github/pnote.net/pan/index.html) | 
[view-source](pan/index.html) : https://pnote.net/pan/

打包下载：[View Raw](https://github.com/taoste/Hello-World/blob/master/github/pnote.net/pan.7z) / [Download](
https://github.com/taoste/Hello-World/blob/master/github/pnote.net/pan.7z?raw=true)


[**引用**](https://github.com/taoste/Hello-World/blob/master/Tools/PanDownload/README.md) : [**武大大的笔记**](https://pnote.net/) | [百度网盘&蓝奏网盘提取码查询](https://pnote.net/pan/)  ( https://pnote.net/pan/ )

> 2016-12-10:《[**银行卡号,每隔4位数字加一个空格**](https://pnote.net/yin-xing-qia-hao-mei-ge-4wei-shu-zi-jia-yi-ge-kong-ge/)》 

>> 1. 原生js写法

<pre><code>
!function () {
    document.getElementById('bankCard').onkeyup = function (event) {
        var v = this.value;
        if (/\S{5}/.test(v)) {
            this.value = v.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
        }
    };
}();
</code></pre>

>> 2. jQuery写法

<pre><code>
!function () {
    $('#J_BankCard').on('keyup mouseout input', function () {
        var $this = $(this),
            v = $this.val();
        /\S{5}/.test(v) && $this.val(v.replace(/\s/g, '').replace(/(.{4})/g, "$1 "));
    });
}();
</code></pre>

-----------------------------------------------------------

- 《[**在线查询百度网盘提取码**](https://www.52pojie.cn/forum.php?mod=viewthread&tid=920211&ctid=1767)》 - 『原创发布区』 - [**吾爱破解**](https://www.52pojie.cn/) - LCG - LSG |安卓破解|病毒分析|破解软件|www.52pojie.cn 
> 闲着没事做了个在线查询百度网盘提取码的工具，大牛轻喷～！

>> 命令行版源码：https://github.com/wu-dada/baidupankey

> [**引用**](https://github.com/taoste/Hello-World/tree/master/github/pnote.net) ：[**武大大的笔记**](https://pnote.net/) | [百度网盘&蓝奏网盘提取码查询](https://pnote.net/pan/)  ( https://pnote.net/pan/)

>> 2018-03-05:《[**查询百度网盘提取密码**](https://pnote.net/cha-xun-bai-du-wang-pan-ti-qu-mi-ma/)》 

>> <img src="https://attach.52pojie.cn/forum/201904/04/000826yyepgkzytok77dt9.png"/>

-----------------------------------------------------------