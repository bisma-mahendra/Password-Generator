let passwordLenght = document.getElementById("passwordLenght");
let password = document.getElementById("password");
let saveBtn = document.getElementById("saveButton");
let account = document.getElementById("account");

function generatePassword(panjang) {
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%^&*()-_=+{}[]';:/?.,<>~`";
    
    const data = lowerAlpha + upperAlpha + numeric + symbol;
    let generator = '';

    for (let i = 0; i < panjang; i++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword(){
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
}

function savePassword(){
    let pass = password.value;
    let akun = account.value;

    saveBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(akun + ' ' + 'Password: ' + pass));
    saveBtn.setAttribute('download', 'myPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('Password anda berhasil disimpan');
    }, 600);
}