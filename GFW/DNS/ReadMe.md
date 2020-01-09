- Windows 用户 一键更改dns方法：

>> 1、打开记事本

>> 2、Copy 下面的字符，并将字符内 ***.***.***.*** 替换成自己 ip 以及 dns

>> 3、保存记事本

>> 4、更改记事本后缀为: .BAT

> 搞定！

```
@echo off
cmd /c netsh interface ip set address name=”本地连接” source=static addr=***.***.***.*** mask=***.***.***.*** gateway=***.***.***.*** gwmetric=1
cmd /c netsh interface ip set dns name=”本地连接” source=static addr=***.***.***.***
cmd /c netsh interface ip add dns name=”本地连接” addr=***.***.***.*** index=2
echo ————————————————-
echo Current ip address:
ipconfig /all
echo ————————————————-
```

》2014-11-12 ：《[修改DNS防黑客盗号，提升上网速度](https://geek.wasai.org/dns/)》 – [极客电台](https://geek.wasai.org/)  
>> ( 我是王掌柜 – [新闻酸菜馆](https://since1989.org/) | [极客电台](https://geek.wasai.org/) | [自媒体联盟](https://wasai.org/) )
