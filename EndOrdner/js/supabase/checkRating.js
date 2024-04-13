const checkIfAlreadyRated = (ratingType, ideaId) => {
  // Prüft, ob die Idee bereits bewertet wurde
  const isAlreadyRated = ratedIdeas[ratingType].includes(ideaId);

  // Wenn die Idee bereits bewertet wurde, gib 'true' zurück
  if (isAlreadyRated) return true;

  // Fügt die Idee zu den bewerteten Ideen hinzu und aktualisiert localStorage
  ratedIdeas[ratingType].push(ideaId);
  localStorage.setItem("ratedIdeas", JSON.stringify(ratedIdeas));
};
