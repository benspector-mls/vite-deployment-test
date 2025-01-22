import { fetchData } from "./fetch-helpers";

const dialog = document.querySelector('dialog');
const dogBreedTitle = document.querySelector('#dog-breed-title');

export const showDogDetails = async (e) => {
  if (!e.target.matches('li')) return;

  dogBreedTitle.textContent = "Loading";

  const breed = e.target.textContent;
  dialog.querySelector('img').style.display = 'none'
  dialog.showModal()

  const [dogImage, error] = await fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
  if (error) return;

  dialog.querySelector('img').src = dogImage.message;

  setTimeout(() => {
    dialog.querySelector('img').style.display = 'block'
    dogBreedTitle.textContent = breed;
  }, 250);
}


export const hideDogDetails = (e) => {
  dialog.close();
}
