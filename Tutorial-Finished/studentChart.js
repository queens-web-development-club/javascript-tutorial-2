var context = document.getElementById("Chart1").getContext("2d");



var myChart = new Chart(context, {

	// Declare the type of Bar
	type: 'bar',

	// Assign the Data
	data:{
		labels: ["First", 'Second', "Third", 'Fourth'],
		datasets:[{
			
			data: [12,19,3,5],

			backgroundColor: ['#A393BF','#73648A','#453750', '#480355' ]

		}]
	},

	// Chart Options 

	options:{
		legend: {
			display: false
		},

		title: {
			display: true,

			text: 'Number of Votes',

			fontSize: 22,

		}
	}


});


var context2 =document.getElementById("Chart2").getContext("2d");

var myChart2 = new Chart(context2,{


	type: 'pie',

	data:{

		labels: ["Africa" , 'Europe', "Asia", "North America"],
		datasets:[{

			label: "Population (Millions)",
			backgroundColor: ['purple', 'green', 'red', 'yellow'],

			data: [735,2478,5367,800]
		}]
	},

	options:{

		title: {
			display: true,

			text: 'Predicted World Population in 2040',

			fontSize: 22

		}
		
	}
});