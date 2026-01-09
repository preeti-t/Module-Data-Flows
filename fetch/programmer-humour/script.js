const button = document.getElementById("loadComic");
const comicImg = document.getElementById("comicImg");

// Function that makes the API call
async function getLatestComic() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");

    // Error handling for bad response
    if (!response.ok) {
      throw new Error("Failed to fetch comic");
    }

    const data = await response.json();

    // Log received data to console
    console.log(data);

    // Render the image into the DOM
    comicImg.src = data.img;
    comicImg.alt = data.alt;

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong while loading the comic.");
  }
}

// Button click event
button.addEventListener("click", getLatestComic);
