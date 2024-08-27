const images = [
  { src: "/assets/front/women.jpg", description: "Women's Clothing" },
  { src: "/assets/front/kids.jpg", description: "kids's Clothing" },
  { src: "/assets/front/accessrois.jpg", description: "Women's Accessories" },
  {
    src: "/assets/front/kids accessories.jpg",
    description: "Kid's Accesssories",
  },
  { src: "/assets/front/mens.jpg", description: "Men's Clothing" },
  { src: "/assets/front/books.jpg", description: "Books.." },
  { src: "/assets/front/mens acc.jpg", description: "Men's Accessories" },
  { src: "/assets/front/mob.jpeg", description: "Mobile accessories" },
  { src: "/assets/front/foot.jpg", description: "Foot Wear" },
];

const gallery = document.getElementById("imagegallery");
console.log(gallery);
if (gallery) {
  images.forEach((image) => {
    //create image item container
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");
    //create image elemen
    const img = document.createElement("img");
    img.src = image.src; //correctly set the image source
    img.alt = image.description; //set the alt text for accessibility
    img.classList.add("image-img"); //add class to the image
    //create the description element
    const dsc = document.createElement("p");
    dsc.textContent = image.description;
    dsc.classList.add("image-description");

    imageItem.appendChild(img);
    imageItem.appendChild(dsc);
    gallery.appendChild(imageItem);
  });
}
