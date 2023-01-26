const validatePassword = (event) => {
  var v = document.getElementById("password").value;
  if (v === "iLoveC@!") {
    location.href = '/bemine.html';
  } else if (v === "" ) {
    alert("uhhhhh... u didn't input anything -.-\n(pls try again...)");
  } else {
    alert("HEEYYYY!ヽ(ಠ_ಠ)ノ\(!!˚☐˚)/\n u inputed the wrong password -.-\npls try again (╯°□°）╯︵ ┻━┻");
  }
}

const changeImg = () => {
  var i = document.getElementById("crappy-slideshow");
  i.src = t % 1400; 
}
