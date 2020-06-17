- [启用Edge的IE模式](http://bbs.pcbeta.com/viewthread-1839587-1-1.html) -远景论坛 - 微软极客社区

众所周知，IE模式曾经在Edge的某个版本出现过，然后很快就被微软下线了。

很多人对此表示非常遗憾，因为这个其实是一个非常实用的功能。

现在，IE模式已经在Edge中正式可用了！微软已经上线了相关指导说明，网址如下：

>> https://docs.microsoft.com/zh-cn/DeployEdge/edge-ie-mode

微软的指导说明比较生涩难懂，我自己照着实践了一下，基本熟悉了相关配置方法，所以今天就来分享一段人话版的IE模式配置说明。

**1.下载Microsoft Edge 策略模板**

下载地址：https://www.microsoftedgeinsider.com/zh-cn/enterprise

点击右侧按钮，下载策略文件，下载好后解压。

进入Windows-admx目录，找到目录下的msedge.admx和msedgeupdate.admx文件，

复制到C:\Windows\PolicyDefinitions；

回到刚刚的admx目录，找到zh-CN文件夹，

把文件夹中的两个adml文件复制到C:\Windows\PolicyDefinitions\zh-CN目录中。

**2.编辑企业模式站点列表**

这个列表定义了哪些网站用IE打开，以及用哪种IE模式打开。

这是一个xml文件，可以手动编辑，也可以使用Enterprise Mode Site List Manager编辑。

这里主要讲讲用Enterprise Mode Site List Manager如何编辑。

Enterprise Mode Site List Manager的使用说明如下：

https://docs.microsoft.com/zh-cn/internet-explorer/ie11-deploy-guide/use-the-enterprise-mode-site-list-manager

Enterprise Mode Site List Manager的下载地址如下：https://www.microsoft.com/en-us/download/details.aspx?id=49974

软件目前只有英文版本。安装完成后，点击软件主界面的Add按钮，开始添加网站。

在URL处填入网址。初步测试，不支持通配符。如果你想添加一系列网站：

比如，你想添加所有的xxxx.com（包括aaa.xxxx.com、bbb.xxxx.com等），直接填入xxxx.com即可。

**Compat Mode**

这个是选择让Edge模拟哪种IE进行网页显示。

默认选择是IE8企业模式，一般这个不建议修改，

因为经过我测试发现，默认模式虽然是IE8企业模式，

但是系统依然会根据网页的新老程度，智能地选择IE5-8之间的模式来显示网页，

仅当你发现默认模式下显示不正常的时候，才需要手动更改模式。

**Open In**

这里默认选IE11。如果选择Edge，目前也没观察到有什么区别。

编辑好后，点击File-Save to XML保存。

**3.启用策略Edge企业模式策略**

打开组策略编辑器（gpedit.msc），单击计算机配置 > 管理模板 > Microsoft Edge，

双击“配置Internet Explorer集成”，点击启用，选择“Internet Explorer模式”（注意不是IE11）。

双击“配置企业模式站点列表”，点击启用，并填入第2步中编辑好的列表文件的地址。

这个地址可以是以下三种位置之一：
```
 （推荐）HTTPS 位置：https://localhost:8080/sites.xml
  本地网络文件：\\network\shares\sites.xml
  本地文件：file:///c:/Users/.../Documents/sites.xml
```
填入后点击确定即可。

**IE企业模式策略**

到这一步其实就可以了。

如果你想让IE打开网站时也能根据网站智能匹配兼容模式（而不是通过IE的兼容性视图设置功能），则可以同时启用IE的企业模式。

单击计算机配置 > 管理模板 > Windows 组件 > Internet Explorer，

双击使用企业模式 IE 网站列表，填入编辑好的列表文件地址。

需要注意的是，一旦IE启用了企业模式，原来的IE兼容性视图设置列表中的设置就失效了。

为了防止这两个设置相互干扰，建议清空兼容性试图设置中的网站。

**4.使用Edge的IE模式**

打开Edge，约1分钟后，Edge会读取站点列表并同步策略。

打开列表中的网站时，地址栏左侧会显示IE图标。

通过图标可以查看当前时以哪一种兼容性模式显示网站的。

如果网站显示依然不正常，可以编辑站点列表更改兼容性模式。
