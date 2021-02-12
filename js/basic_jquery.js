
$(function(){
	/*
		Close Battle
	*/
	$(".closeBattle button").click(function(){
		$(".battle").css("display", "none");
		$(".location").css("display", "flex");
	})
	/*
		Start Battle
	*/
	$(".utilityButton #enemyMonster").click(function(){
		$(".battle").css("display", "flex");
		$(".location").css("display", "none");
		console.log(1);
	})
	/*
		Open dock
	*/
	$(".toolCenter *").click(function(button){
		$(".divDockpanel .table2").css("display", "none");
		$(".divAll").css("display", "flex");
		$("." + button.target.id).css("display", "flex");
	})
	/*
		Close Dock
	*/
	$("#closeDock").click(function(button){
		$(".divDockpanel .table2").css("display", "none");
	})
});