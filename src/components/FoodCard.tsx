import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Clock, Users, ChefHat } from "lucide-react";
import { getRecipe } from "@/data/recipes";

interface FoodCardProps {
  foodName: string;
  categoryName: string;
}

export const FoodCard = ({ foodName, categoryName }: FoodCardProps) => {
  const recipe = getRecipe(foodName);
  
  return (
    <Card className="food-card animate-scale-in">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ChefHat className="w-6 h-6 text-primary" />
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {categoryName}
          </Badge>
          <ChefHat className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Vaše jelo je:
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="relative">
          <div className="relative gradient-card rounded-lg p-8 border-2 border-primary/20">
            <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {foodName}
            </h2>
          </div>
        </div>

        {/* Recipe Section */}
        <div className="bg-secondary/50 rounded-lg p-6 text-left space-y-4">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
            <ChefHat className="w-6 h-6" />
            Recept
          </h3>
          
          {/* Recipe Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Priprema: {recipe.prepTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Kuvanje: {recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Porcije: {recipe.servings}</span>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Sastojci:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary text-xs mt-1">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h4 className="font-semibold text-foreground mb-2">Priprema:</h4>
            <ol className="space-y-2 text-sm text-muted-foreground">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};