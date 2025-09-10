export interface Recipe {
  id: string;
  name: string;
  description: string;
  yields: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
  notes?: string[];
  nutrition?: {
    calories: string;
    protein?: string;
    fat?: string;
    carbohydrates?: string;
    sodium?: string;
  };
}

export const pizzaRecipes: Recipe[] = [
  {
    id: "margherita",
    name: "Margherita",
    description: "Jednostavna i ukusna pizza sa paradajzom, mocarelom i bosiljkom.",
    yields: "4 servings",
    prepTime: "20 minutes",
    cookTime: "15-20 minutes",
    ingredients: [
      "500g testo za pizzu (kupovno ili domaće)",
      "200g pasiranog paradajza",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "So i biber po ukusu",
      "250g mocarele, isečene na kriške",
      "Svež bosiljak za dekoraciju"
    ],
    instructions: [
      "Zagrejte rernu na 250°C (480°F). Ako imate kamen za pizzu, stavite ga u rernu da se zagreje.",
      "Razvucite testo za pizzu na pobrašnjenoj površini u krug debljine oko 0.5cm.",
      "Prebacite testo na pleh obložen papirom za pečenje ili direktno na zagrejani kamen za pizzu.",
      "Pomešajte pasiran paradajz, maslinovo ulje, beli luk, origano, so i biber u maloj posudi.",
      "Ravnomerno nanesite sos od paradajza preko testa, ostavljajući malu ivicu bez sosa.",
      "Poređajte kriške mocarele preko sosa od paradajza.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok testo ne postane zlatno-braon i mocarela se ne otopi i blago porumeni.",
      "Izvadite pizzu iz rerne i ukrasite svežim bosiljkom.",
      "Isecite pizzu na komade i odmah poslužite."
    ],
    notes: [
      "Za intenzivniji ukus, možete dodati malo parmezana ili pekorina pre pečenja.",
      "Ako nemate svež bosiljak, možete koristiti sušeni, ali sveži ima bolji ukus.",
      "Vreme pečenja može varirati u zavisnosti od vaše rerne."
    ],
    nutrition: {
      calories: "400-500",
      protein: "20-25g",
      fat: "15-20g",
      carbohydrates: "50-60g"
    }
  },
  {
    id: "pepperoni",
    name: "Pepperoni",
    description: "Blago ljut i pikantan suhomesnati proizvod, idealan kao dodatak pici ili kao deo narezaka.",
    yields: "Oko 500g",
    prepTime: "30 minuta (plus vreme za fermentaciju i sušenje)",
    cookTime: "Nema kuvanja (sušenje/fermentacija)",
    ingredients: [
      "1 kg mlevene svinjetine (80% meso, 20% mast)",
      "25g nejodirane soli",
      "5g dekstroze",
      "3g mlevenog belog bibera",
      "5g mlevene ljute paprike (ili po ukusu)",
      "2g starter kulture za fermentaciju suhomesnatih proizvoda (opciono, ali preporučljivo)",
      "50ml hladne vode (ako se koristi starter kultura)",
      "Svinjska creva (kalibrirana na željeni prečnik, obično 32-38mm)"
    ],
    instructions: [
      "Ako koristite starter kulturu, rastvorite je u hladnoj vodi i ostavite da odstoji prema uputstvu proizvođača (obično 15-30 minuta).",
      "U velikoj posudi pomešajte mleveno meso, so, dekstrozu, beli biber i ljutu papriku.",
      "Ako koristite starter kulturu, dodajte je u smesu sa mesom.",
      "Dobro promešajte sve sastojke rukama ili mikserom, dok se smesa ne sjedini i postane lepljiva.",
      "Napunite svinjska creva pripremljenom smesom pomoću mašine za punjenje kobasica.",
      "Vežite krajeve napunjenih creva.",
      "Probušite kobasice na nekoliko mesta iglom kako biste uklonili eventualne vazdušne džepove.",
      "Fermentacija: Okačite kobasice na hladno, vlažno mesto (18-22°C, vlažnost vazduha 80-90%) na 24-48 sati.",
      "Sušenje: Okačite kobasice na hladno, suvo i provetreno mesto (12-15°C, vlažnost vazduha 60-70%) na 2-4 nedelje.",
      "Čuvajte pepperoni u frižideru."
    ],
    notes: [
      "Kvalitet mesa je ključan za dobar pepperoni. Koristite sveže, kvalitetno svinjsko meso.",
      "Količinu ljute paprike prilagodite svom ukusu.",
      "Starter kultura pomaže u fermentaciji i daje bolji ukus i teksturu.",
      "Važno je održavati higijenu tokom pripreme kako biste izbegli kontaminaciju."
    ],
    nutrition: {
      calories: "450-500 kcal",
      protein: "20-25g",
      fat: "40-45g",
      carbohydrates: "2-3g"
    }
  },
  {
    id: "hawaiian",
    name: "Hawaiian",
    description: "Brza i jednostavna pica sa ananasom i šunkom.",
    yields: "1 pica (8 parčića)",
    prepTime: "15 minuta",
    cookTime: "12-15 minuta",
    ingredients: [
      "1 gotova podloga za picu (oko 30cm)",
      "1/2 šolje sosa od paradajza",
      "1 šolja rendanog mocarela sira",
      "1 šolja seckane kuvane šunke",
      "1/2 šolje seckanog ananasa (iz konzerve ili svežeg)",
      "1/4 šolje rendanog parmezana (opciono)",
      "Malo origana"
    ],
    instructions: [
      "Zagrejte rernu na 220°C.",
      "Stavite podlogu za picu na pleh obložen papirom za pečenje.",
      "Ravnomerno nanesite sos od paradajza preko podloge, ostavljajući malu ivicu.",
      "Posipajte polovinu mocarela sira preko sosa.",
      "Rasporedite seckanu šunku i ananas preko sira.",
      "Posipajte ostatak mocarela sira i parmezan (ako koristite) preko pice.",
      "Pospite origanom.",
      "Pecite u zagrejanoj rerni 12-15 minuta, ili dok kora ne postane zlatno braon.",
      "Izvadite picu iz rerne, ostavite da se malo prohladi, isecite na parčiće i poslužite."
    ],
    notes: [
      "Možete koristiti svež ananas za intenzivniji ukus.",
      "Dodajte malo ljute papričice za pikantniju picu.",
      "Ukoliko koristite sveže testo za picu, vreme pečenja može biti duže."
    ],
    nutrition: {
      calories: "250-300",
      fat: "10-15g",
      carbohydrates: "25-30g",
      protein: "12-15g"
    }
  },
  {
    id: "quattro-stagioni",
    name: "Quattro Stagioni",
    description: "Klasična pica koja predstavlja četiri godišnja doba sa različitim sastojcima u svakom kvadrantu.",
    yields: "4 servings",
    prepTime: "30 minuta",
    cookTime: "15-20 minuta",
    ingredients: [
      "Testo za picu: 500g (kupovno ili domaće)",
      "Sos od paradajza: 200g",
      "Mozzarella sir: 250g, izrendana",
      "Artičoke u ulju: 100g, oceđene i isečene na četvrtine",
      "Šunka: 100g, iseckana",
      "Pečurke: 100g, isečene na listiće",
      "Crne masline: 50g, bez koštica i prepolovljene",
      "Origano: 1 kašičica",
      "Maslinovo ulje: 2 kašike"
    ],
    instructions: [
      "Zagrejte rernu na 250°C (ili najvišu temperaturu koju vaša rerna može da postigne).",
      "Podelite testo za picu na 4 jednaka dela. Razvucite svaki deo u okrugli oblik.",
      "Stavite razvučeno testo na pleh obložen papirom za pečenje.",
      "Ravnomerno nanesite sos od paradajza na svako testo, ostavljajući malu ivicu slobodnu.",
      "Podelite picu na četiri kvadranta.",
      "U jedan kvadrant stavite artičoke.",
      "U drugi kvadrant stavite šunku.",
      "U treći kvadrant stavite pečurke.",
      "U četvrti kvadrant stavite crne masline.",
      "Pospite picu izrendanom mozzarellom sirom ravnomerno preko cele površine.",
      "Pospite origanom i prelijte sa malo maslinovog ulja.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok testo ne postane zlatno-smeđe.",
      "Izvadite picu iz rerne i ostavite je da se malo ohladi pre sečenja i serviranja."
    ],
    notes: [
      "Možete prilagoditi sastojke po vašem ukusu.",
      "Ako koristite kamen za picu, prebacite picu na kamen uz pomoć kore za picu.",
      "Vreme pečenja može varirati u zavisnosti od vaše rerne."
    ],
    nutrition: {
      calories: "350-450 kcal",
      fat: "15-25g",
      protein: "15-20g",
      carbohydrates: "40-50g"
    }
  },
  {
    id: "prosciutto",
    name: "Prosciutto",
    description: "Tanko sečena sušena šunka, idealna kao predjelo ili dodatak jelima.",
    yields: "6-8 servings",
    prepTime: "5 minuta",
    cookTime: "N/A (proizvod je spreman za konzumaciju)",
    ingredients: [
      "200g prosciutto (tanko sečen)",
      "Optional: Kriške dinje ili smokve",
      "Optional: Grisine ili hleb"
    ],
    instructions: [
      "Izvadite prosciutto iz pakovanja neposredno pre serviranja.",
      "Rasporedite tanke kriške prosciutto na tanjir za serviranje.",
      "(Opcionalno) Dodajte kriške dinje ili smokve na tanjir pored prosciutto.",
      "(Opcionalno) Poslužite sa grisini ili hlebom."
    ],
    notes: [
      "Najbolje je konzumirati prosciutto na sobnoj temperaturi.",
      "Može se dodati na pice, paste ili salate.",
      "Kvalitet prosciutto zavisi od porekla i procesa sušenja."
    ],
    nutrition: {
      calories: "70-90",
      fat: "5-7g",
      protein: "7-9g",
      sodium: "400-500mg"
    }
  },
  {
    id: "funghi",
    name: "Funghi",
    description: "Jednostavan i brz način da pripremite ukusne pečurke, idealne kao prilog ili kao deo glavnog jela.",
    yields: "4 porcije",
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "500g mešanih pečuraka (šampinjoni, vrganji, bukovače)",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1/4 šolje belog vina (opciono)",
      "2 kašike svežeg peršuna, sitno iseckanog",
      "So i biber po ukusu",
      "1 kašika putera (opciono)"
    ],
    instructions: [
      "Očistite pečurke i isecite ih na kriške ili manje komade.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte beli luk i pržite ga dok ne zamiriše, oko 1 minut.",
      "Ubacite iseckane pečurke u tiganj.",
      "Pržite pečurke, povremeno mešajući, dok ne omekšaju i puste tečnost, oko 10 minuta.",
      "Ako koristite belo vino, dodajte ga u tiganj i ostavite da ispari, oko 2 minuta.",
      "Posolite i pobiberite po ukusu.",
      "Pred kraj kuvanja, umešajte sveži peršun.",
      "Ako želite, dodajte kašiku putera za bogatiji ukus i sjaj.",
      "Poslužite toplo kao prilog ili deo glavnog jela."
    ],
    notes: [
      "Za intenzivniji ukus, možete dodati malo sušenog timijana ili ruzmarina.",
      "Umesto belog vina, možete koristiti pileću ili povrtnu supu.",
      "Pečurke možete poslužiti preko testenine, pirinča ili kao punjenje za pite."
    ],
    nutrition: {
      calories: "150",
      fat: "10g",
      carbohydrates: "8g",
      protein: "5g"
    }
  },
  {
    id: "capricciosa",
    name: "Capricciosa",
    description: "Klasična italijanska pizza sa šunkom, artičokama, pečurkama i maslinama.",
    yields: "4 osobe",
    prepTime: "20 minuta",
    cookTime: "15-20 minuta",
    ingredients: [
      "500g testo za pizzu (kupovno ili domaće)",
      "200g sos od paradajza",
      "200g mocarela, izrendana",
      "100g kuvana šunka, iseckana",
      "100g artičoke iz ulja, ocedjene i isečene na četvrtine",
      "100g pečurke, isečene na listiće",
      "50g crne masline, bez koštica i isečene na kolutove",
      "2 kašike maslinovog ulja",
      "Origano",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 250°C (ili najvišu temperaturu koju vaša rerna može da dostigne).",
      "Podelite testo za pizzu na 4 jednaka dela.",
      "Razvaljajte svaki deo testa na tanki krug.",
      "Prebacite testo na pleh obložen papirom za pečenje.",
      "Premažite svaku pizzu sosom od paradajza.",
      "Pospite sa izrendanom mocarelom.",
      "Ravnomerno rasporedite šunku, artičoke, pečurke i masline preko sira.",
      "Pokapajte sa maslinovim uljem.",
      "Pospite origanom, solju i biberom po ukusu.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok korica ne postane zlatno braon.",
      "Izvadite iz rerne i ostavite da se malo prohladi pre sečenja i serviranja."
    ],
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su kapri, jaja ili feferoni.",
      "Za hrskaviju koricu, pecite pizzu na kamenu za pizzu.",
      "Ako koristite sveže pečurke, prodinstajte ih kratko na tiganju pre nego što ih stavite na pizzu."
    ],
    nutrition: {
      calories: "600-700",
      fat: "25-35g",
      carbohydrates: "60-70g",
      protein: "30-40g"
    }
  },
  {
    id: "diavola",
    name: "Diavola",
    description: "Ljuta i ukusna pica sa pikantnom salami i čilijem.",
    yields: "1 velika pica (8 parčića)",
    prepTime: "20 minuta",
    cookTime: "15-20 minuta",
    ingredients: [
      "250g brašna (tip \"00\" ili univerzalno)",
      "175ml tople vode",
      "7g suvog kvasca",
      "1 kašičica soli",
      "1 kašičica šećera",
      "2 kašike maslinovog ulja",
      "200g pelata (paradajz iz konzerve, izgnječen)",
      "1 češanj belog luka, sitno iseckan",
      "So i biber po ukusu",
      "150g mocarele, izrendana ili isečena na listiće",
      "100g ljute salami, tanko isečena",
      "1-2 sveže čili papričice, tanko isečene (po ukusu)",
      "Origano"
    ],
    instructions: [
      "U toploj vodi rastvorite kvasac i šećer. Ostavite da odstoji 5-10 minuta.",
      "U velikoj posudi pomešajte brašno i so. Dodajte aktivirani kvasac i maslinovo ulje.",
      "Zamesite testo. Mesite ga 5-7 minuta dok ne postane glatko i elastično.",
      "Stavite testo u nauljenu posudu, pokrijte i ostavite da naraste oko 1 sat.",
      "U maloj posudi pomešajte izgnječene pelate, seckani beli luk, maslinovo ulje, so i biber.",
      "Zagrejte rernu na 250°C sa kamenom za picu ili plehom unutra.",
      "Na pobrašnjenoj površini razvucite testo u krug prečnika oko 30cm.",
      "Premažite testo sosom od paradajza. Pospite mocarelom, rasporedite salamlu i čili papričice.",
      "Pospite origanom.",
      "Pažljivo prebacite picu na vreli kamen ili pleh u rerni.",
      "Pecite 15-20 minuta, ili dok testo ne postane zlatno braon.",
      "Izvadite picu iz rerne, prelijte je sa malo maslinovog ulja i odmah je isecite i poslužite."
    ],
    notes: [
      "Za jači ukus, možete dodati malo ljutog ulja na kraju pečenja.",
      "Količinu čilija prilagodite svom ukusu.",
      "Umesto sveže čili papričice, možete koristiti sušene čili pahuljice."
    ],
    nutrition: {
      calories: "350-400",
      protein: "15-20g",
      fat: "15-20g",
      carbohydrates: "35-40g"
    }
  },
  {
    id: "veggie-pizza",
    name: "Veggie Pizza",
    description: "Ukusan i šaren pizza sa omiljenim povrćem, savršena za ručak ili večeru.",
    yields: "6 porcija",
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    ingredients: [
      "1 paket (400g) smrznutog testa za pizzu",
      "1/2 šolje sos za pizzu",
      "1 šolja narendanog mocarela sira",
      "1/2 crvene paprike, iseckane",
      "1/2 žute paprike, iseckane",
      "1/2 ljubičastog luka, tanko isečenog",
      "1/2 šolje seckanih šampinjona",
      "1/4 šolje iseckanih crnih maslina",
      "1/4 šolje seckanog brokolija",
      "1 kašika maslinovog ulja",
      "1/2 kašičice italijanske mešavine začina",
      "So i biber po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 220°C.",
      "Razvucite testo za pizzu na pobrašnjenoj površini.",
      "Premestite testo na pleh obložen papirom za pečenje.",
      "Premažite testo sosom za pizzu.",
      "Pospite narendanim sirom.",
      "Rasporedite iseckanu papriku, luk, šampinjone, masline i brokoli preko sira.",
      "Pokapajte maslinovim uljem i pospite italijanskom mešavinom začina.",
      "Posolite i pobiberite po ukusu.",
      "Pecite u zagrejanoj rerni 20-25 minuta, ili dok testo ne porumeni i sir se otopi.",
      "Izvadite iz rerne, ostavite da se malo ohladi, a zatim isecite i poslužite."
    ],
    notes: [
      "Možete koristiti bilo koje povrće koje volite.",
      "Dodajte malo parmezana za dodatni ukus.",
      "Za pikantniju pizzu, dodajte malo crvene papričice."
    ],
    nutrition: {
      calories: "350",
      fat: "15g",
      protein: "15g",
      carbohydrates: "45g"
    }
  },
  {
    id: "meat-lovers",
    name: "Meat Lovers",
    description: "Izdašna pica sa bogatim slojem različitih vrsta mesa.",
    yields: "6-8 porcija",
    prepTime: "30 minuta",
    cookTime: "20-25 minuta",
    ingredients: [
      "1 paket (oko 400g) testa za picu",
      "1/2 šolje sosa od paradajza",
      "200g mocarele, izrendane",
      "100g kuvanog šunke, isečene na kockice",
      "100g feferoni salame, isečene na kolutove",
      "100g italijanske kobasice, uklonjena koža i izmrvljena",
      "50g slanine, iseckane na male komade i pržena",
      "1/4 šolje rendanog parmezana",
      "1 kašika italijanske mešavine začina",
      "Malo maslinovog ulja"
    ],
    instructions: [
      "Zagrejte rernu na 220°C.",
      "Na blago pobrašnjenoj površini razvucite testo za picu u željeni oblik.",
      "Prebacite testo na pleh obložen papirom za pečenje.",
      "Premažite testo sosom od paradajza, ostavljajući mali rub bez sosa.",
      "Pospite polovinom izrendane mocarele preko sosa.",
      "Ravnomerno rasporedite šunku, feferoni salamu, izmrvljenu kobasicu i slaninu preko sira.",
      "Pospite preostalom mocarelom i parmezanom.",
      "Pospite italijanskom mešavinom začina.",
      "Pokapajte picu sa malo maslinovog ulja.",
      "Pecite u zagrejanoj rerni 20-25 minuta, ili dok testo ne postane zlatno-smeđe.",
      "Izvadite picu iz rerne i ostavite da se malo prohladi pre sečenja i serviranja."
    ],
    notes: [
      "Možete dodati i druge vrste mesa po vašem ukusu.",
      "Dodajte malo seckanog crnog luka ili paprike za dodatni ukus.",
      "Za pikantniju verziju, dodajte malo ljute papričice."
    ],
    nutrition: {
      calories: "450-550 kcal",
      fat: "25-35g",
      protein: "30-40g",
      carbohydrates: "40-50g"
    }
  },
  {
    id: "bbq-chicken",
    name: "BBQ Chicken",
    description: "BBQ Chicken je klasik letnje kuhinje, savršen za roštilj ili pećnicu. Slatko-pikantna glazura daje mu neodoljiv ukus.",
    yields: "4 porcije",
    prepTime: "15 minuta",
    cookTime: "30-45 minuta",
    ingredients: [
      "4 pileća bataka sa karabatacima",
      "1/2 šolje BBQ sosa",
      "2 kašike kečapa",
      "1 kašika jabukovog sirćeta",
      "1 kašika smeđeg šećera",
      "1 kašičica dimljene paprike",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice bibera",
      "So po ukusu",
      "Ulje za premazivanje"
    ],
    instructions: [
      "Zagrejte roštilj na srednju temperaturu ili rernu na 200°C (400°F).",
      "U maloj posudi pomešajte BBQ sos, kečap, jabukovo sirće, smeđi šećer, dimljenu papriku, beli luk u prahu i biber.",
      "Piletinu posolite po ukusu.",
      "Premažite piletinu uljem.",
      "Pecite piletinu na roštilju ili u rerni 30-45 minuta, ili dok unutrašnja temperatura ne dostigne 75°C.",
      "Tokom poslednjih 15 minuta pečenja, redovno premazujte piletinu BBQ sosom.",
      "Izvadite piletinu sa roštilja ili iz rerne i ostavite da se odmori nekoliko minuta pre serviranja."
    ],
    notes: [
      "Za jači ukus dima, koristite dimljeni BBQ sos.",
      "Ako koristite rernu, stavite piletinu na pleh obložen papirom za pečenje.",
      "Piletinu možete marinirati u BBQ sosu najmanje 30 minuta pre pečenja za intenzivniji ukus."
    ],
    nutrition: {
      calories: "400-450",
      protein: "40g",
      fat: "20g",
      carbohydrates: "15g"
    }
  },
  {
    id: "white-pizza",
    name: "White Pizza",
    description: "Bela pica sa ricotta sirom, belim lukom i maslinovim uljem. Savršena alternativa klasičnoj pici sa paradajz sosom.",
    yields: "4 osobe",
    prepTime: "20 minuta",
    cookTime: "15-20 minuta",
    ingredients: [
      "500g testo za picu (kupovno ili domaće)",
      "250g ricotta sir",
      "150g mozzarella sir, izrendana",
      "3 čena belog luka, sitno iseckana",
      "4 kašike maslinovog ulja",
      "1/4 kašičice sušenog origana",
      "1/4 kašičice sušenog bosiljka",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za posipanje)"
    ],
    instructions: [
      "Zagrejte rernu na 220°C (425°F).",
      "Razvucite testo za picu na pobrašnjenoj površini u željeni oblik.",
      "Prebacite testo na pleh za pečenje obložen papirom za pečenje.",
      "U maloj posudi pomešajte ricotta sir, iseckani beli luk, 2 kašike maslinovog ulja, origano, bosiljak, so i biber.",
      "Ravnomerno rasporedite smesu od ricotte preko testa za picu.",
      "Pospite izrendanom mozzarellom preko ricotte.",
      "Pokapajte picu preostalim maslinovim uljem.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok testo ne postane zlatno smeđe.",
      "Izvadite picu iz rerne i ostavite da se malo prohladi pre sečenja.",
      "Pre posluživanja pospite iseckanim svežim peršunom."
    ],
    notes: [
      "Za dodatni ukus, možete dodati malo parmezana pre pečenja.",
      "Umesto sušenog origana i bosiljka, možete koristiti sveže začine.",
      "Dodajte povrće po želji, npr. tanke kriške tikvica ili pečurke."
    ],
    nutrition: {
      calories: "450-550",
      fat: "25-35g",
      carbohydrates: "40-50g",
      protein: "20-25g"
    }
  },
  {
    id: "buffalo-chicken",
    name: "Buffalo Chicken",
    description: "Sočni komadi piletine preliveni ljutim Buffalo sosom. Odlično kao predjelo, glavno jelo ili dodatak salatama.",
    yields: "4 porcije",
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "600g pilećih grudi, isečenih na kockice veličine zalogaja",
      "1 kašika maslinovog ulja",
      "1/2 kašičice belog luka u prahu",
      "1/2 kašičice luka u prahu",
      "1/4 kašičice aleve paprike",
      "So i biber, po ukusu",
      "120ml Buffalo ljutog sosa",
      "2 kašike putera, rastopljenog"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "U velikoj posudi pomešajte komade piletine sa maslinovim uljem, belim lukom u prahu, lukom u prahu, alevom paprikom, solju i biberom.",
      "Rasporedite piletinu u jednom sloju na pleh obložen papirom za pečenje.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok piletina ne bude potpuno pečena.",
      "Dok se piletina peče, u manjoj posudi pomešajte Buffalo sos i rastopljeni puter.",
      "Kada je piletina pečena, prebacite je u čistu posudu.",
      "Prelijte piletinu Buffalo sosom i dobro promešajte da se komadi piletine ravnomerno oblože.",
      "Poslužite toplo, sa ranch ili blue cheese sosom i štapićima celera i šargarepe."
    ],
    notes: [
      "Za blaži ukus, koristite manje Buffalo sosa ili ga razblažite sa malo rastopljenog putera.",
      "Za pikantniji ukus, dodajte malo kajenske paprike u sos.",
      "Piletinu možete pripremiti i u fritezi na vazduh (air fryer) na 190°C 12-15 minuta."
    ],
    nutrition: {
      calories: "350-400",
      protein: "40-45g",
      fat: "20-25g",
      carbohydrates: "5-10g"
    }
  },
  {
    id: "supreme",
    name: "Supreme",
    description: "Savršeni zalogaji, idealni kao predjelo ili lagana večera.",
    yields: "4 porcije",
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    ingredients: [
      "4 pileća filea (oko 150g svaki)",
      "1 kašika maslinovog ulja",
      "1/2 kašičice soli",
      "1/4 kašičice bibera",
      "150g svežih šampinjona, isečenih na listiće",
      "1 čen belog luka, sitno iseckan",
      "100ml pilećeg bujona",
      "100ml pavlake za kuvanje",
      "2 kašike sitno seckanog peršuna",
      "Limunov sok, po ukusu"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Pileće filee osušite papirnim ubrusom. Posolite i pobiberite.",
      "U tiganju koji može u rernu, zagrejte maslinovo ulje na srednje jakoj vatri.",
      "Pecite pileće filee 3-4 minuta sa svake strane, dok ne porumene.",
      "U isti tiganj dodajte iseckane šampinjone i beli luk. Pržite dok šampinjoni ne omekšaju, oko 5-7 minuta.",
      "Ulijte pileći bujon i pustite da provri, stružući dno tiganja.",
      "Smanjite vatru i umešajte pavlaku za kuvanje. Kuvajte dok se sos ne zgusne, oko 3-5 minuta.",
      "Vratite pileće filee u tiganj, prelijte ih sosom.",
      "Prebacite tiganj u zagrejanu rernu i pecite 15-20 minuta.",
      "Izvadite iz rerne, pospite seckanim peršunom i po želji dodajte malo limunovog soka.",
      "Poslužite toplo."
    ],
    notes: [
      "Umesto pilećeg bujona, možete koristiti belo vino.",
      "Za bogatiji ukus, dodajte malo Dijon senfa u sos.",
      "Poslužite uz pire krompir, pirinač ili testeninu."
    ],
    nutrition: {
      calories: "350-400 kcal",
      protein: "40g",
      fat: "20g",
      carbohydrates: "10g"
    }
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    description: "Brzi i ukusni obrok koji kombinuje ukuse Mediterana.",
    yields: "2 servings",
    prepTime: "15 minutes",
    cookTime: "20 minutes",
    ingredients: [
      "200g testenine (penne, fusilli ili po izboru)",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, iseckana",
      "1 žuta paprika, iseckana",
      "100g čeri paradajza, prepolovljenog",
      "50g crnih maslina, bez koštica i isečenih na kolutiće",
      "50g feta sira, izmrvljenog",
      "2 kašike svežeg bosiljka, iseckanog",
      "So i biber po ukusu",
      "Rendani parmezan (opciono)"
    ],
    instructions: [
      "Skuvajte testeninu prema uputstvu na pakovanju. Ocedite i ostavite na stranu.",
      "U velikom tiganju zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte beli luk i pržite ga oko 1 minut, dok ne zamiriše.",
      "Dodajte iseckanu crvenu i žutu papriku i pržite 5-7 minuta, dok ne omekšaju.",
      "Dodajte prepolovljeni čeri paradajz i masline. Kuvajte još 3-5 minuta.",
      "Dodajte kuvanu testeninu u tiganj sa povrćem. Dobro promešajte.",
      "Posolite i pobiberite po ukusu.",
      "Sklonite sa vatre i umešajte izmrvljeni feta sir i iseckani bosiljak.",
      "Servirajte toplo."
    ],
    notes: [
      "Za dodatni ukus, možete dodati 1/2 kašičice sušenog origana ili ruzmarina.",
      "Možete dodati i pečene pinjole za hrskavost.",
      "Opciono poslužite sa rendanim parmezanom."
    ],
    nutrition: {
      calories: "550-650",
      protein: "20-25g",
      fat: "25-35g",
      carbohydrates: "60-70g"
    }
  },
  {
    id: "sicilian",
    name: "Sicilian",
    description: "Brzi i ukusni obrok sa pastom, paradajzom, maslinama i kaparima.",
    yields: "4 servings",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    ingredients: [
      "400g pasta (špageti, penne, fusili)",
      "2 kašike maslinovog ulja",
      "2 čena belog luka, sitno iseckana",
      "400g seckanog paradajza iz konzerve",
      "100g crnih maslina, bez koštica i prepolovljenih",
      "2 kašike kapara, oceđenih",
      "1/2 kašičice sušenog origana",
      "So i biber po ukusu",
      "Svež peršun, iseckan (za posipanje)",
      "Rendani parmezan (opciono)"
    ],
    instructions: [
      "U velikom loncu skuvajte pastu prema uputstvima na pakovanju.",
      "Dok se pasta kuva, zagrejte maslinovo ulje u velikom tiganju na srednjoj vatri.",
      "Dodajte beli luk i pržite dok ne zamiriše, oko 1 minut.",
      "Dodajte seckani paradajz, masline, kapare i origano. Promešajte.",
      "Smanjite vatru i ostavite da se sos krčka oko 15 minuta, povremeno mešajući.",
      "Začinite solju i biberom po ukusu.",
      "Kada je pasta skuvana, ocedite je i dodajte u tiganj sa sosom.",
      "Dobro promešajte da se pasta obloži sosom.",
      "Poslužite odmah, posuto svežim peršunom i rendanim parmezanom."
    ],
    notes: [
      "Za pikantniju verziju, dodajte malo ljute papričice u sos.",
      "Možete dodati tunjevinu iz konzerve ili inćune u sos za dodatni ukus.",
      "Umesto svežeg peršuna, možete koristiti bosiljak."
    ],
    nutrition: {
      calories: "550",
      protein: "20g",
      fat: "20g",
      carbohydrates: "75g"
    }
  },
  {
    id: "chicago-deep-dish",
    name: "Chicago Deep Dish",
    description: "Gust, sirast i zasitan komad pice, savršen za deljenje sa prijateljima i porodicom.",
    yields: "6-8 osoba",
    prepTime: "30 minuta",
    cookTime: "45-55 minuta",
    ingredients: [
      "250g brašna, tip \"00\"",
      "5g suvog kvasca",
      "1 kašičica šećera",
      "1/2 kašičice soli",
      "2 kašike maslinovog ulja",
      "150ml mlake vode",
      "500g pelata paradajza, iz konzerve",
      "1 kašičica sušenog origana",
      "1/2 kašičice belog luka u prahu",
      "450g mocarele, iseckane na komade",
      "200g italijanske kobasice, uklonjena opna i ispržena",
      "1 zelena paprika, iseckana",
      "1 crveni luk, iseckan",
      "150g pečuraka, iseckane"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno, kvasac, šećer i so.",
      "Dodajte maslinovo ulje i mlaku vodu, pa zamesite testo. Mesite oko 5-7 minuta.",
      "Oblikujte testo u kuglu, stavite u nauljenu posudu, pokrijte i ostavite da naraste oko 1 sat.",
      "U posudi pomešajte pelat paradajza, origano, beli luk u prahu, so i biber.",
      "Zagrejte rernu na 220°C.",
      "Nauljite dublji okrugli pleh (oko 23-25cm prečnika).",
      "Razvucite testo i prebacite ga u pleh. Testo treba da prekrije dno i stranice pleha.",
      "Preko testa rasporedite polovinu mocarele.",
      "Dodajte isprženu kobasicu, papriku, luk i pečurke.",
      "Preko povrća rasporedite preostalu mocarelu.",
      "Prelijte sve sa sosom od paradajza.",
      "Pecite u zagrejanoj rerni 45-55 minuta, ili dok testo ne porumeni.",
      "Izvadite iz rerne i ostavite da se ohladi 10-15 minuta pre sečenja."
    ],
    notes: [
      "Možete koristiti i druge vrste sira, kao što su provolone ili parmezan.",
      "Dodajte svoje omiljene sastojke, kao što su masline, feferoni ili spanać.",
      "Za bogatiji ukus, koristite domaću kobasicu."
    ],
    nutrition: {
      calories: "450-550",
      fat: "25-35g",
      protein: "20-25g",
      carbohydrates: "40-50g"
    }
  },
  {
    id: "neapolitan",
    name: "Neapolitan",
    description: "Ukusan i jednostavan desert, idealan za sve prilike. Sastoji se od tri sloja različitih ukusa sladoleda.",
    yields: "6 porcija",
    prepTime: "15 minuta",
    cookTime: "najmanje 4 sata",
    ingredients: [
      "500 ml slatke pavlake (za šlag)",
      "400 ml kondenzovanog mleka",
      "1 kašičica ekstrakta vanile",
      "3 kašike kakao praha",
      "150 g svežih jagoda"
    ],
    instructions: [
      "U velikoj posudi umutiti slatku pavlaku dok se ne formiraju čvrsti vrhovi.",
      "Dodati kondenzovano mleko i ekstrakt vanile. Lagano promešati.",
      "Podeliti smesu na tri jednaka dela u tri odvojene posude.",
      "U prvu posudu dodati kakao prah i dobro promešati dok se ne dobije homogena čokoladna smesa.",
      "U drugu posudu ostaviti smesu sa vanilom.",
      "U treću posudu dodati izblendirane jagode i dobro promešati.",
      "U posudu za zamrzavanje prvo sipati sloj čokoladne smese.",
      "Zatim pažljivo sipati sloj vanile preko čokoladne smese.",
      "Na kraju, sipati sloj smese od jagoda preko vanile.",
      "Pokriti posudu folijom ili poklopcem i staviti u zamrzivač na najmanje 4 sata.",
      "Pre serviranja, ostaviti sladoled nekoliko minuta na sobnoj temperaturi da se malo opusti."
    ],
    notes: [
      "Možete koristiti gotove sastojke ukusa umesto da ih sami pravite.",
      "Za intenzivniji ukus jagode, možete dodati više jagoda.",
      "Za lakše serviranje, potopite kašiku za sladoled u toplu vodu pre svakog serviranja."
    ],
    nutrition: {
      calories: "350-400 kcal",
      fat: "25-30 g",
      carbohydrates: "30-35 g",
      protein: "5-7 g"
    }
  },
  {
    id: "calzone",
    name: "Calzone",
    description: "Kalcone je italijansko jelo, vrsta preklopljene pice. Savršen za brzi ručak ili večeru.",
    yields: "2 porcije",
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    ingredients: [
      "300g testa za picu (kupovnog ili domaćeg)",
      "150g mocarele, izrendane",
      "100g šunke, iseckane",
      "50g rendanog parmezana",
      "200g pelata (paradajz sos)",
      "1 čen belog luka, sitno iseckan",
      "1 kašičica origana",
      "Maslinovo ulje",
      "So i biber po ukusu",
      "1 jaje (za premazivanje)"
    ],
    instructions: [
      "Zagrejte rernu na 220°C.",
      "U maloj posudi pomešajte pelat, beli luk, origano, so, biber i malo maslinovog ulja.",
      "Razvucite testo za picu na pobrašnjenoj površini u dva kruga prečnika oko 25cm.",
      "Polovinu svakog kruga testa premažite sosom od paradajza.",
      "Preko sosa pospite mocarelu, šunku i parmezan.",
      "Preklopite drugu polovinu testa preko fila, formirajući polumesece.",
      "Dobro pritisnite ivice viljuškom da se zatvore.",
      "Umutite jaje i premažite kalcone.",
      "Napravite nekoliko malih proreza nožem na vrhu svakog kalcona.",
      "Stavite kalcone na pleh obložen papirom za pečenje.",
      "Pecite u zagrejanoj rerni 20-25 minuta, ili dok ne postanu zlatno smeđi.",
      "Izvadite iz rerne i ostavite da se malo prohlade pre služenja."
    ],
    notes: [
      "Možete koristiti različite filove prema vašem ukusu.",
      "Poslužite sa dodatnim sosom od paradajza ili pavlake sa belim lukom."
    ],
    nutrition: {
      calories: "700-800",
      protein: "40-50g",
      carbohydrates: "70-80g",
      fat: "30-40g"
    }
  },
  {
    id: "stromboli",
    name: "Stromboli",
    description: "Italijanska rolada od testa za picu punjena sirom, mesom i povrćem. Odlična kao glavno jelo ili užina.",
    yields: "6-8 porcija",
    prepTime: "20 minuta",
    cookTime: "25-30 minuta",
    ingredients: [
      "1 pakovanje (400g) testa za picu",
      "1/2 šolje marinara sosa",
      "200g šunke, seckane",
      "150g salame, seckane",
      "150g mocarele, izrendane",
      "50g parmezana, izrendanog",
      "1 paprika, seckana (opciono)",
      "1/4 crnog luka, seckanog (opciono)",
      "1 jaje, umućeno (za premazivanje)",
      "Susam (za posipanje)",
      "Origano (za posipanje)"
    ],
    instructions: [
      "Zagrejte rernu na 200°C.",
      "Razvijte testo za picu u veliki pravougaonik na pobrašnjenoj površini.",
      "Premažite testo marinara sosom, ostavljajući oko 2cm prazno na ivicama.",
      "Poređajte šunku, salamu, mocarelu, parmezan, papriku i crni luk preko sosa.",
      "Urolajte testo čvrsto, počevši od jedne duže strane. Uštinite krajnje da se zatvore.",
      "Stavite stromboli na pleh obložen papirom za pečenje.",
      "Premažite stromboli umućenim jajetom i pospite susamom i origanom.",
      "Isecite nekoliko proreza na vrhu strombolija kako bi para mogla da izlazi.",
      "Pecite 25-30 minuta, ili dok ne porumeni.",
      "Ostavite da se malo ohladi pre sečenja i služenja."
    ],
    notes: [
      "Možete koristiti različite vrste mesa, sireva i povrća po svom ukusu.",
      "Za pikantniji ukus, dodajte malo iseckanih ljutih papričica.",
      "Stromboli se može poslužiti sa dodatnim marinara sosom za umakanje."
    ],
    nutrition: {
      calories: "350-450 kcal",
      fat: "20-30g",
      protein: "20-25g",
      carbohydrates: "30-40g"
    }
  }
];