import { renderBreedList } from "./breed-list-render-helpers";

import { showDogDetails, hideDogDetails } from "./modal-render-helpers"

const main = () => {
  renderBreedList();

  const closeModalBtn = document.querySelector('#close-modal-btn');
  const breedList = document.querySelector('ul#breeds-list');

  closeModalBtn.addEventListener('click', hideDogDetails);
  breedList.addEventListener('click', showDogDetails)
}

main();