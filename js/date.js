$(function(){
	$(".pickdate").click(function(){
		var _this=$(this);
		$(".hour").find("span").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$("#hour").html($(this).html())
		})
		$(".minute").children().click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			$("#min").html($(this).html())
		})
		$("#confirm").click(function(){
			_this.text($("#hour").text()+":"+$("#min").text());
			_this=null;
		})
	})
})