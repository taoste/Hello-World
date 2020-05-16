/**
 * 彩票模块推广入口
 * @author: Travis
 * @date:   2014-12-18
 */
define(function(require, exports, module) {
    var Common = require('common');
    var Menu = {
		slide: new MSlide({selector: ".wifi_wrap", listSelector: ".con_wrap",onSlide: function(){ $("#conIndex").find('li').removeClass('curr').eq(Menu.slide.index).addClass('curr');}}),
		changePage : function(){//手动换页
			$("#conIndex").on("click","li", function() {
				Menu.slide.to($(this).index());
			});
		},
		setLinks : function(){//设置连接
			var val = [],
				action = '';
			if(Common.isPC()){
				val = ['http://www.duba.com/?f=wf','http://v.duba.com/?f=wifi','http://www.ijinshan.com/12306/?f=wifi','http://www.sina.cn/?wm=3192_1000','http://ai.taobao.com/?pid=mm_26866744_2384196_22160019&unid=','http://www.58.com/?path=?utm_source%3dd_123duba%26utm_campaign%3d123duba-102%26spm=jinshan-mingzhan-1020','http://xiaoshuo.duba.com/?f=wifi','http://www.duba.com/pic.html?f=wifi','http://www.duba.com/gaoxiao_0_1.html?f=wifi'] ; 
				action = 'http://www.baidu.com/baidu';
				$('#J_Search').prepend('<input name="tn" type="hidden" value="98012088_4_dg"><input name="ch" type="hidden" value="8">');
			}else{
				val = ['http://m.duba.com/?f=wf','http://v.m.liebao.cn/?f=wifi','http://cn.cmcm.com/activity/qp201412/?f=wifi','http://www.sina.cn/?wm=3192_1000','http://ai.m.taobao.com/vip/?pid=mm_41965724_3510738_23736360','http://m.58.com/?utm_source=liebao_gg','http://book.m.duba.com/?f=wifi','http://img.m.duba.com/?f=wifi','http://joke.m.duba.com/?f=wifi'];
				action = 'http://m.baidu.com/s';
				$('#J_Search').prepend('<input name="from" type="hidden" value="1010888z">');
			}
			$('#J_Menu').find('a').each(function(index){
				$(this).attr('href',val[index]);
			});
			$('#J_Search').attr('action',action);
		},
		init : function(){
			Menu.setLinks();
			Menu.changePage();
		}
	}; 
    
    module.exports = Menu;
});