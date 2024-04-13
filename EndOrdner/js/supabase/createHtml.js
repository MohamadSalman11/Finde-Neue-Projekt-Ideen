const createHtml = (idea) => {
  // Extrahiere die relevanten Informationen aus der Idee
  const { title, description, level, likes, fires, dislikes, id } = idea;

  // Erstelle das HTML für die Idee
  const html = `
    <article class="idea ${level}-border" data-id="${id}">
      <h2 class="idea-title">${title}</h2>
      <p class="idea-description">${description}</p>
      <div class="idea-ratings">
        <div class="idea-rating" data-type="likes">
          <span>👍</span>
          <p>${likes}</p>
        </div>
        <div class="idea-rating"  data-type="fires">
          <span>🔥</span>
          <p>${fires}</p>
        </div>
        <div class="idea-rating"  data-type="dislikes">
          <span>👎</span>
          <p>${dislikes}</p>
        </div>
      </div>
    </article>`;

  // Füge das HTML in die Liste ein
  ideasListElement.insertAdjacentHTML("afterbegin", html);
};
