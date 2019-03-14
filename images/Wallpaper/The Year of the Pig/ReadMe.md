
[**Windows 10 系列**](https://github.com/taoste/Hello-World/tree/master/Tools/Microsoft%20Windows%2010):

- [Windows10锁屏图片太漂亮，如何设为桌面背景呢？](https://zhuanlan.zhihu.com/p/27429896) - [知乎](https://zhuanlan.zhihu.com/)

 1.首先打开“文件资源管理器”，在地址栏输入下面的路径后回车。

【windows 10 锁屏壁纸 路径】
> C:\Users\%username%\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\

 2.点击开始菜单，输入cmd，打开“命令提示符”。输入下面的命令，修改锁屏壁纸文件夹中的文件扩展名为png。
> Ren C:\Users\%username%\AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets\*.* *.png

**❤壁纸资源：**

√ 【[The Year of the Pig](https://www.microsoft.com/zh-cn/p/the-year-of-the-pig/9nq9bf4q974d?ocid=ema_rmc_win_FY19Goodwill-hero-exclus-pos2-cta1&activetab=pivot:overviewtab)】 - Microsoft Store zh-CN
> 在这组包含 20 幅图像的免费 Windows 10 主题壁纸集中感受中国之美和2019猪年的欢乐氛围。 这些图像只可用作桌面壁纸。


---------------------------------------------------------------------------------------------------------


- 【 Windows10  “**一键锁屏(Win+L)** ” 桌面快捷方式 】
> 新建快捷方式，填写链接：rundll32.exe user32.dll,LockWorkStation （快捷键可设为：**F2**）
> 
> 例如：
> 
> %windir%\System32\rundll32.exe user32.dll,LockWorkStation
 
> 更多》[如何使用笔记本的快捷按钮调用Windows快捷键的功能](http://iknow.f5.lenovo.com.cn/detail/dc_C173291.html)-联想知识库

---------------------------------------------------------------------------------------------------------