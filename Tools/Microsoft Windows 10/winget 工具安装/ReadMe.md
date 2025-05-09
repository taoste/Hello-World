<details>
    <summary>
	<h1><a href="https://learn.microsoft.com/zh-CN/windows/package-manager/winget/">使用 winget 工具安装和管理应用程序 | Microsoft Learn</a></h1>
	<blockquote>		
		<p><B>摘要 | 注意 ：</B> <a href="https://apps.microsoft.com/store/detail/%E5%BA%94%E7%94%A8%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F/9NBLGGH4NNS1?hl=zh-cn&gl=cn">应用安装程序(winget) - Microsoft Store 应用程序</a> | <a href="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=zh-cn&gl=cn&rtc=1">窗口终端(Windows Terminal) - 微软应用</a></p>
<P style="text-indent:2em;">winget 命令行工具仅在 Windows 10 1709（版本 16299）或更高版本上受支持。 在你首次以用户身份登录 Windows（这会触发 Microsoft Store 将 Windows 程序包管理器注册为异步进程的一部分）之前，winget 工具不可用。 如果最近已经以用户身份进行了首次登录，但发现 winget 尚不可用，则可以打开 PowerShell 并输入以下命令来请求此 winget 注册：<code>Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe</code>。<br><br>
<details>
	<summary>
	<a href="https://learn.microsoft.com/zh-cn/windows/package-manager/winget/source">【1.更新软件源】winget	source 命令</a> | 更新所有源:	<code>winget source update</code><br>
		<blockquote>
		☞备注【下载与更新】<strong>系列临时存储文件夹</strong>路径： <code>%LOCALAPPDATA%\temp\WinGet\</code>
		</blockquote>
	</summary>
	☞<strong>更新所有源 && 升级所有应用</strong>: <code>winget source update && winget upgrade --all</code>
	<br><br>
	☞【导出与导入】<br>
	<blockquote>
	导出命令为： <code>winget export "D:/winget-app.json"</code><br>
	导入的话与导出类似，也是输入命令行并指定文件路径即可 ： <code>winget import "D:/winget-app.json"</code>
	</blockquote>
