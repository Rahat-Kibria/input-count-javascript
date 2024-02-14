window.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#search");
    const inputCount = document.querySelector("span");
    const maxInputLength = searchInput.maxLength;
    searchInput.addEventListener("input", function (event) {
        // const inputLength = this.value.length;
        const inputLength = event.target.value.length;
        if (inputLength > maxInputLength) {
            event.preventDefault(); //it does not work on input event
        } else if (inputLength > 50) {
            this.style.backgroundColor = "#ff8686";
            inputCount.textContent = (maxInputLength - inputLength) + "/60";
        } else {
            this.style.backgroundColor = "#fff";
            inputCount.textContent = (maxInputLength - inputLength) + "/60";
        }
    });
});
