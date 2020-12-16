var todos=[];
var input=prompt("What would you like to do ?");

while(input!=="quit"){

	if(input==="list"){
		todoList1();
	}
	else if(input==="new"){
		pushTodo();
	}
	else if(input==="delete"){
		deleteTodo();
	}
	input=prompt("What would you like to do ?");
}
console.log("Ok! You quit the App");

function todoList1(){

		console.log("**********");
		todos.forEach(function(i, j){
			
			console.log(j+" : "+i);		
		});
		console.log("**********");
	
		console.log(todos);

}

function pushTodo(){

	var ntodos=prompt("Enter new todo");
	todos.push(ntodos);
	console.log("Added new Todo");

}

function deleteTodo(){
	var ind=prompt("Enter index of todo to delete");
		todos.splice(ind,1);
}