</details>
<details>
    <summary>
	<a href="https://learn.microsoft.com/zh-CN/windows/package-manager/winget/install">【2.安装】install 命令 (winget)使用</a> | 安装微信: <code>winget install Tencent.WeChat</code> | 升级微信: <code>winget upgrade Tencent.WeChat</code><br>
	     安装<strong>微软开发工具VSCode</strong>: <code>winget install Microsoft.VisualStudioCode </code><br>
	     <a href="https://github.com/FastCopyLab/FastCopyDist2/raw/main/FastCopy5.4.3_installer.exe">安装</a><strong><a href="https://github.com/FastCopyLab/FastCopyDist2">FastCopy</a>(文件快速复制增强工具) Pro</strong>: <code>winget source update && winget install FastCopy.FastCopy</code><br>
	    # 安装<strong>MSN 天气</strong>: <code>winget install Microsoft.BingWeather_8wekyb3d8bbwe</code><br> 
	     <details>
		     <summary>安装<a href="https://1.1.1.1/">Cloudflare WARP</a>: <code>winget install Cloudflare.Warp</code><br> </summary>
		     <strong>显示安装包</strong><a href="https://one.one.one.one/">Cloudflare WARP</a>: <code>winget show Cloudflare.warp</code>
	            <br>
		    #升级Cloudflare WARP: <code>winget upgrade Cloudflare.Warp</code>
		     <br> 	
		    #卸载Cloudflare WARP: <code>winget uninstall Cloudflare.Warp</code>
		     <br> 	 
		      t.me/warpplus 使用许可密钥(WARP+类型)：M2o650wi-N693X4JY-46GSc92E<br></details>	   
	     安装<a href="https://www.zerotier.com/">内网穿透神器ZeroTierZeroTier One 加密的虚拟主干网</a>: <code>winget install ZeroTier.ZeroTierOne</code><br> 	    
	</summary><br>
	熟悉的工作流程：更新机制与winget命令类似（ <strong><code>winget install –id=XP8CBJ40XLBWKX –source=msstore</code>code></strong> ），与其他企业软件管理保持一致。<br>
	开发人员可以从 Microsoft Store下载 <strong><a href="https://www.docker.com/">Docker Desktop</a></strong> 应用程序，<a href="https://apps.microsoft.com/detail/xp8cbj40xlbwkx?hl=en-US&gl=US">这里可以免费获取</a>。
	
	
	<code>winget install [[-q] \<query>] [\<选项>]</code><br><br>
	如：安装 PikPak 网盘:<code>winget install PikPak</code><br>
	如：安装 Discord 游戏聊天应用与社区通讯工具:<code>winget install Discord.Discord</code><br>
	如：查找【Skype】：<code>winget search skype</code><br>
                   安装（Skype）：<code>winget install Microsoft.Skype</code><br>
	如：安装<strong>腾讯微信</strong>:<code>winget install Tencent.WeChat</code>  | 升级微信: <code>winget upgrade Tencent.WeChat</code><br>
	如：安装 <strong>企业微信 </strong>:<code>winget install 企业微信 </code>或者：<code>winget install Tencent.WeCom</code> | <code><s>Tencent.wechat-work</s></code><br>
		升级<strong>企业微信 </strong>:<code>winget upgrade Tencent.WeCom</code><br>
	如：安装微信开发者工具:<code>winget install Tencent.WeixinDevTools</code><br>
	如：安装 <strong>腾讯QQ </strong>：<code>winget install Tencent.QQ</code><br>
	如：#查找和安装【迅雷】下载工具: <code>winget show Thunder.Thunder</code><br><code>winget install Thunder.Thunder</code><br>
	如：#查找百度网盘: <code>winget show 百度网盘</code><br>
		找到多个与输入条件匹配的程序包。请修改输入。<br>
		名称     ID                 源<br>
		-----------------------------------<br>
		百度网盘 XP9CXM3N2B06J1     msstore<br>
		百度网盘 Baidu.BaiduNetdisk winget<br>
	如：#安装 百度网盘: <code>winget install Baidu.BaiduNetdisk</code><br>
            #安装 阿里云盘: <code>winget install Alibaba.aDrive</code><br>
            #安装 夸克网盘: <code>winget install Alibaba.QuarkCloudDrive</code><br>
            #安装 酷狗音乐 : <code>winget install KuGou.KGMusic</code><br>
	如：查找【金山WPS】：<code>winget search Kingsoft.WPSOffice</code><br>
                   安装金山WPS（国际版）：<code>winget install Kingsoft.WPSOffice</code><br>
                   安装金山WPS（中国版）：<code>winget install Kingsoft.WPSOffice.CN</code><br>
	如：安装 <strong>剪映专业版 </strong>:<code>winget install ByteDance.JianyingPro</code><br>
	如：安装 Tor 浏览器:<code>winget install TorProject.TorBrowser</code><br>
	如：安装 OpenVPN:<code>winget install OpenVPNTechnologies.OpenVPNConnect</code><br>
	如：安装VMware虚拟机: <code>winget install VMware.WorkstationPro</code><br>
        如：安装微软官方开源效率工具： <code>winget install Microsoft.PowerToys</code><br>
	如：安装开源虚拟机 VirtualBox:<code>winget search Oracle.VirtualBox</code><br>
	如：安装开源编辑器 Notepad++: <code>winget install Notepad++.Notepad++</code><br>
	如：安装开源流程图绘制软件: <code>winget install Draw.io</code><br>
	如：安装开源射手影音 SPlayer :<code>winget install Shooter.SPlayerX</code><br>
	如：安装万能影音播放器 Spotify :<code>winget install Daum.PotPlayer</code><br>
	如：安装开源播放器 VLC media player :<code>winget install VideoLAN.VLC</code><br>
	如：安装<B>开源影音中心 Kodi</B> （XBMC） :<code>winget install --id XBMCFoundation.Kodi</code><br> 
	如：安装音乐播放器 Spotify :<code>winget install Spotify.Spotify</code><br>
	如：安装 BTSync:<code>winget install "BitTorrent Sync" --version 1.4.111</code><br>
	如：安装开源SSH连接工具PuTTY:<code>winget install PuTTY.PuTTY</code><br>
	如：安装开源SFTP文件传输工具:<code>winget install WinSCP.WinSCP</code><br>
	如：安装内网穿透神器ZeroTierZeroTier One 加密的虚拟主干网:<code>winget install ZeroTier.ZeroTierOne</code><br>
	如：安装赛风：<code>winget install Psiphon</code><br>
	如：查找开源解压工具7-zip：<code>winget show 7-zip</code><br>
        如：<strong>安装开源解压工具7-zip：<code>winget install 7zip.7zip --source winget</code>（指定winget源）</strong>strong><br>
        如：安装<strong>开源卸载工具</strong>：<code>winget install BCUninstaller</code><br>
        如：安装<a href="https://github.com/rustdesk/rustdesk/releases" title="Releases · rustdesk/rustdesk - Github">开源</a> <a href="https://rustdesk.com/docs/zh-cn/" title="RustDesk文档 :: RustDesk文档">远程桌面软件</a> <a href="https://rustdesk.com/zh-cn/" title="RustDesk：开源远程桌面与自建服务器解决方案">RustDesk</a>：<code>winget install RustDesk.RustDesk</code><br>
        如：安装开源直播软件OBS：<code>winget install OBSProject.OBSStudio</code><br>
        如：安装 IDM 下载工具：<code>winget install Tonec.InternetDownloadManager</code><br>
        如：安装文件搜索工具：<code>winget install voidtools.Everything</code><br>
        如：安装FastStone Capture 体积小但功能齐全的屏幕截图和屏幕录像软件：<code>winget install FastStone.Capture</code><br>
	</details>
	<blockquote>☞安装包文件下载存放路径：<code>C:\Users\%username%\AppData\Local\Temp\WinGet</code></blockquote>
	<details>
    <summary>
	<a href="https://learn.microsoft.com/zh-cn/windows/package-manager/winget/search">【2.1查找】search 命令 (winget)使用</a> | 查找360系列: <code>winget search 360 </code> || 查找金山系列: <code>winget search Kingsoft</code><br>
	  查找腾讯系列: <code>winget search Tencent</code> || 查找字节跳动/抖音系列: <code>winget search ByteDance</code><br>
	  查找百度系列: <code>winget search Baidu</code> || 查找阿里巴巴系列: <code>winget search Alibaba</code><br>
	  查找网易系列: <code>winget search NetEase</code> || 查找搜狐系列: <code>winget search Sohu </code><br>
	  查找华为系列: <code>winget search Huawei</code> || 查找小米系列: <code>winget search Xiaomi</code><br>
	  查找微软系列: <code>winget search Microsoft</code> || 查找谷歌系列: <code>winget search Google </code> <br>
	  查找特斯拉系列: <code>winget search tesla</code> || 查找维基百科: <code>winget search wikipedia</code>  <br>
	  查找比特币系列: <code>winget search Bitcoin</code> || 查找ChatGPT: <code>winget search OpenAI | ChatGPT</code> 
	    <br>
	</summary><br>
	如：查询 | <a href="https://pcmanager.microsoft.com/zh-cn" 标题="电脑管家-微软电脑管家官方网站">微软电脑管家</a>命令：<code>winget search Microsoft.PCManager</code> || 安装 <code>winget install Microsoft.PCManager</code><br>
		<br>
	如：查询 | <a href="https://consumer.huawei.com/cn/support/pc-manager/" 标题="华为电脑管家官方下载-笔记本驱动更新 | 华为官网">华为电脑管家</a>命令：<code>winget search Huawei.PCManager</code><br>
	<blockquote>华为电脑管家<a href="ms-windows-store://pdp/?ProductId=9PLJZJSSFCQV&referrer=bingwebsearch&ocid=bingwebsearch" 标题="从 Microsoft Store 获取">S模式版</a>是华为公司自行研发的一款运行在Windows系统 S模式下的管家软件，提供玩机技巧、客户服务、FAQ等功能。仅支持华为电脑设备。<code>ms-windows-store://pdp/?ProductId=9PLJZJSSFCQV&referrer=bingwebsearch&ocid=bingwebsearch</code> </blockquote>
	如：查询 | edge浏览器命令：<code>winget search edge</code><br>
	如：查询 | chrome浏览器命令：<code>winget search google.chrome</code><br>
	如：升级 | edge浏览器命令：<code>winget upgrade edge</code><br>
	如：升级 | Edge最新版本比如：v125.0.2535.51 ：<code>winget upgrade Microsoft.Edge --version 125.0.2535.51 </code><br> 
	如：升级 | chrome浏览器命令：<code>winget upgrade google.chrome</code><br>
	如：升级 | 腾讯五笔输入法最新版本：<code>winget upgrade Tencent.QQWubi --version 2.4</code><br>
	</details>
			<br>	
	<details>
    <summary>	
	<a href="https://learn.microsoft.com/zh-CN/windows/package-manager/winget/upgrade">【3.升级】upgrade 命令 (winget)使用</a> | 升级所有应用: <code>winget upgrade --all</code>
     <br>
     设定不更新指定软件包 | 如WPS国际版 : <code>winget pin add Kingsoft.WPSOffice -v 12.2.0.13431</code> <br>
     查看包钉·列表 : <code>winget pin list</code><br>
     --参考资料：<a href="https://www.sujx.net/2023/06/30/powershell-winget/index.html">使用winget实现软件管理 | 靖轩</a>
	</summary> <br>
	【示例1】将升级特定版本的应用程序:
		<code>winget upgrade powertoys --version 0.69.1</code><br>
	【示例2】将根据应用程序 ID 升级相应的应用程序:
	    <code>winget upgrade --id Microsoft.PowerToys</code><br>
	【示例3】升级所有应用:
	<code>winget upgrade --all</code><br>	
		程序包的版本号无法确定。使用 “<code>--include-unknown</code>”查看所有结果。<br>
	</details>	<br>	
	<details>
    <summary>
	<a href="https://learn.microsoft.com/zh-CN/windows/package-manager/winget/uninstall">【4.卸载】uninstall 命令 (winget)使用</a> | 卸载360安全卫士: <code>winget uninstall 9NBLGGH419H3 </code><br>
		</summary>
		<code>winget uninstall [[-q] \<query>] [\<选项>]</code> <br>	
	</details>
	<br>
	<details>
    <summary>
	【Help】WinGet 命令行实用工具可从命令行安装应用程序和其他程序包。
