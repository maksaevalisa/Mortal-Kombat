const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Kitana',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
	weapon: ['Лук', 'Кастеты'],
	attack: () => {
		console.log(`${this.name} Fight...`);
	}
};

const player2 = {
	player: 2,
	name: 'Sonya',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['Автомат', 'Граната'],
	attack: () => {
		console.log(`${this.name} Fight...`);
	}
};

function funCreateElement(tag, className) {
	const $tag = document.createElement(tag);

	if (className) {
		$tag.classList.add(className);
	}

	return $tag;
}

function createPlayer(objPlayer) {
	//создание родительского элемента div
	$player = funCreateElement('div', 'player' + objPlayer.player);

	//создание div.progressbar и div.character
	$progressbar = funCreateElement('div', 'progressbar');
	$character = funCreateElement('div', 'character');

	$player.appendChild($progressbar);
	$player.appendChild($character);

	//создание div.life и div.name в div.progressbar
	$life = funCreateElement('div', 'life');
	$life.style.width = '100%';

	$name = funCreateElement('div', 'name');
	$name.innerText = objPlayer.name;

	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	//создание img в div.character
	$img = funCreateElement('img');
	$img.src = objPlayer.img;

	$character.appendChild($img);

	//родительский элемент помещаем в div.arenas
	return $player
};

function randomHp() {
	let randomHp = Math.ceil(Math.random() * 20);

	return randomHp;
}

function changeHP(player) {
	const $playerLife = document.querySelector('.player' + player.player + ' .life');

	player.hp -= randomHp();

	if (player.hp >= 0) {
		$playerLife.style.width = player.hp + '%';
	} else if (player.hp < 0) {
		if (player.player === 1) {
			$arenas.appendChild(playerWin(player2.name))
		} else if (player.player === 2) {
			$arenas.appendChild(playerWin(player1.name))
		}

		$playerLife.style.width = player.hp = 0;
		$randomButton.disabled = true;
		setTimeout(function () {
			location.reload();
		}, 2000);
	}
}

function playerWin(name) {
	const $winTitle = funCreateElement('div', 'winTitle');
	$winTitle.innerText = name + ' wins';

	return $winTitle;
}

$randomButton.addEventListener('click', function () {
	changeHP(player1);
	changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));