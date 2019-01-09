$(function(){
     //语言默认英文
     var language = $('#lang :selected').val();
     $("span:lang(ch)").hide();
     $("span:lang(en)").show();
     //用语言种类选择
     $('#lang').change(function(){
         language = $('#lang :selected').val();
         if(language == "en"){
             $("span:lang(ch)").hide();
             $("span:lang(en)").show();
         }
         else{
             $("span:lang(en)").hide();
             $("span:lang(ch)").show();
         }
     })
 })