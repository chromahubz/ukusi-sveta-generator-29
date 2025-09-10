import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Clock, Sparkles } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <Card className="food-card animate-pulse-glow">
      <CardContent className="p-8 text-center">
        <div className="space-y-6">
          {/* Animated Icons */}
          <div className="flex justify-center items-center gap-4">
            <Utensils className="w-8 h-8 text-primary animate-bounce-gentle" />
            <Clock className="w-10 h-10 text-primary animate-spin-slow" />
            <Sparkles className="w-8 h-8 text-primary animate-bounce-gentle" />
          </div>
          
          {/* Loading Text */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary animate-pulse">
              Tražim savršeno jelo za vas...
            </h3>
            <p className="text-muted-foreground">
              Molimo sačekajte par sekundi
            </p>
          </div>
          
          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          
          {/* Fun Loading Messages */}
          <div className="text-sm text-muted-foreground animate-fade-in">
            <p>Prolazim kroz hiljadu recepata... 👨‍🍳</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};