window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

// 动画进场开关
if (window.isAdmission === undefined) {
  var isAdmission = true;
}

/*定义线框鸟参数*/
var lineArr = [],
    bCvs, bContext,
    icBird, icBline, icBdot,
    bChange, bOpc,
    bLoad = { load: 0, num: 1 }, totalFps = 0, isStar = false;

var lineEfcArr = [];

/*图片加载器*/
function loadImg( path, load){
    var tar= new Image();
    tar.onload = function(){
        load.load++;
    };
    tar.src = path;
    return tar
}

/*功能函数*/
function isInPoint(s,e,c){
    return c>=s&&c<=e||c>=e&&c<=s
}

/*功能函数*/
function getPointFromPro ( p1, p2, cp){
    if(p2)
        return{ x: p1.x + ( p2.x - p1.x ) * cp, y: p1.y + ( p2.y - p1.y ) * cp }
    else
        return p1
}

/*线段构造器*/
function lineCreator( startP, endP, width ){
    //起点
    this.startP = startP;
    this.startP.x += 12;
    this.startP.y += 4;
    //终点
    this.endP = endP;
    this.endP.x += 12;
    this.endP.y += 4;
    //画线起始时间
    this.startT = Math.ceil(Math.random()*20);
    //用时
    this.dur = Math.ceil(Math.random()*100);
    //当前终点
    this.curP = { x: this.startP.x, y: this.startP.y };
    //是否已画完
    this.isEnd = false;
    //线段粗细
    this.lWidth = width;
    this.opc = 1;
    //画线
    if( typeof this.draw!="function" ){
        lineCreator.prototype.draw = function( context ){       
            context.save();
            context.globalAlpha = this.opc;
            context.lineWidth = this.lWidth;
            context.strokeStyle = "rgba(51, 18, 255, 0.8)";
            context.beginPath();
            context.moveTo( this.startP.x, this.startP.y );
            context.lineTo( this.curP.x, this.curP.y );
            context.stroke();
            context.restore();
            
        }
    }
    //线的改变
    if( typeof this.move != "function"){
        lineCreator.prototype.move = function(){
            if( !this.isEnd ){
                this.curP.x += (this.endP.x - this.startP.x) / this.dur;
                this.curP.y += (this.endP.y - this.startP.y) / this.dur;
                if( !isInPoint(this.startP.x, this.endP.x, this.curP.x ) && !isInPoint( this.startP.y, this.endP.y, this.curP.y ) )
                    this.curP.x = this.endP.x, this.curP.y = this.endP.y, this.isEnd = true;
            }   
        }
    }
}


function animate() {
    requestAnimationFrame( animate );   

    bContext.clearRect( 0, 0, bCvs.width, bCvs.height );
    if( bLoad.load >= bLoad.num){
        bContext.save();
        if( totalFps < 120 ){    
            /*画线*/
            for( var i = 0; i < lineArr.length; i++ ){
                if( lineArr[i].startT <= totalFps ){
                    if( totalFps > 40 )
                        lineArr[i].opc = Math.max( 0, lineArr[i].opc - .02 );
                    lineArr[i].move();
                    lineArr[i].draw( bContext );  
                }               
            }
        }
        if( totalFps > 40 ){
            /*画线鸟图*/
            icBird.opc = Math.min( 1, icBird.opc + .02 );
            bContext.save();
            bContext.globalAlpha = icBird.opc;
            bContext.drawImage( icBird, 0, 0);
            bContext.restore();
            
            if( totalFps > 120){
                /*画亮线、亮点、阴影*/
                bChange++;
                if( bChange < 188){
                    if( bChange < 94 ){
                        bOpc = Math.min( 1, bOpc + .04 ); 
                    }else{
                        bOpc = Math.max( 0, bOpc - .04 );
                    }
                    bContext.save();
                    bContext.globalAlpha = bOpc;    
                    bContext.restore();
                }else{
                    bChange = 0;
                    bOpc = 0;
                }
                /*线段闪烁*/
                // for( var i = 0; i < lineEfcArr.length; i++ ){
                //     lineEfcArr[ i ].draw();
                //     lineEfcArr[ i ].nextFps();
                // }
            }            
        }
        if( totalFps < 200 ){
            totalFps++;
        }
           
    }     
}

