import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ShoppingCart, Clock, Users, Trash2, Plus, Download } from "lucide-react";
import { recipes } from "@/data/recipes";
import { wingsRecipes } from "@/data/wings-recipes";
import { wrapsRecipes } from "@/data/wraps-recipes";

interface MealPlan {
  [key: string]: {
    breakfast?: string;
    lunch?: string;
    dinner?: string;
  };
}

const MealPrep = () => {
  const [mealPlan, setMealPlan] = useState<MealPlan>({});
  const [groceryList, setGroceryList] = useState<string[]>([]);
  const [customItem, setCustomItem] = useState("");

  // Combine all recipes
  const allRecipes = { ...recipes, ...wingsRecipes, ...wrapsRecipes };
  const recipeNames = Object.keys(allRecipes);

  const days = ['Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota', 'Nedelja'];
  const meals = ['breakfast', 'lunch', 'dinner'];
  const mealNames = { breakfast: 'Doručak', lunch: 'Ručak', dinner: 'Večera' };

  // Generate weekly meal plan
  const generateWeeklyPlan = () => {
    const newPlan: MealPlan = {};
    days.forEach(day => {
      newPlan[day] = {
        breakfast: recipeNames[Math.floor(Math.random() * recipeNames.length)],
        lunch: recipeNames[Math.floor(Math.random() * recipeNames.length)],
        dinner: recipeNames[Math.floor(Math.random() * recipeNames.length)]
      };
    });
    setMealPlan(newPlan);
    generateGroceryList(newPlan);
  };

  // Generate grocery list from meal plan
  const generateGroceryList = (plan: MealPlan) => {
    const ingredients = new Set<string>();
    
    Object.values(plan).forEach(dayMeals => {
      Object.values(dayMeals).forEach(recipeName => {
        if (recipeName && allRecipes[recipeName]) {
          allRecipes[recipeName].ingredients.forEach(ingredient => {
            ingredients.add(ingredient);
          });
        }
      });
    });
    
    setGroceryList(Array.from(ingredients).sort());
  };

  // Add custom item to grocery list
  const addCustomItem = () => {
    if (customItem.trim() && !groceryList.includes(customItem.trim())) {
      setGroceryList([...groceryList, customItem.trim()].sort());
      setCustomItem("");
    }
  };

  // Remove item from grocery list
  const removeFromGroceryList = (item: string) => {
    setGroceryList(groceryList.filter(i => i !== item));
  };

  // Set specific meal for a day
  const setMeal = (day: string, mealType: string, recipeName: string) => {
    const newPlan = {
      ...mealPlan,
      [day]: {
        ...mealPlan[day],
        [mealType]: recipeName
      }
    };
    setMealPlan(newPlan);
    generateGroceryList(newPlan);
  };

  // Clear meal plan
  const clearPlan = () => {
    setMealPlan({});
    setGroceryList([]);
  };

  // Export grocery list
  const exportGroceryList = () => {
    const text = "LISTA ZA KUPOVINU:\n\n" + groceryList.map(item => `• ${item}`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lista-za-kupovinu.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-food-bg to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            MEAL PREP
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planirajte svoje obroke za celu nedelju i generirajte listu za kupovinu
          </p>
        </div>

        {/* Control Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Planer obroka
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button onClick={generateWeeklyPlan} size="lg" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Generiši nedeljni plan
              </Button>
              <Button onClick={clearPlan} variant="outline" size="lg" className="flex items-center gap-2">
                <Trash2 className="w-4 h-4" />
                Obriši plan
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Meal Plan */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Nedeljni plan obroka</CardTitle>
              </CardHeader>
              <CardContent>
                {days.length > 0 && Object.keys(mealPlan).length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Kliknite "Generiši nedeljni plan" da počnete</p>
                  </div>
                )}
                
                <div className="space-y-6">
                  {days.map(day => (
                    <div key={day}>
                      <h3 className="font-semibold text-lg mb-3">{day}</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {meals.map(mealType => (
                          <div key={mealType} className="space-y-2">
                            <h4 className="font-medium text-sm text-muted-foreground">
                              {mealNames[mealType as keyof typeof mealNames]}
                            </h4>
                            <Select
                              value={mealPlan[day]?.[mealType as keyof typeof mealPlan[typeof day]] || ""}
                              onValueChange={(value) => setMeal(day, mealType, value)}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Izaberite jelo..." />
                              </SelectTrigger>
                              <SelectContent className="max-h-60">
                                {recipeNames.map(recipeName => (
                                  <SelectItem key={recipeName} value={recipeName}>
                                    {recipeName}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {mealPlan[day]?.[mealType as keyof typeof mealPlan[typeof day]] && (
                              <div className="text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {allRecipes[mealPlan[day][mealType as keyof typeof mealPlan[typeof day]]!]?.prepTime || "N/A"}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  {allRecipes[mealPlan[day][mealType as keyof typeof mealPlan[typeof day]]!]?.servings || "N/A"} porcija
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      {day !== days[days.length - 1] && <Separator className="mt-6" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grocery List */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Lista za kupovinu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Dodaj stavku..."
                    value={customItem}
                    onChange={(e) => setCustomItem(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
                  />
                  <Button onClick={addCustomItem} size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                {groceryList.length > 0 && (
                  <>
                    <Button 
                      onClick={exportGroceryList} 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Izvezi listu
                    </Button>
                    
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {groceryList.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-secondary/50 rounded">
                          <span className="text-sm">{item}</span>
                          <Button
                            onClick={() => removeFromGroceryList(item)}
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    
                    <Badge variant="secondary" className="w-full justify-center">
                      Ukupno: {groceryList.length} stavki
                    </Badge>
                  </>
                )}

                {groceryList.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <ShoppingCart className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Lista je prazna</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Meal Prep Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Saveti za meal prep</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Planirajte unapred - subotom za sledeću nedelju</li>
                  <li>• Koristite iste sastojke u više jela</li>
                  <li>• Priremite sastojke unapred (seckanje, mariniranje)</li>
                  <li>• Investirajte u kvalitetne kontejnere za čuvanje</li>
                  <li>• Ostavite jedan dan za ostatke</li>
                  <li>• Duplirajte recepte i zamrznite polovinu</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPrep;