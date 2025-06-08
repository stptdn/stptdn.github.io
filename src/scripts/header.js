const body = document.querySelector("body");

const links = [
  { href: "./index.html", text: "Home" },
  { href: "./blog.html", text: "Blog" },
  { href: "./contacts.html", text: "Contacts" },
  {
    href: "https://www.figma.com/design/5DR1gasq5LMBOsSaxtBS2J/%D0%BC%D0%BE%D0%BA%D0%B0%D0%BF-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D0%B2%D0%B2%D0%BD?node-id=0-1&t=5L8kWU2CiiEEqolu-1",
    text: "Mockup",
  },
];

const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

header.classList.add(
  "flex",
  "inset-x-0",
  "h-14",
  "bg-background-950",
  "fixed",
  "items-center",
  "justify-center",
  "prose-a:hover:underline",
  "z-20",
);
nav.classList.add("w-3xl", "max-w-3xl", "px-6");
ul.classList.add("flex", "justify-between", "sm:justify-around");

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