function init(){
    /*线框鸟初始化*/
    lineArr=[
        new lineCreator({x:56,y:4},{x:80,y:14},1),     
        new lineCreator({x:80,y:14},{x:0,y:16},1),    
        new lineCreator({x:80,y:14},{x:197,y:23},1),    
        new lineCreator({x:197,y:23},{x:125,y:5},1),     
        new lineCreator({x:197,y:23},{x:183,y:7},1),    
        new lineCreator({x:197,y:23},{x:260,y:5},1),  
        new lineCreator({x:260,y:5},{x:308,y:0},1),  
        new lineCreator({x:308,y:0},{x:305,y:35},1),  
        new lineCreator({x:305,y:35},{x:217,y:43},1), 
        new lineCreator({x:217,y:43},{x:197,y:23},1),

        new lineCreator({x:197,y:23},{x:122,y:104},1),
        new lineCreator({x:122,y:104},{x:15,y:115},1),     
        new lineCreator({x:15,y:115},{x:171,y:173},1),
        new lineCreator({x:171,y:173},{x:0,y:203},1),
        new lineCreator({x:171,y:173},{x:348,y:197},1), 
        new lineCreator({x:348,y:197},{x:411,y:82},1), 
        new lineCreator({x:411,y:82},{x:327,y:107},1), 
        new lineCreator({x:327,y:107},{x:171,y:173},1),

        new lineCreator({x:348,y:197},{x:267,y:466},1), 
        new lineCreator({x:267,y:466},{x:0,y:143},1),    
        new lineCreator({x:110,y:376},{x:267,y:466},1),   
        new lineCreator({x:110,y:376},{x:0,y:306},1),    
        new lineCreator({x:110,y:376},{x:0,y:349},1),  

        new lineCreator({x:411,y:82},{x:461,y:72},1),   
        new lineCreator({x:461,y:72},{x:581,y:59},1),     
        new lineCreator({x:581,y:59},{x:541,y:149},1),   
        new lineCreator({x:541,y:149},{x:348,y:197},1), 

        new lineCreator({x:541,y:149},{x:768,y:179},1),     
        new lineCreator({x:541,y:149},{x:768,y:79},1), 

        new lineCreator({x:1151,y:181},{x:1339,y:61},1),    
        new lineCreator({x:1339,y:61},{x:1376,y:151},1),     
        new lineCreator({x:1376,y:151},{x:1151,y:181},1),

        new lineCreator({x:1376,y:151},{x:1571,y:199},1),     
        new lineCreator({x:1571,y:199},{x:1510,y:86},1),    
        new lineCreator({x:1510,y:86},{x:1462,y:75},1),     
        new lineCreator({x:1462,y:75},{x:1339,y:61},1),  

        new lineCreator({x:1510,y:86},{x:1594,y:109},1),   
        new lineCreator({x:1594,y:109},{x:1744,y:175},1),   
        new lineCreator({x:1744,y:175},{x:1571,y:199},1), 

        new lineCreator({x:1571,y:199},{x:1668,y:511},1),   
        new lineCreator({x:1571,y:199},{x:1744,y:175},1),  
        new lineCreator({x:1744,y:175},{x:1907,y:117},1), 

        new lineCreator({x:1907,y:117},{x:1798,y:106},1),  
        new lineCreator({x:1798,y:106},{x:1667,y:140},1),  
        new lineCreator({x:1667,y:140},{x:1594,y:109},1),  
        new lineCreator({x:1667,y:140},{x:1571,y:199},1),  
        new lineCreator({x:1667,y:140},{x:1744,y:175},1), 

        new lineCreator({x:1744,y:175},{x:1920,y:105},1),  
        new lineCreator({x:1744,y:175},{x:1920,y:392},1),  
    ];
    bCvs = document.getElementById( "chain" );
    bCvs.setAttribute( "width", 1920 );
    bCvs.setAttribute( "height", 1080 );
    bContext = bCvs.getContext( "2d" );
    icBird = loadImg( "img/index2019/chain.png", bLoad );
    icBird.opc = 0;
    
    animate();
}

function Matrix(id){
    this.c = document.getElementById(id);
    this.c.height = window.innerHeight;
    this.c.width = window.innerWidth;
    this.ctx = this.c.getContext('2d');
    this.txt = ['0', '1'];
    this.fontSize = 12;
    //用于计算输出文字时坐标，所以长度即为列数
    this.drops = [
        {x: 1793, y: 548, num: 0, color: '#1493ff', alpha: 0},
        {x: 1820, y: 353, num: 0, color: '#1493ff', alpha: 0},
        {x: 1753, y: 456, num: 0, color: '#1493ff', alpha: 0},
        {x: 1668, y: 325, num: 0, color: '#1493ff', alpha: 0},
        {x: 84, y: 592, num: 0, color: '#1493ff', alpha: 0},
        {x: 146, y: 476, num: 0, color: '#1493ff', alpha: 0},
        {x: 230, y: 302, num: 0, color: '#1493ff', alpha: 0},
        {x: 53, y: 516, num: 0, color: '#1493ff', alpha: 0},
        {x: 84, y: 283, num: 0, color: '#1493ff', alpha: 0},
        {x: 375, y: 208, num: 0, color: '#2b3aff', alpha: 0},
        {x: 165, y: 412, num: 0, color: '#2b3aff', alpha: 0},
        {x: 33, y: 622, num: 0, color: '#2b3aff', alpha: 0},
        {x: 1520, y: 332, num: 0, color: '#2b3aff', alpha: 0},
        {x: 1589, y: 625, num: 0, color: '#2b3aff', alpha: 0},
        {x: 1892, y: 469, num: 0, color: '#2b3aff', alpha: 0}
    ];
}
Matrix.prototype = {
    reconstructMethod: function(){
        this.draw = this.draw.bind(this);
    },
    init: function() {
        this.reconstructMethod();
        setInterval(this.draw, 100);
    },
    draw: function() {
        this.ctx.font = this.fontSize + "px arial";
        //逐行输出文字
        for(var i = 0; i < this.drops.length; i++){
            //随机取要输出的文字
            var text = this.txt[Math.floor(Math.random() * this.txt.length)];
            this.ctx.fillStyle = this.drops[i].color;
            this.ctx.globalAlpha = this.drops[i].alpha;
            this.ctx.fillText(text, this.drops[i].x, this.drops[i].y + this.drops[i].num * this.fontSize);
            
            //如果绘满一屏或随机数大于0.95
            if(this.drops[i] * this.fontSize > this.c.height || Math.random() > 0.9) {
                this.drops[i].num = 0;
                this.drops[i].alpha = 0;
                this.ctx.clearRect(this.drops[i].x, 0, this.fontSize, this.c.height);
            }
            
            //用于Y轴坐标增加
            this.drops[i].num += 1;
            this.drops[i].alpha += 0.05;
        } 
    }
}

