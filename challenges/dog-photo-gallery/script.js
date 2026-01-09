const loadDogBtn = document.getElementById("loadDog");
const clearDogBtn = document.getElementById("clearDogs");
const dogList = document.getElementById("dogList");

async function getRandomDog() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    appendDogImage(data.message);
  } catch (error) {
    console.error("Error fetching dog:", error);
    alert("Failed to load dog image. Try again!");
  }
}

function appendDogImage(imageUrl) {
  const li = document.createElement("li");
  const img = document.createElement("img");

  img.src = imageUrl;
  img.alt = "Random Dog";

  li.appendChild(img);
  dogList.appendChild(li);
}

loadDogBtn.addEventListener("click", getRandomDog);

clearDogBtn.addEventListener("click", function () {
  dogList.innerHTML = "";
});
