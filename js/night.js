const nightOut = 
[
  {
    "id": 1,
    "name": "Meraaki Kitchen",
    "image_url": "https://b.zmtcdn.com/data/pictures/9/20417119/d16a3ea50b117fee0383119fd3901d5e_featured_v2.jpg",
    "rating": 4.3,
    "description": "Enjoy a delightful culinary experience at Meraaki Kitchen with a diverse menu.",
    "price": 500
  },
  {
    "id": 2,
    "name": "Nebulae",
    "image_url": "https://b.zmtcdn.com/data/pictures/2/20690062/ba0bfa05944db1a6af6a9e5f45d914e9_featured_v2.jpg",
    "rating":4.1,
    "description": "Experience celestial flavors at Nebulae restaurant, where food and ambiance blend perfectly.",
    "price": 700
  },
  {
    "id": 3,
    "name": "OUT - Once Upon",
    "image_url": "https://b.zmtcdn.com/data/pictures/7/20273787/fa3c4f0ecc62207d414856f6430a5db4_featured_v2.jpg",
    "rating": 4.1,
    "description": "Step into a world of fairy tales and delectable dishes at OUT - Once Upon.",
    "price": 600
  },
  {
    "id": 4,
    "name": "Pentagon Bar & Grill",
    "image_url": "https://b.zmtcdn.com/data/pictures/7/103147/d22bdf6dcafa85bdb44e4313af466647_featured_v2.jpg",
    "rating": 4.7,
    "description": "Savor the flavors and enjoy the vibrant atmosphere at Pentagon Bar & Grill.",
    "price": 800
  },
  {
    "id": 5,
    "name": "Ouzo Bar & Lounge",
    "image_url": "https://b.zmtcdn.com/data/pictures/8/20267048/8fba8360f6f9bd83338412d959fcf68c_featured_v2.jpg",
    "rating": 4.3,
    "description": "Relax and unwind with a wide selection of drinks and food at Ouzo Bar & Lounge.",
    "price": 450
  },
  {
    "id": 6,
    "name": "Skyloft Open Air Lounge",
    "image_url": "https://b.zmtcdn.com/data/pictures/5/18935945/0c85eecdd9d4bdfa5184be92c3a99ff4_featured_v2.jpg",
    "rating": 4.4,
    "description": "Experience the city skyline from the enchanting Skyloft Open Air Lounge.",
    "price": 900
  },
  {
    "id": 7,
    "name": "Spice Court",
    "image_url": "https://b.zmtcdn.com/data/pictures/0/18794830/e1574e7733016bcfc2c38ed173612c69_featured_v2.jpg",
    "rating": 4.1,
    "description": "Indulge in a symphony of spices and flavors at Spice Court.",
    "price": 300
  },
  {
    "id": 8,
    "name": "Pint House",
    "image_url": "https://b.zmtcdn.com/data/pictures/9/19806459/4df0fac6f1d152451c9774ba008ed5ba_featured_v2.jpg",
    "rating": 4.8,
    "description": "Raise a pint and enjoy the lively atmosphere at Pint House.",
    "price": 550
  },
  {
    "id": 9,
    "name": "Mad Pops",
    "image_url": "https://b.zmtcdn.com/data/pictures/1/19296071/d21582fee59031e9225d67b7d0d42701_featured_v2.jpg",
    "rating": 4.6,
    "description": "Indulge in a delightful array of ice cream flavors at Mad Pops.",
    "price": 200
  },
  {
    "id": 10,
    "name": "Roadhouse Bar & Grill",
    "image_url": "https://b.zmtcdn.com/data/pictures/3/100253/7861814d42ca9ac08f2bbeaa5697c9dd_featured_v2.jpg",
    "rating": 4.2,
    "description": "Hit the road and enjoy great food and drinks at Roadhouse Bar & Grill.",
    "price": 500
  },
  {
    "id": 11,
    "name": "Good Times Live",
    "image_url": "https://b.zmtcdn.com/data/pictures/8/18784148/fa0fd5ca30b55baa91e3f6b8dbb8fef0_featured_v2.jpg",
    "rating": 4.0,
    "description": "Have a blast and create memories at Good Times Live with live music and entertainment.",
    "price": 400
  },
  {
    "id": 12,
    "name": "Sky Beach",
    "image_url": "https://b.zmtcdn.com/data/pictures/4/19609934/a15fa1410d6357674e3b87061748d349_featured_v2.jpg",
    "rating": 4.5,
    "description": "Relax and soak up the sun at Sky Beach with beach-themed cocktails and delicious food.",
    "price": 750
  },
  {
    "id": 13,
    "name": "Krystal Bar - Hilton",
    "image_url": "https://b.zmtcdn.com/data/pictures/7/102217/fd654d9558d1f7b9ecd2a8a23cda1ffc_featured_v2.jpg",
    "rating": 4.3,
    "description": "Elegant and refined, Krystal Bar at Hilton offers a sophisticated drinking experience.",
    "price": 900
  },
  {
    "id": 14,
    "name": "CAVA - The Uptown",
    "image_url": "https://b.zmtcdn.com/data/pictures/6/18647526/3e1fdba603a29335a10a3e8b33a3036d_featured_v2.jpg",
    "rating": 4.1,
    "description": "Step into luxury and enjoy an exquisite dining experience at CAVA - The Uptown.",
    "price": 1000
  },
  {
    "id": 15,
    "name": "Club Karma",
    "image_url": "https://b.zmtcdn.com/data/pictures/6/18454586/d6ea56b7f71072654f27c5b30ff18019_featured_v2.jpg",
    "rating": 4.7,
    "description": "Dance the night away and experience the best of clubbing at Club Karma.",
    "price": 650
  },
 
]


const Cards = () => {
    const foodCard = document.getElementById("food-card");
    foodCard.innerHTML = "";
    nightOut.map((item, i) => {
      const card = document.createElement("div");
      card.classList.add("order");
      card.setAttribute("id", i);
      card.value = item.category;
  
      card.innerHTML = `
            <div class="img-box">
              <img src="${item.image_url}" alt="" />
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

    const high = nightOut.filter((item) => item.rating >= 4)
    console.log(high);

    high.map((item) => {
      const card = document.createElement("div");
      card.classList.add("order");
      card.setAttribute("id", item.id);
      card.value = item.category;
  
      card.innerHTML = `
          <div class="img-box">
            <img src="${item.image_url}" alt="" />
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
     console.log(check);
    
    });
  }
  rat.addEventListener('click',() =>{
    check = !check;
   rat.classList.toggle("check");
    check ? Cards() : ratingUpdate();
   
    
  
  })

  Cards();