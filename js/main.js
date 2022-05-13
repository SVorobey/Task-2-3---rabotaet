function ShowModal (id,title) {
    const button = document.getElementById(id);

    const newTitle = document.getElementById('model-title');
    newTitle.innerText = title;

    const modal = document.getElementById('wrapper-modal');
    
    const scrollBar = document.querySelector('.modal-window');
    
    modal.classList.add('open');
    scrollBar.scrollTo(0,0);
    

    const overlay = document.getElementById('overlay');
    
    overlay.addEventListener('click',function(){
        modal.classList.remove('open');
    });
}

function Check_validate(){
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var message = document.getElementById("form__message").value;
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    
    if (email == "" && name == "" && message == "") {
        document.getElementById('submit_button').disabled = true;
    }
    
    if(email.match(pattern) && name != "" && message != "")
    {
        document.getElementById('submit_button').disabled = false; 
    }
    else{
        document.getElementById('submit_button').disabled = true;
    }
} 

document.querySelector(".form__button").addEventListener("click", function() {
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        showConfirmButton: false,
        timer: 5000
    });
});


// Slider

    let offset = 0;
    let slideIndex = 0;
    

    const slides = document.querySelectorAll('.slide'),
        slidesWrapper = document.querySelector('.slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.slider-inner');
    let circles = document.querySelectorAll('.circle');
    circles = Array.from(circles);
    
    slidesField.style.width = 1180  + 'px';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    window.addEventListener("load",function(){
        offset = localStorage.getItem('Offset');
        slideIndex = localStorage.getItem('Index');
        slidesField.style.transform = `translateX(-${offset}px)`;
        circles[slideIndex].className += " active";
    });
    
    
    setInterval(() => {
        offset = Number(offset);
        if (offset == (Number(width.slice(0, width.length - 2) * (slides.length - 1)))) {
            offset = 0;
        } else {
            offset += Number(width.slice(0, width.length - 2));
        }
        localStorage.setItem('Offset', offset);
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == (slides.length - 1)) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        for (i = 0; i < circles.length; i++) {
            circles[i].className = circles[i].className.replace(" active", "");
        }
        circles[slideIndex].className += " active";
        localStorage.setItem('Index', slideIndex);
    },7000);