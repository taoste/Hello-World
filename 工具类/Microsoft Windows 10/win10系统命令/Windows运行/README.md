运行：mstsc，远程桌面协助 （ C:\WINDOWS\system32\mstsc.exe ）

运行：ncpa.cpl，网络连接 （ %windir%\system32\ncpa.cpl ）

运行：desk.cpl，显示属性 ( %windir%\system32\desk.cpl )

运行：inetcpl.cpl，IE设置 ( %windir%\system32\inetcpl.cpl )

运行：powercfg.cpl，电源选项 ( %windir%\system32\powercfg.cpl )

运行：appwiz.cpl，程序和功能/卸载或更改程序 ( %windir%\system32\appwiz.cpl )

运行：intl.cpl，区域和语言选项/输入法选项 ( %windir%\system32\intl.cpl )

运行：sysdm.cpl， 系统属性,  ( %windir%\system32\sysdm.cpl )

运行：nusrmgr.cpl， 用户帐户管理,  ( %windir%\system32\nusrmgr.cpl )

运行：firewall.cpl，Windows Defender 防火墙,  ( %windir%\system32\firewall.cpl )


运行：osk，屏幕键盘 ( %windir%\system32\osk.exe )

Win10系统：一键打开 Windows 设置中心( Win + i ) 快捷键

一键休眠
> %windir%\System32\rundll32.exe powrprof.dll,SetSuspendState

一键锁屏(Win+L) 快捷键或可设为F2
> %windir%\System32\rundll32.exe user32.dll,LockWorkStation

%SystemRoot%\System32\SHELL32.dll

----------------------------------------------------------------------

- [最绿色最高效，用win+r启动常用程序和文档](http://xbeta.info/win-run.htm  ) – 善用佳软                   

> 本文可概括为一句话：“建立.lnk，改名.lnk以便于记忆和输入，集中lnk到某目录(如 C:\Windows)，加此目录到path变量”。

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


