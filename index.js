function submitForm() {
    let name, address, email, phone;
    name = document.getElementById('inputName').value;
    email = document.getElementById('inputEmail').value;
    phone = document.getElementById('inputNum').value;
    let position1 = email.indexOf('@');
    let position2 = email.lastIndexOf('.');

    if (name == null || name == '') {
        alert('Invalid name');

    } else if (isNaN(phone) || phone == null || phone.length < 11) {
        alert('Invalid number');

    } else if (position1 < 1 || position2 < position1 + 2 || position2 + 2 >= email.length) {
        alert('Invalid Email');

    } else {
        setTimeout(() => {
            document.location.href = "thank.html";
        })
    }
}