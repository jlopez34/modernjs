document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    console.log(number);
    xhr.onload = function () {
        if (this.status === 200) {
            const responseJokes = JSON.parse(this.responseText);
            console.log(responseJokes);
            let output = '';

            if (responseJokes.type === 'success') {
                if (number === '') {
                    output += `<li>${responseJokes.value.joke}</li>`;
                } else {
                    responseJokes.value.forEach(joke => {
                        output += `<li>${joke.joke}</li>`;
                    });
                }
            } else {
                output += '<li>Something went wrong!!!</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    };

    xhr.send();

    e.preventDefault();
}