const footer = document.createElement("footer");
const p = document.createElement("p");

footer.classList.add("flex", "items-center", "h-10");
p.classList.add("ml-8");

p.innerText = "Батырханов Даниил, ПрИ-101. 2025";
footer.appendChild(p);
body.appendChild(footer);
