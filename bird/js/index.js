$(function(){
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	
	//主banner开始
	(function(){
		var oBanner=$('.banner');
		var oLeft=oBanner.find('.oleft');
		var oRight=oBanner.find('.oright');
		var aLi=oBanner.find('.banner02 li');
		var index=0;
	aLi.click(function(){
		aLi.removeClass("banner-li");
		$(this).addClass("banner-li");
		index=$(this).index();
		$('.scroll div').fadeOut().stop().eq(index).fadeIn();
	})
	
	oLeft.click(function(){
		index--;
		if(index<0){
			index=$(aLi).length-1;
		}
		aLi.removeClass("banner-li").eq(index).addClass("banner-li");
		$('.scroll div').fadeOut().eq(index).fadeIn();
	})
	
	oRight.click(function(){
		index++;
		if(index>aLi.length-1){
			index=0;
		}
		aLi.removeClass("banner-li").eq(index).addClass("banner-li");
		$('.scroll div').fadeOut().eq(index).fadeIn();
	});
	})();
	//主banner结束
	
	
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
	
	//产品介绍开始
	(function(){
	var oProduct=$('.product');
	var aLis=oProduct.find('li');
	var aDiv=oProduct.find('.product-right');
	var oLeft=oProduct.find('.oleft');
	var oRight=oProduct.find('.oright');
	var index=0;
	aLis.each(function(index){
				$(this).css("top",index*($('.product-banner li').height()+57))	
	})
	aLis.click(function(){
		aLis.removeClass("producr-li");
		$(this).addClass("producr-li");
		
		var now=$(this).index();
		
		if(now<index){
			aDiv.hide().eq(now).show()
			aDiv.removeClass("fadeInRight fadeInLeft").eq(now).addClass('animated fadeInLeft');
		}else{
			aDiv.hide().eq(now).show()
			aDiv.removeClass("fadeInRight fadeInLeft").eq(now).addClass('animated fadeInRight');
		}
		index=$(this).index();
		
	})
	
	
	oLeft.click(function(){
		index--;
		if(index<0){
			index=aDiv.length-1;
		}
		
		aDiv.hide().eq(index).show()
		aDiv.removeClass("fadeInRight fadeInLeft").eq(index).addClass('animated fadeInLeft');
		aLis.removeClass("producr-li").eq(index).addClass("producr-li")
	})
	
	oRight.click(function(){
		index++;
		if(index>aDiv.length-1){
			index=0;
		}
		
		aDiv.hide().eq(index).show()
		aDiv.removeClass("fadeInRight fadeInLeft").eq(index).addClass('animated fadeInRight');
		aLis.removeClass("producr-li").eq(index).addClass("producr-li")
	})
	
	
	})();
	//产品介绍结束
	
	

	//公司简介开始
	(function(){
	var oProduct=$('.company');
	var aLis=oProduct.find('li');
	var index=0;
	aLis.each(function(index){
				$(this).css("top",index*($('.product-banner li').height()+57))	
	})
	aLis.click(function(){
		aLis.removeClass("producr-li");
		$(this).addClass("producr-li");
	})
	
	})();
	//公司简介结束
	
	
	
	//团队介绍开始
	(function(){
		var oTeam=$('.team');
		var oScroll=oTeam.find('.smallbox');
		var aUl=oScroll.find('ul');
		var oLeft=oTeam.find('.oleft');
		var oRight=oTeam.find('.oright');
		var aLi=$('.ulll li');
		var index=0;
		oRight.click(function(){
			index++;
			if(index>aLi.length-1){
				index=0
			}
			aLi.removeClass("banner-li").eq(index).addClass("banner-li");
			oScroll.animate({"left":"100px"}).delay(100).animate({"left":"-1100px"},function(){
				oScroll.children().first().appendTo(oScroll);
				oScroll.css("left","0")
			})
		});
		oLeft.click(function(){
			index--;
				if(index<0){
				index=aLi.length-1
			}
			aLi.removeClass("banner-li").eq(index).addClass("banner-li");
			oScroll.children().last().prependTo(oScroll);
				oScroll.css("left","-1100px")
			oScroll.animate({"left":"-1200px"}).delay(100).animate({"left":"0"},function(){
			})
		})
	})();



	
	function ho(ele){    //封装函数
		$(ele).hover(
			function(){
				$(this).addClass('animated tada');
			},
			function(){
				$(this).removeClass('animated tada');
			}
		)
	}    //为什么不可以加分号
//业务范围部分
(function(){

	ho(".yewuli3");
	ho(".yewuli5");
	
	$('.yewuli5').click(function(){
		var index=$(this).index('.yewuli5');
		if($(this).hasClass('show')){
			$('.yewu-box1>p').slideUp();
			$(this).removeClass('show');
		}else{
			$('.yewu-box1>p').slideUp().delay(300).eq(index).slideDown();
			$('.yewuli5').removeClass('show');
			$(this).addClass('show');
		}
		
	})
	
	$('.yewuli3').click(function(){
		var index=$(this).index('.yewuli3');
		if($('.yewuli5').eq(index).hasClass('show')){
			$('.yewu-box1>p').slideUp();
			$('.yewuli5').removeClass('show')
		}else{$('.yewuli5').removeClass('show').eq(index).addClass('show');
			$('.yewu-box1>p').slideUp().delay(300).eq(index).slideDown();
			
		}
		
	})
	
	
})();
//业务范围结束	



//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.395645,39.929986);//定义一个中心点坐标
        map.centerAndZoom(point,12);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
	map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    
    initMap();//创建和初始化地图
	
})