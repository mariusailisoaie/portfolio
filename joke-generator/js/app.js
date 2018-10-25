document.getElementById('joke-button').addEventListener('click', getJoke);

async function getRandomDadJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const responseData = await response.json();
  return responseData;
}

function getJoke() {
  getRandomDadJoke()
    .then(data => document.getElementById('joke-container').textContent = data.value)
    .catch(err => console.log(err));
}

// fetch('https://api.chucknorris.io/jokes/random').then(function(response) {
//   var contentType = response.headers.get("content-type");
//   if(contentType && contentType.includes("application/json")) {
//     return response.json();
//   }
//   throw new TypeError("Oops, we haven't got JSON!");
// })
// .then(function(json) { console.log(json); })
// .catch(function(error) { console.log(error); });