⛏ 备注：

- 🎦 [**关于BT种子及下载工具**](https://github.com/taoste/Hello-World/blob/master/Tools/P2P%E5%B7%A5%E5%85%B7/BT.md) ： **µtorrent 稳定版 (v3.5.4 build 44590)**  （ [官网下载](https://www.utorrent.com/intl/zh_cn/downloads/complete/track/stable/os/win) / [备份下载](https://github.com/taoste/Hello-World/blob/master/Tools/uTorrent_v3.5.4.44590.exe?raw=true) ）
> 
> 要安装： [语言包](https://www.utorrent.com/intl/zh_cn/downloads/win) ，将 utorrent.lng 放置于 %AppData%\uTorrent
> 
> 文件大小：2.85 MB

【简介】( [**uTorrent 官网（中文版）**](https://www.utorrent.com/intl/zh_cn/downloads/win) - Windows  )
>
> uTorrent，是一款**内存消耗极少的超小型迷你BT客户端**。
>
> 内网下载方面也有不错的表现，外网就更不用提了。
>
> 支持多任务同时下载，设置文件下载优先级，可以根据计划任务调整占用的带宽，
>
> 快速断点续传机制，支持UPnP，支持流行的BT扩展协议，最小内存占用仅6MB。
>

<img src="https://camo.githubusercontent.com/43de7f6c86466fc4c80333389624272617b5b90a/687474703a2f2f646f776e7a612e696d672e7a7a3331342e636f6d2f736f66742f787a676a2d35342f323031362d30312d31312f65626464636430643630343639303433363832303635376661346237373833392e6a70673f7261773d74727565?raw=true"/>

-----------------------------------------------------------


- [【老D博客】又一款**全能**的**开源下载神器**：](https://laod.cn/tools/motrix.html) [**Motrix**](https://motrix.app/zh-CN/)

> 关于下载软件五花八门的，常见的有迅雷、IDM、Photon、FDM等，今天，老D给大家推荐一款开源的下载管理器，功能十分齐全，支持下载HTTP，FTP，BitTorrent，Magnet，百度网盘等...应用界面十分简洁。

> 支持三大平台：Windows、macOS、Linux 

> Motrix官网地址：https://motrix.app/zh-CN/

<img src="https://camo.githubusercontent.com/483de768b4adbeb420d4005be7797f0b59f899c3/68747470733a2f2f63646e2e6c616f642e77616e672f77702d636f6e74656e742f75706c6f6164732f323031392f30372f7a352e6a7067"/>


>> 特性
```
🕹 简洁明了的图形操作界面
🦄 支持BT和磁力链任务
💾 支持下载百度云盘资源
🎛 最高支持 10 个任务同时下载
🚀 单任务最高支持 64 线程下载
🕶 模拟用户代理UA
🔔 下载完成后通知
💻 支持触控栏快捷键(Mac 专享)
🤖 常驻系统托盘，操作更加便捷
🌑 深色模式 New
🗑 移除任务时可同时删除相关文件
🌍 国际化(可选择简体中文或英文界面)
🎏 ...
🛠 更多特性开发中
``` 

> 又一款全能的开源下载神器：Motrix

<img src="https://camo.githubusercontent.com/6b7924fe84fd1cd49cac5a538f2751d55702f5ee/68747470733a2f2f63646e2e6c616f642e77616e672f77702d636f6e74656e742f75706c6f6164732f323031392f30372f7a342e706e67"/>

> Motrix v1.4.x 更新日志
```
    添加种子任务时可选择下载部分文件
    手动停止 BT 任务做种
    恢复下载失败的任务
    开机自动启动
    恢复上次退出时窗口的大小和位置
    设置限速
    RPC 密钥设置
    设置下载协议默认客户端
    保存偏好设置不再需要重启应用

添加种子任务时可选择下载部分文件
```
>> 这是至 Motrix v1.2.x 发布种子关联功能以来被请求最多的其中一个新特性。我调研后发现大部分 aria2 的图形化界面都没有提供这个功能，虽然 aria2 添加任务时有这个选项。

>> 界面参考了主流的几个 BT 客户端，添加种子任务时默认会全选所有文件。

>> Motrix

<img src="https://camo.githubusercontent.com/a39a4bc467cf39c803ef083bcf57ed385d42808e/68747470733a2f2f63646e2e6c616f642e77616e672f77702d636f6e74656e742f75706c6f6164732f323031392f30372f7a362e6a706567"/>
 
> 常见问题
```
Q：BT/Magnet 下载无速度

A: 使用 Motrix 下载 BT/Magnet 任务之前，建议找个热门种子（不是磁力链接Magnet！），下载一波，挂着做种，过几个小时后退出，用于生成 dht.dat 缓存数据。这样之后下载 BT/Magnet 任务时速度会比较正常。

BT 下载速度受多重因素影响，比如没人做种，部分网络运营商禁封了 BT 的连接端口，还有不可抗力的网络原因无法连接国外的 tracker 服务器等（请自备酸酸乳等饮品），请务必有点耐心！

Q：BT/Magnet 下载到100%之后，没有自动结束，下载速度一直为 0 KB/s

A: BT 任务下载之后会自动开始做种，你可以手动停止任务结束做种（分享率达到 1.0 自动结束）
「人人为我，我为人人」

Q：迅雷链接下载失败以及迅雷为什么可能可以下载

A: 迅雷链接解析出来的源地址可能是已经失效的地址，所有使用 Motrix 会下载失败；迅雷能下载是因为它可以去迅雷自家的服务器上去查找相同的资源，如果能查到，所以有可能可以下载。
```
-----------------------------------------------------------

- [为 aria2 下载加速，添加这些 trackers 之后， BT、磁力链接下载加速大增](https://www.appinn.com/ara2-add-trackers-list-for-speed-up/) - [小众软件](https://www.appinn.com/tag/aria2/)( @[trackerslist](https://github.com/ngosang/trackerslist) )
> 
> aria2 是一款非常流行的开源下载工具，可以用来下载各种协议文件，包括 BT 种子与磁力链接，但很多人在初次使用 aria2 时会发现始终无速度的问题，这里有一份 trackers 列表，只需要添加进 aria2 就能明显的提高下载速度。

-----------------------------------------------------------

- 【[**BT 种子添加有效 tracker 的方法**](https://www.bfdz.ink/2018/02/04/72/)】  | BFDZ

最近 rarbg 的种子无法正常下载，原因是种子 tracker 无法连接，并且使用代理也无法解决。因为 BT 种子会有很多其他网站转载，所以可以利用其他的有效 tracker 来连接上 BT 网络的做种者。

寻找 tracker
如果你搜索一下就可以发现，网络上已经有一些网站或博客会提供收集的 tracker。这里我们使用 github 上面一个收集 tracker 的项目：

trackerslist

添加 tracker
复制

https://github.com/ngosang/trackerslist/blob/master/trackers_all.txt

里面的内容，添加到种子的 tracker 里面。

下载客户端以 utorrent 为例：

选择种子，右键，属性



添加 tracker



成功连接上 BT 网络，开始正常下载


-----------------------------------------------------------

🎦 网站：[种子文件编辑工具 Torrent File Editor](https://www.bfdz.ink/2019/02/09/122/)

   <p><b>Torrent File Editor</b> 是一款开源免费的种子文件编辑工具，支持 Windows 和 Mac 平台，以及自带中文语言。</p>
<p>下载地址：<a href="https://sourceforge.net/projects/torrent-file-editor/" target="_blank" rel="noopener">https://sourceforge.net/projects/torrent-file-editor/</a></p>
<a id="more"></a>

<p>特点：</p>
<ul>
<li>新建 .torrent 文件</li>
<li>通过简单、人性化的界面编辑种子文件</li>
<li>以 JSON 格式编辑 .torrent 文件</li>
<li>添加，删除和交换种子文件内的文件</li>
</ul>

-----------------------------------------------------------

- 【[**海盜灣**](https://thepiratebay.org)】
> 
> 官方网站  https://thepiratebay.org
> 
> 官方论坛  https://pirates-forum.org/
> 
> 暗网（网络公海）  https://uj3wazyk5u4hnvtk.onion/language/zh_CN

> **海盗湾**（英语：The Pirate Bay，缩写：**TPB**）是一个专门存储、分类及搜索Bittorrent种子文件的网站，并且号称是“**世界最大的BitTorrent tracker（BT种子服务器）**”，提供的BT种子除了有自由版权的收集外，也有不少被著作人声称拥有版权的音频、视频、应用软件与电子游戏等，为网络分享与下载的重要网站之一。 
> 
> 2012年2月14日，据美国科技博客Mashable报道，海盗湾宣布从2012年2月29日起将不再提供BT种子下载，全面转向**磁力链接**。“在决定停止提供BT种子后，近期我们的一大举措将在2月29日实施，届时我们将停止提供所有BT种子下载。”海盗湾在其博客中宣布。**不过这并不意味着BT种子索引服务的关闭，只是从BT种子服务转向磁力链接，后者可使得用户下载到实际的BT种子**。这意味着用户开启下载需要花费更长时间，特别是流行度较低的文件。一旦BT种子恢复，下载就和平常下载一样。**磁力链技术**将大幅降低海盗湾资源的大小，备份160万余下载种子仅90M大小。使得资源的转移与恢复更加容易。


> - [海盗湾](https://zh.wikipedia.org/wiki/海盜灣) - 维基百科，自由的百科全书  
> 
> - [**海盗湾大事记** | eMule Fans 电骡爱好者（中文）](https://web.archive.org/web/20101122034819/http://emulefans.com/the-pirate-bay-events/) - @[互联网档案馆](https://archive.org)( [维基百科:使用时光机](https://zh.wikipedia.org/wiki/Wikipedia:使用时光机) )
>
> - 2009年4月17日《[对海盗湾一审败诉的感想](https://www.ruanyifeng.com/blog/2009/04/some_thoughts_on_the_pirate_bay_guilty.html)》 - [阮一峰的网络日志](https://www.ruanyifeng.com/)  