<br>
<blockquote>使用情况: winget [<命令>] [<选项>]</blockquote>
	</summary>
下列命令有效:<br>
  install    安装给定的程序包<br>
  show       显示包的相关信息<br> 
		如：查找阿里云盘：<code>winget show Alibaba.aDrive</code><br>
  source     管理程序包的来源<br>
  search     查找并显示程序包的基本信息<br>
  list       显示已安装的程序包<br>
  upgrade    显示并执行可用升级<br>
  uninstall  卸载给定的程序包<br>
  hash       哈希安装程序的帮助程序<br>
  validate   验证清单文件<br>
  settings   打开设置或设置管理员设置<br>
  features   显示实验性功能的状态<br>
  export     导出已安装程序包的列表<br>
  import     安装文件中的所有程序包<br>
<br>
如需特定命令的更多详细信息，请向其传递帮助参数。 [-?]<br>
<br>
下列选项可用：<br>
  -v,--version              显示工具的版本<br>
  --info                    显示工具的常规信息<br>
  -?,--help                 显示选定命令的帮助信息<br>
  --wait                    提示用户在退出前按任意键<br>
  --logs,--open-logs        打开默认日志位置<br>
  --verbose,--verbose-logs  启用 WinGet 的详细日志记录<br>
  --disable-interactivity   禁用交互式提示<br>
