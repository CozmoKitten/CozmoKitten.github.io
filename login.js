let hashedPassword

const validCredentials = [
    {
        username: "user", // 'user' TEMPORARY
        passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8" // 'password' TEMPORARY
    },
    {
        username: "CozmoKitten",
        passwordHash: "73c4229e301506ff88ef8f7010f78f6c39b8a91bc1291f6a119ac02999b43686" // 'AhS:mS28' TEMPORARY
    },
    {
        username: "Matthew",
        passwordHash: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8" // 'password' TEMPORARY
    }
];

async function sha256(password) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(password);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    hashedPassword = sha256(password);

    sha256(password).then(function(hashedPassword) {

        const isValidCredentials = validCredentials.some((credentials) => {
            return credentials.username === username && credentials.passwordHash === hashedPassword;
        });

        if (isValidCredentials) {
            alert("You have successfully logged in! Press 'OK' to be redirected. ");
            location.reload();
            window.open("homepage.html", "_self")
        } else {
            loginErrorMsg.style.opacity = 1;     
        }  

    });

});