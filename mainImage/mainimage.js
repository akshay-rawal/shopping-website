
const images =[
    {src:"../assets/women.jpg",description:"Women's Clothing"},
    {src:"/assets/kids.jpg",description:"kids's Clothing"},
    {src:"/assets/accessrois.jpg",description:"Accessories"},
    {src:"/assets/kids accessories.jpg",description:"Kid's Accesssories"},
    {src:"/assets/mens.jpg",description:"Men's Clothing"},
{src:"/assets/books.jpg",description:"Books.."}

]

const gallery = document.getElementById("imagegallery")
console.log(gallery);
if (gallery) {
    images.forEach(image=>{
        //create image item container
        const imageItem = document.createElement('div')
        imageItem.classList.add('image-item')
     //create image elemen
    const img = document.createElement("img");
    img.src = image.src;  //correctly set the image source
    img.alt = image.description;//set the alt text for accessibility
    img.classList.add("image-img");  //add class to the image
//create the description element
    const dsc = document.createElement("p");
    dsc.textContent = image.description;
    dsc.classList.add("image-description");

    imageItem.appendChild(img);
    imageItem.appendChild(dsc);
    gallery.appendChild(imageItem);
});
}