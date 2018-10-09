var person = {
	firstName    : "John",
	lastName     : "Doe",
	fullName : function () {
		return this.firstName + " " + this.lastName;
	},
	alertFullName : function() {
		alert(this.fullName());
		console.log(this);
	},
	innerPerson : {
		babysFirstName : "Mary",
		babysLastName : "Jane",
		babysFullName : function () {
			return this.babysFirstName + " " + this.babysLastName;
		}
	}
}

function printPerson() {
	document.getElementById("results").innerHTML = person.fullName();
}

function printInnerPerson() {
	document.getElementById("results").innerHTML = person.innerPerson.babysFullName();
}

function compareDates() {	
	var daysBetween = function(date1, date2) {
		//Get 1 day in milliseconds
		var one_day = 1000*60*60*24;
		// Convert both dates to milliseconds
		var date1_ms = date1.getTime();   
		var date2_ms = date2.getTime();
		// Calculate the difference in milliseconds
		var difference_ms = date2_ms - date1_ms;
		// Convert back to days and return
		return Math.round(difference_ms / one_day); 
	}

	var dates = document.getElementsByName("date");
	var date1 = new Date(dates[0].value);
	var date2 = new Date(dates[1].value);
	// validation
	(dates[1].value === "") ? dates[1].focus() : document.getElementById("results").innerHTML = daysBetween(date1, date2) + " days between these dates.";
		
}

function init() {
	var buttons = document.getElementsByTagName("button");
	buttons[0].onclick = printPerson;
	buttons[1].onclick = printInnerPerson;
	buttons[2].onclick = compareDates;
}

onload = init;