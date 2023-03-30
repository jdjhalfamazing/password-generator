const generateBtn = document.getElementById("generate-btn");
const passwordInput = document.getElementById("password");
const passwordLengthInput = document.getElementById("password-length");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";

function generatePassword() {
  const passwordLength = passwordLengthInput.value;
  let password = "";

  const characters = [
    ...lowercaseLetters,
    ...uppercaseLetters,
    ...numbers,
    ...symbols,
  ];

  for (let i = 0; i < passwordLength; i++) {
    const characterIndex = Math.floor(Math.random() * characters.length);
    password += characters[characterIndex];
  }

  passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);
