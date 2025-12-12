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
