window.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#search");
    const inputCount = document.querySelector("span");
    const maxInputLength = searchInput.maxLength;
    searchInput.addEventListener("input", function (event) {
        // const inputLength = this.value.length;
        const inputLength = event.target.value.length;
        const remainingCharacter = maxInputLength - inputLength;
        if (remainingCharacter === 0) {
            this.style.backgroundColor = "#fd4848";
            inputCount.style.color = "#fd4848";
            inputCount.textContent = remainingCharacter;
            event.preventDefault();
        } else if (remainingCharacter <= 10) {
            this.style.backgroundColor = "#ff9494";
            inputCount.style.color = "#ff9494";
            inputCount.textContent = remainingCharacter;
        } else {
            this.style.backgroundColor = "#fff";
            inputCount.style.color = "#000";
            inputCount.textContent = remainingCharacter;
        }
    });
});
