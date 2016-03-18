$(document).ready(function(){

	function primaryOption(){ 
		$(".jsVideo").click(function(){
			$(".jsVideo").hide();
			$(".playVideo--Cont").show();
		});

		$(".irVision").click(function(){
			
			$(".nosotros--title").css("display","none");
			$(".nosotros--vision").css("display","block");
			
			$(".irVision").css("display","none");
			$(".irNosotros").css("display","block");
			
		});
		$(".irNosotros").click(function(){
			
			$(".nosotros--title").css("display","block");
			$(".nosotros--vision").css("display","none");
			
			$(".irVision").css("display","block");
			$(".irNosotros").css("display","none");
			
		});

	}

	primaryOption();

});