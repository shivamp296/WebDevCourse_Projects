// // Check of specific todos by clicking

// $("li").click(function(){
// 	// $(this).css("color","grey");   // specific li will chng   if i use $("li") then all will change
// 	// $(this).css("text-decoration","line-through");
	
// 	// or    
// 	// console.log($(this).css("color"));  return rgb match
// 	if($(this).css("color")==="rgb(128, 128, 128)"){
// 		//turn it black
// 		$(this).css({"color":"black","textDecoration":"none"});   // specific li will chng   if i use $("li") then all will change

// 	}
// 	else{
// 		//turn it grey
// 		$(this).css({"color":"grey","textDecoration":"line-through"});   // specific li will chng   if i use $("li") then all will change
// 	}
	
// });

// or use classToggle when clicked n define one class in css
// $("li").on("click",function(){
// 	$(this).toggleClass("completed");
// });
$("ul").on("click","li",function(){      //add to all li via ul earlier it was only to 3 li
	$(this).toggleClass("completed");
});

//click on X to delete

$("ul").on("click","span",function(i){
	// $(this).parent().remove();
	// $(this).parent().fadeOut();  fadeOut bt dont remove
	//$(this).parent().fadeOut().remove();  remove will execute before fadeout finishes
	$(this).parent().fadeOut(500,function(){
		$(this).remove();   
					//here this is this.parent
	}); 
	i.stopPropagation();
});

// taking input

$("input[type='text']").keypress(function(eve){
	if(eve.which===13){
		var todoText = $(this).val();
		$(this).val("");
		//creat a new li n add 
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>");
	}
		
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();     // very imp
});

