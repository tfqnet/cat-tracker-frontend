// Store all cat info locally
const cats = {
  garfield: {
    name: "Garfield",
    photo: "https://tfqnet.github.io/cat-tracker-frontend/images/garfield.png",
    description: "Orange tabby, loves lasagna. Friendly but lazy."
  },
  luna: {
    name: "Luna",
    photo: "https://tfqnet.github.io/cat-tracker-frontend/images/luna.png",
    description: "Grey fur with green eyes. Shy and sweet."
  },
  momo: {
    name: "Momo",
    photo: "images/momo.jpg",
    description: "Black and white fur. Very playful and energetic."
  },
  bella: {
    name: "Bella",
    photo: "images/bella.jpg",
    description: "Calico cat. Loves to cuddle and meow a lot."
  },
  leo: {
    name: "Leo",
    photo: "images/leo.jpg",
    description: "Striped tabby. Adventurous and brave."
  },
  coco: {
    name: "Coco",
    photo: "coco.jpg",
    description: "White fur with brown patches. Very curious."
  },
  milo: {
    name: "Milo",
    photo: "images/milo.jpg",
    description: "Young kitten. Loves chasing things."
  }
};

// Your contact info (shared for all cats)
const contact = {
  whatsapp: "60192166699", // your phone number
  telegram: "tfqnet" // without @
};

// Get catId from URL
const urlParams = new URLSearchParams(window.location.search);
const catId = urlParams.get("catId");

const cat = cats[catId];

if (!cat) {
  document.body.innerHTML = "<h2>🐾 Cat not found.</h2><p>Please check the QR code or URL.</p>";
  throw new Error("Invalid cat ID");
}

// Update HTML elements
document.getElementById("cat-name").textContent = cat.name;
document.getElementById("cat-photo").src = cat.photo;
document.getElementById("cat-description").textContent = cat.description;

// Update message links
const encodedMsg = encodeURIComponent(`Hi, I found your cat named ${cat.name}!`);
document.getElementById("wa-btn").href = `https://wa.me/${contact.whatsapp}?text=${encodedMsg}`;
document.getElementById("tg-btn").href = `https://t.me/${contact.telegram}`;
