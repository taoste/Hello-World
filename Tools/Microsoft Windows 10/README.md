- ☞ [【清单list-知识梳理】操作系统-Win10重装-必备软件(Re-install System)](https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/Re-install%20System.md) ( [https://go.choong.net/win10/Re](https://go.choong.net/win10/Re/index.html) )
>> [Note]Ⓜ️ [**微软 Microsoft 系列 · Issue #10**](https://github.com/taoste/taoste.github.io/issues/10) · taoste/taoste.github.io

- [MSDN](https://msdn.itellyou.cn/):**Windows 10 LTSC 2019 企业长期支持版**

- **微软官网**：[**Windows 10中制作系统修复U盘以及利用U盘修复系统的具体步骤**](https://answers.microsoft.com/zh-hans/windows/forum/windows_10-update/windows/9944e6c3-8589-40fe-8252-4a21a6b08d07) - Microsoft Community

>> 《[如何修复硬盘的主引导记录MBR](https://jingyan.baidu.com/article/9113f81b0405fa2b3214c792.html)》-百度经验

>> 《[在Windows 10中修复MBR的3种方法](https://www.reneelab.com.cn/windows-10-mbr-repair.html)》 - 都叫兽软件

> 《[Windows 10 中的磁盘清理](https://support.microsoft.com/zh-cn/help/4026616/windows-10-disk-cleanup)》 - Microsoft Community

>> 《[系统盘用户目录下的AppData\Local\Microsoft\Windows\Fonts下面的字体文件是否可删除？](https://answers.microsoft.com/zh-hans/windows/forum/all/%E7%B3%BB%E7%BB%9F%E7%9B%98%E7%94%A8%E6%88%B7/3b83de2d-ca0d-4d9b-a8c2-8359eb1235fd)》 - Microsoft Community



- **微软官网**：[**将电脑用作移动热点**(适用于： Windows 10)](https://support.microsoft.com/zh-cn/help/4027762/windows-use-your-pc-as-a-mobile-hotspot)  @[百度经验:《Win10笔记本电脑怎么开热点给手机用》](https://jingyan.baidu.com/article/6d704a1359c7ba28db51ca92.html)
>通过使用 WLAN 与其他设备共享 Internet 连接，将 Windows 10 电脑转变为移动热点。你可以共享 WLAN、以太网或手机网络数据连接。如果你的电脑具有手机网络数据连接并且共享该连接，它将使用流量套餐数据。
>>**方法/步骤**:（[上次更新时间](https://support.microsoft.com/zh-cn/help/4089498/support-content-updates)：2019年3月29日）
```
1.选择“开始”按钮 ，然后依次选择“设置(快捷键：Win + i)” >“网络和 Internet”>“移动热点”。
2.对于“从以下位置共享我的 Internet 连接”，选择要共享的 Internet 连接。
3.选择“编辑”> 输入新的网络名称和密码 >“保存”。
4.打开“与其他设备共享我的 Internet 连接”。
5.若要在其他设备上进行连接，请转到该设备的 WLAN 设置，查找并选择网络名称，输入密码，然后进行连接。
```
>>> 打开移动热点 ms-settings:network-mobilehotspot?activationSource=SMC-IA-4027762

- [Win10 音量调节快捷键设置](https://www.jianshu.com/p/cc890ddc58a0) - 简书

> [**导入注册表**](https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/%E8%AE%BE%E7%BD%AE%E9%94%AE%E7%9B%98%E8%B0%83%E8%8A%82%E9%9F%B3%E9%87%8F/ReadMe.md) (在网上找到了一个导入注册表的方法。)
```
Windows Registry Editor Version 5.00
          
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
"Scancode Map"=hex:00,00,00,00,00,00,00,00,03,00,00,00,30,E0,43,00,2E,E0,42,00,00,00,00,00
```
> 新建一个文本文档，将上面这段代码复制进去保存，修改文件后缀名为.reg，双击运行之后重启计算机。键盘上的F8就被替换成音量减，F9被替换成音量加。反正F8和F9基本没怎么用过，换成音量加减多发挥作用也好。

》 Win10用键盘调节音量方法：键盘同时按下“Win+F2”为音量-，“Win+F3”为音量+。 
>>  Win10的键盘快捷键如下：
```
Win + R 打开运行对话框。
Win + Q 快速打开搜索。
Win + I 快速打开Win10设置栏。
Ctrl+Alt+Del 快速打开任务管理器。
Alt+F4 关机快捷键。
```
> <img src="https://raw.githubusercontent.com/taoste/Hello-World/master/Tools/Microsoft%20Windows%2010/%E8%AE%BE%E7%BD%AE%E9%94%AE%E7%9B%98%E8%B0%83%E8%8A%82%E9%9F%B3%E9%87%8F/Realtek.jpg" alt="Realtek高清晰音频管理器-界面截图" title="Realtek高清晰音频管理器"/>

---------------------------------------

- 《[使用快速助手通过远程连接来解决电脑问题](https://support.microsoft.com/zh-cn/help/4027243/windows-10-solve-pc-problems-with-quick-assist)》(适用于： Windows 10) - [Windows 支持](https://support.microsoft.com/zh-cn/help/)

> “快速助手 ( **QuickAssist.exe** ) ”是一个 Windows 10 应用。它允许你信任的人控制你的计算机并帮助你解决问题。若要开始使用，你的帮助人员需要启动快速助手应用，获取 6 位代码并与你共享。 
```
   >提供协助
        1.依次选择“开始”菜单 >“Windows 附件”>“快速助手”
          （或选择“开始” 菜单，在搜索框内键入“快速助手”，然后在结果中选择它）。 
        2.选择“协助他人”，然后将 6 位代码发送给你所帮助的用户。
        3.当用户输入此代码后，选择“完全控制”或“查看屏幕”。
        4.选择“继续”，然后等待你所帮助的用户允许连接。 
   >获得协助
        1.依次选择“开始”菜单 >“Windows 附件”>“快速助手”
           （或选择“开始” 菜单，在搜索框内键入“快速助手”，然后在结果中选择它）。 
        2.在“由助理提供的代码”框中，输入提供给你的 6 位代码，然后选择“共享屏幕”。
        3.等待你的帮助人员，然后在显示的窗口中选择“允许”。
```
上次更新时间：2019年4月30日

---------------------------------------

- 《[**微软福利：Windows7和8.1系统仍可免费升至Windows10**](https://os.51cto.com/art/202005/616245.htm) 》（2020-05-11）  - 51CTO.COM  

- 《[**可能是最后一次机会，2 种方法免费升级到 Windows 10**](https://mp.weixin.qq.com/s/Qy_CgqCrctRsPSlVNxHEGQ) 》 
 （ 少数派 2019-12-27 ）
> 关注少数派（ID：sspaime），在后台回复「Win」即可获得下载链接，如下。

>> [**易升**](https://github.com/taoste/Hello-World/raw/master/Tools/Microsoft%20Windows%2010/Windows10Upgrade9252.exe)：https://url.cn/5DMm2wi

>> [**Windows Media Creation Tool**](https://www.microsoft.com/zh-cn/software-download/windows10) ：https://url.cn/5WZjGPC


- [**Win 10 32位 升级为 64 位 激活**](https://answers.microsoft.com/zh-hans/windows/forum/all/win-10-32%E4%BD%8D-%E5%8D%87%E7%BA%A7%E4%B8%BA-64/6400fc8d-41a1-43c4-85b3-f2a04e5b20c3) - Microsoft Community
>> 《[**如何从32位升级到64位版本的Windows 10**](https://www.cwhello.com/12069.html) | [重蔚自留地](https://www.cwhello.com/) 》2019年5月30日


- [**Windows 10终于也迎来了一款软件包管理器**](https://os.51cto.com/art/202005/617021.htm) （2020-05-20）- 51CTO.COM  


- [Windows中ProgramData文件夹是什么鬼](https://www.jianshu.com/p/677846a93056) - 简书

>> 如： C:\ProgramData\

>> 系统变量 %USERPROFILE%

>> 系统变量 %SystemRoot%\System32\S

---------------------------------------

【 [**Windows10易升**](https://www.microsoft.com/zh-cn/software-download/windows10) 】Windows 10 April 2018 Update 现已推出

**更新助手** 可以帮助你更新到 Windows 10 的最新版本。若要开始更新，请单击“**立即更新**”。 ( [Win10激活](https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/Win10%20ESD%E4%B8%80%E9%94%AE%E8%BD%AC%E6%8D%A2ISO%E5%B7%A5%E5%85%B7/readme.md) )

( **[Windows10易升](https://github.com/taoste/Hello-World/raw/master/Tools/Microsoft%20Windows%2010/Windows10Upgrade9252.exe) [官方下载](https://url.cn/5DMm2wi) ：( [Windows10Upgrade9252](https://go.microsoft.com/fwlink/?LinkID=799445)**) 

系统ISO文件下载完成后务必进行SHA1校验（推荐使用[iHasher](iHasher-v0.2.exe)）


**Microsoft 官网** : [**面向使用辅助技术的客户的 Windows 10 免费升级优惠**](https://www.microsoft.com/zh-cn/accessibility/windows10upgrade) -  (  活动已过期 )

- 【免费】 [来自设备制造商的 **HEVC 视频扩展**](https://www.microsoft.com/zh-cn/p/hevc-video-extensions-from-device-manufacturer/9n4wgh0z6vhq) - Microsoft Store zh-CN 
> 在 Windows 10 设备上的任何视频应用中播放高效率视频编码(HEVC)视频。这些扩展旨在利用某些较新设备(例如配备 Intel 第 7 代 Core 处理器和较新 GPU 的设备)上的硬件功能支持 4K 和 Ultra HD 内容。对于没有硬件支持 HEVC 视频的设备，将提供软件支持，但播放体验可能会因视频分辨率和电脑性能而有所不同。这些扩展还允许你在没有基于硬件的视频编码器的设备上对 HEVC 内容进行编码。

>> 《[[技巧]如何在Microsoft Store上免费获得HEVC编码支持](https://www.cnbeta.com/articles/tech/893455.htm)》 - cnBeta.COM (2019年09月26日) 

- [**欢迎使用 Internet Explorer**](https://www.microsoft.com/zh-cn/edge/)
> 您不妨试用一下 [Microsoft Edge](https://microsoftedgewelcome.microsoft.com/zh-cn/)
> 
> Microsoft 专为 Windows 10 开发的最新浏览器
> 
> Internet Explorer 的开发人员现在满怀自豪地为您奉上 Microsoft Edge。它构建在您无比信任的 Internet Explorer 浏览器基础之上，您可以尽享您喜爱的各项功能。此外，您还可以：
> 
>>  在网页上书写
>>
>>  无干扰阅读
>>
>>将所有内容存储在一个位置

>利用 Microsoft Edge，您能做到的远非网络浏览那么简单

- ☞ [**立即试用 Microsoft Edge**](https://www.microsoft.com/zh-cn/MicrosoftEdgeWelcome) |  [**Microsoft Edge 加载项**](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home?hl=zh-CN)  | ( 安装 [**Microsoft Authenticator**](https://go.microsoft.com/fwlink/?LinkId=869155) 双因素验证/两步验证， 并在应用中登录帐户。  )

>> 《[Azure 多重身份验证概述](https://docs.microsoft.com/zh-cn/azure/active-directory/authentication/concept-mfa-howitworks)》 | Microsoft Docs

>> 《[Microsoft Authenticator 应用备份和恢复帐户-Azure AD](https://docs.microsoft.com/zh-cn/azure/active-directory/user-help/user-help-auth-app-backup-recovery)》 | Microsoft Docs

>> 《[什么是两步验证？怎样开启二步验证？好用的身份验证器密码 APP 软件推荐](https://www.iplaysoft.com/two-factor-authentication.html)》 - 异次元软件下载 (2018-08-13)

>> 《[微软验证器（Microsoft Authenticator）更新：支持更改帐户密码等](https://www.ruancan.com/iphone/microsoft-authenticator.html)》 - 软餐(2020年3月10日)

>> 《[如何开启登录两步验证功能？](https://stage-www.yinxiang.com/new/hc/articles/%e5%a6%82%e4%bd%95%e5%bc%80%e5%90%af%e7%99%bb%e5%bd%95%e4%b8%a4%e6%ad%a5%e9%aa%8c%e8%af%81%e5%8a%9f%e8%83%bd%ef%bc%9f/)》 | 印象笔记 (2019-10-06)

- Ⓜ️ 【Microsoft Edge】 view-source:[**新建标签页**](https://ntp.msn.cn/edge/ntp?locale=zh-cn&fre=1&dsp=1&sp=必应)

- 资源下载：[微软官方办公资源合集](Office.md)（有效期：2018年9月7日前下载）

- 《[或许能成为你的 Windows 默认浏览器，大改版的 Edge 稳定版终于来了](https://mp.weixin.qq.com/s/05QoUqoMfNEyDOIyM440Xw)》
(  原创： 化学心情下2 @少数派 2019-10-28 )

> 用 Windows 电脑打开即可直接下载： [https://url.cn/57pEdMQ](https://github.com/taoste/Hello-World/raw/master/Tools/Microsoft%20Windows%2010/MicrosoftEdgeSetup.exe) （手机打开是乱码哦）

>> Edge 官网：[https://url.cn/5fqXwlJ](https://www.microsoftedgeinsider.com/zh-cn/download/)

- <b><a href="https://support.microsoft.com/zh-cn/help/4057281/windows-7-support-will-end-on-january-14-2020" title="【Windows 7 支持生命周期】
Microsoft 承诺为 Windows 7 提供自其 2009 年 10 月 22 日发布以来为期 10 年的产品支持。在为期 10 年的期限结束后，Microsoft 将停止为 Windows 7 提供支持，以便将精力专注于支持较新的技术和出色的新体验。对 Windows 7 的终止支持具体日期将是 2020 年 1 月 14 日。此后，我们将不再为该产品提供技术帮助和 Windows 更新中有助于保护电脑的软件更新。Microsoft 强烈建议你在 2020 年 1 月之前的某个时间升级到 Windows 10，以避免无法获得所需的服务或支持。">Windows 7 支持将于 2020 年 1 月 14 日终止</a></b>

> <a href="https://support.microsoft.com/zh-cn/help/4057281/windows-7-support-will-end-on-january-14-2020">
<img src="https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/Windwos7.jpg?raw=true" border="0" alt="Windows 7 支持将于 2020 年 1 月 14 日终止" title="【Windows 7 支持生命周期】
Microsoft 承诺为 Windows 7 提供自其 2009 年 10 月 22 日发布以来为期 10 年的产品支持。在为期 10 年的期限结束后，Microsoft 将停止为 Windows 7 提供支持，以便将精力专注于支持较新的技术和出色的新体验。对 Windows 7 的终止支持具体日期将是 2020 年 1 月 14 日。此后，我们将不再为该产品提供技术帮助和 Windows 更新中有助于保护电脑的软件更新。Microsoft 强烈建议你在 2020 年 1 月之前的某个时间升级到 Windows 10，以避免无法获得所需的服务或支持。"></a>

> [Windows 7 停止支持信息](https://www.microsoft.com/zh-cn/windows/windows-7-end-of-life-support-information) Microsoft  

- [SecurAble - CPU 虚拟化/D.E.P./位数查询](https://www.appinn.com/securable/) - [小众软件](https://www.appinn.com/)

> 系统工具:  <a href="https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/SecurAble%20%E2%80%93%20CPU%20%E8%99%9A%E6%8B%9F%E5%8C%96D.E.P.%E4%BD%8D%E6%95%B0%E6%9F%A5%E8%AF%A2.exe?raw=true"  title="【本地下载】SecurAble - CPU 虚拟化/D.E.P./位数查询">SecurAble</a> 可以查询当前 CPU 是否支持 虚拟化、D.E.P. 技术及 32/64 位查询。@Appinn

>> <a href='https://www.appinn.com/securable/'><img src="https://camo.githubusercontent.com/174ae7360532bbed1fc84f9b19df949464c7dbb5/687474703a2f2f696d67312e617070696e6e2e636f6d2f323031302f31322f32303130313230342d3231333333323030302e706e67" alt="http://img1.appinn.com/2010/12/20101204-213332000.png" title="SecurAble - CPU 虚拟化/D.E.P./位数查询 | 小众软件"></a>

---------------------------------------------------------------------------------------------------------

- [Note] Ⓜ️ [**微软 Microsoft 系列 · Issue #10**](https://github.com/taoste/taoste.github.io/issues/10) · taoste/taoste.github.io

- 《[**最绿色最高效，用win+r启动常用程序和文档**](http://xbeta.info/win-run.htm)》 – 善用佳软
                   
> 本文可概括为一句话：“建立.lnk，改名.lnk以便于记忆和输入，集中lnk到某目录(如 C:\Windows)，加此目录到path变量”。
> 
- [**CPL文件**](https://baike.baidu.com/item/CPL%E6%96%87%E4%BB%B6/2167532) - 文件及作用：
> 
> CPL文件，又叫控制面板项（Control Panel Item），多保存于系统安装目录的system32文件夹下，它们分别对应着控制面板中的项目，普通用户的访问受到限制。它可由shell32.dll、control.exe打开。此外，你也可以直接在资源管理器中双击调用Open命令打开（实质上调用了shell32.dll）。
> 
> CPL文件本质是Windows可执行性文件，但不属于可以直接独立运行的文件，通常由shell32.dll打开。
> 
> system32目录里绝大多数cpl文件是Windows系统文件，具有“存档”文件属性，Windows操作系统的文件保护功能保护它们不被篡改。
> 
> 运行：**ncpa.cpl**，**网络连接** （ C:\WINDOWS\system32\ncpa.cpl ）
> 
> 运行：**desk.cpl**，**显示属性** ( C:\WINDOWS\system32\desk.cpl )
> 
> 运行：**inetcpl.cpl**，**IE设置** ( C:\WINDOWS\system32\inetcpl.cpl )
> 
> 更多： （微软官网：[Windows 中的键盘快捷方式 - Windows Help](https://support.microsoft.com/zh-cn/help/12445/windows-keyboard-shortcuts) ）
> 
> joy.cpl，游戏控制器设置
> 
> mmsys.cpl，声音与音频设置
> 
> intl.cpl，区域与语言设置
> 
> ncpa.cpl，网络连接
> 
> netsetup.cpl，网络安装向导
> 
> lusrmgr.cpl，用户帐户
> 
> odbccp32.cpl，ODBC数据源管理器
> 
> wscui.cpl，Windows安全中心
> 
> wuaucpl.cpl，自动更新配置
> 
> igfxcpl.cpl，Intel集成显卡设置
> 
> nvcpl.cpl，nVidia显卡设置(NVIDIA控制面板)
> 
> access.cpl，辅助功能选项
> 
> appwiz.cpl，添加或删除程序
> 
> desk.cpl，显示属性
> 
> firewall.cpl，防火墙设置
> 
> hdwwiz.cpl，添加硬件向导
> 
> sysdm.cpl 我的电脑右键属性
> 

---------------------------------------------------------------------------------------------------------

- 【 [gatherosstate.exe](https://github.com/taoste/Hello-World/raw/master/Tools/Microsoft%20Windows%2010/gatherosstate.exe) [用于生成**Win10激活**用 GenuineTicket.xml 正版通行证](https://jingyan.baidu.com/article/14bd256e458369bb6d2612be.html) 】

> 参考：[Win10秘籍--跳过升级全新安装Win10并永久激活-百度经验](https://jingyan.baidu.com/article/14bd256e458369bb6d2612be.html)

- 【 Windows10  “**一键锁屏(Win+L)** ” 桌面快捷方式 】
> 新建快捷方式，填写链接：rundll32.exe user32.dll,LockWorkStation （快捷键可设为：**F2**）
> 
> 例如：
> 
> **%windir%\System32\rundll32.exe user32.dll,LockWorkStation**
 
> 更多》[如何使用笔记本的快捷按钮调用Windows快捷键的功能](http://iknow.f5.lenovo.com.cn/detail/dc_C173291.html) - 联想知识库

>    》[无需U盘小白轻松搞定！Windows 10“云重装”体验！](https://os.51cto.com/art/202005/617033.htm) （2020-05-20）  - 51CTO.COM 

- 【 Windows10  “**一键重启/关机** ” 桌面快捷方式 】
> 制作关机、重启和休眠快捷键，在桌面点击鼠标右键，选择新建(快捷方式，在弹出的向导中输入位置为：%windir%\system32\shutdown.exe -s -t 10（其中的-s可以改为-r，也就是**重新启动**，而-t 10表示延迟10秒，你可 以根据自己的需要更改这个数字）。

> 制作完这个快捷键后，按照上面的方法为它指定一个图标。这个快速重启的技巧会显示一个比较漂亮的对话框提示重启，而且你可以在后面加上 “-c "我要重启我的爱机啦！"”，这样这句话会显示在对话框中，当然文字你可以随意写，但要注意不能超过127个字符。

> 如果要制作关机快捷键，那么“shutdown.exe -s -t 10”中的-s不可更改，其他步骤同上。

> 》**系统休眠**（一键休眠）

> 1.右键单击桌面空白处，指向“新建”，然后单击“快捷方式”。
> 
> 2.在“请输入项目的位置”框中，输入： **%windir%\system32\rundll32.exe powrprof.dll,SetSuspendState** ，输入的全部为半角字符，rundll32.exe后有一个空格键，字母大小写也不能随意更改，然后单击“下一步”按钮。
> 
> 3.在“键入该快捷方式的名称”框中输入想要在图标下显示的名称，比如输入“一键休眠”，然后单击“完成”按钮，则在桌面上生成一个名为“一键休眠”的图标。
> 
> 4.右键单击桌面上的“一键休眠”图标，然后单击“属性”。
> 
> 5.单击“快捷方式”选项卡，单击“快捷键”框，然后按下自己喜爱的按键，比如按下F12键，单击“确定”按钮。需要注意是，定义的该快捷键不能够与基于Windows的程序中的访问键冲突，如果冲突，则程序中的访问键就不起作用。访问键是某个字母或数字，即当它与ALT键组合使用时，其效果与使用鼠标单击命令的效果相同。
至此，自己动手做的一键休眠DIY大功告成，以后要休眠时，只要按下键盘上的F12键即可，它与按下Sleep键等效

- [Windows10锁屏图片太漂亮，如何设为桌面背景呢？](https://zhuanlan.zhihu.com/p/27429896) - [知乎](https://zhuanlan.zhihu.com/)

 1.首先打开“文件资源管理器”，在地址栏输入下面的路径后回车。

【windows 10 锁屏壁纸 路径】
> C:\Users\%username%\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\

 2.点击开始菜单，输入cmd，打开“命令提示符”。输入下面的命令，修改锁屏壁纸文件夹中的文件扩展名为png。
> Ren C:\Users\%username%\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\*.* *.png

**❤壁纸资源：**

√ 【[The Year of the Pig](https://www.microsoft.com/zh-cn/p/the-year-of-the-pig/9nq9bf4q974d?ocid=ema_rmc_win_FY19Goodwill-hero-exclus-pos2-cta1&activetab=pivot:overviewtab)】 - Microsoft Store zh-CN
> 在这组包含 20 幅图像的免费 Windows 10 主题壁纸集中感受中国之美和2019猪年的欢乐氛围。 这些图像只可用作桌面壁纸。

- [**Windows XP SP3 無法關機，可正常重新開機**](https://social.technet.microsoft.com/Forums/zh-TW/9e66b637-b4d0-4fb9-bd94-ccd90fcf621c/windows-xp-sp3-?forum=windowsvistaclientzhcht) - Microsoft 官网

- [**Win10自带输入法变成繁体该怎么办？**](http://www.w10zj.com/Win10xy/Win10xf_2690.html) -  [W10之家](http://www.w10zj.com/)

> 方法一：

>> 1、将输入法切换成微软输入法，然后按下【Ctrl + Shift + F】即可在繁体与简体之间相互切换！

> 方法二：

>> 1、点击任务栏中的输入法按钮，点击【语言首选项】；

>> 2、在【语言】下点击【中文】，点击【选项】；

>> 3、在下面点击【微软输入法】，点击【选项】；

>> 4、在设置下面找到【繁简设置】，点击下拉菜单修改为【简体中文】即可。

> 当你所使用的windows 10系统中微软输入法莫名变成繁体可以按以上方法进行设置即可！

---------------------------------------------------------------------------------------------------------

**Windows 10 / UWP** :

- [U盘 – 移动存储管理应用](https://www.microsoft.com/zh-cn/p/usb-flash-drive/9pdfklqwtn71?activetab=pivot%3aoverviewtab) - Microsoft Store zh-CN

> 程序提供方： [智呈科技-西部AI先行者](http://www.zeecent.com/)  （@[发现小众](https://faxian.appinn.com/8742) ）

> 功能:
> U盘拷贝飞起来了
> 触屏"患者"的福音
> 
> 虽说U盘越来越不被用到，可每每用到U盘就感觉不爽，不管是查找或者是拷贝，特别是在触屏情况下，拷贝一个文件感觉要使出毕生所学的Windows技能。
> 这个U盘软件解决的就是win10的U盘拷贝的场景（特别是触控屏设备）。主要功能是：
> 1. 优化了拷贝粘贴流程；
> 2. 对当前文件夹内容根据类型进行分类：更便于查找；
> 3. 增加了历史记录，多数人需要查看历史传输记录；
> 4. 基于UWP的软件，干净。

---------------------------------------------------------------------------------------------------------

- **【如何在Windows10系统“关机选项”菜单中添加“休眠”选项】**

方法/步骤：( **微软官网说明**：[关闭电脑，或使其进入睡眠或休眠状态 - Windows Help](https://support.microsoft.com/zh-cn/help/13770/windows-shut-down-sleep-hibernate-your-pc) )
> 1.点击Windows10系统【搜索图标】并在搜索框内输入“控制面板”并按回车。 ↓
> 
> 2.在右上方【查看方式】选择大图标或小图标，并找到【电源选项】，单击【电源选项】。 ↓
> 
> 3.找到左侧链接选项中的【选择电源按钮的功能】，并单击。 ↓
> 
> 4.找到【更改当前不可用的设置】单击，单击后向下找到【休眠】并勾选，最后保存修改。 ↓

其他：

1. [windows10删除休眠文件](https://blog.csdn.net/qq_35733535/article/details/78968394)
>其实休眠文件既占内存，又没用。简单的方法删除休眠文件，win+r然后键入cmd到windows的dos命令串口下，然后键入 powercfg -h off 就可以删除休眠文件，但是好多电脑的cmd不是管理员所以不生效，可以找到命令行输入的指定文件夹下，Windows/system32中的cmd.exe文件，然后鼠标右键，管理员方式运行，然后输入以上的命令就可以看到自己的c盘大了几个G，也可以恢复隐藏文件的功能， powercfg -h on 就可以了。

2. [win10休眠占系统内存怎么办?给win10的休眠文件做个瘦身 - CSDN博客](https://blog.csdn.net/qq459080123/article/details/78320406)

3. [win10睡眠和休眠的区别_百度知道](https://zhidao.baidu.com/question/139104418097547485.html)

---------------------------------------------------------------------------------------------------------

- [**win7 右键没有发送到桌面快捷方式**](https://zhidao.baidu.com/question/126476204)_百度知道 （**实测有效**）([SendTo文件夹/打包下载](https://github.com/taoste/Hello-World/raw/master/Tools/Microsoft%20Windows%2010/SendTo/SendTo.7z))

> 在[SendTo文件夹](https://github.com/taoste/Hello-World/raw/master/Tools/Microsoft%20Windows%2010/SendTo/SendTo.7z)的空白处按鼠标右键，
> 
>     Win2000 / WinXP系统下路径为 C:\Documents and Settings\用户名\SendTo;
> 
>     Vista/Win7/Win10系统下路径为 C:\Users\用户名\AppData\Roaming\Microsoft\Windows\SendTo;
> 
> (注意：由于文件都是隐藏属性，所以需要在“**文件夹选项**”中打开“**显示所有文件和文件夹**”，才能看到相应的目录)
> 
> 点选“新建/文本文档”，其后在SendTo窗口中显然会有一个0字节的记事本图标文本文件“新建文本文档.txt”:

方法/步骤：

> 1. 邮件接收者
> 
> 将这个“新建文本文档.txt”重命名为“邮件接收者.MAPIMail”!此后会出现“如果改变文件扩展名，可能会导致文件不可用。确实要更改吗?”这样一个重命名警告对话框，按“是”。
> 
> 2. 桌面快捷方式
> 
> 将这个“新建文本文档.txt”重命名为“桌面快捷方式.DESKLINK”!此后会出现“如果改变文件扩展名，可能会导致文件不可用。确实要更改吗?”这样一个重命名警告对话框，按“是”。
> 
> 3. A盘
> 
> 在这里建一个A盘的快捷方式，指向A盘就可以了。其他盘符同理。

其它简述：
> 方法一：把c:\用户\用户名\\AppData\Roaming\Microsoft\Windows的SendTo文件夹复制到c:\用户\用户名 下就行（前提是你要先在WINPE系统下把c:\用户\用户名 下原有的的sendTo文件夹给删除了，否则无法复制）。重启就可以看到选项了。 
>
> 方法二：打开菜单-运行-cmd,复制以下内容
> 
>       regsvr32 /n /i:U shell32.dll
> 
>       regsvr32 /i shell32.dll
> 
>       regsvr32 ole32.dll
> 
>       regsvr32 sendmail.dll
> 
>  注意： regsvr32 /n /i:U shell32.dll 可能会提示出错，不理会它。

---------------------------------------------------------------------------------------------------------

- [修复错误 0x80004005](https://support.microsoft.com/zh-cn/help/4028090/windows-fix-error-0x80004005) : 
>> 适用于： Windows 10

>这适用于 Windows 8、Windows 8.1、Windows Server 2012、Windows Server 20212 R2、Windows 10 和 Windows 10 版本 1511 中的 Internet Explorer 中的 Adobe Flash Player 以及 Windows 10 和 Windows 10 版本 1511 中的 Microsoft Edge 中的 Adobe Flash Player。

>   <p>Microsoft 发布了一个安全更新，用于解决 Internet Explorer 和 Microsoft Edge 中的 Adobe Player 中的漏洞。 我们建议你在电脑上转到“更新和安全”，立即安装更新。 选择 <b>“开始”</b> <span class=\"win-icon win-icon-WindowsLogo\"></span> 按钮，然后依次选择<b>“设置”</b> <span class=\"win-icon win-icon-Settings\"></span>><b>“更新和安全”</b> <span class=\"win-icon win-icon-Sync\"></span>><b>“检查更新”</b>。</p>
   
>>  今天在配置网络连接共享时，提示0x80004005错误信息：后来通过 启用 **Windows 防火墙服务** 的方式解决了。

> [win10局域网共享错误代码0x80004005的解决方法 - Win10故障修复 - W10之家](http://m.w10zj.com/Win10xy/Win10xf_9182.html)

> [无法启用共享访问，错误0x80004005，报错的解决-百度经验](https://jingyan.baidu.com/article/d169e186a98f29436611d8fb.html)

> [关于访问共享时出现80004005错误-Storm_Center](http://www.stormcn.cn/post/1908.html)

---------------------------------------------------------------------------------------------------------

- [修复 Windows 更新错误](https://support.microsoft.com/zh-cn/help/10164):**运行 Windows 更新疑难解答程序**

>    [微软官方：Windows Update疑难解答修复工具（修复Windows 更新错误）](https://github.com/taoste/Hello-World/blob/master/Tools/Microsoft%20Windows%2010/WindowsUpdate.diagcab)

方法如下：

> 下载 ﻿Windows 更新疑难解答，然后在弹出窗口中选择“打开”或“保存”。

> 注意:
>
>        如果选择“保存”，下载完成后你需要转到下载疑难解答程序的文件夹，然后双击 WindowsUpdate.diagcab 文件以运行疑难解答程序。
>
>         选择“下一步”，然后按照向导中的步骤查找并修复 Windows 更新问题。

----------------------------------------------------

- [系统路径%ProgramFiles% %windir% %windows% %Temp% 等的解释](https://blog.csdn.net/xiaoqiangvs007/article/details/7254204) - xiaoqiangvs007的专栏 - CSDN博客

>     %Temp%表示系统的临时文件夹所在目录，通常你的操作系统都是Windows，无论是Win9X/2000/XP/2003/NT里的哪一种，只要你知道你把Windows系统装在哪个硬盘分区下就行了。比如说你装在C盘下，那么这里的%temp%就是指C:\Windows\temp这个目录文件夹。如果你把系统装在D盘，那么这时就变成D:\windows\temp了。

>     %windir%、%windows%表示windows所在目录，你的Windows装在哪个分区就指这个分区的windows文件夹。%Windows%在98及XP下指系统盘下的windows文件夹，2000下指WinNt文件夹。

>     %SystemRoot%、％system％表示系统所在目录，分别指系统根目录和系统所在目录。其中%SystemRoot%如果操作系统为Windows并且装在分区C盘下，那么它们就是C:\windows。和第2条里的一样。

>     还有几个Program Files类的，如%USERPROFILE% 指当前用户的配置文件目录。%ProgramFiles% 指Program Files程序安装目录。%CommonProgramFiles% 通用文件目录。

>     注意%system%：%System%在98下指windows\system，2000下指winnt\system32\，XP下指windows\system32文件夹

>                   %SystemDrive%                                                             系统安装的磁盘分区
>                   %SystemRoot% = %Windir% WINDODWS                     系统目录
>                   %ProgramFiles%　                                                         应用程序默认安装目录
>                   %AppData%                                                                   应用程序数据目录
>                   %CommonProgramFiles%                                              公用文件目录
>                   %HomePath%                                                                当前活动用户目录
>                   %Temp% =%Tmp%                                                        当前活动用户临时目录
>                   %DriveLetter%                                                               逻辑驱动器分区
>                   %HomeDrive%                                                               当前用户系统所在分区


- [系统变量（%SystemRoot% ，%windir% ，%temp%，%system%）的表示方法](http://www.cnblogs.com/5tao/archive/2008/11/16/1334526.html) - 独孤雁 - 博客园

>     在设置系统环境变量的过程中，经常会看到诸如%SystemRoot% ，%windir% ，%temp% 的字眼，当初我也不知道指的是那些目录，经过一段时间的探索，终于还是弄懂了，总结一下分享给大家：
>     对于操作系统是XP（系统目录是windows）并安装在c盘的用户sihochina
>     格式：变量名=实际含义 
>     ----------------------------------------------------------------------- 
>     %HOMEDRIVE% = C:\          当前启动的系统的所在分区 
>     %SystemRoot% = C:\WINDOWS          当前启动的系统的所在目录 
>     %windir% = %SystemRoot% = C:\WINDOWS          当前启动的系统的所在目录 
>     %USERPROFILE% = C:\Documents and Settings\sihochina          当前用户数据变量 
>     %HOMEPATH% = C:\Documents and Settings\sihochina          当前用户环境变量 
>     %temp% = %USERPROFILE%\Local Settings\Temp = C:\Documents and Settings\sihochina\Local Settings\Temp          >     当前用户TEMP缓存变量 
>     ------------------------------------------------------------------------ 
>     例如：%windir%\drives 的实际路径就是 C:\WINDOWS\drives 目录。 
>               所谓变量，就是指一个在不同环境中会有相对不同的值的、但在所有环境中都有相同约定的含义的量。 
>               这些变量，可以在开始菜单-运行中输入，如输入%SystemRoot% ，系统会直接打开 C:\WINDOWS 目录。 
>     如果你当前的系统是装在D盘的2000的话，上边这个变量的执行结果就是打开 D:\WINNT 目录了。 
>     
>     求助：本人在网上看到系统变量%SYSTEM%代表的路径有两种：一个是C:\WINDOWS\SYSTEM32，当然也有另一种说法是C:\WINDOWS\，到底哪种说法是正确的？
>     
>     今天从图书馆查了资料，%system%指的是系统安装盘下的system32目录。如果系统安装在C盘，他所指的目录就是：C:\WINDOWS\SYSTEM32(WINDOWS XP,2K,2K3)和C;\WINNT\SYSYTEM32(WINDOWS 98,ME)。特此作出更正！

----------------------------------------------------

✨ 友情链接：

- [**吕毅**](https://walterlv.com/)([微软MVP专家](https://mvp.microsoft.com/zh-cn/PublicProfile/5003225))
(@[Github](https://github.com/walterlv)\@[Twitter](https://twitter.com/_lvyi_) \ @[stackoverflow](https://stackoverflow.com/users/6233938/walterlv) \ @[Blog](https://walterlv.github.io/) \ @[CSDN博客](https://blog.csdn.net/wpwalter) )

- [**林德熙**](https://lindexi.github.io/) ([【lindexi】好多时间打出来代码没有bug](https://lindexi.github.io/#/hi))
(@[Github](https://github.com/lindexi)\@[Twitter](https://twitter.com/lindexi_gd) \ @[Facebook](https://www.facebook.com/lindexi) \ @[Blog](https://lindexi.github.io/lindexi/) \ @[CSDN博客](https://blog.csdn.net/lindexi_gd) )

(@[Github](https://github.com/walterlv)\@[Twitter]() \ @[Facebook]() \ @[Blog]() \ @[CSDN博客]() )
