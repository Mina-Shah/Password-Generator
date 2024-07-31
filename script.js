let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2',
    '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*'
]

let passwordBtn = document.getElementById("password-btn")
let showPasswords1 = document.getElementById("show-passwords1")
let showPasswords2 = document.getElementById("show-passwords2")

function generatePassword() {
    let randomCharacters1 = Math.floor(Math.random() * characters.length) + 1
    let randomCharacters2 = Math.floor(Math.random() * characters.length) 

    showPasswords1.textContent = characters[randomCharacters1] += 15
    showPasswords2.textContent = characters[randomCharacters2] += 15
}