const imageContainer = document.getElementById(
  "image-container"
)! as HTMLElement;
const loader = document.getElementById("loader")! as HTMLElement;

// ----------------------
let ready: boolean = false;
let imagesLoaded: number = 0;
let totalImages: number = 0;
let photosArray: {}[] = [];

// ------------
type Attributes = {
  [key: string]: string;
};
// Set attribute function
const setAttributes = (elem: any, attr: Attributes) => {
  for (const key in attr) {
    elem.setAttribute(key, attr[key]);
  }
};

// variables for fetching data
let count: number = 5;
let apiKey: string = "atZlCWXnhMOyzUOltcZZAcFy1Spt5yloxIKg5XywCRo";
let apiURL: string = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if all images were loaded
const imageLoaded = () => {
  imagesLoaded++;

  if (imagesLoaded === totalImages) {
    ready = true;
    // hide loader when images are completely loaded
    loader.hidden = true;

    count = 30;

    apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  }
};

// create elements for DOM
const displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  // --------------------------------------
  photosArray.forEach((photo: any) => {
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

    //when laoding is completed
    img.addEventListener("load", imageLoaded);

    // put both in image container
    link.appendChild(img);
    imageContainer.appendChild(link);
  });
};

// fetch photos
const getPhotos = async () => {
  try {
    const res = await fetch(apiURL);
    photosArray = await res?.json();
    displayPhotos();
  } catch (err) {
    alert("oops, please try again. " + err);
  }
};

// Load more photos when close to the end of the page
//  innerHeight - height of the browser window (vh)
//  window.scrollY - how far we have scrolled
// document.body.offsetHeight - total height of what is on the page

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
