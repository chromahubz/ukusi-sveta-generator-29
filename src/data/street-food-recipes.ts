import { Recipe } from './recipes';

export const streetFoodRecipes: Record<string, Recipe> = {
  "Tacos": {
    name: "Tacos",
    description: "Ovi takosi su brzi, jednostavni i puni ukusa. Savršeni za brzi ručak ili večeru.",
    ingredients: [
      "500g mlevene govedine",
      "1 glavica crnog luka, sitno iseckana",
      "1 pakovanje začina za takose (ili mešavina čilija, kumina, belog luka u prahu, luka u prahu, origana, paprike)",
      "12 tortilja za takose",
      "1 šolja rendanog čedar sira",
      "1 zelena salata, iseckana",
      "1 paradajz, iseckan",
      "1/2 šolje pavlake",
      "1/4 šolje salsa sosa (opciono)",
      "Ulje za prženje"
    ],
    instructions: [
      "Zagrejte ulje u velikom tiganju na srednjoj vatri.",
      "Dodajte mlevenu govedinu i crni luk. Kuvajte dok meso ne porumeni, a luk omekša. Izmrvite meso tokom kuvanja.",
      "Ocedite višak masnoće iz tiganja.",
      "Dodajte začin za takose i prema uputstvima na pakovanju (ili dodajte oko 2 kašike ako koristite sopstvenu mešavinu začina) i 1/2 šolje vode. Promešajte i smanjite vatru.",
      "Kuvajte 10-15 minuta, ili dok se sos ne zgusne, povremeno mešajući.",
      "Zagrejte tortilje prema uputstvima na pakovanju (u tiganju, mikrotalasnoj ili rerni).",
      "Napunite svaku tortilju smesom od mlevenog mesa.",
      "Dodajte rendani sir, zelenu salatu, paradajz i pavlaku.",
      "Poslužite odmah sa salsa sosom (opciono)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Hot Dogs": {
    name: "Hot Dogs",
    description: "Jednostavan i brz recept za klasičan hot dog.",
    ingredients: [
      "4 viršle",
      "4 hot dog zemičke",
      "Senf",
      "Kečap",
      "Kiseli krastavčići, seckani (opciono)",
      "Crni luk, seckani (opciono)"
    ],
    instructions: [
      "U šerpi zagrejte vodu do ključanja.",
      "Dodajte viršle u kipuću vodu i kuvajte 5-7 minuta, ili dok se ne zagreju.",
      "U međuvremenu, pripremite zemičke. Možete ih lagano tostirati ili grejati na pari ako želite.",
      "Kada su viršle skuvane, izvadite ih iz vode.",
      "Stavite svaku viršlu u zemičku.",
      "Dodajte senf, kečap, seckane krastavčiće i seckani luk, po ukusu.",
      "Poslužite odmah."
    ],
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: 4
  },

  "Falafel": {
    name: "Falafel",
    description: "Hrskavi spolja, mekani iznutra, falafel je ukusno jelo poreklom sa Bliskog istoka, savršeno za užinu, obrok u pita hlebu ili kao prilog.",
    ingredients: [
      "250g suve leblebije",
      "1 veliki crni luk, grubo iseckan",
      "4 čena belog luka, grubo iseckana",
      "1/2 šolje svežeg peršuna, grubo iseckanog",
      "1/4 šolje svežeg korijandera, grubo iseckanog",
      "1-2 zelene ljute papričice, očišćene od semenki (po ukusu)",
      "1 kašičica mlevenog kumina",
      "1 kašičica mlevenog korijandera",
      "1/2 kašičice sode bikarbone",
      "1/2 kašičice soli (ili po ukusu)",
      "1/4 kašičice crnog bibera",
      "2-3 kašike brašna (po potrebi)",
      "Ulje za duboko prženje"
    ],
    instructions: [
      "Leblebije stavite u veliku posudu i prelijte hladnom vodom. Treba da budu prekrivene sa najmanje 5 cm vode. Ostavite da se namaču 24 sata.",
      "Nakon 24 sata, procedite i dobro isperite leblebije.",
      "U procesor za hranu stavite leblebije, crni luk, beli luk, peršun, korijander i ljutu papričicu (ako je koristite). Mlevene začine, sodu bikarbonu, so i biber dodajte u procesor.",
      "Blendajte dok ne dobijete homogenu smesu. Važno je da smesa ne bude previše glatka, treba da ima malo teksture. Ako je smesa previše vlažna, dodajte brašno po kašiku dok ne dobijete željenu konzistenciju.",
      "Prebacite smesu u posudu, pokrijte i stavite u frižider na najmanje 30 minuta da se stegne.",
      "Zagrejte ulje za duboko prženje na srednjoj vatri (oko 180°C).",
      "Rukama oblikujte falafel u male kuglice ili pljeskavice.",
      "Pažljivo spuštajte falafel u vruće ulje, u serijama, da ne prenatrpate tiganj.",
      "Pržite falafel dok ne postane zlatno smeđi i hrskav, oko 3-4 minuta sa svake strane.",
      "Izvadite falafel iz ulja i stavite na papirni ubrus da se ocedi od viška masnoće.",
      "Poslužite toplo sa pita hlebom, humusom, tahini sosom, salatom ili kao deo meze."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 20
  },

  "Gyros": {
    name: "Gyros",
    description: "Brzi i ukusni giros, savršen za ručak ili večeru.",
    ingredients: [
      "600g svinjskog ili pilećeg filea (isečenog na tanke šnicle)",
      "1/4 šolje maslinovog ulja",
      "1 limun, sok i rendana korica",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "1 kašičica sušenog ruzmarina",
      "1/2 kašičice mlevenog kima",
      "1/2 kašičice mlevene paprike (slatke ili ljute, po ukusu)",
      "So i biber, po ukusu",
      "4 pita hleba",
      "1 krastavac, isečen na kolutove",
      "1 paradajz, isečen na kriške",
      "1 crveni luk, isečen na tanke kolutove",
      "Tzatziki sos (po želji)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte maslinovo ulje, sok i koricu limuna, beli luk, origano, ruzmarin, kim, mlevenu papriku, so i biber.",
      "Dodajte meso u marinadu i dobro promešajte da se meso obloži sa svih strana. Pokrijte posudu i ostavite u frižideru najmanje 30 minuta (ili do nekoliko sati) da se marinira.",
      "Zagrejte rernu na 200°C.",
      "Izvadite meso iz marinade i nanižite ga na metalni ili drveni štapić za ražnjiće. Ako nemate štapiće, možete meso peći u tiganju ili na roštilju.",
      "Pecite meso u rerni oko 20-25 minuta, ili dok ne dobije zlatno-braon boju i ne bude pečeno. Ako pečete u tiganju, pržite na srednjoj vatri dok meso ne bude pečeno i porumeni sa svih strana. Povremeno okrećite.",
      "Izvadite meso iz rerne ili tiganja i ostavite da se malo ohladi pre nego što ga isečete na tanke komade.",
      "Zagrejte pita hleb u tiganju ili rerni.",
      "Napunite pita hleb isečenim mesom, krastavcem, paradajzom, crvenim lukom i tzatziki sosom.",
      "Poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4
  },

  "Banh Mi": {
    name: "Banh Mi",
    description: "Ovaj recept vam donosi autentični ukus Vijetnamskog sendviča 'Banh Mi'. Kombinacija hrskavog bageta, paštete, raznih vrsta mesa, ukiseljenog povrća i svežih začina stvara neodoljivu harmoniju ukusa.",
    ingredients: [
      "1 veliki baget (ili 4 manja bageta)",
      "150g paštete (pileća ili svinjska)",
      "200g kuvane šunke, tanko narezane",
      "200g pečene svinjetine (Cha Lua), tanko narezane (može se zameniti sa roštiljskim mesom)",
      "1 šargarepa, isečena na tanke štapiće",
      "1 krastavac, isečen na tanke štapiće",
      "1/2 beli luk, sitno iseckan",
      "1/4 šolje pirinčanog sirćeta",
      "1/4 šolje šećera",
      "1/2 kašičice soli",
      "Majonez (po ukusu)",
      "Sriracha sos (po ukusu)",
      "Sveži korijander, za ukras",
      "1 jalapeño paprika, tanko narezana (opciono)"
    ],
    instructions: [
      "Priprema ukiseljenog povrća: U maloj posudi pomešajte pirinčano sirće, šećer i so. Mešajte dok se šećer ne rastvori. Stavite isečenu šargarepu i krastavac u posudu i ostavite da se ukiseli najmanje 15 minuta. Povremeno promešajte.",
      "Priprema belog luka: U maloj činiji pomešajte sitno iseckani beli luk sa malo ulja.",
      "Priprema bageta: Presecite baget po dužini. Ako koristite manje bagete, presecite ih horizontalno.",
      "Sastavljanje sendviča: Namažite obe strane bageta tankim slojem paštete.",
      "Dodavanje mesa: Na donju polovinu bageta stavite sloj šunke i pečene svinjetine.",
      "Dodavanje povrća: Dodajte ukiseljenu šargarepu i krastavac (ocedite tečnost). Stavite sveži korijander i jalapeño papriku (ako koristite).",
      "Dodavanje začina: Premažite majonezom i sriracha sosom po ukusu.",
      "Završetak: Poklopite sendvič gornjom polovinom bageta.",
      "Serviranje: Isecite 'Banh Mi' na pola ili na manje komade, i odmah poslužite."
    ],
    prepTime: "30 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Corn Dogs": {
    name: "Corn Dogs",
    description: "Ukusna i brza užina, idealna za decu i odrasle. Kobasice umočene u testo od kukuruznog brašna i pržene do zlatne boje.",
    ingredients: [
      "6 viršli (hot dogs)",
      "1 šolja kukuruznog brašna",
      "1 šolja pšeničnog brašna",
      "1/4 šolje šećera",
      "1 kašika praška za pecivo",
      "1/2 kašičice soli",
      "1 jaje",
      "1 šolja mleka",
      "Ulje za prženje",
      "6 štapića za ražnjiće"
    ],
    instructions: [
      "U velikoj posudi pomešajte kukuruzno brašno, pšenično brašno, šećer, prašak za pecivo i so.",
      "U drugoj posudi umutite jaje i mleko.",
      "Sipajte mokre sastojke u suve sastojke i mešajte dok se sve ne sjedini. Izbegavajte grudvice.",
      "U visoku šerpu sipajte ulje za prženje (oko 5-7 cm dubine) i zagrejte ga na srednjoj vatri (oko 180°C). Proverite temperaturu sa kuhinjskim termometrom.",
      "Osušite viršle papirnim ubrusom.",
      "Nabodite svaku viršlu na štapić za ražnjiće.",
      "Ulijte smesu za testo u visoku, usku čašu ili teglu.",
      "Umočite svaku viršlu u smesu za testo, vodeći računa da je cela viršla prekrivena.",
      "Pažljivo spustite umočenu viršlu u vruće ulje.",
      "Pržite 2-3 minuta, dok ne porumeni sa svih strana.",
      "Izvadite corn dog iz ulja i stavite ga na papirni ubrus da se ocedi višak masnoće.",
      "Ponavljajte postupak sa preostalim viršlama.",
      "Poslužite toplo sa kečapom, senfom ili sosom po želji."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 6
  },

  "Fish and Chips": {
    name: "Fish and Chips",
    description: "Klasično britansko jelo, pržena riba i pomfrit, savršeno za brzi ručak ili večeru.",
    ingredients: [
      "2 fileta bele ribe (bakalar, oslić ili som) oko 150g svaki",
      "150g brašna",
      "1 kašičica praška za pecivo",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "240ml hladnog svetlog piva ili gazirane vode",
      "2 velika krompira, oguljena i isečena na štapiće (pomfrit)",
      "Ulje za prženje (suncokretovo ili biljno)",
      "Limun, za serviranje (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Pripremite pomfrit: Isecite krompir na štapiće debljine oko 1 cm. Isperite ih hladnom vodom i dobro osušite papirnim ubrusima.",
      "Zagrejte ulje u dubokom tiganju ili fritezi na 160°C.",
      "Pržite pomfrit u dva navrata. Prvo prženje na 160°C oko 5-7 minuta, dok ne omekša. Izvadite iz ulja i ostavite sa strane.",
      "Pripremite smesu za ribu: U posudi pomešajte brašno, prašak za pecivo, so i biber.",
      "Postepeno dodajte hladno pivo ili gaziranu vodu i mešajte dok ne dobijete glatku smesu. Nemojte previše mešati.",
      "Zagrejte ulje na 180°C.",
      "Obrišite filete ribe papirnim ubrusima i posolite ih i pobiberite.",
      "Umočite svaki filet ribe u smesu, pazeći da bude potpuno prekriven.",
      "Pažljivo spustite ribu u zagrejano ulje i pržite 5-7 minuta sa svake strane, dok ne postane zlatno-smeđa i hrskava.",
      "Izvadite ribu iz ulja i stavite je na papirne ubruse da se ocedi višak masnoće.",
      "Drugo prženje pomfrita: Povećajte temperaturu ulja na 180°C i pržite pomfrit još 2-3 minuta, dok ne postane zlatno-smeđe boje i hrskav.",
      "Izvadite pomfrit iz ulja i stavite ga na papirne ubruse da se ocedi višak masnoće. Posolite ga.",
      "Poslužite ribu i pomfrit toplo, sa kriškom limuna (opciono)."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 2
  },

  "Empanadas": {
    name: "Empanadas",
    description: "Mali, ukusni džepovi od testa punjeni pikantnim mesom, savršeni kao užina ili lagani obrok.",
    ingredients: [
      "Za testo:",
      "250g brašna",
      "1 kašičica soli",
      "125g hladnog putera, isečenog na kockice",
      "75-100ml hladne vode",
      "Za fil:",
      "500g mlevene govedine",
      "1 srednji luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, sitno iseckana",
      "1 zelena paprika, sitno iseckana",
      "1 kašičica mlevene paprike",
      "1/2 kašičice kumina",
      "1/4 kašičice čilija u prahu (opciono)",
      "1/2 kašičice origana",
      "So i biber po ukusu",
      "2 kašike maslinovog ulja",
      "1/4 šolje goveđe supe ili vode",
      "1 tvrdo kuvano jaje, iseckano (opciono)",
      "Šaka zelenih maslina, iseckane (opciono)",
      "Za premaz:",
      "1 jaje, umućeno"
    ],
    instructions: [
      "Priprema testa: U velikoj posudi pomešajte brašno i so. Dodajte hladan puter i utrljajte ga prstima dok ne dobijete smesu sličnu prezli. Postepeno dodajte hladnu vodu, kašiku po kašiku, dok se testo ne sjedini. Formirajte disk, umotajte ga u plastičnu foliju i stavite u frižider na najmanje 30 minuta.",
      "Priprema fila: U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte mlevenu govedinu i pržite je dok ne porumeni. Ocedite višak masnoće.",
      "Dodajte luk, beli luk, crvenu i zelenu papriku u tiganj i pržite dok povrće ne omekša, oko 5-7 minuta.",
      "Dodajte mlevenu papriku, kumin, čili u prahu (ako ga koristite), origano, so i biber. Dobro promešajte.",
      "Ulijte goveđu supu ili vodu i pustite da provri. Smanjite vatru i kuvajte dok se tečnost ne redukuje, oko 10 minuta. Umešajte iseckano tvrdo kuvano jaje i masline (ako ih koristite). Ostavite fil da se ohladi.",
      "Sastavljanje empanada: Izvadite testo iz frižidera i razvucite ga na pobrašnjenoj površini na debljinu od oko 3 mm. Koristeći okrugli rezač ili tanjir prečnika oko 10 cm, izrežite krugove.",
      "Stavite kašiku ohlađenog fila na sredinu svakog kruga testa.",
      "Preklopite testo preko fila da formirate polumesec. Pritisnite ivice viljuškom da ih zatvorite i da napravite ukras.",
      "Poređajte empanade na pleh obložen papirom za pečenje. Premažite ih umućenim jajetom.",
      "Pečenje empanada: Pecite u prethodno zagrejanoj rerni na 180°C oko 20-25 minuta, ili dok ne postanu zlatno smeđe.",
      "Ostavite da se malo ohlade pre služenja."
    ],
    prepTime: "45 minuta",
    cookTime: "25 minuta",
    servings: 12
  },

  "Arepas": {
    name: "Arepas",
    description: "Arepas su vrsta pljosnate pogače od kukuruznog brašna, popularne u Venecueli i Kolumbiji. Odlične su kao prilog, predjelo ili baza za razne nadeve.",
    ingredients: [
      "2 šolje pre-cooked kukuruznog brašna (harina P.A.N.)",
      "2 ½ šolje tople vode",
      "1 kašičica soli",
      "2 kašike ulja (za prženje)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte kukuruzno brašno i so.",
      "Postepeno dodajte toplu vodu, mešajući dok se ne formira meko testo. Mesite rukama 2-3 minuta.",
      "Ostavite testo da odstoji 5 minuta da brašno upije vodu.",
      "Podelite testo na 6-8 jednakih delova.",
      "Oblikujte svaki deo u lopticu, a zatim je spljoštite u disk debljine oko 1 cm.",
      "Zagrejte ulje u velikom tiganju na srednjoj vatri.",
      "Pržite arepas 5-7 minuta sa svake strane, dok ne postanu zlatno-smeđe i hrskave.",
      "Služite tople, same ili sa nadevom po želji (sir, avokado, piletina, meso, itd.)."
    ],
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: 8
  },

  "Churros": {
    name: "Churros",
    description: "Hrskavi i ukusni španski uštipci, idealni za doručak ili desert.",
    ingredients: [
      "1 šolja (240 ml) vode",
      "1/2 šolje (115 g) putera, nesoljenog",
      "1/4 kašičice soli",
      "1 kašika šećera",
      "1 šolja (120 g) brašna, višenamenskog",
      "2 velika jaja",
      "Biljno ulje, za prženje",
      "Šećer i cimet, za posipanje (po ukusu)"
    ],
    instructions: [
      "U srednjoj šerpi pomešajte vodu, puter, so i šećer. Stavite na srednju vatru i zagrejte dok se puter ne otopi i smesa ne proključa.",
      "Sklonite šerpu sa vatre i odmah dodajte brašno. Mešajte drvenom kašikom dok se smesa ne sjedini i formira kuglu koja se odvaja od zidova šerpe.",
      "Ostavite smesu da se ohladi nekoliko minuta.",
      "U ohlađenu smesu dodajte jedno po jedno jaje, muteći mikserom ili drvenom kašikom nakon svakog dodavanja, dok se smesa potpuno ne sjedini i postane glatka.",
      "Sipajte smesu u poslastičarsku kesu sa nastavkom u obliku zvezde.",
      "U dubljem tiganju zagrejte biljno ulje na srednjoj vatri.",
      "Iscedite smesu iz poslastičarske kese direktno u vrelo ulje, formirajući štapiće dužine oko 10-15 cm.",
      "Pržite churros 2-3 minuta sa svake strane, dok ne postanu zlatno smeđi i hrskavi.",
      "Izvadite churros iz ulja i stavite ih na papirni ubrus da se ocede od viška masnoće.",
      "Pomešajte šećer i cimet u činiji. Dok su churros još topli, uvaljajte ih u smesu šećera i cimeta.",
      "Poslužite odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 20
  },

  "Pretzel": {
    name: "Pretzel",
    description: "Hrskavi i slani pereci, savršeni kao užina ili prilog.",
    ingredients: [
      "1 1/2 šolje tople vode (oko 37-43°C)",
      "1 kašika šećera",
      "2 1/4 kašičice suvog kvasca (1 kesica)",
      "4 1/2 šolje brašna",
      "1 1/2 kašičice soli",
      "1/4 šolje sode bikarbone",
      "8 šolje vode",
      "1 jaje, umućeno",
      "Gruba morska so, za posipanje"
    ],
    instructions: [
      "U velikoj posudi pomešajte toplu vodu, šećer i kvasac. Ostavite da stoji 5 minuta dok se kvasac ne zapeni.",
      "Dodajte brašno i so u smesu kvasca. Mesite dok ne dobijete glatko i elastično testo (oko 5-7 minuta).",
      "Prebacite testo u podmazanu posudu, okrenite ga da se obloži uljem, pokrijte i ostavite da naraste na toplom mestu oko 1 sat, ili dok se ne udvostruči.",
      "Zagrejte rernu na 220°C. Obložite dva pleha za pečenje papirom za pečenje.",
      "U velikom loncu prokuvajte 8 šolja vode. Polako dodajte sodu bikarbonu.",
      "Podelite testo na 8 jednakih delova. Oblikujte svaki deo u dugačku traku (oko 60 cm).",
      "Oblikujte traku u oblik pereca.",
      "Pažljivo spuštajte perece u vodu sa sodom bikarbonom na 30 sekundi sa svake strane.",
      "Izvadite perece iz vode pomoću rešetkaste kašike i stavite ih na pripremljene plehove za pečenje.",
      "Premažite perece umućenim jajetom i pospite grubom morskom solju.",
      "Pecite 15-20 minuta, ili dok ne dobiju zlatno smeđu boju.",
      "Ostavite da se malo ohlade pre služenja."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 8
  },

  "Kebab": {
    name: "Kebab",
    description: "Tradicionalno jelo sa roštilja, meso na ražnjiću.",
    ingredients: [
      "500g jagnjetine ili govedine, isečene na kockice veličine 2-3 cm",
      "1 velika glavica crnog luka, iseckana na sitno",
      "2 čena belog luka, izgnječena",
      "2 kašike maslinovog ulja",
      "1 kašičica mlevene paprike (slatka ili ljuta, po ukusu)",
      "1/2 kašičice kumina",
      "1/2 kašičice korijandera (mlevenog)",
      "1/4 kašičice cimeta",
      "So i biber, po ukusu",
      "Drveni štapići za ražnjiće, potopljeni u vodu najmanje 30 minuta"
    ],
    instructions: [
      "U velikoj činiji pomešati meso, crni luk, beli luk, maslinovo ulje, mlevenu papriku, kumin, korijander, cimet, so i biber. Dobro promešati i utrljati začine u meso.",
      "Pokriti činiju i ostaviti da se marinira u frižideru najmanje 2 sata, ili najbolje preko noći.",
      "Kada ste spremni za kuvanje, izvadite meso iz frižidera i ostavite ga na sobnoj temperaturi oko 30 minuta.",
      "Nanižite meso na pripremljene štapiće za ražnjiće.",
      "Zagrejte roštilj na srednju vatru.",
      "Pecite kebab na roštilju, okrećući ga povremeno, dok meso ne bude pečeno po želji, oko 15-20 minuta.",
      "Skinite kebab sa roštilja i ostavite ga da odstoji nekoliko minuta pre serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 4
  },

  "Samosa": {
    name: "Samosa",
    description: "Hrskavi i ukusni indijski jastučići punjeni začinjenim krompirom i graškom. Savršeno predjelo ili užina.",
    ingredients: [
      "Za testo:",
      "2 šolje (250g) brašna",
      "1/4 kašičice soli",
      "4 kašike ulja (biljno ili ghee)",
      "1/2 šolje (120ml) tople vode (ili po potrebi)",
      "Za punjenje:",
      "2 srednja krompira, kuvana i izgnječena",
      "1/2 šolje smrznutog graška",
      "1 kašika biljnog ulja",
      "1/2 kašičice semena kima",
      "1/2 kašičice mlevenog korijandera",
      "1/4 kašičice kurkume u prahu",
      "1/4 kašičice garam masale",
      "1/4 kašičice čili praha (po ukusu)",
      "1/2 kašičice đumbira, sitno iseckanog",
      "1 zelena ljuta papričica, sitno iseckana (opciono)",
      "So po ukusu",
      "Sok od 1/2 limuna",
      "Sveži korijander, sitno iseckan (za ukrašavanje)",
      "Biljno ulje (za duboko prženje)"
    ],
    instructions: [
      "Napravite testo: U velikoj posudi pomešajte brašno i so. Dodajte ulje i trljajte prstima dok smesa ne podseća na prezle. Postepeno dodajte toplu vodu i zamesite glatko, ali čvrsto testo. Pokrijte testo vlažnom krpom i ostavite da odstoji 30 minuta.",
      "Pripremite punjenje: U tiganju zagrejte ulje na srednjoj vatri. Dodajte seme kima i pržite dok ne zamiriše. Dodajte đumbir i zelenu ljutu papričicu (ako koristite) i pržite kratko. Dodajte korijander, kurkumu, garam masalu i čili prah. Pržite 30 sekundi.",
      "Sjedinite punjenje: Dodajte kuvani i izgnječeni krompir i grašak u tiganj sa začinima. Dobro promešajte da se svi sastojci sjedine. Dodajte so po ukusu i sok od limuna. Sklonite sa vatre i ostavite da se ohladi.",
      "Formirajte samose: Podelite testo na 12 jednakih delova. Razvaljajte svaki deo u tanak krug (oko 10 cm u prečniku). Presecite krug na pola.",
      "Sklopite samose: Uzmite jednu polovinu kruga i navlažite pravu ivicu vodom. Preklopite je tako da se spoje dve prave ivice, formirajući konus. Pritisnite ivice da se zalepe. Napunite konus sa oko 2 kašike punjenja. Navlažite gornju ivicu konusa vodom i zatvorite je, formirajući trouglasti jastučić (samosu). Ponavljajte postupak dok ne potrošite sav materijal.",
      "Pržite samose: Zagrejte biljno ulje u dubokoj šerpi ili fritezi na srednjoj vatri (oko 175°C). Pažljivo spuštajte samose u vrelo ulje, u serijama, pazeći da ne pretrpate šerpu. Pržite ih 6-8 minuta, ili dok ne postanu zlatno braon i hrskave, okrećući ih povremeno da se ravnomerno isprže.",
      "Ocedite i poslužite: Izvadite pržene samose iz ulja i stavite ih na papirne ubruse da se ocede od viška masnoće. Poslužite tople, ukrašene svežim korijanderom, uz chutney po želji (npr. mint chutney ili tamarind chutney)."
    ],
    prepTime: "30 minuta",
    cookTime: "25 minuta",
    servings: 12
  },

  "Spring Rolls": {
    name: "Spring Rolls",
    description: "Hrskavi i osvežavajući prolećni rolnice, savršeni kao predjelo ili lagani obrok.",
    ingredients: [
      "12 pirinčanih kora za rolnice (rice paper wrappers)",
      "100g pirinčanih rezanaca",
      "1 šargarepa, iseckana na tanke štapiće",
      "1 krastavac, iseckan na tanke štapiće",
      "1 crvena paprika, iseckana na tanke štapiće",
      "100g sveže nane",
      "100g svežeg korijandera",
      "100g iceberg salate, iseckane",
      "100g kuvanih gambora (opciono)",
      "Slatko-kiseli sos za serviranje"
    ],
    instructions: [
      "Pripremite rezance: Skuvajte pirinčane rezance prema uputstvima na pakovanju. Ocedite ih i isperite hladnom vodom da se zaustavi kuvanje.",
      "Pripremite povrće: Operite i iseckajte svo povrće na tanke štapiće ili trake. Isperite i osušite nanu i korijander.",
      "Omekšajte pirinčane kore: Napunite veliki tanjir ili posudu toplom vodom. Jednu po jednu pirinčanu koru uronite u toplu vodu na nekoliko sekundi dok ne omekša i postane savitljiva.",
      "Napunite rolnice: Položite omekšanu pirinčanu koru na ravnu površinu. Na donju trećinu kore stavite malo pirinčanih rezanaca, šargarepe, krastavca, paprike, salate, nane, korijandera i gambora (ako koristite).",
      "Uvijte rolnice: Preklopite donji deo kore preko fila, zatim savijte strane prema unutra i čvrsto uvijte rolnicu prema gore.",
      "Ponavljajte: Ponavljajte postupak sa preostalim pirinčanim korama i filom.",
      "Servirajte: Servirajte rolnice odmah sa slatko-kiselim sosom za umakanje."
    ],
    prepTime: "30 minuta",
    cookTime: "5 minuta",
    servings: 12
  },

  "Dumplings": {
    name: "Dumplings",
    description: "Mali, mekani jastučići testa, savršeni kuvani ili prženi, mogu se puniti raznim ukusnim nadevima.",
    ingredients: [
      "Za testo:",
      "250g brašna",
      "120ml vrele vode",
      "1/2 kašičice soli",
      "Za nadev (primer):",
      "200g mlevene svinjetine",
      "1 glavica crnog luka, sitno iseckana",
      "1 kašika soja sosa",
      "1 kašičica đumbira, rendanog",
      "1/2 kašičice belog bibera",
      "1 kašika susamovog ulja",
      "2 kašike seckanog vlašca"
    ],
    instructions: [
      "Pripremite testo: U velikoj posudi, pomešajte brašno i so. Dodajte vrelu vodu i mešajte dok se ne formira grubo testo.",
      "Izvadite testo na pobrašnjenu površinu i mesite 5-7 minuta, dok ne postane glatko i elastično. Po potrebi dodajte još malo brašna.",
      "Pokrijte testo krpom ili plastičnom folijom i ostavite da odstoji 30 minuta.",
      "Pripremite nadev: U posudi, pomešajte mlevenu svinjetinu, crni luk, soja sos, đumbir, beli biber, susamovo ulje i vlašac. Dobro promešajte da se svi sastojci sjedine.",
      "Formirajte dumplings: Podelite testo na dva dela. Razvaljajte jedan deo u dugačku rolnu. Isecite rolnu na male komade (oko 1-2 cm debljine).",
      "Svaki komad testa razvaljajte u tanak krug (oko 7-8 cm prečnika). Koristite pobrašnjenu površinu da se testo ne zalepi.",
      "Na sredinu svakog kruga testa stavite kašičicu nadeva.",
      "Navlažite ivice testa vodom. Preklopite testo preko nadeva i pritisnite ivice da se dobro zatvore, formirajući polumesec. Možete napraviti i nabore na ivicama za lepši izgled.",
      "Kuvajte dumplings: Zagrejte veliki lonac sa vodom do ključanja. Pažljivo ubacite dumplings u vodu. Kada isplivaju na površinu, dodajte šolju hladne vode. Kada ponovo isplivaju, kuvajte ih još 2-3 minuta.",
      "Izvadite dumplings iz vode šupljikavom kašikom.",
      "Poslužite: Poslužite tople dumplings sa soja sosom, sirćetom ili drugim umacima po želji."
    ],
    prepTime: "45 minuta",
    cookTime: "15 minuta",
    servings: 30
  },

  "Bao Buns": {
    name: "Bao Buns",
    description: "Mekane i vazdušaste parene kiflice, savršene za punjenje različitim ukusima.",
    ingredients: [
      "300g brašna za peciva (ili obično brašno)",
      "1 kašičica praška za pecivo",
      "1/2 kašičice sode bikarbone",
      "30g šećera",
      "Prstohvat soli",
      "150ml tople vode",
      "2 kašike biljnog ulja",
      "1 kašičica belog sirćeta",
      "12 papirnih podmetača za kolače (opciono)"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno, prašak za pecivo, sodu bikarbonu, šećer i so.",
      "U posebnoj posudi pomešajte toplu vodu, ulje i sirće.",
      "Suve sastojke dodajte mokrim sastojcima i mešajte dok se ne formira mekano testo.",
      "Prebacite testo na pobrašnjenu površinu i mesite 5-7 minuta, dok ne postane glatko i elastično.",
      "Formirajte testo u loptu, vratite u posudu, pokrijte i ostavite da odstoji 30 minuta.",
      "Nakon 30 minuta, testo podelite na 12 jednakih delova.",
      "Svaki deo razvaljajte u oval debljine oko 0.5 cm.",
      "Preklopite oval na pola, premazite unutrašnju stranu sa malo ulja (ovo će sprečiti da se zalepe).",
      "Stavite svaku kiflicu na papirni podmetač (ako koristite).",
      "Poređajte kiflice u posudu za kuvanje na pari (parobrod). Uverite se da ima dovoljno prostora između njih.",
      "Zakuvajte vodu u velikom loncu i stavite posudu za kuvanje na pari iznad lonca.",
      "Poklopite i parite 15-20 minuta, ili dok kiflice ne budu naduvene i mekane na dodir.",
      "Isključite vatru i ostavite kiflice da odstoje u pari još 5 minuta pre nego što ih izvadite."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 12
  },

  "Takoyaki": {
    name: "Takoyaki",
    description: "Tradicionalna japanska ulična hrana, loptice od testa punjene hobotnicom.",
    ingredients: [
      "200g brašna za kolače (ili obično brašno)",
      "600ml dashi bujona (može se napraviti od dashi praha)",
      "2 jajeta",
      "1 kašičica soja sosa",
      "1/2 kašičice soli",
      "1/4 kašičice šećera",
      "150g kuvane hobotnice, iseckane na kockice",
      "1/2 šolje iseckanog mladog luka",
      "1/2 šolje tenkasu (ostaci tempure)",
      "1/4 šolje iseckanog beni shoga (ukiseljeni đumbir)",
      "Takoyaki sos",
      "Japanski majonez (Kewpie)",
      "Aonori (sušene alge u prahu)",
      "Katsuobushi (sušene ljuspice tune)",
      "Biljno ulje za kuvanje"
    ],
    instructions: [
      "U velikoj posudi, pomešajte brašno, dashi bujon, jaja, soja sos, so i šećer. Dobro promešajte dok ne dobijete glatku smesu.",
      "Zagrejte takoyaki tiganj na srednjoj vatri. Namažite svaku rupu sa biljnim uljem.",
      "Sipajte smesu u svaku rupu tiganja, otprilike do pola.",
      "Dodajte komadić hobotnice, malo mladog luka, tenkasu i beni shoga u svaku rupu.",
      "Kada se testo počne peći i formirati koricu na dnu, počnite okretati loptice pomoću štapića ili posebnog takoyaki alata.",
      "Nastavite okretati loptice dok ne postanu zlatno smeđe i okrugle. Kuvanje traje oko 5-7 minuta po turi.",
      "Izvadite takoyaki loptice iz tiganja i stavite ih na tanjir.",
      "Prelijte takoyaki sosom, japanskim majonezom, pospite aonori i katsuobushi."
    ],
    prepTime: "30 minuta",
    cookTime: "20 minuta",
    servings: 24
  },

  "Elote": {
    name: "Elote",
    description: "Tradicionalni meksički kukuruz na klipu, savršen kao ulična hrana ili prilog.",
    ingredients: [
      "4 klipa kukuruza, sa komušinom i svilenom kosom uklonjenom",
      "1/2 šolje majoneza",
      "1/2 šolje kisele pavlake ili grčkog jogurta",
      "1/4 šolje izmrvljenog cotija sira (može i feta sir)",
      "2 kašike seckanog svežeg korijandera",
      "1 čen belog luka, izgnječen",
      "1/2 kašičice čili praha",
      "Sok od 1/2 limete",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte roštilj ili gril tiganj na srednje jakoj vatri. Ako nemate roštilj, možete koristiti i rernu zagrejanu na 200°C.",
      "Skuvajte kukuruz. Ako koristite roštilj, premažite klipove sa malo ulja i pecite 12-15 minuta, okrećući ih povremeno, dok kukuruz ne omekša i dobije blagu boju. Ako koristite rernu, umotajte svaki klip u aluminijumsku foliju i pecite 20 minuta. Kukuruz možete i prokuvati 5-7 minuta.",
      "Dok se kukuruz kuva, pripremite preliv. U maloj posudi pomešajte majonez, kiselu pavlaku, izgnječeni beli luk, čili prah, sok od limete, so i biber. Dobro promešajte.",
      "Kada je kukuruz gotov, ostavite ga da se malo ohladi.",
      "Obilno premažite svaki klip pripremljenim prelivom.",
      "Pospite izmrvljenim cotija sirom (ili feta sirom) i seckanim korijanderom.",
      "Odmah poslužite."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Satay": {
    name: "Satay",
    description: "Satay je ukusno jelo sa roštilja, popularno u jugoistočnoj Aziji, koje se sastoji od mariniranog mesa nabodenog na štapiće i serviranog sa sosom od kikirikija.",
    ingredients: [
      "500g pilećih prsa, isečenih na tanke trake",
      "1/4 šolje soja sosa",
      "2 kašike meda",
      "1 kašika soka od limete",
      "1 kašika biljnog ulja",
      "2 čena belog luka, izgnječena",
      "1/2 kašičice mlevenog đumbira",
      "1/4 kašičice kurkume",
      "Drveni štapići za ražnjiće, potopljeni u vodi 30 minuta",
      "Za sos od kikirikija:",
      "1/2 šolje putera od kikirikija",
      "1/4 šolje tople vode",
      "2 kašike soja sosa",
      "1 kašika soka od limete",
      "1 kašičica meda",
      "1/2 kašičice čili sosa (opciono)"
    ],
    instructions: [
      "U velikoj posudi pomešajte soja sos, med, sok od limete, biljno ulje, beli luk, đumbir i kurkumu.",
      "Dodajte piletinu u marinadu, dobro promešajte i ostavite da se marinira najmanje 30 minuta, ili idealno, nekoliko sati u frižideru.",
      "Dok se piletina marinira, pripremite sos od kikirikija. U manjoj posudi umutite puter od kikirikija, toplu vodu, soja sos, sok od limete, med i čili sos (ako ga koristite) dok ne dobijete glatku smesu.",
      "Zagrejte roštilj ili grill tiganj na srednju temperaturu.",
      "Izvadite piletinu iz marinade i nanižite trake na pripremljene štapiće.",
      "Pecite ražnjiće 5-7 minuta sa svake strane, ili dok piletina ne bude pečena i blago pougljena.",
      "Poslužite satay toplo, sa sosom od kikirikija sa strane."
    ],
    prepTime: "30 minuta",
    cookTime: "15 minuta",
    servings: 4
  },

  "Crepes": {
    name: "Crepes",
    description: "Tanke palačinke, idealne za slatka i slana punjenja.",
    ingredients: [
      "125g brašna",
      "250ml mleka",
      "2 jaja",
      "30g rastopljenog putera, plus malo za podmazivanje tiganja",
      "1 kašičica šećera",
      "Prstohvat soli"
    ],
    instructions: [
      "U velikoj činiji, pomešajte brašno, šećer i so.",
      "U drugoj činiji, umutite mleko, jaja i rastopljeni puter.",
      "Postepeno dodajte tečne sastojke suvim sastojcima, neprestano mešajući žicom dok ne dobijete glatku smesu bez grudvica.",
      "Ostavite smesu da odstoji 15 minuta.",
      "Zagrejte blago podmazan tiganj (najbolje onaj za palačinke) na srednjoj vatri.",
      "Sipajte kutlaču smese na zagrejan tiganj i brzo rotirajte tiganj kako biste ravnomerno rasporedili smesu.",
      "Pecite oko 1-2 minuta sa svake strane, ili dok ne porumeni.",
      "Ponovite postupak sa preostalom smesom.",
      "Služite toplo sa omiljenim punjenjem."
    ],
    prepTime: "5 minuta",
    cookTime: "20 minuta",
    servings: 10
  }
};