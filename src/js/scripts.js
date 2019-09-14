function cleanupNonJSElements(){
  document.querySelectorAll('a').forEach(function(t){
    var h = t.getAttribute('href');
    if(h && h.substr(0,1) === "#"){
      var r = t.getAttribute('href').replace("#", '').replace("#dark-mode", '').replace("#light-mode", '');
       t.addEventListener("click", function(){scrollTo(r);}); t.removeAttribute('href');
    } 
  })
  document.getElementById("menuItems").addEventListener("click", function(){document.getElementById("menuTrigger").checked = false});
   document.getElementById("themeChangeTrigger").addEventListener("click", function(t){setDark()})
}


function scrollTo(e, t) {
  var n = 20,
      o = e ? document.getElementById(e) ? document.getElementById(e) : e : null,
      i = window.scrollY ? window.scrollY : 0;
  animate_(document.scrollingElement || document.documentElement, "scrollTop", "", i, o.offsetTop - n, 750, !0)
  return false;
}
function animate_(e, t, n, o, i, a, l) {
  if (e) {
      var s = (new Date).getTime(), x=0,
          c = setInterval(function () {
              var r = Math.min(1, ((new Date).getTime() - s) / (a-(x*2)));x++;
              l ? e[t] = o + r * (i - o) + n : e.style[t] = o + r * (i - o) + n, 1 === r && clearInterval(c) 
          }, 1);
      l ? e[t] = o + n : e.style[t] = o + n
  }
}


//DOC LOAD

cleanupNonJSElements();




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