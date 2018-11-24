# 首先感谢 [Google Hosts](https://github.com/googlehosts/hosts) 组织提供本 [hosts](https://github.com/googlehosts/hosts/blob/master/hosts-files/hosts)
[![doodle]][doodle-story]

[doodle]: https://www.google.com/logos/doodles/2018/googles-20th-birthday-6342583134453760-2xa.gif "Google 生日快乐!"
[doodle-story]: https://www.google.com/doodles/googles-20th-birthday

|    [Telegram群][telegram-group-link]     | [Telegram通知频道][telegram-channel-link]  |  [hosts自动生成][travis-link]  |    [镜像hosts][mirror-link]    |
|                  :---:                   |                   :---:                    |             :---:              |             :---:              |
| [![telegram-badge]][telegram-group-link] | [![telegram-badge]][telegram-channel-link] | [![travis-badge]][travis-link] | [![mirror-badge]][mirror-link] |

[telegram-badge]: https://img.shields.io/badge/Google%20Hosts-Telegram-brightgreen.svg?style=flat-square
[telegram-group-link]: https://t.me/googlehosts
[telegram-channel-link]: https://t.me/googlehostsnews
[travis-badge]: https://img.shields.io/travis/googlehosts/hosts/hosts-source.svg?style=flat-square
[travis-link]: https://travis-ci.org/googlehosts/hosts
[mirror-badge]: https://cloud.githubusercontent.com/assets/7419875/21286217/c6642eb2-c488-11e6-94b1-8ad01d31ac9d.png
[mirror-link]: https://coding.net/u/scaffrey/p/hosts/git

我们立足于美利坚合众国，对全球华人服务，受北美法律保护。版权所有，未经授权禁止复制或建立镜像。

## 如何贡献

`hosts`等文件是由程序自动生成的，如要改变其内容，请修改`hosts-source`分支下的`hosts.yml`，具体说明见该分支下的`README`。

## 使用条款

- 本项目的hosts，README，wiki等资源基于一个[修改版的Hosts license协议](https://github.com/googlehosts/hosts/blob/master/LICENSE)发布（主要增加了SATA协议），这意味着你可以拷贝、再发行本项目的内容, 但是你将必须：
  - 使用**完全相同**的条款和格式发布。
  - 提供原作者信息以及协议声明。
  - 同时你也**不能将本项目用于商业用途**，凡是**任何盈利的活动皆属于商业用途**。
  - 当你使用了使用SATA的开源软件或文档的时候，在遵守MIT许可证的前提下，你应该马不停蹄地给你所使用的开源项目“点个赞”，比如GitHub上的star，然后你应该感谢这个帮助了你的开源项目的作者，作者信息可以在许可证头部的版权声明部分找到。

- 本项目的所有代码除另有说明外，均基于MIT License发布，具体请看`hosts-master`分支下的[LICENSE](https://github.com/googlehosts/hosts/blob/hosts-source/LICENSE)。

- 此处的文字仅用于说明，条款以LICENSE文件中的内容为准。

- 请在遵守当地相关法律法规的前提下使用本项目，由此产生的问题我们不负任何责任。

-------------------------------------------------

hosts所在文件夹：
> Windows 系统hosts位于 **C:\Windows\System32\drivers\etc\hosts**
> 
> Android（安卓）系统hosts位于 **/etc/hosts**
> 
> Mac（苹果电脑）系统hosts位于 **/etc/hosts**
> 
> iPhone（iOS）系统hosts位于 **/etc/hosts**
> 
> Linux系统hosts位于 **/etc/hosts**
> 
> 绝大多数Unix系统都是在 **/etc/hosts**
> 
你也可以用Notepad++ 自行转换文本编码和换行符格式。( 运行命令 notepad C:\Windows\System32\drivers\etc\hosts )

> 若更新后，hosts 没有立即生效，请重置网络：
> 在系统设置内开关网络，或启用禁用飞行模式，或者重启、刷新DNS缓存、浏览器缓存。

 

注意：
> 目前Google只能用hk的域名，即：https://www.google.com.hk
> 
> 由于 Apple 的限制，以上域名在 iOS 平台一律无法使用。
> 
> 本hosts需要开启Chrome QUIC 白名单，开启教程 [**点击这里**](https://github.com/googlehosts/hosts/wiki/Google-Chrome-QUIC-白名单添加方法)
> 
> 谷歌学术：https://scholar.google.com/
> 谷歌香港：https://www.google.com.hk/ncr
> 
> 
> 
> 另外可能有的地区&网络（铁通、联通）hosts无法正常使用，这个不是你我能左右的！
> 建议不要使用国产浏览器，国产软件也是，特别是360，因为国产浏览器即使你使用https
> 它也会强制你使用默认http，还有就是会上传用户数据，尽可能使用 [**Chrome**](https://chrome.google.com/)
> 下载&修改hosts安全软件可能会“报毒”（误报）你可以暂时退出或者添加信任即可！
> 
> 里面包含Windows & Mac 、Android & Linux请对号入座。
> 另外windows可以直接运行批处理命令，hosts会自动替换（如果无法自动替换，请用管理员身份权限手动修改）
> **注意**：批处理命令会直接覆盖现有hosts，如现有hosts内容重要的话请备份后再使用，或者手动修改！
