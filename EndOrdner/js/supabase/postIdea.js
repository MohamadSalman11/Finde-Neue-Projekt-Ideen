// Hinzufügen einer Idee in die Datenbank
const postIdea = async (title, description, level) => {
  // Entfernen des Popup-Fensters für das Posten einer Idee
  postPopup.classList.remove("show-popup");

  // Anzeigen des Lade-Popups
  loadingPopup.classList.remove("hide-popup");

  // Einfügen der Idee in die Datenbank
  const { error } = await Supabase.from("Ideas").insert({ title, description, level });

  // Fehlerbehandlung
  if (error) {
    alert("💥 Fehler beim Posten der Idee. Bitte versuche es erneut. 🔄");
    loadingPopup.classList.add("hide-popup");
    return;
  }

  // Aktualisieren der Ideenliste nach dem Posten
  getIdeas();
};

// Event-Listener für das Posten
postForm.addEventListener("submit", (e) => {
  // Verhindere das Neuladen der Webseite, wenn eine Idee gepostet wird
  e.preventDefault();

  // Erstellen einer Idee in der Datenbank basierend auf den Formularwerten
  postIdea(titleInput.value, descriptionInput.value, levelSelect.value);
});
