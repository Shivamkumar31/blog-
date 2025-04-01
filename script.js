function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    document.body.appendChild(flower);

    // Random position
    flower.style.left = Math.random() * window.innerWidth + "px";

    // Random animation duration
    let duration = Math.random() * 3 + 2;
    flower.style.animationDuration = duration + "s";

    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Generate flowers every 500ms
setInterval(createFlower, 500);
