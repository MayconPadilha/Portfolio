function loadParticles(theme) {
  const isLight = theme === 'light';

  particlesJS('particles-js', {
      "particles": {
          "number": { "value": 20, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": isLight ? "#000000" : "#ffffff" }, // Partículas escuras no modo claro, claras no modo escuro
          "line_linked": { "enable": true, "color": isLight ? "#000000" : "#ffffff" },
          "opacity": { "value": 0.5 },
          "size": { "value": 5, "random": true },
          "move": { "enable": true, "speed": 6 }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }
      },
      "retina_detect": true
  });
}

// Detecta mudanças de tema e atualiza as partículas
window.addEventListener('themeChange', (event) => {
  const theme = event.detail;

  // Remove partículas anteriores antes de carregar novas
  if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
  }

  loadParticles(theme);
});

// Carrega as partículas ao iniciar com o tema correto
document.addEventListener('DOMContentLoaded', () => {
  loadParticles(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
});
