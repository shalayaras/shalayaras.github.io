<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>My Profile</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="lang">
  <button onclick="setLang('ku')">KU</button>
  <button onclick="setLang('en')">EN</button>
  <button onclick="setLang('ar')">AR</button>
  <button onclick="setLang('fa')">FA</button>
</div>

<div class="card">
  <img src="logo.png" class="avatar">
  <h1 id="name">Shalaw</h1>
  <p id="bio">Profile Website</p>

  <a href="https://www.instagram.com/ssha14w" target="_blank">Instagram</a>
  <a href="https://www.facebook.com/share/1DgJvTtcC8/" target="_blank">Facebook</a>
  <a href="t.me/Sha14w" target="_blank">Telegram</a>
  <a href="https://discord.gg/NkMtT9gcvv" target="_blank">Discord</a>
</div>

<script src="lang.js"></script>
</body>
</html>





body {
  background:#0f172a;
  font-family:Arial;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
}
.card {
  background:#020617;
  padding:25px;
  border-radius:15px;
  text-align:center;
  width:300px;
}
.avatar {
  width:100px;
  border-radius:50%;
}
a {
  display:block;
  margin:10px;
  padding:10px;
  background:#2563eb;
  color:white;
  text-decoration:none;
  border-radius:8px;
}
.lang button {
  margin:5px;
}




const text = {
  ku:{name:"شاڵاو",bio:"پڕۆفایلی من"},
  en:{name:"Shalaw",bio:"My Profile"},
  ar:{name:"شالاو",bio:"ملفي الشخصي"},
  fa:{name:"شالاو",bio:"پروفایل من"}
};

function setLang(l){
  document.getElementById("name").innerText = text[l].name;
  document.getElementById("bio").innerText = text[l].bio;
}
