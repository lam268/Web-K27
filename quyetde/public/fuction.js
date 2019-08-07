const textarea = document.querySelector("textarea");

textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    const currentLength = target.value.length;
    var countchar = document.querySelector('.count');
    if (currentLength >= 200) {
        countchar.innerText = "You have reached the maximum number of characters.";
    }
    else {
        countchar.innerText = `${200 - currentLength} ky tu`;
    }
});