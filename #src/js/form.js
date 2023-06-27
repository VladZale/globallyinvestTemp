"use strict"

const popupError = document.querySelector('.popup__error');
const popupErrorFile = document.querySelector('.popup__error-file');
const popupErrorSend = document.querySelector('.popup__error-send');
const popupSending = document.querySelector('.popup__sending');
const popupSuccessSend = document.querySelector('.popup__success-send');
const popupWorning = document.querySelector('.popup__worning');
let formReq = document.querySelectorAll('._req');
var input = document.body.children[0];


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {

        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {

            popupSending.classList.add('open');
            body.classList.add('_lock');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                formPreview.innerHTML = '';
                form.reset();
                popupSending.classList.remove('open');
                popupSuccessSend.classList.add('open');
                body.classList.add('_lock');
            } else {
                popupErrorSend.classList.add('open');
                body.classList.add('_lock');
                popupSending.classList.remove('open');
            }
        } else {

            popupError.classList.add('open');
            body.classList.add('_lock');
        }
    }

    inputUppdate();

    function formValidate(form) {
        let error = 0;


        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {

                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function checkInput() {
        var textCheck = document.getElementById("inputText").value;
        if (isNaN(textCheck)) {
            document.write("contains letters");
        } else {
            document.write("only numbers");
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function inputUppdate() {
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            input.oninput = function () {
                if (input.value > 1 || input.classList.contains('_error')) {
                    input.classList.remove('_error');
                }
            };
        }
    }

});

//API
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);
//     async function formSend(e) {
//         e.preventDefault();
//         let error = formValidate(form);
//         if (error === 0) {
//             let myData = {
//                 firstname: formReq[0].value,
//                 lastname: formReq[1].value,
//                 phone: formReq[3].value,
//                 email: formReq[2].value,
//             }
//             popupSending.classList.add('open');
//             body.classList.add('_lock');
//             fetch('https://api.platform.naxtrader.com/user', {
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 method: 'POST',
//                 body: JSON.stringify(myData)
//             })
//                 .then(response => {
//                     return response.json();
//                 })
//                 .then(data => {
//                     window.location.replace(data.data.autologin_url)
//                 });
//         } else {
//             popupError.classList.add('open');
//             body.classList.add('_lock');
//         }
//     }
//     inputUppdate();
//
//     function formValidate(form) {
//         let error = 0;
//
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//
//             formRemoveError(input);
//
//             if (input.classList.contains("_phone")) {
//                 if (phoneTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
//                 formAddError(input);
//                 error++;
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//
//         }
//         return error;
//     }
//
//     function checkInput() {
//         var textCheck = document.getElementById("inputText").value;
//         if (isNaN(textCheck)) {
//             document.write("contains letters");
//         } else {
//             document.write("only numbers");
//         }
//     }
//
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
//
//     function phoneTest(input) {
//         return (input.value = value.replace("/[^1-9]/g", " "));
//     }
//
//     function inputUppdate() {
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             input.oninput = function () {
//                 if (input.value > 1 || input.classList.contains('_error')) {
//                     input.classList.remove('_error');
//                 }
//             };
//         }
//     }
//
// });