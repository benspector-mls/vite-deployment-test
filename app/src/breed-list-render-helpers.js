import { fetchData } from "./fetch-helpers"

const breedsList = document.querySelector('#breeds-list');

export const renderBreedList = async () => {
  const [breeds, error] = await fetchData('https://dog.ceo/api/breeds/list/all')

  if (error) return;

  breedsList.innerHTML = '';

  Object.keys(breeds.message).forEach((breed) => {
    const li = document.createElement('li');
    li.textContent = breed;
    breedsList.append(li);
  })
}
