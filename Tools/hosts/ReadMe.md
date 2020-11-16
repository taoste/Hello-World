- [DNS优选(挑选最合适的DNS服务器,拒绝DNS劫持)](https://www.52pojie.cn/forum.php?mod=viewthread&tid=976081&ctid=1767) - 『原创发布区』 - [**吾爱破解**](https://www.52pojie.cn/) - LCG - LSG |安卓破解|病毒分析|破解软件|www.52pojie.cn  
>> 百度云下载 https://pan.baidu.com/s/1piIJ7kJH0ido88EfDw28og (提取码: qwsm)

- [**DNS 服务器列表**](https://github.com/taoste/Hello-World/blob/master/Tools/hosts/dns-server-list.md)

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
> [pscp.tv](https://bgp.he.net/dns/pscp.tv) dns:  52.8.57.16, 52.52.85.82 
> 
> [#csdn.net](https://bgp.he.net/dns/csdn.net)
> 47.95.164.112 csdn.net
>
> [#feedly.com](https://bgp.he.net/dns/feedly.com)
> #104.20.60.241 feedly.com 
> #104.20.59.241 feedly.co
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

<pre><code>

# notepad %SystemRoot%\System32\drivers\etc\hosts

# ipconfig /release 释放ip

# ipconfig /renew 重新获取ip

# ipconfig /flushdns 清除系统DNS缓存

# 程序员小辉 https://bgp.he.net/dns/xiaohui.com
45.33.40.58 xiaohui.com

# APKPure 应用市场  https://apkpure.com/cn/
172.67.1.139 apkpure.com
#104.20.83.194 apkpure.com
#104.20.82.194 apkpure.com

#草榴社區 https://bgp.he.net/dns/t66y.com
104.25.32.112 t66y.com
104.25.31.112 t66y.com
104.27.68.93 t66y.com
104.27.69.93 t66y.com
104.26.11.160 t66y.com
104.26.10.160 t66y.com
172.67.74.241 t66y.com
2606:4700:20::681A:BA0 t66y.com
2606:4700:20::681A:AA0 t66y.com
2606:4700:20::AC43:4AF1 t66y.com
2400:CB00:2048:1::6819:1F70 t66y.com
2400:CB00:2048:1::6819:2070 t66y.com
 
 #sex.com https://bgp.he.net/dns/sex.com
206.125.164.82 sex.com
15.222.131.21 sex.com
2600:1F11:F61:1000:5374:C426:AA04:A354 sex.com
2600:1F11:F61:1000:D6:B66B:6DC3:970B sex.com
2607:FC10:1:400::82 sex.com
66.254.114.41 pornhub.com
 
 #佐拉 - 周曙光的个人网站
 #104.28.27.52 zuola.com
 #104.28.26.52 zuola.com
 #2400:CB00:2048:1::681C:1B34 zuola.com
 #2400:CB00:2048:1::681C:1A34 zuola.com
 
#feedly.com https://bgp.he.net/dns/feedly.com
104.20.60.241 feedly.com
104.20.59.241 feedly.com

#csdn.net https://bgp.he.net/dns/csdn.net
47.95.164.112 csdn.net

#v2ex.com https://bgp.he.net/dns/v2ex.com
104.20.10.218 v2ex.com
104.20.9.218 v2ex.com
172.67.3.188 v2ex.com
2606:4700:10::6814:ADA v2ex.com
2606:4700:10::AC43:3BC v2ex.com
2606:4700:10::6814:9DA v2ex.com

##64.150.183.194 huanghuagang.org
199.34.228.75 huanghuagang.org
204.79.197.217 onedrive.live.com

218.254.1.15 2xiangzi.blogspot.com
218.254.1.15 program-think.blogspot.com
218.254.1.15 kids.youtube.com

127.0.0.1 pc.xunlei.com 
127.0.0.1 hub5btmain.sandai.net
127.0.0.1 hub5emu.sandai.net
127.0.0.1 upgrade.xl9.xunlei.com

127.0.0.1 idb.iobit.com
127.0.0.1 asc55.iobit.com
127.0.0.1 is360.iobit.com
127.0.0.1 asc.iobit.com
127.0.0.1 pf.iobit.com
127.0.0.1 iunins.iobit.com

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
