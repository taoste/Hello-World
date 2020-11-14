<details>
    <summary>
    <b>
<a href="https://cloud.tencent.com/developer/article/1653118">神器工具：新一代多系统启动 U 盘装机解决方案</a>
</b>     
      大家好，我是 JackTian。
<br/>
在平时的工作中，比如我们需要重新安装一个 windows 操作系统，得通过第三方软件刻录镜像，随后将刻录好的镜像文件放置到 U 盘里面，通过启动设备并结合一些相关的配置进行以 USB 的方式启动。
<br/>
一个 U 盘里面往往只能制作成一个新系统的启动盘，当你要想增加其他系统时，只能通过重新刻录，每次都需要反复这样的操作，是非常花费时间的。
<br/>
那么，今天给大家推荐一种新的可启动 USB 的解决方案：多合一启动盘制作工具 —— Ventoy。<br/>
</summary> 
<h1>
<span>神器工具：新一代多系统启动 U 盘装机解决方案</span>
</h1>
<div class="article-infos-wrap">
<div class="article-infos">
<span class="article-info">
<time dateTime="2020-06-30 14:37:10" title="2020-06-30 14:37:10"> 2020-06-30<span class="com-v-box">2020-06-30 14:37:10</span>
</time>
</span>
<span class="article-info">阅读 <!-- -->171</span>0</div>
<div class="article-infos-extra">
</div>
</div>
</div>
<div class="com-markdown-collpase">
<div class="com-markdown-collpase-main">
<div class="rno-markdown J-articleContent">
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/hjlflz0al5.jpeg">
</span>
</div>
</figure>
<p>大家好，我是 JackTian。</p>
<p>在平时的工作中，比如我们需要重新安装一个 windows 操作系统，得通过第三方软件刻录镜像，随后将刻录好的镜像文件放置到 U 盘里面，通过启动设备并结合一些相关的配置进行以 USB 的方式启动。</p>
<p>一个 U 盘里面往往只能制作成一个新系统的启动盘，当你要想增加其他系统时，只能通过重新刻录，每次都需要反复这样的操作，是非常花费时间的。</p>
<p>那么，今天给大家推荐一种新的可启动 USB 的解决方案：<strong>多合一启动盘制作工具</strong> —— Ventoy。</p>
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/1ym74qaon6.png">
</span>
</div>
</figure>
<h4 id="%E4%BB%80%E4%B9%88%E6%98%AF-Ventoy%EF%BC%9F" name="%E4%BB%80%E4%B9%88%E6%98%AF-Ventoy%EF%BC%9F">
<strong>什么是 Ventoy？</strong>
</h4>
<p>Ventoy 是一个免费制作可启动 U 盘的开源工具，有了 Ventoy 就无需反复格式化 U 盘，只需把 ISO 文件拷贝到 U 盘里面就可以启动了，无需其他操作。</p>
<p>可一次性拷贝多个不同类型的 ISO 文件，在启动 Ventoy 时，将显示一个菜单来进行选择，无差异支持 Legacy BIOS 和 UEFI 模式。</p>
<h4 id="Ventoy-%E7%89%B9%E7%82%B9" name="Ventoy-%E7%89%B9%E7%82%B9">
<strong>Ventoy 特点</strong>
</h4>
<ul class="ul-level-0">
<li>开源、使用简单、快速</li>
<li>直接从 ISO 文件启动，无需解开</li>
<li>支持 Legacy + UEFI 模式（UEFI 模式支持安全启动）</li>
<li>支持持久化</li>
<li>支持直接启动 WIM 文件</li>
<li>支持自动安装部署</li>
<li>支持超过 4GB 的 ISO 文件</li>
<li>支持保留 ISO 原始的启动菜单</li>
<li>支持多种常见的操作系统（Windows、Linux、VMware ESXi 等）</li>
<li>支持插件扩展</li>
<li>支持启动过程中 U 盘设置写保护</li>
<li>支持 ISO 文件显示列表模式和目录模式</li>
<li>不影响 U 盘的使用，在升级时数据将不会丢失，无需跟随操作系统的升级而升级</li>
</ul>
<h4 id="Ventoy-%E5%AE%89%E8%A3%85%E5%8C%85%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80" name="Ventoy-%E5%AE%89%E8%A3%85%E5%8C%85%E4%B8%8B%E8%BD%BD%E5%9C%B0%E5%9D%80">
<strong>Ventoy 安装包下载地址</strong>
</h4>
<blockquote>
<p>https://ventoy.lanzous.com/b01bd54gb</p>
</blockquote>
<p>Ventoy 提供了 Windows 和 Linux 两个系统版本的控制工具，具体使用方法如下：</p>
<h4 id="Windows-%E5%AE%89%E8%A3%85-Ventoy" name="Windows-%E5%AE%89%E8%A3%85-Ventoy">
<strong>Windows 安装 Ventoy</strong>
</h4>
<p>下载  ventoy-1.0.12-windows.zip 安装包，解压。</p>
<p>执行 <code>Ventoy2Disk.exe</code>，选择 U 盘设备，点击<code>安装</code>按钮即可。</p>
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/vg3odmyq7s.png">
</span>
</div>
</figure>
<ul class="ul-level-0">
<li>Ventoy In Package：当前安装包里面的 Ventoy 版本号；</li>
<li>Ventoy In Device：U 盘中已安装的 Ventoy 版本号，如果为空则表示未安装过 Ventoy；</li>
<li>Install：把 Ventoy 安装到 U 盘，只第一次时需要，其他情况只 Update 升级即可；</li>
<li>Update：升级 U 盘中的 Ventoy 版本，升级不会影响 ISO 文件；</li>
</ul>
<h4 id="Linux-%E5%AE%89%E8%A3%85-Ventoy" name="Linux-%E5%AE%89%E8%A3%85-Ventoy">
<strong>Linux 安装 Ventoy</strong>
</h4>
<p>下载 ventoy-1.0.12-linux.tar.gz 安装包，解压之后的目录下执行此脚本。</p>
<p>在终端以 root 用户权限执行如下命令：</p>
<pre class="prism-token token language-javascript"># sh Ventoy2Disk.sh -i /dev/XXX`
</pre>
<p>而对于一些操作系统（ubuntu / deepin）来说， 执行时需在前面加 sudo</p>
<pre class="prism-token token language-javascript">$ sudo sh Ventoy2Disk.sh -i /dev/XXX
</pre>
<p>其中<code>/dev/XXX</code>是 U 盘对应的设备名，比如：<code>/dev/sdb</code>，必须输入正确的设备名，如果输入错误可能会把你的系统盘格式化，因为 Ventoy 不会检查你摄入的设备名是本地磁盘还是 U 盘。</p>
<p>
<strong>选项含义：</strong>
</p>
<ul class="ul-level-0">
<li>-i：安装 ventoy 到磁盘中 （如果对应磁盘已经安装了 ventoy，则会失败）；</li>
<li>-I：强制安装 ventoy 到磁盘中；</li>
<li>-u：升级磁盘中的 ventoy 版本；</li>
</ul>
<blockquote>
<p>
<strong>注意：</strong> USB 驱动器将被格式化，安装后所有数据将会丢失。


