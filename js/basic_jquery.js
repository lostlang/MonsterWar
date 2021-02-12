
$(function(){
	$("#swap").click(function(){
		swap()
	});
	$(".actions button").click(function(){
		actions(this.id)
	});
	load();
});


function swap(){
	console.log("swap")
};

function actions(id){
	console.log(id)
};

function xp(value){
	console.log($(".xp").css("width"));	
}

function load(){
	monster = {
		"name": "Vulpi",
		"lvl": 1,
		"xp": 0,
		"attack 1": "Bite",
		"attack 1": "Fire storm",
		"attack 1": "Ignight",
		"gen a": 20,
		"gen d": 20,
		"gen s": 20,
		"gen h": 20,
	}
}