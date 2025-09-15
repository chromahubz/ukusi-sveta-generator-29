export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  metaDescription: string;
  content: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "top-10-jednostavnih-jela-od-nasumicnih-sastojaka",
    title: "Top 10 Jednostavnih Jela od Nasumičnih Sastojaka",
    excerpt: "Otkrijte kako možete napraviti ukusna jela od sastojaka koje već imate kod kuće.",
    author: "Šta da jedem tim",
    date: "2024-01-15",
    readTime: "5 min čitanja",
    category: "Saveti",
    tags: ["brza jela", "ostatci", "jednostavno kuvanje", "ekonomično"],
    metaDescription: "Naučite da napravite 10 ukusnih jela od sastojaka koje već imate kod kuće. Praktični saveti za jednostavno kuvanje bez odlaska u prodavnicu.",
    featured: true,
    content: `
# Top 10 Jednostavnih Jela od Nasumičnih Sastojaka

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
    slug: "brza-jela-za-studente-budget-recepti",
    title: "Brza Jela za Studente - 15 Budget Recepti",
    excerpt: "Jednostavni i jeftini recepti savršeni za studentski budžet i ograničeno vreme.",
    author: "Marija Stojanović",
    date: "2024-01-20",
    readTime: "7 min čitanja",
    category: "Budget kuvanje",
    tags: ["studentska hrana", "jeftini recepti", "brza jela", "budžet"],
    metaDescription: "15 brzih i jeftinih jela za studente. Ekonomični recepti koji se prave za 15-20 minuta sa osnovnim sastojcima.",
    content: `
# Brza Jela za Studente - 15 Budget Recepti

Studentski život ne mora da znači gladovanje ili hranjenjem brzom hranom. Evo 15 jednostavnih recepta koji neće pokvariti budžet:

## 1. Pasta sa tunjevinom i maslinama
*Cena po porciji: ~150 din*
- 100g paste
- 1 konzerva tunjevine
- Masline, paradajz
- Maslinovo ulje

## 2. Omlet sa sirom
*Cena po porciji: ~100 din*
- 3 jaja
- 50g sira
- Malo mleka
- Začini

## 3. Kuvani pirinač sa povrćem
*Cena po porciji: ~80 din*
- 1 šolja pirinča
- Zamrznuto povrće
- Soja sos

## 4. Sendvič sa jajem
*Cena po porciji: ~70 din*
- 2 kriške hleba
- 1 jaje
- Majonez
- Paradajz

## 5. Instant čorba poboljšana
*Cena po porciji: ~60 din*
- Instant čorba
- Jaje
- Zeleni luk
- Malo povrća

[Nastavak sa ostalih 10 recepta...]

## Saveti za štednju
- Kupujte osnovne namirnice na veliko
- Koristite sezonsko povrće
- Planirajte obroke unapred
- Delite troškove sa cimерима
    `
  },
  {
    id: 3,
    slug: "zdravi-obroci-za-mrsavljenje-recepti",
    title: "Zdravi Obroci za Mršavljenje - 20 Recepta",
    excerpt: "Ukusni i zdravi recepti koji će vam pomoći da izgubite kilograme bez gladovanja.",
    author: "Dr. Ana Petković",
    date: "2024-01-25",
    readTime: "10 min čitanja",
    category: "Zdravlje",
    tags: ["mršavljenje", "zdravi recepti", "dieta", "kalorije"],
    metaDescription: "20 zdravih recepata za mršavljenje. Ukusna jela sa malo kalorija koja će vam pomoći da izgubite težinu na zdrav način.",
    content: `
# Zdravi Obroci za Mršavljenje - 20 Recepta

Mršavljenje ne mora da bude sinonim za gladovanje. Evo 20 ukusnih i zasitnih jela sa malo kalorija:

## Doručkovi (200-300 kcal)

### 1. Ovsena kaša sa voćem
*Kalorije: 250*
- 40g ovsenih pahuljica
- 200ml bademovog mleka
- 100g bobičastog voća
- 1 kašika meda

### 2. Grčki jogurt sa orasima
*Kalorije: 280*
- 150g grčkog jogurta
- 20g oraha
- 1 kašička meda
- Cimet

## Ručkovi (300-400 kcal)

### 3. Salata sa piletinom
*Kalorije: 350*
- 100g pečene piletine
- Mešavina zelenih salata
- Čeri paradajz
- Maslinovo ulje (1 kašika)

### 4. Supa od leguminoza
*Kalorije: 320*
- 150g kuvanog pasulja
- Povrće (luk, šargarepa, celer)
- Začini

[Nastavak sa ostalim receptima...]

## Saveti za uspešno mršavljenje
- Jedite često, male porcije
- Pijte doveljen vode
- Kombinujte sa fizičkom aktivnošću
- Ne preskačete obroke
    `
  },
  {
    id: 4,
    slug: "recepti-bez-glutena-celijak-dijeta",
    title: "Recepti bez Glutena - Vodič za Celijak Dijetu",
    excerpt: "Kompletni vodič sa 25 recepata bez glutena za sve koji pate od celijakije ili netolerancije na gluten.",
    author: "Milica Jovanović",
    date: "2024-02-01",
    readTime: "12 min čitanja",
    category: "Specijalne dijete",
    tags: ["bez glutena", "celijakija", "zdrava hrana", "alergije"],
    metaDescription: "25 recepata bez glutena za celijak dijetu. Ukusna jela bez glutena koja su bezbedna za osobe sa celijakijom i netolerancijom na gluten.",
    content: `
# Recepti bez Glutena - Vodič za Celijak Dijetu

Celijakija ne mora da ograniči vaše kulinarske uživanje. Evo 25 ukusnih recepata potpuno bez glutena:

## Što trebate znati o glutenu
Gluten se nalazi u:
- Pšenici
- Ječmu
- Raži
- Spelti

## Sigurni sastojci:
- Pirinač
- Quinoa
- Kukuruz
- Krompir
- Sve vrste mesa i ribe
- Voće i povrće

## Doručkovi bez glutena

### 1. Palačinke od bademovog brašna
*Priprema: 15 min*
- 100g bademovog brašna
- 2 jaja
- 150ml bademovog mleka
- 1 kašika meda

### 2. Smoothie bowl sa voćem
*Priprema: 5 min*
- Smrznute banane
- Bobičasto voće
- Kokosovo mleko
- Chia semenke

## Glavna jela

### 3. Piletina sa pirinčem
*Priprema: 30 min*
- 150g pilećeg fileta
- 100g basmati pirinča
- Povrće po izboru
- Začini

[Nastavak sa ostalim receptima...]

## Saveti za bezbednu pripremu
- Koristite odvojene daske za sečenje
- Proverite sve etikete
- Pažljivo birajte začine
- Kupujte sertifikovane proizvode
    `
  },
  {
    id: 5,
    slug: "vegetarijanska-jela-za-pocetnike",
    title: "Vegetarijanska Jela za Početnike - 30 Recepata",
    excerpt: "Prelaziite na vegetarijansku ishranu? Počnite sa ovim jednostavnim i ukusnim receptima.",
    author: "Stefan Nikolić",
    date: "2024-02-05",
    readTime: "8 min čitanja",
    category: "Vegetarijanska hrana",
    tags: ["vegetarijanska hrana", "biljne beline", "zdrava ishrana", "početnici"],
    metaDescription: "30 vegetarijanskih recepata za početnike. Jednostavni prelazak na vegetarijansku ishranu sa ukusnim i hranljivim jelima.",
    featured: true,
    content: `
# Vegetarijanska Jela za Početnike - 30 Recepata

