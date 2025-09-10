import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dice6, Utensils, Clock, Sparkles } from "lucide-react";
import logoImage from "@/assets/stadajedemlogo.png";
import { foodCategories, FoodCategory } from "@/data/foodData";
import { FoodCard } from "./FoodCard";
import { Banner } from "./Banner";
import { LoadingSpinner } from "./LoadingSpinner";

export const FoodGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("random");
  const [currentFood, setCurrentFood] = useState<string>("");
  const [currentCategoryName, setCurrentCategoryName] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const generateRandomFood = async () => {
    setIsGenerating(true);
    setHasGenerated(false);
    
    // Simulate anticipation with loading time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    let category: FoodCategory;
    
    if (selectedCategory === "random") {
      // Pick random category
      const randomCategoryIndex = Math.floor(Math.random() * foodCategories.length);
      category = foodCategories[randomCategoryIndex];
    } else {
      // Find selected category
      category = foodCategories.find(cat => cat.id === selectedCategory)!;
    }
    
    // Pick random food from category
    const randomFoodIndex = Math.floor(Math.random() * category.foods.length);
    const randomFood = category.foods[randomFoodIndex];
    
    setCurrentFood(randomFood);
    setCurrentCategoryName(category.name);
    setIsGenerating(false);
    setHasGenerated(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-food-bg to-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoImage} alt="Šta da jedem logo" className="w-16 h-16" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              ŠTA DA JEDEM?
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Otkrijte nova jela sa našim random generatorom. 
            Birajte kategoriju ili pustite slučaju da odluči!
          </p>
        </div>

        {/* Controls */}
        <Card className="food-card mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Sparkles className="w-6 h-6 text-primary" />
              Izaberite kategoriju
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full text-lg py-6">
                <SelectValue placeholder="Izaberite kuhinju..." />
              </SelectTrigger>
              <SelectContent className="max-h-80">
                <SelectItem value="random" className="text-lg py-3">
                  <div className="flex items-center gap-2">
                    <Dice6 className="w-5 h-5" />
                    Nasumično
                  </div>
                </SelectItem>
                {foodCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id} className="text-lg py-3">
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={generateRandomFood}
              disabled={isGenerating}
              size="lg"
              className="w-full py-6 text-xl font-semibold gradient-primary hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {isGenerating ? (
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 animate-spin" />
                  Tražim savršeno jelo...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Dice6 className="w-6 h-6" />
                  Generiši jelo
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isGenerating && (
          <div className="flex justify-center mb-8">
            <LoadingSpinner />
          </div>
        )}

        {/* Generated Food */}
        {hasGenerated && !isGenerating && currentFood && (
          <div className="space-y-6 animate-fade-in">
            <FoodCard 
              foodName={currentFood} 
              categoryName={currentCategoryName} 
            />
            <Banner categoryId={selectedCategory === "random" ? 
              foodCategories.find(cat => cat.name === currentCategoryName)?.id || "random" : 
              selectedCategory
            } />
          </div>
        )}

        {/* Welcome Message */}
        {!hasGenerated && !isGenerating && (
          <div className="text-center py-16 animate-bounce-gentle">
            <img src={logoImage} alt="Šta da jedem logo" className="w-32 h-32 mx-auto mb-6 opacity-50" />
            <p className="text-2xl text-muted-foreground">
              Kliknite "Generiši jelo" da počnete!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};