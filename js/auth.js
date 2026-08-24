function initLoginPage() {
  const form = document.querySelector("#loginForm");
  const errorEl = document.querySelector("#authError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#emailInput").value.trim();
    const password = document.querySelector("#passwordInput").value;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      login();
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect");
      window.location.href = redirect
        ? decodeURIComponent(redirect)
        : "index.html";
    } else {
      errorEl.textContent = "Invalid email or password. Please try again.";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#loginForm")) initLoginPage();
});