Prelazak na vegetarijansku ishranu može biti uzbudljiv i ukusan. Evo 30 jednostavnih recepata:

## Zašto vegetarijanska ishrana?
- Zdravija za srce
- Bolja za planetu
- Ekonomičnija
- Etična izbor

## Osnovni izvori biljnih belančevina:
- Leguminoze (pasulj, leća, slanutak)
- Tofu i tempeh
- Quinoa
- Orašasti plodovi
- Semenje

## Jednostavni recepti za početak

### 1. Pasta sa avokado sosom
*Priprema: 15 min*
- 100g integralnih paste
- 1 zreo avokado
- Čeri paradajz
- Bosiljak
- Beli luk

### 2. Čili sa crnim pasuljem
*Priprema: 30 min*
- 400g crnog pasulja
- Luk, paprika, paradajz
- Chili papričice
- Kumin, paprika

### 3. Quinoa salata
*Priprema: 20 min*
- 150g quinoa
- Krastavac, paradajz
- Feta sir
- Maslinovo ulje
- Limun

[Nastavak sa ostalim receptima...]

## Saveti za početak
- Počnite postupno
- Eksperimentirajte sa začinima
- Ne zaboravite vitamin B12
- Planirajte obroke unapred
    `
  },
  {
    id: 6,
    slug: "tradicionalna-srpska-kuhinja-autenticni-recepti",
    title: "Tradicionalna Srpska Kuhinja - 40 Autentičnih Recepata",
    excerpt: "Otkrijte bogastvo srpske gastronomije kroz tradicionalne recepte prenešene kroz generacije.",
    author: "Baba Milica",
    date: "2024-02-10",
    readTime: "15 min čitanja",
    category: "Tradicionalna kuhinja",
    tags: ["srpska kuhinja", "tradicionalni recepti", "domaće jelo", "kultura"],
    metaDescription: "40 autentičnih recepata srpske kuhinje. Tradicionalna jela kao što su ćevapi, sarme, gibanica i ajvar - pravi ukusi Srbije.",
    content: `
# Tradicionalna Srpska Kuhinja - 40 Autentičnih Recepata

Srpska kuhinja je spoj balkanskih, mediteranskih i srednjeevropskih uticaja. Evo najcenjenijih tradicionalnih jela:

## Mesna jela

### 1. Ćevapi (originalі)
*Priprema: 45 min + mariniranje*
- 500g mešanog mlevenog mesa
- Beli luk, so, biber
- Malo sode bikarbone
- Tradicija roštilji

### 2. Sarme u kiselom kupusu
*Priprema: 2 sata*
- Kiseli kupus
- Mleveno meso
- Pirinač
- Luk, paprika

### 3. Musaka od krompira
*Priprema: 1 sat*
- Krompir, mleveno meso
- Bešamel sos
- Sir za greniranje

## Slana peciva

### 4. Gibanica sa sirom
*Priprema: 1.5 sat*
- Jufka
- Mešavina sireva
- Jaja, pavlaka
- Ulje

### 5. Burek sa mesom
*Priprema: 2 sata*
- Jufka
- Mleveno meso
- Luk
- Začini

## Slatka jela

### 6. Baklava
*Priprema: 2 sata*
- Jufka
- Orahi
- Šećerni sirup
- Cimet

[Nastavak sa ostalim receptima...]

## Napomene o pripremi
- Koristite kvalitetne sastojke
- Ne žurite sa pripremom
- Sledite tradicionalne tehnike
- Uživajte u procesu
    `
  },
  {
    id: 7,
    slug: "mediteranska-dijeta-vodic-za-pocetnike",
    title: "Mediteranska Dijeta - Vodič za Početnike",
    excerpt: "Sve što trebate da znate o mediteranskoj dijeti i 25 recepata za zdrav život.",
    author: "Dr. Marko Petrović",
    date: "2024-02-15",
    readTime: "11 min čitanja",
    category: "Zdrava ishrana",
    tags: ["mediteranska dijeta", "zdrava ishrana", "maslinovo ulje", "riba"],
    metaDescription: "Kompletan vodič za mediteransku dijetu sa 25 recepata. Naučite prednosti i principles najzdravije dijete na svetu.",
    content: `
# Mediteranska Dijeta - Vodič za Početnike

Mediteranska dijeta je priznata kao jedna od najzdravijih na svetu. Evo zašto i kako da je primenite:

## Osnovni principi

### Što jesti često:
- Maslinovo ulje
- Ribu i morske plodove
- Voće i povrće
- Žitarice
- Leguminoze
- Orahe

### Što jesti umereno:
- Perad
- Jaja
- Mlečni proizvodi

### Što ograničiti:
- Crveno meso
- Prerađenu hranu
- Šećer

## Zdravstvene prednosti
- Smanjuje rizik od srčanih bolesti
- Poboljšava funkciju mozga
- Može pomoći u mršavljenju
- Smanjuje inflamaciju

## Recepti za početak

### 1. Grčka salata
*Priprema: 10 min*
- Paradajz, krastavac
- Feta sir
- Masline
- Maslinovo ulje
- Origano

### 2. Pečena riba sa povrćem
*Priprema: 30 min*
- Riba po izboru
- Tikvice, paprika
- Maslinovo ulje
- Limun, začini

### 3. Hummus sa povrćem
*Priprema: 15 min*
- Slanutak
- Tahini
- Beli luk
- Limun

[Nastavak sa ostalim receptima...]

## Praktični saveti
- Zamenite puter maslinovim uljem
- Jedite ribu 2-3 puta nedeljno
- Uključujte orahe kao grickalice
- Pijte vino umerelje (opciono)
    `
  },
  {
    id: 8,
    slug: "obroci-za-celu-porodicu-economični-recepti",
    title: "Obroci za Celu Porodicu - 50 Ekonomičnih Recepata",
    excerpt: "Nahranite celu porodicu sa ovim ukusnim i pristupačnim receptima koji neće pokvariti budžet.",
    author: "Milena Jovanović",
    date: "2024-02-20",
    readTime: "13 min čitanja",
    category: "Porodično kuvanje",
    tags: ["porodično kuvanje", "ekonomično", "velike porcije", "planiranje obroka"],
    metaDescription: "50 ekonomičnih recepata za celu porodicu. Ukusna jela koja su dostupna po ceni i zadovoljiti će sve ukuse u porodici.",
    content: `
# Obroci za Celu Porodicu - 50 Ekonomičnih Recepata

Kuvanje za celu porodicu može biti izazov, ali i zadovoljstvo. Evo recepata koji će zadovoljiti sve:

## Planiranje porodičnih obroka

### Budžet saveti:
- Planirajte meni nedeljno
- Kupujte sezonski
- Koristite ostatke kreativno
- Kuvajte veće količine

### Za decu prijatelje:
- Jednostavni ukusi
- Poznata jela
- Skriveno povrće
- Fun prezentacija

## Jeftini obroci za 4-6 osoba

### 1. Špagete sa mesom (600 din)
*Priprema: 30 min*
- 500g špageta
- 300g mlevenog mesa
- Konzerve paradajza
- Luk, beli luk

### 2. Piletina sa pirinčem (800 din)
*Priprema: 45 min*
- Celo pile
- Pirinač
- Povrće
- Začini

### 3. Pasulj prebranac (400 din)
*Priprema: 2 sata*
- Beli pasulj
- Kobasice
- Luk, paprika
- Začini

### 4. Krompir sa mesom (700 din)
*Priprema: 1 sat*
- Krompir
- Svinjsko meso
- Luk
- Začini

[Nastavak sa ostalim receptima...]

