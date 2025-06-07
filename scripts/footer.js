const footer = document.createElement("footer");
const p = document.createElement("p");

footer.classList.add("flex", "items-center", "h-10", "justify-center");
p.classList.add("px-6", "font-mono", "text-sm");

p.innerText = "Батырханов Даниил, ПрИ-101. 2025";
footer.appendChild(p);
body.appendChild(footer);
