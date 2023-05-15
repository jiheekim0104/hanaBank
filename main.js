var changer = function(open){
	if(open){
	$("#hidden_option").css("display", "block");
	} else {
		$("#hidden_option").css("display", "none");
}
};

$(".ex1").on('click', function(){
	changer(true);
});
$("#hidden_option").hover(function(){
}, function(){
	changer();
});
