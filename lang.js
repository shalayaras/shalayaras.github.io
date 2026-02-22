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
