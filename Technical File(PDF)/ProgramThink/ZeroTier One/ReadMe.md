- 「[**内网穿透**](https://github.com/taoste/Hello-World/raw/master/Technical%20File(PDF)/ProgramThink/ZeroTier%20One/ZeroTier%20One%20-%20%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E8%BF%9C%E7%A8%8B%E5%8D%8F%E5%8A%A9.rar)」:[ZeroTier Central 官网](https://my.zerotier.com/)  | [下载](https://download.zerotier.com/dist/ZeroTier%20One.msi)（ https://my.zerotier.com/ ）

------------------------------------------------------

参考：

1.《<a href="https://chinadigitaltimes.net/chinese/2014/07/%E7%BF%BB%E5%A2%99-%E5%85%A8%E7%90%83%E8%99%9A%E6%8B%9F%E7%BD%91%E7%BB%9Czerotier-one%E7%AE%80%E4%BB%8B/">翻墙| 全球虚拟网络ZeroTier One简介</a>》 – 中国数字时代

2.《[**ZeroTier** - 无配置，零基础「**内网穿透**」随时随地连回家/学校/办公室 [跨平台]](https://www.appinn.com/zerotier-one/)》 - 小众软件 （ 2017/11/06 ）

<blockquote cite="https://www.appinn.com/zerotier-one/">
     
  [ZeroTier](https://www.appinn.com/zerotier-one/) 是一款非常简单易用的内网穿透工具，不需要配置，就能实现虚拟局域网的组建，让你可以在外也能连回家中、学校、办公室的电脑获取资料，数据。配置与使用都非常简单，堪称「 无配置，零基础」，小白也能用。@Appinn

<a href="https://www.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/d1c5011ad4c8fd14bb9dff584e271e9b031c3f36/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313731312f6466696939736a77306165376964732d322e6a7067216f" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图1】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图1】"></a>

为什么要连回家、连回办公室、连回学校？因为数据在远方啊。

首先，如果你有一台长期开机的服务器（比如办公室），或者普通电脑也行，不然你连不回去的 😂
然后，有在服务器以外的位置安全访问数据的需求
最后，就是用 ZeroTier 简单的组建局域网，就像你还在办公室一样。
青小蛙干过最离谱的事情，在月末的时候苦于本地流量用不完，跑到鸟不拉屎的地方，打开热点，用 iPad 连回家，看个电影 🤤 反正速度快，反正不要钱，反正电影总是要看…

下面就开始真正说 ZeroTier 啦，不说理论了，直接上过程，先画个线：

ZeroTier 支持平台

<a href="https://www.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/1af904aef93d09e5a25f651e5dcecc091392ad99/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313731312f64636a72383471767761616575397a2e6a7067216f" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图2】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图2】"></a>

ZeroTier 支持 Windows、macOS、Linux 三大主流平台，iOS、Android 两大移动平台，以及 QNAP（威连通）、Synology（群晖）、Western Digital MyCloud NAS（西部数据）三个 NAS 平台，还支持 LEDE 开源路由器项目。

使用 ZeroTier 步骤
注册 ZeroTier，获得 Internal ID
创建私有局域网，获得 Network ID
安装客户端，加入 Network ID（或邀请 Internal ID 加入）
连接
因为有 ZeroTier 服务器的支持，所以对于网络是有限制的，免费网络限制 100 台设备，超过了就要付费。100 台对于个人或者小团队使用来说都足够了。超过 100 台价格为 $29/month，另外也可以自建服务中心，$100/month

ZeroTier 后台控制介绍
注册就不说了，登录后，进入 Networks 页面，创建网络，然后进入网络设置。

<a href="https://www.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/a30e26596623dee499cc9067f618ac11dca0d29d/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313731312f323031372d31312d3036312e6a7067216f" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图3】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图3】"></a>

▍网络管理
本着「零基础」的玩法，我们依旧最小化设置：

<a href="https://www.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/57ee2e252382413a9b898f7f4c04eb73850ddd4e/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313731312f323031372d31312d3036322e6a7067216f" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图4】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图4】"></a>

输入网络名字，选择 Certificate (Private Network)，其他默认即可，包括右侧的路由管理，就随他去吧。

▍客户端连接
不同客户端连接方式不同，不过都非常简单：

运行客户端
输入 Network ID
等待授权

<a href="https://www.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/e144af42421ffd319420a1f7c3987b959c6e1882/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313731312f7a65726f746965725f64656d6f2d312d303030332e6a7067216f" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图5】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图5】"></a>

<a href="https://www.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/f4b2bad82545921369655da438c1086446e0ada0/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313731312f7a65726f6d6f62696c652e6a7067216f" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图6】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图6】"></a>

▍用户管理
所有新连接的用户都需要被创建者授权一次，依旧在上面那个后台页面，拉到下方 Members 区域，就能看到已连接用户列表了。

记得在 Auth? 那一栏里打勾，就完全了全部设置。

<a href="https://www.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/38a875ba983b4ce8cd6f832a7927c3bdc9ca50d6/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313731312f7a65726f746965725f64656d6f2e6a7067216f" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图7】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图7】"></a>

也可以在后台直接输入 Internal ID 来添加用户。

如何使用
这的确是个问题，首先，你需要知道别人的 IP 地址、连接方式，比如远程桌面、SSH、NAS 网络储存、数据同步，或者最简单的先 ping 一下 😂

ZeroTier 还是很适合私人或者团队使用的，至于里面那个公开网络，青小蛙还不知道该怎么玩，如果你有更深入的兴趣，也可以来论坛讨论。

介绍就到这里了，有问题可以留言，官网在这里：https://www.zerotier.com/ 下面的按钮里有下载链接。


<a href="https://d.appinn.com/zerotier-one/">
<img src="https://camo.githubusercontent.com/9aea2131f01f27d705443142b61910ea5f9918cf/68747470733a2f2f696d67332e617070696e6e2e636f6d2f696d616765732f3230313530372f646f776e2e706e67" border="0" alt="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图8】" title="ZeroTier - 无配置，零基础「内网穿透」随时随地连回家/学校/办公室 [跨平台] /【图8】"></a>


</blockquote>

<cite>– 《[**ZeroTier** - 无配置，零基础「**内网穿透**」随时随地连回家/学校/办公室 [跨平台]](https://www.appinn.com/zerotier-one/)》 - 小众软件 （ 2017/11/06 ）</cite>

`
Download - Zorin OS
https://zorinos.com/download/#core

System Requirements - Zorin OS
https://zorinos.com/help/system-requirements/#lite
`

- [使用 Zerotier 组建虚拟局域网实现内网穿透](http://einverne.github.io/post/2018/06/zerotier.html) | Verne in GitHub

ZeroTier – Global Area Networking
> https://www.zerotier.com/
> https://github.com/zerotier/ZeroTierOne

LINUX (DEB/RPM)
Debian and RPM based distributions including Debian, Ubuntu, CentOS, RHEL, Fedora, and others are supported via a script that adds the right repository and installs the package.

Other Linux distributions may have their own packages. If not try building and installing from source.

If you’re willing to rely on SSL to authenticate the site, a one line install can be done with:
`curl -s https://install.zerotier.com | sudo bash`


- [无公网IP搞定群晖+ZEROTIER ONE实现内网穿透](https://post.smzdm.com/p/741270/)_NAS存储_什么值得买
