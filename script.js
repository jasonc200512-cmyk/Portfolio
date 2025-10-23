const chatArticles = document.querySelectorAll('article.Chatbot-IA');

chatArticles.forEach(article => {
  article.addEventListener("click", function () {
    window.open("https://openai.com/fr-FR/", "_blank");
  });
});

const Hangman = document.querySelectorAll('article.Hangman');
Hangman.forEach(article => {
  article.addEventListener("click", function () {
    window.open("https://poki.com/fr/g/hangman?msockid=04cf01e42ad66d512ebc17c22b626c54", "_blank");
  });
});

const GTA = document.querySelectorAll('article.Jeu-video-simple');
GTA.forEach(article => {
  article.addEventListener("click", function () {
    window.open("https://www.rockstargames.com/VI", "_blank");
  });
});


const skillBars = document.querySelectorAll('.skill-bar');

function View(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}

function animateSkills() {
  skillBars.forEach(bar => {
    if (View(bar) && !bar.classList.contains('animated')) {
      bar.style.width = bar.getAttribute('data-skill');
      bar.classList.add('animated');
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
