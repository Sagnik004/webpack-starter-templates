import axios from 'axios';

const getNewJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await axios.get('https://icanhazdadjoke.com', config);
  return res.data.joke;
};

async function generateJoke() {
  const newJoke = await getNewJoke();
  document.getElementById('joke').innerHTML = newJoke;
}

export default generateJoke;
