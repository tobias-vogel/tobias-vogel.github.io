function addEventListeners() {
  var hervorhebbares = document.getElementsByClassName("hervorhebbar");
  for (var i = 0; i < hervorhebbares.length; i++) {
    hervorhebbares[i].addEventListener("mouseover", addURIPart);
    hervorhebbares[i].addEventListener("mouseout", removeURIPart);
  }
}

function addURIPart() {
  var link = this.id;
  var linkfarbe = this.style.backgroundColor;

  var unterseite = document.getElementById("unterseite");
  unterseite.innerText = "/" + link;
  unterseite.style.color = linkfarbe;

  unterseite.parentElement.href += "/" + link;
}


function removeURIPart() {
  var unterseite = document.getElementById("unterseite");
  unterseite.innerText = "";

  unterseite.parentElement.href = "http://tobiasvogel.name";
}