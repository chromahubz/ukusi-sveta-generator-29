import { Recipe } from './recipes';

export const vegetarianRecipes: Record<string, Recipe> = {
  "Vegetable Curry": {
    name: "Vegetable Curry",
    description: "Vegetable Curry je ukusno i zdravo jelo, prepuno povrća i aromatičnih začina. Idealno za vegetarijance i vegane, a može se poslužiti uz pirinač, naan hleb ili kus-kus.",
    ingredients: [
      "1 kašika ulja (kokosovo ili biljno)",
      "1 veliki luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1 komad đumbira (oko 2 cm), sitno narendan",
      "1 crvena paprika, iseckana na kockice",
      "1 zelena paprika, iseckana na kockice",
      "1 šargarepa, iseckana na kolutiće",
      "1 brokoli, podeljena na cvetiće",
      "1 konzerva (400g) seckanog paradajza",
      "1 konzerva (400ml) kokosovog mleka",
      "1 kašika curry praha",
      "1 kašičica kurkume",
      "1/2 kašičice čilija u prahu (opciono)",
      "1/2 kašičice garam masale",
      "So i biber po ukusu",
      "Sveži korijander, za ukrašavanje"
    ],
    instructions: [
      "U velikoj šerpi ili tiganju zagrejte ulje na srednjoj vatri.",
      "Dodajte luk i pržite dok ne postane staklast, oko 5 minuta.",
      "Dodajte beli luk i đumbir i pržite još 1 minut, dok ne zamiriše.",
      "Dodajte crvenu i zelenu papriku, šargarepu i brokoli. Pržite 5-7 minuta, dok povrće malo ne omekša.",
      "Dodajte seckani paradajz, kokosovo mleko, curry prah, kurkumu, čili (ako koristite) i garam masalu. Dobro promešajte.",
      "Smanjite vatru, poklopite i kuvajte 15-20 minuta, ili dok povrće ne postane mekano.",
      "Posolite i pobiberite po ukusu.",
      "Poslužite toplo, ukrašeno svežim korijanderom."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 4,
    nutrition: {
      calories: "350-400",
      protein: "10-15g",
      fat: "20-25g",
      carbohydrates: "30-35g"
    },
    notes: [
      "Možete koristiti bilo koje povrće koje volite, kao što su karfiol, grašak, krompir ili spanać.",
      "Za intenzivniji ukus, dodajte malo limunovog soka na kraju kuvanja.",
      "Curry se može čuvati u frižideru do 3 dana."
    ]
  },

  "Caprese Salad": {
    name: "Caprese Salad",
    description: "Jednostavna i ukusna italijanska salata, idealna kao predjelo ili lagani obrok.",
    ingredients: [
      "2 zrela paradajza",
      "250g sveže mocarele (idealno Buffalo mocarela)",
      "Sveži bosiljak (nekoliko listova)",
      "Ekstra devičansko maslinovo ulje",
      "Balsamico glazura (opciono)",
      "So",
      "Sveže mleveni crni biber"
    ],
    instructions: [
      "Paradajz operite i isecite na kriške debljine oko 0.5 cm.",
      "Mocarelu isecite na kriške slične debljine kao paradajz.",
      "Na tanjir naizmenično ređajte kriške paradajza i mocarele, preklapajući ih.",
      "Između kriški stavite listove svežeg bosiljka.",
      "Poprskajte salatu maslinovim uljem.",
      "Posolite i pobiberite po ukusu.",
      "Ako želite, prelijte sa malo balsamico glazure.",
      "Odmah servirajte."
    ],
    prepTime: "10 minuta",
    cookTime: "0 minuta",
    servings: 2,
    nutrition: {
      calories: 350,
      protein: "20g",
      fat: "25g",
      carbohydrates: "10g"
    },
    notes: [
      "Za najbolji ukus, koristite sveže i kvalitetne sastojke.",
      "Možete dodati i malo morske soli za intenzivniji ukus.",
      "Salata se može rashladiti pre serviranja, ali ne previše, kako mocarela ne bi izgubila teksturu."
    ]
  },

  "Mushroom Risotto": {
    name: "Mushroom Risotto",
    description: "Ovaj kremasti rižoto sa pečurkama je klasično italijansko jelo, savršeno za hladne dane. Jednostavan za pripremu, a ukus mu je bogat i zadovoljavajući.",
    ingredients: [
      "300g Arborio pirinča",
      "500g svežih pečuraka (npr. šampinjoni, vrganji, shitake), očišćenih i isečenih",
      "1 srednji crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "1.5l vrele pileće ili povrtne supe",
      "100ml suvog belog vina",
      "50g putera",
      "50g rendanog parmezana, plus dodatno za serviranje",
      "2 kašike maslinovog ulja",
      "Sveži peršun, sitno iseckan (za dekoraciju)",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj, širokoj šerpi ili tiganju zagrejte maslinovo ulje na srednjoj vatri. Dodajte iseckani crni luk i dinstajte dok ne postane staklast, oko 5 minuta.",
      "Dodajte beli luk i nastavite da dinstajte još minut, dok ne zamiriše.",
      "Dodajte isečene pečurke i kuvajte dok ne omekšaju i puste tečnost, oko 8-10 minuta. Posolite i pobiberite.",
      "Ubacite Arborio pirinač i mešajte ga sa pečurkama i lukom oko 2 minuta, dok pirinač ne postane providan na krajevima.",
      "Ulijte belo vino i mešajte dok se potpuno ne upije.",
      "Počnite dodavati vrelu supu, kutlaču po kutlaču, mešajući konstantno. Svaki put sačekajte da pirinač upije tečnost pre nego što dodate sledeću kutlaču.",
      "Nastavite da dodajete supu na ovaj način, mešajući sve vreme, dok pirinač ne bude al dente i rižoto kremast, oko 20-25 minuta.",
      "Sklonite sa vatre i umešajte puter i rendani parmezan. Dobro promešajte dok se ne otope i sjedine sa rižotom.",
      "Probajte i po potrebi dodajte još soli i bibera.",
      "Servirajte toplo, posuto svežim peršunom i dodatnim rendanim parmezanom."
    ],
    prepTime: "15 minuta",
    cookTime: "30 minuta",
    servings: 4,
    nutrition: {
      calories: "450-550",
      protein: "15-20g",
      fat: "20-25g",
      carbohydrates: "50-60g"
    },
    notes: [
      "Važno je koristiti Arborio pirinač za rižoto, jer ima visok sadržaj skroba koji daje kremastu teksturu.",
      "Supa mora biti vrela tokom celog procesa kuvanja.",
      "Konstantno mešanje je ključno za postizanje kremaste teksture.",
      "Možete dodati i druge sastojke po želji, kao što su panceta, tartufi ili grašak."
    ]
  },

  "Veggie Burger": {
    name: "Veggie Burger",
    description: "Vegetarijanski burger pun ukusa, savršen za ručak ili večeru.",
    ingredients: [
      "1 šolja kuvanog smeđeg pirinča",
      "1 šolja kuvanog crnog pasulja, oceđenog i ispranog",
      "1/2 šolje sitno iseckane šargarepe",
      "1/2 šolje sitno iseckanog crnog luka",
      "1/4 šolje sitno iseckane paprike (bilo koje boje)",
      "1/4 šolje seckanih oraha ili badema",
      "2 kašike brašna (ili brašna od leblebija za verziju bez glutena)",
      "1 kašika soja sosa",
      "1 kašičica dimljene paprike",
      "1/2 kašičice belog luka u prahu",
      "1/4 kašičice crnog bibera",
      "So po ukusu",
      "2 kašike ulja (za prženje)",
      "4 zemičke za burgere",
      "Prilozi po izboru (zelena salata, paradajz, luk, avokado, sos)"
    ],
    instructions: [
      "U velikoj posudi, izgnječite crni pasulj viljuškom. Ne treba ga potpuno usitniti, ostavite malo teksture.",
      "Dodajte pirinač, šargarepu, luk, papriku i orahe (ili bademe) u posudu sa pasuljem.",
      "U posebnoj manjoj posudi, pomešajte brašno, soja sos, dimljenu papriku, beli luk u prahu, biber i so.",
      "Dodajte suve sastojke u posudu sa ostalim sastojcima i dobro promešajte dok se sve ne sjedini.",
      "Rukama formirajte 4 jednaka burgera.",
      "Zagrejte ulje u velikom tiganju na srednjoj vatri.",
      "Pažljivo stavite burgere u tiganj i pržite ih oko 5-7 minuta sa svake strane, dok ne postanu zlatno smeđi i čvrsti na dodir.",
      "Poslužite burgere u zemičkama sa prilozima po izboru."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4,
    nutrition: {
      calories: "300-350",
      protein: "12-15g",
      fat: "10-15g",
      carbohydrates: "40-45g"
    },
    notes: [
      "Za dodatni ukus, možete dodati malo ljute papričice u smesu za burgere.",
      "Burgere možete peći i u rerni. Pecite ih na 200°C oko 20 minuta, okrećući ih na pola pečenja.",
      "Ako je smesa previše vlažna, dodajte još malo brašna. Ako je previše suva, dodajte malo vode ili soja sosa.",
      "Burgere možete pripremiti unapred i čuvati u frižideru do 2 dana."
    ]
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
    prepTime: "30 minuta + 24 sata namakanja",
    cookTime: "15-20 minuta",
    servings: 20,
    nutrition: {
      calories: "75-100",
      protein: "3-4g",
      fat: "4-6g",
      carbohydrates: "8-10g"
    },
    notes: [
      "Nikada ne koristite konzerviranu leblebiju! Za dobar falafel ključno je korišćenje suve, natopljene leblebije.",
      "Ako nemate korijander, možete koristiti samo peršun, ali će ukus biti malo drugačiji.",
      "Po želji, u smesu možete dodati i druge začine, kao što su susam, sumak ili kim.",
      "Falafel možete peći i u rerni. Oblikovane falafel stavite na pleh obložen papirom za pečenje, poprskajte uljem i pecite na 200°C oko 20-25 minuta, dok ne porumene.",
      "Ostatke falafla možete čuvati u frižideru do 3 dana."
    ]
  },

  "Greek Salad": {
    name: "Greek Salad",
    description: "Osvežavajuća i jednostavna salata savršena za tople dane.",
    ingredients: [
      "1 krastavac, srednje veličine",
      "1 zelena paprika",
      "1 crveni luk, manji",
      "4 paradajza, srednje veličine",
      "200g feta sira",
      "1/2 šolje Kalamata maslina",
      "2 kašike ekstra devičanskog maslinovog ulja",
      "1 kašika crvenog vinskog sirćeta",
      "1/2 kašičice sušenog origana",
      "So i biber po ukusu"
    ],
    instructions: [
      "Operite i osušite svo povrće.",
      "Krastavac isecite na kolutove ili polovine kolutova.",
      "Papriku isecite na manje komade.",
      "Crveni luk isecite na tanke kriške.",
      "Paradajz isecite na kocke ili četvrtine, zavisno od veličine.",
      "U velikoj činiji pomešajte krastavac, papriku, crveni luk i paradajz.",
      "Dodajte Kalamata masline.",
      "U maloj činiji pomešajte maslinovo ulje, crveno vinsko sirće, origano, so i biber. Dobro promešajte.",
      "Prelijte preliv preko povrća i lagano promešajte.",
      "Feta sir isecite na kocke i stavite preko salate.",
      "Servirajte odmah."
    ],
    prepTime: "15 minuta",
    cookTime: "0 minuta",
    servings: 4,
    nutrition: {
      calories: 250,
      fat: "18g",
      protein: "8g",
      carbohydrates: "12g",
      fiber: "3g"
    },
    notes: [
      "Možete dodati kapare za dodatni ukus.",
      "Ako nemate crveno vinsko sirće, možete koristiti limunov sok.",
      "Salata je najbolja sveže pripremljena, ali se može čuvati u frižideru do 24 sata."
    ]
  },

  "Margherita Pizza": {
    name: "Margherita Pizza",
    description: "Klasična i jednostavna pizza sa sosom od paradajza, mocarelom i bosiljkom.",
    ingredients: [
      "500g testo za picu",
      "400g pelat paradajza, iz konzerve",
      "2 čena belog luka, sitno iseckana",
      "1 kašičica sušenog origana",
      "2 kašike maslinovog ulja",
      "So i biber, po ukusu",
      "250g sveže mocarele, isečene na kriške",
      "Sveži bosiljak, za ukras"
    ],
    instructions: [
      "Zagrejte rernu na 250°C (ili najvišu temperaturu). Stavite kamen za picu u rernu ako ga imate.",
      "U posudi, pomešajte pelat paradajz, beli luk, origano, maslinovo ulje, so i biber. Izblendirajte štapnim mikserom dok ne dobijete gladak sos.",
      "Podelite testo za picu na četiri jednaka dela. Razvucite svaki deo u krug debljine oko 0.5cm.",
      "Premažite svaki krug testa sosom od paradajza, ostavljajući mali rub bez sosa.",
      "Rasporedite kriške mocarele preko sosa.",
      "Pažljivo prebacite picu na kamen za picu ili pleh obložen papirom za pečenje.",
      "Pecite u zagrejanoj rerni 15-20 minuta, ili dok testo ne postane zlatno smeđe, a mocarela se rastopi i malo porumeni.",
      "Izvadite pizzu iz rerne i ukrasite svežim bosiljkom.",
      "Isecite na kriške i poslužite odmah."
    ],
    prepTime: "20 minuta",
    cookTime: "15-20 minuta",
    servings: 4,
    nutrition: {
      calories: 450,
      fat: "20g",
      protein: "20g",
      carbohydrates: "50g"
    },
    notes: [
      "Testo za picu možete napraviti sami ili kupiti gotovo.",
      "Za intenzivniji ukus, dodajte malo šećera u sos od paradajza.",
      "Možete koristiti i dimljenu mocarelu za drugačiji ukus.",
      "Ako koristite pleh umesto kamena za picu, može biti potrebno malo duže vreme pečenja."
    ]
  },

  "Pasta Primavera": {
    name: "Pasta Primavera",
    description: "Ovo je klasično italijansko jelo sa testeninom i prolećnim povrćem. Lagano, osvežavajuće i puno vitamina.",
    ingredients: [
      "350g testenine (fettuccine, penne ili fusilli)",
      "1 kašika maslinovog ulja",
      "1 glavica crnog luka, sitno iseckana",
      "2 čena belog luka, sitno iseckana",
      "1 šolja brokule, isečena na cvetiće",
      "1 šolja špargle, isečena na komade od 2-3 cm",
      "1 šolja graška (svežeg ili smrznutog)",
      "1 šolja šargarepe, isečena na tanke kolutiće",
      "1/2 šolje pavlake za kuvanje",
      "1/4 šolje rendanog parmezana",
      "So i biber po ukusu",
      "Svež peršun, sitno iseckan (za posipanje)"
    ],
    instructions: [
      "Skuvajte testeninu prema uputstvima na pakovanju. Sačuvajte oko 1 šolje vode u kojoj se kuvala testenina pre nego što je procedite.",
      "Dok se testenina kuva, zagrejte maslinovo ulje u velikom tiganju na srednjoj vatri.",
      "Dodajte crni luk i beli luk i pržite dok ne omekšaju, oko 5 minuta.",
      "Dodajte brokulu, šparglu, grašak i šargarepu u tiganj. Pržite povrće dok ne omekša, oko 8-10 minuta.",
      "Smanjite vatru na nisku i dodajte pavlaku za kuvanje. Mešajte dok se sve lepo ne sjedini.",
      "Dodajte rendani parmezan u sos i nastavite da mešate dok se sir ne otopi.",
      "Začinite sos solju i biberom po ukusu.",
      "Dodajte skuvanu testeninu u tiganj sa sosom.",
      "Dodajte malo vode u kojoj se kuvala testenina ako je sos previše gust. Mešajte da se sve lepo sjedini.",
      "Servirajte odmah, posuto svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 4,
    nutrition: {
      calories: "450-550",
      fat: "15-25g",
      carbohydrates: "60-70g",
      protein: "15-20g"
    },
    notes: [
      "Možete koristiti bilo koje prolećno povrće koje volite, kao što su tikvice, boranija ili karfiol.",
      "Za vegetarijansku verziju, koristite biljni puter ili margarin umesto putera.",
      "Ako želite bogatiji ukus, možete dodati malo belog vina u sos.",
      "Za jači ukus belog luka, dodajte ga kasnije u procesu kuvanja."
    ]
  },

  "Stuffed Peppers": {
    name: "Stuffed Peppers",
    description: "Punjene paprike sa mesom i pirinčem, klasično i ukusno jelo savršeno za ručak ili večeru.",
    ingredients: [
      "6 velikih paprika (babura)",
      "500g mlevenog mesa (junećeg ili mešanog)",
      "1 šolja pirinča (okruglog zrna)",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, sitno iseckana",
      "2 kašike ulja",
      "1 konzerva (400g) pelata paradajza, iseckanog",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za posipanje)",
      "500ml goveđe supe ili vode"
    ],
    instructions: [
      "Pripremite paprike: Operite paprike, isecite im vrhove i uklonite semenke.",
      "Pripremite fil: U velikoj šerpi zagrejte ulje na srednjoj vatri. Dodajte crni luk i pržite dok ne postane staklast.",
      "Dodajte mleveno meso i pržite ga dok ne porumeni. Razbijte grudvice mesa viljuškom.",
      "Dodajte beli luk, pirinač, pelat paradajza, origano, bosiljak, so i biber. Dobro promešajte i kuvajte 5 minuta.",
      "Napunite paprike: Napunite svaku papriku smesom od mesa i pirinča. Ostavite malo prostora na vrhu jer će pirinač nabubreti tokom kuvanja.",
      "Kuvajte paprike: Stavite napunjene paprike u šerpu ili duboki tiganj. Prelijte ih goveđom supom ili vodom, dovoljno da tečnost dođe do polovine visine paprika.",
      "Poklopite šerpu i kuvajte na laganoj vatri oko 1 sat i 30 minuta, ili dok paprike ne omekšaju, a pirinač bude skuvan. Povremeno proverite i dodajte još tečnosti ako je potrebno.",
      "Poslužite: Poslužite tople punjene paprike posute svežim peršunom."
    ],
    prepTime: "30 minuta",
    cookTime: "1 sat 30 minuta",
    servings: 6,
    nutrition: {
      calories: "350-400",
      protein: "25-30g",
      fat: "15-20g",
      carbohydrates: "30-35g"
    },
    notes: [
      "Možete dodati i druge začine po želji, kao što su aleva paprika ili kim.",
      "Umesto goveđe supe, možete koristiti i pileću supu ili vodu sa kockom za supu.",
      "Za bogatiji ukus, možete dodati malo rendanog kačkavalja na vrh svake paprike pre pečenja."
    ]
  },

  "Ratatouille": {
    name: "Ratatouille",
    description: "Ratatouille je tradicionalno provansalsko jelo od dinstanog povrća. Savršeno kao prilog ili glavno jelo.",
    ingredients: [
      "1 veliki patlidžan, isečen na kockice",
      "2 tikvice, isečene na kockice",
      "1 crveni luk, iseckan",
      "2 paprike (crvena i žuta), isečene na kockice",
      "4 čena belog luka, sitno iseckana",
      "500g pelata paradajza, grubo iseckanog",
      "2 kašike maslinovog ulja",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "So i biber, po ukusu",
      "Svež peršun, iseckan (za posipanje)"
    ],
    instructions: [
      "Zagrejte maslinovo ulje u velikom tiganju ili šerpi na srednjoj vatri.",
      "Dodajte crveni luk i pržite dok ne omekša, oko 5 minuta.",
      "Dodajte beli luk i pržite još minut, dok ne zamiriše.",
      "Dodajte patlidžan, tikvice i paprike. Kuvajte, povremeno mešajući, dok povrće ne počne da omekšava, oko 10 minuta.",
      "Dodajte pelat paradajza, origano i bosiljak. Promešajte.",
      "Smanjite vatru na nisku, poklopite i kuvajte 45-60 minuta, ili dok povrće ne bude potpuno mekano i sos se zgusne. Povremeno promešajte.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite toplo, posuto svežim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "45-60 minuta",
    servings: 4,
    nutrition: {
      calories: "150-200",
      fat: "8-12g",
      carbohydrates: "15-20g",
      protein: "4-6g"
    },
    notes: [
      "Možete dodati i druge vrste povrća, poput pečuraka ili šargarepe.",
      "Za bogatiji ukus, možete dodati malo paradajz paste.",
      "Ratatouille je još ukusniji dan nakon kuvanja, jer se ukusi bolje sjedine."
    ]
  },

  "Vegetable Stir Fry": {
    name: "Vegetable Stir Fry",
    description: "Brzo i zdravo jelo sa hrskavim povrćem i ukusnim sosom. Savršeno za lagani ručak ili večeru.",
    ingredients: [
      "1 kašika susamovog ulja",
      "1 šolja brokolija, isečenog na cvetove",
      "1 crvena paprika, iseckana",
      "1 žuta paprika, iseckana",
      "1 šargarepa, iseckana na tanke štapiće",
      "1/2 crvenog luka, isečenog na rebarca",
      "1 šolja kineskog kupusa, iseckanog",
      "2 čena belog luka, sitno iseckana",
      "1 komadić đumbira (oko 2 cm), sitno narendan",
      "2 kašike soja sosa",
      "1 kašika pirinčanog sirćeta",
      "1 kašičica meda ili javorovog sirupa",
      "1 kašičica susamovih semenki, za posipanje",
      "So i biber, po ukusu"
    ],
    instructions: [
      "U voku ili velikom tiganju zagrejte susamovo ulje na srednje jakoj vatri.",
      "Dodajte beli luk i đumbir i pržite dok ne zamiriše (oko 30 sekundi).",
      "Dodajte brokoli, paprike i šargarepu. Pržite, mešajući, 3-4 minuta, dok povrće malo ne omekša.",
      "Dodajte crveni luk i kineski kupus. Nastavite da pržite još 2-3 minuta, dok povrće ne postane hrskavo i meko.",
      "U maloj posudi pomešajte soja sos, pirinčano sirće i med.",
      "Prelijte povrće sosom i mešajte dok se sos ne zgusne i obloži povrće (oko 1 minut).",
      "Posolite i pobiberite po ukusu.",
      "Servirajte odmah, posuto susamovim semenkama."
    ],
    prepTime: "15 minuta",
    cookTime: "10 minuta",
    servings: 2,
    nutrition: {
      calories: 250,
      protein: "8g",
      fat: "15g",
      carbohydrates: "25g",
      fiber: "7g"
    },
    notes: [
      "Možete koristiti bilo koje povrće koje volite, kao što su grašak, tikvice, pečurke ili boranija.",
      "Za pikantniji ukus, dodajte malo čili pahuljica u sos.",
      "Poslužite preko kuvanog pirinča ili nudli."
    ]
  },

  "Quinoa Salad": {
    name: "Quinoa Salad",
    description: "Ova osvežavajuća salata je puna proteina i vlakana, savršena za lagani ručak ili prilog.",
    ingredients: [
      "1 šolja kvinoje",
      "2 šolje vode ili bujona",
      "1 krastavac, iseckan na kockice",
      "1 paprika (crvena ili žuta), iseckana na kockice",
      "1/2 crvenog luka, sitno iseckanog",
      "1/2 šolje čeri paradajza, prepolovljenog",
      "1/4 šolje svežeg peršuna, sitno iseckanog",
      "1/4 šolje sveže nane, sitno iseckane",
      "Sok od 1 limuna",
      "3 kašike maslinovog ulja",
      "So i biber po ukusu",
      "Feta sir (opciono), izmrvljen"
    ],
    instructions: [
      "Kvinoju isperite pod hladnom vodom.",
      "U šerpi, pomešajte kvinoju i vodu ili bujon. Pustite da provri, zatim smanjite vatru, poklopite i kuvajte 15 minuta, ili dok kvinoja ne upije svu tečnost.",
      "Sklonite sa vatre i ostavite da se prohladi 5 minuta. Razdvojite kvinoju viljuškom.",
      "U velikoj činiji, pomešajte kuvanu kvinoju, krastavac, papriku, crveni luk, čeri paradajz, peršun i nanu.",
      "U maloj činiji, pomešajte sok od limuna, maslinovo ulje, so i biber.",
      "Preliv prelijte preko salate i dobro promešajte.",
      "Po želji, pospite izmrvljeni feta sir preko salate.",
      "Služite odmah ili ohladite pre serviranja."
    ],
    prepTime: "15 minuta",
    cookTime: "15 minuta",
    servings: 4,
    nutrition: {
      calories: "250-300",
      protein: "8-10g",
      fat: "15-20g",
      carbohydrates: "25-30g",
      fiber: "5-7g"
    },
    notes: [
      "Možete dodati i druge sastojke po želji, kao što su avokado, masline ili pečeni leblebije.",
      "Salata se može čuvati u frižideru do 3 dana."
    ]
  },

  "Cheese Omelette": {
    name: "Cheese Omelette",
    description: "Jednostavan i brz omlet sa sirom, idealan za doručak ili laganu večeru.",
    ingredients: [
      "2 velika jaja",
      "2 supene kašike mleka ili pavlake za kuvanje",
      "1/4 kafene kašičice soli",
      "Prstohvat bibera",
      "50g izrendanog sira (cheddar, gauda, mozzarella)",
      "1 supena kašika putera ili ulja"
    ],
    instructions: [
      "U činiji umutiti jaja, mleko (ili pavlaku), so i biber dok se dobro ne sjedine.",
      "U tiganju, na srednjoj vatri, otopiti puter (ili zagrejati ulje).",
      "Sipati smesu od jaja u zagrejan tiganj.",
      "Pustiti da se omlet peče oko 1-2 minuta, dok se ne počne stvrdnjavati na ivicama, ali sredina još uvek bude tečna.",
      "Pospite izrendani sir ravnomerno preko omleta.",
      "Koristeći lopaticu, preklopite jednu polovinu omleta preko druge.",
      "Nastavite da pečete omlet još 1-2 minuta, ili dok se sir ne otopi i omlet ne bude pečen po vašem ukusu.",
      "Pažljivo prebacite omlet na tanjir i odmah poslužite."
    ],
    prepTime: "2 minuta",
    cookTime: "5 minuta",
    servings: 1,
    nutrition: {
      calories: 350,
      protein: "25g",
      fat: "25g",
      carbohydrates: "5g"
    },
    notes: [
      "Dodajte seckane začine (peršun, vlašac) pre preklapanja za dodatni ukus.",
      "Umesto izrendanog sira, možete koristiti i sitno iseckanu šunku, pečurke ili papriku.",
      "Za pufnastiji omlet, koristite mikser za mućenje jaja."
    ]
  },

  "Veggie Wrap": {
    name: "Veggie Wrap",
    description: "Lagani i ukusni wrap pun svežeg povrća, savršen za brz ručak ili večeru.",
    ingredients: [
      "2 velike tortilje",
      "1/2 krastavca, isečen na tanke kolutove",
      "1/2 crvene paprike, iseckane na trakice",
      "1/2 šargarepe, narendane",
      "1 šaka baby spanaća",
      "50g humus",
      "50g feta sir, izmrvljen",
      "1 kašika maslinovog ulja",
      "So i biber po ukusu"
    ],
    instructions: [
      "Pripremite povrće: Operite i isecite krastavac, papriku i šargarepu.",
      "Zagrejte tortilje: Na suvom tiganju zagrejte tortilje sa obe strane po 30 sekundi.",
      "Namažite humus: Ravnomerno namažite humus preko svake tortilje.",
      "Složite povrće: Preko humusa složite spanać, krastavac, papriku i šargarepu.",
      "Dodajte feta sir: Pospite izmrvljeni feta sir preko povrća.",
      "Začinite: Poprskajte maslinovim uljem, posolite i pobiberite po ukusu.",
      "Uvijte wrapove: Čvrsto uvijte tortilje.",
      "Servirajte: Isecite wrapove na pola i odmah servirajte."
    ],
    prepTime: "15 minuta",
    cookTime: "5 minuta",
    servings: 2,
    nutrition: {
      calories: 350,
      protein: "15g",
      fat: "20g",
      carbohydrates: "30g"
    },
    notes: [
      "Možete dodati i drugo povrće po želji, kao što su avokado, paradajz ili klice.",
      "Umesto humusa, možete koristiti neki drugi namaz, kao što je pesto ili krem sir.",
      "Za pikantniji ukus, dodajte malo ljutog sosa."
    ]
  },

  "Hummus": {
    name: "Hummus",
    description: "Kremast i ukusan namaz od leblebija, savršen kao dip, namaz za sendviče ili prilog.",
    ingredients: [
      "250g suvih leblebija (ili 400g konzerviranih, oceđenih i ispranih)",
      "1/4 čaše tahinija",
      "1/4 čaše limunovog soka, sveže ceđenog",
      "2-3 čena belog luka, izgnječenog",
      "1/4 čaše ledene vode",
      "2 kašike maslinovog ulja, plus malo za posluživanje",
      "1/2 kašičice mlevenog kumina",
      "So po ukusu",
      "Paprika za posluživanje (opciono)",
      "Svež peršun, iseckan za posluživanje (opciono)"
    ],
    instructions: [
      "**Ako koristite suve leblebije:** Potopite leblebije u velikoj količini vode najmanje 8 sati ili preko noći.",
      "Ocedite i isperite leblebije. Stavite ih u šerpu sa svežom vodom (da ih prekrije).",
      "Prokuvajte, zatim smanjite vatru i kuvajte na laganoj vatri oko 1-1.5 sat, ili dok leblebije ne budu veoma mekane i lako se mogu gnječiti viljuškom. Povremeno skidajte penu koja se stvara na površini.",
      "Ocedite leblebije, sačuvajte oko 1/2 čaše vode u kojoj su se kuvale.",
      "**Ako koristite konzervirane leblebije:** Dobro ih ocedite i isperite.",
      "U blenderu ili procesoru za hranu, pomešajte tahini i limunov sok dok se ne sjedine.",
      "Dodajte beli luk, kumin i leblebije. Blendajte dok ne dobijete glatku smesu.",
      "Postepeno dodajte ledenu vodu, kašiku po kašiku, blendajući dok se ne postigne željena konzistencija. Ako je potrebno, dodajte malo sačuvane vode od kuvanja leblebija.",
      "Ulijte maslinovo ulje i blendajte još malo dok se sve dobro ne sjedini.",
      "Začinite solju po ukusu.",
      "Prebacite hummus u činiju za serviranje.",
      "Prelijte sa malo maslinovog ulja, pospite paprikom i iseckanim peršunom (ako koristite)."
    ],
    prepTime: "15 minuta",
    cookTime: "1.5 sata (za suve leblebije)",
    servings: 6,
    nutrition: {
      calories: "200-250",
      fat: "12-15g",
      carbohydrates: "15-20g",
      protein: "7-10g"
    },
    notes: [
      "Za kremastiji hummus, skinite ljuske sa leblebija pre blendanja.",
      "Uvek koristite svež limunov sok za najbolji ukus.",
      "Hummus se može čuvati u frižideru do 5 dana."
    ]
  },

  "Spinach Lasagna": {
    name: "Spinach Lasagna",
    description: "Lasagna sa spanaćem, bogata i kremasta, idealna za vegetarijanski ručak ili večeru.",
    ingredients: [
      "1 kg svežeg spanaća (ili 500g smrznutog)",
      "500g ricotta sira",
      "250g mozzarella sira, izrendana",
      "100g parmezana, izrendanog",
      "1 jaje",
      "1 čen belog luka, sitno iseckan",
      "1/4 kašičice muskatnog oraščića",
      "So i biber po ukusu",
      "500g sos od paradajza (gotov ili domaći)",
      "250g suve lazanje kore",
      "2 kašike maslinovog ulja"
    ],
    instructions: [
      "Ako koristite sveži spanać, operite ga i kratko blanširajte u kipućoj vodi (1-2 minuta) dok ne uvene. Iscedite višak vode i sitno iseckajte. Ako koristite smrznuti spanać, odmrznite ga i iscedite višak vode.",
      "U velikoj posudi pomešajte ricotta sir, jaje, beli luk, muskatni oraščić, so i biber. Dodajte iseckani spanać i dobro promešajte.",
      "U manjoj posudi pomešajte izrendanu mozzarellu i polovinu parmezana.",
      "Na dnu vatrostalne posude (oko 20x30cm) sipajte tanak sloj sosa od paradajza.",
      "Preko sosa rasporedite sloj kora za lazanje.",
      "Preko kora rasporedite polovinu smese sa spanaćem i ricotta sirom.",
      "Preko smese sa spanaćem pospite polovinu smese sa mozzarellom i parmezanom.",
      "Preko pospite sloj sosa od paradajza.",
      "Ponovite slojeve: kore, smesa sa spanaćem, smesa sa mozzarellom i parmezanom, sos od paradajza.",
      "Završite slojem kora za lazanje, prelijte preostalim sosom od paradajza i pospite preostalim parmezanom.",
      "Pokrijte vatrostalnu posudu aluminijumskom folijom i pecite u zagrejanoj rerni na 180°C oko 30 minuta.",
      "Uklonite foliju i nastavite da pečete još 15 minuta, ili dok lazanje ne dobiju zlatno-smeđu boju.",
      "Izvadite lazanje iz rerne i ostavite da se ohlade 10-15 minuta pre serviranja."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 6,
    nutrition: {
      calories: "450-550",
      protein: "30-40g",
      fat: "20-30g",
      carbohydrates: "40-50g"
    },
    notes: [
      "Za bogatiji ukus, u smesu sa spanaćem možete dodati pržene pečurke.",
      "Umesto suve, možete koristiti sveže kore za lazanje. Vreme pečenja može biti kraće.",
      "Dodajte malo bešamel sosa između slojeva za kremastiju teksturu.",
      "Možete napraviti lazanje dan ranije i peći ih neposredno pre serviranja."
    ]
  },

  "Vegetable Soup": {
    name: "Vegetable Soup",
    description: "Ova supa je zdrava, hranljiva i puna ukusa. Odlična je kao lagani ručak ili večera, ili kao prilog uz glavno jelo.",
    ingredients: [
      "2 kašike maslinovog ulja",
      "1 veliki luk, sitno iseckan",
      "2 šargarepe, iseckane",
      "2 stabljike celera, iseckane",
      "3 čena belog luka, sitno iseckana",
      "8 šolja povrtnog bujona",
      "1 konzerva (400g) seckanog paradajza",
      "1 krompir, oljušten i iseckan na kockice",
      "1 tikvica, iseckana na kockice",
      "1 šolja seckanog zelenog pasulja",
      "1 šolja kukuruza (svež ili zamrznut)",
      "1 šolja graška (svež ili zamrznut)",
      "1 kašičica sušenog origana",
      "1/2 kašičice sušenog bosiljka",
      "So i biber po ukusu",
      "Sveži peršun, iseckan (za ukras)"
    ],
    instructions: [
      "U velikom loncu zagrejte maslinovo ulje na srednjoj vatri.",
      "Dodajte luk, šargarepu i celer i dinstajte dok ne omekšaju, oko 5-7 minuta.",
      "Dodajte beli luk i kuvajte još 1 minut, dok ne zamiriše.",
      "U lonac sipajte povrtni bujon i seckani paradajz.",
      "Dodajte krompir, tikvice, zeleni pasulj, kukuruz i grašak.",
      "Umešajte origano i bosiljak.",
      "Pustite da provri, zatim smanjite vatru i kuvajte poklopljeno dok povrće ne omekša, oko 20 minuta.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite vruće, ukrašeno seckanim peršunom."
    ],
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    servings: 6,
    nutrition: {
      calories: 150,
      fat: "5g",
      carbohydrates: "20g",
      protein: "5g",
      fiber: "5g"
    },
    notes: [
      "Možete dodati i druge vrste povrća po želji, kao što su karfiol, brokoli ili spanać.",
      "Za bogatiji ukus, možete koristiti domaćii povrtni bujon.",
      "Supa se može čuvati u frižideru do 3 dana.",
      "Možete dodati testeninu pri kraju kuvanja."
    ]
  },

  "Eggplant Parmesan": {
    name: "Eggplant Parmesan",
    description: "Klasično italijansko jelo sa slojevima patlidžana, sosa od paradajza i mocarele, zapečeno u rerni.",
    ingredients: [
      "2 velika patlidžana",
      "1/2 šolje brašna",
      "2 velika jaja, umućena",
      "1 šolja prezle",
      "1/2 šolje narendanog parmezana",
      "1 kašičica italijanske mešavine začina",
      "1/4 šolje maslinovog ulja",
      "700g pasiranog paradajza",
      "2 čena belog luka, sitno iseckana",
      "1/2 kašičice šećera",
      "So i biber po ukusu",
      "450g sveže mocarele, isečena na kriške",
      "Sveži bosiljak, za ukrašavanje (opciono)"
    ],
    instructions: [
      "Patlidžan iseći na kriške debljine oko 1 cm. Pospite ih solju i ostavite u cediljci 30 minuta da se ukloni gorčina. Isperite i osušite papirnim ubrusima.",
      "U tri odvojene posude, pripremite brašno, umućena jaja i mešavinu prezle, parmezana i italijanske mešavine začina.",
      "Svaku krišku patlidžana uvaljajte prvo u brašno, zatim u umućena jaja i na kraju u prezle.",
      "Zagrejati maslinovo ulje u velikom tiganju na srednjoj vatri. Pržite kriške patlidžana u serijama dok ne porumene sa obe strane (oko 3-4 minuta po strani). Izvadite i stavite na papirni ubrus da se ocedi višak ulja.",
      "U šerpi zagrejte malo maslinovog ulja, dodajte beli luk i pržite dok ne zamiriše. Dodajte pasirani paradajz, šećer, so i biber. Krčkajte sos 15 minuta.",
      "U vatrostalnoj posudi, na dno stavite tanak sloj sosa od paradajza. Preko sosa poređajte sloj pohovanog patlidžana, zatim sloj mocarele. Ponovite slojeve dok ne potrošite sve sastojke, završavajući slojem sosa i mocarele.",
      "Pecite u zagrejanoj rerni na 190°C (375°F) 25-30 minuta, ili dok se mocarela ne rastopi i dobije zlatno smeđu boju.",
      "Ostavite da se malo ohladi pre sečenja i služenja. Ukrasite svežim bosiljkom (opciono)."
    ],
    prepTime: "30 minuta",
    cookTime: "45 minuta",
    servings: 6,
    nutrition: {
      calories: "450-550",
      protein: "20-25g",
      fat: "25-35g",
      carbohydrates: "30-40g"
    },
    notes: [
      "Za lakšu varijantu, patlidžan možete peći u rerni umesto prženja.",
      "Sos od paradajza možete napraviti sami ili koristiti gotov.",
      "Dodajte druge sireve kao što su rikota ili provolone za dodatni ukus."
    ]
  },

  "Veggie Tacos": {
    name: "Veggie Tacos",
    description: "Ukusni i brzi tacos punjeni povrćem, savršeni za lagani ručak ili večeru.",
    ingredients: [
      "1 glavica crnog luka, iseckana",
      "1 paprika (crvena ili žuta), iseckana",
      "2 čena belog luka, usitnjena",
      "1 tikvica, iseckana",
      "1 konzerva (400g) crnog pasulja, isprana i oceđena",
      "1 konzerva (400g) kukuruza šećerca, oceđena",
      "1 kašičica čili praha",
      "1/2 kašičice kumina",
      "1/4 kašičice kajenske paprike (opciono)",
      "So i biber po ukusu",
      "2 kašike maslinovog ulja",
      "12 malih tortilja od kukuruza ili pšenice",
      "Dodaci: iseckani paradajz, iseckana zelena salata, avokado, pavlaka ili kisela pavlaka, ljuti sos"
    ],
    instructions: [
      "Zagrejte maslinovo ulje u velikom tiganju na srednjoj vatri.",
      "Dodajte crni luk i papriku i pržite dok ne omekšaju, oko 5 minuta.",
      "Dodajte beli luk i tikvice i pržite još 3 minuta.",
      "Dodajte crni pasulj, kukuruz, čili prah, kumin, kajensku papriku (ako koristite), so i biber. Dobro promešajte.",
      "Smanjite vatru na nisku i krčkajte 5-7 minuta, povremeno mešajući, dok se smesa ne zagreje.",
      "U međuvremenu, zagrejte tortilje prema uputstvu na pakovanju. Možete ih zagrejati u tiganju, rerni ili mikrotalasnoj pećnici.",
      "Napunite svaku tortilju smesom od povrća.",
      "Poslužite sa željenim dodacima."
    ],
    prepTime: "20 minuta",
    cookTime: "15 minuta",
    servings: 4,
    nutrition: {
      calories: "350-400",
      protein: "15g",
      fat: "15g",
      carbohydrates: "50g",
      fiber: "10g"
    },
    notes: [
      "Možete koristiti bilo koje povrće koje volite, kao što su pečurke, brokoli ili karfiol.",
      "Za pikantniju verziju, dodajte više čili praha ili kajenske paprike.",
      "Vegansku verziju možete napraviti tako što ćete koristiti vegansku pavlaku.",
      "Tortilje možete zagrejati i direktno iznad plamena šporeta, pažljivo ih okrećući dok ne omekšaju i dobiju blagu boju."
    ]
  },

  "Buddha Bowl": {
    name: "Buddha Bowl",
    description: "Ovo je zdrav, zasitan i prilagodljiv obrok prepun hranljivih sastojaka. Savršen za ručak ili večeru.",
    ingredients: [
      "1/2 šolje kinoe",
      "1 šolja vode",
      "1 kašika maslinovog ulja",
      "1/2 šolje brokolija, iseckanog",
      "1/2 šolje slatkog krompira, iseckanog na kockice",
      "1/4 šolje crnog pasulja, konzerviranog, ispranog i oceđenog",
      "1/4 šolje kukuruza, konzerviranog ili svežeg",
      "1/4 avokada, isečenog na kriške",
      "1 jaje",
      "Sok od 1/2 limete",
      "So i biber po ukusu",
      "Opcije za preliv: susam, ljute pahuljice, tahini dresing"
    ],
    instructions: [
      "Kinuu isperite u sitnom situ.",
      "U šerpi pomešajte ispranu kinuu i vodu. Pustite da provri, zatim smanjite vatru na nisku, poklopite i kuvajte 15 minuta, ili dok se tečnost ne upije i kinoa ne omekša.",
      "Zagrejte maslinovo ulje u tiganju na srednjoj vatri. Dodajte brokoli i slatki krompir i pržite 15-20 minuta, ili dok ne omekšaju i blago porumene. Posolite i pobiberite po ukusu.",
      "Dok se povrće prži, skuvajte jaje po želji (kuvano, poširano ili pečeno).",
      "U činiji, rasporedite kuvanu kinuu kao osnovu.",
      "Dodajte prženi brokoli i slatki krompir, crni pasulj i kukuruz.",
      "Stavite kriške avokada i kuvano jaje preko povrća.",
      "Prelijte sokom od limete.",
      "Za dodatni ukus, pospite susamom, ljutim pahuljicama ili dodajte tahini dresing."
    ],
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    servings: 1,
    nutrition: {
      calories: "450-550",
      protein: "20-25g",
      fat: "20-25g",
      carbohydrates: "50-60g",
      fiber: "15-20g"
    },
    notes: [
      "Slobodno zamenite povrće onim što imate pri ruci ili onim što vam se najviše sviđa. Na primer, kelj, šargarepa, karfiol, ili spanać bi dobro funkcionisali.",
      "Možete koristiti i druge vrste pasulja ili sočiva umesto crnog pasulja.",
      "Za proteinski dodatak, dodajte tofu ili piletinu na žaru.",
      "Pripremite kinuu i povrće unapred da biste ubrzali proces."
    ]
  }
};