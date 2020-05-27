(function(){
	window.requestAnimFrame = (function(){
	  return  function( callback ){
	            window.setTimeout(callback, 1000 / 25);
	          };
	})();
	//判断是否支持canvas
	var isCanvas=function(){
		try{
			document.createElement('canvas').getContext('2d');
			return true;
		}catch(e){  
            return false;
        }; 
	}();
	if(!isCanvas)
		return;

	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");
	var ww=document.documentElement.clientWidth<1200?1200:document.documentElement.clientWidth,wh=document.documentElement.clientHeight;
	var relX=(ww-1200)/2+403,relY=54;
	canvas.setAttribute("width", ww);
	canvas.setAttribute("height",wh);
	canvas.style.left=-1*relX+"px";
	/*离屏canvas*/
	var oCanvas=document.createElement("canvas");
	var oContext=oCanvas.getContext("2d");
	oCanvas.width=ww;
	oCanvas.height=wh;

	var lineArr=[];
	var starArr=[],dStarArr=[];
	var totalStars=0;
	var moveStarArr=[],dMoveStarArr=[];

	var endNum=0,totalFps=0;

	var simg1=new Image();
	simg1.src="img/index/star_1.png";
	var simg2=new Image();
	simg2.src="img/index/star_2.png";
	var simg3=new Image();
	simg3.src="img/index/star_3.png";

	var isInPoint=function(s,e,c){
		return c>=s&&c<=e||c>=e&&c<=s
	}
	var isPointNear=function(p1,p2){
		return Math.sqrt(Math.pow(p1.x-p2.x,2)+Math.pow(p1.y-p2.y,2))<50
	}
	var isPointsNear=function(p,pArr){
		for(var i=0;i<pArr.length;i++){
			if(isPointNear(p,pArr[i]))
				return true;
		}
		return false;
	}


	function lineCreator(startP,endP,startT,dur,width){
		//起点
		this.startP=startP;
		//终点
		this.endP=endP;
		//画线起始时间
		this.startT=startT;
		//用时
		this.dur=dur;
		//当前终点
		this.curP={x:this.startP.x,y:this.startP.y};
		//是否已画完
		this.isEnd=false;
		//线段粗细
		this.lWidth=width;
		var opc=.3;
		//画线
		if(typeof this.draw!="function"){
			lineCreator.prototype.draw=function(context){		
				context.save();
				context.globalAlpha=opc;
				context.lineWidth=this.lWidth;
				context.strokeStyle="#a6dcff";
				context.beginPath();
				context.moveTo(relX+this.startP.x,relY+this.startP.y-40);
				context.lineTo(relX+this.curP.x,relY+this.curP.y-40);
				context.stroke();
				context.restore();
				
			}
		}
		//线的改变
		if(typeof this.move!="function"){
			lineCreator.prototype.move=function(){
				if(!this.isEnd){
					this.curP.x+=(this.endP.x-this.startP.x)/this.dur;
					this.curP.y+=(this.endP.y-this.startP.y)/this.dur;
					if(!isInPoint(this.startP.x,this.endP.x,this.curP.x)&&!isInPoint(this.startP.y,this.endP.y,this.curP.y))
						this.curP.x=this.endP.x,this.curP.y=this.endP.y,this.isEnd=true,endNum++;
				}	
			}
		}
	}

	function moveStarCreator(x,y,s){
		this.img=simg3;
		this.x=x;
		this.y=y;
		this.size=s;
		this.dOpc=true;
		this.opc=1;
		this.destory=false;
		if(typeof this.nextFps!="function"){
			moveStarCreator.prototype.nextFps=function(){
				this.y+=15;
				this.x-=25.5;
				if(this.x<-1*ww||this.y>wh*2)
					this.destory=true;
				if(this.dOpc){
					this.opc-=.1;
					if(this.opc<=.2)
						this.dOpc=false
				}else{
					this.opc+=.1;
					if(this.opc>=1)
						this.opc=1,this.dOpc=true;
				}
			}
		}
		if(typeof this.draw!="function"){
			moveStarCreator.prototype.draw=function(context){
				context.save();
				context.globalAlpha=this.opc;
				context.drawImage(this.img,0,0,176,103,this.x,this.y,176*this.size,103*this.size);
				context.restore();
			}
		}

	}

	function starCreator(){
		this.star=null;
		this.x=0;
		this.y=0;
		this.osize={w:0,h:0};
		this.csize={w:0,h:0};
		this.opc=0;
		this.direct=0;
		this.destory=false;
		if(typeof this.config!="function"){
			starCreator.prototype.config=function(pos,img,osize,csize){
				this.x=pos.x,this.y=pos.y;
				this.star=img;
				this.osize=osize;
				this.csize=csize;
			}
		}
		if(typeof this.flicker!="function"){
			starCreator.prototype.flicker=function(){
				if(this.direct==0){
					this.opc+=.08;
					if(this.opc>=1)
						this.direct=1;
				}else{
					this.opc-=.08;
					if(this.opc<=0)
						this.destory=true;
				}
				
			}
		}
		if(typeof this.draw!="function"){
			starCreator.prototype.draw=function(context){
				context.save();
				context.globalAlpha=this.opc;
				context.drawImage(this.star,0,0,this.osize.w,this.osize.h,this.x,this.y,this.csize.w,this.csize.h);
				context.restore();
			}
		}
		if(typeof this.reset!="function"){
			starCreator.prototype.reset=function(){
				this.star=null;
				this.x=0;
				this.y=0;
				this.osize={w:0,h:0};
				this.csize={w:0,h:0};
				this.opc=0;
				this.direct=0;
				this.destory=false;
			}
		}
	}


	var randomer={
		ranImg:function(){
			return Math.floor(Math.random()*2)==1?simg1:simg2
		},
		ranSize:function(){
			var s=Math.ceil(3+(Math.random()*5));
			return {w:s,h:s}
		},
		ranPos:function(){
			return {x:Math.ceil(Math.random()*(ww-40)+20),y:Math.ceil(Math.random()*(wh-200))}
		}
	}



	var starControler={
		
		create:function(n){
			var s,img,pos,os,cs,cc;
			for(var i=0;i<n;i++){
				if(dStarArr.length>0)
					s=dStarArr.splice(0,1)[0];
				else
					s=new starCreator();
				img=randomer.ranImg();
				pos=randomer.ranPos();
				cc=0;
				while(isPointsNear(pos,this.getPos(starArr))&&cc<10){
					pos=randomer.ranPos();
					cc++;
				}
				os={w:16,h:16};
				cs=randomer.ranSize();
				s.config(pos,img,os,cs);
				starArr.push(s);
			}
		},
		getPos:function(stars){
			var pos=[];
			for(var i=0;i<stars.length;i++){
				pos.push({x:stars[i].x,y:stars[i].y})
			}
			return pos;
		},

		createMove:function(n){
			var star,x,y,s;

			for(var i=0;i<n;i++){
				x=Math.random()*ww+ww/5;
				y=0;
				s=Math.random()*.5+.5;
				if(dMoveStarArr.length>0){
					star=dMoveStarArr.splice(0,1)[0];
					star.x=x,star.y=y,star.size=s,star.opc=1,star.dOpc=1,star.destory=false
				}
				else{
					star=new moveStarCreator(x,y,s)
				}
				moveStarArr.push(star);
			}

		}
	}



        context.lineWidth = .3;
        context.strokeStyle = (new Color(150)).style;

        var mousePosition = {
          x: 30 * canvas.width / 100,
          y: 30 * canvas.height / 100
        };

        var dots = {
          nb: 70,
          distance: 100,
          d_radius: 150,
          array: []
        };

        function colorValue(min) {
          //return Math.floor(Math.random() * 255 + min);
        return Math.floor(255 + min);
        }
        
        function createColorStyle(r,g,b) {
          return "rgba(166,220,255,.5)";
          //return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
        }
        
        function mixComponents(comp1, weight1, comp2, weight2) {
          return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
        }
        
        function averageColorStyles(dot1, dot2) {
          var color1 = dot1.color,
              color2 = dot2.color;
          
          var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
              g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
              b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
          return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
        }
        
        function Color(min) {
          min = min || 0;
          this.r = colorValue(min);
          this.g = colorValue(min);
          this.b = colorValue(min);
          this.style = createColorStyle(this.r, this.g, this.b);
        }

        function Dot(){
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;

          this.vx = -.5 + Math.random();
          this.vy = -.5 + Math.random();

          this.radius = Math.random() * 2;

          this.color = new Color();
         // console.log(this);
        }

        Dot.prototype = {
          draw: function(){
            /*context.beginPath();
            context.fillStyle = this.color.style;
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            context.fill();
			*/
			context.drawImage(simg2,0,0,16,16,this.x-3,this.y-3,6,6);
          }
        };

        function createDots(){
          for(i = 0; i < dots.nb; i++){
            dots.array.push(new Dot());
          }
        }

        function moveDots() {
          for(i = 0; i < dots.nb; i++){

            var dot = dots.array[i];

            if(dot.y < 0 || dot.y > canvas.height){
              dot.vx = dot.vx;
              dot.vy = - dot.vy;
            }
            else if(dot.x < 0 || dot.x > canvas.width){
              dot.vx = - dot.vx;
              dot.vy = dot.vy;
            }
            dot.x += dot.vx;
            dot.y += dot.vy;
          }
        }

        function connectDots() {
          for(i = 0; i < dots.nb; i++){
            for(j = 0; j < dots.nb; j++){
              i_dot = dots.array[i];
              j_dot = dots.array[j];

              if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                  context.beginPath();
                  context.strokeStyle = averageColorStyles(i_dot, j_dot);
                  context.moveTo(i_dot.x, i_dot.y);
                  context.lineTo(j_dot.x, j_dot.y);
                  context.stroke();
                  context.closePath();
                }
              }
            }
          }
        }

        function drawDots() {
          for(i = 0; i < dots.nb; i++){
            var dot = dots.array[i];
            dot.draw();
          }
        }

        canvas.addEventListener("mousemove",function(e){
        	mousePosition.x = e.pageX;
          	mousePosition.y = e.pageY;
        },false)
        canvas.addEventListener("mouseleave",function(e){
        	mousePosition.x = canvas.width / 2;
          	mousePosition.y = canvas.height / 2;
        },false)

        createDots();

	var animate=function(){
		oContext.clearRect(0,0,ww,wh);
		//画线
		for(var i=0;i<lineArr.length;i++){
			if(lineArr[i].startT<=totalFps){
				lineArr[i].move();
				lineArr[i].draw(oContext);	
			}				
		}
		//产星星
		if(starArr.length<50){
			starControler.create(Math.ceil(Math.random()*10));
		}
		if(moveStarArr.length<2){
			starControler.createMove(Math.ceil(Math.random()*2));
		}

		//画星星
		for(var i=0;i<starArr.length;i++){
			starArr[i].flicker();
			if(starArr[i].destory){
				starArr[i].reset();
				dStarArr.push(starArr[i]);
				starArr.splice(i,1);
				i--;
			}else{
				starArr[i].draw(oContext);
			}
		}

		//画流星
		for(var i=0;i<moveStarArr.length;i++){
			moveStarArr[i].nextFps();
			moveStarArr[i].draw(oContext);
			if(moveStarArr[i].destory){
				dMoveStarArr.push(moveStarArr[i]);
				moveStarArr.splice(i,1);
				i--;
			}
		}
	

		context.clearRect(0,0,ww,wh);
		context.drawImage(oCanvas,0,0);

		moveDots();
        connectDots();
        drawDots();

		if(lineArr.length>endNum)
			totalFps++;
		requestAnimFrame(animate);	
	}	


	window.indexEffect=function(time,callback){
		
	}
	indexEffect.prototype.init=function(){
		lineArr=[
			new lineCreator({x:0,y:84},{x:82,y:80},0,10,1),     //1
			new lineCreator({x:0,y:84},{x:85,y:111},0,10,1),    //2
			new lineCreator({x:82,y:80},{x:93,y:76},11,2,1),    //3
			new lineCreator({x:81,y:80},{x:85,y:111},11,2,1),   //4
			new lineCreator({x:83,y:79},{x:86,y:101},13,3,1),   //5
			new lineCreator({x:93,y:76},{x:85,y:111},13,3,2),   //6
			new lineCreator({x:85,y:111},{x:141,y:82},16,3,2),  //7
			new lineCreator({x:93,y:76},{x:141,y:82},16,3,1),   //8
			new lineCreator({x:85,y:111},{x:81,y:136},16,3,1),  //9
			new lineCreator({x:85,y:111},{x:94,y:136},16,3,2),  //10
			new lineCreator({x:141,y:82},{x:121,y:136},19,3,2), //11
			new lineCreator({x:141,y:82},{x:179,y:119},19,3,1), //12
			new lineCreator({x:155,y:136},{x:179,y:119},22,2,1), //13
			new lineCreator({x:153,y:136},{x:232,y:79},22,4,1),  //14
			new lineCreator({x:232,y:79},{x:376,y:0},26,6,1),    //15
			new lineCreator({x:232,y:79},{x:292,y:136},26,3,1),  //16
			new lineCreator({x:303,y:136},{x:376,y:0},29,3,1),   //17
			new lineCreator({x:102,y:225},{x:168,y:272},0,10,1), //18
			new lineCreator({x:141,y:225},{x:168,y:272},0,10,2), //19
			new lineCreator({x:168,y:272},{x:244,y:240},11,13,1), //20
			new lineCreator({x:168,y:272},{x:220,y:299},11,5,1), //21
			new lineCreator({x:220,y:299},{x:244,y:240},16,8,2), //22
			new lineCreator({x:220,y:299},{x:281,y:354},16,4,1), //23
			new lineCreator({x:281,y:354},{x:244,y:240},20,4,1), //24
			new lineCreator({x:244,y:240},{x:215,y:225},24,5,1), //25
			new lineCreator({x:244,y:238},{x:218,y:225},24,5,1), //26
			new lineCreator({x:244,y:240},{x:251,y:225},24,5,2), //27
			new lineCreator({x:244,y:240},{x:310,y:225},24,8,2), //28
			new lineCreator({x:377,y:171},{x:433,y:193},32,8,2), //29
			new lineCreator({x:377,y:208},{x:433,y:193},32,8,2) //30

		];
		moveStarArr.push(new moveStarCreator(1000,0,1));
	}
	indexEffect.prototype.start=function(){	
		requestAnimFrame(animate);
	};

})()