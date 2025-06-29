/*===============================================
Toggle Icon Navbar (Mobile)
================================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  // ... your scroll logic ...
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};


/*===============================================
Scroll Sections Active Link + Sticky Navbar
================================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document
        .querySelector('header nav a[href*=' + id + ']')
        .classList.add('active');
    }
  });

  // Sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Auto close mobile nav
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

/*===============================================
ScrollReveal Animations
================================================*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: true, // re-animate on re-scroll
});

// Top down elements
ScrollReveal().reveal(
  '.home-content, .heading, .education-container, .timeline',
  { origin: 'top' }
);

// Bottom up elements
ScrollReveal().reveal(
  '.home-img, .Skills-container, .Portfolio-box, .contact form',
  { origin: 'bottom' }
);

// Left and right slide-ins
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*===============================================
Optional: Email Sender Setup (Commented Out)
================================================*/
// function email() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "your@email.com",
//     Password: "YOUR_PASSWORD_HERE",
//     To: 'destination@email.com',
//     From: "your@email.com",
//     Subject: "New Message",
//     Body: "This is the body content of the email."
//   }).then(
//     message => alert("Message sent: " + message)
//   );
// }
