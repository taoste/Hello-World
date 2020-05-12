- 《[**我的php学习第一天之HTML篇**](https://www.cwhello.com/91.html)》 - php教程,html教程 | 重蔚自留地

**B/S网络模式（结构）**

B/S，browser/Server浏览器/服务器结构。在这种模式下，客户端不需要安装任何的软件（除了浏览器软件），所有的其它的功能都集中到了服务器上。
客户端基本上零维护。

<a href="https://www.cwhello.com/91.html"><img src="https://www.cwhello.com/wp-content/uploads/2015/09/image002.jpg" border="0" title="image002"> </a>

<a href="https://www.cwhello.com/91.html"><img src="https://www.cwhello.com/wp-content/uploads/2015/09/image003.jpg" border="0" title="image003"> </a>

**HTML简介**

HTML，HyperText Markup Language超文本标注语言，是SGML的一个应用。是一种标准，一种规范，一种标志(标记)。

比如：< b > 重蔚自留地 < / b >

各种标记的作用：就是告诉浏览器这个内容该如何显示。

<a href="https://www.cwhello.com/91.html"><img src="https://www.cwhello.com/wp-content/uploads/2015/09/image006.jpg" border="0" title="image006"> </a>

静态网页的扩展名：.html   .htm

动态网页(包含服务器端程序)的扩展名：.php  .jsp  .aspx等

超文本：是指加了超链接的文本。

**HTML标记的格式**

双边标记：< 标记 属性1=“属性值1” 属性2=“属性值2” >内容< / 标记 >

举例：< font color=“red” size=“5” face=“黑体” >重蔚自留地< / font >

单边标记：< 标记 属性=“属性值” >

一个人有哪些特性：姓名、年龄、学历、毕业院校、身高、体重等

同理：人是一个类别，张三是类别中的一个具体的对象。

**书写HTML标记的规范**
```
1）HTML标记不区分大小写，建议大家使用小写，为了向后兼容。如：<font> <Font> <FONT> <fOnT>

2）一个标记可以有属性，也可以没有属性。如果有属性的话，属性和标记间用空格隔开(至少一个)，属性与属性之间用空格隔开。属性必须放在开始标记中，不能放在结束标记中。

比如：<font  size=“7”      face=“黑体”></font>

没有属性：<head>

3）属性值一般情况下，都需要加引号(不加也不为错)。

4）HTML的数值属性值，不需要加单位(px)，但CSS中的数值的属性值必须要加单位。

HTML中的写法：<table  width=“500”>

CSS中的写法：<table  style=“width:500px”>

5）标记之间可以嵌套，但只能是顺序嵌套，也就是一层套一层，不能交叉嵌套。
```

**一个网页的HTML结构**
```
<html>

<head>

<title>网页标题</title>

</head>

<body>

网页的主体内容

</body>

</html>

结构说明：

<html></html>当浏览器遇到该标记时，就把内容按网页格式来翻译。包含两个子标记：<head>和<body>

<head></head>定义网页文件头信息的，该标记中的内容在浏览器中是不可见，一般起一个特殊的作用。

<title></title>定义网页的标题的，是<head>的子标记。

<body></body>是网页的主体内容，网页中99%的内容或标记，都是放在<body>中。<body>中的内容是可见的。
```
**<body>的常用属性**
```
bgColor：设置网页背景颜色，比如：<body  bgColor=“red”>

background：设置网页的背景图片URL，比如：<body  background=“images/bg.gif”>
```

**HTML字体修饰标记**
```
<b></b>加粗    bold

<i></i>斜体     italic

<u></u>下划线   underline

<s></s>删除线   strike

<sup></sup> 上标

<sub></sub>  下标

<font></font>字体标记
```
< font >常用的属性
```
Size：字体大小，取值：1-7，1小7大。

Color：字体颜色，比如：red或RGB(255,0,0)或#FF0000

Face：字体类型，比如：face=“黑体”

举例：<font  size=“7” color=“red” face=“黑体”>内容</font>
```
<hr>水平线，是单边标记
```
常用的属性：

Size：水平线的粗细

Width：水平线的宽度

Color：水平线的颜色

noshade：纯色显示，不带阴影效果
```
**代码编辑器**

1）增强文本编辑器：Editplus  Notepad

特点：软件小、占用系统资源少、语法颜色

缺点：没有代码提示功能

2）IDE集成开发环境：Zend Studio

特点：软件较大、占用系统资源多、语法颜色、代码提示功能、PHP程序的调试功能、数据库配置等

缺点：收费

3）可视化的网页代码编辑工具：Dreamweaver

第一步：创建站点，站点——管理站点

一个站点，就是一个网站，一个网站由多个目录或文件构成。

<a href="https://www.cwhello.com/91.html"><img src="https://www.cwhello.com/wp-content/uploads/2015/09/image008.jpg" border="0" title="image008"> </a>


第二步：设置代码字号大小  CTRL+U  编辑——首选参数——字体

<a href="https://www.cwhello.com/91.html"><img src="https://www.cwhello.com/wp-content/uploads/2015/09/image010.jpg" border="0" title="image010"> </a>


第三步：设置新建网页时的默认编码：CTRL+U  编辑——首选参数——新建文档

<a href="https://www.cwhello.com/91.html"><img src="https://www.cwhello.com/wp-content/uploads/2015/09/image012.jpg" border="0" title="image012"> </a>

UTF-8是多国语言编码，只要你有相应的输入法，就能显示不同国家的语言。

