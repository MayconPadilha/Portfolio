document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = toggleButton.querySelector('i');

    // Verifica o tema salvo no localStorage ou o padrão do sistema
    function getTheme() {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function applyTheme(theme) {
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        icon.classList.replace(theme === 'light' ? 'fa-moon' : 'fa-sun', theme === 'light' ? 'fa-sun' : 'fa-moon');
        localStorage.setItem('theme', theme);

        // Envia o tema para o particles.js
        window.dispatchEvent(new CustomEvent('themeChange', { detail: theme }));
    }

    applyTheme(getTheme()); // Aplica o tema ao carregar a página

    toggleButton.addEventListener('click', () => {
        const newTheme = body.classList.contains('light') ? 'dark' : 'light';
        applyTheme(newTheme);
    });
});
