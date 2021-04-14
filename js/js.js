$('.search').click(function(e){
	$('.searchFixed').show();
	e.stopPropagation()
})
$('body').click(function(){
	$('.searchFixed').hide();
})
$('.searchFixed').click(function(e){
	$(this).show();
	e.stopPropagation()
})



// 拍卖二维码
$('.my').click(function(){
	$('.QR_code').show();
})
$('.QR_codeContent').click(function(e){
	$('.QR_code').show();
	e.stopPropagation()
})
$('.QR_code').click(function(){
	$(this).hide()
})





// 标的物介绍 竞买公告 竞买须知 竞买记录 点击添加移除active
$(".proshowCRTit ul li").click(function(){
	 $(this).find("a").addClass('active').parent().siblings().find("a").removeClass('active')
	
})



// 标的物介绍 竞买公告 竞买须知 竞买记录 固定标题
var a = $('.proshowCRTit').offset().top;
$(window).scroll(function(){
	var b = $(window).scrollTop() + 1;
	if(b>=a){
		$('.proshowCRTit').css({"position":"fixed"})
		$('.pai-title').css({'padding':'2em 0 1em'})
	}else{
		$('.proshowCRTit').css({"position":"static"})
		$('.pai-title').css({'padding':'1em 0'})
	}
})







