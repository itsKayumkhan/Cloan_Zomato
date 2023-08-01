const cardData = [
  {
    id: 1,
    name: "Pizza",
    category: "Fast Food",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/18923280/5bc1ed37a36e8cf5a3a1d323466bd083_o2_featured_v2.jpg",
    description: "Delicious pizza with various toppings.",
    rating: 4.5,
    price: 699,
  },
  {
    id: 2,
    name: "Burger",
    category: "Fast Food",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/8/20455888/bd76bd71d10e0503cf53d8f5a1183a18_o2_featured_v2.jpg?output-format=webp",
    description: "Classic beef burger with cheese and veggies.",
    rating: 4.2,
    price: 449,
  },
  {
    id: 3,
    name: "Sushi",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/painting-sushi-plate-with-picture-fish-it_188544-12221.jpg?size=626&ext=jpg",
    description: "Fresh and tasty sushi rolls.",
    rating: 4.7,
    price: 1299,
  },
  {
    id: 4,
    name: "Pasta",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/rigatoni-pasta-with-chicken-meat-eggplant-tomato-sauce-bowl_2829-10978.jpg?size=626&ext=jpg",
    description: "Traditional Italian pasta with a rich tomato sauce.",
    rating: 4.4,
    price: 799,
  },
  {
    id: 5,
    name: "Steak",
    category: "Full Diet",
    image:
      "https://img.freepik.com/free-photo/well-done-piece-steak-wooden-board_140725-7478.jpg?size=626&ext=jpg",
    description: "Juicy and tender steak cooked to perfection.",
    rating: 4.8,
    price: 1999,
  },
  {
    id: 6,
    name: "Tacos",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/freshly-grilled-beef-taco-with-guacamole-cilantro-generated-by-ai_188544-39278.jpg?w=900&t=st=1689435872~exp=1689436472~hmac=289580614cca20b999c0f2b04bc8b7a6c7f2839b34bab012441f809a62947ec7",
    description: "Mexican tacos with flavorful meat and toppings.",
    rating: 3.8,
    price: 749,
  },
  {
    id: 7,
    name: "Sushi Burrito",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/side-view-sushi-roll-with-crab-tuna-plate-with-ginger-wasabi-wood_141793-11173.jpg?size=626&ext=jpg",
    description:
      "A fusion of sushi and burrito, packed with fresh ingredients.",
    rating: 4.6,
    price: 1099,
  },
  {
    id: 8,
    name: "Chicken Wings",
    category: "Fast Food",
    image:
      "https://img.freepik.com/premium-photo/yandoori-chicken_685853-10.jpg?size=626&ext=jpg",
    description: "Crispy chicken wings with a choice of delicious sauces.",
    rating: 4.1,
    price: 849,
  },
  {
    id: 9,
    name: "Salad",
    category: "Full Diet",
    image:
      "https://img.freepik.com/free-photo/top-view-vegan-salad-with-fresh-ingredients-plate-pepper-black-cutting-board_179666-47300.jpg?size=626&ext=jpg",
    description:
      "Fresh and healthy salad with a variety of greens and toppings.",
    rating: 4.3,
    price: 549,
  },
  {
    id: 10,
    name: "Fish and Chips",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/fish-chips-chopping-board-with-lemon-copy-space_23-2148776019.jpg?size=626&ext=jpg",
    description: "Classic British dish with battered fish and golden fries.",
    rating: 4.5,
    price: 1199,
  },
  {
    id: 11,
    name: "Ice Cream",
    category: "Dessert",
    image:
      "https://img.freepik.com/premium-photo/ice-cream-cone-with-sprinkle-isolated-background-created-with-generative-ai-technology_67092-5004.jpg?size=338&ext=jpg",
    description: "Creamy and delicious ice cream in a variety of flavors.",
    rating: 3.9,
    price: 399,
  },
  {
    id: 12,
    name: "Burrito",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?size=338&ext=jpg",
    description: "A flavorful Mexican burrito with rice, beans, and fillings.",
    rating: 4.2,
    price: 649,
  },
  {
    id: 13,
    name: "Fried Chicken",
    category: "Fast Food",
    image:
      "https://img.freepik.com/free-photo/delicious-chicken-table_144627-8758.jpg?size=626&ext=jpg",
    description: "Crispy fried chicken with a blend of secret spices.",
    rating: 3.7,
    price: 799,
  },
  {
    id: 14,
    name: "Omelette",
    category: "Breakfast",
    image:
      "https://img.freepik.com/free-photo/sandwich-with-egg-served-with-lettuce_140725-8045.jpg?size=626&ext=jpg",
    description: "Fluffy omelette with a choice of fillings.",
    rating: 4.1,
    price: 349,
  },
  {
    id: 15,
    name: "Noodle Soup",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/front-view-hashi-chopsticks-ramen-noodles-bowl-dark-background_140725-145003.jpg?size=626&ext=jpg",
    description: "Satisfying noodle soup with vegetables and broth.",
    rating: 3.8,
    price: 549,
  },
  {
    id: 16,
    name: "Fish Tacos",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/meat-doner-pita-bread-wooden-board_140725-9872.jpg?size=626&ext=jpg",
    description: "Tacos filled with grilled fish and tangy sauce.",
    rating: 4.2,
    price: 799,
  },
  {
    id: 17,
    name: "Pancakes",
    category: "Breakfast",
    image:
      "https://img.freepik.com/free-photo/high-angle-pancakes-arrangement_23-2148531571.jpg?size=626&ext=jpg",
    description: "Fluffy pancakes served with syrup and butter.",
    rating: 4.6,
    price: 299,
  },
  {
    id: 18,
    name: "Sushi Platter",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/from-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-2659.jpg?size=626&ext=jpg",
    description: "Assortment of fresh sushi rolls and sashimi.",
    rating: 4.7,
    price: 1599,
  },
  {
    id: 19,
    name: "Sandwich",
    category: "Lunch",
    image:
      "https://img.freepik.com/premium-photo/homemade-grilled-cheese-sandwich-breakfast_2829-10567.jpg?size=626&ext=jpg",
    description: "Classic sandwich with a variety of fillings.",
    rating: 3.6,
    price: 399,
  },
  {
    id: 20,
    name: "Chicken Shawarma",
    category: "Lunch",
    image:
      "https://img.freepik.com/free-photo/side-view-doner-pita-with-french-fries-fresh-cucumber-tomato_141793-4970.jpg?size=626&ext=jpg",
    description: "Tender chicken wrapped in warm pita bread.",
    rating: 4.4,
    price: 649,
  },
  {
    "name": "Wendy's Burgers",
    "image": "https://b.zmtcdn.com/data/pictures/chains/1/20320471/80c9da874512960e1b59d6fa606cadc5_o2_featured_v2.jpg?output-format=webp",
    "description": "Delicious burgers and fries at Wendy's Burgers!",
    "price": "₹100 - ₹300",
    "rating": 3.8,
    "categories": ["Fast Food", "Burgers"]
  },
  {
    "name": "Agarwal Caterers",
    "image": "https://b.zmtcdn.com/data/pictures/chains/6/100756/f06cf41f8fe738a3b1d1fcd125ede6cc_o2_featured_v2.jpg?output-format=webp",
    "description": "Authentic Indian catering services for all your events.",
    "price": "Customized menus",
    "rating": 4.2,
    "categories": ["Catering", "Indian"]
  },
  {
    "name": "KFC",
    "image": "https://b.zmtcdn.com/data/pictures/chains/8/100448/0b79e39ffc2e3770f3b66b26c0e6f4fd_o2_featured_v2.jpg?output-format=webp",
    "description": "Finger-licking good chicken at KFC!",
    "price": "₹200 - ₹500",
    "rating": 4.0,
    "categories": ["Fast Food", "Chicken"]
  },
  {
    "name": "Kanha",
    "image": "https://b.zmtcdn.com/data/pictures/chains/8/100148/49dbb6b8db9bd82a41a79d573643f4fa_o2_featured_v2.jpg?output-format=webp",
    "description": "Taste the flavors of North Indian cuisine at Kanha.",
    "price": "₹150 - ₹350",
    "rating": 3.5,
    "categories": ["North Indian"]
  },
 ,
  {
    "name": "Choudhary Annapurna Bhojanalaya",
    "image": "https://b.zmtcdn.com/data/pictures/chains/1/100081/676eb4dae5989c7e9d0cdd22fd447821_o2_featured_v2.jpg",
    "description": "Traditional Indian thali at Choudhary Annapurna Bhojanalaya.",
    "price": "₹150 - ₹350",
    "rating": 4.3,
    "categories": ["Indian", "Thali"]
  },
  {
    "name": "Rominus Pizza And Burger",
    "image": "https://b.zmtcdn.com/data/pictures/chains/0/18923280/5bc1ed37a36e8cf5a3a1d323466bd083_o2_featured_v2.jpg",
    "description": "Delicious pizzas and burgers at Rominus Pizza And Burger.",
    "price": "₹200 - ₹400",
    "rating": 3.7,
    "categories": ["Pizza", "Burgers", "Fast Food"]
  },
  {
    "name": "Burger King",
    "image": "https://b.zmtcdn.com/data/pictures/chains/1/102881/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg",
    "description": "Home of the Whopper! Enjoy flame-grilled burgers.",
    "price": "₹150 - ₹300",
    "rating": 4.4,
    "categories": ["Burgers", "Fast Food"]
  },
  {
    "name": "Pizza Hut",
    "image": "https://b.zmtcdn.com/data/pictures/chains/3/100213/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg",
    "description": "The best place for pizzas and more at Pizza Hut.",
    "price": "₹180 - ₹400",
    "rating": 3.6,
    "categories": ["Pizza", "Fast Food"]
  },
  {
    "name": "GVD Soni's Cafe",
    "image": "https://b.zmtcdn.com/data/pictures/chains/4/102534/96e2c81c5ec3ddd8923ef5f9d037df6e_o2_featured_v2.jpg",
    "description": "Cozy cafe with a variety of snacks and beverages.",
    "price": "₹120 - ₹250",
    "rating": 4.0,
    "categories": ["Cafe", "Snacks", "Beverages"]
  },
  {
    "name": "South Food Corner",
    "image": "https://b.zmtcdn.com/data/pictures/3/18801803/be132beb951b525975d002543fef7d09_o2_featured_v2.jpg",
    "description": "Delightful South Indian dishes at South Food Corner.",
    "price": "₹100 - ₹200",
    "rating": 3.8,
    "categories": ["South Indian"]
  },
  {
    "name": "The Pizza Joint",
    "image": "https://b.zmtcdn.com/data/pictures/chains/1/101271/101f34c16169c12ace58fb7bb244902c_o2_featured_v2.jpg",
    "description": "Where pizza dreams come true - The Pizza Joint.",
    "price": "₹180 - ₹380",
    "rating": 4.1,
    "categories": ["Pizza", "Italian", "Fast Food"]
  },
  {
    "name": "Fingerlicks Cafe",
    "image": "https://b.zmtcdn.com/data/pictures/chains/0/100030/0e6db73f8fb1a6ef493ab822d556da32_o2_featured_v2.jpg",
    "description": "Taste the joy of fingerlicking goodness at our cafe.",
    "price": "₹100 - ₹250",
    "rating": 4.2,
    "categories": ["Cafe", "Snacks", "Beverages"]
  },
  {
    "name": "Food Fusion",
    "image": "https://b.zmtcdn.com/data/pictures/chains/0/100670/45741318d1adfdd73a645e6a93d0b51d_o2_featured_v2.jpg",
    "description": "A fusion of flavors that will tantalize your taste buds.",
    "price": "₹150 - ₹350",
    "rating": 3.9,
    "categories": ["Indian", "Chinese", "Continental"]
  },
  {
    "name": "Royal Bakery",
    "image": "https://b.zmtcdn.com/data/pictures/chains/4/100104/e8cf1c58f2bb217f3d85ff50b7fe39a3_o2_featured_v2.jpg",
    "description": "Freshly baked goodies at Royal Bakery.",
    "price": "₹80 - ₹150",
    "rating": 4.1,
    "categories": ["Bakery", "Desserts"]
  },
  {
    "name": "Burger Farm",
    "image": "https://b.zmtcdn.com/data/pictures/chains/4/102174/23dc322d610e68193f0f312a3ecac2fd_o2_featured_v2.jpg",
    "description": "Tasty burgers and more at Burger Farm.",
    "price": "₹100 - ₹250",
    "rating": 3.9,
    "categories": ["Burgers", "Fast Food"]
  },
  {
    "name": "Domino's Pizza",
    "image": "https://b.zmtcdn.com/data/pictures/chains/3/102003/31424cab04ec30777802a10ec5ff1a7e_o2_featured_v2.jpg",
    "description": "Delicious pizzas delivered hot and fresh!",
    "price": "₹180 - ₹350",
    "rating": 4.2,
    "categories": ["Pizza", "Fast Food"]
  }
  // Add more restaurants with descriptions, prices, and categories here

];

