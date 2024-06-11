

//CLOCK
$(document).ready(function ()
{
    function clockTime() 
    {
        var x = document.getElementById("ktime").innerHTML;
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        var today = new Date();

        var x = document.getElementById("ktime").innerHTML = (today.toLocaleDateString("en-GB", options)).replace('at', '|');
        console.log(x);
            setTimeout(function () 
            {
                clockTime();
            }, 1000);
    }
     clockTime();



     function showInstallButton() {
        document.getElementById('popup_install').style.display = 'block';
    }
    
    function hideInstallButton() {
        document.getElementById('popup_install').style.display = 'none';
    }
    
    let deferredPrompt; // This variable will save the event for later use.
    
    window.addEventListener('beforeinstallprompt', (e) => {
        // Check if the prompt was dismissed less than 30 days ago
        const dismissedAt = localStorage.getItem('dismissedAt');
        if (dismissedAt && new Date().getTime() - dismissedAt < 1 * 60 * 100) { //30*24*60*60*1000 30days
           // Prevent Chrome's default install prompt
            e.preventDefault();
            return;
        }
    
        // Save the event for later use
        deferredPrompt = e;
    
        // You can choose to show your custom install button here
        showInstallButton();
    });
    
    // When your custom install button is clicked
    btnInstall.addEventListener('click', (e) => {
        // Hide the install button
        hideInstallButton();
    
        // Show the saved install prompt
        deferredPrompt.prompt();
    
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
                // Store the time of dismissal
                localStorage.setItem('dismissedAt', new Date().getTime());
            }
            deferredPrompt = null;
        });
    });
});

//scroll
$(function () {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 800) {
            // Disable the LinkButton
            $("#btn_user").css("display", "none");
        } else {
            // Enable the LinkButton
            $("#btn_user").css("display", "block");
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

//navbar_operation_small_big
$(document).ready(function () {


    $(".navbar-toggler").click(function () {
        

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

    //profile
    // hide the div initially
    $("#popup_install").css("display", "none");

    $("#close-btn-profile").click(function () {
        // toggle the display property of the div
        $("#popup_install").toggle();
    });


});


//mouse_cursor_follower
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

//loader
/*window.addEventListener("load", function () {
    var loader = document.getElementById("preloader");
    loader.style.opacity = 0;
    setTimeout(function () {
        loader.style.display = "none";
    }, 1000);


});*/



//Main_content_JS_PUSH-POP
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


//project_cards
/*$(document).ready(function () {
   const card = $("#myCard");
   const expandButton = $("#btn_expand_card");
   let isExpanded = false;

   expandButton.click(function (event) {
       event.preventDefault(); // prevent the default action (page reload)

       isExpanded = !isExpanded;
       if (isExpanded) {
           $("#myCard").css("width", "30rem");
           $("#myCard").css("backdrop-filter", "blur(50px)");
           $("#myCard").css("-webkit-backdrop", "blur(50px)");
           $("#myCard").css("transform", "translateX(15px) translateY(15px) scale(1.025)");
           $("#myCard").css("-webkit-box-shadow", "-15px - 15px 200px 50px rgba(0, 0, 0, 0.9)");
           $("#myCard").css("-moz-box-shadow", "-15px - 15px 200px 50px rgba(0, 0, 0, 0.9)");
           $("#myCard").css(" box-shadow", "-15px - 15px 200px 50px rgba(0, 0, 0, 0.9)");



       } else {
           $("#myCard").css("width", "18rem");
           $("#myCard").css("backdrop-filter", "blur(10px)");
           $("#myCard").css("-webkit-backdrop", "blur(10px)");
           $("#myCard").css("transform", "");
           $("#myCard").css("-webkit-box-shadow", "");
           $("#myCard").css("-moz-box-shadow", "");
           $("#myCard").css(" box-shadow", "");
       }
   });
});*/

$(document).ready(function () {
    $(".chkbtn").click(function () {
        if ($('.chkbtn').attr('aria-expanded') === 'false') {
            $('#spanexpand').removeClass('fa-caret-down');
            $('#spanexpand').addClass('fa-caret-up');

            // Check if screen size is greater than or equal to small breakpoint
            if (window.matchMedia('(min-width: 768px)').matches) {
                $('#prj1').attr('src', '/assets/imgs/logosmart.png');
            }
        }
        else {
            $('#spanexpand').removeClass('fa-caret-up');
            $('#spanexpand').addClass('fa-caret-down');
            $('#prj1').attr('src', '/assets/imgs/vmclogo_edit.png');
        }
    });
});

$(document).ready(function () {
    $(".chkbtnn").click(function () {
        if ($('.chkbtnn').attr('aria-expanded') === 'false') {
            $('#spanexpandd').removeClass('fa-caret-down');
            $('#spanexpandd').addClass('fa-caret-up');

            // Check if screen size is greater than or equal to small breakpoint
            if (window.matchMedia('(min-width: 768px)').matches) {
                $('#prj2').attr('src', '/assets/imgs/project_pulley_small.gif');
            }
        }
        else {
            $('#spanexpandd').removeClass('fa-caret-up');
            $('#spanexpandd').addClass('fa-caret-down');
            $('#prj2').attr('src', '/assets/imgs/project_pulley.gif');
        }
    });
});

$(document).ready(function () {
    $(".chkbtnnn").click(function () {
        if ($('.chkbtnnn').attr('aria-expanded') === 'false') {
            $('#spanexpanddd').removeClass('fa-caret-down');
            $('#spanexpanddd').addClass('fa-caret-up');

            // Check if screen size is greater than or equal to small breakpoint
            if (window.matchMedia('(min-width: 768px)').matches) {
                $('#prj3').attr('src', '/assets/imgs/exp_trc.png');
            }
        }
        else {
            $('#spanexpanddd').removeClass('fa-caret-up');
            $('#spanexpanddd').addClass('fa-caret-down');
            $('#prj3').attr('src', '/assets/imgs/exp_trc.png');
        }
    });
});

