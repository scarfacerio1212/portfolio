const routes = {
  '/': `<section><h2>Welcome</h2><p>This is the homepage.</p></section>`,
  '/about': `<section><h2>About Me</h2><p>I’m a web developer passionate about building web apps.</p></section>`,
  '/projects': `<section><h2>Projects</h2><ul><li>Project 1</li><li>Project 2</li></ul></section>`,
  '/contact': `<section><h2>Contact</h2><form><input placeholder="Name"><br><input placeholder="Email"><br><textarea placeholder="Message"></textarea><br><button>Send</button></form></section>`,
};

const app = document.getElementById('app');

function navigateTo(url) {
  history.pushState(null, null, url);
  render();
}

function render() {
  const path = window.location.pathname;
  app.innerHTML = routes[path] || `<h2>404 - Page Not Found</h2>`;
}


window.addEventListener('popstate', render);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  render();
});