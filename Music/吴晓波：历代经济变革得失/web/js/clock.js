/* *****************************************************************************
* 显示的是用户本机的时间
* 在需要显示时间的地方加入: <script language="javascript" src="./js/clock.js"></script>
* ***************************************************************************** */

var years ;
var months ;
var days = -1 ;
var present_day ;
var hours ;
var minutes ;
var seconds ;

// 农历参数
var lunar_month, lunar_day, lunar_leap ;

// 定义农历信息
var lunar_info = new Array( 
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x05ac0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,0x14b63) ;

// 星期的汉字表示
//var week_in_chinese = new Array( "日", "一", "二", "三", "四", "五", "六", "日" ) ;
var week_in_english = new Array( "Sun.", "Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat.", "Sun." ) ;
var lunar_hanzi_day_postfix = new Array( '', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ) ;
var lunar_hanzi_day_prefix = new Array( '初', '十', '廿', '卅', '□' ) ;

// 对时信号
function synchronize_time() {
	present_date=new Date() ;
	if( present_date.getDate() != days ) {
		years = present_date.getFullYear() ;
		months = present_date.getMonth() + 1 ;
		present_day = present_date.getDay() ; 
		days = present_date.getDate() ;
		get_lunar() ;
	}
	hours = present_date.getHours() ;
	minutes = present_date.getMinutes() ;
	seconds = present_date.getSeconds() ;
}

function print_time() {
	// 1. 先对时
	synchronize_time() ;
	// 2. 显示含农历的时间
	var s = shape_time( hours, minutes, seconds ) + '&nbsp&nbsp&nbsp&nbsp' + years + '-' + months + '-' + days+ '&nbsp&nbsp&nbsp&nbsp' + get_weekday( present_day ) ;
	s += "&nbsp&nbsp&nbsp&nbsp农历" + lunar_month + "月" + lunar_day ;
	document.getElementById( "clock" ).innerHTML = s ;
	setTimeout( "print_time()", 500 ) ;
}

function get_weekday( weekdays ) { 
	return week_in_english[ weekdays ] ;
}

// 时间输出格式处理
function shape_time( vhrs, vmin, vsec ) {
	if( vsec <= 9 ) vsec = "0" + vsec ;
	if( vmin<=9 ) vmin = "0"+ vmin ;
	if( vhrs <= 9 ) vhrs = "0" + vhrs ;
	return vhrs + ":" + vmin + ":" + vsec ;
}

function lYearDays( year ) {
	var i, sum = 348 ;
	for( i=0x8000; i>0x8; i>>=1 ) {
		sum += ( lunar_info[ year-1900 ] & i ) ? 1 : 0 ;
	}
	return ( sum + leapDays( year ) ) ;
}

function leapDays( year ) {
	if( leapMonth( year ) ) return( ( lunar_info[ year - 1900 ] & 0x10000 ) ? 30 : 29 ) ;
	else return( 0 ) ;
}

function leapMonth( year ) {
	return( lunar_info[ year - 1900 ] & 0xf ) ;
}

function monthDays( year, month ) {
	return( ( lunar_info[ year - 1900 ] &( 0x10000 >> month ) ) ? 30 : 29 ) ;
}

function Lunar( y, m, d ) {
	var i, leap = 0, temp = 0 ;
	var offset = ( Date.UTC( y, m, d ) - Date.UTC( 1900, 0 , 31 ) ) / 86400000 ;
	for( i=1900; i<2050&&offset>0; i++ ) { 
		temp = lYearDays( i ) ;
		offset -= temp ;
	}
	if( offset<0 ) {
		offset += temp;
		i-- ;
	}
	this.year = i ; 
	leap = leapMonth( i ) ;
	this.isLeap = false ; 
	for( i=1; i<13&&offset>0; i++ ){ 
		if( leap>0&&i==(leap+1) && this.isLeap==false ){
			--i ; 
			this.isLeap = true ;
			temp = leapDays(this.year) ;
		} else {
			temp=monthDays(this.year,i) ;
		} 
		if ( this.isLeap==true&&i==(leap+1) ) 
		this.isLeap=false ;
		offset -= temp ; 
	}
	if( offset == 0 && leap >0 && i == leap+1 )
	if( this.isLeap ) {
		this.isLeap=false ;
	} else {
		this.isLeap=true ;
		--i ; 
	}
	if( offset < 0 ) {
		offset += temp ;
		--i ;
	} 
	this.month = i ; 
	this.day = offset + 1 ;
}

// 获得农历日期的汉字表达
function get_lunar_day( lunar_day ) {
	var hanzi_lunar_day ;
	switch( lunar_day ) {
		case 10:
			hanzi_lunar_day = '初十' ;
			break ;
		case 20:
			hanzi_lunar_day = '二十' ;
			break ; 
		case 30:
			hanzi_lunar_day = '三十' ;
			break ;
		default:
			hanzi_lunar_day = lunar_hanzi_day_prefix[ Math.floor( lunar_day/10 ) ] ;
			hanzi_lunar_day += lunar_hanzi_day_postfix[ lunar_day%10 ] ;
			break ;
		}
		return ( hanzi_lunar_day ) ;
	}

// 获得农历月份
function get_lunar_month( lunar_month ) {
	if ( 1 == lunar_month ) return '正' ;
	else return lunar_hanzi_day_postfix[ lunar_month ] ;
}

function get_lunar() {
	var lunar_object = new Lunar( years, months-1, days ) ;
	lunar_month = get_lunar_month(lunar_object.month) ;
	lunar_day = get_lunar_day(lunar_object.day) ;
	lunar_leap = lunar_object.isLeap ;
	if( 1 == lunar_leap ) {
		lunar_month = "闰" + lunar_month ;
		}
}

// 将时间输出到 HTML 网页
document.write( "<span id=\"clock\" style=\"word-break:keep-all\"></span>" ) ;

// 显示时间
print_time() ;