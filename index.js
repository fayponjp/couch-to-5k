document.addEventListener("click", (e) => {
    const tableBody = document.getElementById("table-body");
    if (tableBody.contains(e.target)) {
        if ((e.target.nodeName === 'TD' || e.target.parentElement.nodeName === 'TD')) {
            e.target.closest("td").classList.toggle("checked");
        }
    }
});