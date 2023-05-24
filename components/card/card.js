const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard() {
  const card = document.createElement("li");
  card.innerHTML = `
    <div class="card__image-container">
      <img
        class="card__image"
        src="${imageUrl}"
        alt="${characterName}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${characterName}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${characterStatus}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${characterType}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${characterOccurrences}</dd>
      </dl>
    </div>`;
  card.classList.add("card");
  cardContainer.append(card);
  return card;
}