const slider = () => {
  const slideCard = document.getElementById("slide-img-box");
  const short = cardData.slice(0,10);
  short.map((item) => {
    const card = document.createElement("div");
    card.classList.add("slide-box-main");
    card.setAttribute("id", item.id);

    card.innerHTML = `

              <div class="slide-img" draggable="false">
                <img
                  src=${item.image}
                  alt=""
                />
              </div>
              <div class="slide-title">${item.name}</div>

     `;

     slideCard.appendChild(card);
  });
};

slider();


const Cards = () => {
  const foodCard = document.getElementById("food-card");
  foodCard.innerHTML = "";
  cardData.map((item) => {
    const card = document.createElement("div");
    card.classList.add("order");
    card.setAttribute("id", item.id);
    card.value = item.category;

    card.innerHTML = `
        <div class="img-box">
          <img src="${item.image}" alt="" />
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

  const high = cardData.filter((item) => item.rating >= 4)
  

  high.map((item) => {
    const card = document.createElement("div");
    card.classList.add("order");
    card.setAttribute("id", item.id);
    card.value = item.category;

    card.innerHTML = `
        <div class="img-box">
          <img src="${item.image}" alt="" />
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
   console.log(check,"in");

  
  });
}

rat.addEventListener('click',() =>{
  rat.classList.toggle("check");
  check = !check;
  check ? Cards() : ratingUpdate();
  

})
// Call the Cards function to generate the cards
Cards()

