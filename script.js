function addEventListeners() {
  var hervorhebbares = document.getElementsByClassName("hervorhebbar");
  for (var i = 0; i < hervorhebbares.length; i++) {
    // Event-Listener anhängen
    hervorhebbares[i].addEventListener("mouseover", mouseOverLinkAction);
    hervorhebbares[i].addEventListener("mouseout", mouseOutLinkAction);
  }
}

function mouseOverLinkAction() {
  var link = this.id;

  // Bild austauschen
  var schwarzweissbild = document.getElementById(link + "-icon-bw");
  schwarzweissbild.style.display = "none";
  var farbbild = document.getElementById(link + "-icon");
  farbbild.style.display = "inline";


  // Adresse ergänzen
  //var linkfarbe = this.style.backgroundColor;

  var unterseite = document.getElementById("unterseite");
  unterseite.textContent = "/" + link;
  //unterseite.style.color = linkfarbe;

  unterseite.parentElement.href += link;
}

function mouseOutLinkAction() {
  var link = this.id;

  // Bild austauschen
  var schwarzweissbild = document.getElementById(link + "-icon-bw");
  schwarzweissbild.style.display = "inline";
  var farbbild = document.getElementById(link + "-icon");
  farbbild.style.display = "none";


  // Adresse zurücksetzen
  var unterseite = document.getElementById("unterseite");
  unterseite.textContent = "";

  unterseite.parentElement.href = "http://tobiasvogel.name/";
}
