<li><a href="https://www.doubao.com/thread/w4fd9c56f7063f1f3" title="重装Win11系统能否解决问题 - 豆包">插入制作好的 Windows 11 专业版U 盘，重启进入安装界面，提示：找不到任何驱动程序。要获取存储设备驱动程序，请单击“加载驱动程序”。这个问题如何解决？</a></li>
出现这个问题可能是因为缺少存储设备的驱动程序，比如英特尔快速存储技术（Intel Rapid Storage Technology，IRST）驱动。可以通过以下方法解决：<br><br>
方法一：手动安装英特尔快速存储技术（IRST）驱动程序<br>
1.下载<a href="https://dlcdnets.asus.com.cn/pub/ASUS/GamingNB/FX507ZE/RST_V19.1.0.1001_PV.zip" title="华硕主板：Intel Rapid Storage Technology (IRST)驱动程序">英特尔快速存储技术（IRST）驱动程序</a>。
可以到<a href="">英特尔官方网站</a>或
<a href="https://www.asus.com.cn/support/faq/1044458/" title="[Notebook] 疑难解答 - 如何解决安装Windows 11/10时找不到磁盘驱动器 | 官方支持 | ASUS 中国">电脑制造商</a>
的网站查找对应型号的驱动程序并下载；<br>
2.下载完成后，鼠标右键点击（rst_v19.1.0.1001_pv）压缩文件并选择（全部解压缩）（注：版本号码仅供示意参考，实际操作时以最新版本为准）；<br>
3.选择（浏览）并点选（提取）；<br>
4.解压缩完成后，请将解压缩后的文件夹（rst_v19.1.0.1001_pv）整个复制到 U 盘；如果 Windows 11 安装媒体也是使用 U 盘，请将此文件夹复制到 Windows 11 安装媒体的 U 盘；<br>
5.将包含 Windows 11 安装媒体及英特尔快速存储技术（IRST）驱动程序（rst_v19.1.0.1001_pv 文件夹）的 U 盘连接至计算机（如果是用 Windows 11 光盘进行安装，请将光盘与上述档案所放置的 U 盘一并插入计算机）；<br>
6.再次进行 Windows 11 安装流程，在“你要在哪里安装 Windows”的画面找不到任何磁盘驱动器时，点击（加载驱动程序）；<br>
7.点选（确定）；<br>
8.点击（确定）；<br>
9.点选（浏览），找到（rst_v19.1.0.1001_pv）文件夹，然后点选（确定）；<br>
10.选择（intelrstvmdcontroller9a08(tgl)）（实际名称可能因硬件配置而有所不同），然后点选（下一步），将会开始安装驱动程序；<br>
11.驱动程序安装完成后，磁盘驱动器即可正常显示。<br><br>
方法二：关闭英特尔卷管理设备（VMD）技术（此方法可能会导致计算机无法使用 RAID 磁盘阵列）<br>
将计算机进入 BIOS 设置画面。在计算机未开机时，先按住键盘上的（F2）键不放，然后再单击电源键即可进入 BIOS 设置画面；<br>
进入 BIOS 设置画面后，单击键盘上的（F7）键，或是点选画面上的（Advanced Mode）；<br>
进入（Advanced）页面，然后点选（VMD setup menu）（注：如果 BIOS 设置页面中没有 VMD setup menu 选项，则只能使用方法一手动安装驱动程序）；<br>
选择（Enable VMD controller），然后将它更改为（Disabled）；<br>
点选（Ok）；<br>
保存设置并离开。单击键盘上的（F10）键，然后点选（ok），计算机将会重新启动。随后即可在 Windows 11 安装过程中找到本机使用的磁盘驱动器。<br>
如果上述方法都不适用，可能需要考虑其他因素，例如 U 盘安装盘的制作是否正确、BIOS 设置是否存在其他问题等。<br>
另外，不同电脑的 BIOS 界面和选项可能会有所差异，上述步骤中的某些操作可能需要根据实际情况进行调整。<br>
若问题仍未解决，建议参考电脑制造商的文档或联系其技术支持人员以获取更准确的帮助。<br>
<hr>

[同意个人数据跨境传输]<br>
aka.ms/refund<br>
aka.ms/privacy<br>
<br>
<hr>

七牛云 - 产品主页<br>
https://portal.qiniu.com/home<br>
<br>
智能多媒体服务 - 七牛开发者中心<br>
https://developer.qiniu.com/dora<br>
<hr>


具有英特尔® 傲腾™内存的英特尔® 快速存储技术驱动程序安装软件（第 11 代至第 13 代平台）<br>
https://www.intel.cn/content/www/cn/zh/download/720755/intel-rapid-storage-technology-driver-installation-software-with-intel-optane-memory-11th-up-to-13th-gen-platforms.html<br>
<hr>

CSDN搜索<br>
https://so.csdn.net/<br>
<hr>

