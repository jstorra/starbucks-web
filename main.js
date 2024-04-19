document.addEventListener("DOMContentLoaded", () => {
    const freshGreen = document.querySelector(".fresh-green");
    const lightCream = document.querySelector(".light-cream");
    const pinkyPink = document.querySelector(".pinky-pink");
    const product = document.querySelector(".product");
    const title = document.querySelector(".title");
    const openMenu = document.querySelector(".menu-img");
    const closeMenu = document.querySelector(".close");

    freshGreen.addEventListener("click", () => {
        title.textContent = "Fresh Green";
        product.innerHTML = `<img src="./img/img1.png" alt="fresh_green">`
    })

    lightCream.addEventListener("click", () => {
        title.textContent = "Light Cream";
        product.innerHTML = `<img src="./img/img2.png" alt="light_cream">`
    })

    pinkyPink.addEventListener("click", () => {
        title.textContent = "Pinky Pink";
        product.innerHTML = `<img src="./img/img3.png" alt="pinky_pink">`
    })

    openMenu.addEventListener("click", () => {
        document.querySelector(".menu").style.display = "block";
        document.querySelector("html").style.overflow = "hidden";
    })

    closeMenu.addEventListener("click", () => {
        document.querySelector(".menu").style.display = "none";
        document.querySelector("html").style.overflow = "auto";
    })
})
