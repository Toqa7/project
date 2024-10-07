
var countDownDate = new Date("Sep 21, 2024 23:59:59").getTime();

var countdownfunction = setInterval(function() {


  var now = new Date().getTime();

  
  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);




$(document).ready(function () {
    $(".testimonial").click(function () {
      $(".testimonial").addClass("blur");
      $(this).removeClass("blur");
    });
  });
  



////carosel 
let currentIndex = 1; 

    function updateBlur() {
        const galleryCards = document.querySelectorAll('.gallery-card');
        galleryCards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + 3) {
                card.classList.add('no-blur');
            } else {
                card.classList.remove('no-blur');
            }
        });
    }
      
    function scrollGallery(direction) {
        const galleryCards = document.querySelectorAll('.gallery-card');
        if (direction === 'left' && currentIndex > 0) {
            currentIndex--;
        } else if (direction === 'right' && currentIndex < galleryCards.length - 3) {
            currentIndex++;
        }
        updateBlur();
    }

    
    document.addEventListener('DOMContentLoaded', (event) => {
        updateBlur();
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        var isValid = true;
      
        // validation
        var name = document.getElementById("name").value;
        if (name === "") {
          isValid = false;
          document.getElementById("nameError").textContent = "Name is required";
        } else {
          document.getElementById("nameError").textContent = "";
        }
      
        // Email validation
        var email = document.getElementById("email").value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "") {
          isValid = false;
          document.getElementById("emailError").textContent = "Email is required";
        } else if (!emailPattern.test(email)) {
          isValid = false;
          document.getElementById("emailError").textContent = "Invalid email format";
        } else {
          document.getElementById("emailError").textContent = "";
        }
      
        // Message validation
        var message = document.getElementById("message").value;
        if (message === "") {
          isValid = false;
          document.getElementById("messageError").textContent = "Message is required";
        } else {
          document.getElementById("messageError").textContent = "";
        }
      
        if (!isValid) {
          event.preventDefault();
        }
      });