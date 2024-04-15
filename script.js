document.getElementById("text-area").addEventListener("input", () => {
    const text = document.getElementById("text-area").value;
    const wordCount = text.trim().split(/\s+/).length;
    const charCount = text.length;

    document.getElementById("word-count").textContent = wordCount;
    document.getElementById("char-count").textContent = charCount;
});

document.getElementById("copy-btn").addEventListener("click", () => {
    const text = document.getElementById("text-area").value;
    navigator.clipboard.writeText(text);
});

document.getElementById("uppercase-btn").addEventListener("click", () => {
    const text = document.getElementById("text-area").value;
    document.getElementById("text-area").value = text.toUpperCase();
});

document.getElementById("lowercase-btn").addEventListener("click", () => {
    const text = document.getElementById("text-area").value;
    document.getElementById("text-area").value = text.toLowerCase();
});
