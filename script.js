document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("questions");

    if (btn) {
        btn.addEventListener("click", () => {
            alert(
                "If you have questions, contact me at:\namorgadocruz@hawk.illinoistech.edu"
            );
        });
    }
});