document.addEventListener("DOMContentLoaded", function () {
    const tabHeaders = document.querySelectorAll(".tab-header li a");
    const tabContents = document.querySelectorAll(".tab-content");

    tabHeaders.forEach(function (tabHeader) {
        tabHeader.addEventListener("click", function (event) {
            event.preventDefault();

            const targetTabId = this.getAttribute("href").slice(1);

            // Hide all tab contents
            tabContents.forEach(function (tabContent) {
                tabContent.classList.remove("active");
            });

            // Show the selected tab content
            document.getElementById(targetTabId).classList.add("active");

            // Remove 'active' class from all tab headers
            tabHeaders.forEach(function (header) {
                header.parentElement.classList.remove("active");
            });

            // Add 'active' class to the clicked tab header
            this.parentElement.classList.add("active");
        });
    });
});