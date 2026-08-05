// ============================================================
//  Dark mode toggle - Lesson 5
//  Read this top to bottom. Every line is commented.
//  JavaScript writes comments as // like this. Same idea as
//  HTML's <!-- --> and CSS's /* */. Yet another syntax.
// ============================================================

// 1. Find the button in the page.
//    It looks for id="dark-mode-toggle". If your button doesn't have
//    that exact id, this line finds nothing and the file stops here.
const toggleButton = document.getElementById('dark-mode-toggle');

// 2. Wait for someone to click it, then run the code inside.
toggleButton.addEventListener('click', function () {

  // 3. Put the class "dark" on the page - or take it off if it's
  //    already there. That's what "toggle" means: flip it.
  //    This one class is what switches every dark: style on your page.
  document.documentElement.classList.toggle('dark');

  // 4. Change the button's own label so it always says what it
  //    will do NEXT, not what it just did.
  if (document.documentElement.classList.contains('dark')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
});

// ==========================================
// ONLY ADD YOUR OWN CODE BELOW THIS LINE
// ==========================================
// LIGHTBOX ------------------------------------------------

// 1. Find the popup and every image marked "zoomable".
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const zoomables = document.querySelectorAll('.zoomable');

// 2. For each zoomable image, listen for a click.
zoomables.forEach(function (image) {
  image.style.cursor = 'zoom-in';                // hint that it's clickable
  image.addEventListener('click', function () {
    lightboxImg.src = image.src;                 // copy the clicked image into the popup
    lightbox.classList.remove('hidden');         // show the popup...
    lightbox.classList.add('flex');              // ...and center its contents
  });
});

// 3. Click anywhere on the dark background to close it.
lightbox.addEventListener('click', function () {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
});
// RANDOM DOG ----------------------------------------------

document.getElementById('dog-btn').addEventListener('click', function () {

  // 1. Ask the dog service for a random photo.
  fetch('https://dog.ceo/api/breeds/image/random')

    // 2. When it answers, unpack the response into usable data.
    .then(function (response) { return response.json(); })

    // 3. Now we have the data — put the photo on the page.
    .then(function (data) {
      const dogImg = document.getElementById('dog-img');
      dogImg.src = data.message;          // the photo's web address
      dogImg.classList.remove('hidden');  // reveal it
    });
});
// REMEMBER THE VISITOR ------------------------------------

const greeting = document.getElementById('greeting');

// 1. When the page loads, check the notebook for a saved name.
const savedName = localStorage.getItem('visitorName');
if (savedName) {
  greeting.textContent = 'Welcome back, ' + savedName + '! 👋';
}

// 2. When they click Save, write their name into the notebook.
document.getElementById('name-save').addEventListener('click', function () {
  const name = document.getElementById('name-input').value;
  localStorage.setItem('visitorName', name);          // save it
  greeting.textContent = 'Welcome back, ' + name + '! 👋';
});