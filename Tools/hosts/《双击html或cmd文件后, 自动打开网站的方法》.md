# 《[**双击html或cmd文件后, 自动打开网站的方法**](https://blog.csdn.net/bjarnecpp/article/details/93479694)》 - CSDN博客

- 直接跳转

>> 复制下列代码, 保存文件名xxx.html或者cmd, 之后双击文件名, 即可自动打开网页

> 方法1

>>保存为xxx.html

```
<script language="javascript" type="text/javascript">   
// 以下方式直接跳转  
window.location.href='http://www.weather.com.cn/forecast/';  
</script> 
```

> 方法2
>> 保存为xxx.html

```
<head>  
<!-- 以下方式定时转到其他页面 -->  
<meta http-equiv="refresh" content="5;url=http://www.weather.com.cn/forecast/">   
</head> 
```

> 方法3
>> 保存为xxx.html

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
</head>
<body>
    <script>
    <!-- 添加URL到下面 -->
        window.location.href = "http://www.weather.com.cn/forecast/";
    </script>
</body>
</html>
```

> 方法4
>> 保存为xxx.cmd或者xxx.cmd
```
@ECHO off
START http://www.cma.gov.cn/
REM explorer http://www.cma.gov.cn/
REM start chrome.exe "http://www.cma.gov.cn/"
REM START iexplore.exe "http://www.cma.gov.cn/"
```

- 定时跳转

> 方法1
>> 保存为xxx.html.
```
<script language="javascript" type="text/javascript">   
// 以下方式定时跳转, 5s 后跳转
setTimeout("javascript:location.href='http://www.weather.com.cn/forecast/'", 5000);   
</script>  
```

> 方法2
>> 保存为xxx.html.
```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
	window.onload = function(){
		var time = 5;
		var secondEle = document.getElementById("second");
		var timer = setInterval(function(){
			secondEle.innerHTML = time;
			time--;
			if(time==0){
				clearInterval(timer);
				location.href="http://www.weather.com.cn/forecast/";
			}
				
		},1000);
	}
</script>
</head>
<body>
	<span style="color:red" id="second">5</span>秒钟后跳转，如不跳转点击<a href="http://www.weather.com.cn/forecast/">这里</a>!
</body>
```
————————————————

版权声明：本文为CSDN博主「兴趣斗士」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。

原文链接：https://blog.csdn.net/bjarnecpp/article/details/93479694
