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
> 2. Simple **DNSCrypt** - Official Project Home Page ( https://simplednscrypt.org/  )
> 
> [View on GitHub](https://github.com/bitbeans/SimpleDnsCrypt)
> 
> [Download .zip (Source)](https://github.com/bitbeans/SimpleDnsCrypt/zipball/master) 
> 
> [Download .msi (Installer)](https://github.com/bitbeans/SimpleDnsCrypt/releases/download/0.4.2/SimpleDNSCrypt.msi) 
> 
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

-----

<pre><code>
 #草榴社區
 #104.25.32.112 t66y.com
 #104.25.31.112 t66y.com
 #2400:CB00:2048:1::6819:1F70 t66y.com
 #2400:CB00:2048:1::6819:2070 t66y.com
 
 #sex.com
 #206.125.164.82 sex.com
 #2607:FC10:1:400::82 sex.com
 
 #佐拉 - 周曙光的个人网站
 #104.28.27.52 zuola.com
 #104.28.26.52 zuola.com
 #2400:CB00:2048:1::681C:1B34 zuola.com
 #2400:CB00:2048:1::681C:1A34 zuola.com
 </code></pre>

-----

- [强制 Google.com 域名使用 HTTPS（SSL）](https://laod.cn/hosts/suggestions-for-google-hosts-https-ssl.html) | 老D博客
<pre><code>
在 Chrome 浏览器上输入链接 chrome://net-internals/#hsts （可复制此地址粘贴到地址栏），回车。
在 Domain 栏里，输入 google.com ，并勾选下面的两个复选框，点击 “Add” 按钮即可。
 </code></pre>
 
 -----
