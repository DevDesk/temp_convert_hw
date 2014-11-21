var tempConvert = function(tempFar) { 
	return (((tempFar - 32) * 5) / 9).toFixed(2);
}

document.addEventListener("DOMContentLoaded",function(){
	var buttons = document.querySelector("#theButton");
	buttons.addEventListener('click',function(){
		var tempFar = document.getElementById("input").value;
		console.log(tempFar);
		console.log(tempConvert(tempFar));
		document.getElementById("result").innerHTML=tempConvert(tempFar)
	}
	);
}
)





	//.btn is an array of buttons, select them all
//when load triggers, function will be called

// var tempConvert = function(convert) { 
	// (((tempFar - 32) * 5) / 9).toFixed(2)=document.getElementById("result").innerHTML


// var tempCel = (((tempFar - 32) * 5) / 9).toFixed(2);
// document.getElementById("result").innerHTML = (((tempFar - 32) * 5) / 9).toFixed(2);
// console.log(tempCel + "\xB0C is equal to " + tempFar + "\xB0F");

// }

// var tempCel = document.getElementById("result").innerHTML;
// console.log(tempFar);

// var tempConvert = function(convert) { 


// var tempFar = 75;

// var tempCel = (((tempFar - 32) * 5) / 9).toFixed(2);

// console.log(tempCel + "\xB0C is equal to " + tempFar + "\xB0F");
// console.log("end of main.js");

// document.getElementById("result").innerHTML