
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    } ) ;

    let header  = querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    
};

ScrollReveal({
     //reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


    document.addEventListener('DOMContentLoaded', function () {
        var targetElement = document.querySelector('.multiple-text');
        var strings = ["FrontEnd Developer", "Designer", "Game Developer"];
        var currentIndex = 0;
        

        
  
        function updateText() {
          targetElement.innerHTML = strings[currentIndex];
          currentIndex = (currentIndex + 1) % strings.length;
        }
  
        setInterval(updateText, 2000);
      });


      document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Assuming you have a thankyou.html page
            fetch("process_form.php", {
                method: "POST",
                body: new FormData(form),
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    alert("Message sent successfully!");
                    window.location.href = "main.html";
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    });


    