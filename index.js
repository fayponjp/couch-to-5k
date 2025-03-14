document.addEventListener("click", (e) => {
    const tableBody = document.getElementById("grid");
    if (tableBody.contains(e.target)) {
        if ((e.target.classList.contains("grid-item") || e.target.closest(".grid-item").contains(e.target))) {
            e.target.closest(".grid-item").classList.toggle("checked");
        }
    }
});