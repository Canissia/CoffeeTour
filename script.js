const buttons = document.querySelectorAll("[data-carousel-button]")

// loop through each button and add click event listener to swap to each image. Determine if we go to previous or next image by text "next"
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
// makes sure that no matter how many carousels on the page, they will work
        const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")

// get slide with active attribute
        const activeSlide = slides.querySelector("[data-active]")
// convert slides to an array, then get index of active slide in array (either 1 or -1)
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
// when reach end/beginning of images, continue to loop
// last slide
        if (newIndex < 0) newIndex = slides.children.length - 1
// first slide
        if (newIndex >= slides.children.length) newIndex = 0
// add/remove dataset active to/from slide
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})