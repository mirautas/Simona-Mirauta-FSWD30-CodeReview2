var firstDestination_city = "Amsterdam";
var firstDestination_country = "Netherlands";
var firstDestination_prices = [1500, 500, 1800, 700];
document.getElementById("firstDestination_city").innerHTML = firstDestination_city;
document.getElementById("firstDestination_country").innerHTML = firstDestination_country;

var secondDestination_city = "London";
var secondDestination_country = "United Kingdom";
var secondDestination_prices =[2500, 1500, 1000, 900];
document.getElementById("secondDestination_city").innerHTML = secondDestination_city;
document.getElementById("secondDestination_country").innerHTML = secondDestination_country;

function calculateAverage(prices) {
	var sum = 0;
	sum = prices[0] + prices[1] + prices[2] + prices[3];
	return sum/prices.length;
}

function calculateDifference(a, b) {
	if (a>b)
		return a-b;
	else	
		return b-a;
}

var amsterdamAverage = calculateAverage(firstDestination_prices);
document.getElementById("amsterdamAverage").innerHTML = amsterdamAverage;

var londonAverage = calculateAverage(secondDestination_prices);
document.getElementById("londonAverage").innerHTML = londonAverage;

document.getElementById("priceDifference").innerHTML = calculateDifference(amsterdamAverage, londonAverage) + "\u20ac";