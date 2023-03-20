<li><a href="https://bbs.pcbeta.com/viewthread-1923997-1-1.html"><strong>Win 11 出现：不满足系统要求</strong></a> - 远景论坛 - 微软极客社区</li>
修改去掉。具体如下：</br>
如何永久删除 Windows 11 的“未满足系统要求”水印</br>
一、快速方法：
<blockquote>
reg add “HKEY_CURRENT_USER\Control Panel\UnsupportedHardwareNotificationCache” /v SV2 /t REG_DWORD /d 0 /f
</blockquote>
打开运行命令，粘贴以下内容，然后回车，完成。</br>
</br>
二、修改注册表：
<blockquote>
#右键点击开始菜单选择运行或使用快捷键Win+R打开运行 regedit </br>
#输入打开注册表</br>
#转到以下注册表路径</br>
<blockquote>
计算机\HKEY_CURRENT_USER\Control Panel\
</blockquote>
# 检查该路径下是否有下面的项
<blockquote>
UnsupportedHardwareNotificationCache
</blockquote>
#如果没有此项请右键点击Control Panel文件夹选择新建项并重命名
<blockquote>
UnsupportedHardwareNotificationCache
</blockquote>
#接着打开DWORD32位值SV2(还有SV1值)</br>
#将其键值由1改为0保存即可</br>
</br>
#如果没有SV2值可以新建DWORD32位值并将其重命名为SV2</br>
0 #禁用桌面水印</br>
1 #开启桌面水印</br>
#操作完成后关闭注册表并重启资源管理器即可，无需重启系统。
<blockquote>
重启资源管理器的方法: 1、在桌面状态下，同时按下【Ctrl+Shift+Esc】，调出Windows资源管理器。 2、找到【WIndows资源管理器】，右击重新启动。 3、也可右击，点击“结束任务”。</blockquote>
</blockquote>
