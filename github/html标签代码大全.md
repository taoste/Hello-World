- [**html标签代码大全**](https://www.cwhello.com/3183.html) | 重蔚自留地

**结构性定义**:

```

文件类型 <html></html> （放在档案的开头与结尾）
文件主题 <title></title> （必须放在「文头」<head></head>区块内）
文头 <head></head> （描述性资料，像是「主题」）
文体 <body></body> （文件本体）

（由浏览器控制的显示风格）
标题 <h?></h?> （从1到6，有六层选择如h1 h2 h3 h4）
标题的对齐 <h? align=left|center|right></h?>
区分 <div></div>
区分的对齐 <div align=left|right|center|justify></div>
引文区块 <blockquote></blockquote> （通常会内缩）
强调 <em></em> （通常会以斜体显示）
特别强调 <strong></strong> （通常会以加粗显示）
引文 <cite></cite> （通常会以斜体显示）
码 <code></code> （显示原始码之用）
样本 <samp></samp>
键盘输入 <kbd></kbd>
变数 <var></var>
定义 <dfn></dfn> （有些浏览器不提供）
地址 <address></address>
大字 <big></big>
小字 <small></small>
```
**与外观相关的标签**:
（作者自订的表现方式）

```
b加粗 <b></b>
i斜体 <i></i>
底线 <u></u> （下划线 对应css下划线）
删除线 <s></s> （尚有些浏览器不提供）
下标 <sub></sub>
上标 <sup></sup>
打字机体 <tt></tt> （用单空格字型显示）
预定格式 <pre></pre> （保留文件中空格的大小）
预定格式的宽度 <pre width=?></pre>（以字元计算）
向中看齐 <center></center> （文字与图片都可以）
闪耀 <blink></blink> （有史以来最被嘲弄的标签）

字体大小font标签 <font size=?></font>（从1到7）
改变字体大小 <font size=+|-?></font>
基本字体大小 <basefont size=?> （从1到7; 内定为3）
字体颜色 <font color='#$$$$$$'></font>
```
**连结与图形**:

```
连结 <a href='/url'></a>
连结到锚点 <a href='url#***'></a>（如果锚点在另一个档案）
<a href='#***'></a> （如果锚点目前的档案）
连结到目的视框 <a href='/url' target='***'></a>
设定锚点 <a name='***'></a>

图形 <img src='/url'>
图形看齐方式 <img src='/url' align=top|bottom|middle>
图形看齐方式 <img src='/url'
align=left|right|texttop|absmiddle|baseline|absbottom>
取代文字 <img src='/url' alt='***'> （如果没有办法显示图形则显示此文字）
点选图 <img src='/url' ismap> （需要cgi程式）
n2.0 点选图 <img src='/url' usemap='url'>
n2.0 地图 <map name='***'></map>（描述地图）
n2.0 段落 <area shape='rect' coords=',,,' href='/url'|nohref>

3.0 大小 <img src='/url' width='?' height='?'>（以pixels为单位） n1.0 图形边缘 <img src='/url' border=?> （以pixels为单位）
n1.0 图形边缘空间 <img src='/url' hspace=? vspace=?> （以pixels为单位）
n1.0 低解析度图形 <img src='/url' lowsrc='/url'>
n1.1 用户端拉 <meta http-equiv='refresh' content='?; url=url'>（使用端自动更新 ）
n2.0 内嵌物件 <embed src='/url'> （将物件插入）
n2.0 内嵌物件大小 <embed src='/url' width='?' height='?'>
```
