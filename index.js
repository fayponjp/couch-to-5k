document.addEventListener("click", (e) => {
    const tableBody = document.getElementById("grid");
    if (tableBody.contains(e.target)) {
        if ((e.target.classList.contains("grid-item.workout") || e.target.closest(".grid-item.workout"))) {
            e.target.closest(".grid-item").classList.toggle("checked");
        }
    }
});