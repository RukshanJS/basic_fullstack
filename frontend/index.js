// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    fetchMessage();
});

function fetchMessage() {
    fetch('http://127.0.0.1:3000/')
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerText = data;
        })
        .catch(error => {
            console.error('There was an error:', error);
            document.getElementById('message').innerText = 'Error loading message';
        });
}