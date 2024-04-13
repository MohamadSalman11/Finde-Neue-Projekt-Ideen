/** Diese HTML-Elemente sind in allen JavaScript-Dateien verfügbar  🌐 **/

// Das Element, das angezeigt wird, wenn keine Ideen vorhanden sind
const noIdeasMessage = document.querySelector(".no-idea-message");

// Das Lade-Popup-HTML-Element
const loadingPopup = document.querySelector(".loading-popup");

// Die Post-Formular-HTML-Elemente
const postForm = document.querySelector(".post-form");
const postButton = document.querySelector(".post-button");
const postCloseButton = document.querySelector(".icon--close-ctn");
const postPopup = document.querySelector(".post-popup");
const titleInput = document.querySelector(".title-input");
const descriptionInput = document.querySelector(".description-input");
const levelSelect = document.querySelector(".post--form-select");
const ideasCount = document.querySelector(".ideas-count");
const dotsIcon = document.querySelector(".dots-icon");
const levelSelectElement = document.querySelector(".post--form-select");

// Das Ideenliste-HTML-Element
const ideasListElement = document.querySelector(".ideas-list");

// Die Filter HTML-buttons
const beginnerButton = document.querySelector(".button--filter-beginner");
const intermediateButton = document.querySelector(".button--filter-intermediate");
const expertButton = document.querySelector(".button--filter-expert");
const allButton = document.querySelector(".button--filter-all");
