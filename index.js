// console.log("Here the my project.");

const names = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let vaildname = false;
let vaildemail = false;
let vaildphone = false;

// console.log(name,email,phone);
names.addEventListener('blur', () => {
    //Validate here
    let regex = /^([a-zA-Z])([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        names.classList.remove('is-invalid');
        vaildname = true;
    }
    else {
        names.classList.add('is-invalid')
        vaildname = false;
    }
})

email.addEventListener('blur', () => {
    console.log('email is blured');
    //Validate here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        vaildemail = true;
    }
    else {
        email.classList.add('is-invalid')
        vaildemail = false;
    }
})

phone.addEventListener('blur', () => {
    //Validate here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        vaildphone = true;
    }
    else {
        phone.classList.add('is-invalid')
        vaildphone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();

    //Submit your form here
    if (vaildemail && vaildname && vaildphone) {
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    }
})