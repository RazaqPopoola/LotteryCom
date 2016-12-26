var lottery_array = new Array(4);
var player_array = new Array(4);
var total_cash = 10.00;

function controller(){
	lottery();
	playLotto();
	check_numbers();
	
	total_cash--;
	document.getElementById("balance").innerHTML = "€"+total_cash;
}


function lottery(){

	
	for (i=0; i<lottery_array.length; i++){
		
		var randomNumber = Math.floor(Math.random() * 50) + 1;
		
		for(var j=0; j<lottery_array.length; j++){
		
			if(lottery_array[j] == randomNumber){
			
				randomNumber =  Math.floor(Math.random() * 50) + 1;
			}
		
		}
		
		lottery_array[i] = randomNumber;
		
	}
	
	
	for(i=0; i<lottery_array.length; i++){
	
	
		for(var k = i+1; k < lottery_array.length; k++){
		if(lottery_array[k]<lottery_array[i]){
		var temp = lottery_array[k];
		lottery_array[k] = lottery_array[i];
		lottery_array[i] = temp;
		}
	}
		// num.sort(function(a, b){return a-b});
		document.getElementById("slot" + i).innerHTML = lottery_array[i];
	}
	
}



function playLotto(){

	
	for (i=0; i<player_array.length; i++){
		
		
		var randomNumber = Math.floor(Math.random() * 50) + 1;
		
	
		
		for(j=0; j<player_array.length; j++){
		
			if(player_array[j] == randomNumber){
			
				randomNumber =  Math.floor(Math.random() * 50) + 1;
			}
		
		}
	
		
			player_array[i] = randomNumber;
			
			
			
	}

	
	for(i=0; i<player_array.length; i++){
		
		// num.sort(function(a, b){return a-b});
    
		for(var k = i+1; k < player_array.length; k++){
			if(player_array[k]<player_array[i]){
				var temp = player_array[k];
				player_array[k] = player_array[i];
				player_array[i] = temp;
			}
		}
	
		document.getElementById("player" + i).innerHTML = player_array[i];
	
	}
	
}


function check_numbers(){
	var matched = 0;

	for(i=0; i<lottery_array.length; i++){
		if(lottery_array[i] == player_array[i]){
			matched++;
		}
	}
	
	if(matched == 0){
		document.getElementById("credits").innerHTML = "You lost";
	}
	if(matched == 1){
		document.getElementById("credits").innerHTML = "You won €5.00";
		total_cash = total_cash + 5;
		document.getElementById("balance").innerHTML =  total_cash;
		
	}
	if(matched == 2){
		document.getElementById("credits").innerHTML = "You won €10.00";
		total_cash = total_cash + 10;
		document.getElementById("balance").innerHTML = total_cash;
	}
	if(matched == 3){
		document.getElementById("credits").innerHTML = "You won €20.00";
		total_cash = total_cash + 20;
		document.getElementById("balance").innerHTML = total_cash;
	}
	if(matched == 4){
		document.getElementById("credits").innerHTML = "You won €40.00";
		total_cash = total_cash + 40;
		document.getElementById("balance").innerHTML = total_cash;
	}
}



