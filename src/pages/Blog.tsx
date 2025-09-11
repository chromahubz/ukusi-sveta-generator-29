import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Heart, Share2 } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Easy Meals You Can Cook from Random Ingredients",
    excerpt: "Otkrijte kako možete napraviti ukusna jela od sastojaka koje već imate kod kuće.",
    author: "Šta da jedem tim",
    date: "2024-01-15",
    readTime: "5 min čitanja",
    category: "Saveti",
    content: `
# Top 10 Easy Meals You Can Cook from Random Ingredients

Često se dešava da otvorite frižider i pitate se "šta da jedem" gledajući ono što imate kod kuće. Umesto da trošite vreme i novac na odlazak u prodavnicu, evo 10 jednostavnih jela koje možete napraviti od osnovnih sastojaka:

## 1. Pasta Aglio e Olio
**Potrebno**: Pasta, beli luk, maslinovo ulje, čili papričice, peršun
Klasično italijansko jelo koje možete napraviti za 15 minuta. Samo propržite beli luk u maslinovom ulju, dodajte kuvanu pastu i začine.

## 2. Omlet sa povrćem
**Potrebno**: Jaja, bilo koje povrće, sir (opciono)
Omlet je savršen za korišćenje ostataka povrća. Možete dodati šargarepu, papriku, spanać ili bilo šta drugo što imate.

## 3. Pirinač sa povrćem
**Potrebno**: Pirinač, zamrznuto ili sveže povrće, soja sos
Jednostavan wok stil jelo koje možete personalizovati sa bilo kojim povrćem i začinima.

## 4. Krem supa od povrća
**Potrebno**: Bilo koje povrće, bujion, pavlaka
Skuvajte povrće u bujonu, blendajte i dodajte pavlaku za kremastost.

## 5. Quesadilla
**Potrebno**: Tortilje, sir, bilo koji ostatak mesa ili povrća
Složite sastojke između tortilji i pržite dok se sir ne otopi.

## 6. Jaja na oko sa krompirićima
**Potrebno**: Jaja, kuvani krompir, luk
Klasična kombinacija koja nikad ne izlazi iz mode.

## 7. Pasta sa paradajzom
**Potrebno**: Pasta, konzervirani paradajz, beli luk, bosiljak
Osnovni napoletana sos koji možete napraviti za 20 minuta.

## 8. Sandwich sa ostatcima
**Potrebno**: Hleb, bilo koji ostatak mesa, sir, salata
Kreativno koristite ono što imate u frižideru.

## 9. Salata sa proteinima
**Potrebno**: Zelena salata, konzervirane leguminoze ili ostatak mesa
Zdrava opcija koja se brzo pravi.

## 10. Noodles sa soja sosom
**Potrebno**: Instant testo, jaje, povrće, soja sos
Azijski stil jelo koje možete napraviti za 10 minuta.

## Zaključak
Najvažnije je da budete kreativni i ne bojite se eksperimentisanja. Najbolja jela često nastaju slučajno!
    `
  },
  {
    id: 2,
    title: "Why Random Food Generators Are Great for Meal Planning",
    excerpt: "Saznajte zašto je random generator hrane odličan alat za planiranje obroka i kako može da vam uštedi vreme.",
    author: "Šta da jedem tim",
    date: "2024-01-10",
    readTime: "4 min čitanja",
    category: "Planiranje",
    content: `
# Why Random Food Generators Are Great for Meal Planning

Planiranje obroka može biti naporno, posebno kada svaki dan morate da donosite odluke o tome šta da kuvate. Evo zašto je random generator hrane odličan alat:

## Eliminiše "decision fatigue"
Svakodnevno donošenje odluka o hrani može biti iscrpljujuće. Random generator vam olakšava proces i uklanja stres od biranja.

## Introdukuje raznolikost
Često se držimo iste grupe jela. Generator vas tera da probate nova jela i kuhinje koje inače ne biste razmotrili.

## Štedi vreme
Umesto da provodite 20 minuta listajući recepte online, generator vam da ideju za sekunde.

## Pomaže sa budžetom
Kada znate unapred šta ćete kuvati, možete efikasnije da kupujete namirnice i smanjite bacanje hrane.

## Motiviše kreativnost
Nasumičan izbor vas može inspirisati da eksperimentišete sa novim kombinacijama i tehnikama kuvanja.

## Savršen je za grupe
Kada ne možete da se odlučite sa porodicom ili cimерима, pustite generatoru da odluči umesto vas.

## Kako maksimalno iskoristiti generator:
1. Koristite ga na početku nedelje za planiranje
2. Kombajnite sa vašim omiljenim receptima
3. Prilagodite predloge vašim ograničenjima
4. Budite otvoreni za nova iskustva

Generator hrane nije samo alat za lenje - to je smart pristup planiranju obroka!
    `
  },
  {
    id: 3,
    title: "Healthy Random Recipes When You Don't Know What to Eat",
    excerpt: "Zdravi recepti koji će vam pomoći kada ne znate šta da jedete, a želite da se hranite zdravo.",
    author: "Nutritionist Marija",
    date: "2024-01-08",
    readTime: "6 min čitanja",
    category: "Zdravlje",
    content: `
# Healthy Random Recipes When You Don't Know What to Eat

Kada pokušavate da se hranite zdravo, često može biti teško da pronađete inspiraciju. Evo zdravih opcija za svaki obrok:

## Doručak opcije:

### Overnight oats sa voćem
- 1/2 šolje ovsenih pahuljica
- 1/2 šolje biljnog mleka
- 1 kašika čia semenki
- Voće po izboru
- Med ili agave sirup

### Avokado toast
- Integralni hleb
- 1/2 avokada
- Čeri paradajz
- Limunov sok
- So i biber

## Ručak opcije:

### Quinoa bowl
- Kuvana quinoa
- Pečeno povrće
- Humus
- Zeleno lisnato povrće
- Tahini dresing

### Zupa od leguminoza
- Crni pasulj ili sočivo
- Povrće
- Vegetarijanski bujion
- Začini

## Večera opcije:

### Pečena riba sa povrćem
- Bijeli riba filet
- Sezonsko povrće
- Maslinovo ulje
- Limun i začini

### Vegetarijanski curry
- Kokosovo mleko
- Povrće po sezoni
- Curry pasta
- Pirinač od karfiola

## Zdravi snack-ovi:
- Grčki jogurt sa orasima
- Hummus sa štapićima povrća
- Smoothie od zelenog povrća
- Pečeni leblebije

## Saveti za zdravu hranu:
1. Uvek imajte zdrave opcije pri ruci
2. Fokusirajte se na celo, neprерađeno povrće
3. Uključite proteine u svaki obrok
4. Ne zaboravite na zdrave masti
5. Pijte dovoljno vode

Zdrava hrana ne mora biti dosadna - eksperimentišite sa začinima i kombinacijama!
    `
  },
  {
    id: 4,
    title: "Fun Party Games with a Random Food Generator",
    excerpt: "Kreativne igre koje možete igrati sa prijateljima koristeći random generator hrane.",
    author: "Party planer Ana",
    date: "2024-01-05",
    readTime: "3 min čitanja",
    category: "Zabava",
    content: `
# Fun Party Games with a Random Food Generator

Random generator hrane može biti odličan alat za zabavu na žurkama! Evo nekoliko kreativnih igara:

## 1. Cooking Challenge
Svaki igrač generiše nasumično jelo i mora da ga napravi u ograničenom vremenu. Najbolje jelo pobeđuje!

## 2. Guess the Cuisine
Jedan igrač generiše jelo, a ostali pogađaju iz koje kuhinje dolazi. Prvi koji pogodi dobija poen.

## 3. Recipe Relay
Tim mora da generiše 5 jela i napravi meni za celu večeru. Ocenjuje se kreativnost i kombinacija.

## 4. Food Pictionary
Generiši jelo pa ga crtaj - ostali pogađaju šta je to!

## 5. Iron Chef Battle
Dva tima generišu isti sastojak i prave različita jela od njega.

## 6. Menu Roulette
Svaki gost generiše jelo koje mora da napravi za ostale goste.

## 7. Speed Dating sa hranom
Parovi generišu jela i razgovaraju o njima - odličan ледобран!

## 8. Food Trivia
Generiši jelo pa postavl питања о њему.

## Saveti za uspešnu party:
- Pripremite osnovne sastojke unapred
- Imajте nagrade za pobednike
- Fotografišite kreacije
- Vodite счет
- Budite fleksibilni sa pravilima

Generator hrane može transformisati običnu žurku u nezaboravno iskustvo!
    `
  }
];

const Blog = () => {
  const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group h-full">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('sr-RS')}
              </span>
            </div>
            <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </CardTitle>
            <p className="text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('sr-RS')}
            </span>
          </div>
          <DialogTitle className="text-2xl mb-2">{post.title}</DialogTitle>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <Separator className="my-4" />
        
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-food-bg to-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            BLOG
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Otkrijte korisne savete, trikove i inspiraciju za kuvanje i planiranje obroka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Želite da vidite više članaka?
          </p>
          <Button variant="outline" size="lg">
            Prijavite se za newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;