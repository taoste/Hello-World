- **Twitter** : Barret李靖@[Barret_China](https://twitter.com/Barret_China/) · [上午1:31 · 2020年6月6日](https://twitter.com/Barret_China/status/1269079416778321920)
> 一句代码实现站点暗黑模式的调整：
```
body {
  filter: invert(100%) hue-rotate(180deg);
}
```
>大部分浏览器支持，https://francoisbest.com/posts/2020/dark-mode-for-excalidraw ，文章中的 Demo 可以直接测试查看效果。

>> 宫不上叔@gongbaodd · [上午3:19 · 2020年6月6日](https://twitter.com/gongbaodd/status/1269106580915548161) 回复: @Barret_China 》可是照片不都反相了？

>> vvtommy@vvtommy ·  [上午5:41 · 2020年6月6日](https://twitter.com/vvtommy/status/1269142375986630656) 回复: @gongbaodd 和 @Barret_China 》可以考虑再转回来
```
img, video {
  filter: invert(100%) hue-rotate(180deg);
}
```

- 《[CSS变量实现暗黑模式的示例代码](https://www.jb51.net/css/716457.html)》_CSS教程_CSS_网页制作_脚本之家 

- 《[几行代码让你的网页适配黑暗模式](https://blog.csdn.net/weixin_43067157/article/details/104890239)》 -CSDN博客

----------------------------------------------------------------

<details>
    <summary>
    <a href="https://github.com/xiaoandx/blog/blob/master/article/Website-black.html">Tips</a> : <b>
<a href="https://blog.xiaoandx.club/article/Website-black.html">快速改变网站为黑灰色调（css）</a>
</b>  |  <a href="https://github.com/xiaoandx/">一个拥有像素眼的后端工程师</a> - <a href="https://blog.xiaoandx.club/">大眼睛工程师</a>
     </summary> <br/>  
 <article class="post-content">
    <h1>快速改变网站为黑灰色调（css）</h1>
    <h3 id="说明：">
<a href="#说明：" class="headerlink" title="说明：">
</a>说明：</h3>
<blockquote>
<p>通过在css全局中加入以下代码，可使网站整体色调改变</p>
</blockquote>
<p>下面将演示改变前后的区别</p>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405115233.png" />
</p>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405115204.png" />
</p>
<h3 id="1-修改网站的全局CSS">
<a href="#1-修改网站的全局CSS" class="headerlink" title="1. 修改网站的全局CSS">
</a>1. 修改网站的全局CSS</h3>
<blockquote>
<p>如果只需要改变某一个页面色调，只用在该页面中加入css代码即可</p>
</blockquote>
<h4 id="1-1-cs">
<a href="#1-1-cs" class="headerlink" title="1.1 cs">
</a>1.1 cs</h4>
<figure class="highlight css">
<table>
<tr>
<td class="gutter">
<pre>
<span class="line">1</span>
<br>
<span class="line">2</span>
<br>
<span class="line">3</span>
<br>
<span class="line">4</span>
<br>
<span class="line">5</span>
<br>
<span class="line">6</span>
<br>
<span class="line">7</span>
<br>
</pre>
</td>
<td class="code">
<pre>
<span class="line">
<span class="selector-tag">html</span>,<span class="selector-tag">body</span>&#123;</span>
<br>
<span class="line"> 	<span class="attribute">filter</span>: <span class="built_in">grayscale</span>(100%);</span>
<br>
<span class="line">	<span class="attribute">-webkit-filter</span>:<span class="built_in">grayscale</span>(100%);</span>
<br>
<span class="line">	<span class="attribute">-moz-filter</span>:<span class="built_in">grayscale</span>(100%);</span>
<br>
<span class="line">	<span class="attribute">-ms-filter</span>:<span class="built_in">grayscale</span>(100%) ;</span>
<br>
<span class="line">	<span class="attribute">-o-filter</span>:<span class="built_in">grayscale</span>(100%);</span>
<br>
<span class="line">&#125;</span>
<br>
</pre>
</td>
</tr>
</table>
</figure>
<h4 id="1-2-JavaScript">
<a href="#1-2-JavaScript" class="headerlink" title="1.2 JavaScript">
</a>1.2 JavaScript</h4>
<figure class="highlight javascript">
<table>
<tr>
<td class="gutter">
<pre>
<span class="line">1</span>
<br>
</pre>
</td>
<td class="code">
<pre>
<span class="line">
<span class="built_in">document</span>.documentElement.style.filter=<span class="string">"grayscale(100%)"</span>
</span>
<br>
</pre>
</td>
</tr>
</table>
</figure>
<h3 id="2-查看效果">
<a href="#2-查看效果" class="headerlink" title="2.查看效果">
</a>2.查看效果</h3>
<blockquote>
<p>查看修改后的效果，显示效果无误后即修改成功</p>
</blockquote>
<h3 id="3-拓展想法">
<a href="#3-拓展想法" class="headerlink" title="3.拓展想法">
</a>3.拓展想法</h3>
<blockquote>
<p>可以运用JavaScript来实现动态改变，设定指定时间区段来改变网站色调</p>
</blockquote>
<h3 id="4-大厂的代码">
<a href="#4-大厂的代码" class="headerlink" title="4.大厂的代码">
</a>4.大厂的代码</h3>
<h4 id="4-1-百度">
<a href="#4-1-百度" class="headerlink" title="4.1 百度">
</a>4.1 百度</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120417.png" />
</p>
<h4 id="4-2-淘宝">
<a href="#4-2-淘宝" class="headerlink" title="4.2 淘宝">
</a>4.2 淘宝</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120510.png" />
</p>
<h4 id="4-3-网易云音乐">
<a href="#4-3-网易云音乐" class="headerlink" title="4.3 网易云音乐">
</a>4.3 网易云音乐</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120551.png" />
</p>
<h4 id="4-4-360首页">
<a href="#4-4-360首页" class="headerlink" title="4.4 360首页">
</a>4.4 360首页</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120623.png" />
</p>
<h4 id="4-5-腾讯">
<a href="#4-5-腾讯" class="headerlink" title="4.5 腾讯">
</a>4.5 腾讯</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405121410.png" />
</p>
<h4 id="4-6-掘金">
<a href="#4-6-掘金" class="headerlink" title="4.6 掘金">
</a>4.6 掘金</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120723.png" />
</p>
<h4 id="4-7-CSDN">
<a href="#4-7-CSDN" class="headerlink" title="4.7 CSDN">
</a>4.7 CSDN</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120753.png" />
</p>
<h4 id="4-8-中国中央政府网">
<a href="#4-8-中国中央政府网" class="headerlink" title="4.8 中国中央政府网">
</a>4.8 中国中央政府网</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120831.png" />
</p>
<h4 id="4-9国务院新闻办公室">
<a href="#4-9国务院新闻办公室" class="headerlink" title="4.9国务院新闻办公室">
</a>4.9国务院新闻办公室</h4>
<p>
<img src="https://gitee.com//xiaoandx_my/images/raw/master/img/20200405120849.png" />
</p>
  </article>
</details>
