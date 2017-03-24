var GLOBAL=GLOBAL||{};

$(function(){
	function complateSie(){
			$(".bigbos,.logo-box,.wrap,.wrap_1,.firstpage").width($(window).width());
			GLOBAL.height=$(window).height()-50;
			$('.firstpage').height($(window).height());
			var height=$(".fixedd,.wrap_1").height($(window).height()-50);
			$('.wrap').height(height);
	}
	complateSie();
	$(window).resize(function(){
		complateSie();
		mouseScrollMove();
	})
	//鼠标滚动事件
	//ie   chrome
	window.onmousewheel=mouseScroll
	//ff
	window.addEventListener("DOMMouseScroll",mouseScroll)

	function mouseScroll(ev){
		//判断滚动方向
		var oEvent=ev||window.event;
		if(oEvent.wheelDelta){
			if(oEvent.wheelDelta>0){
				up();
			}else{  down(); }
		}
		else{
			if(oEvent.detail>0){
				down();
			}
			else{  up();  }
		}
	}
//	var index=0;
//	var now=0;
//	function down(){
//		index++;
//		if(index<=$('.wrap_1').length-1){
//			$('.wrap').animate({top:-index*($(window).height()-50)})
//		}
//		now=index
//	}
//	function up(){
//		if(now>0){
//			now--;
//			$('.wrap').animate({top:-now*($(window).height()-50)})
//		}
//		
//	}
	(function(){
		$('.logo-box1 li').each(function(index){
			$('.logo-box1 li').eq(index).click(function(){
				if(index>=0&&index<=3){
					$('.wrap').animate({top:-(index+1)*GLOBAL.height})
				}else if(index>3){
					return;
				}
			})
	})
	})();
	
	GLOBAL.MouseScrollIndex=0;
	GLOBAL.sildingTimer=null;//控制每2秒能切换一页
	GLOBAL.sildingDelay=2000;
	GLOBAL.sildingGoing=false;
	GLOBAL.isFirstSlide=true; //第一次滑动，不允许翻页，   false   允许翻页
	GLOBAL.firstSlideTimer=null;
	function up(){
		if(!GLOBAL.sildingGoing){
			GLOBAL.sildingGoing=true;
			GLOBAL.sildingTimer=setTimeout(function(){
				GLOBAL.sildingGoing=false;
			},GLOBAL.sildingDelay)
		}else{
			return;
		}
		
		if(GLOBAL.isFirstSlide){
			if(!GLOBAL.firstSlideTimer){
				GLOBAL.firstSlideTimer=setTimeout(function(){
				GLOBAL.isFirstSlide=false;
				GLOBAL.firstSlideTimer=null;
			},10);
			}
			return;
		}
		GLOBAL.isFirstSlide=true;
		GLOBAL.MouseScrollIndex--;
		if(GLOBAL.MouseScrollIndex<0){
			GLOBAL.MouseScrollIndex=0;
		}
		mouseScrollMove();
	}
	function down(){
		if(GLOBAL.welcomeAnimate==false){
			return;
		}
		if(!GLOBAL.sildingGoing){
			GLOBAL.sildingGoing=true;
			GLOBAL.sildingTimer=setTimeout(function(){
				GLOBAL.sildingGoing=false;
			},GLOBAL.sildingDelay)
		}else{
			return;
		}
		if(GLOBAL.isFirstSlide){
			if(!GLOBAL.firstSlideTimer){
				GLOBAL.firstSlideTimer=setTimeout(function(){
				GLOBAL.isFirstSlide=false;
				GLOBAL.firstSlideTimer=null;
			},10);
			}
			return;
		}
		GLOBAL.isFirstSlide=true;
		GLOBAL.MouseScrollIndex++;
		if(GLOBAL.MouseScrollIndex>=$('.wrap_1').length){
			GLOBAL.MouseScrollIndex=$('.wrap_1').length-1;
		}
		mouseScrollMove();
	}
	function mouseScrollMove(){
		$('.wrap').animate({top:-GLOBAL.MouseScrollIndex*GLOBAL.height})
	}

	GLOBAL.welcomeAnimate=false;
	welcomeAnimate();
	function welcomeAnimate(){
		setTimeout(function(){
			$('.tu11').animate({top:0},600,function(){
				$('.welcome').each(function(index){
					var $this=$(this);
					setTimeout(function(){
						$this.show().addClass("animated fadeInUp");
					},250*index);
				});
			});
			
		},4000);
		
		setTimeout(function(){
			$('.firstpage').slideUp(800);
			GLOBAL.welcomeAnimate=true;
		},7000)
	}
	$('.firstpage').dblclick(function(){
		$('.firstpage').slideUp(800);
			GLOBAL.welcomeAnimate=true;
	})
	
	$('.jiahi li:odd').css("marginLeft","48px");
	$('.jiahi li:even').css("marginLeft","60px");
	$('.jiahi li:lt(2)').css("marginTop","10px");
	$('.jiahi li:gt(1)').css("marginTop","46px");
	
	$('.wrap_4 .ul2 li:last').css("borderBottom","1px dashed #a3a5a7");
	$('.wrap_4 .ul2 li:eq(1)').css("textIndent","34px");
	$('.wrap_4 .ul2 li:eq(5)').css("textIndent","34px");
	$('.wrap_4 .ul3 li:last').css("borderBottom","1px dashed #a3a5a7");
	$('.wrap_4 .ul3 li:eq(1)').css("textIndent","34px");
	$('.wrap_4 .ul3 li:eq(5)').css("textIndent","34px");
//	setTimeout(function(){
//		$('.jiahi-top dd').css("background","url(images/aboutxiaoniao/jiazhi_border_12.png)")
//	},200)
	
	
(function()
{
  var bgCounter = 0,
    backgrounds = [
      "images/aboutxiaoniao/jiazhi_border_11.png",
      "images/aboutxiaoniao/jiazhi_border_12.png",
    ];
  function changeBackground()
  {
    bgCounter = (bgCounter+1) % backgrounds.length;
    $('.jiahi-top dd').css('background', ' url('+backgrounds[bgCounter]+') no-repeat');
    setTimeout(changeBackground, 1500);
  }
  changeBackground();
})();

	
(function()
{
  var bgCounter = 0,
    backgrounds = [
      "images/aboutxiaoniao/jiazhi_border_21.png",
      "images/aboutxiaoniao/jiazhi_border_22.png",
    ];
  function changeBackground()
  {
    bgCounter = (bgCounter+1) % backgrounds.length;
    $('.jiahi-top dt').css('background', ' url('+backgrounds[bgCounter]+') no-repeat');
    setTimeout(changeBackground, 1500);
  }
  changeBackground();
})();

(function()
{
  var bgCounter = 0,
    backgrounds = [
      "images/aboutxiaoniao/jiazhi_border_31.png",
      "images/aboutxiaoniao/jiazhi_border_32.png",
    ];
  function changeBackground()
  {
    bgCounter = (bgCounter+1) % backgrounds.length;
    $('.jiahi-foot dd').css('background', ' url('+backgrounds[bgCounter]+') no-repeat');
    setTimeout(changeBackground, 2000);
  }
  changeBackground();
})();

	
(function()
{
  var bgCounter = 0,
    backgrounds = [
      "images/aboutxiaoniao/jiazhi_border_41.png",
      "images/aboutxiaoniao/jiazhi_border_42.png",
    ];
  function changeBackground()
  {
    bgCounter = (bgCounter+1) % backgrounds.length;
    $('.jiahi-foot dt').css('background', ' url('+backgrounds[bgCounter]+') no-repeat');
    setTimeout(changeBackground, 2000);
  }
  changeBackground();
})();

})

//当动画结束之后，滚轴能够操纵轮播图     双击
//当屏幕放大或缩小时，修正到正确位置      导航
	