# Infinite Scroll with Unsplash API

## For Contributions

To use Unsplash API, you need to create an account [Unsplash API documentation](https://unsplash.com/documentation).

Then click on my apps in the navbar and then new application to get your access key.

### How I built the logic for this project

1. Target the imageContainer and loader.

2. Create a variable for your api key, api url and any other parameter you would like to pass to limit/filter your result (e.g. count).

3. Create a function to fetch the photos and set the result to a new array photoArray.

4. Create a function (displayPhotos) that loops through the photos array, for each photo, create a link to the image on unsplash, the image and a title.

5. To calculate the number of photos we want to load at a time, we create an imageLoaded function. An event listener onloaded is added on each image to when we load the number of images we want, the imageLoaded function tracks the number and fetch according to the amount of imgs we want till we reach the total Images (max) which is the length of images array we created (photosArray).

6. A scroll event is added to the window to get more photos when we scroll to about 1000px to the bottom of te page.
