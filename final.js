function toggleDiv() {
    var tableSection = document.getElementById("vkus-table-section");
    if (tableSection.style.display === "none" || tableSection.style.display === "visible") {
        tableSection.style.display = "block";
    } else {
        tableSection.style.display = "none";
    }
}