<details>
    <summary>
      <a href="https://www.zhihu.com/question/32229915">推荐</a>：<b><a href="https://github.com/taoste/Hello-World/blob/master/Tools/hosts/dns-server-list.md">DNS 服务器列表</a></b>
    <h2><a href="https://help.aliyun.com/document_detail/171664.html" title="DNS over HTTPs(DoH)_API文档_阿里云公共DNS | 阿里云">DNS over HTTPs(DoH)_API文档_阿里云公共DNS</a></h2>
<blockquote>阿里公共DNS通过RFC 8484指定的经过TLS加密的HTTP连接提供DNS解析<br>
DNS over HTTPS（DoH）的URI接口 ：（仅提供TLS API）<br>
<li>https://dns.alidns.com/dns-query?</li>
<li>https://alidns_ip/dns-query?</li>
<li>https://user_id.alidns.com/dns-query?</li>
</blockquote>    
<blockquote>
<li>免费公共 IPv4/IPv6/DoT/DoH DNS 服务器大全 Public DNS Server - DNS.iCoA.CN</li>
<blockquote>https://dns.icoa.cn/</blockquote>
</blockquote>
        <h2>
            <a href="https://www.iplaysoft.com/dnsjumper.html" title="DNS Jumper - 方便一键快速切换网卡DNS地址设置的免费实用工具 (批量测速/清空缓存等) - 异次元软件下载">DNS 快速切换工具</a> : <a href="https://www.sordum.org/7952/dns-jumper-v2-2/" title="Dns Jumper v2.2 - A Free DNS Changer | Dns Jumper(DNS设置工具) V2.2 绿色免费版">Dns Jumper(DNS设置工具) V2.2 绿色免费版</a></h2>
     </summary> 
     <p>
     <a href="https://alidns.com/" title="阿里DNS"><img src="https://github.com/taoste/Hello-World/blob/master/Tools/hosts/alidns.png?raw=true" /> </a>
     <blockquote>IPv4 地址<br>&nbsp;&nbsp;&nbsp;首选：223.5.5.5<br>&nbsp;&nbsp;&nbsp;备用：223.6.6.6<br>
        IPv6 地址<br>&nbsp;&nbsp;&nbsp;首选：2400:3200::1<br>&nbsp;&nbsp;&nbsp;备用：2400:3200:baba::1</blockquote>
</p>
     作者：橱柜扫地僧<br>链接：https://www.zhihu.com/question/32229915/answer/574532020<br>来源：知乎<br>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<br>
<hr style="height:1px;border:none;border-top:1px dashed #0066CC;"/>
<div>
<p>DNS （Domain Name System 的缩写）的作用非常简单，就是根据域名查出IP地址，你可以把它想象成一本巨大的电话本。原理可见下图：</p>
<p>
   <img src="https://github.com/taoste/Hello-World/blob/master/Tools/hosts/dns.jpg?raw=true"/> 
