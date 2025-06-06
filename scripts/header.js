const body = document.querySelector("body");

const links = [
    { href: "./index.html", text: "Home" },
    { href: "./blog.html", text: "Blog" },
    { href: "./about.html", text: "About the site" },
];

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

header.classList.add("header");
nav.classList.add("nav");
ul.classList.add("nav-list");

links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);

body.insertBefore(header, body.firstChild);
