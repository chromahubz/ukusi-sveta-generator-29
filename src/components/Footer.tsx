import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/stadajedemlogo.png";

const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Početna" },
    { to: "/recepti", label: "Recepti" },
    { to: "/blog", label: "Blog" },
    { to: "/lista-hrane", label: "Lista hrane" },
    { to: "/meal-prep", label: "Meal prep" },
  ];

  const categories = [
    "Pileći recepti",
    "Krilca",
    "Wrap-ovi", 
    "Vegetarijanski",
    "Italijanski",
    "Azijski"
  ];

  return (
    <footer className="bg-background border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="Šta da jedem logo" className="w-8 h-8" />
              <span className="font-bold text-lg">ŠTA DA JEDEM?</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Vaš ultimativni generator hrane i kuhar asistent. Otkrijte nova jela, 
              planirajte obroke i uživajte u kuvanju!
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Napravljeno sa</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>za ljubitelje hrane</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Brzi linkovi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Popularne kategorije</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link 
                    to="/recepti" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@stadajedem.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+381 11 123 4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Beograd, Srbija</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Šta da jedem. Sva prava zadržana.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privatnost
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Uslovi korišćenja
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;