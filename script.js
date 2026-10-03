function showMessage() {
    const message = document.getElementById("thankYouMessage");

    message.innerHTML = `
        💗 Thank you so much, Sir! 💗<br>
        We appreciate everything you do for us! 🌷✨
    `;

    message.style.opacity = "0";
    message.style.transform = "translateY(10px)";

    setTimeout(() => {
        message.style.transition = "0.5s ease";
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 50);
}