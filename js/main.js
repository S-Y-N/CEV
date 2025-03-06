/*Nav btn*/
$(document).ready(function () {
    let navBtn = $('.nav-icon-btn');
    let navIcon = $('.nav-icon');
    let nav = $('.header__top-content');

    navBtn.click(function () {
        navIcon.toggleClass('nav-icon--active');
        nav.toggleClass('header__top-content--mobile');
        $('body').toggleClass('no-scroll');
    });
});

/*Phone`s Mask */
mask('[data-tel-input]');

$('[data-tel-input]').each(function () {
    $(this).on('input', function () {
        if ($(this).val() == '+') {
            $(this).val('');
        }
    });

    $(this).on('blur', function () {
        if ($(this).val() == '+') {
            $(this).val('');
        }
    });
});

// document.getElementById("google-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);

//     // Вставте сюди посилання на вашу Google Form
//     const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSevD-jNWwocaQN2zvhpsily2zl8vPUmDArK2CGfH6HvjuwtCg/formResponse";

//     const data = new URLSearchParams();
//     data.append("entry.787026427", formData.get("name"));
//     data.append("entry.592571686", formData.get("phone"));
//     console.log(data);
//     fetch(googleFormURL, {
//         method: "POST",
//         mode: "no-cors",
//         body: data,
//     }).then(() => {
//         alert("Заявка успішно відправлена!");
//         this.reset();
//     }).catch(error => {
//         console.error("Помилка відправки:", error);
//         alert("Помилка при відправці форми!");
//     });
// });

document.getElementById("google-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSevD-jNWwocaQN2zvhpsily2zl8vPUmDArK2CGfH6HvjuwtCg/formResponse";

    const data = new URLSearchParams();
    data.append("entry.787026427", formData.get("name"));
    data.append("entry.592571686", formData.get("phone"));

    fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: data,
    }).then(() => {
        document.getElementById("success-message").style.display = "block";
        this.reset();
    }).catch(error => {
        console.error("Помилка відправки:", error);
    });
});
