
var astro = [
	{
		question: "Which is by far the largest planet in the solar system?",
		answer: "jupiter"
	},

	{
		question:"What name is given to the distance between the Sun and the Earth?",
		answer:"astronomical unit"
	},

	{
		question:"How many rings (currently known) surround Uranus?",
		answer: 13
	},

	{
		question:"Which planet's moons are called Phobos and Deimos?",
		answer: "mars"
	},

	{
		question:"Neptune's atmosphere is primarily composed of which gas?",
		answer:"methane"
	}

]



for (i=0; i < astro.length; i++) {
	q = astro[i].question
	document.getElementById('q' + [i]).textContent = q
}

function yourAnswer() {
	var right = 0
	var wrong = 0
	
	for (i=0; i < astro.length; i++) {
		var answer = astro[i].answer
		var userAnswer = document.getElementById('a' + [i]).value
		var qclass = document.getElementById('q' + [i])
		if ( answer == userAnswer) {
			qclass.className = 'right'
			right++
		}else {
			qclass.className = 'wrong'
			wrong++
		}

	}
	document.getElementById('right').textContent = right
	document.getElementById('wrong').textContent = wrong
	var newImg = document.getElementById('img')
	var newImage = document.getElementById('image')

	if (right > wrong) {
		newImage.setAttribute('src', 'img/tyson.jpg')
	} else {
		newImg.setAttribute('src', 'img/neil.jpg')
	}

}