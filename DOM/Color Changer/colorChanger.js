var bt=document.querySelector("button");

// var isGreen=false;

// bt.addEventListener("click",function(){
// 	if(isGreen===true){
// 		document.body.style.background="white";
// 		isGreen=false;
// 	}else{
// 		document.body.style.background="purple";
// 		isGreen=true;
// 	}

// });

// or

// bt.addEventListener("click",function(){
// 	if(isGreen===true){
// 		document.body.style.background="white";
// 	}else{
// 		document.body.style.background="purple";
// 	}
// 	isGreen=!isGreen;
// });

// or

bt.addEventListener("click",function(){
	document.body.classList.toggle("purpleclass");    // needed class defined in html style css
});