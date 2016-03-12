var Itinerary = function(day) {
	this.hotel;
	this.activities = [];
	this.rest = [];
}

Itinerary.prototype.addHotel = function(hotel) {
	this.hotel = hotel;
	this.refreshDetils();
}

Itinerary.prototype.addActivity = function(act) {
	this.activities.push(act);
	this.refreshDetils();
}

Itinerary.prototype.addRestaurant = function(rest) {
	this.rest.push(rest);
	this.refreshDetils();
}

Itinerary.prototype.addToNav = function() {
	     //  <li>
      //   <a href='/'>
      //     One
      //   </a>
      // </li>
    $("#dayPanel").append("<li><a href='/'>" + startDay + "</a></li>");
}

Itinerary.prototype.refreshDetils=function(){
	var completeString='<div class="panel-body" id="currentDayDetails">';
	$('#currentDayDetails').remove();
	completeString+=this.renderHotel();
	completeString+=this.renderRestaurants();
	completeString+=this.renderActivities();
	console.log(completeString);
	 completeString+='</div>';
	$('#detailholder').append(completeString);
}

Itinerary.prototype.renderHotel = function(day) {
	var srting=`<div class="panel-body">
		<h3>My Hotel</h3>
				<div class="panel-body">
					`+this.hotel+`
				</div>
	</div>`;
	return srting;
}
Itinerary.prototype.renderActivities = function(day) {
	var srting=`<div class="panel-body">
		<h3>My Activities</h3>
				<div class="panel-body">
					`+this.activities+`
				</div>
	</div>`;
	return srting;
}
Itinerary.prototype.renderRestaurants = function(day) {
	var srting=`<div class="panel-body">
		<h3>My Restaurants</h3>
				<div class="panel-body">
					`+this.rest+`
				</div>
	</div>`;
	return srting;
}


var startDay = 1;
var itineraries = [];
var dayIndex = startDay - 1;

var createNewItinerary = function() {
	var newItin = new Itinerary();
	itineraries.push(newItin);
	
	newItin.addToNav();
	startDay++;
}

$(document).ready(function() {
	$(".addButton").on('click', function() {
		//console.log($(this.text));
		var $item = $(this).parent().parent().children().children("select").val();
		console.log($item);
		var $category = $(this).parent().parent().children().children("select").data("category");
		console.log("category: ", $category);
		if ($category === 'Hotels') {
			itineraries[dayIndex].addHotel($item);
		}
		if ($category === 'Restaurants') {
			itineraries[dayIndex].addRestaurant($item);
		}		
		if ($category === 'Activities') {
			itineraries[dayIndex].addActivity($item);
		}	
		console.log(itineraries);
		//console.log($(this).parent().parent().children().children("select").css("color", "red").val());
	})

	$(".addDay").on('click', function() {
		createNewItinerary();
	});

	createNewItinerary();

	// itineraries[0].addHotel("Test");
	// itineraries[0].addActivity("Foo");
	// itineraries[0].addRestaurant("Bar");
	//console.log(itineraries);
});

