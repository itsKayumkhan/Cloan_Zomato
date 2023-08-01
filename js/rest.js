const restaurants = [
  {
    name: "Camiano Patisserie & Brasserie",
    price: "₹1,100 for two",
    img: "https://b.zmtcdn.com/data/pictures/5/20582675/c7bb7cdb020258147727ad688471f9ab_featured_v2.jpg",
    description: "Coffee, Bakery, Pizza, Sandwich, Italian, Healthy Food, Fast Food, Beverages",
    rating: 4.5,
  },
  {
    name: "RJ 14",
    price: "₹1,600 for two",
    img: "https://b.zmtcdn.com/data/pictures/2/103172/804531a169992241a41aa8931f1cbabf_featured_v2.jpg",
    description: "North Indian, South Indian, Street Food, Rolls, Desserts, Drinks Only",
    rating: 4.3,
  },
  {
    name: "Rosado",
    price: "₹3,000 for two",
    img: "https://b.zmtcdn.com/data/pictures/9/20417119/d16a3ea50b117fee0383119fd3901d5e_featured_v2.jpg",
    description: "North Indian, Mughlai, Chinese, Continental, Korean, Asian, Beverages",
    rating: 4.3,
  },
  {
    name: "Aurum - Hilton Jaipur",
    price: "₹2,800 for two",
    img: "https://b.zmtcdn.com/data/pictures/6/102116/6dd31b65bc4e3d15ef782487a0b82c3a_featured_v2.jpg",
    description: "North Indian, Italian, Asian, Chinese, Continental, Fast Food, Desserts, Beverages",
    rating: 4.0,
  },
  {
    name: "Cafe Auberge",
    price: "₹850 for two",
    img: "https://b.zmtcdn.com/data/pictures/2/20189372/8162046a0047496ca55c5261315a5445_featured_v2.jpg",
    description: "Cafe, Pasta, Pizza, Italian, Chinese, North Indian, Fast Food, Beverages",
    rating: 4.5,
  },
  {
    name: "Diona",
    price: "₹1,800 for two",
    img: "https://b.zmtcdn.com/data/pictures/7/20273787/fa3c4f0ecc62207d414856f6430a5db4_featured_v2.jpg",
    description: "North Indian, Continental, Asian, Pizza, Fast Food, Bar Food, Desserts",
    rating: 4.2,
  },
  {
    name: "Nosh 24*7",
    price: "₹750 for two",
    img: "https://b.zmtcdn.com/data/pictures/1/20678931/76751af363ff40883207d5e37ce76697_featured_v2.jpg",
    description: "Cafe, Coffee, Sandwich, Wraps, Pizza, Pasta, Salad, Desserts",
    rating: 4.0,
  },
  {
    name: "Chaandi - Hilton Jaipur",
    price: "₹3,500 for two",
    img: "https://b.zmtcdn.com/data/pictures/7/102117/38cadf78c92d916ca27875deef9ef61c_featured_v2.jpg",
    description: "North Indian, Mughlai, Rajasthani, Desserts, Beverages",
    rating: 4.3,
  },
  {
    name: "Chao Chinese Bistro - Holiday Inn Jaip",
    price: "₹3,000 for two",
    img: "https://b.zmtcdn.com/data/pictures/6/102216/60806a3d422d48c43a0c0141bd1201f1_featured_v2.jpg",
    description: "Chinese, Asian, Thai, Finger Food",
    rating: 4.2,
  },
  {
    
    name: "Beans & Bun By Hotel Anuraag Villa",
    price: "₹500 for two",
    img: "https://b.zmtcdn.com/data/pictures/chains/6/20633146/ab2eedf5490cbf0e20f6cb6c1c86ff04_featured_v2.jpg",
    description: "Cafe, Coffee, Shake, Beverages, Pizza, Burger, Sandwich, Desserts",
    rating: 4.0,
  },
  {
    
    name: "Thali And More",
    price: "₹1,200 for two",
    img: "https://b.zmtcdn.com/data/pictures/6/20524926/dd6e3104edcba391b527781089d9c8c7_featured_v2.jpg",
    description: "North Indian, Chinese, Fast Food, Street Food, Biryani, Shake, Desserts, Beverages",
    rating: 4.4,
  },
  {
    
    name: "Mad Pops",
    price: "₹1,800 for two",
    img: "https://b.zmtcdn.com/data/pictures/4/19609934/a15fa1410d6357674e3b87061748d349_featured_v2.jpg",
    description: "Continental, Oriental, North Indian, Chinese, Italian, Biryani, Desserts, Beverages",
    rating: 4.4,
  },
  {
    
    name: "Aurum - Hilton Jaipur",
    price: "₹2,800 for two",
    img: "https://b.zmtcdn.com/data/pictures/6/102116/6dd31b65bc4e3d15ef782487a0b82c3a_featured_v2.jpg",
    description: "North Indian, Italian, Asian, Chinese, Continental, Fast Food, Desserts, Beverages",
    rating: 4.0,
  },
  {
    
    name: "Cafe Auberge",
    price: "₹850 for two",
    img: "https://b.zmtcdn.com/data/pictures/2/20189372/8162046a0047496ca55c5261315a5445_featured_v2.jpg",
    description: "Cafe, Pasta, Pizza, Italian, Chinese, North Indian, Fast Food, Beverages",
    rating: 4.5,
  },
  {
    
    name: "Diona",
    price: "₹1,800 for two",
    img: "https://b.zmtcdn.com/data/pictures/7/20273787/fa3c4f0ecc62207d414856f6430a5db4_featured_v2.jpg",
    description: "North Indian, Continental, Asian, Pizza, Fast Food, Bar Food, Desserts",
    rating: 4.2,
  },
];


