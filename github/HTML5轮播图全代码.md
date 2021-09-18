<div><a href="https://www.jb51.net/html5/772647.html">HTML5轮播图全代码_html5_网页制作_脚本之家 (jb51.net)</a><br></div><div><br></div><blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);"><details>
    <summary>代码：
 </summary>
<blockquote formatblock="1" style="margin: 0.8em 0px 0.8em 2em; padding: 0px 0px 0px 0.7em; border-left: 2px solid rgb(221, 221, 221);">
<code><pro>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>轮播图</title>
<style type="text/css">
    #box{
        width:100px;
        height:100px;
        border:1px solid black;
        position:relative;
        overflow:hidden;
    }
    #red{
        background-color:red;
        width:100px;
    }
    #green{
        background-color:green;
        width:100px;
    }
    #blue{
        background-color:blue;
        width:100px;
    }
    .slide{
        width:100px;
        height:100px;
        position:absolute;
    }
</style>
<script type="text/javascript">
    onload=function(){
        var arr = document.getElementsByClassName("slide");
        for(var i=0;i<arr.length;i++){
            arr[i].style.left = i*100+"px";
        }
    }
    function LeftMove(){
        var arr = document.getElementsByClassName("slide");//获取三个子div
        for(var i=0;i<arr.length;i++){
            var left = parseFloat(arr[i].style.left);
            left-=2;
            var width = 100;//图片的宽度
            if(left<=-width){
                left=(arr.length-1)*width;//当图片完全走出显示框，拼接到末尾
                clearInterval(moveId);
            }
            arr[i].style.left = left+"px";
        }
    }
    function divInterval(){
        moveId=setInterval(LeftMove,10);//设置一个10毫秒定时器
    } 
         timeId=setInterval(divInterval,2000);//设置一个3秒的定时器。     
    function stop(){
        clearInterval(timeId);
    }
    function start(){
        clearInterval(timeId);
        timeId=setInterval(divInterval,2000);
    }     
    //页面失去焦点停止
    onblur = function(){
        stop();
    }
    //页面获取焦点时开始
    onfocus = function(){
        start();
    }
</script>
    <div id="box" onmouseover="stop()" onmouseout="start()">
        <div id="red" class="slide"></div>
        <div id="green" class="slide"></div>
        <div id="blue" class="slide"></div>
    </div>
</body>
</html>
</pro></code>
</blockquote>
</details><br></blockquote>
