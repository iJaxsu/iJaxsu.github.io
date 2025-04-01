document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    let step = 200; // Adjust step size as needed

    function autoScroll() {
        scrollContainer.scrollBy({ left: step, behavior: "smooth" });

        // Reset scroll to the beginning when reaching the end
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = 0;
        }
    }

    setInterval(autoScroll, 3000); // Moves every 2 seconds
});



document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }
});


if (window.innerWidth < 1000) {
    alert("The Website is Best viewed in Laptop/Desktop\n\nPlease Rotate your Device to Landscape Mode for better experience");
}

let init_Width = window.innerWidth;
let init_Height = window.innerHeight;

window.addEventListener('resize', function() {
    if (window.innerWidth != init_Width || window.innerHeight != init_Height) {
        showZoomPopup();
    } else {
        closeZoomPopup();
    }
});

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function showZoomPopup() {
    document.getElementById("zpopup").style.display = "flex";
}

function closeZoomPopup() {
    document.getElementById("zpopup").style.display = "none";
}
