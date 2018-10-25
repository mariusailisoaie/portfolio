const getRandomDadJoke = async () => {
  const response = await fetch('https://api.icndb.com/jokes/random');
  const responseData = await response.json();
  return responseData;
}

const getJoke = () => {
  getRandomDadJoke()
    .then(data => document.getElementById('joke-container').textContent = data.value.joke)
    .catch(err => console.log(err));
}
document.getElementById('joke-button').addEventListener('click', getJoke);