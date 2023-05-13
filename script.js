function toggleMode() {
    var mode = localStorage.getItem('mode') || 'light';
    if (mode === 'light') {
        mode = 'dark';
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'darkmode.css';
        document.head.appendChild(link);
    } else {
        mode = 'light';
        document.head.removeChild(document.head.lastElementChild);
    }
    localStorage.setItem('mode', mode);
    var button = document.getElementById('toggle');
    button.innerHTML = mode === 'light' ? 'Dark Mode' : 'Light Mode';
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
});