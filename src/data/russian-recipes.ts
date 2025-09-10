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
    fiber?: string;
    sugar?: string;
    sodium?: string;
  };
}

export const russianRecipes: Recipe[] = [
  {
    id: "borscht",
    name: "Borscht",
    description: "Tradicionalna supa od cvekle, bogata ukusima i savršena za hladne dane.",
    yields: "6 porcija",
    prepTime: "30 minuta",
    cookTime: "1.5-2 sata",
    ingredients: [
      "500g goveđe kosti ili komadi mesa (npr. rebra)",
      "2 litre vode",
      "1 veliki luk, sitno iseckan",
      "2 srednje šargarepe, iseckane ili narendane",
      "2-3 srednje cvekle, oljuštene i iseckane na štapiće ili narendane",
      "2-3 krompira, oljuštena i iseckana na kockice",
      "1/2 glavice kupusa, tanko iseckanog",
      "2 kašike paradajz pirea",
      "1 kašika sirćeta (ili limunovog soka)",
      "2 čena belog luka, sitno iseckana",
      "1 lovorov list",
      "4-5 zrna bibera",
      "So i biber po ukusu",
      "Sveži peršun ili mirođija, sitno iseckana (za posluživanje)",
      "Pavlaka (za posluživanje, opciono)"
    ],
    instructions: [
      "U velikom loncu stavite goveđe kosti/meso i vodu. Pustite da provri, a zatim smanjite vatru i skinite penu.",
      "Dodajte luk, šargarepu, lovorov list i zrna bibera. Kuvajte na laganoj vatri najmanje 1 sat, ili dok meso ne omekša.",
      "Izvadite meso iz lonca. Ako ste koristili kosti, uklonite ih. Meso iseckajte na manje komade i vratite u lonac.",
      "Dodajte cveklu i sirće (ili limunov sok) u supu. Kuvajte 15-20 minuta, dok cvekla ne omekša.",
      "Dodajte krompir i kupus. Kuvajte dok i krompir ne omekša, oko 15 minuta.",
      "Umešajte paradajz pire i beli luk. Kuvajte još 5 minuta.",
      "Začinite solju i biberom po ukusu.",
      "Izvadite lovorov list pre serviranja.",
      "Poslužite toplo, posuto svežim peršunom ili mirođijom. Dodajte kašiku pavlake po želji."
    ],
    notes: [
      "Za bogatiji ukus, možete dodati malo šećera uz sirće/limunov sok.",
      "Borscht se može čuvati u frižideru do 3 dana. Ukus se čak i poboljšava nakon stajanja.",
      "Možete koristiti i pileći ili povrtni bujon umesto goveđeg.",
      "Ako volite ljuto, dodajte malo ljute papričice u supu."
    ],
    nutrition: {
      calories: "250-350",
      protein: "15-20g",
      fat: "10-15g",
      carbohydrates: "30-40g"
    }
  },
  {
    id: "beef-stroganoff",
    name: "Beef Stroganoff",
    description: "Klasično rusko jelo sa kremastim sosom i tanko narezanim komadima govedine. Odlično uz pire krompir ili testeninu.",
    yields: "4 porcije",
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    ingredients: [
      "500g goveđi biftek ili rib eye, tanko narezan na trake",
      "1 veliki crni luk, sitno iseckan",
      "250g šampinjona, isečenih na listiće",
      "2 kašike brašna",
      "500ml goveđe supe",
      "200ml pavlake za kuvanje",
      "2 kašike ulja",
      "1 kašika dijon senfa",
      "1 kašičica slatke paprike",
      "So i biber po ukusu",
      "2 kašike iseckanog peršuna (za dekoraciju)"
    ],
    instructions: [
      "U velikom tiganju zagrejte ulje na srednjoj vatri.",
      "Dodajte luk i pržite dok ne omekša i postane staklast, oko 5 minuta.",
      "Dodajte šampinjone i pržite dok ne puste vodu i porumene, oko 8 minuta. Izvadite luk i šampinjone iz tiganja.",
      "U istom tiganju, na jakoj vatri, propržite goveđe trake u nekoliko serija dok ne dobiju boju sa svih strana.",
      "Smanjite vatru na srednju. Posipajte brašno po dnu tiganja i mešajte oko 1 minut.",
      "Postepeno dodajte goveđu supu, neprestano mešajući da se izbegnu grudvice. Kuvajte dok se sos ne zgusne, oko 5 minuta.",
      "U sos dodajte senf, slatku papriku, so i biber. Dobro promešajte.",
      "Vratite luk, šampinjone i govedinu u tiganj. Smanjite vatru i kuvajte još 5 minuta.",
      "Umešajte pavlaku za kuvanje i zagrejte, ali ne dozvolite da proključa.",
      "Servirajte toplo, posuto sa iseckanim peršunom."
    ],
    notes: [
      "Za bogatiji ukus, možete dodati i kašiku konjaka ili rakije u sos.",
      "Ako želite pikantniji ukus, dodajte prstohvat ljute paprike.",
      "Beef Stroganoff se može služiti uz pire krompir, testeninu, pirinač ili knedle."
    ],
    nutrition: {
      calories: "450-550",
      protein: "40-50g",
      fat: "25-35g",
      carbohydrates: "15-25g"
    }
  },
  {
    id: "pierogi",
    name: "Pierogi",
    description: "Tradicionalno poljsko jelo, punjeno krompirom i sirom. Savršeno kao glavno jelo ili prilog.",
    yields: "Oko 30 pieroga",
    prepTime: "60 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "3 šolje brašna (oko 375g)",
      "1 jaje",
      "1 šolja tople vode (oko 240ml)",
      "1 kašičica soli",
      "2 kašike otopljenog putera ili ulja",
      "1 kg krompira",
      "250g svežeg sira (neslanog)",
      "1 veliki luk",
      "2 kašike ulja ili putera",
      "So i biber po ukusu"
    ],
    instructions: [
      "Krompir oljuštiti, iseći na kockice i skuvati u slanoj vodi dok ne omekša. Ocediti i izgnječiti.",
      "Luk sitno iseckati i propržiti na ulju ili puteru dok ne postane staklast.",
      "U izgnječeni krompir dodati sir, proprženi luk, so i biber. Dobro promešati.",
      "U velikoj posudi pomešati brašno i so.",
      "Napraviti udubljenje u sredini brašna, dodati jaje, toplu vodu i otopljeni puter.",
      "Postepeno mešati, dodajući brašno sa strane, dok se ne formira testo.",
      "Testo prebaciti na pobrašnjenu površinu i mesiti oko 5-7 minuta dok ne postane glatko i elastično.",
      "Testo umotati u foliju i ostaviti da odstoji 30 minuta.",
      "Testo podeliti na dva dela. Razvaljati jedan deo na tanko (oko 2-3mm debljine).",
      "Okruglom modlom ili čašom (prečnika oko 7-8 cm) vaditi krugove iz testa.",
      "Na svaki krug staviti kašičicu fila.",
      "Preklopiti krug na pola i dobro pritisnuti ivice da se zatvore.",
      "U velikom loncu prokuvati vodu sa malo soli.",
      "Pieroge ubacivati u vrelu vodu u manjim serijama (oko 6-8 pieroga odjednom).",
      "Kada pierogi isplivaju na površinu, kuvati ih još 2-3 minuta.",
      "Izvaditi ih šupljom kašikom i ocediti."
    ],
    notes: [
      "Testo mora biti elastično i ne sme biti previše lepljivo.",
      "Fil se može varirati po ukusu. Možete dodati prženu slaninu, pečurke ili kiseli kupus.",
      "Pierogi se mogu zamrznuti. Pre zamrzavanja ih stavite na poslužavnik obložen papirom za pečenje.",
      "Kuvajte ih smrznute, bez prethodnog odmrzavanja."
    ],
    nutrition: {
      calories: "350-400 kcal",
      protein: "10-15g",
      fat: "15-20g",
      carbohydrates: "40-50g"
    }
  },
  {
    id: "blini",
    name: "Blini",
    description: "Male, tanke palačinke od heljdinog brašna, tradicionalno se služe sa kiselom pavlakom i kavijarom.",
    yields: "Oko 20 blina",
    prepTime: "20 minuta",
    cookTime: "30 minuta",
    ingredients: [
      "125g heljdinog brašna",
      "125g pšeničnog brašna",
      "7g suvog kvasca",
      "1 kašičica šećera",
      "1/2 kašičice soli",
      "375ml tople vode",
      "2 jaja, razdvojena",
      "2 kašike rastopljenog putera, plus dodatno za podmazivanje tiganja"
    ],
    instructions: [
      "U velikoj posudi pomešati heljdino brašno, pšenično brašno, kvasac, šećer i so.",
      "Dodati toplu vodu i dobro promešati dok se ne dobije glatka smesa.",
      "Pokriti posudu i ostaviti na toplom mestu oko 1 sat, ili dok se smesa ne udvostruči.",
      "U maloj posudi umutiti žumanca. Dodati ih u naraslu smesu.",
      "U drugoj posudi umutiti belanca dok se ne formiraju čvrsti vrhovi.",
      "Pažljivo umešati belanca u smesu.",
      "Umešati rastopljeni puter.",
      "Zagrejte malo nauljen tiganj ili rešetku na srednjoj vatri.",
      "Sipajte oko 2 kašike testa za svaki blin.",
      "Kuvajte 2-3 minuta sa svake strane, ili dok ne porumene.",
      "Poslužite toplo sa kiselom pavlakom, kavijarom ili drugim omiljenim dodacima."
    ],
    notes: [
      "Za bogatiji ukus, možete koristiti mleko umesto vode.",
      "Blini se mogu pripremiti unapred i čuvati u frižideru do 2 dana.",
      "Pre serviranja, zagrejte ih u tiganju ili mikrotalasnoj pećnici."
    ],
    nutrition: {
      calories: "50",
      fat: "2g",
      carbohydrates: "7g",
      protein: "2g"
    }
  },
  {
    id: "caviar",
    name: "Caviar",
    description: "Veganski 'kaviar' od algi. Odlična zamena za pravi kaviar.",
    yields: "4 porcije",
    prepTime: "15 minuta",
    cookTime: "5 minuta",
    ingredients: [
      "1 šolja soka od jabuke (nezaslađenog)",
      "2 kašičice agar-agar praha",
      "1/4 šolje maslinovog ulja (rashlađenog u zamrzivaču 30 minuta)",
      "1 kašičica soka od limuna",
      "1/2 kašičice nori alge (u prahu)",
      "So po ukusu"
    ],
    instructions: [
      "U maloj šerpi pomešajte sok od jabuke i agar-agar prah.",
      "Dobro promešajte da se agar-agar rastvori.",
      "Stavite šerpu na šporet i zagrejte na srednjoj vatri.",
      "Kuvajte, mešajući neprestano, dok smesa ne provri.",
      "Smanjite vatru i kuvajte još 1-2 minuta, dok se agar-agar potpuno ne rastvori.",
      "Skinite šerpu sa vatre.",
      "Dodajte sok od limuna, nori alge i so. Dobro promešajte.",
      "Smesu sipajte u bočicu sa kapaljkom ili špric.",
      "Kapajte smesu kap po kap u hladno maslinovo ulje. Kapljice će se odmah formirati u male kuglice.",
      "Ostavite kuglice u ulju 1-2 minuta da se stvrdnu.",
      "Pažljivo procedite 'kaviar' kroz cediljku.",
      "Isperite 'kaviar' hladnom vodom."
    ],
    notes: [
      "Maslinovo ulje mora biti jako hladno da bi se kuglice pravilno formirale.",
      "Možete koristiti i druge sokove umesto soka od jabuke, ali pazite da nisu previše gusti.",
      "Za intenzivniji ukus mora, dodajte više nori alge u prahu.",
      "Kaviar je najbolje služiti hladnog."
    ],
    nutrition: {
      calories: "50",
      fat: "4g",
      carbohydrates: "3g",
      protein: "0g"
    }
  },
  {
    id: "vodka",
    name: "Vodka",
    description: "Osnovni recept za pravljenje domaće votke.",
    yields: "Oko 750ml",
    prepTime: "5 minuta",
    cookTime: "Nekoliko sati (fermentacija) + destilacija",
    ingredients: [
      "5 kg šećera",
      "20 litara vode",
      "50 g suvog kvasca (za alkohol)",
      "Opciono: aktivni ugalj za filtriranje"
    ],
    instructions: [
      "U velikoj posudi, rastvorite šećer u vodi. Mešajte dok se šećer potpuno ne rastvori.",
      "Kada se rastvor ohladi na sobnu temperaturu (oko 25-30°C), dodajte suvi kvasac.",
      "Prebacite rastvor u fermentacionu posudu i zatvorite je vrenjačom.",
      "Ostavite smešu da fermentira na toplom mestu (oko 20-25°C) 7-14 dana.",
      "Nakon završene fermentacije, tečnost destilujte koristeći aparat za destilaciju.",
      "Obično se izvode dve destilacije. Prva destilacija uklanja veći deo nečistoća.",
      "Nakon destilacije, votku možete filtrirati kroz aktivni ugalj.",
      "Razblažite votku destilovanom vodom do željene jačine (obično 40% alkohola).",
      "Ostavite votku da odleži nekoliko dana pre konzumiranja."
    ],
    notes: [
      "Važno je koristiti kvalitetan kvasac namenjen za proizvodnju alkohola.",
      "Temperatura tokom fermentacije je ključna za uspešan proces.",
      "Prilikom destilacije, pažljivo odvajajte 'prvenac' i 'repove'.",
      "Legalnost proizvodnje votke zavisi od lokalnih zakona i propisa."
    ],
    nutrition: {
      calories: "64",
      protein: "0g",
      fat: "0g",
      carbohydrates: "0g"
    }
  },
  {
    id: "russian-salad",
    name: "Russian Salad",
    description: "Klasična i osvežavajuća salata savršena kao prilog ili glavno jelo.",
    yields: "6-8 servings",
    prepTime: "20 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "4 srednja krompira, oguljena i iseckana na kockice",
      "2 srednje šargarepe, oguljene i iseckane na kockice",
      "1 šolja smrznutog graška",
      "1/2 šolje kiselih krastavčića, iseckanih na kockice",
      "1/2 šolje majoneza",
      "2 kašike pavlake",
      "1 kašičica senfa",
      "So i biber po ukusu",
      "2 kuvana jaja (opciono), iseckana",
      "1/4 šolje seckanog peršuna (opciono, za dekoraciju)"
    ],
    instructions: [
      "Krompir i šargarepu stavite u šerpu, prelijte vodom i posolite. Kuvajte dok povrće ne omekša, otprilike 15-20 minuta.",
      "U posebnoj šerpi, kratko blanširajte grašak (oko 2-3 minuta) u ključaloj vodi. Ocedite.",
      "Ocedite krompir i šargarepu i ostavite da se ohlade.",
      "U velikoj činiji, pomešajte kuvani krompir, šargarepu, grašak i kisele krastavčiće.",
      "U manjoj činiji, umutite majonez, pavlaku i senf. Posolite i pobiberite po ukusu.",
      "Prelijte povrće dresingom od majoneza i nežno promešajte da se sjedini.",
      "Ako koristite, dodajte iseckana kuvana jaja.",
      "Pokrijte činiju i stavite u frižider na najmanje 30 minuta da se salata ohladi.",
      "Pre posluživanja, ukrasite seckanim peršunom, ako želite."
    ],
    notes: [
      "Za bogatiji ukus, dodajte kockice šunke ili piletine.",
      "Možete koristiti i sveži grašak umesto smrznutog, samo ga kratko blanširajte.",
      "Prilagodite količinu majoneza prema svom ukusu."
    ],
    nutrition: {
      calories: "250-300",
      fat: "15-20g",
      protein: "5-7g",
      carbohydrates: "20-25g"
    }
  },
  {
    id: "goulash",
    name: "Goulash",
    description: "Tradicionalno mađarsko jelo, bogato i puno ukusa, savršeno za hladne dane.",
    yields: "6-8 osoba",
    prepTime: "30 minuta",
    cookTime: "2-3 sata",
    ingredients: [
      "1.5 kg junećeg mesa (od plećke ili vrata), isečenog na kockice veličine 2-3 cm",
      "2 velike glavice crnog luka, sitno iseckane",
      "2 kašike ulja ili svinjske masti",
      "2 kašike slatke mlevene paprike",
      "1 kašičica ljute mlevene paprike (opciono)",
      "1 kašičica mlevenog kima",
      "1 kašičica majorana",
      "2 čena belog luka, sitno iseckana",
      "1 crvena paprika, isečena na kockice",
      "1 zelena paprika, isečena na kockice",
      "400g paradajz pelata, isečenih",
      "500g krompira, isečenog na kockice",
      "2 šargarepe, isečene na kolutiće",
      "2 litra juneće supe ili vode",
      "So i biber po ukusu",
      "Kisela pavlaka ili jogurt (za serviranje, opciono)",
      "Sveži peršun, sitno iseckan (za serviranje, opciono)"
    ],
    instructions: [
      "U velikoj šerpi ili Dutch oven-u, zagrejte ulje ili mast na srednjoj vatri.",
      "Dodajte iseckani crni luk i pržite dok ne postane mekan i staklast, oko 5-7 minuta.",
      "Dodajte juneće meso i pržite ga sa svih strana dok ne dobije braon boju.",
      "Sklonite šerpu sa vatre i dodajte slatku mlevenu papriku, ljutu papriku, kim, majoran i beli luk.",
      "Vratite šerpu na vatru i dodajte iseckanu crvenu i zelenu papriku, paradajz pelat i juneću supu.",
      "Smanjite vatru, poklopite šerpu i ostavite da se krčka 2-3 sata, ili dok meso ne postane mekano.",
      "Nakon 2 sata, dodajte iseckani krompir i šargarepu. Nastavite da krčkate oko 30 minuta.",
      "Začinite solju i biberom po ukusu.",
      "Poslužite vruće, ukrašeno kiselom pavlakom ili jogurtom i svežim peršunom."
    ],
    notes: [
      "Za bogatiji ukus, možete dodati i malo crvenog vina u gulaš.",
      "Gulaš se može čuvati u frižideru do 3 dana.",
      "Gulaš se može zamrznuti."
    ],
    nutrition: {
      calories: "450-550 kcal",
      protein: "40-50g",
      fat: "25-35g",
      carbohydrates: "20-30g"
    }
  },
  {
    id: "syrniki",
    name: "Syrniki",
    description: "Ukusne i brze palačinke od sira, savršene za doručak ili desert. Poslužuju se sa pavlakom, džemom ili medom.",
    yields: "12 syrnika",
    prepTime: "10 minuta",
    cookTime: "15 minuta",
    ingredients: [
      "500g svežeg kravljeg sira (neslanog)",
      "2 jaja",
      "4 kašike šećera",
      "1/2 kašičice ekstrakta vanile (opciono)",
      "1/4 kašičice soli",
      "6-8 kašika brašna (plus dodatno za posipanje)",
      "Biljno ulje ili puter, za prženje"
    ],
    instructions: [
      "U velikoj posudi pomešajte kravlji sir, jaja, šećer, vanilu (ako koristite) i so.",
      "Postepeno dodajte brašno, mešajući dok ne dobijete testo koje je dovoljno čvrsto da se oblikuje.",
      "Na radnoj površini pospite brašno. Uzmite jednu kašiku testa i oblikujte je u mali disk.",
      "Lagano uvaljajte syrnik u brašno sa obe strane.",
      "Zagrejte biljno ulje ili puter u velikom tiganju na srednjoj vatri.",
      "Pažljivo stavite syrnike u vruć tiganj, pazeći da ih ne pretrpate.",
      "Pržite syrnike oko 3-4 minuta sa svake strane, ili dok ne postanu zlatno smeđi.",
      "Izvadite gotove syrnike iz tiganja i stavite ih na papirni ubrus.",
      "Poslužite toplo sa pavlakom, džemom, medom ili svežim voćem."
    ],
    notes: [
      "U testo možete dodati suvo grožđe, rendanu koricu limuna ili druge začine po ukusu.",
      "Ako je testo previše lepljivo, dodajte još malo brašna, ali pazite da ne preterate.",
      "Syrniki se mogu zamrznuti nakon što se isprže."
    ],
    nutrition: {
      calories: "80-100",
      protein: "6-8g",
      fat: "4-6g",
      carbohydrates: "6-8g"
    }
  },
  {
    id: "kasha",
    name: "Kasha",
    description: "Tradicionalno jelo od heljde, jednostavno za pripremu i hranljivo. Osnovni recept koji možete prilagoditi svojim ukusima.",
    yields: "4 servings",
    prepTime: "5 minutes",
    cookTime: "20 minutes",
    ingredients: [
      "1 solja (200g) heljde",
      "2 solje (480ml) vode ili pileceg bujona",
      "2 supene kasike putera ili ulja",
      "1/2 glavice crnog luka, sitno iseckanog (opciono)",
      "So i biber po ukusu"
    ],
    instructions: [
      "Isperite heljdu pod hladnom vodom dok voda ne postane bistra.",
      "U serpi, zagrejte puter ili ulje na srednjoj temperaturi.",
      "Ako koristite luk, dodajte ga u serpu i dinstajte dok ne postane mekan i providan, oko 5 minuta.",
      "Dodajte ispranu heljdu u serpu i kratko je przite, oko 2-3 minuta, neprestano mesajuci.",
      "Dodajte vodu ili bujon u serpu. Posolite i pobiberite po ukusu.",
      "Pustite da provri, zatim smanjite vatru na nisku, poklopite i kuvajte 15-20 minuta.",
      "Sklonite sa vatre i ostavite da odstoji poklopljeno jos 5 minuta.",
      "Viljuskom razdvojite zrna heljde pre sluzenja."
    ],
    notes: [
      "Mozete dodati pecurke, sargarepu ili drugo povrce u kashu.",
      "Kasha se moze sluziti kao prilog ili kao glavno jelo.",
      "Za bogatiji ukus, koristite pileci ili povrtni bujon umesto vode."
    ],
    nutrition: {
      calories: "200-250",
      protein: "7-9g",
      fat: "8-10g",
      carbohydrates: "30-35g",
      fiber: "4-6g"
    }
  },
  {
    id: "shchi",
    name: "Shchi",
    description: "Tradicionalna ruska supa od kupusa, savršena za hladne dane.",
    yields: "6 porcija",
    prepTime: "20 minuta",
    cookTime: "1 sat 30 minuta",
    ingredients: [
      "500g goveđih kostiju ili mesa za supu",
      "2 litre vode",
      "1 veća glavica luka, sitno iseckana",
      "2 šargarepe, isečene na kolutiće",
      "400g svežeg kupusa, iseckanog",
      "2 krompira, oljuštena i isečena na kockice",
      "2 paradajza, oljuštena i isečena na kockice (ili 200g pelata)",
      "2 kašike paradajz pirea",
      "2 češnja belog luka, sitno iseckana",
      "1 lovorov list",
      "5 zrna bibera",
      "So po ukusu",
      "Sveži peršun ili mirođija, iseckani (za serviranje)",
      "Pavlaka (za serviranje, opcionalno)"
    ],
    instructions: [
      "Goveđe kosti ili meso stavite u veliki lonac i prelijte vodom. Stavite na jaku vatru da provri.",
      "Kada provri, skinite penu koja se stvara na površini. Smanjite vatru na nisku i ostavite da se krčka 1 sat.",
      "Nakon sat vremena, izvadite kosti ili meso iz lonca. Ako koristite meso, isecite ga na kockice i vratite u lonac.",
      "Dodajte luk i šargarepu u lonac i kuvajte još 15 minuta.",
      "Dodajte kupus, krompir, paradajz i paradajz pire. Promešajte i kuvajte oko 20-30 minuta.",
      "Dodajte beli luk, lovorov list i biber. Posolite po ukusu.",
      "Kuvajte još 10 minuta da se ukusi sjedine.",
      "Izvadite lovorov list pre serviranja.",
      "Poslužite shchi vruć, posuto svežim peršunom ili mirođijom."
    ],
    notes: [
      "Za jači ukus, možete koristiti kiseli kupus umesto svežeg.",
      "Možete dodati i druge vrste povrća, kao što su paprika ili celer.",
      "Shchi je još ukusniji dan nakon što se skuva."
    ],
    nutrition: {
      calories: "250-300 kcal",
      protein: "20-25g",
      carbohydrates: "25-30g",
      fat: "10-15g"
    }
  },
  {
    id: "solyanka",
    name: "Solyanka",
    description: "Gusta, kiselo-slana supa tipična za rusku i ukrajinsku kuhinju. Ova varijanta je mesna.",
    yields: "6 porcija",
    prepTime: "30 minuta",
    cookTime: "1 sat 30 minuta",
    ingredients: [
      "500g govedine za supu (npr. prsa)",
      "200g dimljene kobasice (npr. lovačka, kranjska)",
      "150g dimljene šunke",
      "150g kiselih krastavaca, isečenih na kockice",
      "1 veliki luk, sitno iseckan",
      "2 kašike paradajz pirea",
      "1 kašika ulja",
      "1.5 litra goveđe supe ili vode",
      "1 limun, isečen na kriške",
      "100g maslina, iseckanih (zelene ili crne)",
      "2 kisela paprika (opciono), sitno iseckana",
      "1 kašika kapara (opciono)",
      "So i biber po ukusu",
      "Pavlaka ili kisela pavlaka, za serviranje",
      "Sveži peršun, iseckan, za serviranje"
    ],
    instructions: [
      "Govedinu stavite u veliki lonac, prelijte vodom ili supom i pustite da provri.",
      "Smanjite vatru i kuvajte poklopljeno oko 1 sat, ili dok meso ne omekša.",
      "Izvadite meso iz lonca i ostavite da se ohladi. Supu procedite i ostavite sa strane.",
      "U velikom tiganju zagrejte ulje na srednjoj vatri. Dodajte luk i dinstajte oko 5 minuta.",
      "Dodajte paradajz pire u luk i kuvajte uz mešanje 2-3 minuta.",
      "Ohlađenu govedinu, kobasicu i šunku isecite na kockice.",
      "U lonac sa goveđom supom dodajte isečenu govedinu, kobasicu, šunku, kisele krastavce, dinstani luk sa paradajz pireom.",
      "Pustite da provri, zatim smanjite vatru i kuvajte poklopljeno još 30 minuta.",
      "Pred kraj kuvanja dodajte masline i začinite solju i biberom po ukusu.",
      "Solyanku poslužite vruću, ukrašenu kriškom limuna, kašikom pavlake i iseckanim peršunom."
    ],
    notes: [
      "Možete koristiti različite vrste mesa za soljanku, kao što su svinjetina ili piletina.",
      "Za bogatiji ukus, koristite domaću goveđu supu.",
      "Količinu kiselih krastavaca prilagodite svom ukusu."
    ],
    nutrition: {
      calories: "450-550 kcal",
      protein: "30-40g",
      fat: "25-35g",
      carbohydrates: "10-15g"
    }
  },
  {
    id: "kotlety",
    name: "Kotlety",
    description: "Tradicionalni ruski kotleti od mlevenog mesa, sočni i ukusni.",
    yields: "6-8 kotleta",
    prepTime: "20 minuta",
    cookTime: "25 minuta",
    ingredients: [
      "500g mlevena junetina (ili mešavina junetine i svinjetine)",
      "1 veća glavica crnog luka, sitno iseckana",
      "1 kriška starog hleba, bez kore",
      "1/2 šolje mleka",
      "1 jaje",
      "2 kašike svežeg peršuna, sitno iseckanog",
      "So i biber po ukusu",
      "Biljno ulje, za prženje",
      "Brašno, za valjanje (opciono)"
    ],
    instructions: [
      "Hleb natopiti u mleku i ostaviti da omekša.",
      "U velikoj činiji pomešati mleveno meso, sitno iseckani crni luk, jaje i peršun.",
      "Iz natopljenog hleba iscediti višak mleka i dodati hleb smesi sa mesom.",
      "Dobro promešati smesu rukama dok se svi sastojci ne sjedine.",
      "Začiniti solju i biberom po ukusu.",
      "Vlažnim rukama oblikovati smesu u ovalne kotlete.",
      "Ukoliko želite, kotlete možete uvaljati u brašno.",
      "U velikom tiganju zagrejati biljno ulje na srednjoj vatri.",
      "Pažljivo staviti kotlete u tiganj i pržiti ih oko 5-7 minuta sa svake strane.",
      "Izvaditi kotlete iz tiganja i staviti ih na papirni ubrus da se ocede od viška masnoće.",
      "Poslužiti toplo uz pire krompir, salatu ili povrće po izboru."
    ],
    notes: [
      "Za sočnije kotlete, možete dodati kašiku kisele pavlake u smesu.",
      "Umesto mleka, hleb možete natopiti u vodi.",
      "Kotlete možete peći i u rerni na 180°C oko 30 minuta.",
      "Za bogatiji ukus, dodajte malo belog luka u prahu u smesu."
    ],
    nutrition: {
      calories: "250-300",
      protein: "20-25g",
      fat: "15-20g",
      carbohydrates: "5-10g"
    }
  },
  {
    id: "pelmeni",
    name: "Pelmeni",
    description: "Tradicionalno rusko jelo, male punjene testenine kuvane u supi ili vodi.",
    yields: "4-6 porcija",
    prepTime: "45 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "3 šolje brašna",
      "1 jaje",
      "1 šolja hladne vode",
      "1 kašičica soli",
      "500g mlevenog mesa (mešavina govedine i svinjetine)",
      "1 veliki crni luk, sitno iseckan",
      "2 čena belog luka, izgnječena",
      "1/2 šolje hladne vode ili bujona",
      "So i biber po ukusu"
    ],
    instructions: [
      "U velikoj posudi pomešajte brašno i so. Napravite rupu u sredini, dodajte jaje i postepeno dodajte hladnu vodu.",
      "Izvadite testo na pobrašnjenu površinu i mesite ga oko 8-10 minuta, dok ne postane glatko i elastično.",
      "Oblikujte ga u loptu, umotajte u plastičnu foliju i ostavite da odstoji 30 minuta.",
      "U velikoj posudi pomešajte mleveno meso, iseckani crni luk, izgnječeni beli luk, hladnu vodu ili bujon, so i biber.",
      "Razvucite testo na tanko, oko 2-3 mm debljine.",
      "Koristeći okruglu modlu ili čašu (prečnika oko 5-6 cm), isecite krugove od testa.",
      "Na svaki krug testa stavite oko 1 kašičicu punjenja.",
      "Presavijte krug testa na pola, formirajući polumesec, i dobro pritisnite ivice da se zatvore.",
      "Zatim, spojite krajnje polumeseca, praveći oblik malog 'uha'.",
      "U velikom loncu prokuvajte slanu vodu ili supu.",
      "Dodajte pelmene i kuvajte ih dok ne isplivaju na površinu, a zatim ih kuvajte još 5-7 minuta.",
      "Izvadite pelmene šupljikavom kašikom i servirajte ih vruće."
    ],
    notes: [
      "Pelmeni se mogu zamrznuti. Rasporedite ih na poslužavnik obložen papirom za pečenje i zamrznite.",
      "Zamrznute pelmene kuvajte direktno iz zamrzivača, dodajući još 2-3 minuta vremenu kuvanja.",
      "Možete koristiti i druge vrste mesa za punjenje.",
      "Dodajte začine po ukusu, kao što su kim, korijander ili peršun."
    ],
    nutrition: {
      calories: "400-500",
      protein: "25-30g",
      fat: "20-25g",
      carbohydrates: "40-50g"
    }
  },
  {
    id: "varenya",
    name: "Varenya",
    description: "Džem od bobica, popularan u Rusiji i istočnoj Evropi. Odličan za premazivanje na hleb, palačinke ili kao dodatak desertima.",
    yields: "Oko 4 tegle (250ml)",
    prepTime: "20 minuta",
    cookTime: "45-60 minuta",
    ingredients: [
      "1 kg bobica (jagode, maline, borovnice, ribizle, ili kombinacija)",
      "1 kg šećera",
      "1/2 šolje vode (opciono, ako su bobice suve)",
      "1 kašičica limunovog soka (opciono, za dodatnu svežinu i konzerviranje)"
    ],
    instructions: [
      "Operite i očistite bobice. Uklonite peteljke i oštećene bobice.",
      "U veliku, duboku šerpu stavite bobice.",
      "Preko bobica sipajte šećer.",
      "Ako koristite suve bobice, dodajte 1/2 šolje vode.",
      "Ostavite da odstoji 2-3 sata (ili preko noći u frižideru) da bobice puste sok.",
      "Stavite šerpu na srednju vatru.",
      "Kada provri, smanjite vatru i kuvajte, povremeno mešajući, oko 45-60 minuta.",
      "Skidajte penu koja se stvara na površini.",
      "Proverite gustinu džem sipanjem male količine na hladan tanjir.",
      "Ako koristite, dodajte limunov sok 5 minuta pre kraja kuvanja.",
      "Sklonite šerpu sa vatre i ostavite da se malo ohladi.",
      "Sipajte vruć džem u sterilisane tegle.",
      "Zatvorite tegle sterilizovanim poklopcima.",
      "Okrenite tegle naopako i ostavite da se ohlade."
    ],
    notes: [
      "Za sterilizaciju tegli: operite tegle i poklopce u vrućoj vodi sa sapunom.",
      "Stavite ih u rernu zagrejanu na 100°C na 15 minuta.",
      "Možete koristiti različite vrste bobica, prilagođavajući količinu šećera ukusu.",
      "Za džem glatke teksture, možete blendirati bobice pre kuvanja."
    ],
    nutrition: {
      calories: "50-60 kcal",
      carbohydrates: "13-15g",
      sugar: "12-14g"
    }
  },
  {
    id: "kvass",
    name: "Kvass",
    description: "Osvežavajuće i blago kiselo piće, idealno za letnje dane. Tradicionalno se pravi od ražanog hleba.",
    yields: "Oko 2 litra",
    prepTime: "20 minuta",
    cookTime: "3-4 dana (fermentacija)",
    ingredients: [
      "500g ražanog hleba (ustajalog)",
      "3 litre vode",
      "150g šećera",
      "20g suvog kvasca",
      "10-15 suvog grožđa (opciono)"
    ],
    instructions: [
      "Isecite ražani hleb na kockice i osušite ih u rerni na niskoj temperaturi (oko 150°C) dok ne postanu tamno smeđe.",
      "U veliku posudu stavite prepečeni hleb.",
      "Prokuvajte vodu i prelijte preko hleba. Ostavite da stoji 3-4 sata, ili preko noći.",
      "Procedite tečnost kroz gazu ili sitno sito, odvajajući hleb.",
      "U proceđenu tečnost dodajte šećer i promešajte dok se ne rastvori.",
      "U maloj posudi razmutite suvi kvasac sa malo tople vode i ostavite da se aktivira 5-10 minuta.",
      "Dodajte aktivirani kvasac u tečnost od hleba i dobro promešajte.",
      "Sipajte kvas u staklene boce ili tegle, ostavljajući malo prostora na vrhu.",
      "Ubacite po nekoliko suvog grožđa u svaku bocu (opciono).",
      "Zatvorite boce, ali ne previše čvrsto, kako bi gasovi mogli da izlaze.",
      "Ostavite boce na sobnoj temperaturi da fermentiraju 2-3 dana.",
      "Nakon 2-3 dana, prebacite boce u frižider da zaustavite fermentaciju.",
      "Kvas je spreman za konzumiranje nakon hlađenja."
    ],
    notes: [
      "Vreme fermentacije zavisi od temperature prostorije.",
      "Količinu šećera možete prilagoditi svom ukusu.",
      "Za intenzivniji ukus hleba, koristite tamniji i aromatičniji ražani hleb.",
      "Kvas čuvajte u frižideru i konzumirajte u roku od nekoliko dana."
    ],
    nutrition: {
      calories: "80-120",
      carbohydrates: "15-25g",
      sugar: "10-20g"
    }
  },
  {
    id: "smetana",
    name: "Smetana",
    description: "Gusta, kremasta pavlaka, savršena za soseve, supe, i deserte.",
    yields: "Oko 500 ml",
    prepTime: "5 minuta",
    cookTime: "30-45 minuta",
    ingredients: [
      "1 l punomasnog mleka (najmanje 3.2% masti)",
      "2 kašike limunovog soka ili belog vinskog sirćeta",
      "Prstohvat soli (opciono)"
    ],
    instructions: [
      "U šerpu sipati mleko i zagrevati na srednjoj vatri.",
      "Kada mleko počne da se pari (ali ne vri!), smanjiti vatru na minimum.",
      "Dodati limunov sok ili sirće i so (ako koristite).",
      "Nastaviti kuvanje na veoma niskoj temperaturi, mešajući povremeno, oko 30-45 minuta.",
      "Skinuti sa vatre i ostaviti da se malo ohladi.",
      "Procediti smesu kroz gazu ili sitno sito obloženo gazom.",
      "Prebaciti u staklenu posudu i ostaviti u frižideru najmanje 2-3 sata."
    ],
    notes: [
      "Što je mleko masnije, smetana će biti gušća.",
      "Vreme kuvanja može varirati u zavisnosti od temperature i masnoće mleka.",
      "Za gušću smetana, ostavite je duže u frižideru.",
      "Možete dodati i kašiku kisele pavlake na početku kuvanja da ubrzate proces fermentacije."
    ],
    nutrition: {
      calories: "200-250 kcal",
      fat: "18-25g",
      protein: "3-4g",
      carbohydrates: "4-5g"
    }
  },
  {
    id: "tvorog",
    name: "Tvorog",
    description: "Jednostavan i brz recept za domaći sir 'Tvorog'.",
    yields: "Otprilike 500g sira",
    prepTime: "5 minuta",
    cookTime: "60 minuta",
    ingredients: [
      "2 litra punomasnog mleka (nikako UHT)",
      "1/2 čajne kašike soli (opciono)",
      "2 supene kašike soka od limuna ili sirćeta (opciono, za brže zgrušavanje)"
    ],
    instructions: [
      "U veliku šerpu sipati mleko. Dodati so, ako koristite.",
      "Staviti šerpu na srednju vatru i zagrevati mleko do tačke pre ključanja (oko 80-90°C).",
      "Važno je da mleko ne proključa. Mešajte povremeno da se ne zalepi za dno.",
      "Kada primetite da se počinju formirati mali grudvice (oko 45-60 minuta), dodajte sok od limuna ili sirće.",
      "Nastavite sa kuvanjem na niskoj temperaturi još 5-10 minuta, dok se surutka ne odvoji od grudvica.",
      "Isključite vatru i ostavite da se prohladi 15-20 minuta.",
      "Pripremite veliku posudu obloženu gazom (duplo ili trostruko presavijenom).",
      "Pažljivo sipajte mleko sa grudvicama kroz gazu, tako da se sir zadrži u gazi.",
      "Kada se većina surutke iscedila, zavežite krajeve gaze i formirajte 'vrećicu'.",
      "Okačite vrećicu sa sirom iznad posude da se preostala surutka cedi.",
      "Ovo može trajati 2-4 sata, ili preko noći u frižideru, za gušći sir.",
      "Kada se sir iscedio do željene gustine, izvadite ga iz gaze i prebacite u posudu."
    ],
    notes: [
      "Što duže cedite sir, biće gušći.",
      "Surutka se može koristiti za pravljenje hleba ili kao dodatak smutijima.",
      "Ako ne koristite sok od limuna/sirće, proces zgrušavanja može trajati duže.",
      "Za kremastiji sir, nemojte ga cediti predugo."
    ],
    nutrition: {
      calories: "100-150 kcal",
      protein: "15-20g",
      fat: "3-8g",
      carbohydrates: "2-5g"
    }
  },
  {
    id: "buckwheat",
    name: "Buckwheat",
    description: "Brz i jednostavan recept za ukusnu i hranljivu kašu od heljde.",
    yields: "2 osobe",
    prepTime: "5 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "1 šolja heljde",
      "2 šolje vode ili povrtnog bujona",
      "1 kašika maslinovog ulja",
      "So i biber po ukusu",
      "Opciono: 1/4 šolje seckanog luka, 1/2 šolje seckanih pečuraka"
    ],
    instructions: [
      "Heljdu dobro isprati pod hladnom vodom.",
      "U šerpi zagrejati maslinovo ulje na srednjoj vatri.",
      "(Opciono) Dodati seckani luk i pečurke i dinstati dok ne omekšaju, oko 5 minuta.",
      "Dodati ispranu heljdu u šerpu.",
      "Dodati vodu ili povrtni bujon i promešati.",
      "Posoliti i pobiberiti po ukusu.",
      "Pustiti da provri, a zatim smanjiti vatru, poklopiti i kuvati 15-20 minuta.",
      "Skloniti sa vatre i ostaviti da odstoji poklopljeno još 5 minuta.",
      "Razmrdati viljuškom pre serviranja."
    ],
    notes: [
      "Za bogatiji ukus, možete koristiti pileći ili goveđi bujon umesto vode.",
      "Heljdu možete ispeći u suvom tiganju nekoliko minuta pre kuvanja da biste pojačali njen orašasti ukus.",
      "U gotovu kašu možete dodati seckano sveže bilje kao što su peršun ili vlašac.",
      "Kašu od heljde možete poslužiti kao prilog ili kao glavno jelo uz dodatak pečenog povrća ili mesa."
    ],
    nutrition: {
      calories: "200",
      protein: "7g",
      fat: "3g",
      carbohydrates: "40g",
      fiber: "5g"
    }
  },
  {
    id: "russian-tea",
    name: "Russian Tea",
    description: "Osvežavajući i aromatični napitak, savršen za hladne dane.",
    yields: "8 šoljica",
    prepTime: "10 minuta",
    cookTime: "20 minuta",
    ingredients: [
      "8 šoljica vode",
      "6 kesica crnog čaja (ili 6 kašičica rastresitog čaja)",
      "1 šoljica soka od pomorandže",
      "1/2 šoljice soka od ananasa",
      "1/4 šoljice soka od limuna",
      "1/2 šoljice šećera (ili više po ukusu)",
      "1 kašičica mlevenog cimeta",
      "1/2 kašičice mlevenog karanfilića"
    ],
    instructions: [
      "U velikoj šerpi, prokuvajte vodu.",
      "Skinite sa vatre i dodajte kesice čaja. Ostavite da odstoji 5 minuta, zatim izvadite kesice.",
      "Umešajte sok od pomorandže, sok od ananasa, sok od limuna, šećer, cimet i karanfilić.",
      "Vratite na šporet i lagano kuvajte na niskoj temperaturi 15 minuta, povremeno mešajući.",
      "Probajte i dodajte još šećera po ukusu ako je potrebno.",
      "Procedite kroz sito ako koristite rastresiti čaj ili začine.",
      "Poslužite toplo."
    ],
    notes: [
      "Možete dodati malo burbona ili ruma za odraslu verziju.",
      "Ukrasite kriškom pomorandže ili štapićem cimeta prilikom posluživanja.",
      "Čuvajte u frižideru do 3 dana. Zagrejte pre posluživanja."
    ],
    nutrition: {
      calories: "80",
      sugar: "18g"
    }
  }
];