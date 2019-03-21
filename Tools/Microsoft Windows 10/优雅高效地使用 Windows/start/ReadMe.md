- **开始菜单布局备份还原**

在WIn10系统中，我们可以在开始菜单上添加常用软件的磁贴，并可以随心摆放磁贴位置。

win10开始菜单布局备份还原的操作方法：

在Win10系统下，打开此电脑中的一个盘符，然后在空白处点击右键，在弹出菜单中选择新建/文件夹菜单项，建立一个新的文件夹；

把新建文件夹重命名为start（或其他）；

按下Win+R打开运行窗口，输入命令powershell，然后点击确定按钮；

这时就会打开Windows Powershell窗口，

在这里输入命令Export-startlayout –path c:\start\start.xml，

其中c：\start就是我们刚刚在上面建立的文件夹，你可以根据自己实际情况来设置相应的路径；

按下回车键后，就会在新文件夹中备份好开始菜单的布局文件；

如果需要恢复开始菜单布局的话，只需要再次打开Windows Powershell命令行窗口，

然后输入命令import-startlayout -layoutpath c:\start\start.xml -mountpath c:，按下回车键后，即可恢复布局！
