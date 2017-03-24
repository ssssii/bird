var GLOBAL=GLOBAL||{}
$(function(){
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	(function(){
		//毛笔动画开始
		$('.pen').click(function(){
			$('.xiaonian-main h2').css("width","107px")
							  	  .css("background-position-x","-993px")
							      .animate({"width":"1100px","backgroundPositionX":"0"},2000)
		})//毛笔动画结束
		//图片小三角动画开始
		$('.xiaonian-main li:even').css("margin-left","0");
		//图片小三角动画结束
		//打开到第三页面
		$('#list').delegate(".aaaa","click",function(){
			var articleId=$(this).attr("articleid");
			window.open("article.html?articleid="+articleId+"&type=xiaoniaoNews");
		})
		
		//本页面数据更新
		loadAtricleList();
		$('.list-more').click( function(){loadAtricleList(); })
		
		})();
		//回到顶部动画
		(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>700){
				$('.back').css("display","block")
			}else{
				$('.back').css("display","none")
			}
		});
		$('.back').click(function(){
			$('body,html').animate({
				scrollTop:0
			})
		})
		})();
})

function loadAtricleList(){
	//  清 假 数 据
		if(!GLOBAL.pageStart){
			GLOBAL.pageStart=0;
			$('#list').html("");
		}
		$.ajax({
				url:"http://localhost/11111.php",
				type:"get",
				data:{
					page:GLOBAL.pageStart,
				},
				success:function(data){
					//alert(typeof data)   //string类型
					//string ->json
					showData(JSON.parse(data))
//					alert(data)
				}
		})
}
	
	
function showData(data){
		var oList=data.data.list;
		for(var i=0;i<oList.length;i++){
			//    获取模板
			var model=$('#list-model').html();
			model=model.replace('$url$',oList[i].coverImg)
				.replace('$title$',oList[i].title)
				.replace('$date$',oList[i].creatAt)
				.replace('$articleid$',oList[i].sysId)
				.replace('$content$',oList[i].describe);
		$('#list').append(model);
		$('#list li:even').css("margin-left","0");
		}
		var count=data.data.count;
		
		GLOBAL.pageStart++;
		
		GLOBAL.pageCount=Math.ceil(count/data.data.pageSize);
		
		if(GLOBAL.pageStart>=GLOBAL.pageCount){
			$('.list-more').fadeTo(100,0.3);
			$('.scroll-top').css("background","url(images/list_gomore_bg_nomore.jpg)no-repeat");
		}
		
	}
	
//js文件 写法	
//	(function(){
//		$('.pen').click(function(){
//		$('.xiaonian-main h2').css("width","107px")
//							  .css("background-position-x","-993px")
//							  .animate({
//							  	"width":"1100px","backgroundPositionX":"0"
//							  },2000)
//		})
		
//		$('.xiaonian-main li:even').css("margin-left","0");
		
		
//	})();
//	articleonlod();
//	$('.list-more').click(function(){
//		articleonlod();
//	})
//})

//function  articleonlod(){
//	if(!GLOBAL.pageStart){
//		GLOBAL.pageStart=0;
//		$('#list').html("");
//	}
//	var oListData=listData['listData0'+GLOBAL.pageStart];
//	var oList=oListData.data.list;
//	for(var i=0;i<oList.length;i++){
//		var model=$('#list-model').html();
//		model=model.replace('$url$',oList[i].coverImg)
//		.replace('$title$',oList[i].title)
//		.replace('$date$',oList[i].creatAt)
//		.replace('$content$',oList[i].describe);
//		$('#list').append(model);
//		$('#list li:even').css("margin-left","0");
//	}
//	GLOBAL.pageStart++;



