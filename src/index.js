document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    // Загружаем изображения собак
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const imgContainer = document.getElementById("dog-image-container");
        data.message.forEach((imgSrc) => {
          const img = document.createElement("img");
          img.src = imgSrc;
          img.style.width = "200px"; // Настраиваем размер изображений
          imgContainer.appendChild(img);
        });
      });
  
    // Загружаем список пород
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breedsList = document.getElementById("dog-breeds");
        const breeds = Object.keys(data.message);
  
        breeds.forEach((breed) => {
          const li = document.createElement("li");
          li.innerText = breed;
          li.style.cursor = "pointer";
  
          // Изменение цвета при клике
          li.addEventListener("click", () => {
            li.style.color = li.style.color === "firebrick" ? "black" : "firebrick";
          });
  
          breedsList.appendChild(li);
        });
  
        // Добавляем фильтр по первой букве породы
        const breedDropdown = document.getElementById("breed-dropdown");
        breedDropdown.addEventListener("change", (event) => {
          const selectedLetter = event.target.value;
          breedsList.innerHTML = ""; // Очищаем список
  
          breeds
            .filter((breed) => breed.startsWith(selectedLetter))
            .forEach((breed) => {
              const li = document.createElement("li");
              li.innerText = breed;
              li.style.cursor = "pointer";
  
              li.addEventListener("click", () => {
                li.style.color = li.style.color === "firebrick" ? "black" : "firebrick";
              });
  
              breedsList.appendChild(li);
            });
        });
      });
  });
