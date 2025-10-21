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


const traduire1 = document.querySelectorAll('button.traduire1');
traduire1.forEach(article => {
  article.addEventListener("click", function () {
    window.open("file:///C:/Users/jason/OneDrive/Desktop/portfolio/vrai/index1.html");
  });
});

const traduire2 = document.querySelectorAll('button.traduire2');
traduire2.forEach(article => {
  article.addEventListener("click", function () {
    window.open("file:///C:/Users/jason/OneDrive/Desktop/portfolio/vrai/index.html");
  });
});