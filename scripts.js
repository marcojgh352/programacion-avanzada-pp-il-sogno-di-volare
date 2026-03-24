const civilAircrafts = [
  "./assets/avion-civil-1.jpg",
  "./assets/avion-civil-2.jpg",
  "./assets/avion-civil-3.jpg",
  "./assets/avion-civil-4.jpg",
  "./assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "./assets/avion-militar-1.jpg",
  "./assets/avion-militar-2.jpg",
  "./assets/avion-militar-3.jpg",
  "./assets/avion-militar-4.jpg",
  "./assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "./assets/helicoptero-civil-1.jpg",
  "./assets/helicoptero-civil-2.jpg",
  "./assets/helicoptero-civil-3.jpg",
  "./assets/helicoptero-civil-4.jpg",
  "./assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "./assets/helicoptero-militar-1.jpg",
  "./assets/helicoptero-militar-2.jpg",
  "./assets/helicoptero-militar-3.jpg",
  "./assets/helicoptero-militar-4.jpg",
  "./assets/helicoptero-militar-5.jpg",
];

//=================//

let randomImg = Math.floor(Math.random() * 5);

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilImages;
    this.militaryImages = militaryImages;
  }

  getRandomCivil() {
    return this.civilImages[randomImg];
  }

  getRandomMilitary() {
    return this.militaryImages[randomImg];
  }

  getAll() {
    let allImg = [...this.civilImages, ...this.militaryImages];
    return allImg;
  }
}

class Painter {
  constructor() {}

  createGallery() {
    this.gallery = document.createElement("section");
    document.body.appendChild(this.gallery);
  }

  createImageTag(imageUrl) {
    let create = `<picture>
                      <img src="${imageUrl}" />
                      </picture>`;

    return create;
  }

  paintSingleImage(imageUrl) {
    this.gallery.innerHTML = this.createImageTag(imageUrl);
  }

  paintMultipleImages(arrayOfImages) {
    this.gallery.innerHTML = ""
    for (const images of arrayOfImages) {
        this.gallery.innerHTML += this.createImageTag(images)
        
    }
    // this.gallery.innerHTML = this.createImageTag(arrayOfImages[0])
    // this.gallery.innerHTML += this.createImageTag(arrayOfImages[1])
    // this.gallery.innerHTML += this.createImageTag(arrayOfImages[2])
    // this.gallery.innerHTML += this.createImageTag(arrayOfImages[3])
    // this.gallery.innerHTML += this.createImageTag(arrayOfImages[4])
    
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();


