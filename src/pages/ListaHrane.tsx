import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Globe, Coffee, Cookie, Leaf } from "lucide-react";

const cuisineFoods = {
  italian: [
    "Pizza Margherita", "Spaghetti Carbonara", "Risotto alla Milanese", "Lasagne", "Gnocchi",
    "Osso Buco", "Tiramisu", "Gelato", "Bruschetta", "Parmigiana", "Prosciutto", "Mozzarella",
    "Pesto Genovese", "Ravioli", "Foccacia", "Cannoli", "Panettone", "Limoncello"
  ],
  japanese: [
    "Sushi", "Ramen", "Tempura", "Yakitori", "Miso Soup", "Udon", "Soba", "Donburi",
    "Katsu", "Takoyaki", "Okonomiyaki", "Mochi", "Wasabi", "Sake", "Edamame", "Onigiri",
    "Teriyaki", "Gyoza", "Shabu-shabu", "Wagyu", "Matcha", "Dango"
  ],
  mexican: [
    "Tacos", "Burritos", "Quesadillas", "Guacamole", "Nachos", "Enchiladas", "Tamales",
    "Fajitas", "Salsa", "Mole", "Chiles Rellenos", "Pozole", "Churros", "Tres Leches",
    "Carnitas", "Ceviche", "Elote", "Tequila", "Mezcal", "Horchata"
  ],
  greek: [
    "Moussaka", "Souvlaki", "Greek Salad", "Tzatziki", "Dolmades", "Spanakopita",
    "Gyros", "Baklava", "Feta", "Olives", "Ouzo", "Retsina", "Avgolemono",
    "Pastitsio", "Kleftiko", "Fasolada", "Galaktoboureko", "Loukoumades"
  ],
  serbian: [
    "Ćevapi", "Pljeskavica", "Sarma", "Kajmak", "Ajvar", "Rakija", "Gibanica",
    "Burek", "Roštilj", "Karađorđeva šnicla", "Prebranac", "Kompot", "Slivovitz",
    "Pogača", "Vampe", "Leskovački uštipci", "Đuveč", "Urnebes"
  ]
};

const desserts = [
  "Chocolate Cake", "Tiramisu", "Cheesecake", "Apple Pie", "Ice Cream", "Brownies",
  "Cookies", "Donuts", "Macarons", "Éclair", "Crème Brûlée", "Panna Cotta",
  "Baklava", "Strudel", "Trifle", "Mousse", "Soufflé", "Profiteroles"
];

const snacks = [
  "Chips", "Popcorn", "Nuts", "Crackers", "Pretzels", "Granola Bars",
  "Trail Mix", "Cheese & Crackers", "Fruit", "Yogurt", "Smoothies",
  "Energy Balls", "Rice Cakes", "Hummus & Veggies", "Olives"
];

const drinks = [
  "Coffee", "Tea", "Water", "Soda", "Juice", "Smoothie", "Beer", "Wine",
  "Cocktails", "Energy Drinks", "Sports Drinks", "Milk", "Hot Chocolate",
  "Lemonade", "Iced Tea", "Kombucha", "Sparkling Water"
];

const breakfast = [
  "Pancakes", "Eggs", "Bacon", "Toast", "Cereal", "Oatmeal", "Yogurt",
  "Fruit", "Croissant", "Bagel", "Muffin", "Waffles", "French Toast",
  "Smoothie Bowl", "Granola", "Hash Browns"
];

const ingredients = {
  spices: [
    "Salt", "Black Pepper", "Paprika", "Cumin", "Oregano", "Basil", "Thyme",
    "Rosemary", "Garlic Powder", "Onion Powder", "Chili Powder", "Cayenne",
    "Turmeric", "Ginger", "Cinnamon", "Nutmeg", "Cardamom", "Cloves"
  ],
  fruits: [
    "Apple", "Banana", "Orange", "Lemon", "Lime", "Strawberry", "Blueberry",
    "Raspberry", "Grapes", "Pineapple", "Mango", "Peach", "Pear", "Cherry",
    "Watermelon", "Kiwi", "Avocado", "Coconut"
  ],
  vegetables: [
    "Tomato", "Onion", "Garlic", "Carrot", "Potato", "Bell Pepper", "Cucumber",
    "Lettuce", "Spinach", "Broccoli", "Cauliflower", "Zucchini", "Eggplant",
    "Mushroom", "Cabbage", "Celery", "Corn", "Peas"
  ],
  meats: [
    "Chicken", "Beef", "Pork", "Lamb", "Turkey", "Duck", "Fish", "Salmon",
    "Tuna", "Shrimp", "Crab", "Lobster", "Bacon", "Ham", "Sausage", "Ground Beef"
  ]
};

