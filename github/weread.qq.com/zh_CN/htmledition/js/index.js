USER_AGENT=navigator.userAgent;
APP_VERSION=navigator.appVersion;
INIT_PAGE=0;
var GLOBAL={'DEVICE_TYPE':0,'HORIZONTAL_STYLE':false};
STYLE_SHEET_ADD=true;
if(USER_AGENT.match(/MSIE 8./)||USER_AGENT.match(/MSIE 7./)||USER_AGENT.match(/MSIE 6./)||USER_AGENT.match(/MSIE 9./))
{
var weReadIndexIE8=function(){
var e={init:function(){
$('#mobileStyle').remove();
c=0;
weReadIndexIE8.setStyle();
weReadIndexIE8.regEvent();
weReadIndexIE8.pngHack();
var f=document.documentElement.clientWidth;
if(!USER_AGENT.match(/MSIE 9./))
{
document.body.style.fontSize=f/1366*100+'%';
}
},setStyle:function(){
$('#load').remove();
$('.pageControl')[0].style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="./zh_CN/htmledition/images/ie/ie_pageControl.png")alpha(opacity=100)';
$('#background').remove();
$('#view').prepend('<img id="background_ie" src="./zh_CN/htmledition/images/background.jpg">');
$('#page_download_hand').remove();
$('#page_download').prepend('<img id="page_download_hand_ie" src="./zh_CN/htmledition/images/download_hand.png">');
$('#logo').remove();
$('#view').prepend('<img id="logo_ie" src="./zh_CN/htmledition/images/logo.png">');
$('#arrow_right').remove();
$('#view').prepend('<img id="arrow_right" src="./zh_CN/htmledition/images/ie/ie_arrow_right.png">');
$('#arrow_left').remove();
$('#view').prepend('<img id="arrow_left" src="./zh_CN/htmledition/images/ie/ie_arrow_left.png">');
$('#page_function1_show').remove();
$('#page_function1').prepend('<img id="page_function1_show" src="./zh_CN/htmledition/images/ie/ie_function1.png">');
$('#page_function2_show').remove();
$('#page_function2').prepend('<img id="page_function2_show" src="./zh_CN/htmledition/images/ie/ie_function2.png">');
$('#page_function3_show').remove();
$('#page_function3').prepend('<img id="page_function3_show" src="./zh_CN/htmledition/images/ie/ie_function3.png">');
$('#page_function4_table').remove();
$('#page_function4').prepend('<img id="page_function4_table" src="./zh_CN/htmledition/images/ie/ie_function4.png">');
if(USER_AGENT.match(/MSIE 9./))
{
}
else{
$('#logo').remove();
$('#view').prepend('<img id="logo_ie" src="./zh_CN/htmledition/images/logo.png">');
}
},regEvent:function(){
function f(g)
{
if(g.wheelDelta<0)
{
b();
document.body.detachEvent('onmousewheel',f);
setTimeout(function(){
document.body.attachEvent('onmousewheel',f);
},1000);
}
else if(g.wheelDelta>0)
{
a();
document.body.detachEvent('onmousewheel',f);
setTimeout(function(){
document.body.attachEvent('onmousewheel',f);
},1000);
}
}
$('#arrow_right').on('click',function(){
b();
});
$('#arrow_left').on('click',function(){
a();
});
$('.pageControl').on('click',function(){
c=this.id.toString().substring(18,19)-1;
d();
});
$('#nav_iPhone').on('mouseenter',function(){
$('#nav_iPhone').animate({'opacity':'1'});
}).on('mouseleave',function(){
$('#nav_iPhone').stop().css({'opacity':'0.6'});
});
$('#nav_android').on('mouseenter',function(){
$('#nav_android').animate({'opacity':'1'});
}).on('mouseleave',function(){
$('#nav_android').stop().css({'opacity':'0.6'});
});
$('#nav_QRCode').on('mouseenter',function(){
$('#nav_QRCode').animate({'opacity':'1'});
$('#nav_QRCode_hover').css({'display':'block'}).animate({'top':'40px'});
$('#nav_QRCode_hover_border').css({'display':'block'}).animate({'opacity':'1'});
$('#nav_QRCode_hover_img').animate({'opacity':'1'});
$('#nav_QRCode_hover').css('opacity','1');
}).on('mouseleave',function(){
$('#nav_QRCode').stop().css({'opacity':'0.6'});
$('#nav_QRCode_hover').css({'display':'none','top':'20px'});
$('#nav_QRCode_hover_border').css({'display':'none','opacity':'0','margin-top':'0px'});
$('#nav_QRCode_hover_img').css({'opacity':'0'});
});
document.body.attachEvent('onmousewheel',f);
},pngHack:function(){
function f()
{
var h=navigator.appVersion.split("MSIE");
var u=parseFloat(h[1]);
if((u>=5.5)&&(document.body.filters))
{
var s=0;
var i=document.images;
for(var r=0;r<i.length;r++)
{
var k=i[r];
var o=k.src.toUpperCase();
if(!(o.substring(o.length-10,o.length)=='IPHONE.PNG'||o.substring(o.length-10,o.length)=='NDROID.PNG'||o.substring(o.length-17,o.length)=='IE_NAV_QRCODE.PNG'))
continue;
if(o.substring(o.length-3,o.length)=="PNG"&&!k.getAttribute("usemap"))
{
s++;
var g=k.id||'ra_png_'+s.toString();
var m=new Image();
m.proData=g;
m.onload=function(){
$("#"+this.proData).css("width",this.width+"px").css("height",this.height+"px");
};
m.src=k.src;
var n="id='"+g+"' ";
var l=(k.className)?"class='"+k.className+"' ":"";
var q=(k.title)?"title='"+k.title+"' ":"title='"+k.alt+"' ";
var p="display:inline-block;"+k.style.cssText;
if(k.align=="left")
p="float:left;"+p;
if(k.align=="right")
p="float:right;"+p;
if(k.parentElement.href)
p="cursor:hand;"+p;
var t="<span "+n+l+q+" style=\""+"width:"+k.width+"px; height:"+k.height+"px;"+p+";"+"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"+"(src=\'"+k.src+"\', sizingMethod='scale');\"></span>";
k.outerHTML=t;
r=r-1;
}
}
}
}
if(typeof window.addEventListener=="undefined"&&typeof document.getElementsByClassName=="undefined")
{
window.attachEvent("onload",f);
}
}};
var c;
function a()
{
if(c===0)
{
}
else{
c--;
d();
}
}
function b()
{
if(c===4)
{
}
else{
c++;
d();
}
}
function d()
{
if(c===0)
{
$('#arrow_left').css({'display':'none'});
}
else{
$('#arrow_left').css({'display':'block'});
}
if(c===4)
{
$('#arrow_right').css({'display':'none'});
$('#background_ie').animate({'left':'-'+((8.25*document.documentElement.clientHeight)-document.documentElement.clientWidth-50)+'px'});
}
else{
$('#arrow_right').css({'display':'block'});
$('#background_ie').animate({'left':'-'+80*c+'%'});
}
setTimeout(function(){
$('.pageControl').css({'filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="./zh_CN/htmledition/images/ie/ie_pageControl.png")alpha(opacity=40)'});
$('.pageControl')[c].style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="./zh_CN/htmledition/images/ie/ie_pageControl.png")alpha(opacity=100)';
},400);
$('#page').animate({'left':'-'+100*c+'%'});
}
return e;
}();
window.onload=weReadIndexIE8.init;
window.onresize=function(){
var a=document.documentElement.clientWidth;
if(!USER_AGENT.match(/MSIE 9./))
{
document.body.style.fontSize=a/1366*100+'%';
}
};
}
else{
var helper=function(){
var a={debounce:function(c,b){
var d=null;
return function(){
var f=this,e=arguments;
clearTimeout(d);
d=setTimeout(function(){
c.apply(f,e);
},b);
};
},renderStyle:function(c,b,d){
d=d||false;
if(d)
{
return +window.getComputedStyle(c,null)[b+''].match(/\d*/)[0];
}
else{
return window.getComputedStyle(c,null)[b+''];
}
}};
return a;
}();
var weRead=function(g){
var ay={init:function(){
weRead.setGlobal();
weRead.setStyle();
if(!GLOBAL.DEVICE_TYPE)
{
weRead.checkPageSize();
}
ao=INIT_PAGE;
at();
weRead.regPublicEvent();
if(GLOBAL.DEVICE_TYPE)
{
weRead.MobileEvent();
}
else{
setTimeout(function(){
weRead.UIIn();
setTimeout(function(){
weRead.PCEvent();
},600);
},1000);
}
},setGlobal:function(){
var aC=window.innerHeight,aD=window.innerWidth;
if(USER_AGENT.toLowerCase().match(/iphone|ipad|ipod/))
{
GLOBAL.DEVICE_TYPE=1;
}
else if(USER_AGENT.toLowerCase().match(/android/))
{
GLOBAL.DEVICE_TYPE=2;
}
else{
GLOBAL.DEVICE_TYPE=0;
}
if(GLOBAL.DEVICE_TYPE)
{
GLOBAL.HORIZONTAL_STYLE=aD>aC;
}
else{
GLOBAL.HORIZONTAL_STYLE=aC<aD||innerWidth>853;
}
},setStyle:function(){
if(GLOBAL.DEVICE_TYPE===0)
{
ah.style.display='none';
}
else if(GLOBAL.DEVICE_TYPE===1)
{
ax.style.display='none';
ai.style.display='block';
ah.href='https://i.weread.qq.com/download?from=Website&type=iOS';
}
else if(GLOBAL.DEVICE_TYPE===2)
{
ax.style.display='none';
ag.style.display='block';
ah.href='https://i.weread.qq.com/download?from=Website&type=Android';
}
if(GLOBAL.DEVICE_TYPE)
{
M.style.backgroundImage='url("./zh_CN/htmledition/images/mobile_function4_table_background_4x.png")';
}
if((USER_AGENT.toLocaleLowerCase().match(/safari/)&&!USER_AGENT.toLocaleLowerCase().match(/chrome/))||(USER_AGENT.toLocaleLowerCase().match(/iphone/))&&(USER_AGENT.toLocaleLowerCase().match(/micromessenger/)))
{
o.style.letterSpacing='-1px';
B.style.letterSpacing='-1px';
K.style.letterSpacing='-1px';
X.style.letterSpacing='-1px';
}
if(GLOBAL.DEVICE_TYPE&&GLOBAL.HORIZONTAL_STYLE)
{
e.style.display='block';
e.style.opacity='1';
e.classList.add('animateArrowRight');
}
},onresize:function(){
var aC=window.innerHeight,aD=window.innerWidth;
if(GLOBAL.DEVICE_TYPE&&!GLOBAL.HORIZONTAL_STYLE)
{
GLOBAL.HORIZONTAL_STYLE=window.innerWidth>window.innerHeight;
if(GLOBAL.HORIZONTAL_STYLE)
{
weRead.switchStyle('mb-horizontal');
weRead.checkBackgroundFrame('horizontal');
}
}
else if(GLOBAL.DEVICE_TYPE&&GLOBAL.HORIZONTAL_STYLE)
{
GLOBAL.HORIZONTAL_STYLE=window.innerWidth>window.innerHeight;
if(!GLOBAL.HORIZONTAL_STYLE)
{
weRead.switchStyle('mb-vertical');
weRead.checkBackgroundFrame('vertical');
}
}
else if(!GLOBAL.DEVICE_TYPE&&GLOBAL.HORIZONTAL_STYLE)
{
GLOBAL.HORIZONTAL_STYLE=aC<aD||innerWidth>853;
weRead.checkPageSize();
if(!GLOBAL.HORIZONTAL_STYLE)
{
weRead.switchStyle('pc-vertical');
weRead.checkBackgroundFrame('vertical');
}
}
else{
GLOBAL.HORIZONTAL_STYLE=aC<aD||innerWidth>853;
weRead.checkPageSize();
if(GLOBAL.HORIZONTAL_STYLE)
{
weRead.switchStyle('pc-horizontal');
weRead.checkBackgroundFrame('horizontal');
}
}
},checkPageSize:function(){
var aF=window.innerHeight,aG=window.innerWidth,aE=~~(aG/aF*100);
var aD=g.styleSheets[0];
try{
if(!USER_AGENT.toLocaleLowerCase().match(/safari/)||USER_AGENT.toLocaleLowerCase().match(/chrome/))
{
aD.insertRule('@keyframes animateBackgroundTo'+4+'At'+aE+' {to {'+'-webkit-transform: translateX(-'+((8.25*aF)-aG-50)+'px);'+'transform: translateX(-'+((8.25*aF)-aG-50)+'px); } }',0);
aD.insertRule('.animateBackgroundTo'+4+'At'+aE+' {'+'-webkit-animation: animateBackgroundTo'+4+'At'+aE+' 0.6s;'+'animation: animateBackgroundTo'+4+'At'+aE+' 0.6s;'+'-webkit-animation-fill-mode: forwards;'+'animation-fill-mode: forwards; }',0);
}
}
catch(aC)
{
STYLE_SHEET_ADD=false;
}
},regPublicEvent:function(){
af.addEventListener('click',function(){
av();
ao=0;
if(!GLOBAL.DEVICE_TYPE)
aw();
at();
});
ak.addEventListener('touchstart',function(){
aA(ak);
ak.style.opacity='0.6';
});
ak.addEventListener('touchend',function(){
aA(ak);
ak.style.opacity='1';
});
aj.addEventListener('touchstart',function(){
aA(aj);
aj.style.opacity='0.6';
});
aj.addEventListener('touchend',function(){
aA(aj);
aj.style.opacity='1';
});
},MobileEvent:function(){
var aC;
function aG(aI)
{
var aJ=aI.targetTouches[0];
aC=aJ.pageY;
g.body.addEventListener('touchmove',aE);
}
function aE(aI)
{
var aL=aI.targetTouches[0],aK=aL.pageY,aJ=aC-aK;
aI.preventDefault();
if(aI.targetTouches.length>1||aI.scale&&aI.scale!==1)
{
return true;
}
if(aJ>20&&!GLOBAL.HORIZONTAL_STYLE)
{
an();
g.body.removeEventListener('touchmove',aE);
}
else if(aJ<-20&&!GLOBAL.HORIZONTAL_STYLE)
{
ae();
g.body.removeEventListener('touchmove',aE);
}
}
var aD;
function aH(aI)
{
var aJ=aI.targetTouches[0];
aD=aJ.pageX;
g.body.addEventListener('touchmove',aF);
}
function aF(aI)
{
var aL=aI.targetTouches[0],aK=aL.pageX,aJ=aD-aK;
aI.preventDefault();
if(aI.targetTouches.length>1||aI.scale&&aI.scale!==1)
{
return true;
}
if(aJ>20&&GLOBAL.HORIZONTAL_STYLE)
{
an();
g.body.removeEventListener('touchmove',aF);
}
else if(aJ<-20&&GLOBAL.HORIZONTAL_STYLE)
{
ae();
g.body.removeEventListener('touchmove',aF);
}
}
g.body.addEventListener('touchstart',aH);
g.body.addEventListener('touchstart',aG);
},PCEvent:function(){
function aM(aN)
{
if(aN.wheelDelta<0||aN.detail>0)
{
g.body.removeEventListener('mousewheel',aM);
g.body.removeEventListener('DOMMouseScroll',aM);
an();
setTimeout(function(){
g.body.addEventListener('mousewheel',aM);
g.body.addEventListener('DOMMouseScroll',aM);
},2000);
}
else if(aN.wheelDelta>0||aN.detail<0)
{
g.body.removeEventListener('mousewheel',aM);
g.body.removeEventListener('DOMMouseScroll',aM);
ae();
setTimeout(function(){
g.body.addEventListener('mousewheel',aM);
g.body.addEventListener('DOMMouseScroll',aM);
},2000);
}
}
function aK()
{
av();
ao=this.id[18]-1;
if(!GLOBAL.DEVICE_TYPE)
aw();
at();
}
function aL(aN)
{
switch(aN.keyCode)
{case 37:
ae();
break;
case 39:
an();
break;
}
}
d.addEventListener('click',ae);
e.addEventListener('click',an);
for(var aD=0,aF=ar.length;aD<aF;aD++)
{
ar[aD].addEventListener('click',aK);
}
g.body.addEventListener('mousewheel',aM);
g.body.addEventListener('DOMMouseScroll',aM);
g.body.addEventListener('keyup',aL);
function aG(aN)
{
aA(aN.target);
aN.target.classList.add('animateNavEnter');
}
function aH(aN)
{
aA(aN.target);
aN.target.classList.add('animateNavLeave');
}
function aI(aN)
{
aG(aN);
aA(am);
am.style.display='block';
am.classList.add('animateQRCodeIn');
}
function aJ(aN)
{
aH(aN);
am.style.display='none';
am.classList.add('animateQRCodeOut');
}
aj.addEventListener('mouseenter',aG);
aj.addEventListener('mouseleave',aH);
ak.addEventListener('mouseenter',aG);
ak.addEventListener('mouseleave',aH);
al.addEventListener('mouseenter',aI);
al.addEventListener('mouseleave',aJ);
function aE(aN)
{
switch(aN.keyCode)
{case 38:
ae();
break;
case 40:
an();
break;
}
}
function aC()
{
if(ao===4)
{
ae();
}
else{
an();
}
}
g.body.addEventListener('keyup',aE);
c.addEventListener('click',aC);
c.style.cursor='pointer';
},switchStyle:function(aC){
switch(aC)
{case 'pc-vertical':
M.style.backgroundImage='url("./zh_CN/htmledition/images/mobile_function4_table_background_4x.png")';
aA([al,ak,aj,d,e]);
d.style.display='none';
e.style.display='none';
al.style.display='block';
al.style.transform='scale(1, 1)';
al.style.webkitTransform='scale(1, 1)';
al.style.top='10px';
al.style.right='16px';
al.classList.add('animateNavIn');
if(ao===4)
{
c.style.display='none';
}
break;
case 'pc-horizontal':
M.style.backgroundImage='url("./zh_CN/htmledition/images/function4_table_background_4x.png")';
aA([al,ak,aj,d,e]);
if(ao!==0)
{
d.style.display='block';
d.style.opacity='1';
}
if(ao!==4)
{
e.style.display='block';
e.style.opacity='1';
}
c.style.display='';
al.style.top='';
al.style.right='';
at();
aq.classList.add('animatePageControlIn');
ak.classList.add('animateNavIn');
aj.classList.add('animateNavIn');
al.classList.add('animateNavIn');
break;
case 'mb-vertical':
e.style.display='none';
e.style.opacity='1';
if(ao===4)
{
c.style.display='none';
}
else{
c.style.display='block';
}
break;
case 'mb-horizontal':
if(ao!==4)
{
e.style.display='block';
e.style.opacity='1';
e.classList.add('animateArrowRight');
}
break;
}
},checkBackgroundFrame:function(aE){
switch(aE)
{case 'horizontal':
var aF=window.innerHeight,aG=window.innerWidth,aD=~~(aG/aF*100);
function aC()
{
var aH=window.innerHeight,aI=window.innerWidth;
aA(f);
f.style.transform='translateX(-'+((8.25*aH)-aI-50)+'px)';
f.style.webkitTransform='translateX(-'+((8.25*aH)-aI-50)+'px)';
}
if(ao===4||(ao===3&&aD>222))
{
aC();
}
else{
aA(f);
f.style.transform='translateX(-'+7.5*ao+'%)';
f.style.webkitTransform='translateX(-'+7.5*ao+'%)';
}
weRead.checkPageSize();
break;
case 'vertical':
aA(f);
f.style.transform='translateY(-'+20*ao+'%)';
f.style.webkitTransform='translateY(-'+20*ao+'%)';
break;
}
},UIIn:function(){
if(GLOBAL.HORIZONTAL_STYLE)
{
aq.classList.add('animatePageControlIn');
aj.classList.add('animateNavIn');
ak.classList.add('animateNavIn');
al.classList.add('animateNavIn');
e.style.display='block';
e.classList.add('animateBaseIn');
}
else{
al.style.transform='scale(1, 1)';
al.style.webkitTransform='scale(1, 1)';
al.style.display='block';
al.style.top='10px';
al.style.right='16px';
al.classList.add('animateNavIn');
}
}};
var af=g.getElementById('logo'),ap=g.getElementById('page'),au=g.getElementsByClassName('page'),aB=g.getElementById('view'),f=g.getElementById('background'),h=g.getElementById('page_download_hand'),i=g.getElementById('page_download_text'),p=g.getElementById('page_function1_text_title'),o=g.getElementById('page_function1_text_sub'),C=g.getElementById('page_function2_text_title'),B=g.getElementById('page_function2_text_sub'),L=g.getElementById('page_function3_text_title'),K=g.getElementById('page_function3_text_sub'),Y=g.getElementById('page_function4_text_title'),X=g.getElementById('page_function4_text_sub'),aq=g.getElementById('pageControl'),ar=g.getElementsByClassName('pageControl');
var ax=g.getElementById('page_download_pc_button'),ah=g.getElementById('page_download_button'),ai=g.getElementById('page_download_mobile_iPhone'),ag=g.getElementById('page_download_mobile_android');
var j=g.getElementById('page_function1_book_page1'),k=g.getElementById('page_function1_book_page2'),l=g.getElementById('page_function1_book_page3'),n=g.getElementById('page_function1_skin'),m=g.getElementById('page_function1_font');
var x=g.getElementById('page_function2_face_left'),z=g.getElementById('page_function2_face_right'),y=g.getElementById('page_function2_face_main'),A=g.getElementById('page_function2_face_text'),q=g.getElementById('page_function2_book_01'),r=g.getElementById('page_function2_book_02'),s=g.getElementById('page_function2_book_03'),t=g.getElementById('page_function2_book_04'),u=g.getElementById('page_function2_book_05'),v=g.getElementById('page_function2_book_06'),w=g.getElementById('page_function2_book_07');
var D=g.getElementById('page_function3_book'),E=g.getElementById('page_function3_talk_01'),F=g.getElementById('page_function3_talk_02'),G=g.getElementById('page_function3_talk_03'),H=g.getElementById('page_function3_talk_04'),I=g.getElementById('page_function3_talk_05'),J=g.getElementById('page_function3_talk_06');
var M=g.getElementById('page_function4_table_background'),N=g.getElementById('page_function4_table_column_01'),O=g.getElementById('page_function4_table_column_02'),P=g.getElementById('page_function4_table_column_03'),Q=g.getElementById('page_function4_table_column_04'),R=g.getElementById('page_function4_table_column_05'),S=g.getElementById('page_function4_table_face_01'),T=g.getElementById('page_function4_table_face_02'),U=g.getElementById('page_function4_table_face_03'),V=g.getElementById('page_function4_table_face_04'),W=g.getElementById('page_function4_table_face_05'),Z=g.getElementById('page_function4_table_time_01'),aa=g.getElementById('page_function4_table_time_02'),ab=g.getElementById('page_function4_table_time_03'),ac=g.getElementById('page_function4_table_time_04'),ad=g.getElementById('page_function4_table_time_05');
var aj=g.getElementById('nav_android'),ak=g.getElementById('nav_iPhone'),al=g.getElementById('nav_QRCode'),am=g.getElementById('nav_QRCode_hover'),d=g.getElementById('arrow_left'),e=g.getElementById('arrow_right'),c=g.getElementById('arrow_down');
var ao=0;
function an()
{
if(ao===4)
{
return true;
}
else{
av();
ao++;
}
aw();
at();
}
function ae()
{
if(ao===0)
{
return true;
}
else{
av();
ao--;
}
aw();
at();
}
function at()
{
function aC()
{
b();
var aN=g.getElementById('page_download');
aN.style.display='block';
aA([h,i,ah,ax]);
h.classList.add('animateDownloadHandIn');
i.classList.add('animateDownloadTextIn');
ah.classList.add('animateMobileDownloadButtonIn');
ax.classList.add('animateMobileDownloadButtonIn');
}
function aD()
{
b();
var aN=g.getElementById('page_function1');
aN.style.display='block';
aA([j,k,l,n,m,p,o]);
l.classList.add('animateFunction1BookPage3In');
k.classList.add('animateFunction1BookPage2In');
n.classList.add('animateFunction1SkinIn');
m.classList.add('animateFunction1FontIn');
setTimeout(function(){
j.classList.add('animateFunction1BookPage1In');
},200);
if(GLOBAL.DEVICE_TYPE)
{
setTimeout(function(){
p.classList.add('animateMobileTextIn');
},600);
setTimeout(function(){
o.classList.add('animateMobileTextIn');
},650);
}
else{
setTimeout(function(){
p.classList.add('animateTextTitleIn');
},600);
setTimeout(function(){
o.classList.add('animateTextSubIn');
},650);
}
}
function aE()
{
b();
var aN=g.getElementById('page_function2');
aN.style.display='block';
aA([x,z,y,A,q,r,s,t,u,v,w,C,B]);
x.classList.add('animateFunction2FaceLeftIn');
z.classList.add('animateFunction2FaceRightIn');
y.classList.add('animateFunction2FaceMainIn');
A.classList.add('animateFunction2FaceTextIn');
setTimeout(function(){
q.classList.add('animateFunction2BookIn');
},200);
setTimeout(function(){
r.classList.add('animateFunction2BookIn');
s.classList.add('animateFunction2BookIn');
},350);
setTimeout(function(){
t.classList.add('animateFunction2BookIn');
u.classList.add('animateFunction2BookIn');
},500);
setTimeout(function(){
v.classList.add('animateFunction2BookIn');
w.classList.add('animateFunction2BookIn');
},650);
if(GLOBAL.DEVICE_TYPE)
{
setTimeout(function(){
C.classList.add('animateMobileTextIn');
},950);
setTimeout(function(){
B.classList.add('animateMobileTextIn');
},1000);
}
else{
setTimeout(function(){
C.classList.add('animateTextTitleIn');
},950);
setTimeout(function(){
B.classList.add('animateTextSubIn');
},1000);
}
}
function aF()
{
b();
var aN=g.getElementById('page_function3');
aN.style.display='block';
aA([D,E,F,G,H,I,J,L,K]);
D.classList.add('animateFunction3BookIn');
setTimeout(function(){
E.classList.add('animateFunction3TalkIn');
},100);
setTimeout(function(){
F.classList.add('animateFunction3TalkIn');
},150);
setTimeout(function(){
G.classList.add('animateFunction3TalkIn');
},200);
setTimeout(function(){
H.classList.add('animateFunction3TalkIn');
},250);
setTimeout(function(){
I.classList.add('animateFunction3TalkIn');
},300);
setTimeout(function(){
J.classList.add('animateFunction3TalkIn');
},350);
if(GLOBAL.DEVICE_TYPE)
{
setTimeout(function(){
L.classList.add('animateMobileTextIn');
},700);
setTimeout(function(){
K.classList.add('animateMobileTextIn');
},750);
}
else{
setTimeout(function(){
L.classList.add('animateTextTitleIn');
},700);
setTimeout(function(){
K.classList.add('animateTextSubIn');
},750);
}
}
function aG()
{
b();
var aN=g.getElementById('page_function4');
aN.style.display='block';
aA([Z,aa,ab,ac,ad,S,T,U,V,W,N,O,P,Q,R,M,Y,X]);
if(GLOBAL.DEVICE_TYPE)
{
M.classList.add('animateMobileFunction4BackgroundIn');
}
else{
M.classList.add('animateFunction4BackgroundIn');
}
if(GLOBAL.DEVICE_TYPE)
{
setTimeout(function(){
N.classList.add('animateMobileFunction4ColumnIn');
},100);
setTimeout(function(){
O.classList.add('animateMobileFunction4ColumnIn');
},150);
setTimeout(function(){
P.classList.add('animateMobileFunction4ColumnIn');
},200);
setTimeout(function(){
Q.classList.add('animateMobileFunction4ColumnIn');
},250);
setTimeout(function(){
R.classList.add('animateMobileFunction4ColumnIn');
},300);
}
else{
setTimeout(function(){
N.classList.add('animateFunction4ColumnIn');
},100);
setTimeout(function(){
O.classList.add('animateFunction4ColumnIn');
},150);
setTimeout(function(){
P.classList.add('animateFunction4ColumnIn');
},200);
setTimeout(function(){
Q.classList.add('animateFunction4ColumnIn');
},250);
setTimeout(function(){
R.classList.add('animateFunction4ColumnIn');
},300);
}
setTimeout(function(){
S.classList.add('animateFunction4FaceIn');
T.classList.add('animateFunction4FaceIn');
U.classList.add('animateFunction4FaceIn');
V.classList.add('animateFunction4FaceIn');
W.classList.add('animateFunction4FaceIn');
Z.classList.add('animateFunction4TimeIn');
aa.classList.add('animateFunction4TimeIn');
ab.classList.add('animateFunction4TimeIn');
ac.classList.add('animateFunction4TimeIn');
ad.classList.add('animateFunction4TimeIn');
},800);
if(GLOBAL.DEVICE_TYPE)
{
setTimeout(function(){
Y.classList.add('animateMobileTextIn');
},1000);
setTimeout(function(){
X.classList.add('animateMobileTextIn');
},1050);
}
else{
setTimeout(function(){
Y.classList.add('animateTextTitleIn');
},1000);
setTimeout(function(){
X.classList.add('animateTextSubIn');
},1050);
}
}
function aJ()
{
switch(ao)
{case 0:
aC();
break;
case 1:
aD();
break;
case 2:
aE();
break;
case 3:
aF();
break;
case 4:
aG();
break;
}
}
if(!GLOBAL.HORIZONTAL_STYLE)
{
aA(f);
f.classList.add('animateMobileBackgroundTo'+ao);
setTimeout(function(){
aJ();
},250);
a(f,'AnimationEnd',function(){
f.style.transform='translateY(-'+ao*20+'%)';
f.style.webkitTransform='translateY(-'+ao*20+'%)';
});
}
else{
aA(f);
if(ao===4)
{
var aL=window.innerHeight,aM=window.innerWidth,aK=~~(aM/aL*100);
if(!STYLE_SHEET_ADD||GLOBAL.DEVICE_TYPE)
{
f.classList.add('animateBackgroundTo4');
}
else{
f.classList.add('animateBackgroundTo4At'+aK);
}
}
else{
f.classList.add('animateBackgroundTo'+ao);
}
setTimeout(function(){
aJ();
},250);
a(f,'AnimationEnd',function(){
if(ao===4)
{
var aN=window.innerHeight,aO=window.innerWidth;
if(!STYLE_SHEET_ADD)
{
f.style.transform='translateX(-'+ao*7.5+'%)';
f.style.webkitTransform='translateX(-'+ao*7.5+'%)';
}
else{
f.style.transform='translateX(-'+((8.25*aN)-aO-50)+'px)';
f.style.webkitTransform='translateX(-'+((8.25*aN)-aO-50)+'px)';
}
}
else{
f.style.transform='translateX(-'+ao*7.5+'%)';
f.style.webkitTransform='translateX(-'+ao*7.5+'%)';
}
});
for(var aH=0,aI=ar.length;aH<aI;aH++)
{
if(ar[aH].classList[1])
{
ar[aH].classList.add('animateControlFocusOut');
}
}
aA(ar[ao]);
ar[ao].classList.add('animateControlFocus');
}
}
function av()
{
function aC()
{
aA([h,i,ah,ax]);
h.classList.add('animateDownloadHandOut');
i.classList.add('animateDownloadTextOut');
ah.classList.add('animateMobileDownloadButtonOut');
ax.classList.add('animateMobileDownloadButtonOut');
}
function aD()
{
aA([j,k,l,n,m,p,o]);
l.classList.add('animateFunction1BookPage3Out');
k.classList.add('animateFunction1BookPage2Out');
j.classList.add('animateFunction1BookPage1Out');
n.classList.add('animateFunction1SkinOut');
m.classList.add('animateFunction1FontOut');
if(GLOBAL.DEVICE_TYPE)
{
o.classList.add('animateMobileTextOut');
p.classList.add('animateMobileTextOut');
}
else{
o.classList.add('animateTextSubOut');
p.classList.add('animateTextTitleOut');
}
}
function aE()
{
aA([x,z,y,A,q,r,s,t,u,v,w,C,B]);
x.classList.add('animateFunction2FaceLeftOut');
z.classList.add('animateFunction2FaceRightOut');
y.classList.add('animateFunction2FaceMainOut');
A.classList.add('animateFunction2FaceTextOut');
q.classList.add('animateFunction2Book01Out');
r.classList.add('animateFunction2BookOut');
s.classList.add('animateFunction2BookOut');
t.classList.add('animateFunction2BookOut');
u.classList.add('animateFunction2BookOut');
v.classList.add('animateFunction2BookOut');
w.classList.add('animateFunction2BookOut');
if(GLOBAL.DEVICE_TYPE)
{
B.classList.add('animateMobileTextOut');
C.classList.add('animateMobileTextOut');
}
else{
C.classList.add('animateTextTitleOut');
B.classList.add('animateTextSubOut');
}
}
function aF()
{
aA([D,E,F,G,H,I,J,L,K]);
D.classList.add('animateFunction3BookOut');
E.classList.add('animateFunction3TalkOut');
F.classList.add('animateFunction3TalkOut');
G.classList.add('animateFunction3TalkOut');
H.classList.add('animateFunction3TalkOut');
I.classList.add('animateFunction3TalkOut');
J.classList.add('animateFunction3TalkOut');
if(GLOBAL.DEVICE_TYPE)
{
K.classList.add('animateMobileTextOut');
L.classList.add('animateMobileTextOut');
}
else{
L.classList.add('animateTextTitleOut');
K.classList.add('animateTextSubOut');
}
}
function aG()
{
aA([Z,aa,ab,ac,ad,S,T,U,V,W,N,O,P,Q,R,M,Y,X]);
Z.classList.add('animateFunction4TimeOut');
S.classList.add('animateFunction4FaceOut');
aa.classList.add('animateFunction4TimeOut');
T.classList.add('animateFunction4FaceOut');
ab.classList.add('animateFunction4TimeOut');
U.classList.add('animateFunction4FaceOut');
ac.classList.add('animateFunction4TimeOut');
V.classList.add('animateFunction4FaceOut');
ad.classList.add('animateFunction4TimeOut');
W.classList.add('animateFunction4FaceOut');
N.classList.add('animateFunction4ColumnOut');
O.classList.add('animateFunction4ColumnOut');
P.classList.add('animateFunction4ColumnOut');
Q.classList.add('animateFunction4ColumnOut');
R.classList.add('animateFunction4ColumnOut');
if(GLOBAL.DEVICE_TYPE)
{
X.classList.add('animateMobileTextOut');
Y.classList.add('animateMobileTextOut');
M.classList.add('animateMobileFunction4BackgroundOut');
}
else{
M.classList.add('animateFunction4BackgroundOut');
Y.classList.add('animateTextTitleOut');
X.classList.add('animateTextSubOut');
}
}
switch(ao)
{case 0:
aC();
break;
case 1:
aD();
break;
case 2:
aE();
break;
case 3:
aF();
break;
case 4:
aG();
break;
}
}
function aw()
{
function aE()
{
if(d.style.display==='none'||!d.style.display)
{
function aK()
{
aA([d]);
d.style.display='block';
d.classList.add('animateBaseIn');
}
setTimeout(aK,250);
}
}
function aF()
{
aA([d]);
d.classList.add('animateBaseOut');
function aK()
{
d.style.display='none';
}
a(d,'AnimationEnd',aK);
}
function aG()
{
if(e.style.display==='none'||!e.style.display)
{
function aK()
{
aA(e);
e.style.display='block';
e.classList.add('animateBaseIn');
}
setTimeout(aK,250);
}
}
function aH()
{
aA(e);
e.classList.add('animateBaseOut');
function aK()
{
e.style.display='none';
}
a(e,'AnimationEnd',aK);
}
function aC()
{
if(c.style.display==='none'||!c.style.display)
{
c.style.display='block';
}
}
function aD()
{
c.style.display='none';
}
function aI()
{
if(GLOBAL.DEVICE_TYPE===1)
{
if(ak.style.display==='none'||!ak.style.display)
{
aA(ak);
ak.style.display='block';
ak.classList.add('animateBaseIn');
}
}
else if(GLOBAL.DEVICE_TYPE===2)
{
if(aj.style.display==='none'||!aj.style.display)
{
aA(aj);
aj.style.display='block';
aj.classList.add('animateBaseIn');
}
}
else if(GLOBAL.DEVICE_TYPE===0)
{
if(al.style.display==='none'||!al.style.display&&ao!=0&&!GLOBAL.HORIZONTAL_STYLE)
{
aA(al);
al.style.transform='scale(1, 1)';
al.style.webkitTransform='scale(1, 1)';
al.style.display='block';
al.style.top='10px';
al.style.right='16px';
al.classList.add('animateNavIn');
am.style.right='16px';
am.style.top='30px';
}
}
}
function aJ()
{
if(GLOBAL.DEVICE_TYPE===1)
{
aA(ak);
ak.classList.add('animateNavOut');
a(ak,'AnimationEnd',function(){
ak.style.display='none';
});
}
else if(GLOBAL.DEVICE_TYPE===2)
{
aA(aj);
aj.classList.add('animateNavOut');
a(aj,'AnimationEnd',function(){
aj.style.display='none';
});
}
else if(GLOBAL.DEVICE_TYPE===0)
{
a(al,'AnimationEnd',function(){
});
}
}
if(GLOBAL.DEVICE_TYPE&&!GLOBAL.HORIZONTAL_STYLE)
{
if(ao===0)
{
aJ();
}
else{
aI();
}
if(ao===4)
{
aD();
}
else{
aC();
}
}
else if(GLOBAL.DEVICE_TYPE&&GLOBAL.HORIZONTAL_STYLE)
{
if(ao===4)
{
e.style.display='none';
}
else{
e.style.display='block';
}
if(ao===0)
{
aJ();
}
else{
aI();
}
}
else if(!GLOBAL.DEVICE_TYPE&&GLOBAL.HORIZONTAL_STYLE)
{
if(ao===0)
{
aF();
}
else{
aE();
}
if(ao===4)
{
aH();
}
else{
aG();
}
}
else{
if(ao===0)
{
aJ();
}
else{
aI();
}
if(ao===4)
{
aD();
}
else{
aC();
}
}
}
function aA(aF)
{
function aC(aG)
{
var aI=Array.prototype.slice.call(aG.classList).filter(function(aJ){
return !!aJ.match(/^animate/);
});
for(var aH=0;aH<aI.length;aH++)
{
aG.classList.remove(aI[aH]);
}
}
if(aF.length)
{
for(var aD=0,aE=aF.length;aD<aE;aD++)
{
aC(aF[aD]);
}
}
else{
aC(aF);
}
}
function a(aC,aG,aD,aE)
{
(aE!==undefined&&aE!=null)?(aE=aE):(aE=true);
if(aE)
{
function aF()
{
aD();
az(aC,aG,aF);
}
aC.addEventListener('webkit'+aG,aF,false);
aC.addEventListener(aG.toLowerCase(),aF,false);
}
else{
aC.addEventListener('webkit'+aG,aD,false);
aC.addEventListener(aG.toLowerCase(),aD,false);
}
}
function az(aC,aE,aD)
{
aC.removeEventListener('webkit'+aE,aD,false);
aC.removeEventListener(aE.toLowerCase(),aD,false);
}
function b()
{
for(var aC=0,aD=au.length;aC<aD;aC++)
{
au[aC].style.display='none';
}
}
return ay;
}(document);
window.onload=weRead.init();
window.onresize=helper.debounce(weRead.onresize,50);
}
function uploadReferrer()
{
var e=document.referrer;
if(e)
{
e=e.substring(0,1000);
}
var a=new XMLHttpRequest();
var f="http://weread.qq.com/wrpage/investigation/general";
var b=["wereadPortal",GLOBAL.DEVICE_TYPE,e];
var c={key:80000467,msg:b};
a.open("POST",f,true);
a.setRequestHeader('Content-type','application/json; charset=utf-8');
var d=JSON.stringify(c);
a.send(d);
}
;uploadReferrer();
var shareTimeLineConfig={img_url:"https://weread.qq.com/zh_CN/htmledition/images/weread_icon.png",link:window.location.href,desc:"",title:"\u5FAE\u4FE1\u8BFB\u4E66\uFF0C\u8BA9\u9605\u8BFB\u4E0D\u518D\u5B64\u72EC\u3002"};
var shareMessageConfig={img_url:"https://weread.qq.com/zh_CN/htmledition/images/weread_icon.png",link:window.location.href,desc:"\u8BA9\u9605\u8BFB\u4E0D\u518D\u5B64\u72EC",title:"\u5FAE\u4FE1\u8BFB\u4E66"};
if(typeof WeixinJSBridge=="undefined"&&typeof onBridgeReady=='function')
{
if(document.addEventListener)
{
document.addEventListener('WeixinJSBridgeReady',onBridgeReady,false);
}
else if(document.attachEvent)
{
document.attachEvent('WeixinJSBridgeReady',onBridgeReady);
document.attachEvent('onWeixinJSBridgeReady',onBridgeReady);
}
}
function onBridgeReady()
{
WeixinJSBridge.on("menu:share:timeline",function(){
WeixinJSBridge.invoke("shareTimeline",shareTimeLineConfig);
});
WeixinJSBridge.on("menu:share:appmessage",function(){
WeixinJSBridge.invoke("sendAppMessage",shareMessageConfig);
});
}
