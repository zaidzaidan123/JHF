const aboutMeText = document.getElementById("about-me-text");
const aboutMeContainer = document.getElementById("about-me-container");
const randomQuote = document.getElementById("randomQuote");
const randomQuoteSelector = document.getElementById("randomQuoteSelector");
const email = document.getElementById("email");
const formButton = document.getElementById("formbutton");
const expandExperience = document.getElementById("expand-experience");
const experienceContainer = document.getElementById("experience");
const darkLight = document.getElementById("dark-light");
const body = document.getElementById("body");
const skill=document.getElementById("skill");
const work=document.getElementById("skill");
const me=document.getElementById("me");
const welcome = document.getElementById("welcome")
const quote1=document.getElementById("quote1")
const top1=document.getElementById("top");


experienceContainer.style.display = "none";
const editColorText = () => {
  aboutMeText.style.color = "red";
};

const randomQuoteGenerator = () => {
  const quotes = [
    "Be yourself; everyone else is already taken.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "True friends stab you in the front.",
    "Women are made to be Loved, not understood.",
    "Be the change that you wish to see in the world.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "No one can make you feel inferior without your consent.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    "Do one thing every day that scares you.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    "Our lives begin to end the day we become silent about things that matter.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Injustice anywhere is a threat to justice everywhere.",
    "The time is always right to do what is right.",
    "Life's most persistent and urgent question is, 'What are you doing for others?'",
    "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);

  randomQuote.innerHTML = quotes[randomIndex];
};

const validEmail = (emailValue) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailValue)) {
    alert("Invalid email");
  }
};

const expandExperienceButton = (element) => {
  if (element === "none") {
    experienceContainer.style.display = "flex";
  } else {
    experienceContainer.style.display = "none";
  }
};

formButton.addEventListener("click", () => {
  const emailValue = email.value;
  validEmail(emailValue);
});

const DarkLightButton = (text) => {
  if (text === "Dark") {
    darkLight.innerHTML = "Light";
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    skill.style.backgroundColor = "black"
    me.style.backgroundColor = "black"
    experienceContainer.style.backgroundColor = "black"
    welcome.style.backgroundColor = "black"
    quote1.style.backgroundColor = "black"
    top1.style.backgroundColor = "black"


  } else {
    darkLight.innerHTML = "Dark";
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    skill.style.backgroundColor = "white"
    me.style.backgroundColor = "white"
    experienceContainer.style.backgroundColor = "white"
    welcome.style.backgroundColor = "white"
    quote1.style.backgroundColor = "white"
    top1.style.backgroundColor = "white"

  }
};

aboutMeText.addEventListener("mouseover", editColorText);
aboutMeContainer.addEventListener("click", editColorText);

randomQuoteSelector.addEventListener("click", randomQuoteGenerator);

expandExperience.addEventListener("click", () => {
  const elementDisplay = window.getComputedStyle(experienceContainer).display;
  expandExperienceButton(elementDisplay);
});

darkLight.addEventListener("click", () => {
  const text = darkLight.textContent;
  DarkLightButton(text);
});
