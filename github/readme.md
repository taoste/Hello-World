- [HTML URL 编码](http://www.w3school.com.cn/tags/html_ref_urlencode.html)

- [使用 HTML5 音频和视频](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Using_HTML5_audio_and_video) | [Web 技术文档](https://developer.mozilla.org/zh-CN/docs/Web) - MDN
(💖 [关于GitHub 及 编程 · Issue #2 · taoste/taoste.github.io](https://github.com/taoste/taoste.github.io/issues/2))

`< pre >< code >

在HTML中嵌入媒体：
  
  < video src=" http://v2v.cc/~j/theora_testsuite/320x240.ogg " controls >
 你的浏览器不支持 < code > video < / code > 标签.
 < / video>
 
 将音频嵌入到HTML文档的例子。
  
 < audio src=" /test/audio.ogg " >
 你的浏览器不支持audio标签
 < / audio >
 
< / code >< / pre >`

- **[在页面中嵌入自适应视频的方法](http://www.zphj1987.com/2015/10/13/%E5%9C%A8%E9%A1%B5%E9%9D%A2%E4%B8%AD%E5%B5%8C%E5%85%A5%E8%87%AA%E9%80%82%E5%BA%94%E8%A7%86%E9%A2%91%E7%9A%84%E6%96%B9%E6%B3%95/)** | zphj1987'Blog

关于视频的自适应看到 [google 自适应设置建议](https://developers.google.com/web/fundamentals/media/video/size-videos-correctly?hl=zh-cn#section) 这个介绍的很好

主要是这段代码:

`
.video-container {

        position: relative;
        
        padding-bottom: 56.25%;
        
        padding-top: 30px;
        
        height: 0;
        
        overflow: hidden;
        
    }
    .video-container iframe,
    
    .video-container object,
    
    .video-container embed {
    
        position: absolute;
        
        top: 0;
        
        left: 0;
        
        width: 100%;
        
        height: 100%;
        
    }   
`    
    
上面的56.25%实际是16:9的视频的值，这个可以根据自己的视频高宽比进行设置

( 其他：[css - html5 video标签 自适应](https://segmentfault.com/q/1010000012431653) - SegmentFault 思否 )  


- **HTML 相对路径&目录**

> [谈谈HTML/CSS/JS代码中的文件相对路径](https://www.jianshu.com/p/f84bce255bb0) - 简书

> [HTML相对路径 上级目录及下级目录的写法_HTML/Xhtml_网页制作](https://www.jb51.net/web/17522.html)_脚本之家


- **收集整理日常发现的好资源、前端资源汇总**( [国内](open_source_team.md) / [国外](外国.md) ) ：

参阅并感谢：@[poetries](https://github.com/poetries/mywiki)、
@[niezhiyang](https://github.com/niezhiyang/open_source_team)、


---------------------------------------------------------------------------------

- Baidu（百度）   |  Beijing, China http://www.baidu.com
> https://github.com/baidu

---------------------------------------------------------------------------------

- Alibaba （阿里巴巴）  | Hangzhou, China http://www.alibaba.com
> https://github.com/alibaba
- AntV team （蚂蚁金服 - 体验技术部 - 数据可视化） https://github.com/antvis
>    AntV http://antvis.github.io/

---------------------------------------------------------------------------------

- Tencent （腾讯） | Shenzhen, China https://opensource.tencent.com
> https://github.com/tencent

---------------------------------------------------------------------------------

- 钱途互联前端团队  | guangzhou
> https://github.com/frontui
- frontui文档说明 
> http://frontui.github.io/document/
- fed博客 (Frontpay FED | 钱沿支付前端团队)
> http://frontui.github.io/blog

---------------------------------------------------------------------------------
- 其他GitHub个人用户：

》 [JimmyLv](https://github.com/JimmyLv/jimmylv.github.io)

》 [**李笑来**](http://lixiaolai.com/) | [{am}xiaolai](https://xiaolai.github.io/)
> 
> [我终于有了一个能够发出“永不消失的电波”的电台:ZeroNet](http://lixiaolai.com/2017/05/22/the-never-disappeared/) | [{am}xiaolai](http://127.0.0.1:43110/xiaolai.bit)@[zeronet](http://127.0.0.1:43110/)
> 
> [听完李笑来的录音，我竟然学到了什么？](https://wwggyy.github.io/life/2018/07/07/lixiaolai.html) - 纯洁的微笑博客


》 [零网（ZeroNet）初探](https://reuixiy.github.io/technology/internet/zeronet/2017/09/01/first-exploration-of-the-zeronet.html) | reuixiy

> 零网（ZeroNet）:
> 开放，自由，去中心化的网络，
> 使用 Bitcoin 加密和 BitTorrent 网络

> 如何安装 ZeroNet？
> 
> 安装很简单，按照网站的说明操作即可：
> 
> 官网：https://zeronet.io/
> 
> GitHub：https://github.com/hellozeronet/zeronet
> 
> 官方文档的中文翻译：https://stgapr.github.io/zeronet-Documentation-ZH_CN/ （由@[stgapr](https://github.com/stgapr/)：提供的《[ZeroNet](https://stgapr.github.io/zeronet-Documentation-ZH_CN/)|[FAQ 常见问题](https://stgapr.github.io/zeronet-Documentation-ZH_CN/faq/)》）

> (请大家定期备份/ZeroNet/data/user.json 这是你账号的唯一凭证!)
