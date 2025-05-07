function sendEmail(){
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("Subject").value,
        message: document.getElementById("Message").value,
    }
    emailjs.send("service_sygtk13","template_h76xzeo",params).then(alert("Email Sent!😇👌"))
}

const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks  = document.querySelectorAll('.nav-links li');

    
      //toggle Menu
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

       //animate nav-links
        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.1}s`
            }
        })

        //animate and toggle hamburger icon
        burger.classList.toggle('toggle');


    });


}
navSlide();

//Scroll Reveal Animation

ScrollReveal().reveal(".nav", {
        opacity:0,
        distance :"30px",
        duration: 1000,
        delay:500,
    });
ScrollReveal().reveal(".hero-text", {
        opacity:0,
        distance :"30px",
        duration: 1000,
        delay:300,
    });
ScrollReveal().reveal(".hero-image", {
        opacity:0,
        distance :"30px",
        duration: 1000,
        scale:0.5,
        delay:300,
        easing:"ease-in-out",
    });
ScrollReveal().reveal(".aboutMe-h1", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:250,
    });
ScrollReveal().reveal(".about-img", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:500,
        scale:0.5,
        origin:"left",
        easing:"ease-in-out",
    });
ScrollReveal().reveal(".about-text", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:500,
    });
ScrollReveal().reveal(".skill-title", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:300,
    });
ScrollReveal().reveal(".frontend-skills", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:500,
        origin:"left",
    });
ScrollReveal().reveal(".frameworks-libraries", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:700,
        origin:"left",
    });
ScrollReveal().reveal(".extras", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:900,
        origin:"left",
        interval: 200,
    });
ScrollReveal().reveal(".project-title,.service-title,.contact-title,.footer-text", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:300,
    });
ScrollReveal().reveal(".projects,.service-card,.contact-info,.follow-me,.contact-form", {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:500,
        origin:"left",
        interval: 200,
    });
ScrollReveal().reveal(".project-two",
    {
        opacity:0,
        distance :"40px",
        duration: 1000,
        delay:500,
        origin:"left",
        scale:0.5,
        interval: 200,
        easing:"ease-in-out",
    }
)