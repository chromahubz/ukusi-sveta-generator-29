import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Users, ChefHat } from "lucide-react";
import { recipes, Recipe } from "@/data/recipes";
import { wingsRecipes } from "@/data/wings-recipes";
import { wrapsRecipes } from "@/data/wraps-recipes";

const Recepti = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Combine all recipes - wrapsRecipes is an array, so convert to object with type compatibility
  const wrapsAsObject = wrapsRecipes.reduce((acc, recipe, index) => {
    acc[recipe.name] = {
      ...recipe,
      servings: typeof recipe.servings === 'string' ? parseInt(recipe.servings) || 1 : recipe.servings
    };
    return acc;
  }, {} as Record<string, Recipe>);

  const allRecipes = { ...recipes, ...wingsRecipes, ...wrapsAsObject };
  
  // Get unique categories from recipe names and data structure
  const categories = [
    "all",
    "pileci", "govedji", "riblji", "vegetarijanski", "vegan",
    "italian", "asian", "mexican", "greek", "serbian",
    "wings", "wraps", "salads", "desserts"
  ];

  const filteredRecipes = Object.entries(allRecipes).filter(([key, recipe]) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (recipe.description && recipe.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedCategory === "all") return matchesSearch;
    
    // Simple category matching based on recipe name/key
    const keyLower = key.toLowerCase();
    const nameLower = recipe.name.toLowerCase();
    
    switch (selectedCategory) {
      case "pileci":
        return matchesSearch && (keyLower.includes("chicken") || keyLower.includes("pileci") || nameLower.includes("chicken") || nameLower.includes("pileci"));
      case "wings":
        return matchesSearch && (keyLower.includes("wings") || keyLower.includes("kril") || nameLower.includes("wings") || nameLower.includes("kril"));
      case "wraps":
        return matchesSearch && (keyLower.includes("wrap") || nameLower.includes("wrap"));
      case "vegetarijanski":
        return matchesSearch && (keyLower.includes("veggie") || keyLower.includes("vegetarian") || nameLower.includes("veggie"));
      case "vegan":
        return matchesSearch && (keyLower.includes("vegan") || nameLower.includes("vegan"));
      case "italian":
        return matchesSearch && (keyLower.includes("italian") || keyLower.includes("pasta") || nameLower.includes("italian"));
      default:
        return matchesSearch;
    }
  });

  const RecipeCard = ({ recipe, recipeKey }: { recipe: Recipe; recipeKey: string }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
          <CardHeader className="pb-3">
            <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
              {recipe.name}
            </CardTitle>
            {recipe.description && (
              <p className="text-sm text-muted-foreground line-clamp-2">
                {recipe.description}
              </p>
            )}
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{recipe.servings} porcija</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-2">{recipe.name}</DialogTitle>
          {recipe.description && (
            <p className="text-muted-foreground">{recipe.description}</p>
          )}
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <ChefHat className="w-5 h-5" />
              Sastojci
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Uputstvo</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <Badge variant="outline" className="flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <span className="text-sm leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span><strong>Priprema:</strong> {recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span><strong>Kuvanje:</strong> {recipe.cookTime || "N/A"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span><strong>Porcije:</strong> {recipe.servings}</span>
          </div>
        </div>
        
        {recipe.notes && recipe.notes.length > 0 && (
          <>
            <Separator className="my-4" />
            <div>
              <h4 className="font-semibold mb-2">Napomene:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {recipe.notes.map((note, index) => (
                  <li key={index}>• {note}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-food-bg to-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            RECEPTI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Otkrijte našu kolekciju od preko {Object.keys(allRecipes).length} recepata iz različitih kuhinja sveta
          </p>
        </div>

        {/* Search and Filter Controls */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Pretražite recepte..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Kategorija" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Svi recepti</SelectItem>
                  <SelectItem value="pileci">Pileći</SelectItem>
                  <SelectItem value="wings">Krilca</SelectItem>
                  <SelectItem value="wraps">Wrap-ovi</SelectItem>
                  <SelectItem value="vegetarijanski">Vegetarijanski</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="italian">Italijanski</SelectItem>
                  <SelectItem value="asian">Azijski</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Prikazano {filteredRecipes.length} od {Object.keys(allRecipes).length} recepata
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map(([key, recipe]) => (
            <RecipeCard key={key} recipe={recipe} recipeKey={key} />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-muted-foreground">
              Nema rezultata za "{searchTerm}" u kategoriji {selectedCategory}
            </p>
            <Button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
              variant="outline"
              className="mt-4"
            >
              Obrišite filtere
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recepti;