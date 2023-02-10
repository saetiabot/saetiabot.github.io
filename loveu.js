var count = 1;
const img = document.getElementById("iloveu-img");
const updatePhoto = () => {
  img.src = "files/" + (count % 15) + ".png";
  count++;
}

setInterval(updatePhoto, 250);  // Hello
