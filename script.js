// Element Selectors
const generatepass = document.querySelector("#generatepass");
const pwdcontainer = document.querySelector("#pwdcontainer");
const copyText = document.querySelector("#copyText");
const select = document.querySelector("#select");
const specificcharsInput = document.querySelector("#specificcharsinput");
const clearBtn = document.getElementById('clear');
const noOfChars = document.getElementById("no-of-chars");
const copymess = document.getElementById("copymess");

// Event Listeners
document.querySelector("#specificchars").addEventListener('click', toggleVisibility.bind(null, specificcharsInput, "#specificchars"));
document.querySelector("#showselectEl").addEventListener('click', toggleVisibility.bind(null, select, "#showselectEl"));

generatepass.addEventListener('click', () => {
    pwdcontainer.classList.remove('invisible');
    copyText.classList.remove('d-none');
    clearBtn.classList.remove('d-none');
    clearBtn.classList.add('d-block');
    randomPasswordGenerator();
});

copyText.addEventListener('click', copyToClipboard);
clearBtn.addEventListener('click', () => location.reload());
select.addEventListener('input', () => validate(select.value));

// Functions
function toggleVisibility(showEl, hideEl) {
    showEl.classList.remove('d-none');
    document.querySelector(hideEl).classList.add('d-none');
}

function randomPasswordGenerator() {
    const specificChars = specificcharsInput.value;
    let chars = "0123456789!@#$%&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const maxLength = Math.min(Math.max(select.value, 5), 30);
    const passwordLength = maxLength - specificChars.length;

    let password = specificChars;
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    pwdcontainer.value = password;
    noOfChars.innerHTML = `<h4 class='badge bg-danger'>No. of Characters: <h5 class='badge bg-success'>${password.length}</h5></h4>`;
}

function copyToClipboard() {
    pwdcontainer.select();
    navigator.clipboard.writeText(pwdcontainer.value);
    copymess.innerHTML = "<small>Copied successfully!</small>";
    setTimeout(() => { copymess.innerHTML = ''; }, 3000);
}

function validate(length) {
    const maxAllowedChars = getMaxAllowedChars(length);
    if (length < 5 || length > 30) {
        disableGenerateButton("Password length must be between 5 and 30!");
        pwdcontainer.placeholder = "Max 30 characters supported.";
        specificcharsInput.placeholder = "Invalid length!";
    } else {
        enableGenerateButton();
        specificcharsInput.setAttribute("maxlength", maxAllowedChars);
        specificcharsInput.setAttribute("placeholder", `Max ${maxAllowedChars} chars allowed`);
    }
}

function getMaxAllowedChars(length) {
    if (length <= 5) return 2;
    if (length <= 10) return 4;
    if (length <= 20) return 5;
    return 8;
}

function disableGenerateButton(message) {
    generatepass.disabled = true;
    generatepass.innerText = message;
}

function enableGenerateButton() {
    generatepass.disabled = false;
    generatepass.innerText = "Generate Password";
}
