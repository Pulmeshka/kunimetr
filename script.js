// Переключение платформ
function switchPlatform(platform) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('active');
    });

    document.getElementById(platform).classList.add('active');
    
    // Подсветка иконки
    const options = document.querySelectorAll('.option');
    if(platform === 'discord') options[0].classList.add('active');
    else options[1].classList.add('active');
}

// Переключение тем
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.innerText = '☀️'; // Солнце для перехода на светлую
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.innerText = '🌙'; // Луна для перехода на темную
    }
}