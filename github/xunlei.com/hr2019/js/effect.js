// 射线动画
window.requestAnimFrame = (function(){
  return  function( callback ){
            window.setTimeout(callback, 1000 / 100);
          };
})();

function Ray(ele){
	this.canvas = document.querySelector(ele);
	this.canvas.width = 1920;
	this.canvas.height = 1080;
	this.ctx = this.canvas.getContext('2d');
	this.rayArr = [];
	this.rayArrs = [];
	this.rayStop = false;
	this.reconstructMethod();
}

Ray.prototype = {
	reconstructMethod: function(){
        this.animate = this.animate.bind(this);
    },
	init: function(){
		for(var i = 0; i < coords.length; i++){
			this.rayArr.push(new rayCreator(coords[i][0], coords[i][1]));
			this.rayArr.push(new rayCreator({x: coords[i][0].x + ( -5 + Math.random() * 10 ), y: coords[i][0].y + ( -5 + Math.random() * 10 )},{x: coords[i][1].x + ( -5 + Math.random() * 10 ), y: coords[i][1].y + ( -5 + Math.random() * 10)}));
			this.rayArr.push(new rayCreator({x: coords[i][0].x + ( -10 + Math.random() * 20 ), y: coords[i][0].y + ( -10 + Math.random() * 20 )},{x: coords[i][1].x + ( -10 + Math.random() * 20 ), y: coords[i][1].y + ( -10 + Math.random() * 20)}));
			this.rayArr.push(new rayCreator({x: coords[i][0].x + ( -15 + Math.random() * 30 ), y: coords[i][0].y + ( -15 + Math.random() * 30 )},{x: coords[i][1].x + ( -15 + Math.random() * 30 ), y: coords[i][1].y + ( -15 + Math.random() * 30)}));
			this.rayArr.push(new rayCreator({x: coords[i][0].x + ( -15 + Math.random() * 30 ), y: coords[i][0].y + ( -15 + Math.random() * 30 )},{x: coords[i][1].x + ( -15 + Math.random() * 30 ), y: coords[i][1].y + ( -15 + Math.random() * 30)}));
			this.rayArr.push(new rayCreator({x: coords[i][0].x + ( -15 + Math.random() * 30 ), y: coords[i][0].y + ( -15 + Math.random() * 30 )},{x: coords[i][1].x + ( -15 + Math.random() * 30 ), y: coords[i][1].y + ( -15 + Math.random() * 30)}));
		}

		for(var i = 0; i < this.rayArr.length;i++){
			this.rayArrs.push(new rayCreator({x: this.rayArr[i].start.x,y: this.rayArr[i].start.y},{x: this.rayArr[i].end.x * 2 - this.rayArr[i].start.x,y: this.rayArr[i].end.y * 2 - this.rayArr[i].start.y},true));
		}

		this.animate();
	},
	animate: function() {
		this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		for(var i = 0; i < this.rayArrs.length; i++){
			this.rayArrs[i].move(this.ctx);
		}
		if(this.rayStop){
			for(var i =0 ; i < this.rayArr.length; i++){
				this.rayArr[i].move(this.ctx);
			}
		}

		setTimeout(this.animate, 1000/60);
		// requestAnimFrame(this.animate);
	}
}

function rayCreator(sp,ep,repeat){
	this.start = {x:sp.x,y:sp.y};
	this.cur = {x:sp.x,y:sp.y};
	this.end = {x:ep.x,y:ep.y};
	this.lazy = Math.round(Math.random()*20);
	this.repeat = repeat||false;
	var time;
	if(this.repeat)
		time = 40 + Math.round(Math.random() * 80);
	else
		time = 40 + Math.round(Math.random() * 40);
	this.speedx = (this.end.x - this.start.x) / time;
	this.speedy = (this.end.y - this.start.y) / time;
	this.dw = 0;
	this.isEnd = false;
}

