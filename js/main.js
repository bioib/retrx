const links = document.getElementById("nav-links").childNodes;
const arr = Array.from(links);

const scrollTo = (element) => {
  document.querySelector(element).scrollIntoView({
    behavior: `smooth`,
  });
};

arr.forEach((v, i) => {
  if (i % 2 == 0) return;
  if (!v.hasAttribute("id")) return;

  v.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(v.getAttribute("href"));
  });
});

// const m = document.querySelector("#features");
// console.log(m.scrollHeight);
