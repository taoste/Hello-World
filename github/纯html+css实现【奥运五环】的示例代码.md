<details>
    <summary>
<a href="https://www.jb51.net/web/783746.html">纯html+css实现奥运五环的示例代码</a>_HTML/Xhtml_网页制作_脚本之家 (jb51.net)<br>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<a href="https://jsbin.com/duhubis/edit?html,css,output">JS Bin - Collaborative JavaScript Debugging<br>
<img class="bottom"  src="https://go.choong.net/html/5/5huan.png" height="15%" width="15%"></a>
</blockquote><br>
 </summary>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;!DOCTYPE html&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;html&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;head&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;meta charset="utf-8"&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;meta name="viewport" content="width=device-width"&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;title&gt;JS Bin&lt;/title&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;style&gt;&nbsp;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; body {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; margin: 0;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .container {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 500px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; height: 200px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; position: relative;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .ring {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; width: 100px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; height: 100px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-radius: 50%;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; position: absolute;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-style: solid;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-width: 10px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .blue {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-color: #0180C3;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; top: 0;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; left: 0;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: 0;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .yellow {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-color: #FEB131;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; left: 70px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; top: 60px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .yellow1 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: 1;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(0 0, 100% 100%, 0 100%);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .yellow2 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: -1;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(0 0, 100% 100%, 100% 0);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .black {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-color: black;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; left: 140px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; top: 0px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .black1 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: -2;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(0 0, 100% 0, 0 100%);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .black2 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: 0;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(100% 0, 100% 100%, 0 100%);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .green {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-color: #059341;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; left: 210px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; top: 60px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .green1 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: 1;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(0 0, 100% 100%, 0 100%);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .green2 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: -1;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(0 0, 100% 100%, 100% 0);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .red {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; border-color: #FF0000;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; left: 280px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; top: 0px;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .red1 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: -2;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(0 0, 100% 0, 0 100%);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<br>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; .red2 {</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z-index: 0;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clip-path: polygon(100% 100%, 100% 0, 0 100%);</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &nbsp; &nbsp; &nbsp; }</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;/style&gt;&nbsp;</blockquote>
</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;/head&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;body&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;div class="container"&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring blue"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring yellow yellow1"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring yellow yellow2"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring black black1"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring black black2"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring green green1"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring green green2"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring red red1"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;div class="ring red red2"&gt;&lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&nbsp; &lt;/div&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;/body&gt;</blockquote>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">&lt;/html&gt;</blockquote>
</blockquote>
</details>