Windows 11 安装媒体及英特尔快速存储技术（IRST）驱动程序 - 搜索<br>
https://cn.bing.com/search?q=Windows+11+%E5%AE%89%E8%A3%85%E5%AA%92%E4%BD%93%E5%8F%8A%E8%8B%B1%E7%89%B9%E5%B0%94%E5%BF%AB%E9%80%9F%E5%AD%98%E5%82%A8%E6%8A%80%E6%9C%AF%EF%BC%88IRST%EF%BC%89%E9%A9%B1%E5%8A%A8%E7%A8%8B%E5%BA%8F&qs=n&form=QBRE&sp=-1&lq=0&pq=windows+11+%E5%AE%89%E8%A3%85%E5%AA%92%E4%BD%93%E5%8F%8A%E8%8B%B1%E7%89%B9%E5%B0%94%E5%BF%AB%E9%80%9F%E5%AD%98%E5%82%A8%E6%8A%80%E6%9C%AF%EF%BC%88irst%EF%BC%89%E9%A9%B1%E5%8A%A8%E7%A8%8B%E5%BA%8F&sc=9-35&sk=&cvid=C716314E92DF4D8DBAFF9951AA818EE6&ghsh=0&ghacc=0&ghpl=<br>
<hr>

[Notebook] 疑难解答 - 如何解决安装Windows 11/10时找不到磁盘驱动器 | 官方支持 | ASUS 中国<br>
https://www.asus.com.cn/support/faq/1044458/<br>
<hr>

如何从网站下载英特尔® 快速存储技术<br>
https://www.intel.cn/content/www/cn/zh/support/articles/000039489/technologies.html#:~:text=%E6%9F%A5%E6%89%BE%20%E8%8B%B1%E7%89%B9%E5%B0%94%C2%AE%20%E5%BF%AB%E9%80%9F%E5%AD%98%E5%82%A8%E6%8A%80%E6%9C%AF%20%E4%B8%8B%E8%BD%BD%20%EF%BC%88%E8%8B%B1%E7%89%B9%E5%B0%94%C2%AE%20RST%EF%BC%89%E3%80%82,%E9%80%89%E6%8B%A9%20%E4%B8%8B%E8%BD%BD%E7%B1%BB%E5%9E%8B%E3%80%82%20%E9%80%89%E6%8B%A9%20%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E3%80%82%20%E9%80%89%E6%8B%A9%20%E6%94%AF%E6%8C%81%E6%82%A8%E7%9A%84%E7%8E%AF%E5%A2%83%E7%9A%84%E6%9C%80%E6%96%B0%E9%A9%B1%E5%8A%A8%E7%A8%8B%E5%BA%8F%E6%88%96%E8%BD%AF%E4%BB%B6%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E3%80%82<br>
<hr>

内存和存储支持<br>
https://www.intel.cn/content/www/cn/zh/support/products/35125/memory-and-storage.html#80095<br>
<hr>

内存和存储支持<br>
https://www.intel.cn/content/www/cn/zh/support/products/35125/memory-and-storage.html#80095<br>
<hr>

英特尔® 驱动程序和支持助理<br>
https://www.intel.cn/content/www/cn/zh/support/detect.html<br>
<hr>

适用于 Windows 10 的 Intel® 快速儲存技術 （RST） 和适用于 Intel® NUC 9 极致笔记本电脑套件的 Windows® 11*<br>
https://www.intel.cn/content/www/cn/zh/download/19651/29838/intel-rapid-storage-technology-rst-for-windows-10-windows-11-for-intel-nuc-9-extreme-laptop-kits.html<br>
<hr>

[Notebook] 疑难解答 - 如何解决安装Windows 11/10时找不到磁盘驱动器 | 官方支持 | ASUS 中国<br>
https://www.asus.com.cn/support/faq/1044458/<br>
<hr>

[Windows 11/10] 如何建立及使用U盘的安装介质重新安装Windows 11/10 | 官方支持 | ASUS 中国<br>
https://www.asus.com.cn/support/faq/1039507/<br>
<hr>

如何搜尋與下載驅動程式、工具程式、BIOS及使用手冊 | 官方支援 | ASUS 台灣<br>
https://www.asus.com/tw/support/faq/1035376/<br>
<hr>

Network Connection Flow - 搜索<br>
https://cn.bing.com/search?q=Network+Connection+Flow<br>
<hr>

技巧 | 新版Win11跳过联网安装 - 简书<br>
https://www.jianshu.com/p/40d3a27102c0<br>
<hr>

OOBE\BYPASSNRO - 搜索<br>
https://cn.bing.com/search?q=OOBE%5CBYPASSNRO<br>
<hr>

Windows 11 首次开机OOBE阶段跳过连接网络及登录微软账户，使用本地账号登录的方法_oobebypassnro-CSDN博客<br>
https://blog.csdn.net/junson142099/article/details/124410039<br>
<hr>

[技巧] 微软禁止通过OOBE跳过Windows 11账户登录 下面是最新可用办法 – 蓝点网<br>
https://www.landiannews.com/archives/96628.html<br>
<hr>

计算机首次开机如何跳过Microsoft 帐户登录，快速进入Windows桌面 | 华为官网<br>
https://consumer.huawei.com/cn/support/content/zh-cn15898703/<br>
<hr>

Windows 11如何通过命令OOBE\BYPASSNRO创建本地账户 - 哔哩哔哩<br>
https://www.bilibili.com/read/cv35068548/?jump_opus=1<br>
<hr>

Win11跳过联网激活的3种办法-CSDN博客<br>
https://blog.csdn.net/qq_16171671/article/details/134779750<br>
<hr>

m.somode.com<br>
https://m.somode.com/course/31035.html<br>
<hr>
