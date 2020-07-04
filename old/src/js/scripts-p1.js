var pseudoRestfulGet = String(window.location.href).split("#");
if(pseudoRestfulGet[pseudoRestfulGet.length-1]){
var p = pseudoRestfulGet[pseudoRestfulGet.length-1].replace("#", "");
console.log(p)
switch(p){
  case 'dark-mode':
    setDark();
    break;
  default:
    scrollTo(p);
}

}


document.querySelectorAll(".logoLink").forEach(function(t){
  var c = theme == 1 ? "#dark-mode" : "#light-mode";
  t.removeAttribute('href');
  t.addEventListener("click", function(){window.location="/" + c;})
})

document.getElementById("themeChangeTrigger").addEventListener("click", function(){setDark()})


var theme;
function setDark(){
  theme = theme == 1 ? 0 : 1;
  document.getElementById("themeChangeTrigger").checked = theme == 1 ? true : false;
  document.querySelectorAll("a").forEach(function(t){
    var c = theme == 1 ? "dark-mode" : "light-mode";
    var h = t.getAttribute("href");
    h = h ? h.substr(0,1): "";
    if(h=='/'){t.setAttribute("href", t.getAttribute("href").replace("#dark-mode", '').replace("#light-mode", '') + "#" + c);}
  })
  
}