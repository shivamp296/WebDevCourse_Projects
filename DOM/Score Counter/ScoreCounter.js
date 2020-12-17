var p1v=document.querySelector("#p1");     //p1 button
var p2v=document.querySelector("#p2");		//p2 button
var rev=document.querySelector("#resetid");   	//reset button
var p1dis=document.querySelector("#p1display")   //heading score of p1
var p2dis=document.querySelector("#p2display")   //heading score of p1
var numInput=document.querySelector("input")
var para=document.querySelector("p");
var winScoreSelect=document.querySelector("p span")

var gameOver=false; //if someone win then true.
var winningScore=5;

var p1score=0;    //manipulating score of p1
var p2score=0;     // manipulating score of p2

p1v.addEventListener("click",function(){
	if(!gameOver){
		p1score++;

		if(p1score=== winningScore){
			p1dis.classList.add("winner");
			// console.log("Game Over!");
			gameOver = true;
		}
		// console.log(p1score);
		p1dis.textContent=p1score;
	}
});

p2v.addEventListener("click",function(){
	if(!gameOver){
		p2score++;

		if(p2score===winningScore){
			p2dis.classList.add("winner");
			gameOver=true;
		}
	// console.log(p2score);
	p2dis.textContent=p2score;		
	}
});

rev.addEventListener("click",function(){
	reset();
});

function reset(){
		p1score=0;
	p2score=0;
	p1dis.textContent=0;
	p2dis.textContent=0;
	p1dis.classList.remove("winner");
	p2dis.classList.remove("winner");
	gameOver=false;
};
numInput.addEventListener("change",function(){
	
	// winScoreSelect.textContent = numInput.value;
	//      // winningScore=numInput.value;   //it will store in string format
	// winningScore=Number(numInput.value);  

	// we can replace numInput with this
	
	winScoreSelect.textContent = this.value;
	     // winningScore=numInput.value;   //it will store in string format
	winningScore=Number(this.value);  


	reset();
});

