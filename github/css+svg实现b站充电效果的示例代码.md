- 《[css+svg实现b站充电效果的示例代码](https://www.jb51.net/css/720318.html)》_CSS教程_CSS_网页制作_脚本之家  

<p>全部的代码</p>
<div class="jb51code">
<pre class="brush:xhtml;">
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt;
  &lt;style&gt;
    body {
      margin: 0;
      padding: 0;
      background-color: #eee;
    }
    /* 设置白色容器 */
    #con {
      width: 350px;
      height: 85px;
      background-color: #fff;
      position: relative;
      border-radius: 4px;
      margin:50px auto;
    }
    /* 设置文本内容容器 */
    #TA-con {
      width: 157px;
      height: 50px;
      background-color: #f25d8e;
      box-shadow: 0 4px 4px rgba(255, 112, 159, .3);
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
      border-radius: 4px;
      cursor: pointer;
    }
    /* 设置文本居中容器 */
    #text-con {
      width: 100px;
      height: 100%;
      margin: 0 auto;
      position: relative;
    }
    /* 做一个小闪电 */
    #linght {
      width: 0;
      height: 0;
      position: absolute;
      top: 36%;
      left: 4px;
      border-color: transparent;
      border-style: solid;
      border-width: 10px;
      border-top: 10px solid #fff;
      border-radius: 4px;
      transform: rotate(-55deg);
    }
    #linght::after {
      position: absolute;
      top: -13px;
      left: -11px;
      content: &quot;&quot;;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      border-width: 10px;
      border-top: 10px solid #fff;
      transform: rotate(180deg);
      border-radius: 4px;
    }
    /* 文字 */
    #TA {
      float: right;
      line-height: 50px;
      font-size: 15px;
      color: #fff;
    }
    #TA-con:hover {
      background-color: #ff6b9a;
    }
    /* 创建图形容器 */
    #tube-con {
      width: 157px;
      height: 55px;
      position: absolute;
      right: -5px;
      top: 15px;
    }
    /* 对svg图形设置宽高 */
    svg {
      width: 100%;
      height: 100%;
    }
    /* 创建一个蒙版 宽度为0，当我hover充电框的时候，宽度展开 */
    #mask {
      width: 0px;
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      transition:all 0.5s;
    }
    /* 对蒙版的sbg单独设置宽高，保证宽度高低有一个固定值而不是百分比 */
    #mask svg {
      width: 157px;
      height: 55px;
    }
    /* 对充电框hover的时候开始动画，将粉色线条铺开 */
    #TA-con:hover+#tube-con&gt;#mask{
      width:157px;
    }
    /* 对充电框hover的时候开始动画，添加黄色快速移动的动画 */
    #TA-con:hover+#tube-con&gt;#orange-mask{
      animation: move1 0.5s linear 0.2s infinite;
    }
    #TA-con:hover+#tube-con&gt;#orange-mask svg{
      animation: movetwo 0.5s linear 0.2s infinite;
    }
    /* 创建黄色移动的蒙版 */
    #orange-mask{
      width: 18px;
      height: 100%;
      overflow: hidden;
      position:absolute;
      left:-15px;
      top:0px;
    }
    /* 创建黄色移动的内容 */
    #orange-mask svg {
      position: absolute;;
      top:0;
      left:15px;
      width: 157px;
      height: 55px;
    }
    @keyframes move1 {
      0%{
        left:-15px;
      }
      100%{
        left:140px;
      }
    }
    @keyframes movetwo {
      0%{
        left:15px;
      }
      100%{
        left:-140px;
      }
    }
    #people{
      position:absolute;
      right:10px;
      top:8px;
      font-size:12px;
      font-family:&quot;雅黑&quot;;
      color:#aaa;
    }
    #people&gt;b{
      color:#777;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id=&quot;con&quot;&gt;
    &lt;div id=&quot;TA-con&quot;&gt;
      &lt;div id=&quot;text-con&quot;&gt;
        &lt;div id=&quot;linght&quot;&gt;&lt;/div&gt;
        &lt;div id=&quot;TA&quot;&gt;为TA充电&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div id=&quot;tube-con&quot;&gt;
      &lt;svg viewBox=&quot;0 0 1028 385&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
        &lt;path d=&quot;M1 77H234.226L307.006 24H790&quot; stroke=&quot;#e5e9ef&quot; stroke-width=&quot;20&quot; /&gt;
        &lt;path d=&quot;M0 140H233.035L329.72 71H1028&quot; stroke=&quot;#e5e9ef&quot; stroke-width=&quot;20&quot; /&gt;
        &lt;path d=&quot;M1 255H234.226L307.006 307H790&quot; stroke=&quot;#e5e9ef&quot; stroke-width=&quot;20&quot; /&gt;
        &lt;path d=&quot;M0 305H233.035L329.72 375H1028&quot; stroke=&quot;#e5e9ef&quot; stroke-width=&quot;20&quot; /&gt;
        &lt;rect y=&quot;186&quot; width=&quot;236&quot; height=&quot;24&quot; fill=&quot;#e5e9ef&quot; /&gt;
        &lt;ellipse cx=&quot;790&quot; cy=&quot;25.5&quot; rx=&quot;25&quot; ry=&quot;25.5&quot; fill=&quot;#e5e9ef&quot; /&gt;
        &lt;circle r=&quot;14&quot; transform=&quot;matrix(1 0 0 -1 790 25)&quot; fill=&quot;white&quot; /&gt;
        &lt;ellipse cx=&quot;790&quot; cy=&quot;307.5&quot; rx=&quot;25&quot; ry=&quot;25.5&quot; fill=&quot;#e5e9ef&quot; /&gt;
        &lt;circle r=&quot;14&quot; transform=&quot;matrix(1 0 0 -1 790 308)&quot; fill=&quot;white&quot; /&gt;
      &lt;/svg&gt;
      &lt;div id=&quot;mask&quot;&gt;
        &lt;svg viewBox=&quot;0 0 1028 385&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
          &lt;path d=&quot;M1 77H234.226L307.006 24H790&quot; stroke=&quot;#f25d8e&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;path d=&quot;M0 140H233.035L329.72 71H1028&quot; stroke=&quot;#f25d8e&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;path d=&quot;M1 255H234.226L307.006 307H790&quot; stroke=&quot;#f25d8e&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;path d=&quot;M0 305H233.035L329.72 375H1028&quot; stroke=&quot;#f25d8e&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;rect y=&quot;186&quot; width=&quot;236&quot; height=&quot;24&quot; fill=&quot;#f25d8e&quot; /&gt;
          &lt;ellipse cx=&quot;790&quot; cy=&quot;25.5&quot; rx=&quot;25&quot; ry=&quot;25.5&quot; fill=&quot;#f25d8e&quot; /&gt;
          &lt;circle r=&quot;14&quot; transform=&quot;matrix(1 0 0 -1 790 25)&quot; fill=&quot;white&quot; /&gt;
          &lt;ellipse cx=&quot;790&quot; cy=&quot;307.5&quot; rx=&quot;25&quot; ry=&quot;25.5&quot; fill=&quot;#f25d8e&quot; /&gt;
          &lt;circle r=&quot;14&quot; transform=&quot;matrix(1 0 0 -1 790 308)&quot; fill=&quot;white&quot; /&gt;
        &lt;/svg&gt;
      &lt;/div&gt;
      &lt;div id=&quot;orange-mask&quot; &gt;
        &lt;svg viewBox=&quot;0 0 1028 385&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
          &lt;path d=&quot;M1 77H234.226L307.006 24H790&quot; stroke=&quot;#ffd52b&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;path d=&quot;M0 140H233.035L329.72 71H1028&quot; stroke=&quot;#ffd52b&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;path d=&quot;M1 255H234.226L307.006 307H790&quot; stroke=&quot;#ffd52b&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;path d=&quot;M0 305H233.035L329.72 375H1028&quot; stroke=&quot;#ffd52b&quot; stroke-width=&quot;20&quot; /&gt;
          &lt;rect y=&quot;186&quot; width=&quot;236&quot; height=&quot;24&quot; fill=&quot;#ffd52b&quot; /&gt;
          &lt;ellipse cx=&quot;790&quot; cy=&quot;25.5&quot; rx=&quot;25&quot; ry=&quot;25.5&quot; fill=&quot;#ffd52b&quot; /&gt;
          &lt;circle r=&quot;14&quot; transform=&quot;matrix(1 0 0 -1 790 25)&quot; fill=&quot;white&quot; /&gt;
          &lt;ellipse cx=&quot;790&quot; cy=&quot;307.5&quot; rx=&quot;25&quot; ry=&quot;25.5&quot; fill=&quot;#ffd52b&quot; /&gt;
          &lt;circle r=&quot;14&quot; transform=&quot;matrix(1 0 0 -1 790 308)&quot; fill=&quot;white&quot; /&gt;
        &lt;/svg&gt;
      &lt;/div&gt;
      &lt;p id=&quot;people&quot;&gt;共 &lt;b&gt;0&lt;/b&gt; 人&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
</div>
