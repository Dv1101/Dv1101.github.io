$(document).ready(function ()
{
    function clockTime() 
    {
        var x = document.getElementById("ktime").innerHTML;
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        var today = new Date();

        var x = document.getElementById("ktime").innerHTML = (today.toLocaleDateString("en-GB", options)).replace('at', '|');
        console.log(x);
        setTimeout(function () {
            clockTime();
        }, 1000);
    }
    clockTime();
});


$(function () {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 800) {
            // Disable the LinkButton
            $("#<%= btn_user.ClientID %>").css("display", "none");
        } else {
            // Enable the LinkButton
            $("#<%= btn_user.ClientID %>").css("display", "block");
        }

        if ($(window).scrollTop() <= 50) {
            $(".navscroll").css("padding", "20px");
            $(".navbar-toggler").css("border-radius", "6px");


        }
        else {
            if ($('.navbar-toggler').attr('aria-expanded') === 'false') {
                $(".navscroll").css("padding", "0px 2px 0px 12px");
                $(".navbar-toggler").css("border-radius", "20px")

            }


        }
    })
})



$(document).ready(function () {


    $(".navbar-toggler").click(function () {
        var linkText = $("#navicon").text();

        if ($('.navbar-toggler').attr('aria-expanded') === 'false') {

            
            $('#navbarexpand').removeClass('fa-caret-down');
            $('#navbarexpand').addClass('fa-caret-up');
            //$(".navscroll").addClass('bg-transparent');
            $(".navscroll").css("backdrop-filter", "blur(35px)");
            
            
            
            
        }
        else {

           
            
            $('#navbarexpand').removeClass('fa-caret-up');
            $('#navbarexpand').addClass('fa-caret-down');
            //$(".navscroll").removeClass('bg-transparent');
            $(".navscroll").css("backdrop-filter", "blur(10px)");
           
            
            
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const isTouchDevice = matchMedia("(hover: none)").matches;

    if (!isTouchDevice) {
        const circle = document.querySelector('.cursor-circle');
        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;

        function updateCirclePosition() {
            const dx = mouseX - circleX;
            const dy = mouseY - circleY;
            const vx = dx / 4;
            const vy = dy / 4;

            circleX += vx;
            circleY += vy;

            circle.style.transform = `translate(${circleX}px, ${circleY}px)`;

            requestAnimationFrame(updateCirclePosition);
        }

        document.addEventListener('mousemove', function (event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        requestAnimationFrame(updateCirclePosition);
    }
});


window.addEventListener("load", function () {
    var loader = document.getElementById("preloader");
    loader.style.opacity = 0;
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000);


});


$(document).ready(function () {
    typeText();
});

const strings = ['cout<<"Passionate Computer Science and Engineering Student";', 'printf("Developer");', 'system.out.println("#Techy");', 'print("Dreamer")'];
let stringIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 140;
const deleteSpeed = 50;

function typeText() {
    const paragraph = document.getElementById("footer_header");
    const currentString = strings[stringIndex];

    if (isDeleting) {
        paragraph.textContent = currentString.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            stringIndex = (stringIndex + 1) % strings.length;
        }
    } else {
        paragraph.textContent = currentString.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentString.length) {
            isDeleting = true;
            setTimeout(typeText, 1000);
            return;
        }
    }

    setTimeout(typeText, isDeleting ? deleteSpeed : typingSpeed);
}


$(document).ready(function () {
    // Scroll to section when the button is clicked
    $(".scroll-button").click(function () {
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 100);
    });

   
});