const ListaHrane = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("italian");

  const filterItems = (items: string[]) => {
    return items.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const FoodGrid = ({ items, title, icon }: { items: string[], title: string, icon: React.ReactNode }) => {
    const filteredItems = filterItems(items);
    
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            {title} ({filteredItems.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {filteredItems.map((item, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {item}
              </Badge>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <p className="text-muted-foreground text-center py-4">
              Nema rezultata za "{searchTerm}"
            </p>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-food-bg to-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            LISTA HRANE
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kompletna lista hrane organizovana po kuhinjama, kategorijama i sastojcima
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Pretražite hranu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="cuisines" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cuisines">Kuhinje</TabsTrigger>
            <TabsTrigger value="categories">Kategorije</TabsTrigger>
            <TabsTrigger value="ingredients">Sastojci</TabsTrigger>
            <TabsTrigger value="random">Random liste</TabsTrigger>
          </TabsList>

          <TabsContent value="cuisines" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Izaberite kuhinju" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="italian">Italijanska</SelectItem>
                    <SelectItem value="japanese">Japanska</SelectItem>
                    <SelectItem value="mexican">Meksička</SelectItem>
                    <SelectItem value="greek">Grčka</SelectItem>
                    <SelectItem value="serbian">Srpska</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
            
            <FoodGrid 
              items={cuisineFoods[selectedCuisine as keyof typeof cuisineFoods] || []} 
              title={`${selectedCuisine.charAt(0).toUpperCase() + selectedCuisine.slice(1)} hrana`}
              icon={<Globe className="w-5 h-5" />}
            />
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FoodGrid 
                items={desserts} 
                title="Deserti" 
                icon={<Cookie className="w-5 h-5" />}
              />
              <FoodGrid 
                items={snacks} 
                title="Snack-ovi" 
                icon={<Cookie className="w-5 h-5" />}
              />
              <FoodGrid 
                items={drinks} 
                title="Napici" 
                icon={<Coffee className="w-5 h-5" />}
              />
              <FoodGrid 
                items={breakfast} 
                title="Doručak" 
                icon={<Coffee className="w-5 h-5" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="ingredients" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <FoodGrid 
                items={ingredients.spices} 
                title="Začini" 
                icon={<Leaf className="w-5 h-5" />}
              />
              <FoodGrid 
                items={ingredients.fruits} 
                title="Voće" 
                icon={<Leaf className="w-5 h-5" />}
              />
              <FoodGrid 
                items={ingredients.vegetables} 
                title="Povrće" 
                icon={<Leaf className="w-5 h-5" />}
              />
              <FoodGrid 
                items={ingredients.meats} 
                title="Meso" 
                icon={<Leaf className="w-5 h-5" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="random" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Random lista začina</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.spices.sort(() => 0.5 - Math.random()).slice(0, 10).map((spice, index) => (
                      <Badge key={index} variant="secondary">{spice}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Random lista voća</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.fruits.sort(() => 0.5 - Math.random()).slice(0, 8).map((fruit, index) => (
                      <Badge key={index} variant="secondary">{fruit}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Random lista povrća</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.vegetables.sort(() => 0.5 - Math.random()).slice(0, 10).map((vegetable, index) => (
                      <Badge key={index} variant="secondary">{vegetable}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Random lista mesa</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.meats.sort(() => 0.5 - Math.random()).slice(0, 8).map((meat, index) => (
                      <Badge key={index} variant="secondary">{meat}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ListaHrane;