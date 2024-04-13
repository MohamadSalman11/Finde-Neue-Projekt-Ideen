const supabaseUrl = "https://fprzvvrjeejtfvruyxux.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwcnp2dnJqZWVqdGZ2cnV5eHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5OTU2NjYsImV4cCI6MjAyNzU3MTY2Nn0._MGwiKGXVAgAiPFEmPFRW5wkpuC7tT30McndcZrnFoA`;
const Supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener("click", (e) => {
  const clickedRatingButton = e.target.closest(".idea-rating");
  if (!clickedRatingButton) return;

  // Das idee  Element
  const ideaElement = clickedRatingButton.closest(".idea");

  // Anzeigeelement für die Bewertungszahl
  const ratingDisplayElement = clickedRatingButton.querySelector("p");

  // Typ der Bewertung (z. B. 'likes', 'fires', 'dislikes')
  const ratingType = clickedRatingButton.dataset.type;

  // Die Idee bewerten
  rateIdeas(ideaElement, ratingType, ratingDisplayElement);
});
