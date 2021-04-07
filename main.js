const player1 = {
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['Лук', 'Кастеты'],
	attack: () => {
		console.log(`${this.name} Fight...`);
	}
};

const player2 = {
	name: 'Sonya',
	hp: 60,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['Автомат', 'Граната'],
	attack: () => {
		console.log(`${this.name} Fight...`);
	}
};

function createPlayer(classPlayer, objPlayer) {
	//создание родительского элемента div
	$player1 = document.createElement('div');
	$player1.classList.add(classPlayer);

	//создание div.progressbar и div.character
	$progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');
	$character = document.createElement('div');
	$character.classList.add('character');

	$player1.appendChild($progressbar);
	$player1.appendChild($character);

	//создание div.life и div.name в div.progressbar
	$life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = '100%';

	$name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = objPlayer.name;

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	//создание img в div.character
	$img = document.createElement('img');
	$img.src = objPlayer.img;

	$character.appendChild($img);

	//родительский элемент помещаем в div.arenas
	$arenas = document.querySelector('.arenas');
	$arenas.appendChild($player1);
};

createPlayer('player1', player1);
createPlayer('player2', player2);