<br>
</p>
<p>给大家推荐一些优秀的 DNS 解析服务，方便在不同的场景中使用，<b>解决无法上网的问题和起到加速 / 防劫持的作用</b> 。 </p>
<p>
<u>以下列表中包含符号 「<b>★</b>」 的 DNS 服务较为优质。</u>
</p>
<h2>
<b>国内</b>
</h2>
<p>同一个 DNS 服务器在不同国家不同地区的表现并不完全相同，解析速度、响应时间等都有所区别，所以建议大家多多对比。</p>
<h2>
<b>★ DNSPod Public DNS+</b>
</h2>
<p>Public DNS+ 是属于 腾讯云旗下的公共 DNS 服务。拥有 80 多条国内线路和 4 条海外线路，有 BGP Anycast 技术，也是国内首家支持谷歌 ECS (edns-client-subnet) 协议的公共 DNS 解析服务。它只使用一个 IP，但有三地集群容灾和秒级自动故障切换，在国内大多数地方的测速数据都非常好，值得推荐。</p>
<blockquote>IPv4 地址<br>首选：119.29.29.29</blockquote>
<h2>
<b>★ AliDNS 阿里公共 DNS 解析服务</b>
</h2>
<p>阿里公共 DNS 是 阿里云 推出的免费 DNS 递归解析系统，宣称全球数百台服务器组成的集群，拥有充足的带宽资源，目标是成为国内互联网基础设施的组成部分，支持 BGP Anycast 以及 ECS 技术。</p>
<blockquote>IPv4 地址<br>首选：223.5.5.5<br>备用：223.6.6.6</blockquote>
<h2>
<b>★ 114 DNS</b>
</h2>
<p>
<b>114 DNS</b> 在国内的用户量相当巨大，其 DNS 解析成功率高，与 ISP 的 DNS 相比，能访问更多的国内外网站；号称纯净、无劫持、无需再忍受被强插广告或粗俗网站之痛苦；114DNS 做得比较早，有一定的技术积累，稳定性不错，尽管速度比前两者差一点点，但也都能让人满意。它还有一个特色，就是根据不同用途可以选择不同的 DNS 组。推荐，笔者正在是使用。</p>
<blockquote>常规公共 DNS (干净无劫持)<br>首选：114.114.114.114 <br>备选：114.114.115.115<br>拦截钓鱼病毒木马网站 (保护上网安全)<br>首选：114.114.114.119<br>备用：114.114.115.119<br>拦截色情网站 (保护儿童)<br>首选：114.114.114.110<br>备用：114.114.115.110</blockquote>
<h2>
<b>★ 百度 BaiduDNS</b>
</h2>
<p>百度 DNS 公共解析服务，支持 ipv4 和 ipv6。作为中国最大的搜索引擎，百度拥有一流的基础设施和强大技术实力，国内速度相当快！该服务快速稳定无劫持，智能拦截恶意网站，支持 BGP Anycast 和 ECS 技术。</p>
<blockquote>IPv4 地址：180.76.76.76<br>IPv6 地址：2400:da00::6666</blockquote>
<h2>
<b>360 DNS 派 （DNSpai Public DNS）</b>
</h2>
<p>DNS 派是由 360 出品的免费公众 DNS 解析服务。它可以让网上冲浪更加稳定、快速、安全；为家庭拦截钓鱼网站，过滤非法网站，建立一个绿色健康的网上环境；为域名拼写自动纠错等。</p>
<blockquote>首选（电信 / 移动 / 铁通）：101.226.4.6<br>备选（电信 / 移动 / 铁通）：218.30.118.6<br>首选（联通）：123.125.81.6<br>备选（联通）：140.207.198.6</blockquote>
<h2>
<b>CNNIC sDNS</b>
</h2>
<p>sDNS (SecureDNS，简称 sDNS) 是由中国互联网络信息中心 CNNIC 与国内外电信运营商合作推出的免费公共云解析服务，旨在为用户提供高速、安全、智能的上网接入解析服务。sDNS 递归云解析服务采用 IP Anycast+BGP 技术跨区域、跨运营商的分布式异构部署，比运营商提供的 DNS 更快更稳定。</p>
<blockquote>IPv4 地址<br>首选：1.2.4.8<br>备用：210.2.4.8</blockquote>
<h2>
<b>OneDNS</b>
</h2>
<p>OneDNS 是一个安全、快速、免费的小众 DNS 服务。它能屏蔽恶意网站、摆脱无良 ISP 的 DNS 污染与劫持。同时横跨南北的高速线路加速您的网络连接。</p>
<blockquote>IPv4 地址<br>首选：117.50.11.11<br>备用：117.50.22.22</blockquote>
<figure data-size="normal">
<hr style="height:1px;border:none;border-top:1px dashed #0066CC;"/>
</figure>
<p>
<b>国外</b>
<br>
</p>
<p>顾名思义，国外的 DNS 当然是适合海外用户使用咯。而对于国内用户来说，尽管这些 DNS 服务器在国内访问速度不算快，但作用也不少，比如买了国外的 VPS 来搭建番 · 羽 · 土 · 啬相关的应用时，可以配置它使用国外的 DNS 等等。</p>
<h2>
<b>★ Google Public DNS (8.8.8.8)</b>
</h2>
<p>来自 Google 提供的免费全球公共 DNS 服务，主要为了改进网络浏览速度、改善网络用户的浏览体验。这个基本上不用多做什么介绍了，可能它也是目前全球范围内使用量最大的公共 DNS 了，老牌、稳定、技术强劲。</p>
<blockquote>IPv4 地址<br>首选：8.8.8.8<br>备用：8.8.4.4<br>IPv6 地址<br>首选：2001:4860:4860::8888<br>备用：2001:4860:4860::8844</blockquote>
<h2>
<b>★ CloudFlare DNS (1.1.1.1)</b>
</h2>
<p>CloudFlare DNS 是号称全球最快的 DNS 服务 (当然天朝不算在全球范围内&gt;_&lt;)， CloudFlare 是全球最大的 CDN / DDOS 防护服务提供商之一 (在国内与百度云加速合作)，其遍布全球的基础设施资源极其丰富，资金和技术实力相当雄厚。在国外实测速度相当强劲，目前我已将海外的 VPS 全部换到此 DNS，解析速度非常快，相当值得推荐！</p>
<blockquote>IPv4 地址<br>首选：1.1.1.1<br>备用：1.0.0.1<br>IPv6 地址：<br>首选：2606:4700:4700::1111<br>备用：2606:4700:4700::1001</blockquote>
<h2>
<b>IBM Quad9 (9.9.9.9)</b>
</h2>
<p>IBM 、Global Cyber Alliance 和 Packet Clearing House 合作推出的免费 Quad9 公共 DNS 服务 (9.9.9.9)，主打安全，它会智能屏蔽恶意网址、僵尸网络、钓鱼攻击和其它恶意主机相关联的域名，而且更注重隐私保护。对安全有需求的朋友可以使用这组 DNS。</p>
<blockquote>IPv4 地址<br>首选：9.9.9.9<br>备用：149.112.112.112<br>IPv6 地址<br>首选：2620:fe::fe<br>备用：2620:fe::9</blockquote>
<h2>
<b>Cisco OpenDNS</b>
</h2>
<p>OpenDNS 是一个老牌的免费公共 DNS 提供商，后来被 Cisco (思科) 全资收购。</p>
<blockquote>IPv4 地址<br>首选：208.67.222.222<br>备用：208.67.220.220<br>IPv6 地址<br>首选：2620:0:ccc::2<br>备用：2620:0:ccd::2</blockquote>
<h2>
<b>Hurricane Electric Public DNS （HE）</b>
</h2>
<blockquote>IPv4 地址<br>首选：74.82.42.42<br>备用：66.220.18.42<br>IPv6 地址<br>首选：2001:470:20::2<br>备用：2001:470:0:9d::2</blockquote>
<h2>
<b>科摩多 Comodo SecureDNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：8.26.56.26<br>备用：8.20.247.20</blockquote>
<h2>
<b>Verisign Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：64.6.64.6<br>备用：64.6.65.6<br>IPv6 地址<br>首选：2620:74:1b::1:1<br>备用：2620:74:1c::2:2</blockquote>
<h2>
<b>Neustar Recursive DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：156.154.70.1<br>备用：156.154.71.1<br>IPv6 地址<br>首选：2610:a1:1018::1<br>备用：2610:a1:1019::1</blockquote>
<h2>
<b>ORACLE Dyn Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：216.146.36.36<br>备用：216.146.35.35</blockquote>
<h2>
<b>Level3 Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：209.244.0.3<br>备用：209.244.0.4</blockquote>
<h2>
<b>Alternate DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：23.253.163.53<br>备用：198.101.242.72</blockquote>
<h2>
<b>香港</b>
</h2>
<h2>
<b>香港宽频 / HKBN</b>
</h2>
<blockquote>IPv4 地址<br>首选：203.80.96.10</blockquote>
<h2>
<b>和记环球电讯 DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：202.45.84.58<br>备用：202.45.84.59</blockquote>
<h2>
<b>Pacific SuperNet DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：202.14.67.4<br>备用：202.14.67.14</blockquote>
<h2>
<b>台湾</b>
</h2>
<h2>
<b>中华电信 / HiNet</b>
</h2>
<blockquote>IPv4 地址<br>首选：168.95.1.1<br>备用：168.95.192.1<br>IPv6 地址<br>首选：2001:b000:168::1<br>备用：2001:b000:168::2</blockquote>
<h2>
<b>数位联合电信 / Seednet</b>
</h2>
<blockquote>IPv4 地址<br>首选：139.175.252.16<br>备用：139.175.55.244</blockquote>
<h2>
<b>台湾网路资讯 / TWNIC Quad101 Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：101.101.101.101<br>备用：101.102.103.104<br>IPv6 地址<br>首选：2001:de4::101<br>备用：2001:de4::102</blockquote>
<h2>
<b>韩国</b>
</h2>
<h2>
<b>KT olleh</b>
</h2>
<blockquote>IPv4 地址：<br>首选：168.126.63.1<br>备用：168.126.63.2</blockquote>
<h2>
<b>SK Broadband</b>
</h2>
<blockquote>首选：210.220.163.82<br>备用：219.250.36.130</blockquote>
<h2>
<b>LG U+</b>
</h2>
<blockquote>首选：164.124.101.2<br>备用：203.248.252.2<br>首选：164.124.107.9<br>备用：203.248.242.2</blockquote>
<h2>
<b>其他国家</b>
</h2>
<h2>
<b>俄罗斯 Yandex Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：77.88.8.8<br>备用：77.88.8.1<br>IPv6 地址<br>首选：2a02:6b8::feed:0ff<br>备用：2a02:6b8:0:1::feed:0ff</blockquote>
<h2>
<b>俄罗斯 SafeDNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：195.46.39.39<br>备用：195.46.39.40</blockquote>
<h2>
<b>德国 DNS.WATCH Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：84.200.69.80<br>备用：84.200.70.40<br>IPv6 地址<br>首选：2001:1608:10:25::1c04:b12f<br>备用：2001:1608:10:25::9249:d69b</blockquote>
<h2>
<b>瑞士 <a href="https://link.zhihu.com/?target=http%3A//xiala.net" class=" external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">
<span class="invisible">http://</span>
<span class="visible">xiala.net</span>
<span class="invisible">
</span>
</a> Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：77.109.148.136<br>备用：77.109.148.137<br>IPv6 地址<br>首选：2001:1620:2078:136::<br>备用：2001:1620:2078:137::</blockquote>
<h2>
<b>丹麦 UncensoredDNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：91.239.100.100<br>备用：89.233.43.71<br>IPv6 地址<br>首选：2001:67c:28a4::<br>备用：2a01:3a0:53:53::</blockquote>
<h2>
<b>荷兰 Freenom World Public DNS</b>
</h2>
<blockquote>IPv4 地址<br>首选：80.80.80.80<br>备用：80.80.81.81</blockquote>
<h2>
<b>写在后面</b>
</h2>
<p>你可以在路由器上设置公共 DNS，这将应用到你全部的设备。也可以根据需要只在某台电脑、手机上独立进行设置。Win、macOS、Linux 等系统的配置方法可以很容易搜索得到。</p>
<p>而且不仅仅是电脑和手机，像 XBox、PS4 等游戏机或者任何网络设备，基本都可以设置 DNS 的。如果你玩游戏、下载游戏速度太慢太卡，也不妨试试更换一个 DNS 看看效果。</p>
<p>如有使用和配置的问题，请留言询问。</p>
</div>
</details>

