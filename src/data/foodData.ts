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
      "Hleb", "Pogačice", "Krofne", "Kroasan", "Pita sa jabukom", "Banica", 
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
      "Buddha Činija", "Kinoa Činija", "Pirinač Činija", "Poke Činija", "Smuti Činija", 
      "Žitarica Činija", "Protein Činija", "Veggie Činija", "Meksička Činija", "Mediteranska Činija", 
      "Tajlandska Činija", "Koreanska Činija", "Doručak Činija", "Salata Činija", "Nudle Činija", 
      "Kari Činija", "Burito Činija", "Asai Činija", "Energetska Činija", "Zen Činija"
    ]
  },
  {
    id: "breakfast",
    name: "Doručak",
    foods: [
      "Jaja na oko", "Kajgana", "Omlet", "Francuski Tost", "Granola", "Müsli", 
      "Jogurt sa voćem", "Ovsene pahuljice", "Tost sa avokado", "Smuthi", 
      "Palačinke", "Vafli", "Kroasan", "Bagel", "Slanina i jaja", "Prženi Krompir", 
      "Mafini", "Skons", "Chia Pudding", "Protein Bowl"
    ]
  },
  {
    id: "brunch",
    name: "Brunch",
    foods: [
      "Jaja Benedikt", "Avokado Tost", "Šakšuka", "Američke Palačinke", "Francuski Tost", 
      "Granola Činija", "Dimljeni Losos Bagel", "Doručak Burito", "Kiš", "Fritata", 
      "Chia Puding", "Asai Činija", "Doručak Sendvič", "Prženi Krompir", "Vafli", 
      "Krok Mesjø", "Doručak Pica", "Ovsene Pahuljice Preko Noći", "Smuti Činija", "Huevos Rančeros"
    ]
  },
  {
    id: "burger",
    name: "Burger",
    foods: [
      "Klasični Burger", "Burger sa Sirom", "Burger sa Slaninom", "Vegetarijanski Burger", "Pileći Burger", 
      "Burger sa Ribom", "Dupli Burger", "BBQ Burger", "Burger sa Pečurkama i Švajcarskim Sirom", "Burger sa Ćuretinom", 
      "Burger sa Crnim Pasuljem", "Burger sa Jagnjećinom", "Burger sa Lososom", "Portobello Burger", "Pulled Pork Burger", 
      "Doručak Burger", "Ljuti Burger", "Burger sa Plavim Sirom", "Avokado Burger", "Kinoa Burger"
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
      "Tiramisu", "Čizkejk", "Čokoladna Torta", "Sladoled", "Krem Brile", 
      "Pana Kota", "Pita sa Jabukama", "Brauni", "Kolačići", "Makaroni", 
      "Dželato", "Sorbet", "Pavlova", "Trifle", "Mus", "Flan", 
      "Baklava", "Kanoli", "Profiterole", "Ekler"
    ]
  },
  {
    id: "european",
    name: "Evropska",
    foods: [
      "Šnicla", "Pasta Karbonara", "Paela", "Ratatuj", "Riba sa Pomfritom", 
      "Ovčarska Pita", "Gulaš", "Pierogi", "Kiseli Kupus", "Bratvurst", 
      "Koq au Vin", "Buljabes", "Bečka Šnicla", "Fondi", "Rizoto", 
      "Oso Buko", "Kasule", "Goveđe Burginjion", "Kobasice sa Pireom", "Hagis"
    ]
  },
  {
    id: "fish",
    name: "Riba",
    foods: [
      "Grilovani Losos", "Riba sa Pomfritom", "Tuna Stejk", "File Bakalara", "Lubin", 
      "Skuša", "Sardine", "Pastrmka", "Halibut", "Mačevalna Riba", 
      "Ribni Takos", "Ribni Kari", "Pečena Riba", "Riblja Supa", "Dimljeni Losos", 
      "Riblje Pogačice", "Sevičé", "Sašimi", "Riblji Gulaš", "Grilovana Tuna"
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
      "Kinoa Salata", "Pirinač Činija", "Grilovana Piletina", "Pečeni Losos", "Povrće na Tiganju", 
      "Kukuruzne Tortilje", "Pirinčane Nudle", "Jela od Krompira", "Grčka Salata", "Voćna Salata", 
      "Smuti Činija", "Pečeno Povrće", "Meso i Povrće", "Riblja Jela", "Jaja", 
      "Jogurt Parfe", "Puter od Orašastog Voća", "Hleb bez Glutena", "Pirinčani Krekeri", "Sir i Voće"
    ]
  },
  {
    id: "greek",
    name: "Grčka",
    foods: [
      "Musaka", "Suvlaki", "Grčka Salata", "Caciki", "Dolmades", "Španakopita", 
      "Điros", "Feta Sir", "Masline", "Baklava", "Grčka Limunova Supa", "Pasticio", 
      "Kleftiko", "Fasolada", "Gemista", "Keftedes", "Tarama", "Uzo", "Grčki Jogurt", "Lukumades"
    ]
  },
  {
    id: "halal",
    name: "Halal",
    foods: [
      "Halal Piletina", "Halal Govedina", "Halal Jagnjetina", "Halal Koze", "Pileći Birijani", 
      "Kari od Jagnjetine", "Halal Burger", "Pileća Šavarma", "Goveđi Kebab", "Halal Pica", 
      "Pileća Tikka", "Kotleti od Jagnjetine", "Halal Kobasice", "Govedina na Tiganju", "Pileća Supa", 
      "Halal Ćufte", "Gulaš od Jagnjetine", "Pileća Krilca", "Goveđi Takos", "Halal Sendviči"
    ]
  },
  {
    id: "healthy",
    name: "Zdrava hrana",
    foods: [
      "Kinoa Činija", "Kej Salata", "Asai Činija", "Chia Puding", "Zeleni Smuti", 
      "Avokado Tost", "Grilovano Povrće", "Losos File", "Slatki Krompir", "Braon Pirinač", 
      "Sočivo Supa", "Grčki Jogurt", "Orasi i Semenke", "Sveže Voće", "Povrćni Sok", 
      "Protein Smuti", "Buddha Činija", "Kuvani Brokoli", "Kinoa Salata", "Tofu na Tiganju"
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
      "Vanila Sladoled", "Čokolada Sladoled", "Jagoda Sladoled", "Nana Čokolada Čips", 
      "Kolačići i Krem", "Rokovi Put", "Neapolitanski", "Pistaći", "Rum Grožđice", "Kafa Sladoled", 
      "Karamel Sladoled", "Banana Split", "Sunde", "Milkšejk", "Sladoled Sendvič", 
      "Đelato", "Sorbet", "Zamrznuti Jogurt", "Sladoled Torta", "Afogato"
    ]
  },
  {
    id: "indian",
    name: "Indijska",
    foods: [
      "Pileća u Butteru", "Pileća Tikka Masala", "Birijani", "Nan", "Samosa", 
      "Dal", "Tanduri Piletina", "Rogan Džoš", "Palak Panir", "Alu Gobi", 
      "Čapati", "Basmati Pirinač", "Mango Lasi", "Gulab Džamun", "Raita", 
      "Vindaloo", "Korma", "Masala Čaj", "Pakora", "Dosa"
    ]
  },
  {
    id: "international",
    name: "Internacionalno",
    foods: [
      "Suši", "Takos", "Pica", "Pasta", "Burger", "Pad Taj", "Ramen", 
      "Paela", "Kuskus", "Falafel", "Humus", "Fo", "Kimči", "Dim Sam", 
      "Pierogi", "Gulaš", "Šnicla", "Riba sa Pomfritom", "Kroasan", "Baklava"
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
      "Klub Sendvič", "Cezar Salata", "Supa i Sendvič", "Grilovana Piletina", "Pasta Salata", 
      "Vrap", "Kiš", "Povrće na Tiganju", "Pirinač Činija", "Žitarica Činija", 
      "Panini", "Burito", "Poke Činija", "Buddha Činija", "Salata Činija", 
      "Supa", "Ravni Hleb", "Rizoto", "Kari", "Nudle Supa"
    ]
  },
  {
    id: "mediterranean",
    name: "Mediteranska",
    foods: [
      "Grčka Salata", "Humus", "Tabuleh", "Grilovana Riba", "Maslinovo Ulje", 
      "Feta Sir", "Masline", "Pita Hleb", "Caciki", "Dolmades", 
      "Ratatuj", "Paela", "Gaspačo", "Brusketa", "Kaprese", 
      "Musaka", "Suvlaki", "Pasta Putaneska", "Morski Plodovi Rizoto", "Baklava"
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
      "Cezar Salata", "Grčka Salata", "Kaprese Salata", "Valdorf Salata", "Kob Salata", 
      "Nisoaz Salata", "Tabuleh", "Fatuš", "Kinoa Salata", "Kej Salata", 
      "Spanać Salata", "Rukola Salata", "Krompir Salata", "Kupus Salata", "Voćna Salata", 
      "Pasta Salata", "Pileća Salata", "Tuna Salata", "Bašta Salata", "Kuvarska Salata"
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
      "Pileća Supa", "Paradajz Supa", "Povrće Supa", "Pečurka Supa", "Luk Supa", 
      "Minestrone", "Sočivo Supa", "Grašak Supa", "Školjka Čorba", "Gaspačo", 
      "Borš", "Miso Supa", "Fo", "Ramen", "Ljuta i Kisela Supa", 
      "Krem od Brokolija", "Goveđi Gulaš", "Riblja Supa", "Kukuruz Čorba", "Krompir Supa"
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
      "Kinoa Činija", "Tofu na Tiganju", "Vegetarijanski Burger", "Sočivo Kari", "Leblebije Salata", 
      "Veganska Pica", "Smuti Činija", "Chia Puding", "Avokado Tost", "Buddha Činija", 
      "Veganska Pasta", "Povrće Vrap", "Biljni Protein", "Kokos Kari", "Veganski Suši", 
      "Sirova Salata", "Voćna Činija", "Povrće Supa", "Veganski Dezert", "Biljno Mleko"
    ]
  },
  {
    id: "vegetarian",
    name: "Vegeterijanska hrana",
    foods: [
      "Povrće Kari", "Kaprese Salata", "Pečurka Rizoto", "Vegetarijanski Burger", "Falafel", 
      "Grčka Salata", "Margherita Pica", "Pasta Primavera", "Punjene Paprike", "Ratatuj", 
      "Povrće na Tiganju", "Kinoa Salata", "Omlet sa Sirom", "Povrće Vrap", "Humus", 
      "Spanać Lazanja", "Povrće Supa", "Plavi Patlidžan Parmezan", "Povrće Takos", "Buddha Činija"
    ]
  },
  {
    id: "waffles",
    name: "Vafli",
    foods: [
      "Belgijski Vafli", "Američki Vafli", "Piletina i Vafli", "Jagoda Vafli", "Čokolada Vafli", 
      "Borovnica Vafli", "Banana Vafli", "Pekan Vafli", "Cimet Vafli", "Protein Vafli", 
      "Vafli bez Glutena", "Veganski Vafli", "Sladoled Vafli", "Slani Vafli", "Mini Vafli", 
      "Vafl Sunde", "Javorov Sirup Vafli", "Puter Vafli", "Krem Vafli", "Voćni Vafli"
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