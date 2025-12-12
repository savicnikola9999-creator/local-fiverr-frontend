async function checkBackend() {
  const status = document.getElementById("status");

  try {
    const res = await fetch("https://local-fiverr-backend.onrender.com/");
    const text = await res.text();
    status.textContent = text;
  } catch (err) {
    status.textContent = "Backend nije dostupan ❌";
  }
}

checkBackend();


function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  fetch("https://local-fiverr-backend.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("loginStatus").innerText =
        data.message || "Prijavljen";
      console.log("Ulogovani korisnik:", data);
    })
    .catch(() => {
      document.getElementById("loginStatus").innerText =
        "Greška pri prijavi";
    });
}
