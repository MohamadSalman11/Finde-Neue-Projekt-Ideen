// Rufe alle Ideen aus der Datenbank ab
const getIdeas = async (level) => {
  // Filtern nach Level, sonst alle Ideen wählen
  const operation = level
    ? Supabase.from("Ideas").select().eq("level", level).order("likes", { ascending: true })
    : Supabase.from("Ideas").select().order("likes", { ascending: true });

  // Anzeigen des Lade-Popups
  loadingPopup.classList.remove("hide-popup");

  // Entferne die Nachricht, die angezeigt wird, wenn keine Ideen vorhanden sind
  noIdeasMessage.classList.remove("show-element");

  // Anzeigen das icon
  ideasCount.textContent = "";
  dotsIcon.classList.remove("hide-element");

  // Führe die Operation aus, um Daten aus der Datenbank abzurufen
  const { data, error } = await operation;

  // Fehlerbehandlung
  if (error) return alert("💥 Fehler beim Laden der Daten. Bitte versuche es erneut. 🔄");

  // Entfernt vorhandene Einträge, um Duplikate zu vermeiden
  ideasListElement.innerHTML = "";

  // Gehe durch alle Ideen und erstelle HTML für jede Idee, wenn kein Fehler auftritts
  data.forEach((idea) => createHtml(idea));

  setTimeout(() => {
    // Blende das Lade-Popup nach einer kurzen Verzögerung aus
    loadingPopup.classList.add("hide-popup");

    // Verstecken das icon
    dotsIcon.classList.add("hide-element");

    // Aktualisiert die Anzahl der Ideen basierend auf der Länge der Daten
    ideasCount.textContent = data.length;

    // Wenn keine Ideen vorhanden sind, zeige eine Nachricht
    if (data.length == 0) noIdeasMessage.classList.add("show-element");
  }, 500);
};

// Lade die Ideen, sobald die Seite geladen ist
getIdeas();