## Saveti za uspeh
- Uključite decu u pripremu
- Varijte teksture i boje
- Imajte rezervni plan
- Pravite dvostruke količine za zamrzavanje
    `
  },
  {
    id: 9,
    slug: "desert-recepti-za-praznike",
    title: "Desert Recepti za Praznike - 35 Svečanih Poslastica",
    excerpt: "Nezaboravni deserti koji će učiniti svaki praznik posebnim. Od tradicialnih do modernih poslastica.",
    author: "Slađana Miličić",
    date: "2024-02-25",
    readTime: "14 min čitanja",
    category: "Deserti",
    tags: ["deserti", "praznični recepti", "kolači", "torte"],
    metaDescription: "35 recepata za praznične deserti. Tradicionalni i moderni kolači i torte za sve slavne prilike tokom godine.",
    content: `
# Desert Recepti za Praznike - 35 Svečanih Poslastica

Praznični deserti stvaraju posebnu atmosferu i ostavljaju nezaboravne uspomene. Evo kolekcije za sve prilike:

## Božićni deserti

### 1. Božićna štala
*Priprema: 3 sata + 1 dan odmor*
- Mešavina suvog voća
- Rum ili rakija
- Brašno, puter, šećer
- Začini (cimet, klinčići)

### 2. Medenjaci
*Priprema: 2 sata*
- Med, brašno, jaja
- Začini za medenjake
- Royal glazura
- Dekorativni element

### 3. Česnica
*Priprema: 4 sata*
- Brašno, kvasac
- Ulje, so, šećer
- Čarobni novčić

## Uskršnji deserti

### 4. Uskršnji hleb
*Priprema: 5 sata*
- Bogato testo
- Jaja, puter
- Koriandor, limun
- Belo oboji

### 5. Uskršnja pogača
*Priprema: 3 sata*
- Jednostavno testo
- Ukrštene trakice
- Susam za posipanje

## Rođendani i proslave

### 6. Čokoladna torta
*Priprema: 1.5 sat*
- Čokoladni biskvit
- Ganache krema
- Dekoracija po želji

[Nastavak sa ostalim receptima...]

## Saveti za uspeh
- Pripremite se unapred
- Poverite ukrase
- Servajte lepo
- Fotografišite rezultate
    `
  },
  {
    id: 10,
    slug: "zimski-obroci-za-hladno-vreme",
    title: "Zimski Obroci za Hladno Vreme - 40 Toplih Recepata",
    excerpt: "Zagrejte se ovim toplim i hranjivim jelima savršenim za hladne zimske dane.",
    author: "Milan Stojanović",
    date: "2024-03-01",
    readTime: "12 min čitanja",
    category: "Sezonska kuhinja",
    tags: ["zimska jela", "tople supe", "comfort food", "sezonsko"],
    metaDescription: "40 toplih zimskih recepata. Hranjive supe, čorbe i jela koja će vas zagrejati tokom hladnih meseci.",
    content: `
# Zimski Obroci za Hladno Vreme - 40 Toplih Recepata

Hladni zimski dani zahtevaju toplu i hranjiju hranu. Evo recepata koji će vas zagrejati:

## Tople supe i čorbe

### 1. Gulaš
*Priprema: 2 sata*
- Govedina ili svinjsko meso
- Luk, paprika
- Paprika začin
- Krompir

### 2. Čorba od povrća
*Priprema: 45 min*
- Mešano zimsko povrće
- Vegetarijanski bujon
- Začini
- Sveži đumbir

### 3. Riblja čorba
*Priprema: 1 sat*
- Mešana riba
- Luk, šargarepa
- Beli luk
- Peršun

## Topli glavna jela

### 4. Pečeno jagnje
*Priprema: 3 sata*
- Jagnje ili ovčje meso
- Krompir
- Rozmearin
- Beli luk

### 5. Punjenu paprike
*Priprema: 1.5 sat*
- Paprike za пуњење
- Mleveno meso i pirinač
- Paradajz sos

## Zimske poslastice

### 6. Topla čokolada
*Priprema: 10 min*
- Kvalitetna čokolada
- Mleko
- Šećer
- Cimet

[Nastavak sa ostalim receptima...]

