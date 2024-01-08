const btn = document.getElementById("btn");
btn.addEventListener("click", creerIdMobile);
/* fonction pour verifier qu' une chaine ch est composée seulement de chiffres*/
function chif(ch) {
  for (let i = 0; i < ch.length; i++) {
    if (ch[i] < "0"|| ch[i] > "9") {
      return false;
    }
  }
  return true;
}
/* fonction pour verifier qu' une chaine ch est une aadresse email valide*/
function validMail(ch) {
  
  test=true;
  if(ch.length==0)
      { test=false;}
      let pa=ch.indexOf("@")
      let pp=ch.lastIndexOf(".") 
  if(pp==-1||pa==-1|| pp<pa) 
      { test=false;}
      let ch1 = ch.substring(0, pa);
      let ch2 = ch.substring(pa+1, pp);
      let ch3 = ch.substring(pp+1);
  if (ch1.length == 0 || ch2.length == 0 || ch3.length == 0) 
      { test=false; }
return test;
}

/* fonction principale*/
function creerIdMobile() {
  const cin = document.getElementById("cin").value;
  const num = document.getElementById("num").value;
  const adr = document.getElementById("adr").value;
  let zone = document.getElementById("zone");
  //l'appel de la fonction validDate()
  if(!validData(cin,num,adr)){
    alert("veuillez verifier vos données!");
    return false;
  }
 //l'appel de la fonction genrerIdMobile()
  let id = genrerIdMobile(cin, num, adr);
  zone.innerHTML = "Votre ID Mobile: " + id;

}
//fonction pour verifier et controler les champs:
function validData(c,n,a) {
  if (c.length != 8 || n.length != 8 || !chif(c) || !chif(n)||!validMail(a)){
    return false;
  } 

  else{
    return true; 
  }
    
}

// fonction pour génerer l IDmobile :
function genrerIdMobile(c, n, a) {
  if(c.length==0||n.length==0||a.length==0) { return false; }
  let ch1 = n.substring(0, 2);
  let ch2 = c.substring(c.length - 4);
  let pa = a.indexOf("@");
  let ch3 = a.substring(pa - 2, pa).toUpperCase();
  return ch1 + ch2 + ch3;
}