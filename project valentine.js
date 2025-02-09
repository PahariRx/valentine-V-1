// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".heart-container").appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Surprise Button Interaction
document.getElementById("surpriseBtn").addEventListener("click", function() {
    alert("I Love You So Much! 💖🥰");
});