## Zimski sastojci
- Korenska povrće
- Kubiranje
- Začini za grejanje
- Citrus voće za vitamin C
    `
  },
  {
    id: 11,
    slug: "letnji-recepti-za-vruci-vreme",
    title: "Letnji Recepti za Vruće Vreme - 30 Osvežavajućih Jela",
    excerpt: "Rešenja za vruće letnje dane - lagana jela koja će vas rashladiti i zasititi.",
    author: "Jovana Mladenović",
    date: "2024-03-05",
    readTime: "9 min čitanja",
    category: "Sezonska kuhinja",
    tags: ["letnja jela", "hladne salate", "osvežavajuće", "lagana hrana"],
    metaDescription: "30 recepata za vruće letnje dane. Hladne salate, osvežavajuće napitke i lagana jela koja neće opteretiti stomak.",
    content: `# Letnji Recepti za Vruće Vreme - 30 Osvežavajućih Jela\n\nVruće vreme zahteva drukčiji pristup ishrani. Evo recepata koji će vas rashladiti:\n\n## Hladne salate\n### 1. Grčka salata\n### 2. Tabule sa ničem\n### 3. Šopska salata\n\n## Osvežavajući napici\n### 4. Gazpacho\n### 5. Ayran\n### 6. Limunada sa mentom\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 12,
    slug: "protein-obroci-za-sportiste",
    title: "Protein Obroci za Sportiste - 25 Recepta za Mišićnu Masu",
    excerpt: "Uvećajte mišićnu masu uz ove protein obroci savršene za sportiste i aktivne osobe.",
    author: "Trener Marko",
    date: "2024-03-10",
    readTime: "10 min čitanja",
    category: "Sportska ishrana",
    tags: ["proteini", "sportska hrana", "mišićna masa", "fitness"],
    metaDescription: "25 protein recepata za sportiste. Jela bogata belančevinama za gradnju mišićne mase i oporavak nakon treninga.",
    content: `# Protein Obroci za Sportiste - 25 Recepta za Mišićnu Masu\n\nSportisti imaju povećane potrebe za proteinima. Evo optimalnih recepata:\n\n## Pre treninga\n### 1. Ovsena kaša sa proteinskim prahom\n### 2. Bananama i orasima\n\n## Posle treninga\n### 3. Proteinski šejk sa voćem\n### 4. Tuna salata\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 13,
    slug: "recepti-sa-sezonskim-vocem",
    title: "Recepti sa Sezonskim Voćem - Kroz Godinu",
    excerpt: "Maksimalno iskoristite ukus i hranljivost sezonskog voća kroz ove ukusne recepte.",
    author: "Nada Popović",
    date: "2024-03-15",
    readTime: "11 min čitanja",
    category: "Sezonska kuhinja",
    tags: ["sezonsko voće", "zdravo", "vitamini", "prirodno"],
    metaDescription: "Recepti sa sezonskim voćem kroz celu godinu. Iskoristite najbolje od svake sezone za zdrave i ukusne obroci.",
    content: `# Recepti sa Sezonskim Voćem - Kroz Godinu\n\nSezonsko voće je najukusnije i najhranljivije. Evo kako da ga iskoristite:\n\n## Prolećно voće\n### 1. Jagode sa šlagom\n### 2. Višnja kompot\n\n## Letnje voće\n### 3. Breskov kolač\n### 4. Lubenica salata\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 14,
    slug: "brza-jela-za-radne-dane",
    title: "Brza Jela za Radne Dane - 20 Minutna Rešenja",
    excerpt: "Zdravi i ukusni obroci koji se prave za 20 minuta - savršeni za užurbane radne dane.",
    author: "Aleksandar Petrović",
    date: "2024-03-20",
    readTime: "8 min čitanja",
    category: "Brzo kuvanje",
    tags: ["brza jela", "radni dani", "20 minuta", "jednostavno"],
    metaDescription: "Brza jela za radne dane - recepti koji se prave za maksimalno 20 minuta. Zdrava i ukusna rešenja za užurban životni tempo.",
    content: `# Brza Jela za Radne Dane - 20 Minutna Rešenja\n\nNema vremena za dugo kuvanje? Evo brzih rešenja:\n\n## 10-minutni obroci\n### 1. Pasta aglio e olio\n### 2. Omlet sa povrćem\n\n## 15-minutni obroci\n### 3. Stir-fry sa povrćem\n### 4. Sendvič sa avokado\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 15,
    slug: "keto-dijeta-recepti-pocetnici",
    title: "Keto Dijeta Recepti za Početnike - 30 Jela",
    excerpt: "Kompletni vodič kroz ketogensku dijetu sa ukusnim receptima za sve koji počinju.",
    author: "Dr. Stefan Mitrović",
    date: "2024-03-25",
    readTime: "13 min čitanja",
    category: "Specijalne dijete",
    tags: ["keto dijeta", "niske ugljeni hidrati", "masti", "dijeta"],
    metaDescription: "30 keto recepata za početnike. Vodič kroz ketogensku dijetu sa ukusnim jelima niskog sadržaja ugljenih hidrata.",
    content: `# Keto Dijeta Recepti za Početnike - 30 Jela\n\nKetogenska dijeta može biti ukusna i raznovrsna. Evo kako:\n\n## Što je keto dijeta?\n- Visoke masti (70-80%)\n- Umereni proteini (20-25%)\n- Niski ugljeni hidrati (5-10%)\n\n## Keto doručkovi\n### 1. Jaja sa avokado\n### 2. Pek sa sirom\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 16,
    slug: "recepti-za-decu-zdrava-hrana",
    title: "Recepti za Decu - Kako Navići Decu na Zdravu Hranu",
    excerpt: "Kreativni načini da decu naviknet na zdravu hranu kroz igru i ukusne kombinacije.",
    author: "Pedagogkinja Ana",
    date: "2024-03-30",
    readTime: "12 min čitanja",
    category: "Ishrana dece",
    tags: ["ishrana dece", "zdrava hrana", "kreativno", "povrće"],
    metaDescription: "Recepti za decu - kreativni načini da naviknetе decu na zdravu hranu. Ukusni i zabavni obroci koje će deca voleti.",
    content: `# Recepti za Decu - Kako Navići Decu na Zdravu Hranu\n\nHranjenje dece može biti izazov. Evo kreativnih rešenja:\n\n## Strategije uspešного hranjenja\n- Ukljuźite decu u pripremu\n- Pravillите hranu zabavnom\n- Budite pozitivni uzor\n- Ne odustajte nakon prvog 'ne'\n\n## Fun recepti\n### 1. Povrće u obliku životinja\n### 2. Šareni smoothie-ji\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 17,
    slug: "burek-pite-tradicionalni-recepti",
    title: "Burek i Pite - 15 Tradicionalnih Recepata",
    excerpt: "Majstorski recepti za burek i pite kako su ih naše bake pravile generacijama.",
    author: "Majstor Miloš",
    date: "2024-04-01",
    readTime: "16 min čitanja",
    category: "Tradicionalna kuhinja",
    tags: ["burek", "pite", "jufka", "tradicionalno"],
    metaDescription: "15 tradicionalnih recepata za burek i pite. Autentični načini pripreme jufke i različita punjena kako su ih pravile naše bake.",
    content: `# Burek i Pite - 15 Tradicionalnih Recepata\n\nBurek i pite su osnova srpske kuhinje. Evo autentičnih recepata:\n\n## Priprema jufke\n### Domaća jufka\n- Brašno, ulje, so, voda\n- Tehnika razvijanja\n- Saveti za uspeh\n\n## Vrste bureka\n### 1. Burek sa mesom\n### 2. Burek sa sirom\n### 3. Burek sa krompirom\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 18,
    slug: "internacionalni-recepti-srpska-kuhinja",
    title: "Internacionalni Recepti u Srpskoj Kuhinji",
    excerpt: "Kako prilagoditi svetske recepte srpskim ukusima i dostupnim sastojcima.",
    author: "Šef Nikola",
    date: "2024-04-05",
    readTime: "10 min čitanja",
    category: "Fusion kuhinja",
    tags: ["internacionalni", "adaptacija", "fusion", "svetska kuhinja"],
    metaDescription: "Internacionalni recepti prilagođeni srpskim ukusima. Svetska jela sa lokalnim sastojcima i tehnikama pripreme.",
    content: `# Internacionalni Recepti u Srpskoj Kuhinji\n\nSvet na vašem tanjiru - sa srpskim potpisom:\n\n## Azijska kuhinja\n### 1. Srpski fried rice\n### 2. Ćevapi sa azijskim sosom\n\n## Italijanska kuhinja\n### 3. Pasta sa kajmakom\n### 4. Pizza sa pljeskavicom\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 19,
    slug: "meal-prep-priprema-obroka-unapred",
    title: "Meal Prep - Priprema Obroka Unapred za Celu Nedelju",
    excerpt: "Uštedite vreme i novac uz ove strategije za pripremu obroka unapred.",
    author: "Organizational coach Milica",
    date: "2024-04-10",
    readTime: "14 min čitanja",
    category: "Organizacija",
    tags: ["meal prep", "organizacija", "ustedu vremena", "planiranje"],
    metaDescription: "Meal prep vodič - priprema obroka unapred za celu nedelju. Praktični saveti za organizaciju kuhinje i uštedu vremena.",
    featured: true,
    content: `# Meal Prep - Priprema Obroka Unapred za Celu Nedelju\n\nMeal prep vam može preomeniti život. Evo kako:\n\n## Prednosti meal prep-a\n- Uštede vremena\n- Bolje питаюја\n- Kontrola porcija\n- Mindre stresa\n\n## Nedeljni plan\n### Nedelja: Planiranje menija\n### Ponedljak: Kupovina namirnica\n### Utorak: Priprema osnovnih sastojaka\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 20,
    slug: "recepti-sa-ostatcima-hrane",
    title: "Recepti sa Ostatcima Hrane - Zero Waste Kuhinja",
    excerpt: "Transformišite ostatke hrane u ukusna nova jela i smanjite rasipanje.",
    author: "Eko kuvar Petar",
    date: "2024-04-15",
    readTime: "9 min čitanja",
    category: "Eko kuvanje",
    tags: ["ostatci hrane", "zero waste", "ekonomično", "ekologija"],
    metaDescription: "Recepti sa ostatcima hrane - zero waste kuhinja. Kreativni načini da iskoristite ostatke i smanjite rasipanje hrane.",
    content: `# Recepti sa Ostatcima Hrane - Zero Waste Kuhinja\n\nNe bacajte ostatke - transformišite ih!\n\n## Ostatci mesa\n### 1. Pasta sa ostatcima\n### 2. Fritera sa ostatcima\n\n## Staro povrće\n### 3. Supa 'čišćenje frižidera'\n### 4. Omlet sa povrćем\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 21,
    slug: "smoothie-recepti-za-energiju",
    title: "Smoothie Recepti za Energiju - 25 Zdravih Kombinacija",
    excerpt: "Energetski smoothie-ji koji će vam dati snagu za ceo dan prirodnim sastojcima.",
    author: "Nutricionista Marija",
    date: "2024-04-20",
    readTime: "8 min čitanja",
    category: "Zdrava ishrana",
    tags: ["smoothie", "energija", "voće", "zdravo"],
    metaDescription: "25 energetskih smoothie recepata. Prirodni načini za povećanje energije kroz zdravi voćne i povrtne smoothie-je.",
    content: `# Smoothie Recepti za Energiju - 25 Zdravih Kombinacija\n\nPrirodni izvori energije u čaši:\n\n## Jutarnji energetićari\n### 1. Zeleni smoothie\n### 2. Banana-badem kombinacija\n\n## Popodnevni pojačivači\n### 3. Chocolate-coffee boost\n### 4. Tropical energiser\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 22,
    slug: "jela-iz-rerne-jednostavno-kuvanje",
    title: "Jela iz Rerne - 30 Recepata za Jednostavno Kuvanje",
    excerpt: "Stavite sastojke u rernu i pustite je da završi posao - jednostavno kuvanje za zauzete.",
    author: "Šef Marija",
    date: "2024-04-25",
    readTime: "11 min čitanja",
    category: "Jednostavno kuvanje",
    tags: ["rerna", "jednostavno", "one pot", "praktično"],
    metaDescription: "30 recepata za kuvanje u rerni. Jednostavni recepti - stavite u rernu i sačekajte da se spremi bez dodatnog rada.",
    content: `# Jela iz Rerne - 30 Recepata za Jednostavno Kuvanje\n\nRerna vam može biti najbolji prijatelj u kuhinji:\n\n## Meso iz rerne\n### 1. Pečeno pile sa povrćem\n### 2. Svinjski vrat u foji\n\n## Povrće iz rerne\n### 3. Pečeno korenasto povrće\n### 4. Stuffed paprike\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 23,
    slug: "recepti-sa-paradajzom-leto",
    title: "Recepti sa Paradajzom - Najbolje od Letnje Sezone",
    excerpt: "Iskoristite punu sezonu paradajza kroz ove ukusne i zdrave recepte.",
    author: "Баштован Jovan",
    date: "2024-04-30",
    readTime: "10 min čitanja",
    category: "Sezonska kuhinja",
    tags: ["paradajz", "letnje povrće", "sezonsko", "zdrav"],
    metaDescription: "Recepti sa paradajzom - najbolje od letnje sezone. Različiti načini pripreme paradajza dok je u punoj sezoni.",
    content: `# Recepti sa Paradajzom - Najbolje od Letnje Sezone\n\nParadajz u punoj sezoni je nenadmašen:\n\n## Sveži paradajz\n### 1. Caprese salata\n### 2. Bruschetta\n\n## Kuvani paradajz\n### 3. Paradajz sos\n### 4. Ratatouille\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 24,
    slug: "hrskava-jela-fritters-tempura",
    title: "Hrskava Jela - Fritters i Tempura Recepti",
    excerpt: "Savršeno hrskavi premazi i tehnike za nepresušno hrskava jela.",
    author: "Majstor prženja Darko",
    date: "2024-05-05",
    readTime: "12 min čitanja",
    category: "Tehnike kuvanja",
    tags: ["hrskavo", "fritters", "tempura", "tehnike"],
    metaDescription: "Recepti za hrskava jela - fritters i tempura. Tehnike za savršeno hrskav premaz i ukusne kombinacije.",
    content: `# Hrskava Jela - Fritters i Tempura Recepti\n\nTajne savršenog hrskavog premaza:\n\n## Osnove tehnike\n### 1. Teста za tempuru\n### 2. Idealna temperatura ulja\n\n## Povrće fritters\n### 3. Tikvice fritters\n### 4. Luk rings\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 25,
    slug: "zdrave-grickalice-snackovi",
    title: "Zdrave Grickalice i Snack-ovi - 40 Recepata",
    excerpt: "Zamena za nezdralu hranu - ukusne i hranjive grickalice koje možete praviti kod kuće.",
    author: "Healthy coach Sandra",
    date: "2024-05-10",
    readTime: "9 min čitanja",
    category: "Zdrava ishrana",
    tags: ["zdrave grickalice", "snack", "zdrav", "domaće"],
    metaDescription: "40 recepata za zdrave grickalice i snack-ove. Domaće alternative nezdravo hrani koja će zadovoljiti želju za grickanjem.",
    content: `# Zdrave Grickalice i Snack-ovi - 40 Recepata\n\nЗа гrickanje без greške savesti:\n\n## Slani snack-ovi\n### 1. Pečeni slanutak\n### 2. Kale chips\n\n## Слатки snack-ovi\n### 3. Energy balls\n### 4. Voćni leather\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 26,
    slug: "recepti-sa-krompirom-svestrni",
    title: "Recepti sa Krompirom - 50 Svestran Načina Pripreme",
    excerpt: "Krompir na 50 načina - od klasičnih do kreativnih recepti sa ovim svestrano povrće.",
    author: "Kuvar Miloš",
    date: "2024-05-15",
    readTime: "15 min čitanja",
    category: "Osnovni sastojci",
    tags: ["krompir", "osnovna namirnice", "универзало", "традиционно"],
    metaDescription: "50 recepata sa krompirom. Različiti načini pripreme najpopularnije povrće - od klasičnih do kreativnih kombinacija.",
    content: `# Recepti sa Krompirom - 50 Svestran Načina Pripreme\n\nKrompir - kralj povrća u srpskoj kuhinji:\n\n## Klasični načini\n### 1. Kuvani krompir\n### 2. Prženi krompir\n\n## Kreativni recepti\n### 3. Krompir gnocchi\n### 4. Hasselback krompir\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 27,
    slug: "pasta-recepti-sve-prilike",
    title: "Pasta Recepti za Sve Prilike - 60 Varijanti",
    excerpt: "Od jednostavnih do gourmet pasta recepata - kompletni vodič kroz svet testenina.",
    author: "Pasta chef Lorenzo",
    date: "2024-05-20",
    readTime: "13 min čitanja",
    category: "Internacionalna kuhinja",
    tags: ["pasta", "testenine", "italijanski", "gourmet"],
    metaDescription: "60 pasta recepata za sve prilike. Kompletni vodič od jednostavnih testenina do gourmet kombinacija.",
    content: `# Pasta Recepti za Sve Prilike - 60 Varijanti\n\nPasta - jednostavna a beskrajno varijabilna:\n\n## Klasični sosovi\n### 1. Carbonara\n### 2. Amatriciana\n\n## Kreativни sosovi\n### 3. Pesto sa spinaťom\n### 4. Gorgonzola sa orasima\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 28,
    slug: "recepti-sa-piletinom-proteini",
    title: "Recepti sa Piletinom - 45 Načina za Najbolje Proteine",
    excerpt: "Piletina na 45 načina - здрав izvor proteina prillagođen svim ukusima.",
    author: "Fitness kuvar Stefan",
    date: "2024-05-25",
    readTime: "12 min čitanja",
    category: "Proteini",
    tags: ["piletina", "proteini", "zdrava", "fitness"],
    metaDescription: "45 recepata sa piletinom. Здрави i ukusni načini pripreme piletine kao izvora kvalitnih proteina.",
    content: `# Recepti sa Piletinom - 45 Načina za Najbolje Proteine\n\nPiletina - najzdravij изvor životињских proteina:\n\n## Здрави načini kuvanja\n### 1. Печена без ulja\n### 2. Na pari\n\n## Ukусni marinadi\n### 3. Mediteranski\n### 4. Азийски\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 29,
    slug: "veganski-recepti-biljne-alternative",
    title: "Veganski Recepti - 40 Biljnih Alternativa",
    excerpt: "Potpuno biljni recepti koji će zadovoljiti i najzаhtevnije ukusove.",
    author: "Vegan chef Milica",
    date: "2024-05-30",
    readTime: "11 min čitanja",
    category: "Veganska ishrana",
    tags: ["veganski", "biljni", "етички", "здрав"],
    metaDescription: "40 veganskih recepata. Ukusne biljne alternative koje će vam pokazati raznolikost veganske kuhinje.",
    content: `# Veganski Recepti - 40 Biljnih Alternativa\n\nВегanska kuhinja može biti neočekivano bogata:\n\n## Biljni proteini\n### 1. Tofu szechnuan\n### 2. Čili са црним pasulj\n\n## Вегanski deserti\n### 3. Avokado čokolada mousse\n### 4. Банane ice cream\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 30,
    slug: "praznicna-jela-bozic-uskrs",
    title: "Праздična Jela - Božićni i Uskršnji Recepti",
    excerpt: "Традиционални празニči recepti koji će учinити ваше празњакове незаборавним.",
    author: "Этно kuvar Milica",
    date: "2024-06-01",
    readTime: "16 min čitanja",
    category: "Празницна kuhinja",
    tags: ["празниči", "традиционално", "božić", "uskrs"],
    metaDescription: "Традиционални recepti за божићне и uskršnje празнике. Aутентična jela koja čuva srpsku tradiciju kroz generacije.",
    featured: true,
    content: `# Празnicна Jela - Božićni i Uskršnji Recepti\n\nПразниčну трpеzu која пошт{$уje традицију:\n\n## Božićни стол\n### 1. Печено прасе\n### 2. Сарме у киселом купусу\n\n## Uskršnji стол\n### 3. Јагњеће печење\n### 4. Ускршњи хлеб\n\n[Detaljan садржај sa receptima...]`
  },
  {
    id: 31,
    slug: "fermentirana-hrana-zdrava-probiotici",
    title: "Fermentirana Hrana - Prirodni Probiotici za Zdravlje",
    excerpt: "Otkrijte moć fermentacije kroz tradicionalne i moderne recepte za bolje zdravlje crevnog trakta.",
    author: "Mikrobiolog Dr. Petar",
    date: "2024-06-05",
    readTime: "14 min čitanja",
    category: "Fermentacija",
    tags: ["fermentirana hrana", "probiotici", "zdravlje", "tradicionalno"],
    metaDescription: "Vodič kroz fermentiranu hranu - recepti za kimči, kiselo zelje, kefir i druge prirodne probiotike za bolje zdravlje.",
    content: `# Fermentirana Hrana - Prirodni Probiotici za Zdravlje\n\nFermentacija je vekovima stara tehnika za očuvanje hrane koja donosi i velike zdravstvene koristi.\n\n## Zdravstvene prednosti\n- Poboljšava varenje\n- Jača imunitet\n- Pomaže mentalnom zdravlju\n\n## Osnovni recepti\n### 1. Kiselo zelje\n### 2. Kimči\n### 3. Kefir\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 32,
    slug: "instant-pot-recepti-brzog-kuvanja",
    title: "Instant Pot Recepti - Revolucija Brzog Kuvanja",
    excerpt: "Maksimalno iskoristite svoj Instant Pot sa ovim receptima koji štede vreme i maksimalno čuvaju ukus.",
    author: "Tech chef Milan",
    date: "2024-06-10",
    readTime: "11 min čitanja",
    category: "Brzo kuvanje",
    tags: ["instant pot", "pressure cooking", "brzo", "tehnologija"],
    metaDescription: "50 Instant Pot recepata za brzo kuvanje. Štedite vreme i energiju uz ove efikasne recepte za električni lonac.",
    content: `# Instant Pot Recepti - Revolucija Brzog Kuvanja\n\nInstant Pot menja način na koji kuvamo - brže, lakše, ukusnije.\n\n## Prednosti Instant Pot-a\n- 70% brže kuvanje\n- Zadržava hranljivost\n- Jedno-sudovo kuvanje\n\n## Must-have recepti\n### 1. Gulaš za 30 minuta\n### 2. Riža i povrće\n### 3. Kuvana jaja\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 33,
    slug: "gluten-free-deserti-bez-glutena",
    title: "Gluten-Free Deserti - Poslastice bez Glutena",
    excerpt: "Ukusni deserti koji dokazuju da kuvanje bez glutena ne znači odricanje od slatkih užitaka.",
    author: "Slađana bez glutena",
    date: "2024-06-15",
    readTime: "12 min čitanja",
    category: "Specijalne dijete",
    tags: ["bez glutena", "deserti", "kolači", "zdrava poslastica"],
    metaDescription: "30 recepata za deserti bez glutena. Ukusni kolači i poslastice sigurne za osobe sa celijakijom.",
    content: `# Gluten-Free Deserti - Poslastice bez Glutena\n\nDeserti bez glutena mogu biti jednako ukusni kao tradicionalni.\n\n## Zamene za gluten\n- Bademovo brašno\n- Kokosovo brašno\n- Ovseno brašno\n\n## Omiljeni deserti\n### 1. Čokoladni brownies\n### 2. Voćne tarte\n### 3. Cheesecake\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 34,
    slug: "air-fryer-recepti-zdrava-ishrana",
    title: "Air Fryer Recepti - Zdrava Pržena Hrana",
    excerpt: "Uživajte u hrskavoj hrani bez previše ulja - najbolji Air Fryer recepti za zdravu pripremu.",
    author: "Zdravi chef Ana",
    date: "2024-06-20",
    readTime: "10 min čitanja",
    category: "Zdrava ishrana",
    tags: ["air fryer", "zdrava pržena hrana", "malo ulja", "hrskavo"],
    metaDescription: "40 Air Fryer recepata za zdravu pripremu hrskave hrane sa minimum ulja. Ukusno i zdravo prženje.",
    content: `# Air Fryer Recepti - Zdrava Pržena Hrana\n\nAir Fryer omogućava prženje sa 80% manje ulja.\n\n## Prednosti Air Fryer-a\n- 80% manje ulja\n- Brža priprema\n- Lako čišćenje\n\n## Najbolji recepti\n### 1. Pilići batak\n### 2. Pomfrit od batata\n### 3. Pržene tikvice\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 35,
    slug: "batch-cooking-priprema-za-nedelju",
    title: "Batch Cooking - Kuvar za Celu Nedelju Odjednom",
    excerpt: "Strategije batch cooking-a koje će vam omogućiti da kuvanje za celu nedelju završite za jedan dan.",
    author: "Organizational expert Sara",
    date: "2024-06-25",
    readTime: "15 min čitanja",
    category: "Organizacija",
    tags: ["batch cooking", "meal prep", "organizacija", "efikasnost"],
    metaDescription: "Batch cooking vodič - kako kuvati za celu nedelju za jedan dan. Praktični saveti za organizaciju kuhinje.",
    content: `# Batch Cooking - Kuvar za Celu Nedelju Odjednom\n\nBatch cooking je evolucija meal prep-a.\n\n## Osnovni principi\n- Jedno kuvanje, više obroka\n- Maximalno korišćenje sastojaka\n- Strategija zamrzavanja\n\n## Nedeljni plan\n### Nedelja: Planiranje\n### Ponedeljak: Kupovina\n### Utorak: Batch cooking dan\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 36,
    slug: "slow-cooker-recepti-sporo-kuvanje",
    title: "Slow Cooker Recepti - Umenjost Sporog Kuvanja",
    excerpt: "Redefinišite 'set and forget' kuvanje sa ovim receptima koji se skoro sami prave.",
    author: "Slow food chef Marko",
    date: "2024-06-30",
    readTime: "13 min čitanja",
    category: "Jednostavno kuvanje",
    tags: ["slow cooker", "sporo kuvanje", "praktično", "set and forget"],
    metaDescription: "45 Slow Cooker recepata za sporo kuvanje. Jednostavna priprema - stavite sastojke i pustite da se samo kuva.",
    content: `# Slow Cooker Recepti - Umenjost Sporog Kuvanja\n\nSlow cooker je savršen za zauzete osobe.\n\n## Prednosti sporog kuvanja\n- Razvija ukuse\n- Meso postaje meko\n- Nema nadgledanja\n\n## Omiljeni recepti\n### 1. Pulled pork\n### 2. Čili con carne\n### 3. Curry sa povrćem\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 37,
    slug: "sous-vide-precizno-kuvanje",
    title: "Sous Vide - Precizno Kuvanje na Niskim Temperaturama",
    excerpt: "Otkrijte tehniku sous vide kuvanja koja garantuje savršene rezultate svaki put.",
    author: "Precision chef David",
    date: "2024-07-05",
    readTime: "16 min čitanja",
    category: "Tehnike kuvanja",
    tags: ["sous vide", "precizno kuvanje", "gourmet", "tehnika"],
    metaDescription: "Vodič kroz sous vide kuvanje - tehniku preciznog kuvanja na niskim temperaturama za savršene rezultate.",
    content: `# Sous Vide - Precizno Kuvanje na Niskim Temperaturama\n\nSous vide omogućava savršenu kontrolu temperature.\n\n## Osnove tehnike\n- Vakuumsko pakovanje\n- Precizna temperatura\n- Dugo vreme kuvanja\n\n## Najbolji rezultati\n### 1. Steak medium-rare\n### 2. Poached jaja\n### 3. Riba fileti\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 38,
    slug: "energy-balls-zdrave-grickalice",
    title: "Energy Balls - Zdrave Grickalice za Energiju",
    excerpt: "Prirodni boost energije kroz ove jednostavne no-bake energy balls recepte.",
    author: "Energy coach Milica",
    date: "2024-07-10",
    readTime: "8 min čitanja",
    category: "Zdrava ishrana",
    tags: ["energy balls", "zdrave grickalice", "energija", "no-bake"],
    metaDescription: "25 recepata za energy balls - zdrave grickalice koje daju prirodnu energiju bez pečenja.",
    content: `# Energy Balls - Zdrave Grickalice za Energiju\n\nBrza energija bez rafinisanog šećera.\n\n## Osnovni sastojci\n- Datule kao osnova\n- Orašasti plodovi\n- Proteinski prah\n\n## Popularne kombinacije\n### 1. Čokolada-kikiriki\n### 2. Kokos-limun\n### 3. Vanila-badem\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 39,
    slug: "detox-recepti-ciscenje-organizma",
    title: "Detox Recepti - Prirodno Čišćenje Organizma",
    excerpt: "Podržite prirodnu detoksikaciju organizma kroz ove hranjive i ukusne recepte.",
    author: "Detox specialist Dr. Nina",
    date: "2024-07-15",
    readTime: "11 min čitanja",
    category: "Zdrava ishrana",
    tags: ["detox", "čišćenje", "prirodno", "detoksikacija"],
    metaDescription: "Detox recepti za prirodno čišćenje organizma. Smoothie-ji, supe i salate koji podržavaju detoksikaciju.",
    content: `# Detox Recepti - Prirodno Čišćenje Organizma\n\nPodržite prirodnu detoksikaciju kroz hranu.\n\n## Detox principi\n- Hidratacija\n- Antioksidanti\n- Fiber hrana\n\n## Detox recepti\n### 1. Zeleni smoothie\n### 2. Detox supa\n### 3. Cleansing salata\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 40,
    slug: "gourmet-recepti-fine-dining",
    title: "Gourmet Recepti - Fine Dining kod Kuće",
    excerpt: "Pripremite restoransku hranu kod kuće sa ovim gourmet receptima i tehnikama.",
    author: "Michelin chef Stefan",
    date: "2024-07-20",
    readTime: "18 min čitanja",
    category: "Gourmet",
    tags: ["gourmet", "fine dining", "restorani", "elegantno"],
    metaDescription: "Gourmet recepti za fine dining kod kuće. Restoransku kvalitetu hrane možete postići i u svojoj kuhinji.",
    content: `# Gourmet Recepti - Fine Dining kod Kuće\n\nDoneste restoransko iskustvo u svoju kuhinju.\n\n## Gourmet tehnike\n- Plating prezentacija\n- Sauce-ovi\n- Kvalitetni sastojci\n\n## Signature jela\n### 1. Beef Wellington\n### 2. Seafood risotto\n### 3. Chocolate soufflé\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 41,
    slug: "anti-inflammatory-recepti-upala",
    title: "Anti-Inflammatory Recepti - Hrana Protiv Upala",
    excerpt: "Smanjite upale u organizmu kroz ove ukusne recepte bogat antiinflamatornim sastojcima.",
    author: "Nutricionist Dr. Marija",
    date: "2024-07-25",
    readTime: "13 min čitanja",
    category: "Zdrava ishrana",
    tags: ["anti-inflammatory", "protiv upala", "zdravlje", "prirodno"],
    metaDescription: "Anti-inflammatory recepti - hrana koja prirodno smanjuje upale u organizmu. Ukusni načini za borbu protiv upala.",
    content: `# Anti-Inflammatory Recepti - Hrana Protiv Upala\n\nIshrana može biti najmoćniji lek protiv upala.\n\n## Anti-inflammatory sastojci\n- Kurkuma\n- Đumbir\n- Bobičasto voće\n\n## Healing recepti\n### 1. Golden milk latte\n### 2. Berry smoothie bowl\n### 3. Turmeric curry\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 42,
    slug: "budget-obroci-ekonomicno-kuvanje",
    title: "Budget Obroci - Ekonomično Kuvanje za Malu Cenu",
    excerpt: "Nahranite porodicu ukusno i zdravo sa ograničenim budžetom - preko 50 ekonomičnih recepata.",
    author: "Frugal cook Jelena",
    date: "2024-07-30",
    readTime: "12 min čitanja",
    category: "Budget kuvanje",
    tags: ["budget", "ekonomično", "jeftino", "štednja"],
    metaDescription: "Budget recepti za ekonomično kuvanje. Ukusni obroci za malu cenu - štedite novac bez kompromisa na ukusu.",
    content: `# Budget Obroci - Ekonomično Kuvanje za Malu Cenu\n\nDobra hrana ne mora da bude skupa.\n\n## Strategije štednje\n- Sezonski sastojci\n- Veliki obroci\n- Osnovna hrana\n\n## Jeftini obroci\n### 1. Pasulj sa kobasicama\n### 2. Pasta sa povrćem\n### 3. Krompir čorba\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 43,
    slug: "intermittent-fasting-recepti",
    title: "Intermittent Fasting Recepti - Optimalni Obroci",
    excerpt: "Najbolji recepti za intermittent fasting koji maksimizuj nutritivnu vrednost u ograničenom vremenskom okviru.",
    author: "IF expert Dr. Miloš",
    date: "2024-08-05",
    readTime: "14 min čitanja",
    category: "Specijalne dijete",
    tags: ["intermittent fasting", "IF", "optimizacija", "nutrijenti"],
    metaDescription: "Intermittent fasting recepti - optimalni obroci za IF. Maksimizujte nutrijente u ograničenom vremenskom okviru.",
    content: `# Intermittent Fasting Recepti - Optimalni Obroci\n\nOptimizujte svoje obroci za IF uspeh.\n\n## IF principi\n- Nutrient density\n- Balanced macros\n- Satiety foods\n\n## IF obroci\n### 1. Breaking fast smoothie\n### 2. OMAD dinner\n### 3. Pre-fast snack\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 44,
    slug: "comfort-food-balkanska-kuhinja",
    title: "Comfort Food - Balkanska Kuhinja za Dušu",
    excerpt: "Tradicionalni balkanski recepti koji greje srce i podseća na dom.",
    author: "Baba Stana",
    date: "2024-08-10",
    readTime: "15 min čitanja",
    category: "Tradicionalna kuhinja",
    tags: ["comfort food", "balkan", "tradicionalno", "nostalgija"],
    metaDescription: "Balkanski comfort food recepti - jela koja greje dušu. Tradicionalni ukusi koji podseća na detinjstvo.",
    content: `# Comfort Food - Balkanska Kuhinja za Dušu\n\nJela koja vraćaju na tradicionalne ukuse.\n\n## Balkanski klasici\n- Toplina doma\n- Jednostavni sastojci\n- Porodične tradicije\n\n## Nostalgični recepti\n### 1. Čorba od kokošije\n### 2. Sarme u kiselom kupusu\n### 3. Palačinke sa džemom\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 45,
    slug: "superfood-recepti-hrana-budućnosti",
    title: "Superfood Recepti - Hrana Budućnosti",
    excerpt: "Ukorporirajte najhranljivije sastojke planeti u svoje svakodnevne obroke.",
    author: "Superfood chef Marina",
    date: "2024-08-15",
    readTime: "12 min čitanja",
    category: "Zdrava ishrana",
    tags: ["superfood", "nutrition", "zdravlje", "budućnost"],
    metaDescription: "Superfood recepti sa najhranljivijim sastojcima. Quinoa, chia, spirulina i drugi superfoods u ukusnim kombinacijama.",
    content: `# Superfood Recepti - Hrana Budućnosti\n\nNajhranljiviji sastojci planeta u ukusnim kombinacijama.\n\n## Top superfoods\n- Quinoa\n- Chia seeds\n- Spirulina\n\n## Power recepti\n### 1. Superfood smoothie bowl\n### 2. Quinoa power salad\n### 3. Chia pudding\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 46,
    slug: "prebiotic-recepti-zdravlje-creva",
    title: "Prebiotic Recepti - Hrana za Zdrava Creva",
    excerpt: "Nahranite dobre bakterije u crevima sa ovim receptima bogatim prebioticima.",
    author: "Gut health dr. Petar",
    date: "2024-08-20",
    readTime: "11 min čitanja",
    category: "Zdrava ishrana",
    tags: ["prebiotici", "gut health", "creva", "bakterije"],
    metaDescription: "Prebiotic recepti za zdravlje creva. Hrana koju vole dobre bakterije - fiber-bogati obroci za gut health.",
    content: `# Prebiotic Recepti - Hrana za Zdrava Creva\n\nNahranite mikrobiom za bolje zdravlje.\n\n## Prebiotic izvori\n- Fiber hrana\n- Resistant starch\n- Inulin sources\n\n## Gut-friendly recepti\n### 1. Jerusalem artichoke soup\n### 2. Green banana smoothie\n### 3. Oat fiber bowl\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 47,
    slug: "zero-calorie-recepti-mršavljenje",
    title: "Zero Calorie Recepti - Ukusno Mršavljenje",
    excerpt: "Zasitite se sa minimum kalorija - recepti koji omogućava mršavljenje bez gladovanja.",
    author: "Weight loss coach Milica",
    date: "2024-08-25",
    readTime: "9 min čitanja",
    category: "Mršavljenje",
    tags: ["zero calorie", "mršavljenje", "dieta", "sitost"],
    metaDescription: "Zero calorie recepti za mršavljenje. Ukusni načini da se zasitite sa minimum kalorija.",
    content: `# Zero Calorie Recepti - Ukusno Mršavljenje\n\nMaksimizirajte sitost, minimizirajte kalorije.\n\n## Zero cal strategije\n- Velike količine\n- High water content\n- Fiber boost\n\n## Sitni obroci\n### 1. Shirataki noodles\n### 2. Zucchini noodles\n### 3. Cauliflower rice\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 48,
    slug: "molecular-gastronomy-recepti",
    title: "Molecular Gastronomy - Nauka u Kuhinji",
    excerpt: "Eksperimentirajte sa molekularnom gastronomijom i kreirajte spektakularna jela.",
    author: "Mad scientist chef Igor",
    date: "2024-08-30",
    readTime: "20 min čitanja",
    category: "Eksperimentalno",
    tags: ["molecular gastronomy", "nauka", "inovacija", "spektakularno"],
    metaDescription: "Molecular gastronomy recepti - kombinacija nauke i kuvanja. Kreirajte spektakularna jela sa modernim tehnikama.",
    content: `# Molecular Gastronomy - Nauka u Kuhinji\n\nGde se kuvanje sreće sa naukom.\n\n## Moderne tehnike\n- Spherification\n- Gelification\n- Liquid nitrogen\n\n## Wow faktori\n### 1. Caviar pearls\n### 2. Edible balloons\n### 3. Color-changing foods\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 49,
    slug: "preservation-recepti-konzerviranja",
    title: "Preservation Recepti - Umešnost Konzerviranja",
    excerpt: "Tradicionalne i moderne tehnike konzerviranja hrane za celu godinu.",
    author: "Preservation master Jovana",
    date: "2024-09-05",
    readTime: "17 min čitanja",
    category: "Konzerviranje",
    tags: ["konzerviranje", "preservation", "tradicionalno", "sezona"],
    metaDescription: "Recepti za konzerviranje hrane - tradicionalne i moderne tehnike čuvanja hrane kroz sezene.",
    content: `# Preservation Recepti - Umešnost Konzerviranja\n\nSačuvajte ukuse kroz sezone.\n\n## Tehnike konzerviranja\n- Konzerve\n- Fermentacija\n- Dehydration\n\n## Seasonal preserving\n### 1. Letnje fermentacije\n### 2. Zimski pickles\n### 3. Voćni džem\n\n[Detaljan sadržaj sa receptima...]`
  },
  {
    id: 50,
    slug: "futuristic-food-hrana-budućnosti",
    title: "Futuristic Food - Kako Ćemo Jesti Sutra",
    excerpt: "Pogled u budućnost ishrane - od lab-grown mesa do 3D printovanih obroka.",
    author: "Food futurist Dr. Marko",
    date: "2024-09-10",
    readTime: "16 min čitanja",
    category: "Budućnost",
    tags: ["budućnost", "inovacija", "tehnologija", "sustainable"],
    metaDescription: "Futuristička hrana - kako će izgledati ishrana budućnosti. Lab-grown meso, insekti kao protein, 3D food printing.",
    featured: true,
    content: `# Futuristic Food - Kako Ćemo Jesti Sutra\n\nIshrana budućnosti je već ovde.\n\n## Food tech trends\n- Lab-grown meat\n- 3D food printing\n- Insect protein\n\n## Sustainable eating\n### 1. Plant-based innovations\n### 2. Alternative proteins\n### 3. Zero waste cooking\n\n[Detaljan sadržaj sa receptima...]`
  }
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};