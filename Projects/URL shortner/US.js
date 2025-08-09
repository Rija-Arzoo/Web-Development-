const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Cannot find the element ${selector}`);
};

const form = selectElement("form");
const input = selectElement("input");
const result = selectElement(".result");
const hamburger = selectElement(".hamburger");
const navMenu = selectElement(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = input.value.trim();
    if (url) {
        shortenUrl(url);
    }
});

async function shortenUrl(url) {
    try {
        const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        const shortUrl = await res.text(); // TinyURL returns plain text
        result.innerHTML = "";
        const newUrl = document.createElement("div");
        newUrl.classList.add("item");
        newUrl.innerHTML = `
            <p>${shortUrl}</p>
            <button class="newUrl-btn">Copy</button>
        `;
        result.prepend(newUrl);

        const copyBtn = newUrl.querySelector(".newUrl-btn");
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(shortUrl);
            copyBtn.textContent = "Copied!";
        });

        input.value = "";
    } catch (err) {
        console.error("Error shortening URL:", err);
        result.innerHTML = `<p style="color:red;">Failed to shorten URL. Please try again.</p>`;
    }
}
