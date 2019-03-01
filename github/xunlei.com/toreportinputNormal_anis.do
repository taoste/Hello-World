<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>中国互联网违法和不良信息举报中心</title>
<link href="css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.min.js"></script>
<!--滚动条插件-->
<link rel="stylesheet" href="css/nanoscroller.css"> 
<script type="text/javascript" src="js/jquery.nanoscroller.js"></script> 
<script type="text/javascript">
	$(function(){
		$(".nano").nanoScroller({alwaysVisible: false});
	});
</script>
<style type="text/css">
.nano {width: 100%; height: 300px;}
body {
	background-color: #fff;
	background-image: none;
	}
</style>
	<style>
		* {margin:0;padding:0;}
		ul {list-style-type:none;}
		a {font-family: 宋体;line-height:22px;font-size: 12px;color:#000;text-decoration:none;}
		a:hover {text-decoration:underline;}
		img {border:0;}
		body {font-family: 宋体;font-size: 12px;line-height:22px;color:#000; }

		.kj { width:980px; margin:auto; height:1%; overflow:hidden; }
		.kj h1 { font-family:微软雅黑; font-size:30px; font-weight:normal; line-height:70px; text-align:center}

		.kj p { width:830px; padding-bottom:15px; color:#909090;}
		.kj p a { color:#909090;}
		.kj ul { width:720px; margin:30px 0 50px 0;}
		.kj li { line-height:30px; font-size:14px; font-family:"宋体";}
		.kj li span { float:right; line-height:30px; color:#909090;}
		.kj li a { line-height:30px; font-size:14px; font-family:"宋体";}
		.box1 { /*border:1px solid #C8C8C8;*/ padding:20px 89px; width:800px; margin:auto;}
		.box1 h1 { font-family:微软雅黑; font-size:24px; font-weight:normal; line-height:70px; text-align:center;color:#0096e0;}
		.zw {padding: 0 30px; padding-top:30px; font-family:微软雅黑; font-size:16px; line-height:48px; color:#000000;}
		.zw a { font-family:微软雅黑; font-size:16px;  color: rgb(0, 0, 255);}
		.zw p a.btn-a{padding-top:20px;display: inline-block;}
		.zw p{text-indent:2em;}
		.cont-a a{display:inline-block;}
		.cont-a .a1{margin-right:105px;}
		.cont-a{margin-bottom:20px;}
	</style>
	<script>
	
	function redirectUrl (args) 
    {
		$("#typecatalog").val(args);
		$("#typecatalogform").submit();
    }
	</script>
</head>
<body>
	<div>
		<iframe src="http://www.12377.cn/node_543842.htm" frameborder="0" width="100%" height="261px" scrolling="no" marginheight="0"></iframe>
	</div>
	<!--<div class="kj">
		<p>
			<a href="http://www.12377.cn/">首页</a> > 举报须知 > 在线举报
		</p>
	</div>-->
	<form action="toreportinputNormal.do" id="typecatalogform" method="post">
		<input type="hidden" id="typecatalog" name="typecatalog"/>
	</form>
	<div id="login_body">
		<div class="box1" style="background:#ededed;">
		<!-- <h1>违法和不良信息类别</h1> -->
		<div class="zw">
			<div class="cont-a">
				<a href="javascript:void(0);" onclick="return redirectUrl('0102');" class="a1"><img src="images/icon_political.png" alt=""></a>
				<a href="javascript:void(0);" onclick="return redirectUrl('0108');" class="a1"><img src="images/icon_violence.png" alt=""></a>
				<a href="rumourNotice.html"><img src="images/icon_rumor.png" alt=""></a>
			</div>
			<div class="cont-a">
				<a href="javascript:void(0);" onclick="return redirectUrl('0109');" class="a1"><img src="images/icon_porn.png" alt=""></a>
				<a href="javascript:void(0);" onclick="return redirectUrl('0106');" class="a1"><img src="images/icon_vulgar.png" alt=""></a>
				<a href="javascript:void(0);" onclick="return redirectUrl('0103');"><img src="images/icon_gambling.png" alt=""></a>
			</div>
			<div class="cont-a">
				<a href="javascript:void(0);" onclick="return redirectUrl('0104');" class="a1"><img src="images/icon_fraud.png" alt=""></a>
				<a href="tortNotice.html" class="a1"><img src="images/icon_infringement.png" alt=""></a>
				<a href="javascript:void(0);" onclick="return redirectUrl('0110');"><img src="images/icon_other.png" alt=""></a>
			</div>
			<div class="cont-a" style="text-align:center">
				<a href="http://www.12377.cn/"><img src="images/icon_toindex.png" alt=""></a>
			</div>
		</div>
	</div>
	</div>
	<div  style="text-align:center;">
		<iframe id="ifrfooter" src="http://www.12377.cn/node_543843.htm" width="980" height="250" frameborder="0" scrolling="no" marginheight="0"></iframe>
	</div>
</body>
</html>