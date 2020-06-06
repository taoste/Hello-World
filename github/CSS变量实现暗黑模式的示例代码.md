- **Twitter** : Barret李靖@[Barret_China](https://twitter.com/Barret_China/) · [上午1:31 · 2020年6月6日](https://twitter.com/Barret_China/status/1269079416778321920)
> 一句代码实现站点暗黑模式的调整：
```
body {
  filter: invert(100%) hue-rotate(180deg);
}
```
>大部分浏览器支持，https://francoisbest.com/posts/2020/dark-mode-for-excalidraw ，文章中的 Demo 可以直接测试查看效果。

>> 宫不上叔@gongbaodd · [上午3:19 · 2020年6月6日](https://twitter.com/gongbaodd/status/1269106580915548161) 回复: @Barret_China 》可是照片不都反相了？

>> vvtommy@vvtommy ·  [上午5:41 · 2020年6月6日](https://twitter.com/vvtommy/status/1269142375986630656) 回复: @gongbaodd 和 @Barret_China 》可以考虑再转回来
```
img, video {
  filter: invert(100%) hue-rotate(180deg);
}
```
- 《[CSS变量实现暗黑模式的示例代码](https://www.jb51.net/css/716457.html)》_CSS教程_CSS_网页制作_脚本之家 
