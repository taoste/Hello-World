- 《[**如何将必应Bing每日图片设置为网站背景**](https://www.fanmingming.com/article/bing-images-bg.html)》  （ 2018 年 09 月 18 日  ） - 范明明

>> 乐哥备注： [**原载**](https://www.fanmingming.com/article/bing-images-bg.html) [[view-source](https://taoste.github.io/Hello-World/github/bg/index.php)] :  [当天](https://taoste.github.io/Hello-World/github/bg/index.php) / [前一天](https://taoste.github.io/Hello-World/github/bg/1.php)
（ [**View raw**](https://github.com/taoste/Hello-World/blob/master/github/bg/bg.7z?raw=true) / [**Download**](https://github.com/taoste/Hello-World/raw/master/github/bg/bg.7z) ）

> 前言

<p>
<a href="https://www.fanmingming.com/article/bing-images-bg.html">
<img src="https://www.fanmingming.com/usr/uploads/2018/09/3015358578.jpg" border="0" alt="bing.jpg" title="如何将必应Bing每日图片设置为网站背景"></a>
</p>

>>　　Bing每日图片相信每位使用过必应搜索的小伙伴都了解，网上也有很多关于如何将Bing每日图片设置为电脑壁纸的教程，甚至微软专门推出过一款Bing桌面的应用方便大家将必应的美图设置为电脑桌面壁纸。因为图片每日都不同并且每个图片后面都伴随一个小故事，受到了很多小伙伴的欢迎。

>>　　那么，如果可以把Bing的每日图片设置为博客背景会不会很酷炫呢？

> 接口

>>　　通过抓包，我们可以发现这个链接https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1

>>　　目前，国内版和国际版的每日图片内容显示一致，如果你想获取国际版的每日图片，只需将网址中的“cn”替换为“www”即可。

>>　　这里需要注意，链接中**idx=0表示是显示当天的时间，如果要显示昨天的就将idx=0改为idx=1**，以此类推。必应每日图片支持查看历史15天以内的图片。

>　　抓包显示结果：
  
<code><pre>
{"images":[{"startdate":"20180917","fullstartdate":"201809171600","enddate":"20180918","url":"/az/hprichbg/rb/CalidrisCanutus_ZH-CN10519054459_1920x1080.jpg","urlbase":"/az/hprichbg/rb/CalidrisCanutus_ZH-CN10519054459","copyright":"在设得兰群岛觅食的红腹滨鹬，苏格兰 (© Andrew Parkinson/Minden Pictures)","copyrightlink":"http://www.bing.com/search?q=%E7%BA%A2%E8%85%B9%E6%BB%A8%E9%B9%AC&form=hpcapt&mkt=zh-cn","title":"","quiz":"/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20180917_CalidrisCanutus%22&FORM=HPQUIZ","wp":true,"hsh":"0a7f98e36e11f76ca5baea28f6ff86ac","drk":1,"top":1,"bot":1,"hs":[]}],"tooltips":{"loading":"正在加载...","previous":"上一个图像","next":"下一个图像","walle":"此图片不能下载用作壁纸。","walls":"下载今日美图。仅限用作桌面壁纸。"}}
</code></pre> 

> 获取图片

>>　　有了接口我们就可以直接利用正则表达式去匹配相关字符串了。

>>　　以下是将必应每日图片通过php直接输出分辨率为1366X768图片的代码：
  
<code><pre>

<?php
    $str=file_get_contents('https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
if (preg_match("/<url>(.+?)<\/url>/ies", $str, $matches)) {
    $imgurl='https://cn.bing.com'.$matches[1];
}
if ($imgurl) {
    header('Content-Type: image/JPEG');
    @ob_end_clean();
    @readfile($imgurl);
    @flush();
    @ob_flush();
    exit();
} else {
    exit('error');
}
?>

</code></pre> 

>　　考虑到直接输出图片会占用一定的主机带宽，我们也可以将Bing图片做302跳转。以下是通过php将输出图片302定向到Bing的代码：
  
<code><pre>

<?php
    $str=file_get_contents('https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
if (preg_match("/<url>(.+?)<\/url>/ies", $str, $matches)) {
    $imgurl='https://cn.bing.com'.$matches[1];
}
if ($imgurl) {
    header("Location: $imgurl");    //输出302跳转
} else {
    exit('error');
}
?>

</code></pre> 

　　根据需要复制上面两段代码中的任意1段，将文件保存为bg.php或任意名称.php上传到你的服务器。访问http：//***.com/bg.php就可以看到必应每日图片了。

　　考虑到有些网友的需求，增加了输出1920X1080高清图片的php代码。
  
<code><pre>

<?php
    $str=file_get_contents('https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
if (preg_match("/<urlBase>(.+?)<\/urlBase>/ies", $str, $matches)) {
    $imgurl='https://cn.bing.com'.$matches[1].'_1920x1080.jpg';
}
if ($imgurl) {
    header('Content-Type: image/JPEG');
    @ob_end_clean();
    @readfile($imgurl);
    @flush();
    @ob_flush();
    exit();
} else {
    exit('error');
}
?>

</code></pre> 

> 源码下载

>> 代码已上传至Github，下载地址：https://github.com/fanmingming/bing

>设置背景

>>　　设置网站背景的方法有很多，有些博客内置了设置背景URL，只要将这个URL地址填写为我们上传好的php绝对路径就大功告成了！赶快去看看效果吧！

>  最后修改：2019 年 01 月 04 日 08 : 37 AM 
