// =============================
// LOGIN
// =============================
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem("loggedUser", user);
    alert("Login Berhasil!");
    window.location.href = "home.html";
  } else {
    alert("Username atau Password salah!");
  }
}

// =============================
// REGISTER
// =============================
function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  if (!user || !pass) return alert("Isi semua form!");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ username: user, password: pass });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Pendaftaran Berhasil!");
  window.location.href = "login.html";
}

// =============================
// LOAD USER LIST
// =============================
function loadUsers() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let table = document.getElementById("userTable");

  table.innerHTML = `
    <tr>
      <th>Username</th>
      <th>Password</th>
    </tr>
  `;

  users.forEach(u => {
    table.innerHTML += `
      <tr>
        <td>${u.username}</td>
        <td>${u.password}</td>
      </tr>
    `;
  });
}

// =============================
// SOP SAVE + LOAD
// =============================
function saveSOP() {
  let sop = document.getElementById("sopInput").value;
  if (!sop) return alert("Isi SOP terlebih dahulu!");

  localStorage.setItem("sopData", sop);
  loadSOP();
}

function loadSOP() {
  let sop = localStorage.getItem("sopData") || "Belum ada SOP.";
  document.getElementById("sopDisplay").innerText = sop;
}

// =============================
// RATING SAVE + LOAD
// =============================
function saveRating() {
  let value = document.getElementById("ratingValue").value;
  let text = document.getElementById("ratingText").value;

  let ratings = JSON.parse(localStorage.getItem("ratings")) || [];

  ratings.push({
    rating: value,
    review: text
  });

  localStorage.setItem("ratings", JSON.stringify(ratings));
  loadRatings();
}

function loadRatings() {
  let ratings = JSON.parse(localStorage.getItem("ratings")) || [];
  let list = document.getElementById("ratingList");

  list.innerHTML = "";

  ratings.forEach(r => {
    list.innerHTML += `
      <div class="rating-box">
        <strong>${"⭐".repeat(r.rating)}</strong>
        <p>${r.review}</p>
      </div>
    `;
  });
}

// =============================
// PERBAIKAN ORDER WHATSAPP
// =============================
function orderWhatsApp() {
  let phone = "6289688200978";
  let message = "Halo Dicicip.in! Saya ingin memesan menu dari daftar menu.";

  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
// =============================
// OPEN POPUP ORDER OPTIONS
// =============================
function openOrderOptions() {
  document.getElementById("orderPopup").style.display = "flex";
}

// =============================
// CLOSE POPUP
// =============================
function closeOrderOptions() {
  document.getElementById("orderPopup").style.display = "none";
}

// =============================
// DIRECT WHATSAPP ORDER
// =============================
function orderWhatsApp() {
  let phone = "6289688200978"; // GANTI NOMOR WA
  let message = "Halo Dicicip.in! Saya ingin memesan menu dari daftar menu.";
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// =============================
// DIRECT GOFOOD
// =============================
function orderGoFood() {
  window.open("https://gofood.link/u/9Bq9O", "_blank");
}

// =============================
// DIRECT SHOPEEFOOD
// =============================
function orderShopeeFood() {
  window.open("https://shopee.co.id/universal-link/now-food/shop/524254?deep_and_deferred=1&shareChannel=copy_link", "_blank");
}
function logout() {
    alert("Anda telah logout!");
    window.location.href = "login.html"; // arahkan ke halaman login
}