rayCreator.prototype.move=function(context){
	if(this.lazy > 0){
		this.lazy--;
		return;
	}
	if((this.cur.x >= this.end.x && this.cur.x + this.speedx <= this.end.x) || (this.cur.x <= this.end.x && this.cur.x + this.speedx >= this.end.x))
		this.isEnd = true;
	if(this.isEnd){
		if(this.repeat){
			this.cur.x = this.start.x;
			this.cur.y = this.start.y;
			this.lazy = Math.round(Math.random() * 20);
			this.isEnd = false;
			this.dw = 0;
		}else{
			this.cur.x = this.end.x;
			this.cur.y = this.end.y;
		}
	}else{
		this.cur.x += this.speedx;
		this.cur.y += this.speedy;
		this.dw += ((5 + Math.random() * 10) / 100);
	}
	context.save();
	var gradient = context.createLinearGradient(this.start.x, this.start.y, this.cur.x, this.cur.y); 
	gradient.addColorStop(0, 'rgba(179,207,217,0)');
	gradient.addColorStop(.5, 'rgba(251,251,252,0)'); 
	gradient.addColorStop(1, 'rgba(164,255,255,1)');
	context.fillStyle = gradient;
	context.lineJoin = 'round';
	context.lineWidth = 1;
	context.beginPath();

	var dd = Math.sqrt((this.cur.x - this.start.x) * (this.cur.x - this.start.x) + (this.cur.y - this.start.y) * (this.cur.y - this.start.y));
	var cos = (this.cur.x - this.start.x) / dd;
	var sin = (this.cur.y - this.start.y) / dd;


	context.moveTo(this.start.x,this.start.y);
	context.lineTo(this.cur.x - this.dw * sin,this.cur.y + this.dw * cos);
	context.lineTo(this.cur.x + this.dw * sin,this.cur.y - this.dw * cos);
	context.lineTo(this.start.x,this.start.y);
	context.fill();
	context.restore();
}

var coords=[
	[{x: 922,y: 545},{x: -44,y: 625}],
	[{x: 927,y: 549},{x: 1980,y: 657}],
	[{x: 923,y: 525},{x: 1920,y: 657}],
	[{x: 927,y: 551},{x: 1760,y: 1121}],
	[{x: 932,y: 546},{x: 883,y: -4}],
	[{x: 942,y: 526},{x: 1823,y: -10}],
	[{x: 926,y: 544},{x: 987,y: -17}],
	[{x: 928,y: 547},{x: 1903,y: -1}],
	[{x: 930,y: 545},{x: 2001,y: 248}],
	[{x: 930,y: 545},{x: 1711,y: -12}],
	[{x: 929,y: 542},{x: 1232,y: -19}],
	[{x: 927,y: 545},{x: 1008,y: -26}],
	[{x: 927,y: 538},{x: 682,y: -13}],
	[{x: 928,y: 537},{x: 847,y: -21}],
	[{x: 923,y: 541},{x: 145,y: -19}],
	[{x: 924,y: 548},{x: 153,y: 1091}],
	[{x: 921,y: 549},{x: -95,y: 874}],
	[{x: 919,y: 544},{x: -61,y: 646}],
	[{x: 924,y: 542},{x: -49,y: 433}],
	[{x: 916,y: 541},{x: -67,y: 109}],
	[{x: 924,y: 540},{x: 596,y: -17}],
	[{x: 929,y: 539},{x: 1258,y: -8}],
	[{x: 928,y: 536},{x: 1109,y: -8}],
	[{x: 928,y: 538},{x: 1041,y: -43}],
	[{x: 929,y: 536},{x: 816,y: -21}],
	[{x: 932,y: 546},{x: 1958,y: 425}],
	[{x: 939,y: 543},{x: 1951,y: 390}],
	[{x: 924,y: 556},{x: 825,y: 1050}],
	[{x: 930,y: 555},{x: 1038,y: 1060}],
	[{x: 932,y: 556},{x: 1255,y: 1081}],
	[{x: 916,y: 556},{x: 612,y: 1061}],
	[{x: 934,y: 542},{x: 1954,y: 686}],
	[{x: 939,y: 544},{x: 1976,y: 754}],
	[{x: 941,y: 547},{x: 2002,y: 903}],
	[{x: 938,y: 548},{x: 2078,y: 1032}],
	[{x: 932,y: 551},{x: 1935,y: 1140}],
	[{x: 934,y: 549},{x: 1543,y: 1145}],
	[{x: 925,y: 554},{x: 1122,y: 1102}],
	[{x: 921,y: 553},{x: 727,y: 1134}],
	[{x: 913,y: 549},{x: -58,y: 959}],
	[{x: 916,y: 549},{x: -30,y: 1108}],
	[{x: 920,y: 545},{x: 402,y: 1058}],
	[{x: 915,y: 544},{x: -163,y: 694}],
	[{x: 916,y: 540},{x: -47,y: 395}],
	[{x: 929,y: 539},{x: 1970,y: 90}],
	[{x: 934,y: 546},{x: 1994,y: 325}],
	[{x: 933,y: 543},{x: 1954,y: 191}],
	[{x: 932,y: 538},{x: 1884,y: -34}],
	[{x: 922,y: 539},{x: -30,y: -34}],
	[{x: 916,y: 533},{x: -44,y: 348}],
	[{x: 918,y: 538},{x: -17,y: 225}],
	[{x: 931,y: 533},{x: 1492,y: -20}],
	[{x: 926,y: 532},{x: 732,y: -41}],
	[{x: 921,y: 533},{x: 218,y: -166}],
	[{x: 913,y: 549},{x: -207,y: 763}]
];
