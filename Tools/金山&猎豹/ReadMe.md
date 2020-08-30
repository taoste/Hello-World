- [view-source](https://github.com/taoste/Hello-World/tree/master/github/duba.net) : [**猎豹护眼大师**](http://www.duba.net/dbt/eyes.html)，防蓝光，护眼，缓解眼睛疲劳（ [立即](https://github.com/taoste/Hello-World/raw/master/Tools/%E9%87%91%E5%B1%B1%26%E7%8C%8E%E8%B1%B9/%E7%8C%8E%E8%B1%B9%E6%8A%A4%E7%9C%BC%E5%A4%A7%E5%B8%88keyeprotect_10_1.exe)[下载](http://cd002.www.duba.net/duba/install/2011/ever/keyeprotect_10_1.exe) ）
```
猎豹护眼大师为你的电脑开启护眼模式，科学过滤屏幕有害蓝光，保护眼睛。
提供智能、办公、影视、游戏四种护眼模式，可缓解长时间看屏幕时眼睛干涩、眼睛疲劳、视力模糊的症状。
是保护眼睛、定时提醒休息的小助手
```
-------------------------------------------------------

- [Tips](https://github.com/taoste/Hello-World/blob/master/Tools/PPT%E6%8A%95%E5%BD%B1%E6%BC%94%E7%A4%BA%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7/):[**新版WPS建立右键新建菜单**](https://jingyan.baidu.com/article/3d69c5515d458cf0ce02d750.html) -百度经验

☞ **解决方法（一）**

>> 1.打开**开始**菜单-运行，输入: **regedit**，打开**注册表编辑器**。

>> 2.【操作方法】WPS添加“建立右键新建菜单”：

>>> 2.1 **WPS文字**的**默认文件类型**为*.wps

>>>> **HKEY_CLASSES_ROOT**\ 下WPS文字的默认文件类型.wps点击刚才创建的“ShellNew”项，在右侧窗格，新建“字符串值”，请改名为“ **NullFile**”。<br>
>>>> 在**HKEY_CLASSES_ROOT\.wps**下的主键（也称为“项”）“**KWPS.Document.9**”下新建一个主键（项），并改名为“ **ShellNew** ”。<br>
>>>> (回到桌面，F5刷新桌面，打开一次鼠标右键新建菜单，然后取消，再次打开新建菜单时会发现已经出现一个“WPS文字 文档”项目。
>>>> 如果没有出现，可以尝试重启电脑。)

>>> 2.2 **WPS表格**和**WPS演示**的**默认文件类型**分别**为*.et和*.dps**

>>>> **HKEY_CLASSES_ROOT\.et** ，在**KET.Workbook.9**下新建 **ShellNew**，并在右侧窗格新建**NullFile**;<br> 
>>>> **HKEY_CLASSES_ROOT\.dps** ，在**KWPP.Presentation.9**下新建 **ShellNew** ，并在右侧窗格新建 **NullFile** 。

☞ **解决方法（二）**

> <img src="https://github.com/taoste/Hello-World/blob/master/Tools/%E9%87%91%E5%B1%B1&%E7%8C%8E%E8%B1%B9/Win10-WPS-SoS.png?raw=true" title="新版WPS建立右键新建菜单的解决方案"  />

-------------------------------------------------------
