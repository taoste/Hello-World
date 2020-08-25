
<SCRIPT language=JavaScript>
function checkchar(theelement)
{//含有非法字符 返回 false
   text="1234567890";
   for(i=0;i<=theelement.length-1;i++)
   {
      char1=theelement.charAt(i);
      index=text.indexOf(char1);
      if(index==-1)
      {
        return false; 
      }
   }
   return true;
}

function Checkdoor(){
	if(form.number1.value==""){
		alert("请输入您要查询的防伪号码！");
		form.number1.focus();
	 	return false;
		}
		else
		{
			if(form.number1.value.length < 5){
				alert("第一个输入框位数不够，少于5位编码！");
				form.number1.focus();
				return false;
			}
			if(checkchar(form.number1.value)!=true){
				alert("第一个输入框含有非法字符,请修改!");
				form.number1.focus();
				return false;
			}
		}
	
	if(form.number2.value.length < 4){
		alert("第二个输入框位数不够，少于4位编码！");
		form.number2.focus();
		return false;
		}
		else
		{
		if(checkchar(form.number2.value)!=true){
			alert("第二个输入框含有非法字符,请修改!");
			form.number2.focus();
			return false;
		}
	}
	
	if(form.number3.value.length < 5){
		alert("第三个输入框位数不够，少于5位编码！");
		form.number3.focus();
		return false;
		}
		else
		{
		if(checkchar(form.number3.value)!=true){
			alert("第三个输入框含有非法字符,请修改!");
			form.number3.focus();
			return false;
		}
	}
	
	if(form.number4.value.length < 4){
		alert("第四个输入框位数不够，少于4位编码！");
		form.number4.focus();
		return false;
	}else{
		if(checkchar(form.number4.value)!=true){
			alert("第四个输入框含有非法字符,请修改!");
			form.number4.focus();
			return false;
		}
	}
	
	
	window.open("","vote","width=615,height=380,left="+(screen.width-400)/2+",top="+(screen.height-400)/2+"");
	
	
}
</script>
<META content="MSHTML 6.00.2800.1476" name=GENERATOR>
  <meta charset="UTF-8">
<title>夏娃之秀品牌官方网站-夏娃魔力挺</title>
  <link rel="icon" href="favicon/favicon-128×128.ico" > <!-- Microsoft 徽标 --><!-- IE地址栏前换成自己的图标 -->
  <link href="favicon/favicon-128×128.ico" rel="Bookmark">  <!-- 可以在收藏夹中显示出你的图标 -->
<link href="css/text.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
.style2 {	FONT-WEIGHT: bold; FONT-SIZE: 16px
}
-->
</style>
<style type="text/css">
<!--
.STYLE3 {
	color: #FFFFFF;
	font-size: 12px;
}
.style2 {FONT-WEIGHT: bold; FONT-SIZE: 16px
}
-->
</style>

      <style>  /* 文本垂直对齐图像 https://www.w3cschool.cn/tryrun/showhtml/trycss_vertical-align */
	    img.top {vertical-align:text-top;}
	    img.bottom {vertical-align:text-bottom;}
       </style>
</HEAD>
<body leftmargin="0" topmargin="0" bgcolor="#502f29">
<table width="200" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="846" height="82">
      <param name="movie" value="flash/top.swf" />
      <param name="quality" value="high" />
      <embed src="flash/top.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="846" height="82"></embed>
    </object></td>
  </tr>
</table>
<table width="846" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="312" height="597" valign="top"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="312" height="597">
      <param name="movie" value="flash/right_anli.swf" />
      <param name="quality" value="high" />
      <embed src="flash/right_anli.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="312" height="597"></embed>
    </object></td>
    <td width="534" valign="top"><table width="534" height="50" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td valign="bottom"><table width="94%" height="33" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td align="right"><span class="STYLE3">首页 &gt; 防伪查询 </span></td>
          </tr>
        </table></td>
      </tr>
    </table>
        <table width="534" height="46" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="503" background="images/neiye1_04.jpg"><img src="images/anli.jpg" width="144" height="46" /></td>
            <td width="31"><img src="images/neiye1_06.jpg" width="31" height="46" /></td>
          </tr>
        </table>
      <table width="534" height="46" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="503" valign="top"><table width="200" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td><img src="images/neiye1_07.jpg" width="519" height="13" alt="" /></td>
                </tr>
              </table>
                <table width="519" height="472" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="middle" bgcolor="#FFFFFF"><table width="363" height="468" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                          <td width="363" height="145" valign="top"><p class="text1">&nbsp;<FORM id=form name=form onSubmit="return Checkdoor()" action="http://jsp.yd315.com/fwcx/Fwqyurl.php" method=post target=vote>
                            <TABLE width="293" height=71  border=0 cellPadding=0 cellSpacing=0 style="FONT-SIZE: 9pt">
  <TBODY>
  	<TR><TD height="21" colspan="2"><span class="style2">请输入产品防伪查询码:</span></TD>
  	</TR>
	<TR><TD width="232" height="45">
		<INPUT class=input01 id=number1 onkeyup=if(this.value.length==5)document.form.number2.focus(); onmouseover=this.select() maxLength=5 size=5 name=number1>—
    	<INPUT class=input01 id=number2 onKeyUp=if(this.value.length==4)document.form.number3.focus(); onMouseOver=this.select() maxlength=4 size=4 name=number2>—
		<INPUT class=input01 id=number3 onkeyup=if(this.value.length==5)document.form.number4.focus(); onmouseover=this.select() maxLength=5 size=5 name=number3>—
		<INPUT class=input01 id=number4 onmouseover=this.select() maxLength=4 size=4 name=number4>
		<INPUT id=kind type=hidden value="FwChinese" name=kind>
		<INPUT id=main type=hidden value="" name=main>
		<INPUT id=hash type=hidden value="43821" name=hash></TD>
	  <TD width="61" height="45"><input name=submit type=image src="images/sousuo.gif" align="middle" border=0></TD>
	</TR>  
  </TBODY>
 </TABLE>
</FORM></p></td>
                      </tr>
                    <tr>
                      <td height="323" valign="top"><p class="contact_text">销售网点：<br>
                           <img class="bottom" src="images/tmall.ico" width="16" height="16" alt="" /> 夏娃之秀旗舰店：<a href="http://evescret.tmall.com/" target="_blank">http://evescret.tmall.com</a></p>
                      </td>
                    </tr>
                    </table></td>
                  </tr>
              </table></td>
            <td width="31">&nbsp;</td>
          </tr>
        </table>
      <table width="534" height="16" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="503" height="16" valign="top"><img src="images/neiye1_10.jpg" width="519" height="16" alt="" /></td>
            <td width="31">&nbsp;</td>
          </tr>
      </table></td>
  </tr>
</table>
<table width="846" height="52" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="right"><img src="images/neiye1_12.jpg" width="534" height="52" /></td>
  </tr>
</table>

</BODY></HTML>
