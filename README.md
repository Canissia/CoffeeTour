# CoffeeTour
Coffee Tour four page website

This is my coffee tour website! While living in Colombia we visited Media Luna coffee farm. They specialize in organic coffee. It was an amazing experience and I enjoyed it so much that three years later, I decided to use them as a muse to for my website.

Although not best practice, each page features a different type of library and framework. Hey, I have to get my practice in where I can. 

Most businesses in Colombia use only instagram/whatsapp to advertise and communicate. This is a great low-cost approach that does not require paid hosting and domain costs. However, it is very common for foreigner customers (mostly USA/European) to look for a website as well. This is an option that is not dependent on a third party app. They will avoid the risk of any particular site changing their algorhythm or favoriting a newer company.


* * * * * * * * * * Main page * * * * * * * * * *

I REALLY wanted to have a video as a background and I found the perfect (unlicensed) video via pixabay.
The base is HTML and CSS. Javascript was used to make the menu toggle effect. DOM were used on classes and 'listen' for the click event.

        const menuToggle = document.querySelector('.toggle')
        const showcase = document.querySelector('.showcase')

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')
        })
        
This page was styled with flexbox.
Font was imported from googlefonts.

        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&display=swap");

The page is responsive at 798px as well.

        @media (max-width: 798px)
        
        
* * * * * * * * * * About Us * * * * * * * * * *

HTML, CSS styling.
Used FontAwesome library to add social media icons instead of using icon images.
The 'return home' button uses button onclick event.

         <div class="button">
               <button class="exit" onclick="window.location.href='../index.html'">Home</button>
         </div>

This page is also responsive 

         @media screen and (max-width: 768px)



* * * * * * * * * * Contact Us * * * * * * * * * *

Background image is highlighted by content box opacity.

Fontawesome library to select social media icons

Flex box layout

Each field in the form has a transformation when selected: 

          .contactForm .inputBox input:focus ~ span,
          .contactForm .inputBox input:valid ~ span,
          .contactForm .inputBox textarea:focus ~ span,
          .contactForm .inputBox textarea:valid ~ span {
                color: #f2cc8f;
                font-size: 14px;
                transition: 0.4s;
            }

This page is also responsive 

      @media (max-width: 991px) 


* * * * * * * * * * Gallery * * * * * * * * * *

Last but not least. This last page is a carousel of images. 

HTML, CSS

block format instead of flexbox

Includes Home button with different styling.

Each image includes a description each with different lengths of text.
Transition delays to make a smoother experience


* * * Javascript * * * 

Chose to use data attributes instead of classes in JS to prevent overlap.

          const buttons = document.querySelectorAll("[data-carousel-button]")
          

Loop through and display each button on click and add event listener to change images. 

      buttons.forEach(button => {
      button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      
      
Get slide with active attribute

      const activeSlide = slides.querySelector("[data-active]")
          
      
Needed to convert each slide to an array (spread) and use index of active slide to determine its order. 

      let newIndex = [...slides.children].indexOf(activeSlide) + offset


When reach the beginning or end of images, continue to loop

      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0


Add and remove dataset ‘active’ to the slide.

     slides.children[newIndex].dataset.active = true
     delete activeSlide.dataset.active
     
     
Image Attributes;

Nischal Masand, Alin Luna, Ante Samarzija, Rodrigo Flores,  blackieshoot, Eduardo Gorghetto, Mariliz López, Dang Cong, Juan Nino, Robert Gunnarsson, Karolina Kołodziejczak, nousnou iwasaki, Juan Nino, Tamas Pap, Nathan Dumlao 
