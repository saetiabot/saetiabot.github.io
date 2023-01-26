document.addEventListener('click', (e) => {
  var target = e.target;
  if (target.tagName && target.tagName.toLowerCase() == "button") {
    if (target.id === "no-btn") {
      location.href = '/bruh.html';
    } else {
      location.href = '/idkyet.html'
    }
  }
});