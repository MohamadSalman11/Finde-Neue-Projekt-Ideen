const ratedIdeas = JSON.parse(localStorage.getItem("ratedIdeas")) || { likes: [], fires: [], dislikes: [] };

// Aktualisiert die Bewertung einer Idee und speichert sie in der Datenbank
const rateIdeas = async (ideaElement, ratingType, ratingDisplayElement) => {
  // Idee-ID abrufen
  const ideaId = ideaElement.dataset.id;

  // Überprüft, ob der Benutzer bereits die Idee bewertet hat
  if (checkIfAlreadyRated(ratingType, ideaId)) return alert("😎 Diese Idee hast du bereits bewertet 📣");

  // Neue Bewertungszahl berechnen
  const newRating = +ratingDisplayElement.innerHTML + 1;

  // Bewertungszahl im Anzeigeelement aktualisieren
  ratingDisplayElement.innerHTML = newRating;

  // Bewertung in der Datenbank aktualisieren
  const { error } = await Supabase.from("Ideas")
    .update({ [ratingType]: newRating })
    .eq("id", ideaId);

  // Fehlerbehandlung
  if (error) alert("💥 Fehler beim Bewerten. Bitte versuche es erneut 🔄");
};