只需要安装一次 Ventoy，之后所需要做的就是将 ISO 文件复制到 USB。


您也可以将其用作普通的 USB 驱动器来存储文件，这将不会影响 Ventoy 的功能。</p>
</blockquote>
<h4 id="%E6%8B%B7%E8%B4%9D-ISO-%E6%96%87%E4%BB%B6" name="%E6%8B%B7%E8%B4%9D-ISO-%E6%96%87%E4%BB%B6">
<strong>拷贝 ISO 文件</strong>
</h4>
<p>Ventoy 安装完成后，U 盘将会被分为两个区。</p>
<p>第一个分区：将会被默认格式化为 exFAT 格式的文件系统，这个分区你可以存放日常使用的普通文件，当作日常普通 U 盘使用。</p>
<p>当你再次需要制作启动盘时，你只需将 ISO 文件拷贝到此分区中即可。</p>
<p>你也可以将 ISO 文件存放置在其他任何位置，Ventoy 将会递归搜索所有目录和子目录，进行查找所有 ISO 文件，并按启动字母顺序进行列出。</p>
<blockquote>
<p>
<strong>注意：</strong> ISO 文件的完整路径（目录，子目录和文件名）不能包含空格或非 ASCII 字符，拷贝到 ISO 文件后，会直接做启动引导。</p>
</blockquote>
<h4 id="%E6%9B%B4%E6%96%B0-ISO-%E6%96%87%E4%BB%B6" name="%E6%9B%B4%E6%96%B0-ISO-%E6%96%87%E4%BB%B6">
<strong>更新 ISO 文件</strong>
</h4>
<p>如发布了新版本的 Ventoy，则可以将其更新到USB驱动器。</p>
<blockquote>
<p>
<strong>注意：</strong> 升级操作是安全的，第一个分区中的所有文件都将保持不变。</p>
</blockquote>
<h4 id="%E5%A4%9A%E7%B3%BB%E7%BB%9F%E5%90%AF%E5%8A%A8%E8%8F%9C%E5%8D%95%E9%80%89%E6%8B%A9" name="%E5%A4%9A%E7%B3%BB%E7%BB%9F%E5%90%AF%E5%8A%A8%E8%8F%9C%E5%8D%95%E9%80%89%E6%8B%A9">
<strong>多系统启动菜单选择</strong>
</h4>
<p>当你将 U 盘插在电脑上时，按 <code>del</code>、<code>F1</code>、<code>F8</code> 键进入主板选项启动 U 盘，这里考虑到不同设备的按键启动 U 盘的方式不同，可多次尝试不同的键即可显示出菜单。</p>
<p>进入菜单选项中选择你要安装的系统后，将会显示安装流程了。</p>
<p>如果你担心在物理机上操作会出现问题的话，可以提前先在自己的 VMware 虚拟机中验证一下你的 U 盘启动盘所有系统是否都能够顺利进入到正常的安装流程中。</p>
<figure>
<div class="image-block">
<span class="lazy-image-holder" dataurl="https://ask.qcloudimg.com/http-save/yehe-6849268/9i7sylxpmq.png">
</span>
</div>
</figure>
<h4 id="%E4%BC%A0%E9%80%81%E9%97%A8%EF%BC%9A" name="%E4%BC%A0%E9%80%81%E9%97%A8%EF%BC%9A">
<strong>传送门：</strong>
</h4>
<p>官网地址：https://www.ventoy.net/
GitHub 地址：https://github.com/ventoy/Ventoy</p>
<h4 id="%E6%80%BB%E7%BB%93" name="%E6%80%BB%E7%BB%93">
<strong>总结</strong>
</h4>
<p>Ventoy 是一种新的可启动 USB 装机解决方案，相比传统装机的解决方案要好用的多，其 Ventoy 最终目的在于将制作好的 U 盘启动盘，依然是可以当作普通 U 盘进行使用。</p>
<p>你可随意删除或添加操作系统 ISO 镜像文件，不必每安装一个操作系统需先将它进行格式化，而针对大容量的 U 盘来说，同时也有了更多空余空间的使用存放其他文件。</p>
<p>当某一个系统更新换代了，你如果想更新系统，无需每次将新版本的系统镜像刻录至 U 盘中做启动盘，大大节省了你装机时的工作效率。</p>
</div>

</details>
