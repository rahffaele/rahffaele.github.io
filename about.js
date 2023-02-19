    // Define an array of image URLs and link URLs
    const imageUrls = [
      "../archive_assets/orto padova.png",
      "../archive_assets/cmik.png",
      "../archive_assets/Overview.png"
    ];

    const linkUrls = [
      "https://www.google.com/",
      "https://www.w3schools.com/",
      "hhttps://www.linkedin.com/feed/"
    ];

    // Define the fading time (in milliseconds)
    const fadeTime = 2000;

    // Create an empty array to hold the image elements
    const images = [];

    // Load the images
    for (let i = 0; i < imageUrls.length; i++) {
      const image = new Image();
      image.src = imageUrls[i];
      images.push(image);
    }

    // Listen for mouse movement
    document.addEventListener("mousemove", (event) => {
      // Create a new image element
      if (event.clientY > 60) {
        const image = images[Math.floor(Math.random() * images.length)];
      const newImage = document.createElement("img");
      newImage.src = image.src;
      newImage.style.left = event.clientX + "px";
      newImage.style.top = event.clientY + "px";

      // Add the image to the page
      document.body.appendChild(newImage);

      // Fade the image out after a delay
      setTimeout(() => {
        newImage.style.opacity = 0;
        setTimeout(() => {
          document.body.removeChild(newImage);
        }, fadeTime);
      }, fadeTime);

      // Add a click listener to the image
      const linkUrl = linkUrls[images.indexOf(image)];
      newImage.addEventListener("click", () => {
        window.open(linkUrl, "_blank");
      });
      }
    });

    if (/Mobi/.test(navigator.userAgent)) {
  // Mobile device detected
  // Add the code to handle gyroscope data here
  window.addEventListener('deviceorientation', handleOrientation);

  function handleOrientation(event) {
    // Get the rotation around the x, y, and z axes
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    // Do something with the data
  }

  // Add the code to draw the trail using the set of given images here
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // Load the set of given images using the Image constructor
  const images = [];
  const imageURLs = ['../archive_assets/orto padova.png', '../archive_assets/cmik.png', '../archive_assets/Overview.png.png'];
  let loadedImages = 0;

  imageURLs.forEach((url, index) => {
    const image = new Image();
    image.src = url;
    image.onload = () => {
      loadedImages++;
      if (loadedImages === imageURLs.length) {
        // All images are loaded
      }
    };
    images[index] = image;
  });

  let posX = canvas.width / 2;
  let posY = canvas.height / 2;
  let trail = [];

  function draw(timestamp) {
    // Calculate the new position based on the gyroscope data
    posX += gamma / 10;
    posY += beta / 10;

    // Add the current position to the trail array
    trail.push({x: posX, y: posY, opacity: 1});

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the trail using the set of given images
    trail.forEach((point, index) => {
      if (point.opacity > 0) {
        ctx.globalAlpha = point.opacity;
        const image = images[index % images.length];
        ctx.drawImage(image, point.x - image.width / 2, point.y - image.height / 2);
        point.opacity -= 0.02;
      }
    });

    // Remove the oldest point from the trail
    if (trail.length > images.length) {
      trail.shift();
    }

    // Request the next frame
    requestAnimationFrame(draw);
  }

  // Start drawing
  requestAnimationFrame(draw);
} else {
  // Not a mobile device
  // Do something else or just exit
}
