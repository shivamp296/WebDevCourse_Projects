// alert("connected");
var numsq=6;
var colors=generateRandomColor(numsq);
var square=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	// alert("Easy btn clicked");
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");

	//settting up all things 
	numsq=3;
	colors=generateRandomColor(numsq); //generate random colour
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.background=colors[i];
		}
		else{    // last three will remain empty....
			square[i].style.display="none";
		}
	}

});

hardbtn.addEventListener("click",function(){
	// alert("Hard btn clicked");
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	
	//settting up all things 
	numsq=6;
	colors=generateRandomColor(numsq); //generate random colour
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i=0;i<square.length;i++){
			square[i].style.background=colors[i];
			square[i].style.display="block";
	}
});

reset.addEventListener("click",function(){
	//need to generate all new color
	colors=generateRandomColor(numsq);
	//need to pick new color
	pickedColor=pickColor();
	//change color of sq
	colorDisplay.textContent=pickedColor;
	//reflecting through all sq.
	for(var i=0;i<square.length;i++){
	square[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	message.textContent="";
	this.textContent="New Colors";
});

colorDisplay.textContent=pickedColor;

for(var i=0;i<square.length;i++){
	//add initial color
	square[i].style.background=colors[i];
	
	//add click listener
	square[i].addEventListener("click",function(){
		// alert("Clicked");

		//grab color of clicked square
		var clickedColor=this.style.background;
		// console.log(clickedColor+" "+pickedColor);
		//compare color of picked sq.
		if(clickedColor===pickedColor){
			// alert("correct!");
			message.textContent="!* CORRECT *!";
			//making whole body same color
			// this.style.background=
			changeColors(clickedColor);
			h1.style.background=pickedColor;
			reset.textContent="Play Again";
		}
		else{
			// alert("Wrong");

			//introduce here fading effect          this basically square[i]
			this.style.background="#232323";
			//displaying msg try again
			message.textContent="! TRY AGAIN !";
		}
	});
}
function changeColors(color){
	// loop through all sq

	for(var i=0;i<square.length;i++){
		square[i].style.background=color;
	}
}

function pickColor(){      // no parameter yet it is returning....
	var l=colors.length;
	var a=Math.floor(Math.random()*l);
	return colors[a];
};

function generateRandomColor(num){
	var arr=[];

	for(var i=0;i<num;i++){
		//get random color n push into array.
		// arr[i]=randomColor;
		arr.push(randomColor());
	}
return arr;
}

function randomColor(){
	//pick red 0-255
	//pick green 0-255
	//pick blue 0-255
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	// rgb(r, g, b);

	return `rgb(`+r+`, `+g+`, `+b+`)`;
}