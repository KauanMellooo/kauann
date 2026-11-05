
// Menu responsivo
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const aberto = navLinks.classList.contains("active");

    menuToggle.textContent = aberto ? "✕" : "☰";
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fechar o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

// Atualizar automaticamente o ano do rodapé
document.getElementById("year").textContent =
    new Date().getFullYear();

// Animação suave de entrada dos conteúdos
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".card, .detail-section, .article-item, .tips-grid div"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});
