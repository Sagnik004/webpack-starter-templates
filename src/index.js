import generateJoke from './generateJoke';
import './styles/main.scss';
import laughSvg from './assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughSvg;

console.log(generateJoke());