<br>
可在此找到更多帮助: "https://aka.ms/winget-command-help"<br>
	</details>
	<details>
    <summary>【链接】<a href="https://sspai.com/post/72246">一键安装 99 个程序，Windows 最强软件管理器 - 少数派</a><br>
	    ----------------------------------------------------------------------------<br></summary> 
	    隐私声明             https://aka.ms/winget-privacy<br>
	    许可协议             https://aka.ms/winget-license<br>
	    第三方声明           https://aka.ms/winget-3rdPartyNotice<br>
	    主页                 https://aka.ms/winget<br>
	    Windows 应用商店条款 https://www.microsoft.com/en-us/storedocs/terms-of-sale<br>
		</p></blockquote>	
		</details>
	</summary> 
<details>
<summary>	
	<a href="https://learn.microsoft.com/zh-cn/windows/package-manager/winget/settings" title="settings 命令 | Microsoft Learn">	
	【5.设置winget】 settings 命令 (winget)使用</a> | 启动默认的 JSON 编辑工具：: <code>winget settings</code><br><br>
</summary>
<blockquote>
	<li><a href="https://www.lifeee.top/posts/36943.html">包管理器 winget 使用指南</a> | 热夏的博客（发表于 2021-06-13  更新于 2022-11-15）</li><br>
	<h2>设置winget</h2><br>
	<blockquote>winget settings 打开 winget 的设置 json 文件进行配置，有需求的话可以在官方 <a href="https://github.com/microsoft/winget-cli/blob/master/doc/Settings.md">winget-cli/doc/Settings.md at master · microsoft/winget-cli</a> 这里看看怎么配置 .
	</blockquote>
