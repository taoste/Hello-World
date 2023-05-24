- [360随身Wifi 3代 Win7 x64 驱动（Win10可用）](https://www.iteye.com/resource/qq_28691331-10313428) - [iteye](https://www.iteye.com/)
@[CSDN下载](https://download.csdn.net/download/qq_28691331/10313428?utm_source=iteye)
> [提取的360wifi第二代纯净驱动x64-网络设备工具类资源-CSDN下载](https://download.csdn.net/download/hzexe/9463368?utm_source=blogxgwz0)
```
提取自360官方安装包的360随身Wifi第3代Win764位驱动程序，MTK官方驱动，无附加功能，无全家桶，亲测Win10可用。 
使用方法：解压文件，设备管理器找到随身Wifi设备，右击选择更新驱动程序，选中解压的文件夹，即可作为USB网卡正常使用。
```
-------------------------------------------------------------------------

<li><a href="https://www.52pojie.cn/thread-1788583-1-1.html" title="使用PowerShell查看本机连接过并且已保存的WiFi密码（仅1行代码，全网最简） - 『编程语言讨论求助区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn">使用PowerShell查看本机连接过并且已保存的WiFi密码（仅1行代码，全网最简）</a></li>
<blockquote><pre><code>
foreach ($item in (netsh wlan show profile|where{ $_ -match "文件"})){netsh wlan show profile name=($item -replace "    所有用户配置文件 : ","") key=clear|where{ $_ -match "    名称|关键内容"}}
</code></pre></blockquote>

-------------------------------------------------------------------------

- [Windows 通过cmd命令（netsh wlan命令）连接WiFi](https://blog.51cto.com/tianma3798/1398356)

>> 用于无线局域网 (WLAN) 的 Netsh 命令

- [Windows 10 通过命令行查看 Wi-Fi 密码](https://www.jianshu.com/p/e7a78685b7e1) - 简书

>> [Windows 10 通过命令行查看 Wi-Fi 密码](https://rollingstarky.github.io/2019/10/27/find-wlan-password-in-windows-10/) | [tarryLand](https://rollingstarky.github.io/)

-------------------------------------------------------------------------

【还在用微信QQ传输文件？试试这三款免费开源的跨平台秒传工具！-哔哩哔哩】 
[https://b23.tv/MUAxkm3](https://www.bilibili.com/video/BV1qN411P7cu/?buvid=XXF5DA2F62A00B67E5FF508B460D62276A918&vd_source=d7b4ba1ffd9118adea2da33392ae3c96)
>支持Windows、Mac、Linux、Android以及iOS。

>> LANDrop：https://landrop.app/

>> LocalSend：https://localsend.org/

>> Mfiles：https://mfiles.maokebing.com/

-------------------------------------------------------------------------
