var GLOBAL=GLOBAL||{};
$(function(){
//	alert(getUrlParams("articleId"));
//	alert(getUrlParams("type"));
//	$('.donghua').hover(function(){
//		$('.donghua1').fadeToggle(300)
//	})
	$('#header').load('header.html');
	$('#footer').load('footer.html');
GLOBAL.articleid=getUrlParams("articleid");  //bi mian yu  qi ta bian lian wuran 
GLOBAL.type=getUrlParams("type");
loadArticleData();
	(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>700){
				$('.back').css("display","block")
			}else{
				$('.back').css("display","none")
			}
		})
		$('.back').click(function(){
			$('body,html').animate({
				scrollTop:0
			})
		})
	})();
});



//function loadArticleData(){
//	if(GLOBAL.type){
//		//可以将json文件转换成php    通过ajax请求
//		var articleData=articleData[GLOBAL.type+GLOBAL.articleid];
//	}
//}
function loadArticleData(){
	if (GLOBAL.type) {
		var articleCon=articleData[GLOBAL.type+GLOBAL.articleid];
		var articleUpdate=articleCon.data.creatAt||articleCon.data.creatAt.updateAt;
//		alert(JSON.stringify(articleCon))
		$('.model h1').html(articleCon.data.typeTitle);
		$('.model span').html(articleCon.data.typeEntitle);
		$('.article-bottom h2').html(articleCon.data.title);
		$('.article-bottom img').attr("src",articleCon.data.coverImg);
		$('.act-txt').html(articleCon.data.content);
		$('.art-author').html('<span class="art-date">'+articleUpdate+'</span> '+articleCon.data.creatByFullName);
	}
};

function getUrlParams(name){
	 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	 var r = window.location.search.substr(1).match(reg);
	 if(r!=null)
		 return  r[2];
	 else 
		 return "";
}

