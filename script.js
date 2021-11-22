// Declare button first because we need to use "addEventListener"
const button = document.getElementById("buttonRes");

// HTMLCollection (like an array of elements, but not an actual array) 
const players1 = document.getElementById("inputP1");
const players2 = document.getElementById("inputP2");
const goals1 = document.getElementById("goal1");
const goals2 = document.getElementById("goal2");

// Adding Event Listener to our button
button.addEventListener('click', () => {
   
    const pt1 = players1.value;
    const pt2 = players2.value;
    const gt1 = Number(goals1.value);
    const gt2 = Number(goals2.value);
	
	// used array.from option to convert string to array by each symbol (comfortable to count number)
	const ar1 = Array.from(players1.value);
	const ar2 = Array.from(players2.value);
	// but found better option to use .split, splitting by any symbol (better to output in console)
	const arr1 = players1.value.split(' ');
	const arr2 = players2.value.split(' ');
	
	var a = true;
	var p1num = 0;
	var p2num = 0;
	
	// checking for whitespaces of team 1 players
	for (let i = 0; i < ar1.length; i++) {
		if (ar1[i] == " ") {
			p1num++;
		}
	}
	
	// checking for whitespaces of team 2 players
	for (let i = 0; i < ar2.length; i++) {
		if (ar2[i] == " ") {
			p2num++;
		}
	}
	
	// number of spaces + 1 = total players of team
	p1num = p1num + 1;
	p2num = p2num + 1;
	
	// console.log(p1num);
	// console.log(p2num);

    // create if statement to don't miss empty blanks 
    if (goals1.value === "" || goals2.value === ""){
        alert("Goals can not be empty!");
		a = false;
    }
	
	else if (p1num < 1 || p2num < 1) {
		alert("Players can not be lower than 1");
		a = false;
	}
	
	else if (p1num > 11 || p2num > 11) {
		alert("Players can not be more than 11");
		a = false;
	}
 
    // if goals input is negative 
    else if (gt1 < 0 || gt2 < 0) {
        alert("Goals can not be negative!");
		a = false;
    }
	
    // if goals input is more that 7 in sum and separately 
    else if (gt1 > 7 || gt2 > 7 || gt1 + gt2 > 7) {
        alert("Goals can not be more than 7!");
		a = false;
    }

	if (a == true) {
		// if first team wins 
		if (gt1 > gt2) {
			//message of winning of team 1
			document.getElementById("matchWin").innerHTML = "Match Winner: Team 1";
			//shows match result
			document.getElementById("matchRes").innerHTML = "Match Results: " + gt1 + " - " + gt2;
			// shows name of players of team 1
			console.log(arr1);
		}

		//if second team wins
		else if (gt1 < gt2) {
			//message of winning of team 2
			document.getElementById("matchWin").innerHTML = "Match Winner: Team 2";
			//shows match result
			document.getElementById("matchRes").innerHTML = "Match Results: " + gt1 + " - " + gt2;
			// shows name of players of team 2
			console.log(arr2);
		}

		//if both teams have same scores 
		else if (gt1 == gt2) {
			document.getElementById("matchRes").innerHTML = "Match Results: " + gt1 + " - " + gt2; 
			document.getElementById("matchWin").innerHTML = "Match Winner: Draw!!!";
			// shows name of players of both teams
			console.log(arr1);
			console.log(arr2);
		}    

			// All possible Combinations of Team 1:
			if (gt1 == 0) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: 0";
			}
			else if (gt1 == 1) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: (1)";
			} 
			else if (gt1 == 2) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: (1 1) (2)";
			}
			else if (gt1 == 3) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: (1 1 1) (2 1) (3)";
			}
			else if (gt1 == 4) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: (1 1 1 1) (2 1 1) (2 2) (3 1) (4)";
			}
			else if (gt1 == 5) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: (1 1 1 1 1) (2 1 1 1) (3 1 1) (3 2) (4 1) (5)";
			}
			else if (gt1 == 6) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: (1 1 1 1 1 1) (2 1 1 1 1) (3 1 1 1) (3 2 1) (3 3) (4 1 1) (4 2) (5 1) (6)";
			}
			else if (gt1 == 7) {
			document.getElementById("PossibComb1").innerHTML = "All combinations of Team 1: (1 1 1 1 1 1 1) (2 1 1 1 1 1) (3 1 1 1 1) (3 2 1 1) (3 3 1) (4 1 1 1) (4 2 1) (4 3) (5 1 1) (5 2) (6 1) (7)";
			}

			// All possible Combinations of Team 2:
			if (gt2 == 0) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: 0";
			}
			else if (gt2 == 1) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: (1)";
			} 
			else if (gt2 == 2) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: (1 1) (2)";
			}
			else if (gt2 == 3) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: (1 1 1) (2 1) (3)";
			}
			else if (gt2 == 4) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: (1 1 1 1) (2 1 1) (2 2) (3 1) (4)";
			}
			else if (gt2 == 5) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: (1 1 1 1 1) (2 1 1 1) (3 1 1) (3 2) (4 1) (5)";
			}
			else if (gt2 == 6) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: (1 1 1 1 1 1) (2 1 1 1 1) (3 1 1 1) (3 2 1) (3 3) (4 1 1) (4 2) (5 1) (6)";
			}
			else if (gt2 == 7) {
			document.getElementById("PossibComb2").innerHTML = "All combinations of Team 2: (1 1 1 1 1 1 1) (2 1 1 1 1 1) (3 1 1 1 1) (3 2 1 1) (3 3 1) (4 1 1 1) (4 2 1) (4 3) (5 1 1) (5 2) (6 1) (7)";
			} 
			
	}
	

})


