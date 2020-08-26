猎豹护眼大师

-------------------------------------------------------

- [**新版WPS建立右键新建菜单**](https://jingyan.baidu.com/article/3d69c5515d458cf0ce02d750.html) -百度经验

☞ **解决方法（一）**

>> 1.打开**开始**菜单-运行，输入: **regedit**，打开**注册表编辑器**。

>> 2.【操作方法】WPS添加“建立右键新建菜单”：

>>> 2.1 **WPS文字**的**默认文件类型**为*.wps

>>>> **HKEY_CLASSES_ROOT**\ 下WPS文字的默认文件类型.wps点击刚才创建的“ShellNew”项，在右侧窗格，新建“字符串值”，请改名为“ **NullFile**”。<br>
>>>> 在**HKEY_CLASSES_ROOT\.wps**下的主键（也称为“项”）“**KWPS.Document.9**”下新建一个主键（项），并改名为“ **ShellNew** ”。<br>
>>>> (回到桌面，F5刷新桌面，打开一次鼠标右键新建菜单，然后取消，再次打开新建菜单时会发现已经出现一个“WPS文字 文档”项目。<br>
>>>> 如果没有出现，可以尝试重启电脑。)

>>> 2.2 **WPS表格**和**WPS演示**的**默认文件类型**分别**为*.et和*.dps**

>>>> **HKEY_CLASSES_ROOT\.et** ，在**KET.Workbook.9**下新建**ShellNew**，并在右侧窗格新建** NullFile **;<br> 
>>>> **HKEY_CLASSES_ROOT\.dps** ，在**KWPP.Presentation.9**下新建**ShellNew**，并在右侧窗格新建**NullFile** 。

☞ **解决方法（二）**

> <img src="https://github.com/taoste/Hello-World/blob/master/Tools/%E9%87%91%E5%B1%B1&%E7%8C%8E%E8%B1%B9/Win10-WPS-SoS.png?raw=true" title="新版WPS建立右键新建菜单的解决方案"  />

-------------------------------------------------------
