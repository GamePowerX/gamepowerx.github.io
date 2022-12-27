
function toggleMode() {
    var mode = localStorage.getItem('mode');
    if (mode === null) {
        mode = 'light';
    }
    if (mode === 'light') {
        mode = 'dark';
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'darkmode.css';
        document.head.appendChild(link);
        var button = document.getElementById('toggle');
        button.innerHTML = 'Light Mode';
    } else {
        mode = 'light';
        document.head.removeChild(document.head.lastChild);
        var button = document.getElementById('toggle');
        button.innerHTML = 'Dark Mode';
    }
    localStorage.setItem('mode', mode);
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.id = 'toggle';
    button.innerHTML = 'Dark Mode';
    button.onclick = toggleMode;
    document.getElementById('menu').appendChild(button);
    // now check if we need to toggle the mode
    var mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'darkmode.css';
        document.head.appendChild(link);
        var button = document.getElementById('toggle');
        button.innerHTML = 'Light Mode';
    }
    if (mode === 'light') {
        var button = document.getElementById('toggle');
        button.innerHTML = 'Dark Mode';
    }
});