
const OPENWEATHER_KEY = 'YOUR_OPENWEATHER_KEY';
const UNSPLASH_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';

/* ELEMENTS*/
const photoEl = document.getElementById('photo');
const thumbsEl = document.getElementById('thumbs');
const conditionsEl = document.getElementById('conditions');
const creditUserEl = document.getElementById('credit-user');
const searchForm = document.getElementById('search');
const searchInput = document.getElementById('search-tf');

/* FETCH WEATHER */ 
async function fetchWeather(city = 'London') {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    const description = data.weather[0].description;

    // Display weather description
    conditionsEl.textContent = `${city}: ${description}`;

    // Fetch Unsplash images based on weather description
    fetchImages(description);
  } catch (err) {
    conditionsEl.textContent = 'Error fetching weather';
    console.error(err);
  }
}

/* FETCH UNSPLASH IMAGES */
async function fetchImages(query) {
  try {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_KEY}&per_page=10`;
    const response = await fetch(url);
    const data = await response.json();

    renderImages(data.results);
  } catch (err) {
    console.error('Error fetching images:', err);
  }
}

/* RENDER IMAGES */
function renderImages(images) {
  if (!images.length) {
    photoEl.innerHTML = '<p>No images found</p>';
    thumbsEl.innerHTML = '';
    creditUserEl.textContent = '';
    return;
  }

  // Clear previous content
  photoEl.innerHTML = '';
  thumbsEl.innerHTML = '';

  // Set main image (first image)
  setMainImage(images[0]);

  // Create thumbnails
  images.forEach(image => {
    const thumb = document.createElement('img');
    thumb.src = image.urls.thumb;
    thumb.alt = image.alt_description || '';
    thumb.classList.add('thumb');

    thumb.addEventListener('click', () => {
      setMainImage(image);
    });

    thumbsEl.appendChild(thumb);
  });
}

/* SET MAIN IMAGE */
function setMainImage(image) {
  photoEl.innerHTML = `<img src="${image.urls.regular}" alt="${image.alt_description || ''}">`;
  creditUserEl.textContent = image.user.name;
  creditUserEl.href = image.user.links.html;
  creditUserEl.target = '_blank';
}

/*HANDLE CITY SEARCH */
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

/* INITIAL LOAD */ 
fetchWeather('London');
