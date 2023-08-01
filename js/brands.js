const brands = [
  {
    id: 1,
    name: "McDonald's",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383614.png?output-format=webp",
  },
  {
    id: 2,
    name: "Burger King",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/76cee521f3905f01a515d71881ff70ae_1630687191.png?output-format=webp",
  },
  {
    id: 3,
    name: "Subway",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520813.png?output-format=webp",
  },
  {
    id: 4,
    name: "Dominoz",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/72093a8b7046c690006fab2a9e269bde_1630661078.png?output-format=webp",
  },
  {
    id: 5,
    name: "Burger Farm",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/6743c2bf4409654a14320694e6e2f88a_1617984416.png?output-format=webp",
  },
  {
    id: 6,
    name: "Roll Express",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/e6f2085a4ed0cd750cac265574748f3f_1601467978.png?output-format=webp",
  },
  {
    id: 7,
    name: "Rominus Pizza",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/cdcfec38a53a7edd76e282bee953e44f_1664867311.png?output-format=webp",
  },
  {
    id: 8,
    name: "Kanha",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/c37b450dacb06430cc02d6c1ca82a448_1617984339.png?output-format=webp",
  },
  {
    id: 9,
    name: "Agarwal Caters",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/ea27b8179a3d59c157dd4df0ee2c3821_1617984370.png?output-format=webp",
  },
  {
    id: 10,
    name: "Harisnker",
    logo: "https://b.zmtcdn.com/data/brand_creatives/logos/58914e20f68fc3e4874b3eab0f5c4ec0_1584453757.png?output-format=webp",
  },
];
const brand = document.getElementById("brands");
const setBrands = () => {
  brands.map((item) => {
    const card = document.createElement("div");
    card.classList.add("slide-box-main");
    card.setAttribute("id", item.id);

    card.innerHTML = `
    
                  <div class="slide-img">
                    <img
                      src=${item.logo}
                      alt=""
                    />
                  </div>
                  <div class="slide-title">${item.name}</div>
    
         `;

    brand.appendChild(card);
  });
};

setBrands();