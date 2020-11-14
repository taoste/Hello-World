<h1 class="article-title J-articleTitle">
<span>GitHub 标星 119K+！这些神器仅需一行代码即可下载全网视频！</span>
</h1>
<div class="article-infos-wrap">
<div class="article-infos">
<span class="article-info">
<time dateTime="2020-10-23 17:08:35" title="2020-10-23 17:08:35"> <span>21</span> 天前<span class="com-v-box">2020-10-23 17:08:35</span>
</time>
</span>
<span class="article-info">阅读 <!-- -->66</span>0</div>
<div class="article-infos-extra">
</div>
</div>
</div>
<div class="com-markdown-collpase">
<div class="com-markdown-collpase-main">
<div class="rno-markdown J-articleContent">  
  <img src="https://ask.qcloudimg.com/http-save/yehe-6849268/3ujww9f7ve.jpeg" />
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/3ujww9f7ve.jpeg">
</span>
</div>
</figure>
<p>作者 | JackTian</p>
<p>来源 | 杰哥的IT之旅（ID：Jake_Internet）
转载请联系授权（微信ID：Hc220066）</p>
<p>大家好，我是 JackTian。</p>
<p>今天这篇文章的内容对于经常浏览各大视频网站的同学来说，是一大神器工具。当你看到自己目前所需的视频时想尽各种办法保存至本地，方便后期再次回看。恰巧有些视频可能需要会员才能够下载，有些第三方的视频下载器可能在下载过程中比较缓慢。</p>
<p>这次给小伙伴们推荐 GitHub 上的几个仓库，全是神器，通过其中的一款神器仅需要用一行代码即可下载全网视频！这对于喜欢屯视频的小伙伴来说，一定会喜欢这几款视频下载神器工具，真香呐！</p>
<p>
<strong>You-Get（35.3K Star）</strong>
</p>
    <img src="https://ask.qcloudimg.com/http-save/yehe-6849268/63fougkz5t.png" />
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/63fougkz5t.png">
</span>
</div>
</figure>
<p>You-Get 是一个很小的命令行实用程序，可以从 Web 上下载媒体内容（视频，音频，图像）。</p>
<p>支持 YouTube、Facebook、网易视频、百度贴吧、哔哩哔哩、爱奇艺、酷狗音乐、秒拍、腾讯视频、企鹅直播、新浪视频、搜狐视频、土豆、优酷、芒果TV、快手、抖音、TikTok、知乎等几十种国内外知名视频网站视频、图片、音频下载，同时支持将网页视频导出至本地播放器进行在线播放，缓冲速度快，还免去了广告。</p>
    <img src="https://ask.qcloudimg.com/http-save/yehe-6849268/wlgs5h8kvy.gif" />  
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/wlgs5h8kvy.gif">
</span>
</div>
</figure>
<p>
<strong>安装：</strong>
</p>
<p>这个工具包是基于 Python 开发，所以你的电脑需有如下三种依赖，如果你的电脑可运行 Python，那即可安装这个工具包，否则需先配置 Python 环境后再安装。</p>
<ul class="ul-level-0">
<li>Python 3.2 or above</li>
<li>FFmpeg 1.0 or above</li>
<li>(Optional) RTMPDump</li>
</ul>
<p>安装这个工具包有多种方式，具体举例如下：</p>
<p>
<strong>第一种：通过pip安装</strong>
</p>
<pre class="prism-token token language-javascript">pip3 install you-get
</pre>
<p>
<strong>第二种：直接 Git</strong>
</p>
<pre class="prism-token token language-javascript">git clone git://github.com/soimort/you-get.git
</pre>
<p>然后直接运行<code>./setup.py</code>即可。</p>
<p>
<strong>第三种：通过 HomeBrew 安装（针对 Mac）</strong>
</p>
<pre class="prism-token token language-javascript">brew install you-get
</pre>
<p>除此之外，还有其他的几种安装方式，就不一一列举了，感兴趣的可直接去访问：</p>
<blockquote>
<p>GitHub 地址：https://github.com/soimort/you-get</p>
</blockquote>
<p>
<strong>使用 you-get</strong>
</p>
<p>复制视频链接，在终端内执行 you-get 后加视频的 URL 链接即可进行下载。</p>
<p>语法示例：</p>
<pre class="prism-token token language-javascript">you-get &lt;url&gt;
</pre>
<p>案例</p>
<pre class="prism-token token language-javascript">you-get &#x27;https://www.youtube.com/watch?v=jNQXAC9IVRw&#x27;
</pre>
<p>设置下载文件的路径和名称</p>
<pre class="prism-token token language-javascript">you-get -o ~/Videos -O zoo.webm &#x27;https://www.youtube.com/watch?v=jNQXAC9IVRw&#x27;
</pre>
<p>当你看到感兴趣的视频后，你可以使用<code>--info/-i</code>选项查看所有可用的质量和格式：</p>
<pre class="prism-token token language-javascript">you-get -i &#x27;https://www.youtube.com/watch?v=jNQXAC9IVRw&#x27;
</pre>
<p>使用<code>--player/-p</code>选项将视频输入到你选择的媒体播放器中，例如<code>mpv</code>或<code>vlc</code>，而不是下载它：</p>
<pre class="prism-token token language-javascript">you-get -p vlc &#x27;https://www.youtube.com/watch?v=jNQXAC9IVRw&#x27;
</pre>
<p>或者，如果您希望在浏览器中观看视频，而没有广告或评论部分：</p>
<pre class="prism-token token language-javascript">you-get -p chromium &#x27;https://www.youtube.com/watch?v=jNQXAC9IVRw&#x27;
</pre>
<p>
<strong>youtube-dl（71.8K Star）</strong>
</p>
    <img src="https://ask.qcloudimg.com/http-save/yehe-6849268/97ymx49tmy.png" />
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/97ymx49tmy.png">
</span>
</div>
</figure>
<p>youtube-dl 是今天这篇文章中 Star 最高的，也是最广为人知的视频下载器，它也是一个命令行程序，可以从 YouTube.com 和其他一些网站下载视频。</p>
<p>youtube-dl 需要 2.6、2.7 或 3.2+ 版本的 Python 解释器，并且它不是特定于平台的。它应该可以在您的 Unix 机器，Windows 或 macOS 上运行。</p>
<p>相比 You-Get ，youtube-dl 这款工具可能对国内的一些网站支持较差，但是并不影响它成为一款优质的视频下载工具。</p>
<p>通过使用 youtube-dl 视频下载工具，你可以指定一些参数，例如：网络选项、地理限制、视频选择、下载选项、文件系统选项、缩略图、详细进度、模拟选项、解决办法、视频格式选项、字母选项、身份验证选项、后处理选项等配置；</p>
<p>可见上述这么多配置参数选项，再下载视频时对参数的选择与配置会比较麻烦，不过也充分的显示出了 youtube-dl 的灵活性。</p>
<blockquote>
<p>GitHub 地址：https://github.com/ytdl-org/youtube-dl</p>
</blockquote>
<p>
<strong>Annie（12.5K Star）</strong>
</p>
    <img src="https://ask.qcloudimg.com/http-save/yehe-6849268/yupzhgtnwi.png" />
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/yupzhgtnwi.png">
</span>
</div>
</figure>
<p>Annie 是一款使用  Go 语言构建的快速、简单、干净的视频下载器，支持跨平台 Windows、Linux、MacOS 等操作系统，安装使用简单。</p>
<p>
<strong>Annie 支持可下载视频的网站：</strong>
</p>
    <img src="https://ask.qcloudimg.com/http-save/yehe-6849268/u4kevp3xq0.png" />
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/u4kevp3xq0.png">
</span>
</div>
</figure>
<p>
<strong>特征</strong>
</p>
<ul class="ul-level-0">
<li>多视频下载</li>
<li>视频播放列表下载</li>
<li>恢复下载</li>
<li>自动重试</li>
<li>自定义 Cookies 和 Proxy</li>
<li>多线程 和 短链接</li>
<li>使用指定的引荐来源网址</li>
<li>指定输出路径和名称</li>
<li>重用提取的数据</li>
</ul>
<p>
<strong>安装</strong>
</p>
<p>在安装 Annie 之前，首先安装依赖项 FFmpeg，它是完整的跨平台解决方案，用于记录，转换和流传输音频和视频。</p>
<p>官网：https://www.ffmpeg.org/</p>
<blockquote>
<p>FFmpeg 不影响下载，仅影响最终文件合并。</p>
</blockquote>
<p>安装 Annie，可使用 go get</p>
<pre class="prism-token token language-javascript">GO111MODULE=on go get github.com/iawia002/annie
</pre>
<p>MacOS 用户安装</p>
<pre class="prism-token token language-javascript">brew install annie
</pre>
<p>
<strong>使用 annie</strong>
</p>
<pre class="prism-token token language-javascript">annie [OPTIONS] URL [URL...]
</pre>
<p>
<code>-i</code>选项显示所有可用质量的视频，而无需下载。</p>
<pre class="prism-token token language-javascript">annie -i https://www.youtube.com/watch ？v = dQw4w9WgXcQ
</pre>
<p>
<code>-p</code>选项下载整个播放列表，而不是单个视频。</p>
<pre class="prism-token token language-javascript">annie -i -p https://www.bilibili.com/bangumi/play/ep198061
</pre>
<p>一次下载多个URL：</p>
<pre class="prism-token token language-javascript">annie -i https://www.bilibili.com/video/av21877586 https://www.bilibili.com/video/av21990740
</pre>
<p>
<code>-o</code>选项设置路径，而<code>-O</code>选项设置下载文件的名称</p>
<pre class="prism-token token language-javascript">annie -o ../ -O “ hello ” https://...
</pre>
<p>除此之外，还有很多参数选项，就不一一列举了，感兴趣的可直接去访问：</p>
<blockquote>
<p>GitHub 地址：https://github.com/iawia002/annie</p>
</blockquote>
<p>
<strong>总结</strong>
</p>
<p>通过以上三种优质的 GitHub 开源项目来看，其最终实现目的大同小异，可根据个人喜好选择适合自己的视频下载器，希望本篇文章对你有所帮助，如果你有更好的优质开源项目，也欢迎推荐给杰哥。</p>