<br>
如果想要更改 winget 显示的进度条视觉效果，可以 输入 winget settings 后在setting.json里增加：
	<blockquote>
	<code>
	"visual": {<br>
       "progressBar": "rainbow"<br>
        // 三种样式可选：accent(默认值)、 retro(复古)、 rainbow(彩虹条)<br>
},<br>
	</code>
	</blockquote>
	完整的json为:
	<blockquote>
	<code>
	{<br>
    // For documentation on these settings, see: https://aka.ms/winget-settings<br>
    // "source": {<br>
    //    "autoUpdateIntervalInMinutes": 5<br>
    // },<br>
    "visual": {<br>
          "progressBar": "rainbow"<br>
         // 三种样式可选：accent(默认值)、 retro、 rainbow<br>
},<br>
}<br>
	</code>
	</blockquote>
	</blockquote>
</details>
</details>
<details>
    <summary>了解更多👇</summary>
	<blockquote>
  <div id="ms--content-well-notifications"></div>
										<nav id="center-doc-outline" class="doc-outline is-hidden-desktop display-none-print margin-bottom-sm" data-bi-name="intopic toc" role="navigation" aria-label="本文内容">
											<h2 id="ms--in-this-article" class="title is-6 margin-block-xs">本文内容</h2>
										</nav>
								<!-- <content> -->
									<p>用户可以在 Windows 10 和 Windows 11 计算机上使用 winget 命令行工具来发现、安装、升级、删除和配置应用程序。 此工具是 Windows 程序包管理器服务的客户端接口。</p>
									
