// Post-Popup anzeigen, wenn auf Post-Button geklickt wird
postButton.addEventListener("click", () => {
  postPopup.classList.add("show-popup");
  resetPostForm();
});

// Post-Popup ausblenden, wenn auf Schließen-Button geklickt wird
postCloseButton.addEventListener("click", () => {
  postPopup.classList.remove("show-popup");
});
