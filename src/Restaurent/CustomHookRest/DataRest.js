const FoodData = [
    {
      id: 1,
      img: "https://i.ndtvimg.com/i/2015-04/chana-kulcha_625x350_41429707001.jpg",
      name: " chana kulcha ",
      price: 150,
      desc: "A classic dish that never goes out of style. The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder and some mango powder, which is what gives the chana it's sour and tangy taste.",
      category: "Lunch",
      rating: 4.5,
    },
    {
      id: 2,
      img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
      name: "Margherita Pizza",
      price: 130,
      desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 3,
      img: "	https://i.ndtvimg.com/i/2015-04/paneer_625x350_61429707960.jpg",
      name: "Paneer Achaari",
      price: 160,
      desc: "Don't get intimidated by the list of ingredients because not only are already in your kitchen cabinet, but also because all they'll need is 20 minutes of your time.",
      category: "Lunch",
      rating: 4.6,
    },
    {
      id: 4,
      img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
      name: "Spinach Pizza",
      price: 140,
      desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
      category: "Lunch",
      rating: 4.2,
    },
    {
      id: 5,
      img: "https://veggiecurean.com/wp-content/uploads/2019/03/Pea-Pulao-1-1440x720.jpg",
      name: "Matar Pulao ",
      price: 170,
      desc: "| green peas pulao recipe with detailed photo and video recipe. a simple veg pulao recipe prepared with just green peas and dry spices. an ideal lunch box recipes which can be prepared in jiffy, but not restricted to try for dinner and even breakfast..",
      category: "Lunch",
      rating: 4.8,
    },
    {
      id: 6,
      img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
      name: "Classic Pancakes",
      price: 80,
      desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 7,
      img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
      name: "Bacon Croissant",
      price: 110,
      desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
      category: "Breakfast",
      rating: 4.2,
    },
    {
      id: 8,
      img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
      name: "Greek Yogurt Parfait",
      price: 95,
      desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
      category: "Breakfast",
      rating: 4.1,
    },
    {
      id: 9,
      img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
      name: "Avocado Toast",
      price: 120,
      desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
      category: "Breakfast",
      rating: 4.6,
    },
    {
      id: 10,
      img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
      name: "Nut Oatmeal",
      price: 85,
      desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
      category: "Breakfast",
      rating: 4.5,
    },
    {
      id: 11,
      img: "https://i.ndtvimg.com/i/2017-10/panchratna-dal_620x330_71507187543.jpg",
      name: "Panchratna Dal",
      price: 190,
      desc: "A delicious mix of five lentils! Urad, moong, chana, masoor and arhar come together with a host of spices to prepare a flavourful dal that you can serve with rice or roti.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 12,
      img: "https://i.ndtvimg.com/i/2017-09/galouti-kebab_625x350_51506417223.jpg",
      name: "Galouti Kebabs ",
      price: 160,
      desc: "If you want good food but kind that doesn't go straight to your hip, then here's the perfect recipe. Soft and succulent cmade with olive oil and pure ghee",
      category: "Dinner",
      rating: 4.8,
    },
    {
      id: 13,
      img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
      name: "Vegetable Stir-Fry",
      price: 130,
      desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
      category: "Dinner",
      rating: 4.2,
    },
    {
      id: 14,
      img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
      name: "Burrito Bowl",
      price: 160,
      desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
      category: "Dinner",
      rating: 4.6,
    },
    {
      id: 15,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Mushroom Risotto",
      price: 175,
      desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
      category: "Dinner",
      rating: 4.5,
    },
    {
      id: 16,
      img: "	https://www.tasteatlas.com/images/dishes/5a84f0743dc2474d8d0cb1c404cabe55.jpg?mw=1300",
      name: "Sabudana vada",
      price: 120,
      desc: "These crispy Indian fritters consist of a combination of soaked tapioca pearls, mashed potatoes, roasted and crushed peanuts, and a variety of spices such as turmeric, chili, ginger, and fresh coriander.",
      category: "Snacks",
      rating: 4.3,
    },
    {
      id: 17,
      img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
      name: "Crispy Wings",
      price: 130,
      desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 18,
      img: "https://cdn.tasteatlas.com//Images/Dishes/b4deb1913b6b48c2baff9e6cf8d25923.jpg?w=905&h=510",
      name: "PAKORA",
      price: 130,
      desc: "Pakora is a savory, deep-fried Indian snack made with pieces of vegetables such as cauliflower and eggplant. Although it is a quintessential Indian snack that can be easily found on numerous street corners, it can also be made at home.",
      category: "Snacks",
      rating: 4.9,
    },
    {
      id: 19,
      img: "https://cdn.tasteatlas.com//images/dishes/31581c6651644769875834e8dc60bec0.jpg?w=905&h=510",
      name: "MISAL PAV",
      price: 90,
      desc: "Misal pav is a traditional Indian dish originating from Maharashtra. Its two main components are misal – a curry made with sprouted moth beans, usually topped with chivda, onions, chilis, and potatoes – and pav, bread rolls used to mop up the flavorful curry.",
      category: "Snacks",
      rating: 4.4,
    },
    {
      id: 20,
      img: "https://cdn.tasteatlas.com//Images/Dishes/ba7bab747c7e41769dbc895a84626a23.jpg?w=905&h=510",
      name: "MASALA DOSA",
      price: 70,
      desc: "A traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and lentils that is baked into a thin pancake and usually stuffed with potatoes, onions, and mustard seeds.",
      category: "Snacks",
      rating: 4.8,
    },
  ];
  export default FoodData;