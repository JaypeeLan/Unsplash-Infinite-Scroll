const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// Set attribute function
const setAttributes = (elem, attr) => {
  for (const key in attr) {
    elem.setAttribute(key, attr[key]);
  }
};

// ----------------------
let photosArray = [];

// -------
const count = 10;
let apiKey = "atZlCWXnhMOyzUOltcZZAcFy1Spt5yloxIKg5XywCRo";

const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// create elements for DOM
const displayPhotos = () => {
  photosArray.forEach((photo) => {
    // create link to the photo unsplash photo
    const link = document.createElement("a");

    setAttributes(link, {
      href: photo.links.html,
      target: "_blank",
    });

    // create img
    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // put both in image container
    link.appendChild(img);
    imageContainer.appendChild(link);
  });
};

// Get photos
const getPhotos = async () => {
  try {
    const res = await fetch(apiURL);
    photosArray = await res.json();
    displayPhotos();
  } catch (err) {}
};

// Load more photos when close to the end of the page
window.addEventListener("scroll", () => {
  console.log("scrolled");
});

getPhotos();
