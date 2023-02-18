//Features section animation
const features = document.querySelectorAll(".feature");

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      let h1 = entry.target.querySelector("h1");
      let p = entry.target.querySelector("p");
      let img = entry.target.querySelector("img");

      h1.classList.toggle("show-feature", entry.isIntersecting);
      p.classList.toggle("show-feature", entry.isIntersecting);
      img.classList.toggle("show-feature", entry.isIntersecting);

      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  }
);

features.forEach((feature) => {
  observer.observe(feature);
});

// Custom Select
const ul = document.querySelector(".dropdown");
const overflow = document.querySelector(".overflow");
const toggle = document.querySelector(".toggle");

const languages = [
  {
    text: "English, USA",
    flag: "usa.png",
  },
  {
    text: "Español",
    flag: "espanol.png",
  },
  {
    text: "български",
    flag: "български.png",
  },
  {
    text: "Čeština",
    flag: "Čeština.png",
  },
  {
    text: "Dansk",
    flag: "Dansk.png",
  },
  {
    text: "Deutsch",
    flag: "Deutsch.png",
  },
  {
    text: "Ελληνικά",
    flag: "Ελληνικά.png",
  },
  {
    text: "Suomi",
    flag: "Suomi.png",
  },
  {
    text: "Français",
    flag: "Français.png",
  },
  {
    text: "हिंदी",
    flag: "हिंदी.png",
  },
  {
    text: "Hrvatski",
    flag: "Hrvatski.png",
  },
  {
    text: "Magyar",
    flag: "Magyar.png",
  },
  {
    text: "Italiano",
    flag: "Italiano.png",
  },
  {
    text: "日本語",
    flag: "日本語.png",
  },
  {
    text: "한국어",
    flag: "한국어.png",
  },
];

languages.sort((a, b) => a.text.localeCompare(b.text));

languages.forEach((language) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let span = document.createElement("span");

  img.src = `./images/${language.flag}`;
  span.innerText = language.text;

  li.appendChild(img);
  li.appendChild(span);

  li.addEventListener("click", addItemEventListener);
  ul.appendChild(li);
});

function addItemEventListener(event) {
  let li = event.currentTarget;

  let img = toggle.querySelector("img");
  let span = toggle.querySelector("span");

  let langImage = li.querySelector("img").src;
  let langText = li.querySelector("span").innerText;

  img.src = `${langImage}`;
  span.innerText = langText;
  overflow.classList.toggle("show");
}

toggle.addEventListener("click", function (event) {
  overflow.classList.toggle("show");
  overflow.focus();
});

overflow.addEventListener("blur", function (event) {
  overflow.classList.remove("show");
});
