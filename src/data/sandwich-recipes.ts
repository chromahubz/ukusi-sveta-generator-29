export const sandwichRecipes = [
  {
    id: "club-sandwich",
    name: "Club Sandwich",
    description: "Klasičan i zadovoljavajući sendvič sa slojevima piletine, slanine, zelene salate, paradajza i majoneza. Savršen za ručak ili laganu večeru.",
    category: "sandwich",
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: "2 sendviča",
    difficulty: "easy",
    ingredients: [
      "6 kriški tost hleba",
      "150g kuvane piletine, tanko isečene",
      "4 kriške slanine, pržene i hrskave",
      "1/2 avokada, isečen na kriške (opciono)",
      "1/4 glavice zelene salate, iseckana",
      "1 paradajz, isečen na kriške",
      "4 kašike majoneza",
      "So i biber po ukusu"
    ],
    instructions: [
      "Ispržite slaninu dok ne postane hrskava. Ostavite je da se ocedi na papirnom ubrusu.",
      "Tostirajte hleb po želji.",
      "Namažite majonez na tri kriške tosta.",
      "Na jednu krišku tosta sa majonezom stavite polovinu iseckane zelene salate, polovinu isečenog paradajza i polovinu isečene piletine. Posolite i pobiberite po ukusu.",
      "Preko piletine stavite dve kriške slanine.",
      "Preko slanine, ako koristite, stavite kriške avokada.",
      "Preklopite drugim tostom sa majonezom, namazanom stranom prema dole.",
      "Ponavite korake 4-6 sa preostalom zelenskom salatom, paradajzom, piletinom i slaninom.",
      "Preklopite trećom kriškom tosta sa majonezom, namazanom stranom prema dole.",
      "Pažljivo presecite sendvič na pola, po dijagonali. Ako želite, možete da ga pričvrstite čačkalicama da se ne raspadne.",
      "Poslužite odmah."
    ],
    nutritionInfo: {
      calories: "600-800",
      protein: "30-40g",
      fat: "40-50g",
      carbohydrates: "40-50g"
    },
    notes: [
      "Za vegetarijansku verziju, zamenite piletinu tofuom ili portobello pečurkama.",
      "Dodajte malo senfa ili ljutog sosa za dodatni ukus.",
      "Možete koristiti različite vrste hleba, kao što su integralni ili ražani hleb."
    ]
  },
  {
    id: "blt",
    name: "BLT",
    description: "Klasican sendvic sa slaninom, zelenom salatom i paradajzom.",
    category: "sandwich",
    prepTime: "5 minuta",
    cookTime: "10 minuta",
    servings: "1 sendvič",
    difficulty: "easy",
    ingredients: [
      "2-3 snite slanine",
      "2 snite hleba",
      "1-2 lista zelene salate",
      "2-3 snite paradajza",
      "Majonez (po ukusu)",
      "So i biber (po ukusu)"
    ],
    instructions: [
      "Pecite slaninu u tiganju na srednjoj vatri dok ne postane hrskava. Ocedite je na papirnom ubrusu da uklonite višak masnoće.",
      "Tostirajte hleb po želji.",
      "Namažite obe snite hleba majonezom.",
      "Na jednu snitu hleba stavite listove zelene salate.",
      "Dodajte snite paradajza preko salate. Posolite i pobiberite po ukusu.",
      "Stavite pecenu slaninu preko paradajza.",
      "Poklopite drugom snitom hleba.",
      "Presecite sendvic na pola i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "400-500",
      fat: "30-40g",
      protein: "15-20g",
      carbohydrates: "20-30g"
    },
    notes: [
      "Mozete dodati avokado za kremastiju teksturu.",
      "Koristite hleb po svom izboru, na primer, integralni, beli ili kiselo testo.",
      "Za pikantniji ukus, dodajte malo sriracha majoneza."
    ]
  },
  {
    id: "grilled-cheese",
    name: "Grilled Cheese",
    description: "Jednostavan i brz recept za klasični topli sendvič sa sirom.",
    category: "sandwich",
    prepTime: "2 minuta",
    cookTime: "5 minuta",
    servings: "1 porcija",
    difficulty: "easy",
    ingredients: [
      "2 kriške hleba (beli, integralni ili po izboru)",
      "2 supene kašike putera, omekšalog",
      "2 kriške sira (čedar, gauda, edamer ili po izboru)"
    ],
    instructions: [
      "Namažite jednu stranu svake kriške hleba omekšalim puterom.",
      "Položite jednu krišku hleba, namazanom stranom nadole, u tiganj na srednjoj vatri.",
      "Stavite dve kriške sira na hleb u tiganju.",
      "Poklopite sirom drugom kriškom hleba, namazanom stranom nagore.",
      "Pecite sendvič 2-3 minuta sa svake strane, ili dok hleb ne postane zlatno braon i sir se otopi. Lagano pritisnite spatulom za ravnomerno pečenje.",
      "Izvadite sendvič iz tiganja i isecite na pola pre serviranja."
    ],
    nutritionInfo: {
      calories: "300-400",
      fat: "20-30g",
      protein: "15-20g",
      carbohydrates: "20-30g"
    },
    notes: [
      "Za dodatni ukus, dodajte malo belog luka u prahu u puter pre mazanja hleba.",
      "Možete koristiti različite vrste sireva za različite ukuse.",
      "Poslužite sa supom ili salatom."
    ]
  },
  {
    id: "panini",
    name: "Panini",
    description: "Brzi i ukusni sendviči idealni za doručak, ručak ili večeru.",
    category: "sandwich",
    prepTime: "10 minuta",
    cookTime: "5-7 minuta",
    servings: "2 porcije",
    difficulty: "easy",
    ingredients: [
      "4 kriške hleba (po izboru)",
      "100g šunke (ili pršute)",
      "100g sira (gauda, kačkavalj, mocarela)",
      "2 kašike pesto sosa (ili majoneza/senfa)",
      "2 kašike maslinovog ulja (ili putera)",
      "Paradajz (opciono)",
      "Zelena salata (opciono)"
    ],
    instructions: [
      "Pripremite sastojke: Narežite sir i šunku na tanke kriške.",
      "Namažite hleb: Na dve kriške hleba nanesite pesto sos (ili majonez/senf).",
      "Složite sastojke: Na premazani hleb složite šunku, sir, paradajz (ako koristite) i zelenu salatu (ako koristite).",
      "Poklopite: Prekrijte drugom kriškom hleba.",
      "Pripremite panini grill: Zagrejte panini grill ili tiganj na srednjoj vatri.",
      "Namažite spoljašnjost: Spoljašnje strane sendviča premažite maslinovim uljem (ili puterom).",
      "Pecite: Stavite sendviče u panini grill (ili tiganj) i pecite 5-7 minuta, ili dok hleb ne postane zlatno smeđi i sir se ne otopi.",
      "Poslužite: Izvadite panini sa grilla i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "400-500",
      protein: "25-30g",
      fat: "20-25g",
      carbohydrates: "30-40g"
    },
    notes: [
      "Možete koristiti bilo koje sastojke po vašem ukusu.",
      "Za hrskaviji panini, pecite ga malo duže.",
      "Poslužite uz prilog kao što je salata ili pomfrit."
    ]
  },
  {
    id: "reuben",
    name: "Reuben",
    description: "Sendvič sa tanko narezanim junećim prsima, kiselim kupusom, švajcarskim sirom i ruskim dresingom, grilovan između kriški ražanog hleba.",
    category: "sandwich",
    prepTime: "10 minuta",
    cookTime: "5 minuta",
    servings: "1 sendvič",
    difficulty: "medium",
    ingredients: [
      "2 kriške ražanog hleba",
      "2 kašike putera, omekšalog",
      "100g tanko narezanih junećih prsa (corned beef)",
      "50g kiseli kupus, oceđen",
      "2 kriške švajcarskog sira",
      "2 kašike ruskog dresinga"
    ],
    instructions: [
      "Namažite spoljašnje strane obe kriške hleba puterom.",
      "Na jednu krišku hleba (sa nenamazane strane) rasporedite ruski dresing.",
      "Preko dresinga stavite juneća prsa, kiseli kupus i švajcarski sir.",
      "Prekrijte drugom kriškom hleba (sa nenamazanom stranom).",
      "Zagrejati tiganj ili aparat za sendviče na srednjoj vatri.",
      "Stavite sendvič u tiganj/aparat i grilujte 2-3 minuta sa svake strane, dok hleb ne postane zlatno braon, a sir se otopi i postane mehurast.",
      "Isecite sendvič na pola i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "600-700",
      fat: "40-50g",
      protein: "30-40g",
      carbohydrates: "30-40g"
    },
    notes: [
      "Za dodatnu aromu, možete dodati malo senfa na hleb pre nego što stavite ostale sastojke.",
      "Umesto ruskog dresinga, možete koristiti 'Thousand Island' dresing.",
      "Za hrskaviji kiseli kupus, možete ga blago propržiti u tiganju pre nego što ga stavite na sendvič."
    ]
  },
  {
    id: "philly-cheesesteak",
    name: "Philly Cheesesteak",
    description: "Autentični sendvič sa tanko sečenom govedinom, karamelizovanim lukom i rastopljenim sirom, poslužen u duguljastom hlebu.",
    category: "sandwich",
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: "2 sendviča",
    difficulty: "medium",
    ingredients: [
      "400g tanko sečene govedine (npr. ribeye ili flank steak)",
      "1 veliki luk, isečen na tanke kriške",
      "2 kašike maslinovog ulja",
      "1 zelena paprika, isečena na tanke trake (opciono)",
      "200g provolone sira ili cheddar sira, isečenog na kriške",
      "2 dugačka hleba za sendviče (npr. ciabatta ili baget)",
      "So i biber po ukusu",
      "1 kašika putera"
    ],
    instructions: [
      "U velikom tiganju ili tepsiji zagrejte maslinovo ulje na srednje jakoj vatri.",
      "Dodajte luk i pržite ga 10-15 minuta, dok ne postane mekan i karamelizovan. Povremeno mešajte.",
      "Ako koristite, dodajte zelenu papriku u tiganj sa lukom i pržite još 5 minuta dok ne omekša.",
      "Sklonite luk i papriku sa strane.",
      "U isti tiganj dodajte tanko sečenu govedinu. Pržite je 3-5 minuta, razbijajući je na manje komade lopaticom, dok ne porumeni. Posolite i pobiberite po ukusu.",
      "Smanjite vatru na nisku. Na meso stavite karamelizovani luk i papriku (ako koristite).",
      "Preko mesa i luka poređajte kriške sira.",
      "Poklopite tiganj i ostavite da se sir otopi, oko 1-2 minuta.",
      "Dok se sir topi, premažite unutrašnjost hleba puterom i kratko ga zapecite na zagrejanom tiganju ili u rerni, dok ne postane hrskav.",
      "Otvorite hleb i pažljivo prebacite smesu od mesa, luka i sira u hleb.",
      "Presecite sendvič na pola i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "700-800",
      protein: "40-50g",
      fat: "40-50g",
      carbohydrates: "40-50g"
    },
    notes: [
      "Za intenzivniji ukus, govedinu možete marinirati pre prženja.",
      "Možete koristiti različite vrste sira, u zavisnosti od vašeg ukusa.",
      "Poslužite sa pomfritom, salatom ili čipsom.",
      "Dodajte ljuti sos ili majonez po želji."
    ]
  },
  {
    id: "cuban-sandwich",
    name: "Cuban Sandwich",
    description: "Klasični kubanski sendvič sa svinjetinom, šunkom, sirom, kiselim krastavcima i senfom, pritisnut dok ne postane hrskav i ukusan.",
    category: "sandwich",
    prepTime: "10 minuta",
    cookTime: "5-7 minuta",
    servings: "1 sendvič",
    difficulty: "medium",
    ingredients: [
      "1 dugačka zemička (npr. kubanska zemička ili italijanska zemička)",
      "2 supene kašike žutog senfa",
      "50g pečene svinjetine (leđa, tanko isečena)",
      "50g šunke (kuvane, tanko isečene)",
      "30g švajcarskog sira (tanko isečenog)",
      "2-3 kisela krastavca (isečena po dužini)",
      "2 supene kašike putera (omekšalog)"
    ],
    instructions: [
      "Presecite zemičku po dužini.",
      "Namažite obe polovine zemičke žutim senfom.",
      "Na donju polovinu zemičke stavite pečenu svinjetinu, šunku i švajcarski sir.",
      "Poredjajte kisele krastavce preko sira.",
      "Poklopite gornjom polovinom zemičke.",
      "Namažite spoljašnje strane zemičke omekšalim puterom.",
      "Zagrejte sendvič u presi za panini ili tiganju na srednjoj vatri. Ako koristite tiganj, stavite teški predmet (npr. lonac) preko sendviča kako biste ga pritisnuli.",
      "Pecite 5-7 minuta, ili dok zemička ne postane zlatno smeđa i hrskava, a sir se ne otopi.",
      "Presecite sendvič na pola i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "600-700",
      fat: "30-40g",
      protein: "30-40g",
      carbohydrates: "50-60g"
    },
    notes: [
      "Za autentičan ukus, koristite kubansku zemičku.",
      "Količinu sastojaka možete prilagoditi svom ukusu.",
      "Možete dodati i druge sastojke, kao što su pečeni luk ili ljuti sos."
    ]
  },
  {
    id: "monte-cristo",
    name: "Monte Cristo",
    description: "Ovaj sendvič je savršen spoj slatkog i slanog, idealan za ručak ili večeru. Podseća na francuski tost, ali sa dodatkom šunke i sira.",
    category: "sandwich",
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: "2 sendviča",
    difficulty: "medium",
    ingredients: [
      "4 kriške belog hleba",
      "4 kriške šunke",
      "4 kriške sira (Ementaler ili Gauda)",
      "2 jaja",
      "1/4 šolje mleka",
      "1/4 kašičice muskatnog oraščića",
      "1/4 kašičice cimeta",
      "So i biber po ukusu",
      "2 kašike putera",
      "Šećer u prahu (za posipanje)",
      "Džem od malina ili jagoda (za serviranje)"
    ],
    instructions: [
      "U činiji umutite jaja, mleko, muskatni oraščić, cimet, so i biber.",
      "Na dve kriške hleba stavite po dve kriške šunke i dve kriške sira. Preklopite preostalim kriškama hleba.",
      "U velikom tiganju otopite puter na srednjoj vatri.",
      "Svaki sendvič umočite u smesu od jaja, pazeći da se hleb natopi sa obe strane.",
      "Stavite sendviče u tiganj i pržite oko 3-5 minuta sa svake strane, dok ne postanu zlatno smeđi i sir se ne otopi.",
      "Izvadite sendviče iz tiganja i ostavite ih kratko da se ocede na papirnom ubrusu.",
      "Pospite šećerom u prahu i servirajte sa džemom od malina ili jagoda."
    ],
    nutritionInfo: {
      calories: "450-550",
      fat: "25-35g",
      protein: "25-35g",
      carbohydrates: "30-40g"
    },
    notes: [
      "Možete koristiti i druge vrste sireva, kao što su Gruyère ili Swiss sir.",
      "Za bogatiji ukus, možete dodati malo Dijon senfa između šunke i sira.",
      "Sendviče možete peći i u rerni. U tom slučaju, zagrejte rernu na 180°C, stavite sendviče na pleh obložen papirom za pečenje i pecite oko 15-20 minuta, ili dok ne postanu zlatno smeđi."
    ]
  },
  {
    id: "po-boy",
    name: "Po' Boy",
    description: "Slojeviti sendvič, tipičan za New Orleans, sa prženom morskom hranom i prelivima.",
    category: "sandwich",
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: "2 sendviča",
    difficulty: "medium",
    ingredients: [
      "400g škampi, očišćeni i bez repova",
      "100g kukuruznog brašna",
      "50g brašna",
      "1 kašičica kajenske paprike",
      "1 kašičica belog luka u prahu",
      "1/2 kašičice crnog bibera",
      "So po ukusu",
      "2 bageta, oko 30cm dužine",
      "100g majoneza",
      "2 kašike soka od limuna",
      "1 kašika ljutog sosa (npr. Tabasco)",
      "1 šolja iseckane zelene salate",
      "1 paradajz, isečen na kriške",
      "Kiseli krastavci (po želji)",
      "Biljno ulje, za prženje"
    ],
    instructions: [
      "U dubokoj posudi pomešajte kukuruzno brašno, brašno, kajensku papriku, beli luk u prahu, crni biber i so.",
      "Zagrejte biljno ulje u dubokoj šerpi ili fritezi na 180°C.",
      "Uvaljajte škampe u mešavinu brašna, osiguravajući da su potpuno prekriveni.",
      "Pažljivo spuštajte škampe u vruće ulje i pržite ih 2-3 minuta, ili dok ne postanu zlatno-smeđi i hrskavi.",
      "Izvadite škampe iz ulja i stavite ih na papirni ubrus da se ocede.",
      "Dok se škampi prže, pripremite sos: u maloj posudi pomešajte majonez, sok od limuna i ljuti sos.",
      "Presecite bagete uzduž, ali ne do kraja.",
      "Namažite unutrašnjost bageta sosom od majoneza.",
      "Na donju polovinu bageta stavite zelenu salatu, kriške paradajza i kisele krastavce (ako koristite).",
      "Poređajte pržene škampe preko povrća.",
      "Poklopite drugom polovinom bageta.",
      "Isecite sendvič na pola i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "700-900",
      fat: "40-60g",
      protein: "40-50g",
      carbohydrates: "50-70g"
    },
    notes: [
      "Možete koristiti druge morske plodove umesto škampi, kao što su ostrige ili som.",
      "Za blaži ukus, smanjite količinu kajenske paprike.",
      "Dodajte svoj omiljeni ljuti sos za dodatnu pikantnost."
    ]
  },
  {
    id: "meatball-sub",
    name: "Meatball Sub",
    description: "Klasičan i zasitan sendvič sa sočnim ćuftama u paradajz sosu, preliven topljenim sirom. Savršen za ručak ili večeru.",
    category: "sandwich",
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: "4 sendviča",
    difficulty: "medium",
    ingredients: [
      "500g mlevenog mesa (juneće ili mešano)",
      "1/2 šolje prezli",
      "1/4 šolje rendanog parmezana",
      "1 jaje",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "So i biber po ukusu",
      "1 kašika maslinovog ulja",
      "700g paradajz pirea ili sosa",
      "4 dugačka hleba za sendviče (baget ili slično)",
      "200g mocarele, isečene na kriške",
      "Sveži peršun, seckan (za posipanje)"
    ],
    instructions: [
      "U velikoj posudi, pomešajte mleveno meso, prezle, parmezan, jaje, beli luk, origano, bosiljak, so i biber. Dobro sjedinite sve sastojke.",
      "Oblikujte smesu u male ćufte.",
      "U velikom tiganju, zagrejte maslinovo ulje na srednjoj vatri. Dodajte ćufte i pržite ih dok ne porumene sa svih strana.",
      "Ulijte paradajz sos u tiganj sa ćuftama. Smanjite vatru, poklopite i kuvajte 20 minuta, ili dok se ćufte potpuno ne skuvaju.",
      "Dok se ćufte kuvaju, zagrejte rernu na 180°C.",
      "Presecite hlebove po dužini.",
      "Napunite svaki hleb sa nekoliko ćufti i prelijte sosom.",
      "Rasporedite kriške mocarele preko ćufti.",
      "Stavite sendviče u rernu na 5-10 minuta, ili dok se sir ne istopi i blago porumeni.",
      "Izvadite iz rerne, pospite svežim peršunom i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "600-700",
      protein: "35-45g",
      fat: "30-40g",
      carbohydrates: "50-60g"
    },
    notes: [
      "U sos možete dodati malo crnog vina za bogatiji ukus.",
      "Možete koristiti i gotove ćufte iz prodavnice, ako vam je potrebno da ubrzate proces.",
      "Dodajte malo ljute papričice u prahu u smesu za ćufte za pikantniji ukus."
    ]
  },
  {
    id: "turkey-sandwich",
    name: "Turkey Sandwich",
    description: "Brzi i ukusni sendvič sa ćuretinom, savršen za ručak ili užinu.",
    category: "sandwich",
    prepTime: "5 minuta",
    cookTime: "0 minuta",
    servings: "1 sendvič",
    difficulty: "easy",
    ingredients: [
      "2 kriške hleba (po izboru)",
      "50g narezane ćuretine",
      "1 list zelene salate",
      "1 kriška paradajza",
      "1 kašika majoneza ili senfa (po ukusu)",
      "So i biber (po ukusu)"
    ],
    instructions: [
      "Na jednu krišku hleba nanesite majonez ili senf.",
      "Preko majoneza/senfa stavite list zelene salate.",
      "Preko salate posložite narezanu ćuretinu.",
      "Stavite krišku paradajza preko ćuretine.",
      "Posolite i pobiberite po ukusu.",
      "Poklopite drugom kriškom hleba.",
      "Presecite sendvič na pola, ako želite."
    ],
    nutritionInfo: {
      calories: "300-400",
      protein: "20-30g",
      fat: "15-25g",
      carbohydrates: "20-30g"
    },
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su sir, krastavci ili avokado.",
      "Koristite hleb po izboru: beli, integralni, ražani..."
    ]
  },
  {
    id: "ham-and-cheese",
    name: "Ham and Cheese",
    description: "Jednostavan i brz sendvič, idealan za doručak ili užinu.",
    category: "sandwich",
    prepTime: "2 minuta",
    cookTime: "2 minuta",
    servings: "1 sendvič",
    difficulty: "easy",
    ingredients: [
      "2 kriške hleba",
      "2 kriške šunke",
      "1 kriška sira (npr. gauda, edamer)",
      "1 kašičica putera ili margarina (opciono)",
      "Senf ili majonez (po ukusu)"
    ],
    instructions: [
      "Ako koristite puter ili margarin, namažite obe kriške hleba.",
      "Na jednu krišku hleba stavite šunku.",
      "Preko šunke stavite sir.",
      "Prekrijte drugom kriškom hleba.",
      "(Opciono) Zagrejati sendvič u tosteru ili tiganju dok se sir ne otopi i hleb ne postane hrskav."
    ],
    nutritionInfo: {
      calories: "300-400",
      protein: "20-25g",
      fat: "15-20g",
      carbohydrates: "30-40g"
    },
    notes: [
      "Možete koristiti različite vrste hleba, šunke i sira po svom ukusu.",
      "Dodajte povrće poput zelene salate, paradajza ili krastavca za dodatnu svežinu."
    ]
  },
  {
    id: "tuna-salad-sandwich",
    name: "Tuna Salad Sandwich",
    description: "Osvežavajući i jednostavan sendvič sa salatom od tunjevine, savršen za brzi ručak ili večeru.",
    category: "sandwich",
    prepTime: "10 minuta",
    cookTime: "0 minuta",
    servings: "2 sendviča",
    difficulty: "easy",
    ingredients: [
      "1 konzerva (150g) tunjevine u salamuri, oceđena",
      "2 kašike majoneza",
      "1 kašika sitno iseckanog celera",
      "1 kašika sitno iseckanog crvenog luka",
      "1 kašičica limunovog soka",
      "So i biber po ukusu",
      "4 kriške hleba po izboru (integralni, beli, ražani)",
      "Listovi zelene salate (opciono)",
      "Kriške paradajza (opciono)"
    ],
    instructions: [
      "U činiji pomešati oceđenu tunjevinu, majonez, celer, crveni luk i limunov sok.",
      "Posoliti i pobiberiti po ukusu. Dobro promešati dok se svi sastojci ne sjedine.",
      "Na dve kriške hleba rasporediti salatu od tunjevine.",
      "Dodati listove zelene salate i kriške paradajza, ako se koristi.",
      "Prekriti preostalim kriškama hleba.",
      "Preseći sendviče na pola i poslužiti."
    ],
    nutritionInfo: {
      calories: "350-400",
      protein: "25-30g",
      fat: "20-25g",
      carbohydrates: "20-25g"
    },
    notes: [
      "Za bogatiji ukus, dodati malo senfa ili ljute papričice u prahu.",
      "Možete koristiti tunjevinu u ulju, ali je obavezno dobro ocediti.",
      "Salata od tunjevine se može pripremiti unapred i čuvati u frižideru do 2 dana."
    ]
  },
  {
    id: "egg-salad-sandwich",
    name: "Egg Salad Sandwich",
    description: "Klasičan i ukusan sendvič sa salatom od jaja, savršen za brzi ručak ili užinu.",
    category: "sandwich",
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    servings: "2 sendviča",
    difficulty: "easy",
    ingredients: [
      "4 velika jaja",
      "1/4 šolje majoneza",
      "2 kašike sitno iseckanog celera",
      "1 kašika sitno iseckanog crvenog luka",
      "1 kašičica senfa",
      "So i biber po ukusu",
      "4 kriške hleba"
    ],
    instructions: [
      "Stavite jaja u šerpu i prelijte ih hladnom vodom. Voda treba da bude 2.5 cm iznad jaja.",
      "Stavite šerpu na jaku vatru i sačekajte da voda proključa.",
      "Kada voda proključa, isključite vatru, poklopite šerpu i ostavite jaja da stoje 12 minuta.",
      "Nakon 12 minuta, iscedite vrelu vodu i prelijte jaja hladnom vodom. Ostavite da se ohlade.",
      "Oljuštite jaja i iseckajte ih na manje komade.",
      "U činiji pomešajte iseckana jaja, majonez, celer, crveni luk, senf, so i biber. Dobro promešajte.",
      "Premažite dve kriške hleba salatom od jaja.",
      "Poklopite preostalim kriškama hleba.",
      "Isecite sendviče na pola (po želji) i poslužite."
    ],
    nutritionInfo: {
      calories: "350",
      fat: "25g",
      protein: "15g",
      carbohydrates: "20g"
    },
    notes: [
      "Za bogatiji ukus, dodajte prstohvat dimljene paprike u salatu od jaja.",
      "Možete koristiti integralni ili beli hleb, po vašem izboru.",
      "Dodajte list zelene salate ili paradajz za dodatnu svežinu."
    ]
  },
  {
    id: "chicken-salad-sandwich",
    name: "Chicken Salad Sandwich",
    description: "Brzi i ukusan sendvič sa piletinom, savršen za ručak ili laganu večeru.",
    category: "sandwich",
    prepTime: "15 minuta",
    cookTime: "20 minuta",
    servings: "2 sendviča",
    difficulty: "easy",
    ingredients: [
      "2 komada pilećih prsa (oko 250g), kuvana i iseckana",
      "1/4 šolje majoneza",
      "2 kašike iseckanog celera",
      "2 kašike iseckanog crvenog luka",
      "1 kašika svežeg limunovog soka",
      "1/4 kašičice soli",
      "1/8 kašičice crnog bibera",
      "4 kriške hleba po izboru",
      "Zelena salata (po želji)"
    ],
    instructions: [
      "U velikoj činiji, pomešajte iseckanu piletinu, majonez, celer, crveni luk, limunov sok, so i biber. Dobro promešajte dok se svi sastojci ne sjedine.",
      "Namažite smesu od piletine na dve kriške hleba.",
      "Dodajte zelenu salatu po želji.",
      "Poklopite preostalim kriškama hleba.",
      "Presecite sendviče na pola i poslužite."
    ],
    nutritionInfo: {
      calories: "350-450",
      protein: "25-35g",
      fat: "20-30g",
      carbohydrates: "20-30g"
    },
    notes: [
      "Za bogatiji ukus, dodajte kašiku senfa u smesu.",
      "Možete koristiti gotovu pečenu piletinu kako biste uštedeli vreme.",
      "Dodajte iseckane orahe ili bademe za hrskavu teksturu."
    ]
  },
  {
    id: "italian-sub",
    name: "Italian Sub",
    description: "Ovaj sendvič je prepun ukusa italijanskih narezaka, sira i pikantnog preliva. Odličan je za ručak, večeru ili piknik.",
    category: "sandwich",
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: "1 veliki sendvič",
    difficulty: "easy",
    ingredients: [
      "1 dugačka bageta ili italijanski hleb (oko 30cm)",
      "100g salami (italijanska salama, peperoni ili kombinacija)",
      "100g šunke (prošuto, kapikola ili kuvana šunka)",
      "50g provolone sira, tanko narezan",
      "2 kašike maslinovog ulja",
      "1 kašika crvenog vinskog sirćeta",
      "1/2 kašičice italijanskih začina",
      "So i biber po ukusu",
      "2 lista zelene salate",
      "1/4 crvenog luka, tanko narezan",
      "2-3 kriške paradajza",
      "Kiseli krastavčići ili ljuti feferoni (opciono)"
    ],
    instructions: [
      "Presecite bagetu horizontalno na pola.",
      "U maloj činiji, pomešajte maslinovo ulje, crveno vinsko sirće, italijanske začine, so i biber. Dobro promešajte.",
      "Prelijte obe polovine bagete ravnomerno preljevom.",
      "Na donju polovinu bagete stavite zelenu salatu.",
      "Preko salate rasporedite narezke (salami i šunku), provolone sir, crveni luk i kriške paradajza.",
      "Ako želite, dodajte kisele krastavčiće ili ljute feferone.",
      "Poklopite gornjom polovinom bagete.",
      "Isecite sendvič na pola, ako želite, i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "800-1000",
      fat: "40-60g",
      carbohydrates: "60-80g",
      protein: "40-60g"
    },
    notes: [
      "Možete koristiti bilo koju vrstu italijanskih narezaka i sira po svom ukusu.",
      "Za jači ukus, dodajte malo pesto sosa ili majoneza.",
      "Sendvič se može umotati u foliju i čuvati u frižideru do 24 sata."
    ]
  },
  {
    id: "french-dip",
    name: "French Dip",
    description: "Izdašan sendvič sa tanko narezanom govedinom, poslužen sa bogatim sosom za umakanje. Savršen za ručak ili večeru.",
    category: "sandwich",
    prepTime: "15 minuta",
    cookTime: "3-4 sata",
    servings: "4 sendviča",
    difficulty: "medium",
    ingredients: [
      "1.5 kg junećeg pečenja (rozbif ili rame)",
      "1 glavica crnog luka, iseckana",
      "4 čena belog luka, izgnječena",
      "2 šolje goveđeg bujona",
      "1 šolja crnog vina (opciono)",
      "2 kašike soja sosa",
      "1 kašika vorčester sosa",
      "1 kašičica sušenog timijana",
      "1/2 kašičice sušenog ruzmarina",
      "So i biber po ukusu",
      "4 bageta, presečena horizontalno",
      "Sir provolone (opciono)"
    ],
    instructions: [
      "Začinite juneće pečenje solju i biberom.",
      "U slow cookeru ili velikoj šerpi, pomešajte crni luk, beli luk, goveđi bujon, crno vino (ako koristite), soja sos, vorčester sos, timijan i ruzmarin.",
      "Dodajte pečenje u tečnost.",
      "Slow Cooker: Kuvajte na niskoj temperaturi 3-4 sata ili dok meso ne postane veoma mekano i lako se rastavlja viljuškom.",
      "Rerna: Pecite u rerni zagrejanoj na 160°C 1.5-2 sata, ili dok meso ne postane veoma mekano.",
      "Izvadite meso iz tečnosti i ostavite da se malo ohladi.",
      "Isecite meso na tanke listove.",
      "Procedite tečnost u kojoj se meso kuvalo. Ovo je vaš sos za umakanje (au jus).",
      "Zagrejte bagete.",
      "Na donju polovinu svakog bageta stavite tanko narezanu govedinu. Dodajte sir provolone, ako želite.",
      "Prelijte malo sosa preko mesa ili ga poslužite sa strane za umakanje.",
      "Poklopite sendvič drugom polovinom bageta i odmah poslužite."
    ],
    nutritionInfo: {
      calories: "600-800",
      protein: "50-60g",
      fat: "30-40g",
      carbohydrates: "40-50g"
    },
    notes: [
      "Za jači ukus, meso možete peći u tiganju pre stavljanja u slow cooker ili rernu.",
      "Sos možete zgusnuti sa malo kukuruznog skroba razmućenog u hladnoj vodi ako želite gušću konzistenciju.",
      "Kao prilog možete poslužiti pomfrit, salatu ili coleslaw."
    ]
  },
  {
    id: "banh-mi",
    name: "Banh Mi",
    description: "Ovaj recept vam donosi autentični ukus Vijetnamskog sendviča 'Banh Mi'. Kombinacija hrskavog bageta, paštete, raznih vrsta mesa, ukiseljenog povrća i svežih začina stvara neodoljivu harmoniju ukusa.",
    category: "sandwich",
    prepTime: "30 minuta",
    cookTime: "15 minuta",
    servings: "4 sendviča",
    difficulty: "medium",
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
    nutritionInfo: {
      calories: "500-700",
      protein: "30-40g",
      fat: "20-30g",
      carbohydrates: "50-70g"
    },
    notes: [
      "Možete koristiti i druge vrste mesa, kao što su ćureća prsa, tofu (za vegetarijansku verziju) ili piletina.",
      "Umesto pirinčanog sirćeta, možete koristiti belo vinsko sirće.",
      "Ukiseljeno povrće se može pripremiti dan ranije.",
      "Za jači ukus, možete dodati malo ribljeg sosa (Nuoc Mam) u marinadu za povrće."
    ]
  },
  {
    id: "gyro",
    name: "Gyro",
    description: "Klasični grčki 'Gyro' sa sočnim mesom, tzatziki sosom i svežim povrćem.",
    category: "sandwich",
    prepTime: "30 minuta",
    cookTime: "20-30 minuta",
    servings: "4 porcije",
    difficulty: "medium",
    ingredients: [
      "600g svinjetine (vrat ili but), tanko isečeno",
      "Marinada:",
      "4 kašike maslinovog ulja",
      "2 kašike soka od limuna",
      "2 čena belog luka, izgnječena",
      "1 kašičica sušenog origana",
      "1/2 kašičice mlevenog kima",
      "1/2 kašičice sušenog ruzmarina",
      "So i biber po ukusu",
      "4 pita hleba",
      "Tzatziki sos:",
      "1 krastavac, narendan i oceđen",
      "250g grčkog jogurta",
      "2 čena belog luka, izgnječena",
      "1 kašika soka od limuna",
      "1 kašika maslinovog ulja",
      "So i biber po ukusu",
      "Dodaci:",
      "1 crveni luk, tanko isečen",
      "1 paradajz, isečen na kriške",
      "Listovi zelene salate"
    ],
    instructions: [
      "Mariniranje mesa: U velikoj posudi pomešajte sve sastojke za marinadu. Dodajte tanko isečeno meso i dobro promešajte da se meso obloži marinadom. Pokrijte i stavite u frižider na najmanje 2 sata, ili idealno preko noći.",
      "Priprema tzatziki sosa: U činiji pomešajte narendani i oceđeni krastavac, grčki jogurt, izgnječeni beli luk, sok od limuna, maslinovo ulje, so i biber. Dobro promešajte i stavite u frižider da se ohladi.",
      "Pečenje mesa: Zagrejte rernu na 200°C (400°F). Meso rasporedite u jednom sloju na pleh obložen papirom za pečenje. Pecite 20-30 minuta, ili dok meso ne postane zlatno-braon i pečeno. Alternativno, meso možete peći na roštilju ili u tiganju.",
      "Zagrejte pita hleb: Pita hleb zagrejte u tiganju, rerni ili na roštilju.",
      "Sastavljanje gyrosa: Na zagrejani pita hleb stavite sloj tzatziki sosa. Dodajte pečeno meso, crveni luk, paradajz i zelenu salatu. Uvijte pita hleb i poslužite odmah."
    ],
    nutritionInfo: {
      calories: "550-650",
      protein: "40-50g",
      fat: "30-40g",
      carbohydrates: "40-50g"
    },
    notes: [
      "Za autentičniji ukus, koristite jagnjetinu ili kombinaciju jagnjetine i govedine.",
      "Možete dodati pomfrit u gyro za dodatni ukus.",
      "U marinadu možete dodati i malo crnog vina."
    ]
  },
  {
    id: "falafel-wrap",
    name: "Falafel Wrap",
    description: "Ukusan i brz obrok, idealan za poneti.",
    category: "sandwich",
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: "2 wrapa",
    difficulty: "medium",
    ingredients: [
      "Za Falafel:",
      "1 konzerva (400g) leblebija, oceđena i isprana",
      "1/4 glavice crnog luka, grubo iseckana",
      "2 čena belog luka, grubo iseckana",
      "1/4 šolje svežeg peršuna, grubo iseckanog",
      "1/4 šolje svežeg korijandera, grubo iseckanog",
      "1 kašičica mlevenog kumina",
      "1/2 kašičice mlevenog korijandera",
      "1/4 kašičice kajenskog bibera (opciono)",
      "1 kašika brašna (običnog ili bez glutena)",
      "1/2 kašičice sode bikarbone",
      "So i biber po ukusu",
      "Ulje za prženje",
      "Za Wrap:",
      "2 tortilje",
      "Humus",
      "Tahini sos (opciono)",
      "Iseckana zelena salata",
      "Iseckani paradajz",
      "Iseckani krastavac",
      "Kiseli krastavci (opciono), iseckani"
    ],
    instructions: [
      "Priprema Falafela: U procesoru za hranu, kombinujte leblebije, crni luk, beli luk, peršun, korijander, kumin, korijander u prahu i kajenski biber (ako koristite).",
      "Blendajte dok ne dobijete grubu smesu. Nemojte preblendati, treba da ima malo teksture.",
      "Prebacite smesu u činiju. Dodajte brašno, sodu bikarbonu, so i biber. Dobro promešajte.",
      "Oblikujte smesu u male pljeskavice ili kuglice.",
      "U dubokom tiganju ili fritezi zagrejte ulje na srednjoj vatri.",
      "Pržite falafel oko 3-5 minuta sa svake strane, dok ne postanu zlatno smeđi i hrskavi.",
      "Izvadite falafel iz ulja i stavite ga na papirni ubrus da se ocedi od viška ulja.",
      "Sastavljanje Wrapa: Namažite tortilju sa humusom.",
      "Dodajte falafel, zelenu salatu, paradajz, krastavac i kisele krastavce (ako koristite).",
      "Prelijte tahini sosom (ako koristite).",
      "Urolajte tortilju čvrsto.",
      "Isecite wrap na pola i poslužite odmah."
    ],
    nutritionInfo: {
      calories: "500-600",
      protein: "20-25g",
      fat: "25-35g",
      carbohydrates: "50-60g"
    },
    notes: [
      "Za zdraviju verziju, falafel se može peći u rerni na 200°C oko 20-25 minuta, okrećući ih na pola vremena.",
      "Možete dodati i druge povrće po želji, kao što su rotkvice, paprika ili luk.",
      "Falafel smesa se može napraviti unapred i držati u frižideru do 24 sata."
    ]
  }
];