<h2 id="install-winget">安装 winget</h2>
<p>Windows 程序包管理器 winget 命令行工具作为应用安装程序的一部分在 Windows 11 和现代版本的 Windows 10 上提供。</p>
<p>可以<a href="https://www.microsoft.com/p/app-installer/9nblggh4nns1#activetab=pivot:overviewtab" data-linktype="external">从 Microsoft Store 获取应用安装程序</a>。 如果已安装，请确保已将其更新为最新版本。</p>
<div class="NOTE">
<p>注意</p>
<p>winget 命令行工具仅在 Windows 10 1709（版本 16299）或更高版本上受支持。 在你首次以用户身份登录 Windows（这会触发 Microsoft Store 将 Windows 程序包管理器注册为异步进程的一部分）之前，winget 工具不可用。 如果最近已经以用户身份进行了首次登录，但发现 winget 尚不可用，则可以打开 PowerShell 并输入以下命令来请求此 winget 注册：<code>Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe</code>。</p>
</div>
<h3 id="install-winget-preview-version-developers-only">安装 winget 预览版 [仅限开发人员]</h3>
<p>WinGet 包含在 Windows 应用安装程序中。 要试用最新的 Windows 程序包管理器功能，可以通过以下方式之一安装预览版：</p>
<ul>
<li><p>下载最新的 <a href="https://aka.ms/getwingetpreview" data-linktype="external">winget 预览版</a>。 阅读 <a href="https://github.com/microsoft/winget-cli/releases" data-linktype="external">winget 预览版发行说明</a>，了解任何新功能。 安装此包将为你提供 WinGet 客户端预览版，但它不会从 Microsoft Store 中启用新预览版的自动更新。</p>
</li>
<li><p>使用 Microsoft 帐户 (MSA)、工作、学校或 Azure Active Directory (AAD) 帐户注册 <a href="https://insider.windows.com/understand-flighting" data-linktype="external">Windows 预览体验成员开发频道</a>。 Windows 预览体验成员开发频道包括 Microsoft Store 中新预览版的自动更新。</p>
</li>
<li><p>使用 Microsoft 帐户 (MSA) 注册 <a href="https://aka.ms/AppInstaller_InsiderProgram" data-linktype="external">Windows 程序包管理器预览体验计划</a>。 在添加你的 Microsoft 帐户 (MSA) 后（在你收到电子邮件通知后几天），你将收到 Microsoft Store 中新预览版的自动更新。</p>
</li>
</ul>
<h3 id="install-winget-on-windows-sandbox">在 Windows 沙盒上安装 winget</h3>
<p><a href="/zh-cn/windows/security/threat-protection/windows-sandbox/windows-sandbox-overview" data-linktype="absolute-path">Windows 沙盒</a>提供了一个轻型桌面环境，可以安全地独立运行应用程序。 安装在 Windows 沙盒环境中的软件保持“沙盒”状态，并独立于主机运行。 Windows 沙盒不包含 winget，也不包含 Microsoft Store 应用，因此你需要从 GitHub 上的 winget 版本页下载最新的 winget 包。</p>
<p>要在 Windows 沙盒上安装 winget 的稳定版本，请从 Windows PowerShell 命令提示符执行以下步骤：</p>
<pre><code class="lang-powershell">$progressPreference = 'silentlyContinue'
$latestWingetMsixBundleUri = $(Invoke-RestMethod https://api.github.com/repos/microsoft/winget-cli/releases/latest).assets.browser_download_url | Where-Object {$_.EndsWith(&quot;.msixbundle&quot;)}
$latestWingetMsixBundle = $latestWingetMsixBundleUri.Split(&quot;/&quot;)[-1]
Write-Information &quot;Downloading winget to artifacts directory...&quot;
Invoke-WebRequest -Uri $latestWingetMsixBundleUri -OutFile &quot;./$latestWingetMsixBundle&quot;
Invoke-WebRequest -Uri https://aka.ms/Microsoft.VCLibs.x64.14.00.Desktop.appx -OutFile Microsoft.VCLibs.x64.14.00.Desktop.appx
Add-AppxPackage Microsoft.VCLibs.x64.14.00.Desktop.appx
Add-AppxPackage $latestWingetMsixBundle
</code></pre>
<p>如果需要程序包管理器的预览版或其他版本，请转到 <a href="https://github.com/microsoft/winget-cli/releases" data-linktype="external">https://github.com/microsoft/winget-cli/releases</a>。 复制你需要的版本 URL 并更新上述 URI。</p>
<p>有关 Windows 沙盒的详细信息，包括如何安装沙盒以及使用沙盒的预期结果，请参阅 <a href="/zh-cn/windows/security/threat-protection/windows-sandbox/windows-sandbox-overview" data-linktype="absolute-path">Windows 沙盒文档</a>。</p>
<h2 id="administrator-considerations">管理员注意事项</h2>
<p>安装程序的行为可能会有所不同，具体取决于你是否是以管理员权限运行 <strong>winget</strong>。</p>
<ul>
<li><p>在没有管理员权限的情况下运行 <strong>winget</strong> 时，某些应用程序可能会<a href="/zh-cn/windows/security/identity-protection/user-account-control/how-user-account-control-works" data-linktype="absolute-path">要求提升权限</a>才能进行安装。 当安装程序运行时，Windows 会提示你<a href="/zh-cn/windows/security/identity-protection/user-account-control/how-user-account-control-works" data-linktype="absolute-path">提升权限</a>。 如果你选择不提升权限，则应用程序无法进行安装。</p>
</li>
<li><p>在管理员命令提示符下运行 <strong>winget</strong> 时，如果应用程序要求你提升权限，你不会看到<a href="/zh-cn/windows/security/identity-protection/user-account-control/how-user-account-control-works" data-linktype="absolute-path">提升权限提示</a>。 以管理员身份运行命令提示符时请务必小心，仅安装你信任的应用程序。</p>
</li>
</ul>
<h2 id="use-winget">使用 winget</h2>
<p>安装<strong>应用安装程序</strong>后，可以通过在命令提示符下键入“winget”来运行 <strong>winget</strong>。</p>
<p>最常见的使用场景之一是搜索并安装你最喜欢的工具。</p>
<ol>
<li><p>若要<a href="search" data-linktype="relative-path">搜索</a>某个工具，请键入 <code>winget search &lt;appname&gt;</code>。</p>
</li>
<li><p>确认你需要的工具可用后，可以通过键入 <code>winget install &lt;appname&gt;</code> 来<a href="install" data-linktype="relative-path">安装</a>该工具。 <strong>winget</strong> 工具会启动安装程序，将应用程序安装在你的电脑上。
<img src="images/install.png" alt="winget 命令行" data-linktype="relative-path"/></p>
</li>
<li><p>除了安装和搜索外，<strong>winget</strong> 还提供了许多其他命令，用来<a href="show" data-linktype="relative-path">显示应用程序详细信息</a>，<a href="source" data-linktype="relative-path">更改源</a>以及<a href="validate" data-linktype="relative-path">验证程序包</a>。 若要获取完整的命令列表，请键入 <code>winget --help</code>。
<img src="images/help.png" alt="winget help" data-linktype="relative-path"/></p>
</li>
</ol>
<p>一些用户报告了客户端不在其路径上的<a href="https://github.com/microsoft/winget-cli/issues/210" data-linktype="external">问题</a>。</p>
<h3 id="commands">命令</h3>
<p><strong>winget</strong> 工具的当前预览版支持以下命令。</p>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>info</td>
<td>显示有关系统的元数据（版本号、体系结构、日志位置等）。 有助于进行故障排除。</td>
</tr>
<tr>
<td><a href="install" data-linktype="relative-path">install</a></td>
<td>安装指定的应用程序。</td>
</tr>
<tr>
<td><a href="show" data-linktype="relative-path">show</a></td>
<td>显示指定应用程序的详细信息。</td>
</tr>
<tr>
<td><a href="source" data-linktype="relative-path">source</a></td>
<td>添加、删除和更新 <strong>winget</strong> 工具访问的 Windows 程序包管理器存储库。</td>
</tr>
<tr>
<td><a href="search" data-linktype="relative-path">search</a></td>
<td>搜索某个应用程序。</td>
</tr>
<tr>
<td><a href="list" data-linktype="relative-path">list</a></td>
<td>显示已安装的包。</td>
</tr>
<tr>
<td><a href="upgrade" data-linktype="relative-path">升级</a></td>
<td>升级给定的包。</td>
</tr>
<tr>
<td><a href="uninstall" data-linktype="relative-path">uninstall</a></td>
<td>卸载给定的包。</td>
</tr>
<tr>
<td><a href="hash" data-linktype="relative-path">hash</a></td>
<td>为安装程序生成 SHA256 哈希。</td>
</tr>
<tr>
<td><a href="validate" data-linktype="relative-path">validate</a></td>
<td>验证要提交到 Windows 程序包管理器存储库的清单文件。</td>
</tr>
<tr>
<td><a href="settings" data-linktype="relative-path">设置</a></td>
<td>打开设置。</td>
</tr>
<tr>
<td><a href="features" data-linktype="relative-path">功能</a></td>
<td>显示试验功能的状态。</td>
</tr>
<tr>
<td><a href="export" data-linktype="relative-path">export</a></td>
<td>导出已安装包的列表。</td>
</tr>
<tr>
<td><a href="import" data-linktype="relative-path">import</a></td>
<td>将所有包安装到一个文件中。</td>
</tr>
</tbody>
</table>
<h3 id="options">选项</h3>
<p>winget 工具支持以下选项。</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>-v、--version</strong></td>
<td>返回 winget 的当前版本。</td>
</tr>
<tr>
<td><strong>--info</strong></td>
<td>提供有关 winget 的所有详细信息，包括许可证链接、隐私声明和配置的组策略。</td>
</tr>
<tr>
<td><strong>-?、--help</strong></td>
<td>显示 winget 的其他帮助。</td>
</tr>
</tbody>
</table>
<h2 id="supported-installer-formats">支持的安装程序格式</h2>
<p>winget 工具支持以下类型的安装程序：</p>
<ul>
<li>EXE（具有 Silent 和 SilentWithProgress 标志） </li>
<li>ZIP</li>
<li>INNO</li>
<li>NULLSOFT</li>
<li>MSI</li>
<li>APPX</li>
<li>MSIX</li>
<li>BURN</li>
<li>PORTABLE</li>
</ul>
<h2 id="scripting-winget">编写 winget 脚本</h2>
<p>可以编写批处理脚本和 PowerShell 脚本来安装多个应用程序。</p>
<pre><code class="lang-CMD">@echo off  
Echo Install Powertoys and Terminal  
REM Powertoys  
winget install Microsoft.Powertoys  
if %ERRORLEVEL% EQU 0 Echo Powertoys installed successfully.  
REM Terminal  
winget install Microsoft.WindowsTerminal  
if %ERRORLEVEL% EQU 0 Echo Terminal installed successfully.   %ERRORLEVEL%
</code></pre>
<div class="NOTE">
<p>注意</p>
<p>使用脚本时，<strong>winget</strong> 会按指定顺序启动应用程序。 当安装程序返回成功或失败时，<strong>winget</strong> 会启动下一个安装程序。 如果某个安装程序启动了另一进程，它可能会提前返回到 <strong>winget</strong>。 这会导致 <strong>winget</strong> 在上一个安装程序完成之前安装下一个安装程序。</p>
</div>
<h2 id="debugging-and-troubleshooting">调试和故障排除</h2>
<p>winget 提供日志记录来帮助诊断问题。 有关日志记录的故障排除和详细信息，请参阅<a href="troubleshooting" data-linktype="relative-path">调试和故障排除</a>。</p>
<h2 id="missing-tools">缺少工具</h2>
<p>如果<a href="../package/repository" data-linktype="relative-path">社区存储库</a>不包含你的工具或应用程序，请将包提交到我们的<a href="https://github.com/microsoft/winget-pkgs" data-linktype="external">存储库</a>。 添加你最喜爱的工具后，你和其他人都可以使用它。</p>
<h2 id="customize-winget-settings">自定义 winget 设置</h2>
<p>可以通过修改 settings.json 文件配置 winget 命令行体验 。 有关详细信息，请参阅 <a href="https://aka.ms/winget-settings" data-linktype="external">https://aka.ms/winget-settings</a>。 请注意，这些设置仍处于试验状态，并且尚未针对工具的预览版本最后确定。</p>
<h2 id="open-source-details">开源详细信息</h2>
<p>winget 工具是 GitHub 上的存储库 <a href="https://github.com/microsoft/winget-cli/" data-linktype="external">https://github.com/microsoft/winget-cli/</a> 中提供的一个开源软件。 用于构建客户端的源代码位于 <a href="https://github.com/microsoft/winget-cli/tree/master/src" data-linktype="external">src 文件夹</a>中。</p>
<p><strong>winget</strong> 的源代码包含在 Visual Studio 2019 C++ 解决方案中。 若要正确构建解决方案，请安装最新的<a href="https://visualstudio.microsoft.com/downloads/" data-linktype="external">包含 C++ 工作负荷的 Visual Studio</a>。</p>
<p>我们鼓励你为 GitHub 上的 <strong>winget</strong> 源代码贡献力量。 你必须先同意并签署 Microsoft CLA。</p>
<h2 id="troubleshooting">疑难解答</h2>
<p>winget-cli 存储库中有常见问题和常见错误的列表，还有相关解决方法建议：</p>
<ul>
<li><a href="https://github.com/microsoft/winget-cli/tree/master/doc/troubleshooting#common-issues" data-linktype="external">常见问题 - 无法识别、无法运行、应用安装程序版本或 PATH 变量需要更新</a></li>
<li><a href="https://github.com/microsoft/winget-cli/tree/master/doc/troubleshooting#common-errors" data-linktype="external">常见错误 - 错误 0x801901a0、0x80d03002、0x80070490</a></li>
</ul>
</div>
</blockquote>
</details>
</details>
<hr style="height:1px;width:35%;border:none;border-top:1px dashed #0066CC;" />
