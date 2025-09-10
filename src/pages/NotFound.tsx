import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-food-bg to-background flex items-center justify-center p-4">
      <Card className="food-card max-w-md w-full animate-scale-in">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="w-16 h-16 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold text-primary mb-2">404</CardTitle>
          <p className="text-xl text-muted-foreground">Stranica nije pronađena</p>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Izgleda da ste se izgubili. Vratite se na početnu stranicu da nastavite sa biranjem jela.
          </p>
          <Button asChild size="lg" className="gradient-primary hover:shadow-lg transition-all duration-300">
            <a href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Početna strana
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