const Cards = () => {
  const foodCard = document.getElementById("food-card");
  foodCard.innerHTML = "";
  restaurants.map((item, i) => {
    const card = document.createElement("div");
    card.classList.add("order");
    card.setAttribute("id", i);
    card.value = item.category;

    card.innerHTML = `
          <div class="img-box">
            <img src="${item.img}" alt="" />
          </div>
          <div class="text">
            <div class="card-left">
              <h4 class="head">${item.name}</h4>
              <h6 class="description">
                ${item.description}
              </h6>
            </div>
            <div class="card-right">
              <div class="card-rating">
                <div class="no">${item.rating}</div>
                <div class="icon">
                  <ion-icon name="star-outline"></ion-icon>
                </div>
              </div>
              <div class="price">
                <p>${item.price} for one</p>
              </div>
            </div>
          </div>
        `;
    foodCard.appendChild(card);
  });
};
const rat = document.querySelector(".rating");
let check = true;
const ratingUpdate = () =>
{
  const foodCard = document.getElementById("food-card");
  foodCard.innerHTML = " ";
  const high = restaurants.filter((item) => item.rating >= 4)
  high.map((item) => {
    const card = document.createElement("div");
    card.classList.add("order");
    card.setAttribute("id", item.id);
    card.value = item.category;

    card.innerHTML = `
        <div class="img-box">
          <img src="${item.img}" alt="" />
        </div>
        <div class="text">
          <div class="card-left">
            <h4 class="head">${item.name}</h4>
            <h6 class="description">
              ${item.description}
            </h6>
          </div>
          <div class="card-right">
            <div class="card-rating">
              <div class="no">${item.rating}</div>
              <div class="icon">
                <ion-icon name="star-outline"></ion-icon>
              </div>
            </div>
            <div class="price">
              <p>₹${item.price} for one</p>
            </div>
          </div>
        </div>
      `;
    foodCard.appendChild(card);
   
  
  });
}
rat.addEventListener('click',() =>{
  check = !check;

  rat.classList.toggle("check");
  check?Cards():ratingUpdate();
  

})
Cards();
