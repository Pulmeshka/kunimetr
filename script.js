function switchPlatform(platform) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('active');
    });

    document.getElementById(platform).classList.add('active');
    
    const options = document.querySelectorAll('.option');
    if(platform === 'discord') options[0].classList.add('active');
    else options[1].classList.add('active');
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.innerText = '☀️';
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.innerText = '🌙';
    }
}