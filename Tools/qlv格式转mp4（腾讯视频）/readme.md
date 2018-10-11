- [【已解决】**qlv格式转mp4（腾讯视频）**](https://blog.csdn.net/guomutian911/article/details/72395707)  - CSDN博客
 
---------------------

关键来了，最后什么工具也没有，在cmd命令行下敲一小行代码就搞定了。

> copy /b *.tdl guo.mp4

具体步骤如下：


> 1，我们要显示隐藏文件。在计算机-文件夹选项中，显示隐藏的文件、文件夹和驱动器；

> 2，进入视频的节目缓存文件夹，在“vodcache”隐藏属性的文件夹下，可以看到许多.tdl文件，它们是视频的分段文件；

> 3，在Windows开始按钮搜索栏中，键入“cmd”，确定并进入，输入e: 回车，一直cd，最终找到存放.tdl分段原始文件目录，再输入命令“copy /b *.tdl guo.mp4”对这些*．tdl文件进行合并（文件名可自行设置），很快就可以得到一个MP4格式的视频文件。

<img src="https://img-blog.csdn.net/20170517160532838?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZ3VvbXV0aWFuOTEx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center?raw=true"/>


经测试这个MP4文件是普通视频文件，可正常播放。

---------------------

作者：guomutian911 

来源：CSDN 

原文：https://blog.csdn.net/guomutian911/article/details/72395707?utm_source=copy 

版权声明：本文为博主原创文章，转载请附上博文链接！


