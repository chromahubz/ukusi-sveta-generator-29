import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Book, FileText, List, Calendar } from "lucide-react";
import logoImage from "@/assets/stadajedemlogo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Početna", icon: Home },
    { to: "/recepti", label: "Recepti", icon: Book },
    { to: "/blog", label: "Blog", icon: FileText },
    { to: "/lista-hrane", label: "Lista hrane", icon: List },
    { to: "/meal-prep", label: "Meal prep", icon: Calendar },
  ];

  const NavLink = ({ to, label, icon: Icon, mobile = false }: { 
    to: string; 
    label: string; 
    icon: any; 
    mobile?: boolean;
  }) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to} onClick={() => mobile && setIsOpen(false)}>
        <Button
          variant={isActive ? "default" : "ghost"}
          className={`${mobile ? "w-full justify-start" : ""} flex items-center gap-2`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </Button>
      </Link>
    );
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="Šta da jedem logo" className="w-8 h-8" />
          <span className="font-bold text-lg hidden sm:inline">ŠTA DA JEDEM?</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImage} alt="Šta da jedem logo" className="w-8 h-8" />
              <span className="font-bold text-lg">ŠTA DA JEDEM?</span>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink key={item.to} {...item} mobile />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navigation;