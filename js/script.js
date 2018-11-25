let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName("contactform_name")[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelector('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];



function hover() {
    heading.textContent = "действительно всё!"
};

function out() {
    heading.textContent = "все включено!"
}

// heading.onmouseenter = hover;
// heading.addEventListener("mouseenter", hover);
// heading.addEventListener("mouseleave", function() {
//     heading.textContent = "все включено!"
// });

heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function () {
    heading.textContent = "все включено!"
});

receiveBtn.addEventListener('click', function () {
    modal.style.display = "block"
});

close.addEventListener('click', function () {
    modal.style.display = "none"
});

nameInput.addEventListener("input", function () {
    text.value = "меня зовут " + nameInput.value + ". И я хочу спросить:";
    if (nameInput.value=="") {
        text.value = ""
    }
})