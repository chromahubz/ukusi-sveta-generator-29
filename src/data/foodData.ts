import { sushiRecipes } from './sushi-recipes';
import { streetFoodRecipes } from './street-food-recipes';

export interface FoodCategory {
  id: string;
  name: string;
  foods: string[];
}

export const foodCategories: FoodCategory[] = [
  {
    id: "african",
    name: "Afrička",
    foods: [
      "Durban", "Espetada", "Batak obrok", "Piletina i pirinač", "Piletina i povrće", 
      "Galibowl", "Pileća džigerica i pirinač", "Combotada"
    ]
  },
  {
    id: "american",
    name: "Američka kuhinja",
    foods: [
      "Mac and Cheese", "BBQ Ribs", "Fried Chicken", "Meatloaf", "Cheeseburger", 
      "Hot Dogs", "Buffalo Wings", "Apple Pie", "Clam Chowder", "Philly Cheesesteak", 
      "Jambalaya", "Gumbo", "Cornbread", "Coleslaw", "Pulled Pork", "Biscuits and Gravy", 
      "Chicken and Waffles", "Key Lime Pie", "Pancakes", "Mashed Potatoes"
    ]
  },
  {
    id: "arabic",
    name: "Arapska",
    foods: [
      "Hummus", "Tabbouleh", "Falafel", "Shawarma", "Mansaf", "Kibbeh", "Baklava", 
      "Dolma", "Mujaddara", "Fattouche", "Labneh", "Za'atar", "Manakish", "Kofta", 
      "Kabsa", "Ouzi", "Maqluba", "Knafeh", "Qatayef", "Mahshi"
    ]
  },
  {
    id: "asian",
    name: "Azijska",
    foods: [
      "Pad Thai", "Sushi", "Ramen", "Dim Sum", "Bibimbap", "Tom Yum", "Pho", 
      "Dumplings", "Laksa", "Satay", "Miso Soup", "Tempura", "Yakitori", "Bulgogi", 
      "Kimchi", "Fried Rice", "Spring Rolls", "Bao Buns", "Chow Mein", "Teriyaki"
    ]
  },
  {
    id: "bakery",
    name: "Pekara",
    foods: [
      "Burek sa mesom", "Burek sa sirom", "Burek sa spinatom", "Gibanica", "Kifla", 
      "Hleb", "Pogačice", "Krafne", "Kroasan", "Pita sa jabukom", "Banica", 
      "Palačinke", "Štrudla", "Pecivo sa makom", "Pecivo sa orasima", "Somun", 
      "Lepinja", "Proja", "Kačamak", "Uštipci"
    ]
  },
  {
    id: "bbq",
    name: "Roštilj",
    foods: [
      "Ćevapi", "Pljeskavica", "Kobasice", "Vešalica", "Ražnjići", "Karađorđeva šnicla", 
      "Dimljena rebra", "Roštilj meso", "Hamburger", "Hotdog", "Pečene paprike", 
      "Roštilj povrće", "Roštilje sa sirom", "Dimljena pršuta", "Ražnjevići", 
      "Pašticada", "Teleća pečenja", "Jagnjetina", "Prasetina", "Govedina"
    ]
  },
  {
    id: "bowl",
    name: "Činija",
    foods: [
      "Buddha Bowl", "Quinoa Bowl", "Rice Bowl", "Poke Bowl", "Smoothie Bowl", 
      "Grain Bowl", "Protein Bowl", "Veggie Bowl", "Mexican Bowl", "Mediterranean Bowl", 
      "Thai Bowl", "Korean Bowl", "Breakfast Bowl", "Salad Bowl", "Noodle Bowl", 
      "Curry Bowl", "Burrito Bowl", "Acai Bowl", "Power Bowl", "Zen Bowl"
    ]
  },
  {
    id: "breakfast",
    name: "Doručak",
    foods: [
      "Jaja na oko", "Kajgana", "Omlet", "French Toast", "Granola", "Müsli", 
      "Jogurt sa voćem", "Ovsene pahuljice", "Tost sa avokado", "Smuthi", 
      "Palačinke", "Vafli", "Croissant", "Bagel", "Slanina i jaja", "Hash Browns", 
      "Muffins", "Scones", "Chia Pudding", "Protein Bowl"
    ]
  },
  {
    id: "brunch",
    name: "Brunch",
    foods: [
      "Eggs Benedict", "Avocado Toast", "Shakshuka", "Pancakes", "French Toast", 
      "Granola Bowl", "Smoked Salmon Bagel", "Breakfast Burrito", "Quiche", "Frittata", 
      "Chia Pudding", "Acai Bowl", "Breakfast Sandwich", "Hash Browns", "Waffles", 
      "Croque Monsieur", "Breakfast Pizza", "Overnight Oats", "Smoothie Bowl", "Huevos Rancheros"
    ]
  },
  {
    id: "burger",
    name: "Burger",
    foods: [
      "Classic Burger", "Cheeseburger", "Bacon Burger", "Veggie Burger", "Chicken Burger", 
      "Fish Burger", "Double Burger", "BBQ Burger", "Mushroom Swiss Burger", "Turkey Burger", 
      "Black Bean Burger", "Lamb Burger", "Salmon Burger", "Portobello Burger", "Pulled Pork Burger", 
      "Breakfast Burger", "Spicy Burger", "Blue Cheese Burger", "Avocado Burger", "Quinoa Burger"
    ]
  },
  {
    id: "chicken",
    name: "Piletina",
    foods: [
      "Pileći file", "Pileće batake", "Pileće krile", "Pileći šnicl", "Chicken Tikka", 
      "Buffalo Wings", "Chicken Teriyaki", "Chicken Alfredo", "Kung Pao Chicken", 
      "Chicken Parmesan", "Chicken Fajitas", "Fried Chicken", "Grilled Chicken", 
      "Chicken Curry", "Chicken Marsala", "Chicken Kiev", "Chicken Cordon Bleu", 
      "BBQ Chicken", "Chicken Salad", "Chicken Soup"
    ]
  },
  {
    id: "chinese",
    name: "Kineska",
    foods: [
      "Sweet and Sour Pork", "Kung Pao Chicken", "Beef and Broccoli", "Chow Mein", 
      "Fried Rice", "Spring Rolls", "Dumplings", "Hot Pot", "Peking Duck", 
      "Mapo Tofu", "Dan Dan Noodles", "Wontons", "Char Siu", "General Tso's Chicken", 
      "Ma La Tang", "Xiaolongbao", "Congee", "Century Egg", "Tea Eggs", "Bubble Tea"
    ]
  },
  {
    id: "pancakes",
    name: "Palačinke",
    foods: [
      "Palačinke sa džemom", "Palačinke sa eurokremom", "Palačinke sa medom", 
      "Palačinke sa orasima", "Palačinke sa sirom", "Palačinke sa šlagom", 
      "Palačinke sa voćem", "Palačinke sa čokoladom", "Palačinke sa marmeladom", 
      "Palačinke sa kremom", "Slane palačinke", "Palačinke sa šunkom", 
      "Palačinke sa sirom i spanaćem", "Suzette palačinke", "Američke palačinke", 
      "Krep palačinke", "Palačinke sa bananom", "Proteinske palačinke", "Veganske palačinke", "Palačinke sa jogurtom"
    ]
  },
  {
    id: "dessert",
    name: "Dezert",
    foods: [
      "Tiramisu", "Cheesecake", "Chocolate Cake", "Ice Cream", "Crème Brûlée", 
      "Panna Cotta", "Apple Pie", "Brownies", "Cookies", "Macarons", 
      "Gelato", "Sorbet", "Pavlova", "Trifle", "Mousse", "Flan", 
      "Baklava", "Cannoli", "Profiteroles", "Éclair"
    ]
  },
  {
    id: "european",
    name: "Evropska",
    foods: [
      "Schnitzel", "Pasta Carbonara", "Paella", "Ratatouille", "Fish and Chips", 
      "Shepherd's Pie", "Goulash", "Pierogi", "Sauerkraut", "Bratwurst", 
      "Coq au Vin", "Bouillabaisse", "Wiener Schnitzel", "Fondue", "Risotto", 
      "Osso Buco", "Cassoulet", "Beef Bourguignon", "Bangers and Mash", "Haggis"
    ]
  },
  {
    id: "fish",
    name: "Riba",
    foods: [
      "Grilled Salmon", "Fish and Chips", "Tuna Steak", "Cod Fillet", "Sea Bass", 
      "Mackerel", "Sardines", "Trout", "Halibut", "Swordfish", 
      "Fish Tacos", "Fish Curry", "Baked Fish", "Fish Soup", "Smoked Salmon", 
      "Fish Cakes", "Ceviche", "Sashimi", "Fish Stew", "Grilled Tuna"
    ]
  },
  {
    id: "georgian",
    name: "Gruzijski",
    foods: [
      "Khachapuri", "Khinkali", "Mtsvadi", "Lobio", "Badrijani", "Satsivi", 
      "Churchkhela", "Ajapsandali", "Chakhokhbili", "Kharcho", "Pkhali", 
      "Kubdari", "Chakapuli", "Ostri", "Shkmeruli", "Lobiani", "Mchadi", 
      "Nigvziani Badrijani", "Tolma", "Chikhirtma"
    ]
  },
  {
    id: "gluten-free",
    name: "Bez glutena",
    foods: [
      "Quinoa Salad", "Rice Bowl", "Grilled Chicken", "Baked Salmon", "Vegetable Stir Fry", 
      "Corn Tortillas", "Rice Noodles", "Potato Dishes", "Greek Salad", "Fruit Salad", 
      "Smoothie Bowl", "Roasted Vegetables", "Meat and Vegetables", "Fish Dishes", "Eggs", 
      "Yogurt Parfait", "Nut Butter", "Gluten-Free Bread", "Rice Crackers", "Cheese and Fruit"
    ]
  },
  {
    id: "greek",
    name: "Grčka",
    foods: [
      "Moussaka", "Souvlaki", "Greek Salad", "Tzatziki", "Dolmades", "Spanakopita", 
      "Gyros", "Feta Cheese", "Olives", "Baklava", "Greek Lemon Soup", "Pastitsio", 
      "Kleftiko", "Fasolada", "Gemista", "Keftedes", "Tarama", "Ouzo", "Greek Yogurt", "Loukoumades"
    ]
  },
  {
    id: "halal",
    name: "Halal",
    foods: [
      "Halal Chicken", "Halal Beef", "Halal Lamb", "Halal Goat", "Chicken Biryani", 
      "Lamb Curry", "Halal Burger", "Chicken Shawarma", "Beef Kebab", "Halal Pizza", 
      "Chicken Tikka", "Lamb Chops", "Halal Sausages", "Beef Stir Fry", "Chicken Soup", 
      "Halal Meatballs", "Lamb Stew", "Chicken Wings", "Beef Tacos", "Halal Sandwiches"
    ]
  },
  {
    id: "healthy",
    name: "Zdrava hrana",
    foods: [
      "Quinoa Bowl", "Kale Salad", "Acai Bowl", "Chia Pudding", "Green Smoothie", 
      "Avocado Toast", "Grilled Vegetables", "Salmon Fillet", "Sweet Potato", "Brown Rice", 
      "Lentil Soup", "Greek Yogurt", "Nuts and Seeds", "Fresh Fruit", "Vegetable Juice", 
      "Protein Smoothie", "Buddha Bowl", "Steamed Broccoli", "Quinoa Salad", "Tofu Stir Fry"
    ]
  },
  {
    id: "homemade",
    name: "Domaća",
    foods: [
      "Sarma", "Musaka", "Pasulj", "Kupus salata", "Pečenje", "Punjene paprike", 
      "Grah", "Podvarak", "Prebranac", "Đuveč", "Karadjordjeva šnicla", "Ćevapi", 
      "Gibanica", "Burek", "Pita", "Ajvar", "Turšija", "Kiseli kupus", "Kompot", "Rakija"
    ]
  },
  {
    id: "ice-cream",
    name: "Sladoled",
    foods: [
      "Vanilla Ice Cream", "Chocolate Ice Cream", "Strawberry Ice Cream", "Mint Chocolate Chip", 
      "Cookies and Cream", "Rocky Road", "Neapolitan", "Pistachio", "Rum Raisin", "Coffee Ice Cream", 
      "Caramel Ice Cream", "Banana Split", "Sundae", "Milkshake", "Ice Cream Sandwich", 
      "Gelato", "Sorbet", "Frozen Yogurt", "Ice Cream Cake", "Affogato"
    ]
  },
  {
    id: "indian",
    name: "Indijska",
    foods: [
      "Butter Chicken", "Chicken Tikka Masala", "Biryani", "Naan", "Samosa", 
      "Dal", "Tandoori Chicken", "Rogan Josh", "Palak Paneer", "Aloo Gobi", 
      "Chapati", "Basmati Rice", "Mango Lassi", "Gulab Jamun", "Raita", 
      "Vindaloo", "Korma", "Masala Chai", "Pakora", "Dosa"
    ]
  },
  {
    id: "international",
    name: "Internacionalno",
    foods: [
      "Sushi", "Tacos", "Pizza", "Pasta", "Burger", "Pad Thai", "Ramen", 
      "Paella", "Couscous", "Falafel", "Hummus", "Pho", "Kimchi", "Dim Sum", 
      "Pierogi", "Goulash", "Schnitzel", "Fish and Chips", "Croissant", "Baklava"
    ]
  },
  {
    id: "italian",
    name: "Italijanska",
    foods: [
      "Pizza Margherita", "Spaghetti Carbonara", "Lasagna", "Risotto", "Osso Buco", 
      "Tiramisu", "Gelato", "Minestrone", "Bruschetta", "Antipasto", 
      "Gnocchi", "Prosciutto", "Mozzarella", "Parmigiana", "Cannoli", 
      "Focaccia", "Ravioli", "Pesto", "Caprese Salad", "Espresso"
    ]
  },
  {
    id: "japanese",
    name: "Japanska",
    foods: [
      "Sushi", "Sashimi", "Ramen", "Tempura", "Yakitori", "Miso Soup", 
      "Udon", "Soba", "Tonkatsu", "Teriyaki", "Bento", "Onigiri", 
      "Takoyaki", "Okonomiyaki", "Katsu Curry", "Chirashi", "Gyoza", "Mochi", "Dango", "Matcha"
    ]
  },
  {
    id: "korean",
    name: "Koreanska",
    foods: [
      "Kimchi", "Bulgogi", "Bibimbap", "Korean BBQ", "Japchae", "Tteokbokki", 
      "Kimchi Jjigae", "Galbi", "Samgyeopsal", "Banchan", "Korean Fried Chicken", 
      "Hotteok", "Naengmyeon", "Sundae", "Pajeon", "Gimbap", "Mandu", "Bossam", "Jajangmyeon", "Korean Corn Dogs"
    ]
  },
  {
    id: "lunch",
    name: "Lunch",
    foods: [
      "Club Sandwich", "Caesar Salad", "Soup and Sandwich", "Grilled Chicken", "Pasta Salad", 
      "Wrap", "Quiche", "Stir Fry", "Rice Bowl", "Grain Bowl", 
      "Panini", "Burrito", "Poke Bowl", "Buddha Bowl", "Salad Bowl", 
      "Soup", "Flatbread", "Risotto", "Curry", "Noodle Soup"
    ]
  },
  {
    id: "mediterranean",
    name: "Mediteranska",
    foods: [
      "Greek Salad", "Hummus", "Tabbouleh", "Grilled Fish", "Olive Oil", 
      "Feta Cheese", "Olives", "Pita Bread", "Tzatziki", "Dolmades", 
      "Ratatouille", "Paella", "Gazpacho", "Bruschetta", "Caprese", 
      "Moussaka", "Souvlaki", "Pasta Puttanesca", "Seafood Risotto", "Baklava"
    ]
  },
  {
    id: "mexican",
    name: "Meksička",
    foods: [
      "Tacos", "Burritos", "Quesadillas", "Nachos", "Guacamole", "Enchiladas", 
      "Fajitas", "Churros", "Tamales", "Salsa", "Chiles Rellenos", "Pozole", 
      "Mole", "Carnitas", "Al Pastor", "Tres Leches Cake", "Margaritas", "Elote", 
      "Chimichangas", "Tostadas"
    ]
  },
  {
    id: "noodles",
    name: "Nudle",
    foods: [
      "Ramen", "Pad Thai", "Pho", "Lo Mein", "Chow Mein", "Udon", 
      "Soba", "Rice Noodles", "Egg Noodles", "Instant Noodles", 
      "Dan Dan Noodles", "Laksa", "Beef Noodle Soup", "Chicken Noodle Soup", "Spicy Noodles", 
      "Cold Noodles", "Stir Fried Noodles", "Noodle Salad", "Curry Noodles", "Sesame Noodles"
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    foods: [
      "Spaghetti Bolognese", "Fettuccine Alfredo", "Carbonara", "Penne Arrabbiata", "Lasagna", 
      "Ravioli", "Gnocchi", "Pesto Pasta", "Cacio e Pepe", "Amatriciana", 
      "Aglio e Olio", "Puttanesca", "Marinara", "Mac and Cheese", "Pasta Primavera", 
      "Linguine", "Tortellini", "Rigatoni", "Farfalle", "Orecchiette"
    ]
  },
  {
    id: "pizza",
    name: "Pica",
    foods: [
      "Margherita", "Pepperoni", "Hawaiian", "Quattro Stagioni", "Prosciutto", 
      "Funghi", "Capricciosa", "Diavola", "Veggie Pizza", "Meat Lovers", 
      "BBQ Chicken", "White Pizza", "Buffalo Chicken", "Supreme", "Mediterranean", 
      "Sicilian", "Chicago Deep Dish", "Neapolitan", "Calzone", "Stromboli"
    ]
  },
  {
    id: "russian",
    name: "Ruska",
    foods: [
      "Borscht", "Beef Stroganoff", "Pierogi", "Blini", "Caviar", "Vodka", 
      "Russian Salad", "Goulash", "Syrniki", "Kasha", "Shchi", "Solyanka", 
      "Kotlety", "Pelmeni", "Varenya", "Kvass", "Smetana", "Tvorog", "Buckwheat", "Russian Tea"
    ]
  },
  {
    id: "salad",
    name: "Salata",
    foods: [
      "Caesar Salad", "Greek Salad", "Caprese Salad", "Waldorf Salad", "Cobb Salad", 
      "Nicoise Salad", "Tabbouleh", "Fattoush", "Quinoa Salad", "Kale Salad", 
      "Spinach Salad", "Arugula Salad", "Potato Salad", "Coleslaw", "Fruit Salad", 
      "Pasta Salad", "Chicken Salad", "Tuna Salad", "Garden Salad", "Chef's Salad"
    ]
  },
  {
    id: "sandwich",
    name: "Sendvič",
    foods: [
      "Club Sandwich", "BLT", "Grilled Cheese", "Panini", "Reuben", 
      "Philly Cheesesteak", "Cuban Sandwich", "Monte Cristo", "Po' Boy", "Meatball Sub", 
      "Turkey Sandwich", "Ham and Cheese", "Tuna Salad Sandwich", "Egg Salad Sandwich", "Chicken Salad Sandwich", 
      "Italian Sub", "French Dip", "Banh Mi", "Gyro", "Falafel Wrap"
    ]
  },
  {
    id: "serbian",
    name: "Srpska",
    foods: [
      "Ćevapi", "Pljeskavica", "Sarma", "Musaka", "Karađorđeva šnicla", "Pasulj", 
      "Prebranac", "Gibanica", "Burek", "Proja", 
      "Punjene paprike", "Podvarak", "Đuveč", "Sataraš", "Turšija"
    ]
  },
  {
    id: "soup",
    name: "Supa",
    foods: [
      "Chicken Soup", "Tomato Soup", "Vegetable Soup", "Mushroom Soup", "Onion Soup", 
      "Minestrone", "Lentil Soup", "Split Pea Soup", "Clam Chowder", "Gazpacho", 
      "Borscht", "Miso Soup", "Pho", "Ramen", "Hot and Sour Soup", 
      "Cream of Broccoli", "Beef Stew", "Fish Soup", "Corn Chowder", "Potato Soup"
    ]
  },
  {
    id: "steak",
    name: "Stejk",
    foods: [
      "Ribeye Steak", "Filet Mignon", "New York Strip", "T-Bone Steak", "Porterhouse", 
      "Sirloin Steak", "Flank Steak", "Skirt Steak", "Hanger Steak", "Flat Iron Steak", 
      "Prime Rib", "Tomahawk Steak", "Denver Steak", "Tri-Tip", "Round Steak", 
      "Chuck Steak", "Blade Steak", "Top Round", "Bottom Round", "Eye of Round"
    ]
  },
  {
    id: "street-food",
    name: "Street Food",
    foods: [
      "Tacos", "Hot Dogs", "Falafel", "Gyros", "Banh Mi", "Corn Dogs", 
      "Fish and Chips", "Empanadas", "Arepas", "Churros", "Pretzel", "Kebab", 
      "Samosa", "Spring Rolls", "Dumplings", "Bao Buns", "Takoyaki", "Elote", "Satay", "Crepes"
    ]
  },
  {
    id: "sushi",
    name: "Suši",
    foods: [
      "California Roll", "Salmon Roll", "Tuna Roll", "Spicy Tuna Roll", "Rainbow Roll", 
      "Dragon Roll", "Philadelphia Roll", "Eel Roll", "Tempura Roll", "Salmon Sashimi", 
      "Tuna Sashimi", "Chirashi Bowl", "Hand Rolls", "Inside Out Rolls", "Sushi Boat"
    ]
  },
  {
    id: "thai",
    name: "Tajlandska",
    foods: [
      "Pad Thai", "Tom Yum", "Green Curry", "Red Curry", "Massaman Curry", 
      "Som Tam", "Pad See Ew", "Larb", "Thai Basil Chicken", "Mango Sticky Rice", 
      "Tom Kha Gai", "Pad Krapow", "Thai Fried Rice", "Satay", "Spring Rolls", 
      "Papaya Salad", "Coconut Soup", "Thai Tea", "Pad Woon Sen", "Thai Beef Salad"
    ]
  },
  {
    id: "turkish",
    name: "Turska",
    foods: [
      "Kebab", "Doner", "Baklava", "Turkish Delight", "Dolma", "Lahmacun", 
      "Pide", "Meze", "Turkish Coffee", "Börek", "Köfte", "Iskender", 
      "Simit", "Ayran", "Raki", "Turkish Breakfast", "Menemen", "Cacik", "Patlican Salata", "Kunefe"
    ]
  },
  {
    id: "vegan",
    name: "Vegan",
    foods: [
      "Quinoa Bowl", "Tofu Stir Fry", "Veggie Burger", "Lentil Curry", "Chickpea Salad", 
      "Vegan Pizza", "Smoothie Bowl", "Chia Pudding", "Avocado Toast", "Buddha Bowl", 
      "Vegan Pasta", "Veggie Wrap", "Plant-Based Protein", "Coconut Curry", "Vegan Sushi", 
      "Raw Salad", "Fruit Bowl", "Vegetable Soup", "Vegan Dessert", "Plant Milk"
    ]
  },
  {
    id: "vegetarian",
    name: "Vegeterijanska hrana",
    foods: [
      "Vegetable Curry", "Caprese Salad", "Mushroom Risotto", "Veggie Burger", "Falafel", 
      "Greek Salad", "Margherita Pizza", "Pasta Primavera", "Stuffed Peppers", "Ratatouille", 
      "Vegetable Stir Fry", "Quinoa Salad", "Cheese Omelette", "Veggie Wrap", "Hummus", 
      "Spinach Lasagna", "Vegetable Soup", "Eggplant Parmesan", "Veggie Tacos", "Buddha Bowl"
    ]
  },
  {
    id: "waffles",
    name: "Vafli",
    foods: [
      "Belgian Waffles", "American Waffles", "Chicken and Waffles", "Strawberry Waffles", "Chocolate Waffles", 
      "Blueberry Waffles", "Banana Waffles", "Pecan Waffles", "Cinnamon Waffles", "Protein Waffles", 
      "Gluten-Free Waffles", "Vegan Waffles", "Ice Cream Waffles", "Savory Waffles", "Mini Waffles", 
      "Waffle Sundae", "Maple Syrup Waffles", "Butter Waffles", "Cream Waffles", "Fruit Waffles"
    ]
  },
  {
    id: "wings",
    name: "Krilca",
    foods: [
      "Buffalo Wings", "BBQ Wings", "Honey Garlic Wings", "Spicy Wings", "Lemon Pepper Wings", 
      "Teriyaki Wings", "Hot Wings", "Mild Wings", "Sweet and Sour Wings", "Cajun Wings", 
      "Korean Wings", "Jerk Wings", "Parmesan Wings", "Ranch Wings", "Smoky Wings", 
      "Grilled Wings", "Baked Wings", "Fried Wings", "Boneless Wings", "Wing Combo"
    ]
  },
  {
    id: "wraps",
    name: "Vrapovi",
    foods: [
      "Chicken Caesar Wrap", "Turkey Wrap", "Veggie Wrap", "Buffalo Chicken Wrap", "Club Wrap", 
      "Tuna Wrap", "Ham and Cheese Wrap", "Falafel Wrap", "Greek Wrap", "Mexican Wrap", 
      "Asian Wrap", "Breakfast Wrap", "Protein Wrap", "Salmon Wrap", "Steak Wrap", 
      "Hummus Wrap", "Avocado Wrap", "Spinach Wrap", "Chicken Salad Wrap", "BLT Wrap"
    ]
  }
];