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
---------------------------------------

<img scr="https://raw.githubusercontent.com/taoste/Hello-World/master/Tools/Microsoft%20Windows%2010/%E8%AE%BE%E7%BD%AE%E9%94%AE%E7%9B%98%E8%B0%83%E8%8A%82%E9%9F%B3%E9%87%8F/Realtek.jpg"/>