-----------------------------

免费公共 IPv4/IPv6/DoT/DoH DNS 服务器大全 Public DNS Server - DNS.iCoA.CN
> https://dns.icoa.cn/

https://bgp.he.net/dns/googlevideo.com

GoogleHosts
> https://github.com/googlehosts

TikTok视频在线下载-下载TikTok音乐和视频
> https://zh.savefrom.net/83/

Insland素材下载 – Youtube,Instagram,Twitter,Facebook等图片或视频下载
> http://www.insland.net/
‎App Store 上的“INSland”
> https://apps.apple.com/cn/app/insland/id1566693075

- [DNS优选(挑选最合适的DNS服务器,拒绝DNS劫持)](https://www.52pojie.cn/forum.php?mod=viewthread&tid=976081&ctid=1767) - 『原创发布区』 - [**吾爱破解**](https://www.52pojie.cn/) - LCG - LSG |安卓破解|病毒分析|破解软件|www.52pojie.cn  
>> 百度云下载 https://pan.baidu.com/s/1piIJ7kJH0ido88EfDw28og (提取码: qwsm)

-----------------------------

@<a href="https://zh.wikipedia.org/zh/" title="维基百科，自由的百科全书">维基百科</a>  :  <a href="https://zh.wikipedia.org/zh/Hosts%E6%96%87%E4%BB%B6" title="域名解析文件(Hosts文件) - 维基百科，自由的百科全书">域名解析文件(Hosts文件)</a> 

-----------------------------

- [**使用批处理bat更改hosts的多个方法**](https://www.jb51.net/article/51902.htm)_DOS/BAT_脚本之家

([引用](https://www.cnblogs.com/craig/archive/2011/05/09/2041433.html) : [怎么用批处理修改host文件 - craig - 博客园](https://www.cnblogs.com/craig/archive/2011/05/09/2041433.html) )

[引用](https://github.com/taoste/Hello-World/issues/2#issuecomment-374911469)：

> [Ping查询](https://www.ipip.net/ping.php) （**最专业的 IP 地址库**_IPIP.NET）全球唯一一个基于BGP/ASN数据分析处理而得来的IP库
> 
> 强大的IP 地址归属地查询 （**bgp.he.net**）
> 
> 参考：
> 
> 1. [https://bgp.he.net/dns/zuola.com](https://bgp.he.net/dns/t66y.com)
> 
> [t66y](https://bgp.he.net/dns/sex.com) dns: 104.25.32.112 , 104.25.31.112
> 
>> 172.67.74.241 t66y.com
> 
>> 104.26.10.160 t66y.com
> 
>> 104.26.11.160 t66y.com
> 
>> 2606:4700:20::681A:AA0 t66y.com
> 
>> 2606:4700:20::AC43:4AF1 t66y.com
> 
>> 2606:4700:20::681A:BA0 t66y.com
> 
> [pscp.tv](https://bgp.he.net/dns/pscp.tv) dns:  52.8.57.16, 52.52.85.82 
>
> [#duckduckgo.comm](https://bgp.he.net/dns/duckduckgo.com)
> 
> #DuckDuckGo — 隐私保护，化繁为简。
> 
> #https://duckduckgo.com/?kad=zh_CN
> 
> 40.89.244.232 duckduckgo.com

>#[https://onedrive.live.com](https://bgp.he.net/dns/onedrive.live.com)
>
>> 13.107.42.13 onedrive.live.com 
> 
>> 40.90.133.97 skyapi.onedrive.live.com
> 
> [#v2ex.com](https://bgp.he.net/dns/v2ex.com)
> 
> 104.20.9.218 v2ex.com 
>
> 172.67.3.188 v2ex.com 
>
> 104.20.10.218 v2ex.com
>
> 2606:4700:10::6814:ADA v2ex.com
>
> 2606:4700:10::6814:9DA v2ex.com
>
> 2606:4700:10::AC43:3BC v2ex.com
>
> [#CSDN.net](https://bgp.he.net/dns/csdn.net)
> 
>> 47.95.164.112 csdn.net
> 
> [#昵图网](https://bgp.he.net/dns/nipic.com)
> 
>> 122.226.73.53 nipic.com
> 
> [#千图网](https://bgp.he.net/dns/58pic.com)
> 
>> 47.105.124.157 58pic.com
> 
>> 114.215.127.78 58pic.com
> 
> [#GitHub.com](https://bgp.he.net/dns/github.com)
>
>> 140.82.114.3 github.com
> 
> [#GitHub.io](https://bgp.he.net/dns/github.io)
>
>> 185.199.110.153 github.io
>
>> 185.199.111.153 github.io
>
>> 185.199.109.153 github.io
>
>> 185.199.108.153 github.io
> 
> [#feedly.com](https://bgp.he.net/dns/feedly.com)
> 
>> #104.20.60.241 feedly.com 
> 
>> #104.20.59.241 feedly.co
>
> [#mozilla.org](https://bgp.he.net/dns/mozilla.org)
>
>> 44.236.48.31 mozilla.org
> 
>> 44.235.246.155 mozilla.org
> 
>> 44.236.72.93 mozilla.org
>
> 2. Simple **DNSCrypt** - Official Project Home Page ( https://simplednscrypt.org/  )
> 
> [View on GitHub](https://github.com/bitbeans/SimpleDnsCrypt)
> 
> [Download .zip (Source)](https://github.com/bitbeans/SimpleDnsCrypt/zipball/master) 
> 
> [Download .msi (Installer)](https://github.com/bitbeans/SimpleDnsCrypt/releases/download/0.4.2/SimpleDNSCrypt.msi) 
> 
>> 参阅： 《[Simple DNSCrypt - 保护网络安全，一键加密 DNS 流量 [Windows]](https://www.appinn.com/simple-dnscrypt)》 - 小众软件（2018-3-4）
> - <kbd>Win徽标键</kbd> + <kbd>R</kbd>，打开-->运行：cmd
> 
> ipconfig /release 释放ip
> 
> ipconfig /renew 重新获取ip
> 
> ipconfig /flushdns 清除系统DNS缓存
> 
> 【Host IP】
> 
> notepad %SystemRoot%\System32\drivers\etc\hosts
> 
> <a href="https://zh.wikipedia.org/zh/Hosts%E6%96%87%E4%BB%B6" title="域名解析文件(Hosts文件) - 维基百科，自由的百科全书">hosts</a> 所在文件夹：
> 
> >     Windows 系统hosts位于 C:\Windows\System32\drivers\etc\hosts
> >     Android（安卓）系统hosts位于 /etc/hosts
> >     Mac（苹果电脑）系统hosts位于 /etc/hosts
> >     iPhone（iOS）系统hosts位于 /etc/hosts
> >     Linux系统hosts位于 /etc/hosts
> >     绝大多数Unix系统都是在 /etc/hosts

在Windows中，默认的hosts文件通常是空白的或包含了注释语句并使用了一条默认规则：

> >     127.0.0.1       localhost
> >     ::1             localhost

格式差异

hosts文件在不同的操作系统中格式有所不同，不可直接复制使用。

> >    例如，在Windows和macOS下，hosts文件采用的换行方式为“\rCR\nLF”，而Linux以及Android的换行方式则为“\nLF”，将hosts文件转换为对应平台的换行方式后才能发挥作用。

hosts文件的其它用途

> >     hosts文件也可以用于其它情况，例如可以将已知的广告服务器重定向到无广告的机器
> >     （通常是該電腦自身的IP地址：127.0.0.1）上来过滤广告。
> >     同时也可以通过不下载网络广告，从而减少带宽。
> >     使用hosts文件还可以减少对DNS服务器的访问来加快访问速度并减少带宽消耗。

> >     hosts文件的另一个重要用途就是用于拦截一些恶意网站的请求，从而防止访问欺诈网站或感染一些病毒或恶意软件。
> >     但同时，这个文件也可能被病毒或恶意软件所利用来阻止用户更新杀毒软件或访问特定网站。

> >     在中国大陆，由于防火长城的DNS劫持，有一些网民也借使用hosts文件来强制将特定网站指定到未封鎖的IP上。
> >     但自2018年8月24日起，防火长城开始启用基于SNI检测和TCP连接重置的手段进行封锁。
> >     所以修改Hosts绕过封锁的方法，绝大多数网站不再完全适用。

-----



# notepad %SystemRoot%\System32\drivers\etc\hosts

# ipconfig /release 释放ip

# ipconfig /renew 重新获取ip

# ipconfig /flushdns 清除系统DNS缓存

# 程序员小辉 https://bgp.he.net/dns/xiaohui.com<br>
>45.33.40.58 xiaohui.com

# APKPure 应用市场  https://apkpure.com/cn/<br>
> 172.67.1.139 apkpure.com
>
> #104.20.83.194 apkpure.com
>
> #104.20.82.194 apkpure.com

#草榴社區 https://bgp.he.net/dns/t66y.com<br>
104.25.32.112 t66y.com<br>
104.25.31.112 t66y.com<br>
104.27.68.93 t66y.com<br>
104.27.69.93 t66y.com<br>
104.26.11.160 t66y.com<br>
104.26.10.160 t66y.com<br>
172.67.74.241 t66y.com<br>
2606:4700:20::681A:BA0 t66y.com<br>
2606:4700:20::681A:AA0 t66y.com<br>
2606:4700:20::AC43:4AF1 t66y.com<br>
2400:CB00:2048:1::6819:1F70 t66y.com<br>
2400:CB00:2048:1::6819:2070 t66y.com<br>
 
 #sex.com https://bgp.he.net/dns/sex.com<br>
206.125.164.82 sex.com<br>
15.222.131.21 sex.com<br>
2600:1F11:F61:1000:5374:C426:AA04:A354 sex.com<br>
2600:1F11:F61:1000:D6:B66B:6DC3:970B sex.com<br>
2607:FC10:1:400::82 sex.com<br>
66.254.114.41 pornhub.com<br>
 
 #佐拉 - 周曙光的个人网站<br>
 #104.28.27.52 zuola.com<br>
 #104.28.26.52 zuola.com<br>
 #2400:CB00:2048:1::681C:1B34 zuola.com<br>
 #2400:CB00:2048:1::681C:1A34 zuola.com<br>
 
#feedly.com https://bgp.he.net/dns/feedly.com<br>
104.20.60.241 feedly.com<br>
104.20.59.241 feedly.com<br>

#csdn.net https://bgp.he.net/dns/csdn.net<br>
47.95.164.112 csdn.net<br>

#v2ex.com https://bgp.he.net/dns/v2ex.com<br>
104.20.10.218 v2ex.com<br>
104.20.9.218 v2ex.com<br>
172.67.3.188 v2ex.com<br>
2606:4700:10::6814:ADA v2ex.com<br>
2606:4700:10::AC43:3BC v2ex.com<br>
2606:4700:10::6814:9DA v2ex.com<br>

##64.150.183.194 huanghuagang.org<br>
199.34.228.75 huanghuagang.org<br>
204.79.197.217 onedrive.live.com<br>

218.254.1.15 2xiangzi.blogspot.com<br>
218.254.1.15 program-think.blogspot.com<br>
218.254.1.15 kids.youtube.com<br>

127.0.0.1 pc.xunlei.com <br>
127.0.0.1 hub5btmain.sandai.net<br>
127.0.0.1 hub5emu.sandai.net<br>
127.0.0.1 upgrade.xl9.xunlei.com<br>

127.0.0.1 idb.iobit.com<br>
127.0.0.1 asc55.iobit.com<br>
127.0.0.1 is360.iobit.com<br>
127.0.0.1 asc.iobit.com<br>
127.0.0.1 pf.iobit.com<br>
127.0.0.1 iunins.iobit.com<br>
<pre><code>
-----
</code></pre>

-----

- [强制 Google.com 域名使用 HTTPS（SSL）](https://laod.cn/hosts/suggestions-for-google-hosts-https-ssl.html) | 老D博客
<pre><code>
在 Chrome 浏览器上输入链接 chrome://net-internals/#hsts （可复制此地址粘贴到地址栏），回车。
在 Domain 栏里，输入 google.com ，并勾选下面的两个复选框，点击 “Add” 按钮即可。
 </code></pre>
 
 -----
 
- [优雅高效地使用 Windows](http://saili.science/2016/10/17/windows-use/) | Alex LEE's Blog

> >     『优雅』、『高效』，可以理解为自然不慌乱，简洁不杂乱，高效不散乱，流畅不混乱。
> >     实际上是指优化电脑工作环境，让电脑的使用更加快速高效。
> >     而且在当前国内的环境来看，更应该加上一条，即尽可能的避免流氓软件的骚扰。
> >     确切的来讲，电脑使用环境的优化与获得更高的使用效率是一个颇长的过程，牵涉到不断的学习与总结。
> >     这里的总结，当然仅仅是个人的一些看法，无法适应所有人的需求或满足所有人的看法 / 好恶，仅供抛砖引玉。

-----

- [系统变量（%SystemRoot% ，%windir% ，%temp%，%system%）的表示方法](http://www.cnblogs.com/5tao/archive/2008/11/16/1334526.html) (2008-11-16) - 独孤雁 - 博客园

> >     在设置系统环境变量的过程中，经常会看到诸如%SystemRoot% ，%windir% ，%temp% 的字眼，
> >     当初我也不知道指的是那些目录，经过一段时间的探索，终于还是弄懂了，
> >     总结一下分享给大家：对于操作系统是XP（系统目录是windows）并安装在c盘的用户sihochina
> >     
> >     格式：变量名=实际含义 
> >      
> >     %HOMEDRIVE% = C:\          当前启动的系统的所在分区 
> >     %SystemRoot% = C:\WINDOWS          当前启动的系统的所在目录 
> >     %windir% = %SystemRoot% = C:\WINDOWS          当前启动的系统的所在目录 
> >     %USERPROFILE% = C:\Documents and Settings\sihochina          当前用户数据变量 
> >     %HOMEPATH% = C:\Documents and Settings\sihochina          当前用户环境变量 
> >     %temp% = %USERPROFILE%\Local Settings\Temp = C:\Documents and Settings\sihochina\Local Settings\Temp         
> >     当前用户TEMP缓存变量 
> >     
> >     例如：%windir%\drives 的实际路径就是 C:\WINDOWS\drives 目录。 
> >               所谓变量，就是指一个在不同环境中会有相对不同的值的、但在所有环境中都有相同约定的含义的量。 
> >               这些变量，可以在开始菜单-运行中输入，如输入%SystemRoot% ，系统会直接打开 C:\WINDOWS 目录。 
> >     如果你当前的系统是装在D盘的2000的话，上边这个变量的执行结果就是打开 D:\WINNT 目录了。 
> >     
> >     求救：本人在网上看到系统变量%SYSTEM%代表的路径有两种：
> >     一个是C:\WINDOWS\SYSTEM32，当然也有另一种说法是C:\WINDOWS\，到底哪种说法是正确的？
> >     
> >     今天从图书馆查了资料，%system%指的是系统安装盘下的system32目录。
> >     如果系统安装在C盘，他所指的目录就是：
> >     C:\WINDOWS\SYSTEM32(WINDOWS XP,2K,2K3)和C;\WINNT\SYSYTEM32(WINDOWS 98,ME)。
> >     特此作出更正！
