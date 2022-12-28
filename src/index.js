import generateJoke from './generateJoke';
import './styles/main.scss';
import laughSvg from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughSvg;

const getAnotherJokeBtn = document.getElementById('jokeBtn');
getAnotherJokeBtn.addEventListener('click', generateJoke);

generateJoke();
