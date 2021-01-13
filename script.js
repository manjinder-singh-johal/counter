const increment = () => {
    let currentCounter = parseInt(document.getElementById('counter').innerText);
    document.getElementById('counter').innerHTML = ++currentCounter;
}

const decrement = () => {
    let currentCounter = parseInt(document.getElementById('counter').innerText);
    document.getElementById('counter').innerHTML = --currentCounter;
}

const reset = () => {
    document.getElementById('counter').innerHTML = 0;
}