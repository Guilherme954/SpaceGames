const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const filters = document.querySelectorAll(".sidebar li");

// BUSCA
search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});

// FAVORITOS
document.querySelectorAll(".fav").forEach(fav => {
    fav.addEventListener("click", () => {
        fav.classList.toggle("active");
        fav.textContent = fav.classList.contains("active") ? "❤️" : "♡";
    });
});

// INSTALAR
document.querySelectorAll(".install").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("installed");
        btn.textContent = btn.classList.contains("installed") ? "Installed" : "Install";
    });
});

// FILTROS
filters.forEach(filter => {
    filter.addEventListener("click", () => {

        document.querySelector(".active")?.classList.remove("active");
        filter.classList.add("active");

        const type = filter.dataset.filter;

        cards.forEach(card => {
            const installed = card.querySelector(".install").classList.contains("installed");
            const favorite = card.querySelector(".fav").classList.contains("active");

            if (type === "all") card.style.display = "block";
            if (type === "installed") card.style.display = installed ? "block" : "none";
            if (type === "favorites") card.style.display = favorite ? "block" : "none";
        });
    });
});