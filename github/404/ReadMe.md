- [Error.html](https://taoste.github.io/Hello-World/github/404/index.html) / [404.html](https://taoste.github.io/Hello-World/github/404/404.html) | 
[view-source](index.html) : https://www.58pic.com/404.html

打包下载：[View Raw](https://github.com/taoste/Hello-World/blob/master/github/404/404.7z) / [Download](
https://github.com/taoste/Hello-World/blob/master/github/404/404.7z?raw=true)

- [分享](https://mkblog.cn/556/):[一个仿 Windows 蓝屏的 404 页面](http://windowsblue404.mkblog.cn/) | [孟坤博客](https://mkblog.cn/) @[Github](https://github.com/mengkunsoft/)

- [404页面的自动重定向](https://meta.appinn.net/t/topic/19954) - 灌水聊天 - 小众软件官方论坛
<blockquote>
今天把Github Pages的某个原名是aaaa的目录修改成了bbbb，
相当于原来的example.github.io/aaaa/example.html 都要变成 example.github.io/bbbb/example.html 了
由于GH没有开放可配置的标准301重定向，所以只能用js来跳转了。然而一个目录下那么多的文件，总不能一个一个手工设置吧 :joy:
后来想了想，repo根目录有一个404.html，可以用它来曲线救火呀
  <code><pre>
window.onload=function() {
    var url = window.location.href
    switch (true) {
        case url.includes('/aaaa'):
            document.location = url.replace('/aaaa', '/bbbb')
            break
}
  </code></pre>
以后再改目录名就在下面新添一个case就好了
</blockquote> 

