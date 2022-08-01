
let frase = document.querySelector('#frase')
let id = document.querySelector('#id')


function mudarFrase() {

    const fraseRandom = parseInt(Math.random() * (224 - 1) + 1);

    fetch(`https://api.adviceslip.com/advice/${fraseRandom}`, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((response) => {
        return response.slip
    }).then((data) => {
        return frase.innerHTML = `"${data.advice}"`, id.innerHTML = `#${data.id}`
    })
}
