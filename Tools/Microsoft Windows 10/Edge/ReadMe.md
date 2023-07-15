- 🔄 内链切换 : **[Google Chrome 系列](https://github.com/taoste/Hello-World/tree/master/Tools/Google%20Chrome) / 
[🦊 Mozilla Firefox 系列](https://github.com/taoste/Hello-World/tree/master/Tools/Mozilla%20Firefox)  / 
[Microsoft Edge 系列](https://github.com/taoste/Hello-World/tree/master/Tools/Microsoft%20Windows%2010/Edge)**

<li><a href="https://www.catalog.update.microsoft.com/Search.aspx?q=Microsoft%20Edge-Stable%20Channel%20Version">【官网】微软更新目录</a></li>

------------------------------------------------------------------------------------------------------------------

<li><a href="https://jingyan.baidu.com/article/5d368d1ec920c87e61c0574a.html">如何强制卸载edge浏览器-百度经验</a></li>
命令代码：
<blockquote>get-appxpackage *edge*</blockquote>
<br>
<hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />
<br>
<details>
	<summary>
      <a href="https://answers.microsoft.com/zh-hans/microsoftedge/forum/all/%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%80%E6%96%B0/7172bdf6-9eb6-4f4c-a387-e003cc021aca">为什么最新版Microsoft edge无法卸载？ - Microsoft Community</a>
   </summary>
   <p data-prewrap="true">您好！</p>
<p data-prewrap="true" />
<p data-prewrap="true">非常欢迎您来微软技术支持社区咨询，</p>
<p data-prewrap="true" />
<p data-prewrap="true">Microsoft Edge 浏览器是 Windows 操作系统内置的新版浏览器应用，属于内置应用，是无法在设置中直接卸载的。</p>
<p data-prewrap="true" />
<p data-prewrap="true">如果您需要移除 Microsoft Edge 浏览器，您可以尝试以下方案进行操作：</p>
<p data-prewrap="true" />
<p data-prewrap="true">1、查看你当前 Microsoft Edge 浏览器版本号，地址栏输入：edge://settings/help，查看当前版本，比如：</p>
<p data-prewrap="true" />
<p data-prewrap="true">
<a href="https://filestore.community.support.microsoft.com/api/images/d349d413-6c90-41cf-8908-f2f93e38d24b?upload=true&amp;fud_access=wJJIheezUklbAN2ppeDns8cDNpYs3nCYjgitr%2bfFBh2dqlqMuW7np3F6Utp%2fKMltnRRYFtVjOMO5tpbpW9UyRAwvLeec5emAPixgq9ta07Dgnp2aq5eJbnfd%2fU3qhn545IgYUrp80qEKodWHhHWZuscjO0p%2b19ECUU4cI%2bZUSf6Lmadw3KUSfGbjd7dNHju6uAjLgs9oSqbd10559Jpvfs7yYLVU0cS6D3c1MmosSG25iiXXdPbNFFnc%2bgWx7BY0QsOyH5yGxOBCWioOBKdfRfjHtm6dBZ8CZN7QuCDuXBqvU3%2bwy8Q318Uo96OSBcXFc9QZT5B4V6mih%2fRAysv48DtBBeANFAanGCpaFyxGkSSzeqeEjK8kFJk%2bfg9e3Bg93H%2b8sG%2b9TOF4MtXMJysTTYDJEsTfZvrA%2fcqmpoKwDso%3d" class="ans-image-link" target="_blank" rel="noopener noreferrer nofollow" title="filestore.community.support.microsoft.com">
<img src="https://filestore.community.support.microsoft.com/api/images/d349d413-6c90-41cf-8908-f2f93e38d24b?upload=true&amp;fud_access=wJJIheezUklbAN2ppeDns8cDNpYs3nCYjgitr%2bfFBh2dqlqMuW7np3F6Utp%2fKMltnRRYFtVjOMO5tpbpW9UyRAwvLeec5emAPixgq9ta07Dgnp2aq5eJbnfd%2fU3qhn545IgYUrp80qEKodWHhHWZuscjO0p%2b19ECUU4cI%2bZUSf6Lmadw3KUSfGbjd7dNHju6uAjLgs9oSqbd10559Jpvfs7yYLVU0cS6D3c1MmosSG25iiXXdPbNFFnc%2bgWx7BY0QsOyH5yGxOBCWioOBKdfRfjHtm6dBZ8CZN7QuCDuXBqvU3%2bwy8Q318Uo96OSBcXFc9QZT5B4V6mih%2fRAysv48DtBBeANFAanGCpaFyxGkSSzeqeEjK8kFJk%2bfg9e3Bg93H%2b8sG%2b9TOF4MtXMJysTTYDJEsTfZvrA%2fcqmpoKwDso%3d" alt="图片" />
</a>
</p>
<p data-prewrap="true" />
<p data-prewrap="true">2、打开 Windows 资源管理器，定位到：C:\Program Files (x86)\Microsoft\Edge\Application，</p>
<p data-prewrap="true" />
<p data-prewrap="true">3、再打开对应版本的文件夹，再打开“Installer”文件夹，找到并选中“setup.exe”，</p>
<p data-prewrap="true" />
<p data-prewrap="true">4、点击左上角“文件”，选择以管理员身份运行 Windows Power Shell，</p>
<p data-prewrap="true" />
<p data-prewrap="true">5、键入命令：<span style="text-align: justify">.\setup.exe -uninstall -system-level -verbose-logging -force-uninstall，执行后即可完成 </span>Microsoft Edge 浏览器的卸载。</p>
<p data-prewrap="true" />
<p data-prewrap="true">免责声明：Microsoft Edge 是 Microsoft 推荐的 web 浏览器，并且是 Windows 的默认 web 浏览器。 由于 Windows 支持依赖于 web 平台的应用程序，因此我们的默认 web 浏览器是操作系统的基本组件，卸载Edge可能会影响系统。</p>
<p data-prewrap="true" />
<p data-prewrap="true">当您需要再次安装 Microsoft Edge 浏览器时，可以通过应用商店直接获取下载安装即可。</p>
<hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />
</details>

<br>
👇微软Edge浏览器用户数据保存位置（包括插件，历史记录，Cookie等）<br>
C:\Users\\%username%\AppData\Local\Microsoft\Edge\User Data\Default\Extensions<br>
<br>
👇谷歌Chrome浏览器用户数据保存位置（包括插件，历史记录，Cookie等）<br>
C:\Users\\%username%\AppData\Local\Google\Chrome\User Data\Default\Extensions<br>
<br>

- 欢迎使用 [**Internet Explorer**](https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads) /  [**Microsoft Edge**](https://microsoftedgewelcome.microsoft.com/zh-cn/) ([Win7](https://www.microsoftedgeinsider.com/zh-cn/download?platform=win7)特别版)（ [Microsoft Edge 文档
](https://docs.microsoft.com/zh-cn/DeployEdge/) / [关于 IE 模式 | Microsoft Docs](https://docs.microsoft.com/zh-cn/deployedge/edge-ie-mode) "[启用方法](https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/Edge/%E5%90%AF%E7%94%A8Edge%E7%9A%84IE%E6%A8%A1%E5%BC%8F.md)" ）
> 您不妨试用一下 基于 Chromium 的 [Microsoft Edge](https://microsoftedgewelcome.microsoft.com/zh-cn/)
> 
> Microsoft 专为 Windows 10 开发的最新浏览器    ( 》更多链接：[下载 **Microsoft Edge 商业版**](https://www.microsoft.com/zh-cn/edge/business/download) | [使用企业模式提高兼容性（面向 IT 专业人员的 Microsoft Edge）](https://docs.microsoft.com/zh-cn/microsoft-edge/deploy/emie-to-improve-compatibility) | [配置适用于 Windows 的 Microsoft Edge](https://docs.microsoft.com/zh-cn/DeployEdge/configure-microsoft-edge) - Edge | Microsoft Docs )
> 
> Internet Explorer 的开发人员现在满怀自豪地为您奉上 Microsoft Edge。它构建在您无比信任的 Internet Explorer 浏览器基础之上，您可以尽享您喜爱的各项功能。此外，您还可以：
> 
>>  在网页上书写
>>
>>  无干扰阅读
>>
>>将所有内容存储在一个位置

>利用 Microsoft Edge，您能做到的远非网络浏览那么简单 ( <a href="https://microsoftedgewelcome.microsoft.com/zh-cn/update/">Microsoft Edge 新增功能介绍</a> )

- ☞ [**立即试用 Microsoft Edge**](https://www.microsoft.com/zh-cn/MicrosoftEdgeWelcome) |  [**Microsoft Edge 加载项**](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home?hl=zh-CN)  | ( 安装 [**Microsoft Authenticator**](https://go.microsoft.com/fwlink/?LinkId=869155) 双因素验证/两步验证， 并在应用中登录帐户。  )
   
-------------------------------------------------

- Ⓜ️ 【Microsoft Edge】 view-source:[**新建标签页**](https://ntp.msn.cn/edge/ntp?locale=zh-cn&fre=1&dsp=1&sp=必应) | ( **Edge 实验**  edge://flags/ )

> Chrome 多用户分别建快捷方式（默认参数）：`--profile-directory=Default`

> **IE**浏览器是 `-private`，**chrome** 是 `-incognito` ，**Edge** 是 `-inprivate`

> 这样我们每次启动它们就都是隐身模式了，

> 而不用每次都要**Firefox：`Ctrl+Shift+p`**或者**chrome：`Ctrl+shift+n`** 。

> **Firefox** 常见启动参数[介绍](http://mozilla.com.cn/thread-21637-1-1.html)：
```
-safe-mode  启动安全模式
-profile "路径" 以特定路径里面的配置文件启动
-no-remote 可以同时运行多个实例
-private 以隐私模式启动
```
-------------------------------------------

<li><a href="https://www.llq.info/edge/8912.html" target="_blank" title="Edge 浏览器隐藏功能一览：多线程下载、IE 模式、阻止视频自动播放等-浏览器资讯网:"/>多线程下载(edge://flags/)</a>:</li>
<blockquote>在地址栏输入 chrome://flags/ 后进入到实验功能界面，找到“Parallel downloading”的选项，打开“Enable”即可。之后，Chrome 的下载速度就会有明显提升了。</blockquote>

- 设置 - Flash ( chrome://settings/content/flash )

- ( chrome://net-internals/#hsts )

<img src="https://raw.githubusercontent.com/taoste/Hello-World/master/Tools/Google%20Chrome/Google%20chrome%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AE%BE%E7%BD%AE.PNG" border="0" alt="Google chrome浏览器设置.PNG" title="Google chrome浏览器设置.PNG">

( <a href="https://support.google.com/chrome/a/answer/9024365?hl=zh-Hans" title="查看设备当前的Chrome 政策- Google Chrome Enterprise帮助">查看设备当前的Chrome 政策</a> chrome://policy/ ) 

> 参阅资料：

>> 《[cnBeta | 个人电脑上的 Chrome 被企业托管了，什么情况？](https://www.cnbeta.com/articles/tech/875243.htm )》

>> 《[Google Developers | Chromium 的弹窗机制](https://developers.google.com/web/updates/2017/03/dialogs-policy?hl=zh-cn)》

>> 《[Google/Chrome 个人经验](http://kisss.cjli.info/auxiliary/Google-Chrome-Experience.html)》 @ckwongloy

  
-------------------------------------------------

- 资源下载：[微软官方办公资源合集](Office.md)（有效期：2018年9月7日前下载）
   
-------------------------------------------------

- 《[或许能成为你的 Windows 默认浏览器，大改版的 Edge 稳定版终于来了](https://mp.weixin.qq.com/s/05QoUqoMfNEyDOIyM440Xw)》
(  原创： 化学心情下2 @少数派 2019-10-28 )

> 用 Windows 电脑打开即可直接下载： [https://url.cn/57pEdMQ](https://github.com/taoste/Hello-World/raw/master/Tools/Microsoft%20Windows%2010/MicrosoftEdgeSetup.exe) （手机打开是乱码哦）

>> Edge 官网：[https://url.cn/5fqXwlJ](https://www.microsoftedgeinsider.com/zh-cn/download/)
   
-------------------------------------------------

- [修复错误 0x80004005](https://support.microsoft.com/zh-cn/help/4028090/windows-fix-error-0x80004005) : 
>> 适用于： Windows 10

>这适用于 Windows 8、Windows 8.1、Windows Server 2012、Windows Server 20212 R2、Windows 10 和 Windows 10 版本 1511 中的 Internet Explorer 中的 Adobe Flash Player 以及 Windows 10 和 Windows 10 版本 1511 中的 Microsoft Edge 中的 Adobe Flash Player。

>   <p>Microsoft 发布了一个安全更新，用于解决 Internet Explorer 和 Microsoft Edge 中的 Adobe Player 中的漏洞。 我们建议你在电脑上转到“更新和安全”，立即安装更新。 选择 <b>“开始”</b> <span class=\"win-icon win-icon-WindowsLogo\"></span> 按钮，然后依次选择<b>“设置”</b> <span class=\"win-icon win-icon-Settings\"></span>><b>“更新和安全”</b> <span class=\"win-icon win-icon-Sync\"></span>><b>“检查更新”</b>。</p>
   
-------------------------------------------------

- [想给Microsoft Edge设置进入（打开）独立密码？](https://answers.microsoft.com/zh-hans/edge/forum/all/%E6%83%B3%E7%BB%99microsoft/4069a0d8-1c87-4448-8b56-3e19a12f6227) - Microsoft Community

-------------------------------------------------

- [**Windows 10 系统如何打开edge缓存文件**](https://www.pconline.com.cn/win10/1105/11059165.html) - 太平洋电脑网

> 快捷键【win+r】呼出"运行"，输入：**C:\Windows\SystemApps\Microsoft.MicrosoftEdge_8wekyb3d8bbwe**  点击“确定”即可打开edge浏览器缓存文件夹。

>> Microsoft Edge 浏览器缓存文件夹默认地址：**C:\账户名\电脑名\AppData\Local\Microsoft\Windows\INetCache** 。

-------------------------------------------------

 【参考】其它浏览器 | 搜索引擎：( edge://settings/searchEngines )
 
| 搜索引擎 |  快捷方式 | URL |
| :-----| ----: | :---- |
| 必应 (推荐，默认) |  bing.com | https://www.google.com/search?q=%s |
| Google |  google.com | https://www.google.com/search?hl=zh_CN&q=%s |
| 百度 |  baidu.com | https://www.baidu.com/#ie={inputEncoding}&wd=%s |
| 搜狗 |  sogou.com | https://www.sogou.com/web?ie={inputEncoding}&query=%s |
| 360 |  so.com | https://www.so.com/s?ie={inputEncoding}&q=%s |
| 微博搜索 |  s.weibo.com | https://s.weibo.com/?q=%s |
| 昵图搜索 |  soso.nipic.com | https://soso.nipic.com/?q=%s&g=0&or=0&y=60 |
| Gitee 代码搜索 | search.gitee.com | https://search.gitee.com/?skin=rec&type=repository&q=%s |
| Official Kodi Wiki (en) |  kodi.wiki | https://kodi.wiki/index.php?title=Special:Search&search=%s |
| Search Oracle VM VirtualBox |  virtualbox.org | https://www.virtualbox.org/search?q=%s&page={startPage} |
| 收藏夹 |  @最喜欢 | edge://favorites/?q=%s |
| 历史记录 | @历史记录 | edge://history/all?q=%s |
| 制表符 |  @标签页 | edge://history/syncedTabs?q=%s |