var sound,isPlay = false;
function loading(cb){
    var $txt = $('#loading-container p');
    var loadArr = [
        'img/index2019/bg.jpg',
        'img/index2019/bg2.jpg',
        'img/index2019/bgmain.jpg',
        'img/index2019/bgmainfront.png',
        'img/index2019/road.png',
        'img/index2019/roadside01.png',
        'img/index2019/star.png',
        'img/index2019/x.png',
        'img/index2019/xbuilding.png',
        'img/index2019/chain.png',
        'img/index2019/roadside01.png',
        'img/spr-building.png',
        'img/spr-logo.png',
        'img/spr-body.png',
        'img/spr-banner.png',
        'img/seq-tech.png',
        'img/seq-design.png',
        'img/seq-overseas.png',
        'img/seq-product.png',
        // 'img/index2019/audio/sound.mp3'
    ];
    var flag = 0, loadObject = [];
    for(var i = 0; i < loadArr.length; i++) {
        if(/\.(jpg|jpeg|png|gif|bmp)$/.test(loadArr[i].toLowerCase())) {
            loadObject[i] = new Image();
            loadObject[i].onload = function() {
                flag++;
                $txt.text(Math.round((flag / loadArr.length) * 100) + '%');
                if(flag >= loadArr.length) {
                    cb();
                }
            }
            loadObject[i].src = loadArr[i];
        }else if(/\.(mp3|wav|ogg|wma)$/.test(loadArr[i].toLowerCase())) {
            var audio = new Audio();
            audio.src = loadArr[i];
            audio.addEventListener('canplaythrough', function() { 
                flag++;
                sound = audio;
                if(flag >= loadArr.length) {
                    cb();
                }
            }, false);
            
        }
    }
    // $('.loading-container .btn-play').on('click', function(){
    //     isPlay = true;
    //     $(this).text('开启成功！');
    // });
}

function type(tit, str) {
    tit.innerText = '';
    var index = 0;
    var timer = setInterval(function(){
        if(index == str.length + 1) {
            clearInterval(timer);
        }else {
            tit.innerText = str.substring(0, index++);
        }
    }, 100);
}

$(function(){
    var $home = $('#home-container'),
        $building = $('#building-container'),
        $x = $('#x-container'),
        $loading = $('#loading-container'),
        $logo = $('.desc-logo');
    var userAgent = navigator.userAgent,
        reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    var IEVersion = parseFloat(RegExp['$1']);
    // 判断浏览器是否在 ie10 以下
    if(IEVersion != NaN && IEVersion < 10) {
        $('.campus-body').css('height', $(window).height());
        $loading.hide();
    }else {
        loading(function(){
            $('#loading-container p').css({
                'font-weight': 'normal',
                'font-size': '16px'
            });
            type($('#loading-container p')[0], '点击进入梦想世界');
            $('body').css('cursor', 'pointer');
            new Ray('.sp-cvs').init();
            new Ray('.x-cvs').init();
            if(window.isAdmission) {
                $(window).one('click', function(){
                    $('body').css('cursor', 'default');
                    $loading.fadeOut();
                    $building.fadeIn().css('opacity', 1).addClass('ani');
                    $x.fadeIn().css('opacity', 1).addClass('ani');

                    setTimeout(function(){
                        $('audio')[0].play();
                    },1200);
                    
                    setTimeout(function(){
                        $home.fadeIn().addClass('ani');
                        new Matrix('code').init();
                        setTimeout(function(){
                            init();
                        }, 3000);
                    },5200);
                });
            }else{
                $('body').css('cursor', 'default');
                $loading.fadeOut();
                $home.fadeIn().addClass('ani');
                new Matrix('code').init();
                setTimeout(function(){
                    init();
                }, 3000);
            }
            
        });
    }

    $('.entry-dream .btn-close').on('click', function(){
        $('.entry-dream').hide();
    })
});

// setInterval(function(){
//  $('.railing-left').append('<i class="railing railing07"></i>');
//  $('.railing-right').append('<i class="railing railing07"></i>');
// }, 1000);
// setInterval(function(){
//  $('.railing-left').children().first().remove();
//  $('.railing-right').children().first().remove();
// }, 2000)