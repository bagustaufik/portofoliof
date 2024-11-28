function handleSignIn(event) {
    event.preventDefault(); // Mencegah refresh halaman
    alert("Berhasil Sign In");
}

function togglePassword() {
    const passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
