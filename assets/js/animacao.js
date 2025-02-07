const linkedin = document.getElementById("linkedin");

linkedin.addEventListener("mouseover", () => {
    linkedin.classList.add("fa-beat"); // Adiciona a classe destaque
});

linkedin.addEventListener("mouseout", () => {
    linkedin.classList.remove("fa-beat"); // Remove a classe destaque
});

const github = document.getElementById("github");

github.addEventListener("mouseover", () => {
    github.classList.add("fa-bounce"); // Adiciona a classe destaque
});

github.addEventListener("mouseout", () => {
    github.classList.remove("fa-bounce"); // Remove a classe destaque
});
