
	Vue.component('event-item', {
	props: ['event'],
	template: '<div class="event"><img class="event__img" src="img/event-logo.gif"> <h2 class="event__title">{{event.title}}</h2> <p class="event__text">Организатор: {{event.organizators}}</p></div>'
})
async function getUsers() {
	let url = 'https://open.istu.edu/api/get_all_events.php';	
	let response = await fetch(url);
	let jsonFromServer = await response.json();
	//for (let value of Object.values(jsonFromServer['0'])) {
	alert(value[0]); // John, затем 30
}
//alert(Object.keys(jsonFromServer['0']));
	return jsonFromServer;
}
/*
let jsonFromServer = [
			{ id: 0, title: 'International STEM Olympiad', organizators: 'Дарима Доржиева' },
			{ id: 1, title: 'Инженерная олимпиада для студентов и выпускников', organizators: 'Никита Лукьянов' },
			{ id: 2, title: 'Компьютериада - 2021', organizators: 'Никита Лукьянов' },
			{ id: 3, title: 'Олимпиада для школьников по правоведению', organizators: 'Юлия Герасимова' }
		]
*/
var app = new Vue({
	el: '#events',
	data: {
		eventsList: getUsers()
	}
})


// find elements
/*var banner = $("#myp")
	var button = $("#button")
	
	async function getUsers() {
	let url = 'https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22';
	
	//let url = 'https://api.github.com/repos/vadimarsh/WorkWithVolfram/commits';
	//let url = 'https://covid19-api.org/api/status/UA';
	
	let response = await fetch(url);
	
	let obj = await response.json();
	alert(obj[0].weather.main);
	//alert(obj[0].author.login);

}

// handle click and add class
button.on("click", getUsers)
*/
