
var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function () {
    transition();
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

function transition() {
    document.documentElement.classList.add('transition');
    setTimeout(function () {
        document.documentElement.classList.remove('transition');
    }, 250)
}

//$(".description").html("123123");
//$(".description").css("color", "#F34");
//$("section").css("background", "#F34");
//$(".myInput").blur( function () {
//    $("section").css("background", "#F34");
//    $(".description").addClass("Father");
//});