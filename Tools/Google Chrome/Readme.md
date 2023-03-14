- 🔄 内链切换 : **[Google Chrome 系列](https://github.com/taoste/Hello-World/tree/master/Tools/Google%20Chrome) / 
[🦊 Mozilla Firefox 系列](https://github.com/taoste/Hello-World/tree/master/Tools/Mozilla%20Firefox)  / 
[Microsoft Edge 系列](https://github.com/taoste/Hello-World/tree/master/Tools/Microsoft%20Windows%2010/Edge)**

------------------------------------------------------------------------------------------------------------------

[[Note](https://github.com/taoste/Hello-World/tree/master/Tools/Google%20Chrome)] 🚀 [谷歌 Google 系列 · Issue #9](https://github.com/taoste/taoste.github.io/issues/9) · [Go : taoste/Hello-World](http://go.choong.net/google)

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

- [如何使用远程桌面](https://support.microsoft.com/zh-cn/windows/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2-5fe128d5-8fb1-7a23-3b8a-41e636865e8c): mstsc 


- [Chrome 省电模式和节能模式怎么开？ 解决耗电和吃内存方法](https://www.leiyouxi.com/y/264182.html) - 雷游戏
```
1.chrome://flags/#battery-saver-mode-available 
改为「Enabled」
2.chrome://flags/#high-efficiency-mode-available
改为「Enabled」
3.设置 - 效果:
chrome://settings/performance
```

-------------------------------------------

-  [**Google 翻译**](https://translate.google.com/?hl=zh-CN#view=home&op=translate&sl=en&tl=zh-CN) 

> **历史记录功能即将发生变化**
>> 不久以后，翻译历史记录将只有在登录帐号的情况下才能查看，并且要在<a href="https://support.google.com/accounts/answer/7028918" title="查看和控制帐号中的活动记录 - 计算机 - Google 帐号帮助">我的活动记录</a>内集中管理。此次升级将清除之前的历史记录，因此如果您想让系统记下某些译文以便日后查看，请务必<a href="https://support.google.com/translate/answer/9729699" title="保存翻译历史记录 - Google Translate帮助">保存翻译结果</a>。

-  **添加搜索引擎**：

> 1. 搜索引擎： **Google中文版**

> 2. 关键字： **Google.com**

> 3. 以%s代替查询的URL： **https://www.google.com/search?hl=zh_CN&q=%s**

> 【参考】其它浏览器 | 搜索引擎： ( chrome://settings/searchEngines )

| 搜索引擎 |  快捷方式 | URL |
| :-----| ----: | :---- |
| 必应 (推荐，默认) |  bing.com | https://www.google.com/search?q=%s |
| Google |  google.com | https://www.google.com/search?hl=zh_CN&q=%s |
| 百度 |  baidu.com | https://www.baidu.com/#ie={inputEncoding}&wd=%s |
| 搜狗 |  sogou.com | https://www.sogou.com/web?ie={inputEncoding}&query=%s |
| 360 |  so.com | https://www.so.com/s?ie={inputEncoding}&q=%s |
| 微博搜索 |  s.weibo.com | https://s.weibo.com/?q=%s |
| 昵图搜索 |  soso.nipic.com | https://soso.nipic.com/?q=%s&g=0&or=0&y=60 |
| Official Kodi Wiki (en) |  kodi.wiki | https://kodi.wiki/index.php?title=Special:Search&search=%s |
| Search Oracle VM VirtualBox |  virtualbox.org | https://www.virtualbox.org/search?q=%s&page={startPage} |
| 收藏夹 |  @最喜欢 | edge://favorites/?q=%s |
| 历史记录 | @历史记录 | edge://history/all?q=%s |
| 制表符 |  @标签页 | edge://history/syncedTabs?q=%s |

-------------------------------------------

<li><a href="https://www.llq.info/edge/8912.html" target="_blank" title="Edge 浏览器隐藏功能一览：多线程下载、IE 模式、阻止视频自动播放等-浏览器资讯网:"/>多线程下载(chrome://flags/)</a>:</li>
<blockquote>在地址栏输入 chrome://flags/ 后进入到实验功能界面，找到“Parallel downloading”的选项，打开“Enable”即可。之后，Chrome 的下载速度就会有明显提升了。</blockquote>

- 设置 - Flash ( chrome://settings/content/flash )

- ( chrome://net-internals/#hsts )

<img src="https://raw.githubusercontent.com/taoste/Hello-World/master/Tools/Google%20Chrome/Google%20chrome%E6%B5%8F%E8%A7%88%E5%99%A8%E8%AE%BE%E7%BD%AE.PNG" border="0" alt="Google chrome浏览器设置.PNG" title="Google chrome浏览器设置.PNG">

( <a href="https://support.google.com/chrome/a/answer/9024365?hl=zh-Hans" title="查看设备当前的Chrome 政策- Google Chrome Enterprise帮助">查看设备当前的Chrome 政策</a> chrome://policy/ ) 

> 参阅资料：

>> 《[cnBeta | 个人电脑上的 Chrome 被企业托管了，什么情况？](https://www.cnbeta.com/articles/tech/875243.htm )》

>> 《[Google Developers | Chromium 的弹窗机制](https://developers.google.com/web/updates/2017/03/dialogs-policy?hl=zh-cn)》

>> 《[Google/Chrome 个人经验](http://kisss.cjli.info/auxiliary/Google-Chrome-Experience.html)》 @ckwongloy

 -------------------------------------------
 
 [**歡迎使用 Chrome**](chrome://welcome-win10/)  ( chrome://welcome-win10/ ) - 
 [Chrome 网上应用店](https://chrome.google.com/webstore/category/extensions?hl=zh-cn) ([墙内备份/非官方/CRX下载区](https://www.chromefor.com/)) / [主题背景](https://chrome.google.com/webstore/category/themes?hl=zh-cn)（[themes](https://github.com/taoste/Hello-World/tree/master/Tools/Google%20Chrome/Chrome%E6%8F%92%E4%BB%B6%EF%BC%88CRX%E6%96%87%E4%BB%B6%EF%BC%89/themes.md):[**Space**](https://chrome.google.com/webstore/detail/space/hepnfgiockihbakjbhonkinpagbkaobo?hl=zh-cn) ） / [Atavi书签管理器](https://atavi.com/)
 

适用于 Windows 10/8.1/8/7 ( 推荐👍 正体中文版： [32-bit](https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7BCEEEAD0E-904A-E0EB-B655-AD430A6C79FA%7D%26lang%3Dzh-TW%26browser%3D3%26usagestats%3D0%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3D-statsdef_1/update2/installers/ChromeSetup.exe) / 64-bit )( 👍**我的Go短链接**：[32-bit](https://go.choong.net/google/chrome32) /  [64-bit](https://go.choong.net/google/chrome64) )

官方网站：https://www.google.com/intl/zh-TW/chrome/ (👍 正体中文版 ,可靠更新 )

官方网站：https://www.google.com/intl/zh-CN/chrome/ (👎 简体中文版 ,不定更新 )
 

Windows/Mac/Linux:离线下载和安装Chrome - Google Chrome帮助
 
https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=zh-Hans

（ [**离线下载**](https://www.google.com/intl/zh-cn/chrome/?standalone=1)链接最后加上：[?standalone=1](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=zh-Hans?standalone=1) , 如果需要在线安装包，只需要去掉standalone=1&即可！）


下载历史版本 https://dl.google.com/chrome/install/[版本号后两位]/chrome_installer.exe

(要想下载历史版本 Chrome，必须先确定要下载的版本号，然后取版本号第二个小数点后的数字。比如Google Chrome（谷歌浏览器 XP版）V49.0.2623.112的下载地址就是：https://dl.google.com/chrome/install/2623.112/chrome_installer.exe)

- [**离线安装包“无更新组件”版提取原生绿色版方法**](https://github.com/taoste/Hello-World/blob/master/Tools/Google%20Chrome/Chrome小技巧：如何下载离线版安装文件.md)： 

👍鼠标右键解压离线安装包，此时会解压出来一个chrome.7z 

👍再对chrome.7z解压就是原生绿色版啦！ 

👍离线安装包“无更新组件”版不含在线更新升级功能，所以不会添加更新计划任务，也没有后台更新进程，更干净。


 -------------------------------------------
 
 - [**解决导致 Chrome 无法成功更新的问题**](https://support.google.com/chrome/answer/111996?visit_id=637008252529475702-4063015524&p=update_error&rd=1) - Google Chrome帮助
 
 (注：谷歌浏览器从v50开始不支持XP，WinXP用户请使用v49)
 
 Google Chrome 49.0.2623.112 XP系统最终版官方下载地址( WinXP推荐👍： [32-bit](https://dl.google.com/release2/h8vnfiy7pvn3lxy9ehfsaxlrnnukgff8jnodrp0y21vrlem4x71lor5zzkliyh8fv3sryayu5uk5zi20ep7dwfnwr143dzxqijv/49.0.2623.112_chrome_installer.exe) / [64-bit](https://dl.google.com/release2/va5qxmf7d3oalefqdjoubnamxboyf9zt3o6zj33pzo2r3adq2cjea9an8hhc6tje8y4jiieqsruld9oyajv9i6atj40utl3hpl2/49.0.2623.112_chrome_installer_win64.exe) ) ( 👍**我的Go短链接**：[32-bit](https://go.choong.net/google/xp32) /  [64-bit](https://go.choong.net/google/xp64) )

32位版下载地址：
https://dl.google.com/release2/h8vnfiy7pvn3lxy9ehfsaxlrnnukgff8jnodrp0y21vrlem4x71lor5zzkliyh8fv3sryayu5uk5zi20ep7dwfnwr143dzxqijv/49.0.2623.112_chrome_installer.exe

64位版下载地址：
https://dl.google.com/release2/va5qxmf7d3oalefqdjoubnamxboyf9zt3o6zj33pzo2r3adq2cjea9an8hhc6tje8y4jiieqsruld9oyajv9i6atj40utl3hpl2/49.0.2623.112_chrome_installer_win64.exe
 
-------------------------------------------

**推荐插件👍《[Password Checkup](https://chrome.google.com/webstore/detail/password-checkup/pncabnpcffmalkkjpajodfhijclecjno/related?hl=zh-cn) - [Google 出品](https://chrome.google.com/webstore/category/ext/15-by-google)的密码泄露检查扩展》** （支持 [Chrome](https://chrome.google.com/webstore/detail/password-checkup/pncabnpcffmalkkjpajodfhijclecjno/related?hl=zh-cn)  /  [🦊Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/password-checkup-by-google-api/)）
>  - “**密码检查**”：[Password Checkup 可協助您重新確保帳戶的安全性](https://support.google.com/accounts/answer/9231944)
> 
> Password Checkup 可帮助您在帐号遭受数据泄露影响之后重新确保其安全。
> 无论您在何处登录，只要您输入的用户名和密码因涉及 Google 已知的数据泄露而不再安全，就会收到系统提醒。请重置您的密码。如果您为任何其他帐号也使用该相同用户名和密码，也请重置这些帐号的密码。
> 
> 我们在设计“密码检查”时就充分考虑了隐私权问题。该功能不会报告有关您的帐号、密码或设备的任何识别信息。但我们会报告与显示不安全凭据的查询次数（无论您在收到系统提醒后是否更改密码）以及所涉网域相关的匿名信息，以提高网站的覆盖率。您可以访问 https://support.google.com/accounts?p=password-checkup ，详细了解“密码检查”的工作原理。
> 
> 安装“密码检查”即表示您同意 www.google.com/policies/ 上所列的 Google 服务条款和隐私权政策。
> 
> 【参阅】電腦玩物:《[**安裝 Google 新工具幫你隨時自動檢查各網站密碼是否依然安全**](https://www.playpcesor.com/2019/02/google-Password-Checkup.html)》

- [x] **👍《[Google search link fix](https://chrome.google.com/webstore/detail/google-search-link-fix/cekfddagaicikmgoheekchngpadahmlf/related?hl=zh-cn)》**  （ 支持 [Chrome](https://chrome.google.com/webstore/detail/google-search-link-fix/cekfddagaicikmgoheekchngpadahmlf/related?hl=zh-cn)  /  [🦊Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/google-search-link-fix/) /  [Opera](https://addons.opera.com/extensions/details/google-search-link-fix/) ） 

> 还原 Google 真实链接,去除 Google 搜索中的地址跳转链接。( **开发者**: [说明](https://palant.de/2011/11/28/google-yandex-search-link-fix/) - [扩展源代码](https://github.com/palant/searchlinkfix) )

**推荐1👍《谷歌上网助手（Ghelper）》一键安装，无需其他配置，即可访问谷歌（需注册/无限免费使用方法附后）。**

- [x] [**Chrome 插件：谷歌上网助手（Ghelper）**](https://chrome.google.com/webstore/detail/谷歌上网助手/nonmafimegllfoonjgplbabhmgfanaka?hl=zh-CN) - Chrome 网上应用店 ( 👍[**我的Go下载短链接**](https://go.choong.net/google/g/) ) ( [🦊Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1%E5%8A%A9%E6%89%8B/)同类软件：[谷歌服务助手](https://addons.mozilla.org/zh-CN/firefox/addon/%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1%E5%8A%A9%E6%89%8B/) / 支持 [Chrome](https://chrome.google.com/webstore/detail/%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1%E5%8A%A9%E6%89%8B/cgncbhnhlkbdieckbbmeppcefokppagh?hl=zh-CN) & [🦊Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/%E8%B0%B7%E6%AD%8C%E6%9C%8D%E5%8A%A1%E5%8A%A9%E6%89%8B/)）

<a href="https://chrome.google.com/webstore/detail/%E8%B0%B7%E6%AD%8C%E4%B8%8A%E7%BD%91%E5%8A%A9%E6%89%8B/nonmafimegllfoonjgplbabhmgfanaka?hl=zh-CN">
<img src="https://camo.githubusercontent.com/1d5645686d23f4182c4eeeca1a3bb7591d371005/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f5573784b6645656f67474f7671335457663053394b4a79396e48642d353333737452686334345f555070553638426c5a696b703632316873784e5945457637534c2d756663526d3930413d773634302d683430302d65333635" border="0" alt="Chrome 插件：谷歌上网助手（Ghelper）" title="Chrome 插件：谷歌上网助手（Ghelper）"></a>

https://chrome.google.com/webstore/detail/谷歌上网助手/nonmafimegllfoonjgplbabhmgfanaka?hl=zh-CN

>  专门为科研、外贸、跨境电商、海淘人员、开发人员服务的上网加速工具，chrome内核浏览器专用!可以解决chrome扩展无法自动更新的问题，同时可以访问谷歌google搜索，gmail邮箱，google+等谷歌产品
>  简单易用的《谷歌上网助手》，可以解决chrome扩展无法自动更新的问题，同时可以访问谷歌google搜索，gmail邮箱，google+等谷歌服务。

>  使用本插件可以免费上：（全网翻墙）
>   - google.com     谷歌搜索
>   - mail.google.com   gmail邮箱
>   - chrome商店访问

>   **开发者**
> 
>  提供方：**Google Helper 官网** http://googlehelper.net/ ( [官网下载](http://googlehelper.net/download/Ghelper_1.4.3.beta.zip) | [备份下载](https://taoste.github.io/Hello-World/Tools/Google%20Chrome/Chrome%E6%8F%92%E4%BB%B6%EF%BC%88CRX%E6%96%87%E4%BB%B6%EF%BC%89/Chrome%20%E6%8F%92%E4%BB%B6%EF%BC%9A%E8%B0%B7%E6%AD%8C%E4%B8%8A%E7%BD%91%E5%8A%A9%E6%89%8B/Ghelper/index.html) )
>   电子邮件地址：ghelperinfo@gmail.com
>   
>   **版本信息**： 1.4.3  (最后更新日期： 2018年6月30日) 大小： 205KiB
  
>   **参阅**：[Youtube视频讲解](https://youtu.be/tgWeLcMg7TM)

>   **源码安装方法：**
> 
> 从2018年6月13日起,谷歌最新的Chrome 7 不再支持CRX手动安装方法.样导至国内用户无法顺利安装Chrome扩展.大陆用户又无法访问Chrome应用商店.
> 我们提供了源码安装方式：
> 
> 1.打开你的Chrome浏览器的 更多工具>扩展程序页面.或者直接在网址输入: chrome://extensions/
> 
> 2.这个页面点击 "添加已解压的扩展程序"
> 
> 3.选择本次下载包里的 ghelper_source 目录
> 
> 4.确认后就行了.
> 
> 另外建议装上源码包方式后，登录后就能访问谷歌了。
> 
> 建议选去 Chrome 应用商店 找到我们的正式在线版本.这样当我们升级你本机也会升级.安装正式线上版本后，回到扩展页面把刚才导入的已解压的包删除掉或停止就行了。
> 
> 如果还有什么问题可以发邮件: GhelperInfo@gmail.com  , 国内用户还可以用QQ浏览器，在它的应用中心可以直接安装.

>  
>   **【谷歌上网助手-配合VIP注册使用】👍10分钟邮箱网址：http://www.bccto.me/  (用于无限多次/临时注册3天VIP使用权限)**
> 
>   浏览器下载（无需翻墙）：https://www.lanzous.com/i1k549e 
>   
>   插进中心搜索：谷歌上网助手 插件下载（无需翻墙）：https://www.lanzous.com/i1k4njc 

 **推荐2👍《谷歌访问助手（ggfwzs）》一键安装，无需其他配置，即可访问谷歌。**
 
- **更多同类型：**[**Chrome 插件：谷歌访问助手（ggfwzs）**](https://chrome.google.com/webstore/detail/谷歌访问助手/gocklaboggjfkolaknpbhddbaopcepfp?hl=zh-CN) - Chrome 网上应用店

>     https://chrome.google.com/webstore/detail/谷歌访问助手/gocklaboggjfkolaknpbhddbaopcepfp?hl=zh-CN

>  chrome浏览器商店打不开，gmail邮箱打不开的问题 -请用[**谷歌访问助手加速**](http://www.ggfwzs.com/)

> 等谷歌产品
> 简单易用的《谷歌访问助手》,为chrome扩展用户量身打造，可以解决chrome扩展无法自动更新的问题，同时可以访问谷歌google搜索，gmail邮箱，google+等谷歌服务。

使用本插件可以免费上：

>  - google.com     谷歌搜索
>  - mail.google.com   gmail邮箱
>  - chrome商店访问

>  提供方：http://www.ggfwzs.com/ ( [安装使用教程](http://www.ggfwzs.com/ff/chrome/index.html) )
>   
>   **版本版本**： 2.3.0 (最后更新日期： 2018年3月12日)  大小： 106KiB

--------------------------------------------

-  **推荐👍《[Proxy SwitchyOmega](https://www.switchyomega.com/)》 - 轻松快捷的管理和切换多个代理设置 ( https://www.switchyomega.com/ )**


> [**Chrome**](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=zh-CN) 和[**Firefox**](https://addons.mozilla.org/zh-CN/firefox/addon/switchyomega/) 浏览器上的代理扩展程序，可以轻松快捷的管理和切换多个代理设置。
> 
> 备用下载地址： https://github.com/FelisCatus/SwitchyOmega/releases
> 
> 如有任何问题，请[右键]点击图标，并在菜单中选择“反馈问题”，以便开发人员及时解决。
> 
> 隐私政策： https://github.com/FelisCatus/SwitchyOmega/wiki/Privacy#中文
> 
> 2.x 版本新功能：
> * 自动检测未加载的元素，并可通过弹出菜单一键设置使用代理。
> * 支持需要用户名密码验证的代理服务器。
> * 更灵活的代理配置：代理情景模式、多个自动切换模式以及多个规则列表。
> * 新增多种切换条件类型，并改进原有的切换条件。
> * PAC 脚本生成和切换的性能优化。
> * 崭新的选项页面和下拉菜单，用户体验更佳。
> * 许多错误修复以及改进。测试更充分。
> 
> **特别提醒**：由于浏览器限制，同一时间只能有一个扩展控制代理设置，一般来说会优先后安装的扩展。冲突中若SwitchyOmega获得了优先权，则可以切换到“系统代理”模式，从而把优先权归还给其他扩展，从而解决问题。如果此扩展的配置被其他代理相关、或者去广告相关的扩展覆盖，则问题无法解决，只能通过重装SwitchyOmega来提高优先权。

> **SwitchyOmega 选项(文件备份-[在线恢复](https://github.com/taoste/Hello-World/raw/master/Tools/Mozilla%20Firefox/OmegaOptions.bak)**)  +  [**Lantern(蓝灯) v2.2.5 无限流量翻墙**](https://github.com/taoste/Hello-World/tree/master/GFW/Lantern)（具体破解方法为：主要是令 lantern 一直保持在 2.2.5 版本不变。破解“限制500M流量之后限速”问题的具体方法）

- [强大代理扩展插件SwitchyOmega使用教程 火狐/Chrome适用](https://ssr.tools/150) - [SSR中文网](https://ssr.tools/) | 让上网更科学

--------------------------------------------

- [x] [Feedbro Reader](https://addons.mozilla.org/zh-CN/firefox/addon/feedbroreader/) – 带过滤规则、获取全文的 **RSS 信息聚合阅读器** （ 支持：[Chrome](https://chrome.google.com/webstore/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa?hl=zh-CN)/[🦊Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/feedbroreader/) ）

> [**官方最新版**](https://nodetics.com/feedbro/)（ 支持：[Chrome](https://chrome.google.com/webstore/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa)/[🦊Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/feedbroreader/) ）可以导入语言文件了，这是[语言文件](https://raw.githubusercontent.com/YEWl/feedbro-locale/master/feedbro-locale-zh_CN.json)，在设置里导入就行。（★[备注](https://github.com/inchoong/go/blob/master/tips/feedbro-subscriptions-20191206-131500.opml)：实测可用）

--------------------------------------------

- [**YouTube 视频**](https://www.youtube.com/?hl=zh-CN) 
( https://www.youtube.com/?hl=zh-CN ) 

- [**免费在线 YouTube 下载器：SaveFrom**](https://zh.savefrom.net/) - 下载 YouTube 视频、Facebook 等等！ ( https://zh.savefrom.net/ )
>  <a href="https://zh.savefrom.net/" title="Youtube视频下载(使用短域名快捷方式：SSyoutube.com) - 免费在线 YouTube 下载器">👍SS</a>
   <a href="https://www.youtube.com/?hl=zh-CN" title="YouTube - YouTube是世界上最大的视频网站">YouTube</a> 
   .<a href="https://zh.savefrom.net/user.php?vid=312&utm_source=savefrom&utm_medium=vidacha&utm_campaign=sf_helper&utm_content=101-promo" title="Youtube 下载器：通过一个扩展程序从 Vimeo、Facebook 和 Dailymotion 上免费下载所有视频">com</a>
   
- [**登录Google和YouTube的两个小插件教程**](https://blog.csdn.net/Yong_Qi2015/article/details/79205358) - [**CSDN博客**](https://blog.csdn.net/)

- [频道上的认证徽章](https://support.google.com/youtube/answer/3046484?hl=zh-Hans) - YouTube帮助

- [如何获得 YouTube 认证](https://support.google.com/youtube/answer/6145895?hl=zh-Hans) - YouTube帮助

-------------------------------------------

- [Flash Player](https://chrome.google.com/webstore/detail/flash-player/bmimdmkleccdoghpgdhaahkelfhjfhgm?hl=zh-CN) - Chrome 网上应用店

- [Flash Player for YouTube™](https://chrome.google.com/webstore/detail/flash-player-for-youtube/lljhpdalfpihmdokpgmobnbeibbkignc?hl=zh-CN) - Chrome 网上应用店

- [**快抖**](https://chrome.google.com/webstore/detail/%E5%BF%AB%E6%8A%96-%E7%9C%8B%E6%8A%96%E9%9F%B3%E8%A7%86%E9%A2%91/encpgafgennbokknanpcnkandmnneohp?hl=zh-CN) - 看[**抖音视频**](https://www.douyin.com/) - Chrome 网上应用店

> [**抖音官网**](https://www.douyin.com/) ( https://www.douyin.com/ ) 
 
> [**快音视-全网短视频集合**](https://kuaiyinshi.com/#video-pannel) ( https://kuaiyinshi.com/ )


> 可以在电脑浏览器刷抖音视频
> 可以在电脑浏览器刷抖音视频
> 后面会考虑增加火山、美拍、快手等短视频
> 
> - 更新日志：
> - 2018年7月2日，把快抖迁移到快音视，网页端拥有更多视频
> - 2018年6月5日，修复bug
> - 2018年5月5日 更新快抖 logo，优化播放页面体验

> 其他信息
> 版本： 1.0.0.7
> 最后更新日期： 2018年7月1日
> 大小： 195KiB
> 语言： 中文 (简体)

-------------------------------------------

- 《[**简书网页劫持分析，使用 Chrome DevTools 调试 JavaScript 技巧，利用 CSP 预防劫持**](https://www.52pojie.cn/thread-1070300-1-1.html)》 - 『[软件调试区](https://www.52pojie.cn/forum-59-1.html)』 - [**吾爱破解**](https://www.52pojie.cn/) - LCG - LSG |安卓破解|病毒分析|破解软件| www.52pojie.cn  
