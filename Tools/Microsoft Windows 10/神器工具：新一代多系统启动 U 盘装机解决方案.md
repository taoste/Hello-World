<details>
    <summary>
    <b>
<a href="https://cloud.tencent.com/developer/article/1653118">神器工具：新一代多系统启动 U 盘装机解决方案</a>
        ( 传送门：
@<a href="https://www.ventoy.net/cn/">官网</a>
@<a href=https://github.com/ventoy/Ventoy">GitHub</a> )
</b> <br/>    
<blockquote> <p>大家好，我是 JackTian。</p>
<p>在平时的工作中，比如我们需要重新安装一个 windows 操作系统，得通过第三方软件刻录镜像，随后将刻录好的镜像文件放置到 U 盘里面，通过启动设备并结合一些相关的配置进行以 USB 的方式启动。</p>
<p>一个 U 盘里面往往只能制作成一个新系统的启动盘，当你要想增加其他系统时，只能通过重新刻录，每次都需要反复这样的操作，是非常花费时间的。</p>
<p>那么，今天给大家推荐一种新的可启动 USB 的解决方案：<strong>多合一启动盘制作工具</strong> —— Ventoy。</p>
<br/></blockquote>
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
<div class="rno-markdown J-articleContent"><br/>
<img src="https://ask.qcloudimg.com/http-save/yehe-6849268/hjlflz0al5.jpeg"/><br/>

<img src="https://ask.qcloudimg.com/http-save/yehe-6849268/1ym74qaon6.png"/>
<br/>
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
<br/>
<img src="https://ask.qcloudimg.com/http-save/yehe-6849268/vg3odmyq7s.png"/>
<br/>
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
<p>其中<code>/dev/XXX</code>是 U 盘对应的设备名，比如：<code>/dev/sdb</code>，必须输入正确的设备名，如果输入错误可能会把你的系统盘格式化，
    因为 Ventoy 不会检查你摄入的设备名是本地磁盘还是 U 盘。</p>
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
<br/>
<img src="https://ask.qcloudimg.com/http-save/yehe-6849268/9i7sylxpmq.png"/>
<br/>
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

<details>
    <summary>
    CSDN博客 : <a href="https://blog.csdn.net/jing_zhong/article/details/109353456">重装正版Windows 10和Microsoft office home and student 2019教程（2020.10.29）</a>
     </summary> 
  <h1>目录</h1> 
<h2>环境准备&#xff1a;一个U盘&#xff08;至少8G&#xff09;</h2> 
<h2>步骤</h2> 
<h3>        第一步  利用微软下载工具制作U盘启动盘</h3> 
<p>           到微软官网下载Windows 10 界面&#xff0c;“点击立即下载工具”后会弹出一个下载界面&#xff0c;</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/2020102910534752.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p>          下载此文件MediaCreationTool20H2.exe完成后&#xff0c;双击运行&#xff08;此时记得将U盘插到电脑上&#xff09;</p> 
<p style="text-align:center;"><img alt="" height="148" src="https://img-blog.csdnimg.cn/20201029105449660.jpg" width="978" /></p> 
<p>         运行后&#xff0c;如下图所示&#xff0c;选择自己所需的配置&#xff0c;接受许可&#xff0c;选择为另一台电脑创建安装介质&#xff0c;选择Windows10系统的语言、体系结构和版本&#xff0c;安装介质选择U盘&#xff0c;一直点击下一步&#xff0c;</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029105717441.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/2020102910573649.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029105753255.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029105813483.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p>         然后选择自己插在电脑上的U盘即可&#xff0c;程序会自动下载Windows10系统到U盘中&#xff0c;同时会将U盘格式化。最后&#xff0c;U盘启动盘制作完成后拔掉即可。</p> 
<h3>        第二步  为另一台电脑安装Windows 10系统</h3> 
<p>           首先在要安装Windows10系统的电脑上插好刚才制作好的U盘&#xff0c;点击开机键启动电脑&#xff0c;当出现电脑的品牌图标后&#xff0c;多次点击bios启动键&#xff08;如F12&#xff09;&#xff0c;不同品牌的电脑bios键有所不同&#xff0c;进入后选择UEFI U盘来引导&#xff08;boot&#xff09;并按Enter键确认</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029111257650.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p>           此时就会进入用户界面来正常安装Windows10系统&#xff0c;界面会让用户选择系统安装的分区&#xff0c;一般来说都选固态的128G硬盘。</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/2020102919595048.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029200036887.png?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p> </p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/2020102919571296.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p> </p> 
<p>          如果遇到Bitlocker加锁的情况提示选定分区上启用了BitLocker驱动器加密&#xff0c;则无法正常安装&#xff08;如上图所示&#xff09;&#xff0c;<a href="https://www.baidu.com/link?url&#61;TqWlfaXjGlRlxkQwIxL8jYfYWA7VKTpFaFMEHJolosr6W4cfBlpAd17jPqIqj8krGKjEWmiGuZ25Eiwf0gwxWIlu-8DDD51UcpyQfdaFsoRs78BUwT1ouPaagiAQG5Od&amp;wd&#61;&amp;eqid&#61;8f79090a0004421d000000065f9a3325">需要登录微软账号查找我的BitLocker恢复密钥</a>&#xff0c;在自己的微软账号界面中可以看到自己的恢复密钥&#xff1a;</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029195845938.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p>          然后在Windows安装界面选择修复计算机&#xff0c;选择疑难解答-&gt;高级选项-&gt;命令提示符</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029200131847.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029200224223.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029200252591.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p>         在命令提示符界面&#xff08;相当于cmd窗口&#xff09;&#xff0c;依次输入以下四步命令&#xff1a;</p> 
<p>&#xff08;1&#xff09;diskpart命令是为了执行diskpart工具</p> 
<p>&#xff08;2&#xff09;list disk &#xff08;列出磁盘列表&#xff09;</p> 
<p>&#xff08;3&#xff09;select disk X(X这里应替换为0或1或2),具体要看自己需要把Windows10系统安装到那块硬盘上&#xff0c;请务必看清楚&#xff0c;因为这时候U盘也会出现在列表里&#xff0c;下一步的命令会清空硬盘里所有的分区</p> 
<p>&#xff08;4&#xff09;clean &#xff08;对硬盘分区进行清理&#xff0c;恢复初始化&#xff0c;彻底清理掉&#xff09;</p> 
<pre><code class="language-bash">diskpart
list disk
select disk 0
clean</code></pre> 
<p>           然后重新启动电脑进行U盘安装Windows10正版系统&#xff0c;选择好Windows10要安装的分区为电脑的固态硬盘&#xff0c;之后一直点击下一步即可&#xff0c;最后建议连接以太网在系统中登录自己微软账号&#xff0c;安装完后的系统如下图所示&#xff1a;</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029201024841.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<h3>     </h3> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029202454411.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<h3>        第三步 安装Microsoft home and student 2019</h3> 
<p>           由于刚才安装好的Windows10正版系统自带的时Office 365&#xff0c;并且这个Office 365只能免费试用过期后还需购买&#xff0c;所以为了安装Microsoft home and student 2019,需要安装包文件&#xff0c;首先登录自己的微软账号&#xff0c;进入服务与订阅一栏&#xff0c;界面中可查看到自己订阅的产品&#xff0c;其中就有Microsoft home and student 2019,点击右侧的<strong>安装</strong></p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029201445104.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
<p>下载的文件就是Office 家庭和学生版2019的离线版安装包&#xff0c;大小为3.6GB&#xff0c;文件名为 HomeStudent2019Retail .img</p> 
<p style="text-align:center;"><img alt="" height="52" src="https://img-blog.csdnimg.cn/20201029201708744.jpg" width="213" /></p> 
<p>下载完成后&#xff0c;双击HomeStudent2019Retail.img文件&#xff0c;可以根据自身需要选择32位或64位的Setup.exe进行Office家庭和学生版2019的安装&#xff08;如果提示无法安装&#xff0c;则需要将Office 365卸载掉并重启电脑&#xff09;&#xff0c;安装完成后登录个人微软账号&#xff0c;打开word-&gt;帐户&#xff0c;右侧会显示本产品属于自己的微软账号&#xff0c;并且Office已经激活。</p> 
<p style="text-align:center;"><img alt="" src="https://img-blog.csdnimg.cn/20201029202526508.jpg?x-oss-process&#61;image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ppbmdfemhvbmc&#61;,size_16,color_FFFFFF,t_70" /></p> 
</details>
